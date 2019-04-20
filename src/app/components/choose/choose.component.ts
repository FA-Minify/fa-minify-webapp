import { Component, OnInit } from '@angular/core';
import { IconService, ParsedIcon, IconWrapper } from '../../services/icon.service';
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

  public numberOfSelectedIcons = 0;
  public iconsRemoved = 887;
  public spaceSaved = '1000kb';

  constructor(
    protected readonly iconService: IconService,
    protected readonly router: Router
  ) { }

  public ngOnInit() {
    setTimeout(() => {
      this.icons = this.iconService.availableIcons;
      if (!this.icons) {
        this.router.navigate(['/']);
      }
    });
  }

  public selectionChanged() {

    const numberOfIcons = this.types
      .map(_type => this.icons[_type].length)
      .reduce((curr, prev) => curr + prev, 0);

    this.numberOfSelectedIcons = this.types.map(_type => {
      return Object.keys(this.icons[_type] || {})
        .filter(k => this.icons[_type][k] && this.icons[_type][k].selected)
        .length;
    }).reduce((prev, curr) => prev + curr, 0);

    this.iconsRemoved = numberOfIcons - this.numberOfSelectedIcons;

    this.spaceSaved = this.iconService.getSavedData(this.icons);
  }

  public selectType(type: IconType | 'all') {
    this.selectedTypes[type] = !this.selectedTypes[type];
  }

  public downloadFaMinifed() {
    this.iconService.download(this.icons);
  }

}
