import { Component, Input, ChangeDetectionStrategy, Output, EventEmitter } from '@angular/core';
import { IconService, ParsedIcon } from '../../services/icon.service';

@Component({
  selector: 'fm-fa-icon',
  templateUrl: './fa-icon.component.html',
  styleUrls: ['./fa-icon.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FAIconComponent {

  @Input()
  public icon!: ParsedIcon;

  @Output()
  public doToggleSelection = new EventEmitter<{ iconName: string }>();

  constructor(protected readonly iconService: IconService) { }

  public selectIcon() {
    this.doToggleSelection.emit({ iconName: this.icon.name });
  }
}
