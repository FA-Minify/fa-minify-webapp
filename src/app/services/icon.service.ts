import { Injectable } from '@angular/core';
import { getIconsFromFile, IconType } from 'fa-minify';

@Injectable({ providedIn: 'root' })
export class IconService {

  public availableIcons: { [type in IconType]?: string[] } = {}

  constructor() {
  }

  public loadIcons(fileContent: string) {
    this.availableIcons = getIconsFromFile(fileContent);
  }
}
