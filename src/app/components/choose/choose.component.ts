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

  public filter: string = '';
  public types: Array<IconType> = ['far', 'fas', 'fal', 'fab'];

  public icons: IconWrapper<ParsedIcon[]> | null = null;
  public selectedTypes: Record<IconType, boolean> = { fab: true, far: true, fas: true, fal: true, fat: true };

  public numberOfSelectedIcons = 0;
  public iconsRemoved = 887;
  public spaceSaved = '1000kb';

  public get anyTypeSelected() {
    return Object.keys(this.selectedTypes || {}).some(k => !!this.selectedTypes[k as IconType]);
  }

  constructor(
    protected readonly iconService: IconService,
    protected readonly router: Router
  ) { }

  public ngOnInit() {
    setTimeout(() => {
      this.icons = this.iconService.availableIcons!;
      if (!this.icons) {
        this.router.navigate(['/']);
      }
    });
  }

  public selectionChanged() {

    const numberOfIcons = this.types
      .map(_type => this.icons?.[_type as IconType]?.length ?? 0)
      .reduce((curr, prev) => curr + prev, 0);

    this.numberOfSelectedIcons = this.types.map(_type => {
      return Object.keys(this.icons?.[_type as IconType] || {})
        .filter(k => this.icons?.[_type as IconType]?.[parseInt(k, 10)]?.selected)
        .length;
    }).reduce((prev, curr) => prev + curr, 0);

    this.iconsRemoved = numberOfIcons - this.numberOfSelectedIcons;

    if (this.icons)
      this.spaceSaved = this.iconService.getSavedData(this.icons);
  }

  public selectType(type: IconType) {
    this.selectedTypes[type] = !this.selectedTypes[type];
  }

  public downloadFaMinifed() {
    if (this.icons)
      this.iconService.download(this.icons);
  }

}
