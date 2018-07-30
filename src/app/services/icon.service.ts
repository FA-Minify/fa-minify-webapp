import { Injectable } from '@angular/core';
import { getIconsFromFile, IconType } from 'fa-minify';

@Injectable({ providedIn: 'root' })
export class IconService {

  public availableIcons: { [type in IconType]: { [iconName: string]: any; } } = {
    fab: {}, fal: {}, far: {}, fas: {}
  };

  constructor() {
  }

  public loadIcons(fileContent: string) {
    this.availableIcons = getIconsFromFile(fileContent);
  }
}
