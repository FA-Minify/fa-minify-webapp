import { Injectable } from '@angular/core';
import { getIconsFromFile, IconType, removeUnusedIcons } from 'fa-minify';

export interface ParsedIcon {
  width: number;
  height: number;
  unknown: Array<unknown>;
  unicode: string;
  data: string;
  name: string;
  selected: boolean;
}

export interface IconWrapper<T> {
  fab: T;
  fal: T;
  far: T;
  fas: T;
  fat: T;
}

@Injectable({ providedIn: 'root' })
export class IconService {

  public fileContent?: string;

  public emptyIcons: IconWrapper<Array<ParsedIcon>> = { fab: [], fal: [], far: [], fas: [], fat: [] };
  public availableIcons: IconWrapper<Array<ParsedIcon>> | null = null;

  public loadIcons(fileContent: string) {
    this.fileContent = fileContent;
    const fileIcons = getIconsFromFile(fileContent);

    if (!fileIcons) {
      return;
    }

    this.availableIcons = JSON.parse(JSON.stringify(this.emptyIcons)) as IconWrapper<ParsedIcon[]>;

    for (const type in fileIcons) {
      const iconType = type as IconType;
      this.availableIcons[iconType] = Object.keys(fileIcons[iconType] || {}).map(iconKey => {
        return {
          width: fileIcons[iconType][iconKey][0],
          height: fileIcons[iconType][iconKey][1],
          unknown: fileIcons[iconType][iconKey][2],
          unicode: fileIcons[iconType][iconKey][3],
          data: fileIcons[iconType][iconKey][4],
          name: iconKey,
          selected: false
        } as ParsedIcon;
      });
    }
    Object.keys(fileIcons).forEach((type) => {

    });

    return this.availableIcons;
  }

  public getFile(icons: IconWrapper<Array<ParsedIcon>>) {
    const cfg: Record<IconType, Array<string>> = { far: [], fal: [], fas: [], fab: [], fat: [] };

    Object.keys(cfg).map(type => {
      const iconType = type as IconType;
      const typeIcons = (icons[iconType] || []) as Array<ParsedIcon>;
      typeIcons.filter((icon) => icon.selected).forEach(icon => {
        cfg[iconType].push(icon.name);
      });
    });

    return removeUnusedIcons(this.fileContent!, { usedIcons: cfg });
  }

  public getSavedData(icons: IconWrapper<Array<ParsedIcon>>) {
    const shrinked = this.getFile(icons);
    const savedBytes = Math.max((this.fileContent || '').length - (shrinked || '').length, 0);

    if (savedBytes > 1_000_000) {
      const savedMb = (savedBytes / 1_000_000);

      return (parseInt((savedMb * 100) + '', 10) / 100) + 'mb';
    }

    if (savedBytes > 1_000) {
      const savedKb = (savedBytes / 1_000);
      return (parseInt((savedKb * 100) + '', 10) / 100) + 'kb';
    }

    return savedBytes + 'bytes';

  }

  public download(icons: IconWrapper<Array<ParsedIcon>>) {
    const shrinked = this.getFile(icons);
    const blob = new Blob([shrinked], { type: 'text/javascript' });
    const objUrl = window.URL.createObjectURL(blob);
    const hiddenElement = document.createElement('a');
    hiddenElement.href = objUrl;
    hiddenElement.target = '_blank';
    hiddenElement.download = 'all.fa-minified.js';
    hiddenElement.click();
  }
}
