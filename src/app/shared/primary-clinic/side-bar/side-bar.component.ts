import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SideBarComponent implements OnInit {

  mode = false;
  dark = false;
  menus = [
    {
      level: 1,
      title: 'Clinic',
      icon: 'team',
      disabled: false,
      children: [
        {
          level: 2,
          title: 'Doctor',
          icon: 'user',
          disabled: false,
          link: '/clinic/doctor'
        },
        {
          level: 2,
          title: 'Add Patient',
          icon: 'user-add',
          disabled: false,
          link: '/clinic/add-patient'
        },
      ]
    },
    {
      level: 1,
      title: 'Patient',
      icon: 'team',
      disabled: false,
      link: '/patients'
    }
  ];

  constructor(
    protected router: Router,
    protected activatedRoute: ActivatedRoute
  ) {
  }

  public ngOnInit(): void {
  }

  public handleOpenSubmenu(children: {[key: string]: any}[]): boolean {
    const currentUrl = this.router.url;
    const hasSelectedChild = children.some(child => child['link'] === currentUrl);
    if (hasSelectedChild) {
      return true;
    }
    return false;
  }

}
