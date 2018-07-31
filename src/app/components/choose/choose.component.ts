import { Component, OnInit } from '@angular/core';
import { IconService } from '../../services/icon.service';
import { IconType } from '../../../../node_modules/fa-minify/dist';
import { CATEGORIES } from '../../data/categories.constants';
import { ICONS } from '../../data/icons.constants';

@Component({
  selector: 'fm-choose',
  templateUrl: './choose.component.html',
  styleUrls: ['./choose.component.scss']
})
export class ChooseComponent {
  public categories = CATEGORIES;
  public allIcons = ICONS;

  public filter: string;
  public types = ['fal', 'far', 'fas', 'fab'];

  public selectedIcons: { [type in IconType]: { [iconName: string]: boolean } } = {
    fab: {}, far: {}, fas: {}, fal: {}
  }

  constructor(protected readonly IconService: IconService) { }

  public get icons() {
    return this.IconService.availableIcons || {};
  }

  public matchesFilter(iconName: string) {
    return !this.filter || iconName.toLowerCase().includes(this.filter.toLowerCase());
  }

  public toggleSelection(type: IconType, iconName: string) {
    this.selectedIcons[type][iconName] = !this.selectedIcons[type][iconName];
  }

  public hasIcons(type: IconType) {
    return this.icons && this.icons[type] && Object.keys(this.icons[type] || {}).length > 0;
  }

}
