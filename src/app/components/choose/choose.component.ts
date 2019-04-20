import { Component, OnInit } from '@angular/core';
import { IconService } from '../../services/icon.service';
import { IconType } from '../../../../node_modules/fa-minify/dist';
import { CATEGORIES } from '../../data/categories.constants';
import { ICONS } from '../../data/icons.constants';
import { Router } from '@angular/router';

@Component({
  selector: 'fm-choose',
  templateUrl: './choose.component.html',
  styleUrls: ['./choose.component.scss']
})
export class ChooseComponent implements OnInit {
  public categories = CATEGORIES;
  public allIcons = ICONS;

  public filter: string;
  public types = ['far', 'fas', 'fal', 'fab'];

  public icons = null;

  public selectedTypes = { all: true, fab: true, far: true, fas: true, fal: true };
  public selectedIcons = { fab: {}, far: {}, fas: {}, fal: {} };
  public visibleIcons = { fab: [], far: [], fas: [], fal: [] };
  public numberOfVisibleIcons = { fab: 20, far: 20, fas: 20, fal: 20 };

  public numberOfSelectedIcons = 0;

  constructor(
    protected readonly iconService: IconService,
    protected router: Router
  ) { }

  public ngOnInit() {
    setTimeout(() => {
      this.icons = this.iconService.availableIcons;
      if (!this.icons) {
        this.router.navigate(['/']);
      } else {
        this.visibleIconsChanged();
      }
    });
  }

  public matchesFilter(iconName: string) {
    return !this.filter || iconName.toLowerCase().includes(this.filter.toLowerCase());
  }

  public toggleSelection(type: IconType, iconName: string) {
    this.selectedIcons[type][iconName] = !this.selectedIcons[type][iconName];
    this.numberOfSelectedIcons = this.types.map(_type => {
      return Object.keys(this.selectedIcons[_type] || {})
        .filter(k => !!this.selectedIcons[_type][k])
        .length;
    }).reduce((prev, curr) => prev + curr, 0);
  }

  public hasMatchingIcons(type: IconType) {
    return this.icons[type].some(i => this.matchesFilter(i[5]));
  }

  public selectType(type: IconType | 'all') {
    this.selectedTypes[type] = !this.selectedTypes[type];
    this.numberOfVisibleIcons[type] = 20;
    this.visibleIconsChanged();
  }

  public filterChanged($event: string) {
    this.filter = $event;
    this.visibleIconsChanged();
  }

  public showMoreIcons(type: IconType) {
    this.numberOfVisibleIcons[type] += 20;
    this.visibleIconsChanged();
  }

  private visibleIconsChanged() {
    this.types.forEach(type => {
      this.visibleIcons[type] = (this.icons[type] || [])
        .filter(icon => this.matchesFilter(icon[5]))
        .slice(0, this.numberOfVisibleIcons[type]);
    });
  }
}
