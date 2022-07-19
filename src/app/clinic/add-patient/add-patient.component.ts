import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators } from '@angular/forms';
import {NzMessageService} from 'ng-zorro-antd/message';
import {NzUploadFile} from 'ng-zorro-antd/upload';
import {catchError, from, mergeMap, take, throwError} from 'rxjs';
import {WebStorageService} from 'src/app/services/web-storage.service';

@Component({
  selector: 'app-add-patient',
  templateUrl: './add-patient.component.html',
  styleUrls: ['./add-patient.component.scss']
})
export class AddPatientComponent implements OnInit {

  public uploading = false;

  public fileList: NzUploadFile[] = [];

  public validateForm!: FormGroup;

  public fileText: string = '';

  constructor(
    protected webStorage: WebStorageService,
    private msg: NzMessageService
  ) {
    this.validateForm = new FormGroup({
      id: new FormControl(null, [Validators.required]),
      medicare: new FormControl(null, [Validators.required])
    });
  }

  public ngOnInit(): void {
  }

  public handleUploadFile() {
    this.uploading = true;
    return this.webStorage.uploadFileAsync(this.fileList)
      .pipe(
        catchError(_ => {
          this.msg.error('Upload Failed');
          return throwError(_);
        })
      )
      .subscribe(_ => {
        this.uploading = false;
        this.fileList = [];
        this.msg.success('Upload Success');
      });
  }

  submitForm(): void {
    if (this.validateForm.valid) {
      console.log('submit', this.validateForm.value);
    } else {
      Object.values(this.validateForm.controls).forEach(control => {
        if (control.invalid) {
          control.markAsDirty();
          control.updateValueAndValidity({ onlySelf: true });
        }
      });
    }
  }

  public beforeUpload = (file: NzUploadFile): boolean => {
    this.fileList = this.fileList.concat(file);
    // @ts-ignore
    from(file.text()).pipe(take(1)).subscribe(_ => this.fileText = _);
    return false;
  };

  public handleRemoveFile = (file: NzUploadFile): boolean => {
    this.fileList = [];
    this.fileText = '';
    return true;
  };

}
