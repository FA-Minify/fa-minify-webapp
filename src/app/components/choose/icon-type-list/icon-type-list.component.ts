import { Component, Input, OnChanges, OnInit, SimpleChanges, Output, EventEmitter } from '@angular/core';
import { IconType } from 'fa-minify';
import { ParsedIcon } from '../../../services/icon.service';

@Component({
  selector: 'fm-icon-type-list',
  templateUrl: './icon-type-list.component.html',
  styleUrls: ['./icon-type-list.component.scss']
})
export class IconTypeListComponent implements OnChanges, OnInit {

  @Input() public icons: Array<ParsedIcon>;
  @Input() public iconType: IconType;
  @Input() public filter: string;

  @Output() public selectionChanged = new EventEmitter<void>();

  public numberOfVisibleIcons = 20;

  public visibleIcons: Array<ParsedIcon> = [];

  public ngOnInit() {
    this.checkVisibleIcons();
  }

  public ngOnChanges({ filter }: SimpleChanges) {
    if (filter) {
      this.checkVisibleIcons();
    }
  }

  public showMoreIcons() {
    this.numberOfVisibleIcons += 20;
    this.checkVisibleIcons();
  }

  public toggleSelection(icon: ParsedIcon) {
    icon.selected = !icon.selected;
    this.selectionChanged.emit();
  }

  protected checkVisibleIcons() {
    this.visibleIcons = (this.icons || [])
      .filter(icon => this.matchesFilter(icon))
      .slice(0, this.numberOfVisibleIcons);
  }

  protected matchesFilter(icon: ParsedIcon) {
    const lowerIconName = (icon.name || '').toLowerCase();
    const lowerFilter = (this.filter || '').toLowerCase();
    return lowerIconName.includes(lowerFilter);
  }

}
