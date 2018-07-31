import { IconType } from 'fa-minify';

export interface Icon {
  unicode: string,
  label: string,
  name: string,
  styles: Array<IconType>,
  membership: {
    free: Array<IconType>,
    pro: Array<IconType>,
  }
}

/**
 * The FontAwesome Website uses Agolia to manage their icon metadata and search queries
 * we can use these queries to read all icons (their names, labels etc..). 
 * 
 * just go to https://fontawesome.com/icons fire up the dev-tools network tab and filter for `"query"`
 * currently (31.07.2018) it does 3 requests
 * 
 * the first one reads all available categories (it has the following body form data parameter: `facetFilters: [["type:category"]]"` )
 * the second and third ones query all icons including their metadata and these are the requests that are interesting for us in this file
 *  
 * with the following little JS Snippet we remove unnecessary properties so that we do not have to save so much data:
 *
 * ```
  var response = <hits property of httpResponse>;
  var short_styles = ['far', 'fal', 'fas', 'fab'];
  var long_styles = ['regular', 'light', 'solid', 'brands'];
  var convert = (style) => {
    return short_styles[long_styles.indexOf(style)];
  };

  'export const ICONS: Icon[] =' + JSON.stringify((response || []).map(i => {
    return {
      unicode: i.unicode,
      label: i.label,
      name: i.name,
      styles: i.styles.map(convert),
      membership: {
        free: i.membership.free.map(convert),
        pro: i.membership.pro.map(convert)
      }
    }
  }), null, 2);
  ```
*/


export const ICONS: Icon[] = [
  {
    "unicode": "f63f",
    "label": "Zhihu",
    "name": "zhihu",
    "styles": [
      "fab"
    ],
    "membership": {
      "free": [
        "fab"
      ],
      "pro": [
        "fab"
      ]
    }
  },
  {
    "unicode": "f431",
    "label": "YouTube Square",
    "name": "youtube-square",
    "styles": [
      "fab"
    ],
    "membership": {
      "free": [
        "fab"
      ],
      "pro": [
        "fab"
      ]
    }
  },
  {
    "unicode": "f167",
    "label": "YouTube",
    "name": "youtube",
    "styles": [
      "fab"
    ],
    "membership": {
      "free": [
        "fab"
      ],
      "pro": [
        "fab"
      ]
    }
  },
  {
    "unicode": "f2b1",
    "label": "Yoast",
    "name": "yoast",
    "styles": [
      "fab"
    ],
    "membership": {
      "free": [
        "fab"
      ],
      "pro": [
        "fab"
      ]
    }
  },
  {
    "unicode": "f157",
    "label": "Yen Sign",
    "name": "yen-sign",
    "styles": [
      "fas",
      "far",
      "fal"
    ],
    "membership": {
      "free": [
        "fas"
      ],
      "pro": [
        "fas",
        "far",
        "fal"
      ]
    }
  },
  {
    "unicode": "f1e9",
    "label": "Yelp",
    "name": "yelp",
    "styles": [
      "fab"
    ],
    "membership": {
      "free": [
        "fab"
      ],
      "pro": [
        "fab"
      ]
    }
  },
  {
    "unicode": "f414",
    "label": "Yandex International",
    "name": "yandex-international",
    "styles": [
      "fab"
    ],
    "membership": {
      "free": [
        "fab"
      ],
      "pro": [
        "fab"
      ]
    }
  },
  {
    "unicode": "f413",
    "label": "Yandex",
    "name": "yandex",
    "styles": [
      "fab"
    ],
    "membership": {
      "free": [
        "fab"
      ],
      "pro": [
        "fab"
      ]
    }
  },
  {
    "unicode": "f19e",
    "label": "Yahoo Logo",
    "name": "yahoo",
    "styles": [
      "fab"
    ],
    "membership": {
      "free": [
        "fab"
      ],
      "pro": [
        "fab"
      ]
    }
  },
  {
    "unicode": "f23b",
    "label": "Y Combinator",
    "name": "y-combinator",
    "styles": [
      "fab"
    ],
    "membership": {
      "free": [
        "fab"
      ],
      "pro": [
        "fab"
      ]
    }
  },
  {
    "unicode": "f169",
    "label": "Xing Square",
    "name": "xing-square",
    "styles": [
      "fab"
    ],
    "membership": {
      "free": [
        "fab"
      ],
      "pro": [
        "fab"
      ]
    }
  },
  {
    "unicode": "f168",
    "label": "Xing",
    "name": "xing",
    "styles": [
      "fab"
    ],
    "membership": {
      "free": [
        "fab"
      ],
      "pro": [
        "fab"
      ]
    }
  },
  {
    "unicode": "f412",
    "label": "Xbox",
    "name": "xbox",
    "styles": [
      "fab"
    ],
    "membership": {
      "free": [
        "fab"
      ],
      "pro": [
        "fab"
      ]
    }
  },
  {
    "unicode": "f497",
    "label": "X-Ray",
    "name": "x-ray",
    "styles": [
      "fas",
      "far",
      "fal"
    ],
    "membership": {
      "free": [
        "fas"
      ],
      "pro": [
        "fas",
        "far",
        "fal"
      ]
    }
  },
  {
    "unicode": "f0ad",
    "label": "Wrench",
    "name": "wrench",
    "styles": [
      "fas",
      "far",
      "fal"
    ],
    "membership": {
      "free": [
        "fas"
      ],
      "pro": [
        "fas",
        "far",
        "fal"
      ]
    }
  },
  {
    "unicode": "f298",
    "label": "WPForms",
    "name": "wpforms",
    "styles": [
      "fab"
    ],
    "membership": {
      "free": [
        "fab"
      ],
      "pro": [
        "fab"
      ]
    }
  },
  {
    "unicode": "f2de",
    "label": "WPExplorer",
    "name": "wpexplorer",
    "styles": [
      "fab"
    ],
    "membership": {
      "free": [
        "fab"
      ],
      "pro": [
        "fab"
      ]
    }
  },
  {
    "unicode": "f297",
    "label": "WPBeginner",
    "name": "wpbeginner",
    "styles": [
      "fab"
    ],
    "membership": {
      "free": [
        "fab"
      ],
      "pro": [
        "fab"
      ]
    }
  },
  {
    "unicode": "f411",
    "label": "Wordpress Simple",
    "name": "wordpress-simple",
    "styles": [
      "fab"
    ],
    "membership": {
      "free": [
        "fab"
      ],
      "pro": [
        "fab"
      ]
    }
  },
  {
    "unicode": "f19a",
    "label": "WordPress Logo",
    "name": "wordpress",
    "styles": [
      "fab"
    ],
    "membership": {
      "free": [
        "fab"
      ],
      "pro": [
        "fab"
      ]
    }
  },
  {
    "unicode": "f159",
    "label": "Won Sign",
    "name": "won-sign",
    "styles": [
      "fas",
      "far",
      "fal"
    ],
    "membership": {
      "free": [
        "fas"
      ],
      "pro": [
        "fas",
        "far",
        "fal"
      ]
    }
  },
  {
    "unicode": "f514",
    "label": "Wolf Pack-battalion",
    "name": "wolf-pack-battalion",
    "styles": [
      "fab"
    ],
    "membership": {
      "free": [
        "fab"
      ],
      "pro": [
        "fab"
      ]
    }
  },
  {
    "unicode": "f5cf",
    "label": "Wix",
    "name": "wix",
    "styles": [
      "fab"
    ],
    "membership": {
      "free": [
        "fab"
      ],
      "pro": [
        "fab"
      ]
    }
  },
  {
    "unicode": "f5ce",
    "label": "Wine Glass-alt",
    "name": "wine-glass-alt",
    "styles": [
      "fas",
      "far",
      "fal"
    ],
    "membership": {
      "free": [
        "fas"
      ],
      "pro": [
        "fas",
        "far",
        "fal"
      ]
    }
  },
  {
    "unicode": "f4e3",
    "label": "Wine Glass",
    "name": "wine-glass",
    "styles": [
      "fas",
      "far",
      "fal"
    ],
    "membership": {
      "free": [
        "fas"
      ],
      "pro": [
        "fas",
        "far",
        "fal"
      ]
    }
  },
  {
    "unicode": "f17a",
    "label": "Windows",
    "name": "windows",
    "styles": [
      "fab"
    ],
    "membership": {
      "free": [
        "fab"
      ],
      "pro": [
        "fab"
      ]
    }
  },
  {
    "unicode": "f2d2",
    "label": "Window Restore",
    "name": "window-restore",
    "styles": [
      "fas",
      "far",
      "fal"
    ],
    "membership": {
      "free": [
        "fas",
        "far"
      ],
      "pro": [
        "fas",
        "far",
        "fal"
      ]
    }
  },
  {
    "unicode": "f2d1",
    "label": "Window Minimize",
    "name": "window-minimize",
    "styles": [
      "fas",
      "far",
      "fal"
    ],
    "membership": {
      "free": [
        "fas",
        "far"
      ],
      "pro": [
        "fas",
        "far",
        "fal"
      ]
    }
  },
  {
    "unicode": "f2d0",
    "label": "Window Maximize",
    "name": "window-maximize",
    "styles": [
      "fas",
      "far",
      "fal"
    ],
    "membership": {
      "free": [
        "fas",
        "far"
      ],
      "pro": [
        "fas",
        "far",
        "fal"
      ]
    }
  },
  {
    "unicode": "f410",
    "label": "Window Close",
    "name": "window-close",
    "styles": [
      "fas",
      "far",
      "fal"
    ],
    "membership": {
      "free": [
        "fas",
        "far"
      ],
      "pro": [
        "fas",
        "far",
        "fal"
      ]
    }
  },
  {
    "unicode": "f40f",
    "label": "Alternate Window",
    "name": "window-alt",
    "styles": [
      "fas",
      "far",
      "fal"
    ],
    "membership": {
      "free": [],
      "pro": [
        "fas",
        "far",
        "fal"
      ]
    }
  },
  {
    "unicode": "f40e",
    "label": "Window",
    "name": "window",
    "styles": [
      "fas",
      "far",
      "fal"
    ],
    "membership": {
      "free": [],
      "pro": [
        "fas",
        "far",
        "fal"
      ]
    }
  },
  {
    "unicode": "f266",
    "label": "Wikipedia W",
    "name": "wikipedia-w",
    "styles": [
      "fab"
    ],
    "membership": {
      "free": [
        "fab"
      ],
      "pro": [
        "fab"
      ]
    }
  },
  {
    "unicode": "f1eb",
    "label": "WiFi",
    "name": "wifi",
    "styles": [
      "fas",
      "far",
      "fal"
    ],
    "membership": {
      "free": [
        "fas"
      ],
      "pro": [
        "fas",
        "far",
        "fal"
      ]
    }
  },
  {
    "unicode": "f40d",
    "label": "WHMCS",
    "name": "whmcs",
    "styles": [
      "fab"
    ],
    "membership": {
      "free": [
        "fab"
      ],
      "pro": [
        "fab"
      ]
    }
  },
  {
    "unicode": "f460",
    "label": "Whistle",
    "name": "whistle",
    "styles": [
      "fas",
      "far",
      "fal"
    ],
    "membership": {
      "free": [],
      "pro": [
        "fas",
        "far",
        "fal"
      ]
    }
  },
  {
    "unicode": "f193",
    "label": "Wheelchair",
    "name": "wheelchair",
    "styles": [
      "fas",
      "far",
      "fal"
    ],
    "membership": {
      "free": [
        "fas"
      ],
      "pro": [
        "fas",
        "far",
        "fal"
      ]
    }
  },
  {
    "unicode": "f40c",
    "label": "What's App Square",
    "name": "whatsapp-square",
    "styles": [
      "fab"
    ],
    "membership": {
      "free": [
        "fab"
      ],
      "pro": [
        "fab"
      ]
    }
  },
  {
    "unicode": "f232",
    "label": "What's App",
    "name": "whatsapp",
    "styles": [
      "fab"
    ],
    "membership": {
      "free": [
        "fab"
      ],
      "pro": [
        "fab"
      ]
    }
  },
  {
    "unicode": "f1d7",
    "label": "Weixin (WeChat)",
    "name": "weixin",
    "styles": [
      "fab"
    ],
    "membership": {
      "free": [
        "fab"
      ],
      "pro": [
        "fab"
      ]
    }
  },
  {
    "unicode": "f5cd",
    "label": "Hanging Weight",
    "name": "weight-hanging",
    "styles": [
      "fas",
      "far",
      "fal"
    ],
    "membership": {
      "free": [
        "fas"
      ],
      "pro": [
        "fas",
        "far",
        "fal"
      ]
    }
  },
  {
    "unicode": "f496",
    "label": "Weight",
    "name": "weight",
    "styles": [
      "fas",
      "far",
      "fal"
    ],
    "membership": {
      "free": [
        "fas"
      ],
      "pro": [
        "fas",
        "far",
        "fal"
      ]
    }
  },
  {
    "unicode": "f18a",
    "label": "Weibo",
    "name": "weibo",
    "styles": [
      "fab"
    ],
    "membership": {
      "free": [
        "fab"
      ],
      "pro": [
        "fab"
      ]
    }
  },
  {
    "unicode": "f5cc",
    "label": "Weebly",
    "name": "weebly",
    "styles": [
      "fab"
    ],
    "membership": {
      "free": [
        "fab"
      ],
      "pro": [
        "fab"
      ]
    }
  },
  {
    "unicode": "f63e",
    "label": "Watch Fitness",
    "name": "watch-fitness",
    "styles": [
      "fas",
      "far",
      "fal"
    ],
    "membership": {
      "free": [],
      "pro": [
        "fas",
        "far",
        "fal"
      ]
    }
  },
  {
    "unicode": "f2e1",
    "label": "Watch",
    "name": "watch",
    "styles": [
      "fas",
      "far",
      "fal"
    ],
    "membership": {
      "free": [],
      "pro": [
        "fas",
        "far",
        "fal"
      ]
    }
  },
  {
    "unicode": "f495",
    "label": "Alternate Warehouse",
    "name": "warehouse-alt",
    "styles": [
      "fas",
      "far",
      "fal"
    ],
    "membership": {
      "free": [],
      "pro": [
        "fas",
        "far",
        "fal"
      ]
    }
  },
  {
    "unicode": "f494",
    "label": "Warehouse",
    "name": "warehouse",
    "styles": [
      "fas",
      "far",
      "fal"
    ],
    "membership": {
      "free": [
        "fas"
      ],
      "pro": [
        "fas",
        "far",
        "fal"
      ]
    }
  },
  {
    "unicode": "f555",
    "label": "Wallet",
    "name": "wallet",
    "styles": [
      "fas",
      "far",
      "fal"
    ],
    "membership": {
      "free": [
        "fas"
      ],
      "pro": [
        "fas",
        "far",
        "fal"
      ]
    }
  },
  {
    "unicode": "f554",
    "label": "Walking",
    "name": "walking",
    "styles": [
      "fas",
      "far",
      "fal"
    ],
    "membership": {
      "free": [
        "fas"
      ],
      "pro": [
        "fas",
        "far",
        "fal"
      ]
    }
  },
  {
    "unicode": "f41f",
    "label": "Vue.js",
    "name": "vuejs",
    "styles": [
      "fab"
    ],
    "membership": {
      "free": [
        "fab"
      ],
      "pro": [
        "fab"
      ]
    }
  },
  {
    "unicode": "f028",
    "label": "volume-up",
    "name": "volume-up",
    "styles": [
      "fas",
      "far",
      "fal"
    ],
    "membership": {
      "free": [
        "fas"
      ],
      "pro": [
        "fas",
        "far",
        "fal"
      ]
    }
  },
  {
    "unicode": "f026",
    "label": "volume-off",
    "name": "volume-off",
    "styles": [
      "fas",
      "far",
      "fal"
    ],
    "membership": {
      "free": [
        "fas"
      ],
      "pro": [
        "fas",
        "far",
        "fal"
      ]
    }
  },
  {
    "unicode": "f2e2",
    "label": "volume-mute",
    "name": "volume-mute",
    "styles": [
      "fas",
      "far",
      "fal"
    ],
    "membership": {
      "free": [],
      "pro": [
        "fas",
        "far",
        "fal"
      ]
    }
  },
  {
    "unicode": "f027",
    "label": "volume-down",
    "name": "volume-down",
    "styles": [
      "fas",
      "far",
      "fal"
    ],
    "membership": {
      "free": [
        "fas"
      ],
      "pro": [
        "fas",
        "far",
        "fal"
      ]
    }
  },
  {
    "unicode": "f45f",
    "label": "Volleyball Ball",
    "name": "volleyball-ball",
    "styles": [
      "fas",
      "far",
      "fal"
    ],
    "membership": {
      "free": [
        "fas"
      ],
      "pro": [
        "fas",
        "far",
        "fal"
      ]
    }
  },
  {
    "unicode": "f40b",
    "label": "VNV",
    "name": "vnv",
    "styles": [
      "fab"
    ],
    "membership": {
      "free": [
        "fab"
      ],
      "pro": [
        "fab"
      ]
    }
  },
  {
    "unicode": "f189",
    "label": "VK",
    "name": "vk",
    "styles": [
      "fab"
    ],
    "membership": {
      "free": [
        "fab"
      ],
      "pro": [
        "fab"
      ]
    }
  },
  {
    "unicode": "f1ca",
    "label": "Vine",
    "name": "vine",
    "styles": [
      "fab"
    ],
    "membership": {
      "free": [
        "fab"
      ],
      "pro": [
        "fab"
      ]
    }
  },
  {
    "unicode": "f27d",
    "label": "Vimeo",
    "name": "vimeo-v",
    "styles": [
      "fab"
    ],
    "membership": {
      "free": [
        "fab"
      ],
      "pro": [
        "fab"
      ]
    }
  },
  {
    "unicode": "f194",
    "label": "Vimeo Square",
    "name": "vimeo-square",
    "styles": [
      "fab"
    ],
    "membership": {
      "free": [
        "fab"
      ],
      "pro": [
        "fab"
      ]
    }
  },
  {
    "unicode": "f40a",
    "label": "Vimeo",
    "name": "vimeo",
    "styles": [
      "fab"
    ],
    "membership": {
      "free": [
        "fab"
      ],
      "pro": [
        "fab"
      ]
    }
  },
  {
    "unicode": "f4e2",
    "label": "Video Slash",
    "name": "video-slash",
    "styles": [
      "fas",
      "far",
      "fal"
    ],
    "membership": {
      "free": [
        "fas"
      ],
      "pro": [
        "fas",
        "far",
        "fal"
      ]
    }
  },
  {
    "unicode": "f4e1",
    "label": "Video Plus",
    "name": "video-plus",
    "styles": [
      "fas",
      "far",
      "fal"
    ],
    "membership": {
      "free": [],
      "pro": [
        "fas",
        "far",
        "fal"
      ]
    }
  },
  {
    "unicode": "f03d",
    "label": "Video",
    "name": "video",
    "styles": [
      "fas",
      "far",
      "fal"
    ],
    "membership": {
      "free": [
        "fas"
      ],
      "pro": [
        "fas",
        "far",
        "fal"
      ]
    }
  },
  {
    "unicode": "f409",
    "label": "Viber",
    "name": "viber",
    "styles": [
      "fab"
    ],
    "membership": {
      "free": [
        "fab"
      ],
      "pro": [
        "fab"
      ]
    }
  },
  {
    "unicode": "f493",
    "label": "Vials",
    "name": "vials",
    "styles": [
      "fas",
      "far",
      "fal"
    ],
    "membership": {
      "free": [
        "fas"
      ],
      "pro": [
        "fas",
        "far",
        "fal"
      ]
    }
  },
  {
    "unicode": "f492",
    "label": "Vial",
    "name": "vial",
    "styles": [
      "fas",
      "far",
      "fal"
    ],
    "membership": {
      "free": [
        "fas"
      ],
      "pro": [
        "fas",
        "far",
        "fal"
      ]
    }
  },
  {
    "unicode": "f2aa",
    "label": "Viadeo Square",
    "name": "viadeo-square",
    "styles": [
      "fab"
    ],
    "membership": {
      "free": [
        "fab"
      ],
      "pro": [
        "fab"
      ]
    }
  },
  {
    "unicode": "f2a9",
    "label": "Viadeo",
    "name": "viadeo",
    "styles": [
      "fab"
    ],
    "membership": {
      "free": [
        "fab"
      ],
      "pro": [
        "fab"
      ]
    }
  },
  {
    "unicode": "f237",
    "label": "Viacoin",
    "name": "viacoin",
    "styles": [
      "fab"
    ],
    "membership": {
      "free": [
        "fab"
      ],
      "pro": [
        "fab"
      ]
    }
  },
  {
    "unicode": "f228",
    "label": "Venus Mars",
    "name": "venus-mars",
    "styles": [
      "fas",
      "far",
      "fal"
    ],
    "membership": {
      "free": [
        "fas"
      ],
      "pro": [
        "fas",
        "far",
        "fal"
      ]
    }
  },
  {
    "unicode": "f226",
    "label": "Venus Double",
    "name": "venus-double",
    "styles": [
      "fas",
      "far",
      "fal"
    ],
    "membership": {
      "free": [
        "fas"
      ],
      "pro": [
        "fas",
        "far",
        "fal"
      ]
    }
  },
  {
    "unicode": "f221",
    "label": "Venus",
    "name": "venus",
    "styles": [
      "fas",
      "far",
      "fal"
    ],
    "membership": {
      "free": [
        "fas"
      ],
      "pro": [
        "fas",
        "far",
        "fal"
      ]
    }
  },
  {
    "unicode": "f5cb",
    "label": "Vector Square",
    "name": "vector-square",
    "styles": [
      "fas",
      "far",
      "fal"
    ],
    "membership": {
      "free": [
        "fas"
      ],
      "pro": [
        "fas",
        "far",
        "fal"
      ]
    }
  },
  {
    "unicode": "f408",
    "label": "Vaadin",
    "name": "vaadin",
    "styles": [
      "fab"
    ],
    "membership": {
      "free": [
        "fab"
      ],
      "pro": [
        "fab"
      ]
    }
  },
  {
    "unicode": "f2e6",
    "label": "Alternate Utensils",
    "name": "utensils-alt",
    "styles": [
      "fas",
      "far",
      "fal"
    ],
    "membership": {
      "free": [],
      "pro": [
        "fas",
        "far",
        "fal"
      ]
    }
  },
  {
    "unicode": "f2e7",
    "label": "Utensils",
    "name": "utensils",
    "styles": [
      "fas",
      "far",
      "fal"
    ],
    "membership": {
      "free": [
        "fas"
      ],
      "pro": [
        "fas",
        "far",
        "fal"
      ]
    }
  },
  {
    "unicode": "f2e5",
    "label": "Utensil Spoon",
    "name": "utensil-spoon",
    "styles": [
      "fas",
      "far",
      "fal"
    ],
    "membership": {
      "free": [
        "fas"
      ],
      "pro": [
        "fas",
        "far",
        "fal"
      ]
    }
  },
  {
    "unicode": "f2e4",
    "label": "Utensil Knife",
    "name": "utensil-knife",
    "styles": [
      "fas",
      "far",
      "fal"
    ],
    "membership": {
      "free": [],
      "pro": [
        "fas",
        "far",
        "fal"
      ]
    }
  },
  {
    "unicode": "f2e3",
    "label": "Utensil Fork",
    "name": "utensil-fork",
    "styles": [
      "fas",
      "far",
      "fal"
    ],
    "membership": {
      "free": [],
      "pro": [
        "fas",
        "far",
        "fal"
      ]
    }
  },
  {
    "unicode": "f407",
    "label": "us-Sunnah Foundation",
    "name": "ussunnah",
    "styles": [
      "fab"
    ],
    "membership": {
      "free": [
        "fab"
      ],
      "pro": [
        "fab"
      ]
    }
  },
  {
    "unicode": "f509",
    "label": "Users Cog",
    "name": "users-cog",
    "styles": [
      "fas",
      "far",
      "fal"
    ],
    "membership": {
      "free": [
        "fas"
      ],
      "pro": [
        "fas",
        "far",
        "fal"
      ]
    }
  },
  {
    "unicode": "f63d",
    "label": "Users Class",
    "name": "users-class",
    "styles": [
      "fas",
      "far",
      "fal"
    ],
    "membership": {
      "free": [],
      "pro": [
        "fas",
        "far",
        "fal"
      ]
    }
  },
  {
    "unicode": "f0c0",
    "label": "Users",
    "name": "users",
    "styles": [
      "fas",
      "far",
      "fal"
    ],
    "membership": {
      "free": [
        "fas"
      ],
      "pro": [
        "fas",
        "far",
        "fal"
      ]
    }
  },
  {
    "unicode": "f235",
    "label": "Remove User",
    "name": "user-times",
    "styles": [
      "fas",
      "far",
      "fal"
    ],
    "membership": {
      "free": [
        "fas"
      ],
      "pro": [
        "fas",
        "far",
        "fal"
      ]
    }
  },
  {
    "unicode": "f508",
    "label": "User Tie",
    "name": "user-tie",
    "styles": [
      "fas",
      "far",
      "fal"
    ],
    "membership": {
      "free": [
        "fas"
      ],
      "pro": [
        "fas",
        "far",
        "fal"
      ]
    }
  },
  {
    "unicode": "f507",
    "label": "User Tag",
    "name": "user-tag",
    "styles": [
      "fas",
      "far",
      "fal"
    ],
    "membership": {
      "free": [
        "fas"
      ],
      "pro": [
        "fas",
        "far",
        "fal"
      ]
    }
  },
  {
    "unicode": "f506",
    "label": "User Slash",
    "name": "user-slash",
    "styles": [
      "fas",
      "far",
      "fal"
    ],
    "membership": {
      "free": [
        "fas"
      ],
      "pro": [
        "fas",
        "far",
        "fal"
      ]
    }
  },
  {
    "unicode": "f505",
    "label": "User Shield",
    "name": "user-shield",
    "styles": [
      "fas",
      "far",
      "fal"
    ],
    "membership": {
      "free": [
        "fas"
      ],
      "pro": [
        "fas",
        "far",
        "fal"
      ]
    }
  },
  {
    "unicode": "f21b",
    "label": "User Secret",
    "name": "user-secret",
    "styles": [
      "fas",
      "far",
      "fal"
    ],
    "membership": {
      "free": [
        "fas"
      ],
      "pro": [
        "fas",
        "far",
        "fal"
      ]
    }
  },
  {
    "unicode": "f234",
    "label": "Add User",
    "name": "user-plus",
    "styles": [
      "fas",
      "far",
      "fal"
    ],
    "membership": {
      "free": [
        "fas"
      ],
      "pro": [
        "fas",
        "far",
        "fal"
      ]
    }
  },
  {
    "unicode": "f504",
    "label": "User Ninja",
    "name": "user-ninja",
    "styles": [
      "fas",
      "far",
      "fal"
    ],
    "membership": {
      "free": [
        "fas"
      ],
      "pro": [
        "fas",
        "far",
        "fal"
      ]
    }
  },
  {
    "unicode": "f503",
    "label": "User Minus",
    "name": "user-minus",
    "styles": [
      "fas",
      "far",
      "fal"
    ],
    "membership": {
      "free": [
        "fas"
      ],
      "pro": [
        "fas",
        "far",
        "fal"
      ]
    }
  },
  {
    "unicode": "f0f0",
    "label": "user-md",
    "name": "user-md",
    "styles": [
      "fas",
      "far",
      "fal"
    ],
    "membership": {
      "free": [
        "fas"
      ],
      "pro": [
        "fas",
        "far",
        "fal"
      ]
    }
  },
  {
    "unicode": "f502",
    "label": "User Lock",
    "name": "user-lock",
    "styles": [
      "fas",
      "far",
      "fal"
    ],
    "membership": {
      "free": [
        "fas"
      ],
      "pro": [
        "fas",
        "far",
        "fal"
      ]
    }
  },
  {
    "unicode": "f501",
    "label": "User Graduate",
    "name": "user-graduate",
    "styles": [
      "fas",
      "far",
      "fal"
    ],
    "membership": {
      "free": [
        "fas"
      ],
      "pro": [
        "fas",
        "far",
        "fal"
      ]
    }
  },
  {
    "unicode": "f500",
    "label": "User Friends",
    "name": "user-friends",
    "styles": [
      "fas",
      "far",
      "fal"
    ],
    "membership": {
      "free": [
        "fas"
      ],
      "pro": [
        "fas",
        "far",
        "fal"
      ]
    }
  },
  {
    "unicode": "f4ff",
    "label": "User Edit",
    "name": "user-edit",
    "styles": [
      "fas",
      "far",
      "fal"
    ],
    "membership": {
      "free": [
        "fas"
      ],
      "pro": [
        "fas",
        "far",
        "fal"
      ]
    }
  },
  {
    "unicode": "f4fe",
    "label": "User Cog",
    "name": "user-cog",
    "styles": [
      "fas",
      "far",
      "fal"
    ],
    "membership": {
      "free": [
        "fas"
      ],
      "pro": [
        "fas",
        "far",
        "fal"
      ]
    }
  },
  {
    "unicode": "f4fd",
    "label": "User Clock",
    "name": "user-clock",
    "styles": [
      "fas",
      "far",
      "fal"
    ],
    "membership": {
      "free": [
        "fas"
      ],
      "pro": [
        "fas",
        "far",
        "fal"
      ]
    }
  },
  {
    "unicode": "f2bd",
    "label": "User Circle",
    "name": "user-circle",
    "styles": [
      "fas",
      "far",
      "fal"
    ],
    "membership": {
      "free": [
        "fas",
        "far"
      ],
      "pro": [
        "fas",
        "far",
        "fal"
      ]
    }
  },
  {
    "unicode": "f4fc",
    "label": "User Check",
    "name": "user-check",
    "styles": [
      "fas",
      "far",
      "fal"
    ],
    "membership": {
      "free": [
        "fas"
      ],
      "pro": [
        "fas",
        "far",
        "fal"
      ]
    }
  },
  {
    "unicode": "f4fb",
    "label": "User Astronaut",
    "name": "user-astronaut",
    "styles": [
      "fas",
      "far",
      "fal"
    ],
    "membership": {
      "free": [
        "fas"
      ],
      "pro": [
        "fas",
        "far",
        "fal"
      ]
    }
  },
  {
    "unicode": "f4fa",
    "label": "Alternate User Slash",
    "name": "user-alt-slash",
    "styles": [
      "fas",
      "far",
      "fal"
    ],
    "membership": {
      "free": [
        "fas"
      ],
      "pro": [
        "fas",
        "far",
        "fal"
      ]
    }
  },
  {
    "unicode": "f406",
    "label": "Alternate User",
    "name": "user-alt",
    "styles": [
      "fas",
      "far",
      "fal"
    ],
    "membership": {
      "free": [
        "fas"
      ],
      "pro": [
        "fas",
        "far",
        "fal"
      ]
    }
  },
  {
    "unicode": "f007",
    "label": "User",
    "name": "user",
    "styles": [
      "fas",
      "far",
      "fal"
    ],
    "membership": {
      "free": [
        "fas",
        "far"
      ],
      "pro": [
        "fas",
        "far",
        "fal"
      ]
    }
  },
  {
    "unicode": "f2e9",
    "label": "US Dollar Square",
    "name": "usd-square",
    "styles": [
      "fas",
      "far",
      "fal"
    ],
    "membership": {
      "free": [],
      "pro": [
        "fas",
        "far",
        "fal"
      ]
    }
  },
  {
    "unicode": "f2e8",
    "label": "US Dollar Circle",
    "name": "usd-circle",
    "styles": [
      "fas",
      "far",
      "fal"
    ],
    "membership": {
      "free": [],
      "pro": [
        "fas",
        "far",
        "fal"
      ]
    }
  },
  {
    "unicode": "f287",
    "label": "USB",
    "name": "usb",
    "styles": [
      "fab"
    ],
    "membership": {
      "free": [
        "fab"
      ],
      "pro": [
        "fab"
      ]
    }
  },
  {
    "unicode": "f093",
    "label": "Upload",
    "name": "upload",
    "styles": [
      "fas",
      "far",
      "fal"
    ],
    "membership": {
      "free": [
        "fas"
      ],
      "pro": [
        "fas",
        "far",
        "fal"
      ]
    }
  },
  {
    "unicode": "f405",
    "label": "Untappd",
    "name": "untappd",
    "styles": [
      "fab"
    ],
    "membership": {
      "free": [
        "fab"
      ],
      "pro": [
        "fab"
      ]
    }
  },
  {
    "unicode": "f13e",
    "label": "Alternate Unlock",
    "name": "unlock-alt",
    "styles": [
      "fas",
      "far",
      "fal"
    ],
    "membership": {
      "free": [
        "fas"
      ],
      "pro": [
        "fas",
        "far",
        "fal"
      ]
    }
  },
  {
    "unicode": "f09c",
    "label": "unlock",
    "name": "unlock",
    "styles": [
      "fas",
      "far",
      "fal"
    ],
    "membership": {
      "free": [
        "fas"
      ],
      "pro": [
        "fas",
        "far",
        "fal"
      ]
    }
  },
  {
    "unicode": "f127",
    "label": "unlink",
    "name": "unlink",
    "styles": [
      "fas",
      "far",
      "fal"
    ],
    "membership": {
      "free": [
        "fas"
      ],
      "pro": [
        "fas",
        "far",
        "fal"
      ]
    }
  },
  {
    "unicode": "f19c",
    "label": "University",
    "name": "university",
    "styles": [
      "fas",
      "far",
      "fal"
    ],
    "membership": {
      "free": [
        "fas"
      ],
      "pro": [
        "fas",
        "far",
        "fal"
      ]
    }
  },
  {
    "unicode": "f29a",
    "label": "Universal Access",
    "name": "universal-access",
    "styles": [
      "fas",
      "far",
      "fal"
    ],
    "membership": {
      "free": [
        "fas"
      ],
      "pro": [
        "fas",
        "far",
        "fal"
      ]
    }
  },
  {
    "unicode": "f404",
    "label": "Uniregistry",
    "name": "uniregistry",
    "styles": [
      "fab"
    ],
    "membership": {
      "free": [
        "fab"
      ],
      "pro": [
        "fab"
      ]
    }
  },
  {
    "unicode": "f2ea",
    "label": "Alternate Undo",
    "name": "undo-alt",
    "styles": [
      "fas",
      "far",
      "fal"
    ],
    "membership": {
      "free": [
        "fas"
      ],
      "pro": [
        "fas",
        "far",
        "fal"
      ]
    }
  },
  {
    "unicode": "f0e2",
    "label": "Undo",
    "name": "undo",
    "styles": [
      "fas",
      "far",
      "fal"
    ],
    "membership": {
      "free": [
        "fas"
      ],
      "pro": [
        "fas",
        "far",
        "fal"
      ]
    }
  },
  {
    "unicode": "f0cd",
    "label": "Underline",
    "name": "underline",
    "styles": [
      "fas",
      "far",
      "fal"
    ],
    "membership": {
      "free": [
        "fas"
      ],
      "pro": [
        "fas",
        "far",
        "fal"
      ]
    }
  },
  {
    "unicode": "f5ca",
    "label": "Umbrella Beach",
    "name": "umbrella-beach",
    "styles": [
      "fas",
      "far",
      "fal"
    ],
    "membership": {
      "free": [
        "fas"
      ],
      "pro": [
        "fas",
        "far",
        "fal"
      ]
    }
  },
  {
    "unicode": "f0e9",
    "label": "Umbrella",
    "name": "umbrella",
    "styles": [
      "fas",
      "far",
      "fal"
    ],
    "membership": {
      "free": [
        "fas"
      ],
      "pro": [
        "fas",
        "far",
        "fal"
      ]
    }
  },
  {
    "unicode": "f403",
    "label": "UIkit",
    "name": "uikit",
    "styles": [
      "fab"
    ],
    "membership": {
      "free": [
        "fab"
      ],
      "pro": [
        "fab"
      ]
    }
  },
  {
    "unicode": "f402",
    "label": "Uber",
    "name": "uber",
    "styles": [
      "fab"
    ],
    "membership": {
      "free": [
        "fab"
      ],
      "pro": [
        "fab"
      ]
    }
  },
  {
    "unicode": "f42b",
    "label": "Typo3",
    "name": "typo3",
    "styles": [
      "fab"
    ],
    "membership": {
      "free": [
        "fab"
      ],
      "pro": [
        "fab"
      ]
    }
  },
  {
    "unicode": "f081",
    "label": "Twitter Square",
    "name": "twitter-square",
    "styles": [
      "fab"
    ],
    "membership": {
      "free": [
        "fab"
      ],
      "pro": [
        "fab"
      ]
    }
  },
  {
    "unicode": "f099",
    "label": "Twitter",
    "name": "twitter",
    "styles": [
      "fab"
    ],
    "membership": {
      "free": [
        "fab"
      ],
      "pro": [
        "fab"
      ]
    }
  },
  {
    "unicode": "f1e8",
    "label": "Twitch",
    "name": "twitch",
    "styles": [
      "fab"
    ],
    "membership": {
      "free": [
        "fab"
      ],
      "pro": [
        "fab"
      ]
    }
  },
  {
    "unicode": "f401",
    "label": "Retro Televison",
    "name": "tv-retro",
    "styles": [
      "fas",
      "far",
      "fal"
    ],
    "membership": {
      "free": [],
      "pro": [
        "fas",
        "far",
        "fal"
      ]
    }
  },
  {
    "unicode": "f26c",
    "label": "Television",
    "name": "tv",
    "styles": [
      "fas",
      "far",
      "fal"
    ],
    "membership": {
      "free": [
        "fas"
      ],
      "pro": [
        "fas",
        "far",
        "fal"
      ]
    }
  },
  {
    "unicode": "f174",
    "label": "Tumblr Square",
    "name": "tumblr-square",
    "styles": [
      "fab"
    ],
    "membership": {
      "free": [
        "fab"
      ],
      "pro": [
        "fab"
      ]
    }
  },
  {
    "unicode": "f173",
    "label": "Tumblr",
    "name": "tumblr",
    "styles": [
      "fab"
    ],
    "membership": {
      "free": [
        "fab"
      ],
      "pro": [
        "fab"
      ]
    }
  },
  {
    "unicode": "f1e4",
    "label": "TTY",
    "name": "tty",
    "styles": [
      "fas",
      "far",
      "fal"
    ],
    "membership": {
      "free": [
        "fas"
      ],
      "pro": [
        "fas",
        "far",
        "fal"
      ]
    }
  },
  {
    "unicode": "f553",
    "label": "T-Shirt",
    "name": "tshirt",
    "styles": [
      "fas",
      "far",
      "fal"
    ],
    "membership": {
      "free": [
        "fas"
      ],
      "pro": [
        "fas",
        "far",
        "fal"
      ]
    }
  },
  {
    "unicode": "f4e0",
    "label": "Truck Ramp",
    "name": "truck-ramp",
    "styles": [
      "fas",
      "far",
      "fal"
    ],
    "membership": {
      "free": [],
      "pro": [
        "fas",
        "far",
        "fal"
      ]
    }
  },
  {
    "unicode": "f63c",
    "label": "Truck Side",
    "name": "truck-pickup",
    "styles": [
      "fas",
      "far",
      "fal"
    ],
    "membership": {
      "free": [
        "fas"
      ],
      "pro": [
        "fas",
        "far",
        "fal"
      ]
    }
  },
  {
    "unicode": "f4df",
    "label": "Truck Moving",
    "name": "truck-moving",
    "styles": [
      "fas",
      "far",
      "fal"
    ],
    "membership": {
      "free": [
        "fas"
      ],
      "pro": [
        "fas",
        "far",
        "fal"
      ]
    }
  },
  {
    "unicode": "f63b",
    "label": "Truck Monster",
    "name": "truck-monster",
    "styles": [
      "fas",
      "far",
      "fal"
    ],
    "membership": {
      "free": [
        "fas"
      ],
      "pro": [
        "fas",
        "far",
        "fal"
      ]
    }
  },
  {
    "unicode": "f4de",
    "label": "Truck Loading",
    "name": "truck-loading",
    "styles": [
      "fas",
      "far",
      "fal"
    ],
    "membership": {
      "free": [
        "fas"
      ],
      "pro": [
        "fas",
        "far",
        "fal"
      ]
    }
  },
  {
    "unicode": "f4dd",
    "label": "Truck Couch",
    "name": "truck-couch",
    "styles": [
      "fas",
      "far",
      "fal"
    ],
    "membership": {
      "free": [],
      "pro": [
        "fas",
        "far",
        "fal"
      ]
    }
  },
  {
    "unicode": "f4dc",
    "label": "Truck Container",
    "name": "truck-container",
    "styles": [
      "fas",
      "far",
      "fal"
    ],
    "membership": {
      "free": [],
      "pro": [
        "fas",
        "far",
        "fal"
      ]
    }
  },
  {
    "unicode": "f0d1",
    "label": "truck",
    "name": "truck",
    "styles": [
      "fas",
      "far",
      "fal"
    ],
    "membership": {
      "free": [
        "fas"
      ],
      "pro": [
        "fas",
        "far",
        "fal"
      ]
    }
  },
  {
    "unicode": "f2eb",
    "label": "Alternate Trophy",
    "name": "trophy-alt",
    "styles": [
      "fas",
      "far",
      "fal"
    ],
    "membership": {
      "free": [],
      "pro": [
        "fas",
        "far",
        "fal"
      ]
    }
  },
  {
    "unicode": "f091",
    "label": "trophy",
    "name": "trophy",
    "styles": [
      "fas",
      "far",
      "fal"
    ],
    "membership": {
      "free": [
        "fas"
      ],
      "pro": [
        "fas",
        "far",
        "fal"
      ]
    }
  },
  {
    "unicode": "f262",
    "label": "TripAdvisor",
    "name": "tripadvisor",
    "styles": [
      "fab"
    ],
    "membership": {
      "free": [
        "fab"
      ],
      "pro": [
        "fab"
      ]
    }
  },
  {
    "unicode": "f2ec",
    "label": "Triangle",
    "name": "triangle",
    "styles": [
      "fas",
      "far",
      "fal"
    ],
    "membership": {
      "free": [],
      "pro": [
        "fas",
        "far",
        "fal"
      ]
    }
  },
  {
    "unicode": "f181",
    "label": "Trello",
    "name": "trello",
    "styles": [
      "fab"
    ],
    "membership": {
      "free": [
        "fab"
      ],
      "pro": [
        "fab"
      ]
    }
  },
  {
    "unicode": "f400",
    "label": "Alternate Tree",
    "name": "tree-alt",
    "styles": [
      "fas",
      "far",
      "fal"
    ],
    "membership": {
      "free": [],
      "pro": [
        "fas",
        "far",
        "fal"
      ]
    }
  },
  {
    "unicode": "f1bb",
    "label": "Tree",
    "name": "tree",
    "styles": [
      "fas",
      "far",
      "fal"
    ],
    "membership": {
      "free": [
        "fas"
      ],
      "pro": [
        "fas",
        "far",
        "fal"
      ]
    }
  },
  {
    "unicode": "f2ed",
    "label": "Alternate Trash",
    "name": "trash-alt",
    "styles": [
      "fas",
      "far",
      "fal"
    ],
    "membership": {
      "free": [
        "fas",
        "far"
      ],
      "pro": [
        "fas",
        "far",
        "fal"
      ]
    }
  },
  {
    "unicode": "f1f8",
    "label": "Trash",
    "name": "trash",
    "styles": [
      "fas",
      "far",
      "fal"
    ],
    "membership": {
      "free": [
        "fas"
      ],
      "pro": [
        "fas",
        "far",
        "fal"
      ]
    }
  },
  {
    "unicode": "f225",
    "label": "Alternate Transgender",
    "name": "transgender-alt",
    "styles": [
      "fas",
      "far",
      "fal"
    ],
    "membership": {
      "free": [
        "fas"
      ],
      "pro": [
        "fas",
        "far",
        "fal"
      ]
    }
  },
  {
    "unicode": "f224",
    "label": "Transgender",
    "name": "transgender",
    "styles": [
      "fas",
      "far",
      "fal"
    ],
    "membership": {
      "free": [
        "fas"
      ],
      "pro": [
        "fas",
        "far",
        "fal"
      ]
    }
  },
  {
    "unicode": "f238",
    "label": "Train",
    "name": "train",
    "styles": [
      "fas",
      "far",
      "fal"
    ],
    "membership": {
      "free": [
        "fas"
      ],
      "pro": [
        "fas",
        "far",
        "fal"
      ]
    }
  },
  {
    "unicode": "f63a",
    "label": "Traffic Light-stop",
    "name": "traffic-light-stop",
    "styles": [
      "fas",
      "far",
      "fal"
    ],
    "membership": {
      "free": [],
      "pro": [
        "fas",
        "far",
        "fal"
      ]
    }
  },
  {
    "unicode": "f639",
    "label": "Traffic Light-slow",
    "name": "traffic-light-slow",
    "styles": [
      "fas",
      "far",
      "fal"
    ],
    "membership": {
      "free": [],
      "pro": [
        "fas",
        "far",
        "fal"
      ]
    }
  },
  {
    "unicode": "f638",
    "label": "Traffic Light-go",
    "name": "traffic-light-go",
    "styles": [
      "fas",
      "far",
      "fal"
    ],
    "membership": {
      "free": [],
      "pro": [
        "fas",
        "far",
        "fal"
      ]
    }
  },
  {
    "unicode": "f637",
    "label": "Traffic Light",
    "name": "traffic-light",
    "styles": [
      "fas",
      "far",
      "fal"
    ],
    "membership": {
      "free": [
        "fas"
      ],
      "pro": [
        "fas",
        "far",
        "fal"
      ]
    }
  },
  {
    "unicode": "f636",
    "label": "Traffic Cone",
    "name": "traffic-cone",
    "styles": [
      "fas",
      "far",
      "fal"
    ],
    "membership": {
      "free": [],
      "pro": [
        "fas",
        "far",
        "fal"
      ]
    }
  },
  {
    "unicode": "f25c",
    "label": "Trademark",
    "name": "trademark",
    "styles": [
      "fas",
      "far",
      "fal"
    ],
    "membership": {
      "free": [
        "fas"
      ],
      "pro": [
        "fas",
        "far",
        "fal"
      ]
    }
  },
  {
    "unicode": "f513",
    "label": "Trade Federation",
    "name": "trade-federation",
    "styles": [
      "fab"
    ],
    "membership": {
      "free": [
        "fab"
      ],
      "pro": [
        "fab"
      ]
    }
  },
  {
    "unicode": "f635",
    "label": "Toothbrush",
    "name": "toothbrush",
    "styles": [
      "fas",
      "far",
      "fal"
    ],
    "membership": {
      "free": [],
      "pro": [
        "fas",
        "far",
        "fal"
      ]
    }
  },
  {
    "unicode": "f5c9",
    "label": "Tooth",
    "name": "tooth",
    "styles": [
      "fas",
      "far",
      "fal"
    ],
    "membership": {
      "free": [
        "fas"
      ],
      "pro": [
        "fas",
        "far",
        "fal"
      ]
    }
  },
  {
    "unicode": "f552",
    "label": "Toolbox",
    "name": "toolbox",
    "styles": [
      "fas",
      "far",
      "fal"
    ],
    "membership": {
      "free": [
        "fas"
      ],
      "pro": [
        "fas",
        "far",
        "fal"
      ]
    }
  },
  {
    "unicode": "f205",
    "label": "Toggle On",
    "name": "toggle-on",
    "styles": [
      "fas",
      "far",
      "fal"
    ],
    "membership": {
      "free": [
        "fas"
      ],
      "pro": [
        "fas",
        "far",
        "fal"
      ]
    }
  },
  {
    "unicode": "f204",
    "label": "Toggle Off",
    "name": "toggle-off",
    "styles": [
      "fas",
      "far",
      "fal"
    ],
    "membership": {
      "free": [
        "fas"
      ],
      "pro": [
        "fas",
        "far",
        "fal"
      ]
    }
  },
  {
    "unicode": "f5c8",
    "label": "Tired Face",
    "name": "tired",
    "styles": [
      "fas",
      "far",
      "fal"
    ],
    "membership": {
      "free": [
        "fas",
        "far"
      ],
      "pro": [
        "fas",
        "far",
        "fal"
      ]
    }
  },
  {
    "unicode": "f634",
    "label": "Tire Rugged",
    "name": "tire-rugged",
    "styles": [
      "fas",
      "far",
      "fal"
    ],
    "membership": {
      "free": [],
      "pro": [
        "fas",
        "far",
        "fal"
      ]
    }
  },
  {
    "unicode": "f633",
    "label": "Tire Pressure-warning",
    "name": "tire-pressure-warning",
    "styles": [
      "fas",
      "far",
      "fal"
    ],
    "membership": {
      "free": [],
      "pro": [
        "fas",
        "far",
        "fal"
      ]
    }
  },
  {
    "unicode": "f632",
    "label": "Tire Flat",
    "name": "tire-flat",
    "styles": [
      "fas",
      "far",
      "fal"
    ],
    "membership": {
      "free": [],
      "pro": [
        "fas",
        "far",
        "fal"
      ]
    }
  },
  {
    "unicode": "f631",
    "label": "Tire",
    "name": "tire",
    "styles": [
      "fas",
      "far",
      "fal"
    ],
    "membership": {
      "free": [],
      "pro": [
        "fas",
        "far",
        "fal"
      ]
    }
  },
  {
    "unicode": "f5c7",
    "label": "Tint Slash",
    "name": "tint-slash",
    "styles": [
      "fas",
      "far",
      "fal"
    ],
    "membership": {
      "free": [
        "fas"
      ],
      "pro": [
        "fas",
        "far",
        "fal"
      ]
    }
  },
  {
    "unicode": "f043",
    "label": "tint",
    "name": "tint",
    "styles": [
      "fas",
      "far",
      "fal"
    ],
    "membership": {
      "free": [
        "fas"
      ],
      "pro": [
        "fas",
        "far",
        "fal"
      ]
    }
  },
  {
    "unicode": "f2d3",
    "label": "Times Square",
    "name": "times-square",
    "styles": [
      "fas",
      "far",
      "fal"
    ],
    "membership": {
      "free": [],
      "pro": [
        "fas",
        "far",
        "fal"
      ]
    }
  },
  {
    "unicode": "f2f0",
    "label": "Times Octagon",
    "name": "times-octagon",
    "styles": [
      "fas",
      "far",
      "fal"
    ],
    "membership": {
      "free": [],
      "pro": [
        "fas",
        "far",
        "fal"
      ]
    }
  },
  {
    "unicode": "f2ee",
    "label": "Times Hexagon",
    "name": "times-hexagon",
    "styles": [
      "fas",
      "far",
      "fal"
    ],
    "membership": {
      "free": [],
      "pro": [
        "fas",
        "far",
        "fal"
      ]
    }
  },
  {
    "unicode": "f057",
    "label": "Times Circle",
    "name": "times-circle",
    "styles": [
      "fas",
      "far",
      "fal"
    ],
    "membership": {
      "free": [
        "fas",
        "far"
      ],
      "pro": [
        "fas",
        "far",
        "fal"
      ]
    }
  },
  {
    "unicode": "f00d",
    "label": "Times",
    "name": "times",
    "styles": [
      "fas",
      "far",
      "fal"
    ],
    "membership": {
      "free": [
        "fas"
      ],
      "pro": [
        "fas",
        "far",
        "fal"
      ]
    }
  },
  {
    "unicode": "f3ff",
    "label": "Alternate Ticket",
    "name": "ticket-alt",
    "styles": [
      "fas",
      "far",
      "fal"
    ],
    "membership": {
      "free": [
        "fas"
      ],
      "pro": [
        "fas",
        "far",
        "fal"
      ]
    }
  },
  {
    "unicode": "f145",
    "label": "Ticket",
    "name": "ticket",
    "styles": [
      "fas",
      "far",
      "fal"
    ],
    "membership": {
      "free": [],
      "pro": [
        "fas",
        "far",
        "fal"
      ]
    }
  },
  {
    "unicode": "f08d",
    "label": "Thumbtack",
    "name": "thumbtack",
    "styles": [
      "fas",
      "far",
      "fal"
    ],
    "membership": {
      "free": [
        "fas"
      ],
      "pro": [
        "fas",
        "far",
        "fal"
      ]
    }
  },
  {
    "unicode": "f164",
    "label": "thumbs-up",
    "name": "thumbs-up",
    "styles": [
      "fas",
      "far",
      "fal"
    ],
    "membership": {
      "free": [
        "fas",
        "far"
      ],
      "pro": [
        "fas",
        "far",
        "fal"
      ]
    }
  },
  {
    "unicode": "f165",
    "label": "thumbs-down",
    "name": "thumbs-down",
    "styles": [
      "fas",
      "far",
      "fal"
    ],
    "membership": {
      "free": [
        "fas",
        "far"
      ],
      "pro": [
        "fas",
        "far",
        "fal"
      ]
    }
  },
  {
    "unicode": "f2c8",
    "label": "Thermometer 3/4 Full",
    "name": "thermometer-three-quarters",
    "styles": [
      "fas",
      "far",
      "fal"
    ],
    "membership": {
      "free": [
        "fas"
      ],
      "pro": [
        "fas",
        "far",
        "fal"
      ]
    }
  },
  {
    "unicode": "f2ca",
    "label": "Thermometer 1/4 Full",
    "name": "thermometer-quarter",
    "styles": [
      "fas",
      "far",
      "fal"
    ],
    "membership": {
      "free": [
        "fas"
      ],
      "pro": [
        "fas",
        "far",
        "fal"
      ]
    }
  },
  {
    "unicode": "f2c9",
    "label": "Thermometer 1/2 Full",
    "name": "thermometer-half",
    "styles": [
      "fas",
      "far",
      "fal"
    ],
    "membership": {
      "free": [
        "fas"
      ],
      "pro": [
        "fas",
        "far",
        "fal"
      ]
    }
  },
  {
    "unicode": "f2c7",
    "label": "Thermometer Full",
    "name": "thermometer-full",
    "styles": [
      "fas",
      "far",
      "fal"
    ],
    "membership": {
      "free": [
        "fas"
      ],
      "pro": [
        "fas",
        "far",
        "fal"
      ]
    }
  },
  {
    "unicode": "f2cb",
    "label": "Thermometer Empty",
    "name": "thermometer-empty",
    "styles": [
      "fas",
      "far",
      "fal"
    ],
    "membership": {
      "free": [
        "fas"
      ],
      "pro": [
        "fas",
        "far",
        "fal"
      ]
    }
  },
  {
    "unicode": "f491",
    "label": "Thermometer",
    "name": "thermometer",
    "styles": [
      "fas",
      "far",
      "fal"
    ],
    "membership": {
      "free": [
        "fas"
      ],
      "pro": [
        "fas",
        "far",
        "fal"
      ]
    }
  },
  {
    "unicode": "f2b2",
    "label": "ThemeIsle",
    "name": "themeisle",
    "styles": [
      "fab"
    ],
    "membership": {
      "free": [
        "fab"
      ],
      "pro": [
        "fab"
      ]
    }
  },
  {
    "unicode": "f5c6",
    "label": "Themeco",
    "name": "themeco",
    "styles": [
      "fab"
    ],
    "membership": {
      "free": [
        "fab"
      ],
      "pro": [
        "fab"
      ]
    }
  },
  {
    "unicode": "f630",
    "label": "Theater Masks",
    "name": "theater-masks",
    "styles": [
      "fas",
      "far",
      "fal"
    ],
    "membership": {
      "free": [
        "fas"
      ],
      "pro": [
        "fas",
        "far",
        "fal"
      ]
    }
  },
  {
    "unicode": "f00b",
    "label": "th-list",
    "name": "th-list",
    "styles": [
      "fas",
      "far",
      "fal"
    ],
    "membership": {
      "free": [
        "fas"
      ],
      "pro": [
        "fas",
        "far",
        "fal"
      ]
    }
  },
  {
    "unicode": "f009",
    "label": "th-large",
    "name": "th-large",
    "styles": [
      "fas",
      "far",
      "fal"
    ],
    "membership": {
      "free": [
        "fas"
      ],
      "pro": [
        "fas",
        "far",
        "fal"
      ]
    }
  },
  {
    "unicode": "f00a",
    "label": "th",
    "name": "th",
    "styles": [
      "fas",
      "far",
      "fal"
    ],
    "membership": {
      "free": [
        "fas"
      ],
      "pro": [
        "fas",
        "far",
        "fal"
      ]
    }
  },
  {
    "unicode": "f035",
    "label": "text-width",
    "name": "text-width",
    "styles": [
      "fas",
      "far",
      "fal"
    ],
    "membership": {
      "free": [
        "fas"
      ],
      "pro": [
        "fas",
        "far",
        "fal"
      ]
    }
  },
  {
    "unicode": "f034",
    "label": "text-height",
    "name": "text-height",
    "styles": [
      "fas",
      "far",
      "fal"
    ],
    "membership": {
      "free": [
        "fas"
      ],
      "pro": [
        "fas",
        "far",
        "fal"
      ]
    }
  },
  {
    "unicode": "f120",
    "label": "Terminal",
    "name": "terminal",
    "styles": [
      "fas",
      "far",
      "fal"
    ],
    "membership": {
      "free": [
        "fas"
      ],
      "pro": [
        "fas",
        "far",
        "fal"
      ]
    }
  },
  {
    "unicode": "f45e",
    "label": "Tennis Ball",
    "name": "tennis-ball",
    "styles": [
      "fas",
      "far",
      "fal"
    ],
    "membership": {
      "free": [],
      "pro": [
        "fas",
        "far",
        "fal"
      ]
    }
  },
  {
    "unicode": "f1d5",
    "label": "Tencent Weibo",
    "name": "tencent-weibo",
    "styles": [
      "fab"
    ],
    "membership": {
      "free": [
        "fab"
      ],
      "pro": [
        "fab"
      ]
    }
  },
  {
    "unicode": "f3fe",
    "label": "Telegram Plane",
    "name": "telegram-plane",
    "styles": [
      "fab"
    ],
    "membership": {
      "free": [
        "fab"
      ],
      "pro": [
        "fab"
      ]
    }
  },
  {
    "unicode": "f2c6",
    "label": "Telegram",
    "name": "telegram",
    "styles": [
      "fab"
    ],
    "membership": {
      "free": [
        "fab"
      ],
      "pro": [
        "fab"
      ]
    }
  },
  {
    "unicode": "f62f",
    "label": "Teeth Open",
    "name": "teeth-open",
    "styles": [
      "fas",
      "far",
      "fal"
    ],
    "membership": {
      "free": [
        "fas"
      ],
      "pro": [
        "fas",
        "far",
        "fal"
      ]
    }
  },
  {
    "unicode": "f62e",
    "label": "Teeth",
    "name": "teeth",
    "styles": [
      "fas",
      "far",
      "fal"
    ],
    "membership": {
      "free": [
        "fas"
      ],
      "pro": [
        "fas",
        "far",
        "fal"
      ]
    }
  },
  {
    "unicode": "f4f9",
    "label": "TeamSpeak",
    "name": "teamspeak",
    "styles": [
      "fab"
    ],
    "membership": {
      "free": [
        "fab"
      ],
      "pro": [
        "fab"
      ]
    }
  },
  {
    "unicode": "f1ba",
    "label": "Taxi",
    "name": "taxi",
    "styles": [
      "fas",
      "far",
      "fal"
    ],
    "membership": {
      "free": [
        "fas"
      ],
      "pro": [
        "fas",
        "far",
        "fal"
      ]
    }
  },
  {
    "unicode": "f0ae",
    "label": "Tasks",
    "name": "tasks",
    "styles": [
      "fas",
      "far",
      "fal"
    ],
    "membership": {
      "free": [
        "fas"
      ],
      "pro": [
        "fas",
        "far",
        "fal"
      ]
    }
  },
  {
    "unicode": "f4db",
    "label": "Tape",
    "name": "tape",
    "styles": [
      "fas",
      "far",
      "fal"
    ],
    "membership": {
      "free": [
        "fas"
      ],
      "pro": [
        "fas",
        "far",
        "fal"
      ]
    }
  },
  {
    "unicode": "f02c",
    "label": "tags",
    "name": "tags",
    "styles": [
      "fas",
      "far",
      "fal"
    ],
    "membership": {
      "free": [
        "fas"
      ],
      "pro": [
        "fas",
        "far",
        "fal"
      ]
    }
  },
  {
    "unicode": "f02b",
    "label": "tag",
    "name": "tag",
    "styles": [
      "fas",
      "far",
      "fal"
    ],
    "membership": {
      "free": [
        "fas"
      ],
      "pro": [
        "fas",
        "far",
        "fal"
      ]
    }
  },
  {
    "unicode": "f62d",
    "label": "Tachometer Slowest",
    "name": "tachometer-slowest",
    "styles": [
      "fas",
      "far",
      "fal"
    ],
    "membership": {
      "free": [],
      "pro": [
        "fas",
        "far",
        "fal"
      ]
    }
  },
  {
    "unicode": "f62c",
    "label": "Tachometer Slow",
    "name": "tachometer-slow",
    "styles": [
      "fas",
      "far",
      "fal"
    ],
    "membership": {
      "free": [],
      "pro": [
        "fas",
        "far",
        "fal"
      ]
    }
  },
  {
    "unicode": "f62b",
    "label": "Tachometer Fastest",
    "name": "tachometer-fastest",
    "styles": [
      "fas",
      "far",
      "fal"
    ],
    "membership": {
      "free": [],
      "pro": [
        "fas",
        "far",
        "fal"
      ]
    }
  },
  {
    "unicode": "f62a",
    "label": "Tachometer Fast",
    "name": "tachometer-fast",
    "styles": [
      "fas",
      "far",
      "fal"
    ],
    "membership": {
      "free": [],
      "pro": [
        "fas",
        "far",
        "fal"
      ]
    }
  },
  {
    "unicode": "f629",
    "label": "Tachometer Average",
    "name": "tachometer-average",
    "styles": [
      "fas",
      "far",
      "fal"
    ],
    "membership": {
      "free": [],
      "pro": [
        "fas",
        "far",
        "fal"
      ]
    }
  },
  {
    "unicode": "f628",
    "label": "Tachometer Alt-slowest",
    "name": "tachometer-alt-slowest",
    "styles": [
      "fas",
      "far",
      "fal"
    ],
    "membership": {
      "free": [],
      "pro": [
        "fas",
        "far",
        "fal"
      ]
    }
  },
  {
    "unicode": "f627",
    "label": "Tachometer Alt-slow",
    "name": "tachometer-alt-slow",
    "styles": [
      "fas",
      "far",
      "fal"
    ],
    "membership": {
      "free": [],
      "pro": [
        "fas",
        "far",
        "fal"
      ]
    }
  },
  {
    "unicode": "f626",
    "label": "Tachometer Alt-fastest",
    "name": "tachometer-alt-fastest",
    "styles": [
      "fas",
      "far",
      "fal"
    ],
    "membership": {
      "free": [],
      "pro": [
        "fas",
        "far",
        "fal"
      ]
    }
  },
  {
    "unicode": "f625",
    "label": "Tachometer Alt-fast",
    "name": "tachometer-alt-fast",
    "styles": [
      "fas",
      "far",
      "fal"
    ],
    "membership": {
      "free": [],
      "pro": [
        "fas",
        "far",
        "fal"
      ]
    }
  },
  {
    "unicode": "f624",
    "label": "Tachometer Alt-average",
    "name": "tachometer-alt-average",
    "styles": [
      "fas",
      "far",
      "fal"
    ],
    "membership": {
      "free": [],
      "pro": [
        "fas",
        "far",
        "fal"
      ]
    }
  },
  {
    "unicode": "f3fd",
    "label": "Alternate Tachometer",
    "name": "tachometer-alt",
    "styles": [
      "fas",
      "far",
      "fal"
    ],
    "membership": {
      "free": [
        "fas"
      ],
      "pro": [
        "fas",
        "far",
        "fal"
      ]
    }
  },
  {
    "unicode": "f0e4",
    "label": "Tachometer",
    "name": "tachometer",
    "styles": [
      "fas",
      "far",
      "fal"
    ],
    "membership": {
      "free": [],
      "pro": [
        "fas",
        "far",
        "fal"
      ]
    }
  },
  {
    "unicode": "f490",
    "label": "Tablets",
    "name": "tablets",
    "styles": [
      "fas",
      "far",
      "fal"
    ],
    "membership": {
      "free": [
        "fas"
      ],
      "pro": [
        "fas",
        "far",
        "fal"
      ]
    }
  },
  {
    "unicode": "f48f",
    "label": "Rugged Tablet",
    "name": "tablet-rugged",
    "styles": [
      "fas",
      "far",
      "fal"
    ],
    "membership": {
      "free": [],
      "pro": [
        "fas",
        "far",
        "fal"
      ]
    }
  },
  {
    "unicode": "f3fc",
    "label": "Alternate Tablet Android",
    "name": "tablet-android-alt",
    "styles": [
      "fas",
      "far",
      "fal"
    ],
    "membership": {
      "free": [],
      "pro": [
        "fas",
        "far",
        "fal"
      ]
    }
  },
  {
    "unicode": "f3fb",
    "label": "Tablet Android",
    "name": "tablet-android",
    "styles": [
      "fas",
      "far",
      "fal"
    ],
    "membership": {
      "free": [],
      "pro": [
        "fas",
        "far",
        "fal"
      ]
    }
  },
  {
    "unicode": "f3fa",
    "label": "Alternate Tablet",
    "name": "tablet-alt",
    "styles": [
      "fas",
      "far",
      "fal"
    ],
    "membership": {
      "free": [
        "fas"
      ],
      "pro": [
        "fas",
        "far",
        "fal"
      ]
    }
  },
  {
    "unicode": "f10a",
    "label": "tablet",
    "name": "tablet",
    "styles": [
      "fas",
      "far",
      "fal"
    ],
    "membership": {
      "free": [
        "fas"
      ],
      "pro": [
        "fas",
        "far",
        "fal"
      ]
    }
  },
  {
    "unicode": "f45d",
    "label": "Table Tennis",
    "name": "table-tennis",
    "styles": [
      "fas",
      "far",
      "fal"
    ],
    "membership": {
      "free": [
        "fas"
      ],
      "pro": [
        "fas",
        "far",
        "fal"
      ]
    }
  },
  {
    "unicode": "f0ce",
    "label": "table",
    "name": "table",
    "styles": [
      "fas",
      "far",
      "fal"
    ],
    "membership": {
      "free": [
        "fas"
      ],
      "pro": [
        "fas",
        "far",
        "fal"
      ]
    }
  },
  {
    "unicode": "f48e",
    "label": "Syringe",
    "name": "syringe",
    "styles": [
      "fas",
      "far",
      "fal"
    ],
    "membership": {
      "free": [
        "fas"
      ],
      "pro": [
        "fas",
        "far",
        "fal"
      ]
    }
  },
  {
    "unicode": "f2f1",
    "label": "Alternate Sync",
    "name": "sync-alt",
    "styles": [
      "fas",
      "far",
      "fal"
    ],
    "membership": {
      "free": [
        "fas"
      ],
      "pro": [
        "fas",
        "far",
        "fal"
      ]
    }
  },
  {
    "unicode": "f021",
    "label": "Sync",
    "name": "sync",
    "styles": [
      "fas",
      "far",
      "fal"
    ],
    "membership": {
      "free": [
        "fas"
      ],
      "pro": [
        "fas",
        "far",
        "fal"
      ]
    }
  },
  {
    "unicode": "f5c5",
    "label": "Swimming Pool",
    "name": "swimming-pool",
    "styles": [
      "fas",
      "far",
      "fal"
    ],
    "membership": {
      "free": [
        "fas"
      ],
      "pro": [
        "fas",
        "far",
        "fal"
      ]
    }
  },
  {
    "unicode": "f5c4",
    "label": "Swimmer",
    "name": "swimmer",
    "styles": [
      "fas",
      "far",
      "fal"
    ],
    "membership": {
      "free": [
        "fas"
      ],
      "pro": [
        "fas",
        "far",
        "fal"
      ]
    }
  },
  {
    "unicode": "f5c3",
    "label": "Swatchbook",
    "name": "swatchbook",
    "styles": [
      "fas",
      "far",
      "fal"
    ],
    "membership": {
      "free": [
        "fas"
      ],
      "pro": [
        "fas",
        "far",
        "fal"
      ]
    }
  },
  {
    "unicode": "f5c2",
    "label": "Hushed Face",
    "name": "surprise",
    "styles": [
      "fas",
      "far",
      "fal"
    ],
    "membership": {
      "free": [
        "fas",
        "far"
      ],
      "pro": [
        "fas",
        "far",
        "fal"
      ]
    }
  },
  {
    "unicode": "f3f9",
    "label": "Supple",
    "name": "supple",
    "styles": [
      "fab"
    ],
    "membership": {
      "free": [
        "fab"
      ],
      "pro": [
        "fab"
      ]
    }
  },
  {
    "unicode": "f12b",
    "label": "superscript",
    "name": "superscript",
    "styles": [
      "fas",
      "far",
      "fal"
    ],
    "membership": {
      "free": [
        "fas"
      ],
      "pro": [
        "fas",
        "far",
        "fal"
      ]
    }
  },
  {
    "unicode": "f2dd",
    "label": "Superpowers",
    "name": "superpowers",
    "styles": [
      "fab"
    ],
    "membership": {
      "free": [
        "fab"
      ],
      "pro": [
        "fab"
      ]
    }
  },
  {
    "unicode": "f185",
    "label": "Sun",
    "name": "sun",
    "styles": [
      "fas",
      "far",
      "fal"
    ],
    "membership": {
      "free": [
        "fas",
        "far"
      ],
      "pro": [
        "fas",
        "far",
        "fal"
      ]
    }
  },
  {
    "unicode": "f5c1",
    "label": "Suitcase Rolling",
    "name": "suitcase-rolling",
    "styles": [
      "fas",
      "far",
      "fal"
    ],
    "membership": {
      "free": [
        "fas"
      ],
      "pro": [
        "fas",
        "far",
        "fal"
      ]
    }
  },
  {
    "unicode": "f0f2",
    "label": "Suitcase",
    "name": "suitcase",
    "styles": [
      "fas",
      "far",
      "fal"
    ],
    "membership": {
      "free": [
        "fas"
      ],
      "pro": [
        "fas",
        "far",
        "fal"
      ]
    }
  },
  {
    "unicode": "f239",
    "label": "Subway",
    "name": "subway",
    "styles": [
      "fas",
      "far",
      "fal"
    ],
    "membership": {
      "free": [
        "fas"
      ],
      "pro": [
        "fas",
        "far",
        "fal"
      ]
    }
  },
  {
    "unicode": "f12c",
    "label": "subscript",
    "name": "subscript",
    "styles": [
      "fas",
      "far",
      "fal"
    ],
    "membership": {
      "free": [
        "fas"
      ],
      "pro": [
        "fas",
        "far",
        "fal"
      ]
    }
  },
  {
    "unicode": "f1a3",
    "label": "StumbleUpon Circle",
    "name": "stumbleupon-circle",
    "styles": [
      "fab"
    ],
    "membership": {
      "free": [
        "fab"
      ],
      "pro": [
        "fab"
      ]
    }
  },
  {
    "unicode": "f1a4",
    "label": "StumbleUpon Logo",
    "name": "stumbleupon",
    "styles": [
      "fab"
    ],
    "membership": {
      "free": [
        "fab"
      ],
      "pro": [
        "fab"
      ]
    }
  },
  {
    "unicode": "f3f8",
    "label": "Studio Vinari",
    "name": "studiovinari",
    "styles": [
      "fab"
    ],
    "membership": {
      "free": [
        "fab"
      ],
      "pro": [
        "fab"
      ]
    }
  },
  {
    "unicode": "f551",
    "label": "Stroopwafel",
    "name": "stroopwafel",
    "styles": [
      "fas",
      "far",
      "fal"
    ],
    "membership": {
      "free": [
        "fas"
      ],
      "pro": [
        "fas",
        "far",
        "fal"
      ]
    }
  },
  {
    "unicode": "f42a",
    "label": "Stripe S",
    "name": "stripe-s",
    "styles": [
      "fab"
    ],
    "membership": {
      "free": [
        "fab"
      ],
      "pro": [
        "fab"
      ]
    }
  },
  {
    "unicode": "f429",
    "label": "Stripe",
    "name": "stripe",
    "styles": [
      "fab"
    ],
    "membership": {
      "free": [
        "fab"
      ],
      "pro": [
        "fab"
      ]
    }
  },
  {
    "unicode": "f0cc",
    "label": "Strikethrough",
    "name": "strikethrough",
    "styles": [
      "fas",
      "far",
      "fal"
    ],
    "membership": {
      "free": [
        "fas"
      ],
      "pro": [
        "fas",
        "far",
        "fal"
      ]
    }
  },
  {
    "unicode": "f21d",
    "label": "Street View",
    "name": "street-view",
    "styles": [
      "fas",
      "far",
      "fal"
    ],
    "membership": {
      "free": [
        "fas"
      ],
      "pro": [
        "fas",
        "far",
        "fal"
      ]
    }
  },
  {
    "unicode": "f550",
    "label": "Stream",
    "name": "stream",
    "styles": [
      "fas",
      "far",
      "fal"
    ],
    "membership": {
      "free": [
        "fas"
      ],
      "pro": [
        "fas",
        "far",
        "fal"
      ]
    }
  },
  {
    "unicode": "f428",
    "label": "Strava",
    "name": "strava",
    "styles": [
      "fab"
    ],
    "membership": {
      "free": [
        "fab"
      ],
      "pro": [
        "fab"
      ]
    }
  },
  {
    "unicode": "f54f",
    "label": "Alternate Store",
    "name": "store-alt",
    "styles": [
      "fas",
      "far",
      "fal"
    ],
    "membership": {
      "free": [
        "fas"
      ],
      "pro": [
        "fas",
        "far",
        "fal"
      ]
    }
  },
  {
    "unicode": "f54e",
    "label": "Store",
    "name": "store",
    "styles": [
      "fas",
      "far",
      "fal"
    ],
    "membership": {
      "free": [
        "fas"
      ],
      "pro": [
        "fas",
        "far",
        "fal"
      ]
    }
  },
  {
    "unicode": "f2f2",
    "label": "Stopwatch",
    "name": "stopwatch",
    "styles": [
      "fas",
      "far",
      "fal"
    ],
    "membership": {
      "free": [
        "fas"
      ],
      "pro": [
        "fas",
        "far",
        "fal"
      ]
    }
  },
  {
    "unicode": "f28d",
    "label": "Stop Circle",
    "name": "stop-circle",
    "styles": [
      "fas",
      "far",
      "fal"
    ],
    "membership": {
      "free": [
        "fas",
        "far"
      ],
      "pro": [
        "fas",
        "far",
        "fal"
      ]
    }
  },
  {
    "unicode": "f04d",
    "label": "stop",
    "name": "stop",
    "styles": [
      "fas",
      "far",
      "fal"
    ],
    "membership": {
      "free": [
        "fas"
      ],
      "pro": [
        "fas",
        "far",
        "fal"
      ]
    }
  },
  {
    "unicode": "f623",
    "label": "Stomach",
    "name": "stomach",
    "styles": [
      "fas",
      "far",
      "fal"
    ],
    "membership": {
      "free": [],
      "pro": [
        "fas",
        "far",
        "fal"
      ]
    }
  },
  {
    "unicode": "f249",
    "label": "Sticky Note",
    "name": "sticky-note",
    "styles": [
      "fas",
      "far",
      "fal"
    ],
    "membership": {
      "free": [
        "fas",
        "far"
      ],
      "pro": [
        "fas",
        "far",
        "fal"
      ]
    }
  },
  {
    "unicode": "f3f7",
    "label": "Sticker Mule",
    "name": "sticker-mule",
    "styles": [
      "fab"
    ],
    "membership": {
      "free": [
        "fab"
      ],
      "pro": [
        "fab"
      ]
    }
  },
  {
    "unicode": "f0f1",
    "label": "Stethoscope",
    "name": "stethoscope",
    "styles": [
      "fas",
      "far",
      "fal"
    ],
    "membership": {
      "free": [
        "fas"
      ],
      "pro": [
        "fas",
        "far",
        "fal"
      ]
    }
  },
  {
    "unicode": "f051",
    "label": "step-forward",
    "name": "step-forward",
    "styles": [
      "fas",
      "far",
      "fal"
    ],
    "membership": {
      "free": [
        "fas"
      ],
      "pro": [
        "fas",
        "far",
        "fal"
      ]
    }
  },
  {
    "unicode": "f048",
    "label": "step-backward",
    "name": "step-backward",
    "styles": [
      "fas",
      "far",
      "fal"
    ],
    "membership": {
      "free": [
        "fas"
      ],
      "pro": [
        "fas",
        "far",
        "fal"
      ]
    }
  },
  {
    "unicode": "f622",
    "label": "Wheel Steering",
    "name": "steering-wheel",
    "styles": [
      "fas",
      "far",
      "fal"
    ],
    "membership": {
      "free": [],
      "pro": [
        "fas",
        "far",
        "fal"
      ]
    }
  },
  {
    "unicode": "f3f6",
    "label": "Steam Symbol",
    "name": "steam-symbol",
    "styles": [
      "fab"
    ],
    "membership": {
      "free": [
        "fab"
      ],
      "pro": [
        "fab"
      ]
    }
  },
  {
    "unicode": "f1b7",
    "label": "Steam Square",
    "name": "steam-square",
    "styles": [
      "fab"
    ],
    "membership": {
      "free": [
        "fab"
      ],
      "pro": [
        "fab"
      ]
    }
  },
  {
    "unicode": "f1b6",
    "label": "Steam",
    "name": "steam",
    "styles": [
      "fab"
    ],
    "membership": {
      "free": [
        "fab"
      ],
      "pro": [
        "fab"
      ]
    }
  },
  {
    "unicode": "f3f5",
    "label": "StayLinked",
    "name": "staylinked",
    "styles": [
      "fab"
    ],
    "membership": {
      "free": [
        "fab"
      ],
      "pro": [
        "fab"
      ]
    }
  },
  {
    "unicode": "f621",
    "label": "Star Of-life",
    "name": "star-of-life",
    "styles": [
      "fas",
      "far",
      "fal"
    ],
    "membership": {
      "free": [
        "fas"
      ],
      "pro": [
        "fas",
        "far",
        "fal"
      ]
    }
  },
  {
    "unicode": "f5c0",
    "label": "Alternate Star Half",
    "name": "star-half-alt",
    "styles": [
      "fas",
      "far",
      "fal"
    ],
    "membership": {
      "free": [
        "fas"
      ],
      "pro": [
        "fas",
        "far",
        "fal"
      ]
    }
  },
  {
    "unicode": "f089",
    "label": "star-half",
    "name": "star-half",
    "styles": [
      "fas",
      "far",
      "fal"
    ],
    "membership": {
      "free": [
        "fas",
        "far"
      ],
      "pro": [
        "fas",
        "far",
        "fal"
      ]
    }
  },
  {
    "unicode": "f2f3",
    "label": "Exclamation Star",
    "name": "star-exclamation",
    "styles": [
      "fas",
      "far",
      "fal"
    ],
    "membership": {
      "free": [],
      "pro": [
        "fas",
        "far",
        "fal"
      ]
    }
  },
  {
    "unicode": "f005",
    "label": "Star",
    "name": "star",
    "styles": [
      "fas",
      "far",
      "fal"
    ],
    "membership": {
      "free": [
        "fas",
        "far"
      ],
      "pro": [
        "fas",
        "far",
        "fal"
      ]
    }
  },
  {
    "unicode": "f5bf",
    "label": "Stamp",
    "name": "stamp",
    "styles": [
      "fas",
      "far",
      "fal"
    ],
    "membership": {
      "free": [
        "fas"
      ],
      "pro": [
        "fas",
        "far",
        "fal"
      ]
    }
  },
  {
    "unicode": "f16c",
    "label": "Stack Overflow",
    "name": "stack-overflow",
    "styles": [
      "fab"
    ],
    "membership": {
      "free": [
        "fab"
      ],
      "pro": [
        "fab"
      ]
    }
  },
  {
    "unicode": "f18d",
    "label": "Stack Exchange",
    "name": "stack-exchange",
    "styles": [
      "fab"
    ],
    "membership": {
      "free": [
        "fab"
      ],
      "pro": [
        "fab"
      ]
    }
  },
  {
    "unicode": "f5be",
    "label": "Squarespace",
    "name": "squarespace",
    "styles": [
      "fab"
    ],
    "membership": {
      "free": [
        "fab"
      ],
      "pro": [
        "fab"
      ]
    }
  },
  {
    "unicode": "f45c",
    "label": "Square Full",
    "name": "square-full",
    "styles": [
      "fas",
      "far",
      "fal"
    ],
    "membership": {
      "free": [
        "fas"
      ],
      "pro": [
        "fas",
        "far",
        "fal"
      ]
    }
  },
  {
    "unicode": "f0c8",
    "label": "Square",
    "name": "square",
    "styles": [
      "fas",
      "far",
      "fal"
    ],
    "membership": {
      "free": [
        "fas",
        "far"
      ],
      "pro": [
        "fas",
        "far",
        "fal"
      ]
    }
  },
  {
    "unicode": "f5bd",
    "label": "Spray Can",
    "name": "spray-can",
    "styles": [
      "fas",
      "far",
      "fal"
    ],
    "membership": {
      "free": [
        "fas"
      ],
      "pro": [
        "fas",
        "far",
        "fal"
      ]
    }
  },
  {
    "unicode": "f1bc",
    "label": "Spotify",
    "name": "spotify",
    "styles": [
      "fab"
    ],
    "membership": {
      "free": [
        "fab"
      ],
      "pro": [
        "fab"
      ]
    }
  },
  {
    "unicode": "f5bc",
    "label": "Splotch",
    "name": "splotch",
    "styles": [
      "fas",
      "far",
      "fal"
    ],
    "membership": {
      "free": [
        "fas"
      ],
      "pro": [
        "fas",
        "far",
        "fal"
      ]
    }
  },
  {
    "unicode": "f3f4",
    "label": "Spinner Third",
    "name": "spinner-third",
    "styles": [
      "fas",
      "far",
      "fal"
    ],
    "membership": {
      "free": [],
      "pro": [
        "fas",
        "far",
        "fal"
      ]
    }
  },
  {
    "unicode": "f110",
    "label": "Spinner",
    "name": "spinner",
    "styles": [
      "fas",
      "far",
      "fal"
    ],
    "membership": {
      "free": [
        "fas"
      ],
      "pro": [
        "fas",
        "far",
        "fal"
      ]
    }
  },
  {
    "unicode": "f3f3",
    "label": "Speakap",
    "name": "speakap",
    "styles": [
      "fab"
    ],
    "membership": {
      "free": [
        "fab"
      ],
      "pro": [
        "fab"
      ]
    }
  },
  {
    "unicode": "f2f4",
    "label": "Spade",
    "name": "spade",
    "styles": [
      "fas",
      "far",
      "fal"
    ],
    "membership": {
      "free": [],
      "pro": [
        "fas",
        "far",
        "fal"
      ]
    }
  },
  {
    "unicode": "f197",
    "label": "Space Shuttle",
    "name": "space-shuttle",
    "styles": [
      "fas",
      "far",
      "fal"
    ],
    "membership": {
      "free": [
        "fas"
      ],
      "pro": [
        "fas",
        "far",
        "fal"
      ]
    }
  },
  {
    "unicode": "f5bb",
    "label": "Spa",
    "name": "spa",
    "styles": [
      "fas",
      "far",
      "fal"
    ],
    "membership": {
      "free": [
        "fas"
      ],
      "pro": [
        "fas",
        "far",
        "fal"
      ]
    }
  },
  {
    "unicode": "f1be",
    "label": "SoundCloud",
    "name": "soundcloud",
    "styles": [
      "fab"
    ],
    "membership": {
      "free": [
        "fab"
      ],
      "pro": [
        "fab"
      ]
    }
  },
  {
    "unicode": "f0de",
    "label": "Sort Up (Ascending)",
    "name": "sort-up",
    "styles": [
      "fas",
      "far",
      "fal"
    ],
    "membership": {
      "free": [
        "fas"
      ],
      "pro": [
        "fas",
        "far",
        "fal"
      ]
    }
  },
  {
    "unicode": "f163",
    "label": "Sort Numeric Up",
    "name": "sort-numeric-up",
    "styles": [
      "fas",
      "far",
      "fal"
    ],
    "membership": {
      "free": [
        "fas"
      ],
      "pro": [
        "fas",
        "far",
        "fal"
      ]
    }
  },
  {
    "unicode": "f162",
    "label": "Sort Numeric Down",
    "name": "sort-numeric-down",
    "styles": [
      "fas",
      "far",
      "fal"
    ],
    "membership": {
      "free": [
        "fas"
      ],
      "pro": [
        "fas",
        "far",
        "fal"
      ]
    }
  },
  {
    "unicode": "f0dd",
    "label": "Sort Down (Descending)",
    "name": "sort-down",
    "styles": [
      "fas",
      "far",
      "fal"
    ],
    "membership": {
      "free": [
        "fas"
      ],
      "pro": [
        "fas",
        "far",
        "fal"
      ]
    }
  },
  {
    "unicode": "f161",
    "label": "Sort Amount Up",
    "name": "sort-amount-up",
    "styles": [
      "fas",
      "far",
      "fal"
    ],
    "membership": {
      "free": [
        "fas"
      ],
      "pro": [
        "fas",
        "far",
        "fal"
      ]
    }
  },
  {
    "unicode": "f160",
    "label": "Sort Amount Down",
    "name": "sort-amount-down",
    "styles": [
      "fas",
      "far",
      "fal"
    ],
    "membership": {
      "free": [
        "fas"
      ],
      "pro": [
        "fas",
        "far",
        "fal"
      ]
    }
  },
  {
    "unicode": "f15e",
    "label": "Sort Alpha Up",
    "name": "sort-alpha-up",
    "styles": [
      "fas",
      "far",
      "fal"
    ],
    "membership": {
      "free": [
        "fas"
      ],
      "pro": [
        "fas",
        "far",
        "fal"
      ]
    }
  },
  {
    "unicode": "f15d",
    "label": "Sort Alpha Down",
    "name": "sort-alpha-down",
    "styles": [
      "fas",
      "far",
      "fal"
    ],
    "membership": {
      "free": [
        "fas"
      ],
      "pro": [
        "fas",
        "far",
        "fal"
      ]
    }
  },
  {
    "unicode": "f0dc",
    "label": "Sort",
    "name": "sort",
    "styles": [
      "fas",
      "far",
      "fal"
    ],
    "membership": {
      "free": [
        "fas"
      ],
      "pro": [
        "fas",
        "far",
        "fal"
      ]
    }
  },
  {
    "unicode": "f5ba",
    "label": "Solar Panel",
    "name": "solar-panel",
    "styles": [
      "fas",
      "far",
      "fal"
    ],
    "membership": {
      "free": [
        "fas"
      ],
      "pro": [
        "fas",
        "far",
        "fal"
      ]
    }
  },
  {
    "unicode": "f2dc",
    "label": "Snowflake",
    "name": "snowflake",
    "styles": [
      "fas",
      "far",
      "fal"
    ],
    "membership": {
      "free": [
        "fas",
        "far"
      ],
      "pro": [
        "fas",
        "far",
        "fal"
      ]
    }
  },
  {
    "unicode": "f2ad",
    "label": "Snapchat Square",
    "name": "snapchat-square",
    "styles": [
      "fab"
    ],
    "membership": {
      "free": [
        "fab"
      ],
      "pro": [
        "fab"
      ]
    }
  },
  {
    "unicode": "f2ac",
    "label": "Snapchat Ghost",
    "name": "snapchat-ghost",
    "styles": [
      "fab"
    ],
    "membership": {
      "free": [
        "fab"
      ],
      "pro": [
        "fab"
      ]
    }
  },
  {
    "unicode": "f2ab",
    "label": "Snapchat",
    "name": "snapchat",
    "styles": [
      "fab"
    ],
    "membership": {
      "free": [
        "fab"
      ],
      "pro": [
        "fab"
      ]
    }
  },
  {
    "unicode": "f54d",
    "label": "Smoking Ban",
    "name": "smoking-ban",
    "styles": [
      "fas",
      "far",
      "fal"
    ],
    "membership": {
      "free": [
        "fas"
      ],
      "pro": [
        "fas",
        "far",
        "fal"
      ]
    }
  },
  {
    "unicode": "f48d",
    "label": "Smoking",
    "name": "smoking",
    "styles": [
      "fas",
      "far",
      "fal"
    ],
    "membership": {
      "free": [
        "fas"
      ],
      "pro": [
        "fas",
        "far",
        "fal"
      ]
    }
  },
  {
    "unicode": "f4da",
    "label": "Winking Face",
    "name": "smile-wink",
    "styles": [
      "fas",
      "far",
      "fal"
    ],
    "membership": {
      "free": [
        "fas",
        "far"
      ],
      "pro": [
        "fas",
        "far",
        "fal"
      ]
    }
  },
  {
    "unicode": "f5b9",
    "label": "Smiling Face Plus",
    "name": "smile-plus",
    "styles": [
      "fas",
      "far",
      "fal"
    ],
    "membership": {
      "free": [],
      "pro": [
        "fas",
        "far",
        "fal"
      ]
    }
  },
  {
    "unicode": "f5b8",
    "label": "Beaming Face With Smiling Eyes",
    "name": "smile-beam",
    "styles": [
      "fas",
      "far",
      "fal"
    ],
    "membership": {
      "free": [
        "fas",
        "far"
      ],
      "pro": [
        "fas",
        "far",
        "fal"
      ]
    }
  },
  {
    "unicode": "f118",
    "label": "Smiling Face",
    "name": "smile",
    "styles": [
      "fas",
      "far",
      "fal"
    ],
    "membership": {
      "free": [
        "fas",
        "far"
      ],
      "pro": [
        "fas",
        "far",
        "fal"
      ]
    }
  },
  {
    "unicode": "f1e7",
    "label": "Slideshare",
    "name": "slideshare",
    "styles": [
      "fab"
    ],
    "membership": {
      "free": [
        "fab"
      ],
      "pro": [
        "fab"
      ]
    }
  },
  {
    "unicode": "f3f2",
    "label": "Square Vertical Sliders",
    "name": "sliders-v-square",
    "styles": [
      "fas",
      "far",
      "fal"
    ],
    "membership": {
      "free": [],
      "pro": [
        "fas",
        "far",
        "fal"
      ]
    }
  },
  {
    "unicode": "f3f1",
    "label": "Vertical Sliders",
    "name": "sliders-v",
    "styles": [
      "fas",
      "far",
      "fal"
    ],
    "membership": {
      "free": [],
      "pro": [
        "fas",
        "far",
        "fal"
      ]
    }
  },
  {
    "unicode": "f3f0",
    "label": "Square Horizontal Sliders",
    "name": "sliders-h-square",
    "styles": [
      "fas",
      "far",
      "fal"
    ],
    "membership": {
      "free": [],
      "pro": [
        "fas",
        "far",
        "fal"
      ]
    }
  },
  {
    "unicode": "f1de",
    "label": "Horizontal Sliders",
    "name": "sliders-h",
    "styles": [
      "fas",
      "far",
      "fal"
    ],
    "membership": {
      "free": [
        "fas"
      ],
      "pro": [
        "fas",
        "far",
        "fal"
      ]
    }
  },
  {
    "unicode": "f3ef",
    "label": "Slack Hashtag",
    "name": "slack-hash",
    "styles": [
      "fab"
    ],
    "membership": {
      "free": [
        "fab"
      ],
      "pro": [
        "fab"
      ]
    }
  },
  {
    "unicode": "f198",
    "label": "Slack Logo",
    "name": "slack",
    "styles": [
      "fab"
    ],
    "membership": {
      "free": [
        "fab"
      ],
      "pro": [
        "fab"
      ]
    }
  },
  {
    "unicode": "f17e",
    "label": "Skype",
    "name": "skype",
    "styles": [
      "fab"
    ],
    "membership": {
      "free": [
        "fab"
      ],
      "pro": [
        "fab"
      ]
    }
  },
  {
    "unicode": "f216",
    "label": "skyatlas",
    "name": "skyatlas",
    "styles": [
      "fab"
    ],
    "membership": {
      "free": [
        "fab"
      ],
      "pro": [
        "fab"
      ]
    }
  },
  {
    "unicode": "f54c",
    "label": "Skull",
    "name": "skull",
    "styles": [
      "fas",
      "far",
      "fal"
    ],
    "membership": {
      "free": [
        "fas"
      ],
      "pro": [
        "fas",
        "far",
        "fal"
      ]
    }
  },
  {
    "unicode": "f620",
    "label": "Skeleton",
    "name": "skeleton",
    "styles": [
      "fas",
      "far",
      "fal"
    ],
    "membership": {
      "free": [],
      "pro": [
        "fas",
        "far",
        "fal"
      ]
    }
  },
  {
    "unicode": "f512",
    "label": "Sith",
    "name": "sith",
    "styles": [
      "fab"
    ],
    "membership": {
      "free": [
        "fab"
      ],
      "pro": [
        "fab"
      ]
    }
  },
  {
    "unicode": "f0e8",
    "label": "Sitemap",
    "name": "sitemap",
    "styles": [
      "fas",
      "far",
      "fal"
    ],
    "membership": {
      "free": [
        "fas"
      ],
      "pro": [
        "fas",
        "far",
        "fal"
      ]
    }
  },
  {
    "unicode": "f3ee",
    "label": "SISTRIX",
    "name": "sistrix",
    "styles": [
      "fab"
    ],
    "membership": {
      "free": [
        "fab"
      ],
      "pro": [
        "fab"
      ]
    }
  },
  {
    "unicode": "f215",
    "label": "SimplyBuilt",
    "name": "simplybuilt",
    "styles": [
      "fab"
    ],
    "membership": {
      "free": [
        "fab"
      ],
      "pro": [
        "fab"
      ]
    }
  },
  {
    "unicode": "f5b7",
    "label": "Signature",
    "name": "signature",
    "styles": [
      "fas",
      "far",
      "fal"
    ],
    "membership": {
      "free": [
        "fas"
      ],
      "pro": [
        "fas",
        "far",
        "fal"
      ]
    }
  },
  {
    "unicode": "f012",
    "label": "signal",
    "name": "signal",
    "styles": [
      "fas",
      "far",
      "fal"
    ],
    "membership": {
      "free": [
        "fas"
      ],
      "pro": [
        "fas",
        "far",
        "fal"
      ]
    }
  },
  {
    "unicode": "f2f5",
    "label": "Alternate Sign Out",
    "name": "sign-out-alt",
    "styles": [
      "fas",
      "far",
      "fal"
    ],
    "membership": {
      "free": [
        "fas"
      ],
      "pro": [
        "fas",
        "far",
        "fal"
      ]
    }
  },
  {
    "unicode": "f08b",
    "label": "Sign Out",
    "name": "sign-out",
    "styles": [
      "fas",
      "far",
      "fal"
    ],
    "membership": {
      "free": [],
      "pro": [
        "fas",
        "far",
        "fal"
      ]
    }
  },
  {
    "unicode": "f2a7",
    "label": "Sign Language",
    "name": "sign-language",
    "styles": [
      "fas",
      "far",
      "fal"
    ],
    "membership": {
      "free": [
        "fas"
      ],
      "pro": [
        "fas",
        "far",
        "fal"
      ]
    }
  },
  {
    "unicode": "f2f6",
    "label": "Alternate Sign In",
    "name": "sign-in-alt",
    "styles": [
      "fas",
      "far",
      "fal"
    ],
    "membership": {
      "free": [
        "fas"
      ],
      "pro": [
        "fas",
        "far",
        "fal"
      ]
    }
  },
  {
    "unicode": "f090",
    "label": "Sign In",
    "name": "sign-in",
    "styles": [
      "fas",
      "far",
      "fal"
    ],
    "membership": {
      "free": [],
      "pro": [
        "fas",
        "far",
        "fal"
      ]
    }
  },
  {
    "unicode": "f4d9",
    "label": "Sign",
    "name": "sign",
    "styles": [
      "fas",
      "far",
      "fal"
    ],
    "membership": {
      "free": [
        "fas"
      ],
      "pro": [
        "fas",
        "far",
        "fal"
      ]
    }
  },
  {
    "unicode": "f45b",
    "label": "Shuttlecock",
    "name": "shuttlecock",
    "styles": [
      "fas",
      "far",
      "fal"
    ],
    "membership": {
      "free": [],
      "pro": [
        "fas",
        "far",
        "fal"
      ]
    }
  },
  {
    "unicode": "f5b6",
    "label": "Shuttle Van",
    "name": "shuttle-van",
    "styles": [
      "fas",
      "far",
      "fal"
    ],
    "membership": {
      "free": [
        "fas"
      ],
      "pro": [
        "fas",
        "far",
        "fal"
      ]
    }
  },
  {
    "unicode": "f2cc",
    "label": "Shower",
    "name": "shower",
    "styles": [
      "fas",
      "far",
      "fal"
    ],
    "membership": {
      "free": [
        "fas"
      ],
      "pro": [
        "fas",
        "far",
        "fal"
      ]
    }
  },
  {
    "unicode": "f5b5",
    "label": "Shopware",
    "name": "shopware",
    "styles": [
      "fab"
    ],
    "membership": {
      "free": [
        "fab"
      ],
      "pro": [
        "fab"
      ]
    }
  },
  {
    "unicode": "f07a",
    "label": "shopping-cart",
    "name": "shopping-cart",
    "styles": [
      "fas",
      "far",
      "fal"
    ],
    "membership": {
      "free": [
        "fas"
      ],
      "pro": [
        "fas",
        "far",
        "fal"
      ]
    }
  },
  {
    "unicode": "f291",
    "label": "Shopping Basket",
    "name": "shopping-basket",
    "styles": [
      "fas",
      "far",
      "fal"
    ],
    "membership": {
      "free": [
        "fas"
      ],
      "pro": [
        "fas",
        "far",
        "fal"
      ]
    }
  },
  {
    "unicode": "f290",
    "label": "Shopping Bag",
    "name": "shopping-bag",
    "styles": [
      "fas",
      "far",
      "fal"
    ],
    "membership": {
      "free": [
        "fas"
      ],
      "pro": [
        "fas",
        "far",
        "fal"
      ]
    }
  },
  {
    "unicode": "f54b",
    "label": "Shoe Prints",
    "name": "shoe-prints",
    "styles": [
      "fas",
      "far",
      "fal"
    ],
    "membership": {
      "free": [
        "fas"
      ],
      "pro": [
        "fas",
        "far",
        "fal"
      ]
    }
  },
  {
    "unicode": "f214",
    "label": "Shirts in Bulk",
    "name": "shirtsinbulk",
    "styles": [
      "fab"
    ],
    "membership": {
      "free": [
        "fab"
      ],
      "pro": [
        "fab"
      ]
    }
  },
  {
    "unicode": "f48c",
    "label": "Shipping Timed",
    "name": "shipping-timed",
    "styles": [
      "fas",
      "far",
      "fal"
    ],
    "membership": {
      "free": [],
      "pro": [
        "fas",
        "far",
        "fal"
      ]
    }
  },
  {
    "unicode": "f48b",
    "label": "Shipping Fast",
    "name": "shipping-fast",
    "styles": [
      "fas",
      "far",
      "fal"
    ],
    "membership": {
      "free": [
        "fas"
      ],
      "pro": [
        "fas",
        "far",
        "fal"
      ]
    }
  },
  {
    "unicode": "f21a",
    "label": "Ship",
    "name": "ship",
    "styles": [
      "fas",
      "far",
      "fal"
    ],
    "membership": {
      "free": [
        "fas"
      ],
      "pro": [
        "fas",
        "far",
        "fal"
      ]
    }
  },
  {
    "unicode": "f2f7",
    "label": "shield",
    "name": "shield-check",
    "styles": [
      "fas",
      "far",
      "fal"
    ],
    "membership": {
      "free": [],
      "pro": [
        "fas",
        "far",
        "fal"
      ]
    }
  },
  {
    "unicode": "f3ed",
    "label": "Alternate Shield",
    "name": "shield-alt",
    "styles": [
      "fas",
      "far",
      "fal"
    ],
    "membership": {
      "free": [
        "fas"
      ],
      "pro": [
        "fas",
        "far",
        "fal"
      ]
    }
  },
  {
    "unicode": "f132",
    "label": "shield",
    "name": "shield",
    "styles": [
      "fas",
      "far",
      "fal"
    ],
    "membership": {
      "free": [],
      "pro": [
        "fas",
        "far",
        "fal"
      ]
    }
  },
  {
    "unicode": "f20b",
    "label": "Shekel Sign",
    "name": "shekel-sign",
    "styles": [
      "fas",
      "far",
      "fal"
    ],
    "membership": {
      "free": [
        "fas"
      ],
      "pro": [
        "fas",
        "far",
        "fal"
      ]
    }
  },
  {
    "unicode": "f14d",
    "label": "Share Square",
    "name": "share-square",
    "styles": [
      "fas",
      "far",
      "fal"
    ],
    "membership": {
      "free": [
        "fas",
        "far"
      ],
      "pro": [
        "fas",
        "far",
        "fal"
      ]
    }
  },
  {
    "unicode": "f1e1",
    "label": "Alternate Share Square",
    "name": "share-alt-square",
    "styles": [
      "fas",
      "far",
      "fal"
    ],
    "membership": {
      "free": [
        "fas"
      ],
      "pro": [
        "fas",
        "far",
        "fal"
      ]
    }
  },
  {
    "unicode": "f1e0",
    "label": "Alternate Share",
    "name": "share-alt",
    "styles": [
      "fas",
      "far",
      "fal"
    ],
    "membership": {
      "free": [
        "fas"
      ],
      "pro": [
        "fas",
        "far",
        "fal"
      ]
    }
  },
  {
    "unicode": "f367",
    "label": "Share All",
    "name": "share-all",
    "styles": [
      "fas",
      "far",
      "fal"
    ],
    "membership": {
      "free": [],
      "pro": [
        "fas",
        "far",
        "fal"
      ]
    }
  },
  {
    "unicode": "f064",
    "label": "Share",
    "name": "share",
    "styles": [
      "fas",
      "far",
      "fal"
    ],
    "membership": {
      "free": [
        "fas"
      ],
      "pro": [
        "fas",
        "far",
        "fal"
      ]
    }
  },
  {
    "unicode": "f61f",
    "label": "Shapes",
    "name": "shapes",
    "styles": [
      "fas",
      "far",
      "fal"
    ],
    "membership": {
      "free": [
        "fas"
      ],
      "pro": [
        "fas",
        "far",
        "fal"
      ]
    }
  },
  {
    "unicode": "f3ec",
    "label": "Servicestack",
    "name": "servicestack",
    "styles": [
      "fab"
    ],
    "membership": {
      "free": [
        "fab"
      ],
      "pro": [
        "fab"
      ]
    }
  },
  {
    "unicode": "f233",
    "label": "Server",
    "name": "server",
    "styles": [
      "fas",
      "far",
      "fal"
    ],
    "membership": {
      "free": [
        "fas"
      ],
      "pro": [
        "fas",
        "far",
        "fal"
      ]
    }
  },
  {
    "unicode": "f213",
    "label": "Sellsy",
    "name": "sellsy",
    "styles": [
      "fab"
    ],
    "membership": {
      "free": [
        "fab"
      ],
      "pro": [
        "fab"
      ]
    }
  },
  {
    "unicode": "f2da",
    "label": "Sellcast",
    "name": "sellcast",
    "styles": [
      "fab"
    ],
    "membership": {
      "free": [
        "fab"
      ],
      "pro": [
        "fab"
      ]
    }
  },
  {
    "unicode": "f4d8",
    "label": "Seedling",
    "name": "seedling",
    "styles": [
      "fas",
      "far",
      "fal"
    ],
    "membership": {
      "free": [
        "fas"
      ],
      "pro": [
        "fas",
        "far",
        "fal"
      ]
    }
  },
  {
    "unicode": "f3eb",
    "label": "Searchengin",
    "name": "searchengin",
    "styles": [
      "fab"
    ],
    "membership": {
      "free": [
        "fab"
      ],
      "pro": [
        "fab"
      ]
    }
  },
  {
    "unicode": "f00e",
    "label": "Search Plus",
    "name": "search-plus",
    "styles": [
      "fas",
      "far",
      "fal"
    ],
    "membership": {
      "free": [
        "fas"
      ],
      "pro": [
        "fas",
        "far",
        "fal"
      ]
    }
  },
  {
    "unicode": "f010",
    "label": "Search Minus",
    "name": "search-minus",
    "styles": [
      "fas",
      "far",
      "fal"
    ],
    "membership": {
      "free": [
        "fas"
      ],
      "pro": [
        "fas",
        "far",
        "fal"
      ]
    }
  },
  {
    "unicode": "f002",
    "label": "Search",
    "name": "search",
    "styles": [
      "fas",
      "far",
      "fal"
    ],
    "membership": {
      "free": [
        "fas"
      ],
      "pro": [
        "fas",
        "far",
        "fal"
      ]
    }
  },
  {
    "unicode": "f2f8",
    "label": "Scrubber",
    "name": "scrubber",
    "styles": [
      "fas",
      "far",
      "fal"
    ],
    "membership": {
      "free": [],
      "pro": [
        "fas",
        "far",
        "fal"
      ]
    }
  },
  {
    "unicode": "f28a",
    "label": "Scribd",
    "name": "scribd",
    "styles": [
      "fab"
    ],
    "membership": {
      "free": [
        "fab"
      ],
      "pro": [
        "fab"
      ]
    }
  },
  {
    "unicode": "f54a",
    "label": "Screwdriver",
    "name": "screwdriver",
    "styles": [
      "fas",
      "far",
      "fal"
    ],
    "membership": {
      "free": [
        "fas"
      ],
      "pro": [
        "fas",
        "far",
        "fal"
      ]
    }
  },
  {
    "unicode": "f549",
    "label": "School",
    "name": "school",
    "styles": [
      "fas",
      "far",
      "fal"
    ],
    "membership": {
      "free": [
        "fas"
      ],
      "pro": [
        "fas",
        "far",
        "fal"
      ]
    }
  },
  {
    "unicode": "f3ea",
    "label": "SCHLIX",
    "name": "schlix",
    "styles": [
      "fab"
    ],
    "membership": {
      "free": [
        "fab"
      ],
      "pro": [
        "fab"
      ]
    }
  },
  {
    "unicode": "f48a",
    "label": "Scanner Touchscreen",
    "name": "scanner-touchscreen",
    "styles": [
      "fas",
      "far",
      "fal"
    ],
    "membership": {
      "free": [],
      "pro": [
        "fas",
        "far",
        "fal"
      ]
    }
  },
  {
    "unicode": "f489",
    "label": "Scanner Keyboard",
    "name": "scanner-keyboard",
    "styles": [
      "fas",
      "far",
      "fal"
    ],
    "membership": {
      "free": [],
      "pro": [
        "fas",
        "far",
        "fal"
      ]
    }
  },
  {
    "unicode": "f488",
    "label": "Scanner",
    "name": "scanner",
    "styles": [
      "fas",
      "far",
      "fal"
    ],
    "membership": {
      "free": [],
      "pro": [
        "fas",
        "far",
        "fal"
      ]
    }
  },
  {
    "unicode": "f61e",
    "label": "Scalpel Path",
    "name": "scalpel-path",
    "styles": [
      "fas",
      "far",
      "fal"
    ],
    "membership": {
      "free": [],
      "pro": [
        "fas",
        "far",
        "fal"
      ]
    }
  },
  {
    "unicode": "f61d",
    "label": "Scalpel",
    "name": "scalpel",
    "styles": [
      "fas",
      "far",
      "fal"
    ],
    "membership": {
      "free": [],
      "pro": [
        "fas",
        "far",
        "fal"
      ]
    }
  },
  {
    "unicode": "f0c7",
    "label": "Save",
    "name": "save",
    "styles": [
      "fas",
      "far",
      "fal"
    ],
    "membership": {
      "free": [
        "fas",
        "far"
      ],
      "pro": [
        "fas",
        "far",
        "fal"
      ]
    }
  },
  {
    "unicode": "f41e",
    "label": "Sass",
    "name": "sass",
    "styles": [
      "fab"
    ],
    "membership": {
      "free": [
        "fab"
      ],
      "pro": [
        "fab"
      ]
    }
  },
  {
    "unicode": "f267",
    "label": "Safari",
    "name": "safari",
    "styles": [
      "fab"
    ],
    "membership": {
      "free": [
        "fab"
      ],
      "pro": [
        "fab"
      ]
    }
  },
  {
    "unicode": "f5b4",
    "label": "Loudly Crying Face",
    "name": "sad-tear",
    "styles": [
      "fas",
      "far",
      "fal"
    ],
    "membership": {
      "free": [
        "fas",
        "far"
      ],
      "pro": [
        "fas",
        "far",
        "fal"
      ]
    }
  },
  {
    "unicode": "f5b3",
    "label": "Crying Face",
    "name": "sad-cry",
    "styles": [
      "fas",
      "far",
      "fal"
    ],
    "membership": {
      "free": [
        "fas",
        "far"
      ],
      "pro": [
        "fas",
        "far",
        "fal"
      ]
    }
  },
  {
    "unicode": "f156",
    "label": "Indian Rupee Sign",
    "name": "rupee-sign",
    "styles": [
      "fas",
      "far",
      "fal"
    ],
    "membership": {
      "free": [
        "fas"
      ],
      "pro": [
        "fas",
        "far",
        "fal"
      ]
    }
  },
  {
    "unicode": "f548",
    "label": "Ruler Vertical",
    "name": "ruler-vertical",
    "styles": [
      "fas",
      "far",
      "fal"
    ],
    "membership": {
      "free": [
        "fas"
      ],
      "pro": [
        "fas",
        "far",
        "fal"
      ]
    }
  },
  {
    "unicode": "f61c",
    "label": "Ruler Triangle",
    "name": "ruler-triangle",
    "styles": [
      "fas",
      "far",
      "fal"
    ],
    "membership": {
      "free": [],
      "pro": [
        "fas",
        "far",
        "fal"
      ]
    }
  },
  {
    "unicode": "f547",
    "label": "Ruler Horizontal",
    "name": "ruler-horizontal",
    "styles": [
      "fas",
      "far",
      "fal"
    ],
    "membership": {
      "free": [
        "fas"
      ],
      "pro": [
        "fas",
        "far",
        "fal"
      ]
    }
  },
  {
    "unicode": "f546",
    "label": "Ruler Combined",
    "name": "ruler-combined",
    "styles": [
      "fas",
      "far",
      "fal"
    ],
    "membership": {
      "free": [
        "fas"
      ],
      "pro": [
        "fas",
        "far",
        "fal"
      ]
    }
  },
  {
    "unicode": "f545",
    "label": "Ruler",
    "name": "ruler",
    "styles": [
      "fas",
      "far",
      "fal"
    ],
    "membership": {
      "free": [
        "fas"
      ],
      "pro": [
        "fas",
        "far",
        "fal"
      ]
    }
  },
  {
    "unicode": "f158",
    "label": "Ruble Sign",
    "name": "ruble-sign",
    "styles": [
      "fas",
      "far",
      "fal"
    ],
    "membership": {
      "free": [
        "fas"
      ],
      "pro": [
        "fas",
        "far",
        "fal"
      ]
    }
  },
  {
    "unicode": "f143",
    "label": "RSS Square",
    "name": "rss-square",
    "styles": [
      "fas",
      "far",
      "fal"
    ],
    "membership": {
      "free": [
        "fas"
      ],
      "pro": [
        "fas",
        "far",
        "fal"
      ]
    }
  },
  {
    "unicode": "f09e",
    "label": "rss",
    "name": "rss",
    "styles": [
      "fas",
      "far",
      "fal"
    ],
    "membership": {
      "free": [
        "fas"
      ],
      "pro": [
        "fas",
        "far",
        "fal"
      ]
    }
  },
  {
    "unicode": "f61b",
    "label": "Route Interstate",
    "name": "route-interstate",
    "styles": [
      "fas",
      "far",
      "fal"
    ],
    "membership": {
      "free": [],
      "pro": [
        "fas",
        "far",
        "fal"
      ]
    }
  },
  {
    "unicode": "f61a",
    "label": "Route Highway",
    "name": "route-highway",
    "styles": [
      "fas",
      "far",
      "fal"
    ],
    "membership": {
      "free": [],
      "pro": [
        "fas",
        "far",
        "fal"
      ]
    }
  },
  {
    "unicode": "f4d7",
    "label": "Route",
    "name": "route",
    "styles": [
      "fas",
      "far",
      "fal"
    ],
    "membership": {
      "free": [
        "fas"
      ],
      "pro": [
        "fas",
        "far",
        "fal"
      ]
    }
  },
  {
    "unicode": "f3e9",
    "label": "Rockrms",
    "name": "rockrms",
    "styles": [
      "fab"
    ],
    "membership": {
      "free": [
        "fab"
      ],
      "pro": [
        "fab"
      ]
    }
  },
  {
    "unicode": "f3e8",
    "label": "Rocket.Chat",
    "name": "rocketchat",
    "styles": [
      "fab"
    ],
    "membership": {
      "free": [
        "fab"
      ],
      "pro": [
        "fab"
      ]
    }
  },
  {
    "unicode": "f135",
    "label": "rocket",
    "name": "rocket",
    "styles": [
      "fas",
      "far",
      "fal"
    ],
    "membership": {
      "free": [
        "fas"
      ],
      "pro": [
        "fas",
        "far",
        "fal"
      ]
    }
  },
  {
    "unicode": "f544",
    "label": "Robot",
    "name": "robot",
    "styles": [
      "fas",
      "far",
      "fal"
    ],
    "membership": {
      "free": [
        "fas"
      ],
      "pro": [
        "fas",
        "far",
        "fal"
      ]
    }
  },
  {
    "unicode": "f018",
    "label": "road",
    "name": "road",
    "styles": [
      "fas",
      "far",
      "fal"
    ],
    "membership": {
      "free": [
        "fas"
      ],
      "pro": [
        "fas",
        "far",
        "fal"
      ]
    }
  },
  {
    "unicode": "f4d6",
    "label": "Ribbon",
    "name": "ribbon",
    "styles": [
      "fas",
      "far",
      "fal"
    ],
    "membership": {
      "free": [
        "fas"
      ],
      "pro": [
        "fas",
        "far",
        "fal"
      ]
    }
  },
  {
    "unicode": "f5b2",
    "label": "Rev.io",
    "name": "rev",
    "styles": [
      "fab"
    ],
    "membership": {
      "free": [
        "fab"
      ],
      "pro": [
        "fab"
      ]
    }
  },
  {
    "unicode": "f361",
    "label": "Alternate Retweet",
    "name": "retweet-alt",
    "styles": [
      "fas",
      "far",
      "fal"
    ],
    "membership": {
      "free": [],
      "pro": [
        "fas",
        "far",
        "fal"
      ]
    }
  },
  {
    "unicode": "f079",
    "label": "Retweet",
    "name": "retweet",
    "styles": [
      "fas",
      "far",
      "fal"
    ],
    "membership": {
      "free": [
        "fas"
      ],
      "pro": [
        "fas",
        "far",
        "fal"
      ]
    }
  },
  {
    "unicode": "f3e7",
    "label": "Resolving",
    "name": "resolving",
    "styles": [
      "fab"
    ],
    "membership": {
      "free": [
        "fab"
      ],
      "pro": [
        "fab"
      ]
    }
  },
  {
    "unicode": "f4f8",
    "label": "Researchgate",
    "name": "researchgate",
    "styles": [
      "fab"
    ],
    "membership": {
      "free": [
        "fab"
      ],
      "pro": [
        "fab"
      ]
    }
  },
  {
    "unicode": "f3e6",
    "label": "replyd",
    "name": "replyd",
    "styles": [
      "fab"
    ],
    "membership": {
      "free": [
        "fab"
      ],
      "pro": [
        "fab"
      ]
    }
  },
  {
    "unicode": "f122",
    "label": "reply-all",
    "name": "reply-all",
    "styles": [
      "fas",
      "far",
      "fal"
    ],
    "membership": {
      "free": [
        "fas"
      ],
      "pro": [
        "fas",
        "far",
        "fal"
      ]
    }
  },
  {
    "unicode": "f3e5",
    "label": "Reply",
    "name": "reply",
    "styles": [
      "fas",
      "far",
      "fal"
    ],
    "membership": {
      "free": [
        "fas"
      ],
      "pro": [
        "fas",
        "far",
        "fal"
      ]
    }
  },
  {
    "unicode": "f364",
    "label": "Alternate Repeat",
    "name": "repeat-alt",
    "styles": [
      "fas",
      "far",
      "fal"
    ],
    "membership": {
      "free": [],
      "pro": [
        "fas",
        "far",
        "fal"
      ]
    }
  },
  {
    "unicode": "f366",
    "label": "Alternate Repeat 1",
    "name": "repeat-1-alt",
    "styles": [
      "fas",
      "far",
      "fal"
    ],
    "membership": {
      "free": [],
      "pro": [
        "fas",
        "far",
        "fal"
      ]
    }
  },
  {
    "unicode": "f365",
    "label": "Repeat 1",
    "name": "repeat-1",
    "styles": [
      "fas",
      "far",
      "fal"
    ],
    "membership": {
      "free": [],
      "pro": [
        "fas",
        "far",
        "fal"
      ]
    }
  },
  {
    "unicode": "f363",
    "label": "Repeat",
    "name": "repeat",
    "styles": [
      "fas",
      "far",
      "fal"
    ],
    "membership": {
      "free": [],
      "pro": [
        "fas",
        "far",
        "fal"
      ]
    }
  },
  {
    "unicode": "f18b",
    "label": "Renren",
    "name": "renren",
    "styles": [
      "fab"
    ],
    "membership": {
      "free": [
        "fab"
      ],
      "pro": [
        "fab"
      ]
    }
  },
  {
    "unicode": "f3e4",
    "label": "Rendact",
    "name": "rendact",
    "styles": [
      "fab"
    ],
    "membership": {
      "free": [
        "fab"
      ],
      "pro": [
        "fab"
      ]
    }
  },
  {
    "unicode": "f25d",
    "label": "Registered Trademark",
    "name": "registered",
    "styles": [
      "fas",
      "far",
      "fal"
    ],
    "membership": {
      "free": [
        "fas",
        "far"
      ],
      "pro": [
        "fas",
        "far",
        "fal"
      ]
    }
  },
  {
    "unicode": "f2f9",
    "label": "Alternate Redo",
    "name": "redo-alt",
    "styles": [
      "fas",
      "far",
      "fal"
    ],
    "membership": {
      "free": [
        "fas"
      ],
      "pro": [
        "fas",
        "far",
        "fal"
      ]
    }
  },
  {
    "unicode": "f01e",
    "label": "Redo",
    "name": "redo",
    "styles": [
      "fas",
      "far",
      "fal"
    ],
    "membership": {
      "free": [
        "fas"
      ],
      "pro": [
        "fas",
        "far",
        "fal"
      ]
    }
  },
  {
    "unicode": "f1a2",
    "label": "reddit Square",
    "name": "reddit-square",
    "styles": [
      "fab"
    ],
    "membership": {
      "free": [
        "fab"
      ],
      "pro": [
        "fab"
      ]
    }
  },
  {
    "unicode": "f281",
    "label": "reddit Alien",
    "name": "reddit-alien",
    "styles": [
      "fab"
    ],
    "membership": {
      "free": [
        "fab"
      ],
      "pro": [
        "fab"
      ]
    }
  },
  {
    "unicode": "f1a1",
    "label": "reddit Logo",
    "name": "reddit",
    "styles": [
      "fab"
    ],
    "membership": {
      "free": [
        "fab"
      ],
      "pro": [
        "fab"
      ]
    }
  },
  {
    "unicode": "f3e3",
    "label": "red river",
    "name": "red-river",
    "styles": [
      "fab"
    ],
    "membership": {
      "free": [
        "fab"
      ],
      "pro": [
        "fab"
      ]
    }
  },
  {
    "unicode": "f1b8",
    "label": "Recycle",
    "name": "recycle",
    "styles": [
      "fas",
      "far",
      "fal"
    ],
    "membership": {
      "free": [
        "fas"
      ],
      "pro": [
        "fas",
        "far",
        "fal"
      ]
    }
  },
  {
    "unicode": "f2fc",
    "label": "Wide Rectangle",
    "name": "rectangle-wide",
    "styles": [
      "fas",
      "far",
      "fal"
    ],
    "membership": {
      "free": [],
      "pro": [
        "fas",
        "far",
        "fal"
      ]
    }
  },
  {
    "unicode": "f2fb",
    "label": "Portrait Rectangle",
    "name": "rectangle-portrait",
    "styles": [
      "fas",
      "far",
      "fal"
    ],
    "membership": {
      "free": [],
      "pro": [
        "fas",
        "far",
        "fal"
      ]
    }
  },
  {
    "unicode": "f2fa",
    "label": "Landscape Rectangle",
    "name": "rectangle-landscape",
    "styles": [
      "fas",
      "far",
      "fal"
    ],
    "membership": {
      "free": [],
      "pro": [
        "fas",
        "far",
        "fal"
      ]
    }
  },
  {
    "unicode": "f543",
    "label": "Receipt",
    "name": "receipt",
    "styles": [
      "fas",
      "far",
      "fal"
    ],
    "membership": {
      "free": [
        "fas"
      ],
      "pro": [
        "fas",
        "far",
        "fal"
      ]
    }
  },
  {
    "unicode": "f1d0",
    "label": "Rebel Alliance",
    "name": "rebel",
    "styles": [
      "fab"
    ],
    "membership": {
      "free": [
        "fab"
      ],
      "pro": [
        "fab"
      ]
    }
  },
  {
    "unicode": "f4d5",
    "label": "ReadMe",
    "name": "readme",
    "styles": [
      "fab"
    ],
    "membership": {
      "free": [
        "fab"
      ],
      "pro": [
        "fab"
      ]
    }
  },
  {
    "unicode": "f41b",
    "label": "React",
    "name": "react",
    "styles": [
      "fab"
    ],
    "membership": {
      "free": [
        "fab"
      ],
      "pro": [
        "fab"
      ]
    }
  },
  {
    "unicode": "f2d9",
    "label": "Ravelry",
    "name": "ravelry",
    "styles": [
      "fab"
    ],
    "membership": {
      "free": [
        "fab"
      ],
      "pro": [
        "fab"
      ]
    }
  },
  {
    "unicode": "f074",
    "label": "random",
    "name": "random",
    "styles": [
      "fas",
      "far",
      "fal"
    ],
    "membership": {
      "free": [
        "fas"
      ],
      "pro": [
        "fas",
        "far",
        "fal"
      ]
    }
  },
  {
    "unicode": "f4d4",
    "label": "Ramp Loading",
    "name": "ramp-loading",
    "styles": [
      "fas",
      "far",
      "fal"
    ],
    "membership": {
      "free": [],
      "pro": [
        "fas",
        "far",
        "fal"
      ]
    }
  },
  {
    "unicode": "f45a",
    "label": "Racquet",
    "name": "racquet",
    "styles": [
      "fas",
      "far",
      "fal"
    ],
    "membership": {
      "free": [],
      "pro": [
        "fas",
        "far",
        "fal"
      ]
    }
  },
  {
    "unicode": "f4f7",
    "label": "R Project",
    "name": "r-project",
    "styles": [
      "fab"
    ],
    "membership": {
      "free": [
        "fab"
      ],
      "pro": [
        "fab"
      ]
    }
  },
  {
    "unicode": "f10e",
    "label": "quote-right",
    "name": "quote-right",
    "styles": [
      "fas",
      "far",
      "fal"
    ],
    "membership": {
      "free": [
        "fas"
      ],
      "pro": [
        "fas",
        "far",
        "fal"
      ]
    }
  },
  {
    "unicode": "f10d",
    "label": "quote-left",
    "name": "quote-left",
    "styles": [
      "fas",
      "far",
      "fal"
    ],
    "membership": {
      "free": [
        "fas"
      ],
      "pro": [
        "fas",
        "far",
        "fal"
      ]
    }
  },
  {
    "unicode": "f2c4",
    "label": "Quora",
    "name": "quora",
    "styles": [
      "fab"
    ],
    "membership": {
      "free": [
        "fab"
      ],
      "pro": [
        "fab"
      ]
    }
  },
  {
    "unicode": "f459",
    "label": "QuinScape",
    "name": "quinscape",
    "styles": [
      "fab"
    ],
    "membership": {
      "free": [
        "fab"
      ],
      "pro": [
        "fab"
      ]
    }
  },
  {
    "unicode": "f458",
    "label": "Quidditch",
    "name": "quidditch",
    "styles": [
      "fas",
      "far",
      "fal"
    ],
    "membership": {
      "free": [
        "fas"
      ],
      "pro": [
        "fas",
        "far",
        "fal"
      ]
    }
  },
  {
    "unicode": "f2fd",
    "label": "Question Square",
    "name": "question-square",
    "styles": [
      "fas",
      "far",
      "fal"
    ],
    "membership": {
      "free": [],
      "pro": [
        "fas",
        "far",
        "fal"
      ]
    }
  },
  {
    "unicode": "f059",
    "label": "Question Circle",
    "name": "question-circle",
    "styles": [
      "fas",
      "far",
      "fal"
    ],
    "membership": {
      "free": [
        "fas",
        "far"
      ],
      "pro": [
        "fas",
        "far",
        "fal"
      ]
    }
  },
  {
    "unicode": "f128",
    "label": "Question",
    "name": "question",
    "styles": [
      "fas",
      "far",
      "fal"
    ],
    "membership": {
      "free": [
        "fas"
      ],
      "pro": [
        "fas",
        "far",
        "fal"
      ]
    }
  },
  {
    "unicode": "f029",
    "label": "qrcode",
    "name": "qrcode",
    "styles": [
      "fas",
      "far",
      "fal"
    ],
    "membership": {
      "free": [
        "fas"
      ],
      "pro": [
        "fas",
        "far",
        "fal"
      ]
    }
  },
  {
    "unicode": "f1d6",
    "label": "QQ",
    "name": "qq",
    "styles": [
      "fab"
    ],
    "membership": {
      "free": [
        "fab"
      ],
      "pro": [
        "fab"
      ]
    }
  },
  {
    "unicode": "f3e2",
    "label": "Python",
    "name": "python",
    "styles": [
      "fab"
    ],
    "membership": {
      "free": [
        "fab"
      ],
      "pro": [
        "fab"
      ]
    }
  },
  {
    "unicode": "f12e",
    "label": "Puzzle Piece",
    "name": "puzzle-piece",
    "styles": [
      "fas",
      "far",
      "fal"
    ],
    "membership": {
      "free": [
        "fas"
      ],
      "pro": [
        "fas",
        "far",
        "fal"
      ]
    }
  },
  {
    "unicode": "f3e1",
    "label": "Pushed",
    "name": "pushed",
    "styles": [
      "fab"
    ],
    "membership": {
      "free": [
        "fab"
      ],
      "pro": [
        "fab"
      ]
    }
  },
  {
    "unicode": "f542",
    "label": "Project Diagram",
    "name": "project-diagram",
    "styles": [
      "fas",
      "far",
      "fal"
    ],
    "membership": {
      "free": [
        "fas"
      ],
      "pro": [
        "fas",
        "far",
        "fal"
      ]
    }
  },
  {
    "unicode": "f288",
    "label": "Product Hunt",
    "name": "product-hunt",
    "styles": [
      "fab"
    ],
    "membership": {
      "free": [
        "fab"
      ],
      "pro": [
        "fab"
      ]
    }
  },
  {
    "unicode": "f487",
    "label": "Procedures",
    "name": "procedures",
    "styles": [
      "fas",
      "far",
      "fal"
    ],
    "membership": {
      "free": [
        "fas"
      ],
      "pro": [
        "fas",
        "far",
        "fal"
      ]
    }
  },
  {
    "unicode": "f02f",
    "label": "print",
    "name": "print",
    "styles": [
      "fas",
      "far",
      "fal"
    ],
    "membership": {
      "free": [
        "fas"
      ],
      "pro": [
        "fas",
        "far",
        "fal"
      ]
    }
  },
  {
    "unicode": "f486",
    "label": "Alternate Prescription Bottle",
    "name": "prescription-bottle-alt",
    "styles": [
      "fas",
      "far",
      "fal"
    ],
    "membership": {
      "free": [
        "fas"
      ],
      "pro": [
        "fas",
        "far",
        "fal"
      ]
    }
  },
  {
    "unicode": "f485",
    "label": "Prescription Bottle",
    "name": "prescription-bottle",
    "styles": [
      "fas",
      "far",
      "fal"
    ],
    "membership": {
      "free": [
        "fas"
      ],
      "pro": [
        "fas",
        "far",
        "fal"
      ]
    }
  },
  {
    "unicode": "f5b1",
    "label": "Prescription",
    "name": "prescription",
    "styles": [
      "fas",
      "far",
      "fal"
    ],
    "membership": {
      "free": [
        "fas"
      ],
      "pro": [
        "fas",
        "far",
        "fal"
      ]
    }
  },
  {
    "unicode": "f011",
    "label": "Power Off",
    "name": "power-off",
    "styles": [
      "fas",
      "far",
      "fal"
    ],
    "membership": {
      "free": [
        "fas"
      ],
      "pro": [
        "fas",
        "far",
        "fal"
      ]
    }
  },
  {
    "unicode": "f154",
    "label": "Pound Sign",
    "name": "pound-sign",
    "styles": [
      "fas",
      "far",
      "fal"
    ],
    "membership": {
      "free": [
        "fas"
      ],
      "pro": [
        "fas",
        "far",
        "fal"
      ]
    }
  },
  {
    "unicode": "f3e0",
    "label": "Portrait",
    "name": "portrait",
    "styles": [
      "fas",
      "far",
      "fal"
    ],
    "membership": {
      "free": [
        "fas"
      ],
      "pro": [
        "fas",
        "far",
        "fal"
      ]
    }
  },
  {
    "unicode": "f619",
    "label": "Poop",
    "name": "poop",
    "styles": [
      "fas",
      "far",
      "fal"
    ],
    "membership": {
      "free": [
        "fas"
      ],
      "pro": [
        "fas",
        "far",
        "fal"
      ]
    }
  },
  {
    "unicode": "f2fe",
    "label": "Poo",
    "name": "poo",
    "styles": [
      "fas",
      "far",
      "fal"
    ],
    "membership": {
      "free": [
        "fas"
      ],
      "pro": [
        "fas",
        "far",
        "fal"
      ]
    }
  },
  {
    "unicode": "f2ce",
    "label": "Podcast",
    "name": "podcast",
    "styles": [
      "fas",
      "far",
      "fal"
    ],
    "membership": {
      "free": [
        "fas"
      ],
      "pro": [
        "fas",
        "far",
        "fal"
      ]
    }
  },
  {
    "unicode": "f0fe",
    "label": "Plus Square",
    "name": "plus-square",
    "styles": [
      "fas",
      "far",
      "fal"
    ],
    "membership": {
      "free": [
        "fas",
        "far"
      ],
      "pro": [
        "fas",
        "far",
        "fal"
      ]
    }
  },
  {
    "unicode": "f301",
    "label": "Plus Octagon",
    "name": "plus-octagon",
    "styles": [
      "fas",
      "far",
      "fal"
    ],
    "membership": {
      "free": [],
      "pro": [
        "fas",
        "far",
        "fal"
      ]
    }
  },
  {
    "unicode": "f300",
    "label": "Plus Hexagon",
    "name": "plus-hexagon",
    "styles": [
      "fas",
      "far",
      "fal"
    ],
    "membership": {
      "free": [],
      "pro": [
        "fas",
        "far",
        "fal"
      ]
    }
  },
  {
    "unicode": "f055",
    "label": "Plus Circle",
    "name": "plus-circle",
    "styles": [
      "fas",
      "far",
      "fal"
    ],
    "membership": {
      "free": [
        "fas"
      ],
      "pro": [
        "fas",
        "far",
        "fal"
      ]
    }
  },
  {
    "unicode": "f067",
    "label": "plus",
    "name": "plus",
    "styles": [
      "fas",
      "far",
      "fal"
    ],
    "membership": {
      "free": [
        "fas"
      ],
      "pro": [
        "fas",
        "far",
        "fal"
      ]
    }
  },
  {
    "unicode": "f1e6",
    "label": "Plug",
    "name": "plug",
    "styles": [
      "fas",
      "far",
      "fal"
    ],
    "membership": {
      "free": [
        "fas"
      ],
      "pro": [
        "fas",
        "far",
        "fal"
      ]
    }
  },
  {
    "unicode": "f3df",
    "label": "PlayStation",
    "name": "playstation",
    "styles": [
      "fab"
    ],
    "membership": {
      "free": [
        "fab"
      ],
      "pro": [
        "fab"
      ]
    }
  },
  {
    "unicode": "f144",
    "label": "Play Circle",
    "name": "play-circle",
    "styles": [
      "fas",
      "far",
      "fal"
    ],
    "membership": {
      "free": [
        "fas",
        "far"
      ],
      "pro": [
        "fas",
        "far",
        "fal"
      ]
    }
  },
  {
    "unicode": "f04b",
    "label": "play",
    "name": "play",
    "styles": [
      "fas",
      "far",
      "fal"
    ],
    "membership": {
      "free": [
        "fas"
      ],
      "pro": [
        "fas",
        "far",
        "fal"
      ]
    }
  },
  {
    "unicode": "f5b0",
    "label": "Plane Departure",
    "name": "plane-departure",
    "styles": [
      "fas",
      "far",
      "fal"
    ],
    "membership": {
      "free": [
        "fas"
      ],
      "pro": [
        "fas",
        "far",
        "fal"
      ]
    }
  },
  {
    "unicode": "f5af",
    "label": "Plane Arrival",
    "name": "plane-arrival",
    "styles": [
      "fas",
      "far",
      "fal"
    ],
    "membership": {
      "free": [
        "fas"
      ],
      "pro": [
        "fas",
        "far",
        "fal"
      ]
    }
  },
  {
    "unicode": "f3de",
    "label": "Alternate Plane",
    "name": "plane-alt",
    "styles": [
      "fas",
      "far",
      "fal"
    ],
    "membership": {
      "free": [],
      "pro": [
        "fas",
        "far",
        "fal"
      ]
    }
  },
  {
    "unicode": "f072",
    "label": "plane",
    "name": "plane",
    "styles": [
      "fas",
      "far",
      "fal"
    ],
    "membership": {
      "free": [
        "fas"
      ],
      "pro": [
        "fas",
        "far",
        "fal"
      ]
    }
  },
  {
    "unicode": "f0d3",
    "label": "Pinterest Square",
    "name": "pinterest-square",
    "styles": [
      "fab"
    ],
    "membership": {
      "free": [
        "fab"
      ],
      "pro": [
        "fab"
      ]
    }
  },
  {
    "unicode": "f231",
    "label": "Pinterest P",
    "name": "pinterest-p",
    "styles": [
      "fab"
    ],
    "membership": {
      "free": [
        "fab"
      ],
      "pro": [
        "fab"
      ]
    }
  },
  {
    "unicode": "f0d2",
    "label": "Pinterest",
    "name": "pinterest",
    "styles": [
      "fab"
    ],
    "membership": {
      "free": [
        "fab"
      ],
      "pro": [
        "fab"
      ]
    }
  },
  {
    "unicode": "f484",
    "label": "Pills",
    "name": "pills",
    "styles": [
      "fas",
      "far",
      "fal"
    ],
    "membership": {
      "free": [
        "fas"
      ],
      "pro": [
        "fas",
        "far",
        "fal"
      ]
    }
  },
  {
    "unicode": "f4d3",
    "label": "Piggy Bank",
    "name": "piggy-bank",
    "styles": [
      "fas",
      "far",
      "fal"
    ],
    "membership": {
      "free": [
        "fas"
      ],
      "pro": [
        "fas",
        "far",
        "fal"
      ]
    }
  },
  {
    "unicode": "f1a7",
    "label": "Pied Piper PP Logo (Old)",
    "name": "pied-piper-pp",
    "styles": [
      "fab"
    ],
    "membership": {
      "free": [
        "fab"
      ],
      "pro": [
        "fab"
      ]
    }
  },
  {
    "unicode": "f4e5",
    "label": "Pied Piper-hat",
    "name": "pied-piper-hat",
    "styles": [
      "fab"
    ],
    "membership": {
      "free": [
        "fab"
      ],
      "pro": [
        "fab"
      ]
    }
  },
  {
    "unicode": "f1a8",
    "label": "Alternate Pied Piper Logo",
    "name": "pied-piper-alt",
    "styles": [
      "fab"
    ],
    "membership": {
      "free": [
        "fab"
      ],
      "pro": [
        "fab"
      ]
    }
  },
  {
    "unicode": "f2ae",
    "label": "Pied Piper Logo",
    "name": "pied-piper",
    "styles": [
      "fab"
    ],
    "membership": {
      "free": [
        "fab"
      ],
      "pro": [
        "fab"
      ]
    }
  },
  {
    "unicode": "f457",
    "label": "PHP",
    "name": "php",
    "styles": [
      "fab"
    ],
    "membership": {
      "free": [
        "fab"
      ],
      "pro": [
        "fab"
      ]
    }
  },
  {
    "unicode": "f2a0",
    "label": "Phone Volume",
    "name": "phone-volume",
    "styles": [
      "fas",
      "far",
      "fal"
    ],
    "membership": {
      "free": [
        "fas"
      ],
      "pro": [
        "fas",
        "far",
        "fal"
      ]
    }
  },
  {
    "unicode": "f098",
    "label": "Phone Square",
    "name": "phone-square",
    "styles": [
      "fas",
      "far",
      "fal"
    ],
    "membership": {
      "free": [
        "fas"
      ],
      "pro": [
        "fas",
        "far",
        "fal"
      ]
    }
  },
  {
    "unicode": "f3dd",
    "label": "Phone Slash",
    "name": "phone-slash",
    "styles": [
      "fas",
      "far",
      "fal"
    ],
    "membership": {
      "free": [
        "fas"
      ],
      "pro": [
        "fas",
        "far",
        "fal"
      ]
    }
  },
  {
    "unicode": "f4d2",
    "label": "Phone Plus",
    "name": "phone-plus",
    "styles": [
      "fas",
      "far",
      "fal"
    ],
    "membership": {
      "free": [],
      "pro": [
        "fas",
        "far",
        "fal"
      ]
    }
  },
  {
    "unicode": "f095",
    "label": "Phone",
    "name": "phone",
    "styles": [
      "fas",
      "far",
      "fal"
    ],
    "membership": {
      "free": [
        "fas"
      ],
      "pro": [
        "fas",
        "far",
        "fal"
      ]
    }
  },
  {
    "unicode": "f511",
    "label": "Phoenix Squadron",
    "name": "phoenix-squadron",
    "styles": [
      "fab"
    ],
    "membership": {
      "free": [
        "fab"
      ],
      "pro": [
        "fab"
      ]
    }
  },
  {
    "unicode": "f3dc",
    "label": "Phoenix Framework",
    "name": "phoenix-framework",
    "styles": [
      "fab"
    ],
    "membership": {
      "free": [
        "fab"
      ],
      "pro": [
        "fab"
      ]
    }
  },
  {
    "unicode": "f3db",
    "label": "Phabricator",
    "name": "phabricator",
    "styles": [
      "fab"
    ],
    "membership": {
      "free": [
        "fab"
      ],
      "pro": [
        "fab"
      ]
    }
  },
  {
    "unicode": "f4d1",
    "label": "Person and Empty Dolly",
    "name": "person-dolly-empty",
    "styles": [
      "fas",
      "far",
      "fal"
    ],
    "membership": {
      "free": [],
      "pro": [
        "fas",
        "far",
        "fal"
      ]
    }
  },
  {
    "unicode": "f4d0",
    "label": "Person and Dolly",
    "name": "person-dolly",
    "styles": [
      "fas",
      "far",
      "fal"
    ],
    "membership": {
      "free": [],
      "pro": [
        "fas",
        "far",
        "fal"
      ]
    }
  },
  {
    "unicode": "f4cf",
    "label": "Person Carry",
    "name": "person-carry",
    "styles": [
      "fas",
      "far",
      "fal"
    ],
    "membership": {
      "free": [],
      "pro": [
        "fas",
        "far",
        "fal"
      ]
    }
  },
  {
    "unicode": "f3da",
    "label": "Periscope",
    "name": "periscope",
    "styles": [
      "fab"
    ],
    "membership": {
      "free": [
        "fab"
      ],
      "pro": [
        "fab"
      ]
    }
  },
  {
    "unicode": "f541",
    "label": "Percentage",
    "name": "percentage",
    "styles": [
      "fas",
      "far",
      "fal"
    ],
    "membership": {
      "free": [
        "fas"
      ],
      "pro": [
        "fas",
        "far",
        "fal"
      ]
    }
  },
  {
    "unicode": "f295",
    "label": "Percent",
    "name": "percent",
    "styles": [
      "fas",
      "far",
      "fal"
    ],
    "membership": {
      "free": [
        "fas"
      ],
      "pro": [
        "fas",
        "far",
        "fal"
      ]
    }
  },
  {
    "unicode": "f4ce",
    "label": "People Carry",
    "name": "people-carry",
    "styles": [
      "fas",
      "far",
      "fal"
    ],
    "membership": {
      "free": [
        "fas"
      ],
      "pro": [
        "fas",
        "far",
        "fal"
      ]
    }
  },
  {
    "unicode": "f456",
    "label": "Pennant",
    "name": "pennant",
    "styles": [
      "fas",
      "far",
      "fal"
    ],
    "membership": {
      "free": [],
      "pro": [
        "fas",
        "far",
        "fal"
      ]
    }
  },
  {
    "unicode": "f5ae",
    "label": "Pencil Ruler",
    "name": "pencil-ruler",
    "styles": [
      "fas",
      "far",
      "fal"
    ],
    "membership": {
      "free": [
        "fas"
      ],
      "pro": [
        "fas",
        "far",
        "fal"
      ]
    }
  },
  {
    "unicode": "f618",
    "label": "Pencil Paintbrush",
    "name": "pencil-paintbrush",
    "styles": [
      "fas",
      "far",
      "fal"
    ],
    "membership": {
      "free": [],
      "pro": [
        "fas",
        "far",
        "fal"
      ]
    }
  },
  {
    "unicode": "f303",
    "label": "Alternate Pencil",
    "name": "pencil-alt",
    "styles": [
      "fas",
      "far",
      "fal"
    ],
    "membership": {
      "free": [
        "fas"
      ],
      "pro": [
        "fas",
        "far",
        "fal"
      ]
    }
  },
  {
    "unicode": "f040",
    "label": "pencil",
    "name": "pencil",
    "styles": [
      "fas",
      "far",
      "fal"
    ],
    "membership": {
      "free": [],
      "pro": [
        "fas",
        "far",
        "fal"
      ]
    }
  },
  {
    "unicode": "f14b",
    "label": "Pen Square",
    "name": "pen-square",
    "styles": [
      "fas",
      "far",
      "fal"
    ],
    "membership": {
      "free": [
        "fas"
      ],
      "pro": [
        "fas",
        "far",
        "fal"
      ]
    }
  },
  {
    "unicode": "f5ad",
    "label": "Pen Nib",
    "name": "pen-nib",
    "styles": [
      "fas",
      "far",
      "fal"
    ],
    "membership": {
      "free": [
        "fas"
      ],
      "pro": [
        "fas",
        "far",
        "fal"
      ]
    }
  },
  {
    "unicode": "f5ac",
    "label": "Pen Fancy",
    "name": "pen-fancy",
    "styles": [
      "fas",
      "far",
      "fal"
    ],
    "membership": {
      "free": [
        "fas"
      ],
      "pro": [
        "fas",
        "far",
        "fal"
      ]
    }
  },
  {
    "unicode": "f305",
    "label": "Alternate Pen",
    "name": "pen-alt",
    "styles": [
      "fas",
      "far",
      "fal"
    ],
    "membership": {
      "free": [
        "fas"
      ],
      "pro": [
        "fas",
        "far",
        "fal"
      ]
    }
  },
  {
    "unicode": "f304",
    "label": "Pen",
    "name": "pen",
    "styles": [
      "fas",
      "far",
      "fal"
    ],
    "membership": {
      "free": [
        "fas"
      ],
      "pro": [
        "fas",
        "far",
        "fal"
      ]
    }
  },
  {
    "unicode": "f1ed",
    "label": "Paypal",
    "name": "paypal",
    "styles": [
      "fab"
    ],
    "membership": {
      "free": [
        "fab"
      ],
      "pro": [
        "fab"
      ]
    }
  },
  {
    "unicode": "f1b0",
    "label": "Paw",
    "name": "paw",
    "styles": [
      "fas",
      "far",
      "fal"
    ],
    "membership": {
      "free": [
        "fas"
      ],
      "pro": [
        "fas",
        "far",
        "fal"
      ]
    }
  },
  {
    "unicode": "f28b",
    "label": "Pause Circle",
    "name": "pause-circle",
    "styles": [
      "fas",
      "far",
      "fal"
    ],
    "membership": {
      "free": [
        "fas",
        "far"
      ],
      "pro": [
        "fas",
        "far",
        "fal"
      ]
    }
  },
  {
    "unicode": "f04c",
    "label": "pause",
    "name": "pause",
    "styles": [
      "fas",
      "far",
      "fal"
    ],
    "membership": {
      "free": [
        "fas"
      ],
      "pro": [
        "fas",
        "far",
        "fal"
      ]
    }
  },
  {
    "unicode": "f3d9",
    "label": "Patreon",
    "name": "patreon",
    "styles": [
      "fab"
    ],
    "membership": {
      "free": [
        "fab"
      ],
      "pro": [
        "fab"
      ]
    }
  },
  {
    "unicode": "f0ea",
    "label": "Paste",
    "name": "paste",
    "styles": [
      "fas",
      "far",
      "fal"
    ],
    "membership": {
      "free": [
        "fas"
      ],
      "pro": [
        "fas",
        "far",
        "fal"
      ]
    }
  },
  {
    "unicode": "f5ab",
    "label": "Passport",
    "name": "passport",
    "styles": [
      "fas",
      "far",
      "fal"
    ],
    "membership": {
      "free": [
        "fas"
      ],
      "pro": [
        "fas",
        "far",
        "fal"
      ]
    }
  },
  {
    "unicode": "f617",
    "label": "Parking Slash",
    "name": "parking-slash",
    "styles": [
      "fas",
      "far",
      "fal"
    ],
    "membership": {
      "free": [],
      "pro": [
        "fas",
        "far",
        "fal"
      ]
    }
  },
  {
    "unicode": "f616",
    "label": "Parking Circle-slash",
    "name": "parking-circle-slash",
    "styles": [
      "fas",
      "far",
      "fal"
    ],
    "membership": {
      "free": [],
      "pro": [
        "fas",
        "far",
        "fal"
      ]
    }
  },
  {
    "unicode": "f615",
    "label": "Parking Circle",
    "name": "parking-circle",
    "styles": [
      "fas",
      "far",
      "fal"
    ],
    "membership": {
      "free": [],
      "pro": [
        "fas",
        "far",
        "fal"
      ]
    }
  },
  {
    "unicode": "f540",
    "label": "Parking",
    "name": "parking",
    "styles": [
      "fas",
      "far",
      "fal"
    ],
    "membership": {
      "free": [
        "fas"
      ],
      "pro": [
        "fas",
        "far",
        "fal"
      ]
    }
  },
  {
    "unicode": "f1dd",
    "label": "paragraph",
    "name": "paragraph",
    "styles": [
      "fas",
      "far",
      "fal"
    ],
    "membership": {
      "free": [
        "fas"
      ],
      "pro": [
        "fas",
        "far",
        "fal"
      ]
    }
  },
  {
    "unicode": "f4cd",
    "label": "Parachute Box",
    "name": "parachute-box",
    "styles": [
      "fas",
      "far",
      "fal"
    ],
    "membership": {
      "free": [
        "fas"
      ],
      "pro": [
        "fas",
        "far",
        "fal"
      ]
    }
  },
  {
    "unicode": "f0c6",
    "label": "Paperclip",
    "name": "paperclip",
    "styles": [
      "fas",
      "far",
      "fal"
    ],
    "membership": {
      "free": [
        "fas"
      ],
      "pro": [
        "fas",
        "far",
        "fal"
      ]
    }
  },
  {
    "unicode": "f1d8",
    "label": "Paper Plane",
    "name": "paper-plane",
    "styles": [
      "fas",
      "far",
      "fal"
    ],
    "membership": {
      "free": [
        "fas",
        "far"
      ],
      "pro": [
        "fas",
        "far",
        "fal"
      ]
    }
  },
  {
    "unicode": "f483",
    "label": "Alternate Pallet",
    "name": "pallet-alt",
    "styles": [
      "fas",
      "far",
      "fal"
    ],
    "membership": {
      "free": [],
      "pro": [
        "fas",
        "far",
        "fal"
      ]
    }
  },
  {
    "unicode": "f482",
    "label": "Pallet",
    "name": "pallet",
    "styles": [
      "fas",
      "far",
      "fal"
    ],
    "membership": {
      "free": [
        "fas"
      ],
      "pro": [
        "fas",
        "far",
        "fal"
      ]
    }
  },
  {
    "unicode": "f3d8",
    "label": "Palfed",
    "name": "palfed",
    "styles": [
      "fab"
    ],
    "membership": {
      "free": [
        "fab"
      ],
      "pro": [
        "fab"
      ]
    }
  },
  {
    "unicode": "f53f",
    "label": "Palette",
    "name": "palette",
    "styles": [
      "fas",
      "far",
      "fal"
    ],
    "membership": {
      "free": [
        "fas"
      ],
      "pro": [
        "fas",
        "far",
        "fal"
      ]
    }
  },
  {
    "unicode": "f5aa",
    "label": "Paint Roller",
    "name": "paint-roller",
    "styles": [
      "fas",
      "far",
      "fal"
    ],
    "membership": {
      "free": [
        "fas"
      ],
      "pro": [
        "fas",
        "far",
        "fal"
      ]
    }
  },
  {
    "unicode": "f5a9",
    "label": "Alternate Paint Brush",
    "name": "paint-brush-alt",
    "styles": [
      "fas",
      "far",
      "fal"
    ],
    "membership": {
      "free": [],
      "pro": [
        "fas",
        "far",
        "fal"
      ]
    }
  },
  {
    "unicode": "f1fc",
    "label": "Paint Brush",
    "name": "paint-brush",
    "styles": [
      "fas",
      "far",
      "fal"
    ],
    "membership": {
      "free": [
        "fas"
      ],
      "pro": [
        "fas",
        "far",
        "fal"
      ]
    }
  },
  {
    "unicode": "f18c",
    "label": "Pagelines",
    "name": "pagelines",
    "styles": [
      "fab"
    ],
    "membership": {
      "free": [
        "fab"
      ],
      "pro": [
        "fab"
      ]
    }
  },
  {
    "unicode": "f3d7",
    "label": "page4 Corporation",
    "name": "page4",
    "styles": [
      "fab"
    ],
    "membership": {
      "free": [
        "fab"
      ],
      "pro": [
        "fab"
      ]
    }
  },
  {
    "unicode": "f03b",
    "label": "Outdent",
    "name": "outdent",
    "styles": [
      "fas",
      "far",
      "fal"
    ],
    "membership": {
      "free": [
        "fas"
      ],
      "pro": [
        "fas",
        "far",
        "fal"
      ]
    }
  },
  {
    "unicode": "f41a",
    "label": "Open Source Initiative",
    "name": "osi",
    "styles": [
      "fab"
    ],
    "membership": {
      "free": [
        "fab"
      ],
      "pro": [
        "fab"
      ]
    }
  },
  {
    "unicode": "f23c",
    "label": "Optin Monster",
    "name": "optin-monster",
    "styles": [
      "fab"
    ],
    "membership": {
      "free": [
        "fab"
      ],
      "pro": [
        "fab"
      ]
    }
  },
  {
    "unicode": "f26a",
    "label": "Opera",
    "name": "opera",
    "styles": [
      "fab"
    ],
    "membership": {
      "free": [
        "fab"
      ],
      "pro": [
        "fab"
      ]
    }
  },
  {
    "unicode": "f19b",
    "label": "OpenID",
    "name": "openid",
    "styles": [
      "fab"
    ],
    "membership": {
      "free": [
        "fab"
      ],
      "pro": [
        "fab"
      ]
    }
  },
  {
    "unicode": "f23d",
    "label": "OpenCart",
    "name": "opencart",
    "styles": [
      "fab"
    ],
    "membership": {
      "free": [
        "fab"
      ],
      "pro": [
        "fab"
      ]
    }
  },
  {
    "unicode": "f510",
    "label": "Old Republic",
    "name": "old-republic",
    "styles": [
      "fab"
    ],
    "membership": {
      "free": [
        "fab"
      ],
      "pro": [
        "fab"
      ]
    }
  },
  {
    "unicode": "f614",
    "label": "Oil Temp",
    "name": "oil-temp",
    "styles": [
      "fas",
      "far",
      "fal"
    ],
    "membership": {
      "free": [],
      "pro": [
        "fas",
        "far",
        "fal"
      ]
    }
  },
  {
    "unicode": "f613",
    "label": "Oil Can",
    "name": "oil-can",
    "styles": [
      "fas",
      "far",
      "fal"
    ],
    "membership": {
      "free": [
        "fas"
      ],
      "pro": [
        "fas",
        "far",
        "fal"
      ]
    }
  },
  {
    "unicode": "f264",
    "label": "Odnoklassniki Square",
    "name": "odnoklassniki-square",
    "styles": [
      "fab"
    ],
    "membership": {
      "free": [
        "fab"
      ],
      "pro": [
        "fab"
      ]
    }
  },
  {
    "unicode": "f263",
    "label": "Odnoklassniki",
    "name": "odnoklassniki",
    "styles": [
      "fab"
    ],
    "membership": {
      "free": [
        "fab"
      ],
      "pro": [
        "fab"
      ]
    }
  },
  {
    "unicode": "f306",
    "label": "Octagon",
    "name": "octagon",
    "styles": [
      "fas",
      "far",
      "fal"
    ],
    "membership": {
      "free": [],
      "pro": [
        "fas",
        "far",
        "fal"
      ]
    }
  },
  {
    "unicode": "f248",
    "label": "Object Ungroup",
    "name": "object-ungroup",
    "styles": [
      "fas",
      "far",
      "fal"
    ],
    "membership": {
      "free": [
        "fas",
        "far"
      ],
      "pro": [
        "fas",
        "far",
        "fal"
      ]
    }
  },
  {
    "unicode": "f247",
    "label": "Object Group",
    "name": "object-group",
    "styles": [
      "fas",
      "far",
      "fal"
    ],
    "membership": {
      "free": [
        "fas",
        "far"
      ],
      "pro": [
        "fas",
        "far",
        "fal"
      ]
    }
  },
  {
    "unicode": "f3d6",
    "label": "Nutritionix",
    "name": "nutritionix",
    "styles": [
      "fab"
    ],
    "membership": {
      "free": [
        "fab"
      ],
      "pro": [
        "fab"
      ]
    }
  },
  {
    "unicode": "f3d5",
    "label": "NS8",
    "name": "ns8",
    "styles": [
      "fab"
    ],
    "membership": {
      "free": [
        "fab"
      ],
      "pro": [
        "fab"
      ]
    }
  },
  {
    "unicode": "f3d4",
    "label": "npm",
    "name": "npm",
    "styles": [
      "fab"
    ],
    "membership": {
      "free": [
        "fab"
      ],
      "pro": [
        "fab"
      ]
    }
  },
  {
    "unicode": "f481",
    "label": "Medical Notes",
    "name": "notes-medical",
    "styles": [
      "fas",
      "far",
      "fal"
    ],
    "membership": {
      "free": [
        "fas"
      ],
      "pro": [
        "fas",
        "far",
        "fal"
      ]
    }
  },
  {
    "unicode": "f53e",
    "label": "Not Equal",
    "name": "not-equal",
    "styles": [
      "fas",
      "far",
      "fal"
    ],
    "membership": {
      "free": [
        "fas"
      ],
      "pro": [
        "fas",
        "far",
        "fal"
      ]
    }
  },
  {
    "unicode": "f3d3",
    "label": "Node.js JS",
    "name": "node-js",
    "styles": [
      "fab"
    ],
    "membership": {
      "free": [
        "fab"
      ],
      "pro": [
        "fab"
      ]
    }
  },
  {
    "unicode": "f419",
    "label": "Node.js",
    "name": "node",
    "styles": [
      "fab"
    ],
    "membership": {
      "free": [
        "fab"
      ],
      "pro": [
        "fab"
      ]
    }
  },
  {
    "unicode": "f418",
    "label": "Nintendo Switch",
    "name": "nintendo-switch",
    "styles": [
      "fab"
    ],
    "membership": {
      "free": [
        "fab"
      ],
      "pro": [
        "fab"
      ]
    }
  },
  {
    "unicode": "f5a8",
    "label": "Nimblr",
    "name": "nimblr",
    "styles": [
      "fab"
    ],
    "membership": {
      "free": [
        "fab"
      ],
      "pro": [
        "fab"
      ]
    }
  },
  {
    "unicode": "f1ea",
    "label": "Newspaper",
    "name": "newspaper",
    "styles": [
      "fas",
      "far",
      "fal"
    ],
    "membership": {
      "free": [
        "fas",
        "far"
      ],
      "pro": [
        "fas",
        "far",
        "fal"
      ]
    }
  },
  {
    "unicode": "f22c",
    "label": "Neuter",
    "name": "neuter",
    "styles": [
      "fas",
      "far",
      "fal"
    ],
    "membership": {
      "free": [
        "fas"
      ],
      "pro": [
        "fas",
        "far",
        "fal"
      ]
    }
  },
  {
    "unicode": "f612",
    "label": "Neos",
    "name": "neos",
    "styles": [
      "fab"
    ],
    "membership": {
      "free": [
        "fab"
      ],
      "pro": [
        "fab"
      ]
    }
  },
  {
    "unicode": "f3d2",
    "label": "Napster",
    "name": "napster",
    "styles": [
      "fab"
    ],
    "membership": {
      "free": [
        "fab"
      ],
      "pro": [
        "fab"
      ]
    }
  },
  {
    "unicode": "f001",
    "label": "Music",
    "name": "music",
    "styles": [
      "fas",
      "far",
      "fal"
    ],
    "membership": {
      "free": [
        "fas"
      ],
      "pro": [
        "fas",
        "far",
        "fal"
      ]
    }
  },
  {
    "unicode": "f245",
    "label": "Mouse Pointer",
    "name": "mouse-pointer",
    "styles": [
      "fas",
      "far",
      "fal"
    ],
    "membership": {
      "free": [
        "fas"
      ],
      "pro": [
        "fas",
        "far",
        "fal"
      ]
    }
  },
  {
    "unicode": "f21c",
    "label": "Motorcycle",
    "name": "motorcycle",
    "styles": [
      "fas",
      "far",
      "fal"
    ],
    "membership": {
      "free": [
        "fas"
      ],
      "pro": [
        "fas",
        "far",
        "fal"
      ]
    }
  },
  {
    "unicode": "f5a7",
    "label": "Mortar Pestle",
    "name": "mortar-pestle",
    "styles": [
      "fas",
      "far",
      "fal"
    ],
    "membership": {
      "free": [
        "fas"
      ],
      "pro": [
        "fas",
        "far",
        "fal"
      ]
    }
  },
  {
    "unicode": "f186",
    "label": "Moon",
    "name": "moon",
    "styles": [
      "fas",
      "far",
      "fal"
    ],
    "membership": {
      "free": [
        "fas",
        "far"
      ],
      "pro": [
        "fas",
        "far",
        "fal"
      ]
    }
  },
  {
    "unicode": "f5a6",
    "label": "Monument",
    "name": "monument",
    "styles": [
      "fas",
      "far",
      "fal"
    ],
    "membership": {
      "free": [
        "fas"
      ],
      "pro": [
        "fas",
        "far",
        "fal"
      ]
    }
  },
  {
    "unicode": "f611",
    "label": "Monitor Heart Rate",
    "name": "monitor-heart-rate",
    "styles": [
      "fas",
      "far",
      "fal"
    ],
    "membership": {
      "free": [],
      "pro": [
        "fas",
        "far",
        "fal"
      ]
    }
  },
  {
    "unicode": "f53d",
    "label": "Alternate Money Check",
    "name": "money-check-alt",
    "styles": [
      "fas",
      "far",
      "fal"
    ],
    "membership": {
      "free": [
        "fas"
      ],
      "pro": [
        "fas",
        "far",
        "fal"
      ]
    }
  },
  {
    "unicode": "f53c",
    "label": "Money Check",
    "name": "money-check",
    "styles": [
      "fas",
      "far",
      "fal"
    ],
    "membership": {
      "free": [
        "fas"
      ],
      "pro": [
        "fas",
        "far",
        "fal"
      ]
    }
  },
  {
    "unicode": "f53b",
    "label": "Alternate Wavy Money Bill",
    "name": "money-bill-wave-alt",
    "styles": [
      "fas",
      "far",
      "fal"
    ],
    "membership": {
      "free": [
        "fas"
      ],
      "pro": [
        "fas",
        "far",
        "fal"
      ]
    }
  },
  {
    "unicode": "f53a",
    "label": "Wavy Money Bill",
    "name": "money-bill-wave",
    "styles": [
      "fas",
      "far",
      "fal"
    ],
    "membership": {
      "free": [
        "fas"
      ],
      "pro": [
        "fas",
        "far",
        "fal"
      ]
    }
  },
  {
    "unicode": "f3d1",
    "label": "Alternate Money Bill",
    "name": "money-bill-alt",
    "styles": [
      "fas",
      "far",
      "fal"
    ],
    "membership": {
      "free": [
        "fas",
        "far"
      ],
      "pro": [
        "fas",
        "far",
        "fal"
      ]
    }
  },
  {
    "unicode": "f0d6",
    "label": "Money Bill",
    "name": "money-bill",
    "styles": [
      "fas",
      "far",
      "fal"
    ],
    "membership": {
      "free": [
        "fas"
      ],
      "pro": [
        "fas",
        "far",
        "fal"
      ]
    }
  },
  {
    "unicode": "f3d0",
    "label": "Monero",
    "name": "monero",
    "styles": [
      "fab"
    ],
    "membership": {
      "free": [
        "fab"
      ],
      "pro": [
        "fab"
      ]
    }
  },
  {
    "unicode": "f285",
    "label": "MODX",
    "name": "modx",
    "styles": [
      "fab"
    ],
    "membership": {
      "free": [
        "fab"
      ],
      "pro": [
        "fab"
      ]
    }
  },
  {
    "unicode": "f3cf",
    "label": "Alternate Mobile Android",
    "name": "mobile-android-alt",
    "styles": [
      "fas",
      "far",
      "fal"
    ],
    "membership": {
      "free": [],
      "pro": [
        "fas",
        "far",
        "fal"
      ]
    }
  },
  {
    "unicode": "f3ce",
    "label": "Mobile Android",
    "name": "mobile-android",
    "styles": [
      "fas",
      "far",
      "fal"
    ],
    "membership": {
      "free": [],
      "pro": [
        "fas",
        "far",
        "fal"
      ]
    }
  },
  {
    "unicode": "f3cd",
    "label": "Alternate Mobile",
    "name": "mobile-alt",
    "styles": [
      "fas",
      "far",
      "fal"
    ],
    "membership": {
      "free": [
        "fas"
      ],
      "pro": [
        "fas",
        "far",
        "fal"
      ]
    }
  },
  {
    "unicode": "f10b",
    "label": "Mobile Phone",
    "name": "mobile",
    "styles": [
      "fas",
      "far",
      "fal"
    ],
    "membership": {
      "free": [
        "fas"
      ],
      "pro": [
        "fas",
        "far",
        "fal"
      ]
    }
  },
  {
    "unicode": "f3cc",
    "label": "Mizuni",
    "name": "mizuni",
    "styles": [
      "fab"
    ],
    "membership": {
      "free": [
        "fab"
      ],
      "pro": [
        "fab"
      ]
    }
  },
  {
    "unicode": "f289",
    "label": "Mixcloud",
    "name": "mixcloud",
    "styles": [
      "fab"
    ],
    "membership": {
      "free": [
        "fab"
      ],
      "pro": [
        "fab"
      ]
    }
  },
  {
    "unicode": "f3cb",
    "label": "Mix",
    "name": "mix",
    "styles": [
      "fab"
    ],
    "membership": {
      "free": [
        "fab"
      ],
      "pro": [
        "fab"
      ]
    }
  },
  {
    "unicode": "f146",
    "label": "Minus Square",
    "name": "minus-square",
    "styles": [
      "fas",
      "far",
      "fal"
    ],
    "membership": {
      "free": [
        "fas",
        "far"
      ],
      "pro": [
        "fas",
        "far",
        "fal"
      ]
    }
  },
  {
    "unicode": "f308",
    "label": "Minus Octagon",
    "name": "minus-octagon",
    "styles": [
      "fas",
      "far",
      "fal"
    ],
    "membership": {
      "free": [],
      "pro": [
        "fas",
        "far",
        "fal"
      ]
    }
  },
  {
    "unicode": "f307",
    "label": "Minus Hexagon",
    "name": "minus-hexagon",
    "styles": [
      "fas",
      "far",
      "fal"
    ],
    "membership": {
      "free": [],
      "pro": [
        "fas",
        "far",
        "fal"
      ]
    }
  },
  {
    "unicode": "f056",
    "label": "Minus Circle",
    "name": "minus-circle",
    "styles": [
      "fas",
      "far",
      "fal"
    ],
    "membership": {
      "free": [
        "fas"
      ],
      "pro": [
        "fas",
        "far",
        "fal"
      ]
    }
  },
  {
    "unicode": "f068",
    "label": "minus",
    "name": "minus",
    "styles": [
      "fas",
      "far",
      "fal"
    ],
    "membership": {
      "free": [
        "fas"
      ],
      "pro": [
        "fas",
        "far",
        "fal"
      ]
    }
  },
  {
    "unicode": "f3ca",
    "label": "Microsoft",
    "name": "microsoft",
    "styles": [
      "fab"
    ],
    "membership": {
      "free": [
        "fab"
      ],
      "pro": [
        "fab"
      ]
    }
  },
  {
    "unicode": "f610",
    "label": "Microscope",
    "name": "microscope",
    "styles": [
      "fas",
      "far",
      "fal"
    ],
    "membership": {
      "free": [
        "fas"
      ],
      "pro": [
        "fas",
        "far",
        "fal"
      ]
    }
  },
  {
    "unicode": "f131",
    "label": "Microphone Slash",
    "name": "microphone-slash",
    "styles": [
      "fas",
      "far",
      "fal"
    ],
    "membership": {
      "free": [
        "fas"
      ],
      "pro": [
        "fas",
        "far",
        "fal"
      ]
    }
  },
  {
    "unicode": "f539",
    "label": "Alternate Microphone Slash",
    "name": "microphone-alt-slash",
    "styles": [
      "fas",
      "far",
      "fal"
    ],
    "membership": {
      "free": [
        "fas"
      ],
      "pro": [
        "fas",
        "far",
        "fal"
      ]
    }
  },
  {
    "unicode": "f3c9",
    "label": "Alternate Microphone",
    "name": "microphone-alt",
    "styles": [
      "fas",
      "far",
      "fal"
    ],
    "membership": {
      "free": [
        "fas"
      ],
      "pro": [
        "fas",
        "far",
        "fal"
      ]
    }
  },
  {
    "unicode": "f130",
    "label": "microphone",
    "name": "microphone",
    "styles": [
      "fas",
      "far",
      "fal"
    ],
    "membership": {
      "free": [
        "fas"
      ],
      "pro": [
        "fas",
        "far",
        "fal"
      ]
    }
  },
  {
    "unicode": "f2db",
    "label": "Microchip",
    "name": "microchip",
    "styles": [
      "fas",
      "far",
      "fal"
    ],
    "membership": {
      "free": [
        "fas"
      ],
      "pro": [
        "fas",
        "far",
        "fal"
      ]
    }
  },
  {
    "unicode": "f223",
    "label": "Mercury",
    "name": "mercury",
    "styles": [
      "fas",
      "far",
      "fal"
    ],
    "membership": {
      "free": [
        "fas"
      ],
      "pro": [
        "fas",
        "far",
        "fal"
      ]
    }
  },
  {
    "unicode": "f538",
    "label": "Memory",
    "name": "memory",
    "styles": [
      "fas",
      "far",
      "fal"
    ],
    "membership": {
      "free": [
        "fas"
      ],
      "pro": [
        "fas",
        "far",
        "fal"
      ]
    }
  },
  {
    "unicode": "f5a5",
    "label": "Face With Rolling Eyes",
    "name": "meh-rolling-eyes",
    "styles": [
      "fas",
      "far",
      "fal"
    ],
    "membership": {
      "free": [
        "fas",
        "far"
      ],
      "pro": [
        "fas",
        "far",
        "fal"
      ]
    }
  },
  {
    "unicode": "f5a4",
    "label": "Face Without Mouth",
    "name": "meh-blank",
    "styles": [
      "fas",
      "far",
      "fal"
    ],
    "membership": {
      "free": [
        "fas",
        "far"
      ],
      "pro": [
        "fas",
        "far",
        "fal"
      ]
    }
  },
  {
    "unicode": "f11a",
    "label": "Neutral Face",
    "name": "meh",
    "styles": [
      "fas",
      "far",
      "fal"
    ],
    "membership": {
      "free": [
        "fas",
        "far"
      ],
      "pro": [
        "fas",
        "far",
        "fal"
      ]
    }
  },
  {
    "unicode": "f5a3",
    "label": "Megaport",
    "name": "megaport",
    "styles": [
      "fab"
    ],
    "membership": {
      "free": [
        "fab"
      ],
      "pro": [
        "fab"
      ]
    }
  },
  {
    "unicode": "f2e0",
    "label": "Meetup",
    "name": "meetup",
    "styles": [
      "fab"
    ],
    "membership": {
      "free": [
        "fab"
      ],
      "pro": [
        "fab"
      ]
    }
  },
  {
    "unicode": "f3c8",
    "label": "MRT",
    "name": "medrt",
    "styles": [
      "fab"
    ],
    "membership": {
      "free": [
        "fab"
      ],
      "pro": [
        "fab"
      ]
    }
  },
  {
    "unicode": "f0fa",
    "label": "medkit",
    "name": "medkit",
    "styles": [
      "fas",
      "far",
      "fal"
    ],
    "membership": {
      "free": [
        "fas"
      ],
      "pro": [
        "fas",
        "far",
        "fal"
      ]
    }
  },
  {
    "unicode": "f3c7",
    "label": "Medium M",
    "name": "medium-m",
    "styles": [
      "fab"
    ],
    "membership": {
      "free": [
        "fab"
      ],
      "pro": [
        "fab"
      ]
    }
  },
  {
    "unicode": "f23a",
    "label": "Medium",
    "name": "medium",
    "styles": [
      "fab"
    ],
    "membership": {
      "free": [
        "fab"
      ],
      "pro": [
        "fab"
      ]
    }
  },
  {
    "unicode": "f3c6",
    "label": "MedApps",
    "name": "medapps",
    "styles": [
      "fab"
    ],
    "membership": {
      "free": [
        "fab"
      ],
      "pro": [
        "fab"
      ]
    }
  },
  {
    "unicode": "f5a2",
    "label": "Medal",
    "name": "medal",
    "styles": [
      "fas",
      "far",
      "fal"
    ],
    "membership": {
      "free": [
        "fas"
      ],
      "pro": [
        "fas",
        "far",
        "fal"
      ]
    }
  },
  {
    "unicode": "f136",
    "label": "MaxCDN",
    "name": "maxcdn",
    "styles": [
      "fab"
    ],
    "membership": {
      "free": [
        "fab"
      ],
      "pro": [
        "fab"
      ]
    }
  },
  {
    "unicode": "f4f6",
    "label": "Mastodon",
    "name": "mastodon",
    "styles": [
      "fab"
    ],
    "membership": {
      "free": [
        "fab"
      ],
      "pro": [
        "fab"
      ]
    }
  },
  {
    "unicode": "f22a",
    "label": "Mars Stroke Vertical",
    "name": "mars-stroke-v",
    "styles": [
      "fas",
      "far",
      "fal"
    ],
    "membership": {
      "free": [
        "fas"
      ],
      "pro": [
        "fas",
        "far",
        "fal"
      ]
    }
  },
  {
    "unicode": "f22b",
    "label": "Mars Stroke Horizontal",
    "name": "mars-stroke-h",
    "styles": [
      "fas",
      "far",
      "fal"
    ],
    "membership": {
      "free": [
        "fas"
      ],
      "pro": [
        "fas",
        "far",
        "fal"
      ]
    }
  },
  {
    "unicode": "f229",
    "label": "Mars Stroke",
    "name": "mars-stroke",
    "styles": [
      "fas",
      "far",
      "fal"
    ],
    "membership": {
      "free": [
        "fas"
      ],
      "pro": [
        "fas",
        "far",
        "fal"
      ]
    }
  },
  {
    "unicode": "f227",
    "label": "Mars Double",
    "name": "mars-double",
    "styles": [
      "fas",
      "far",
      "fal"
    ],
    "membership": {
      "free": [
        "fas"
      ],
      "pro": [
        "fas",
        "far",
        "fal"
      ]
    }
  },
  {
    "unicode": "f222",
    "label": "Mars",
    "name": "mars",
    "styles": [
      "fas",
      "far",
      "fal"
    ],
    "membership": {
      "free": [
        "fas"
      ],
      "pro": [
        "fas",
        "far",
        "fal"
      ]
    }
  },
  {
    "unicode": "f5a1",
    "label": "Marker",
    "name": "marker",
    "styles": [
      "fas",
      "far",
      "fal"
    ],
    "membership": {
      "free": [
        "fas"
      ],
      "pro": [
        "fas",
        "far",
        "fal"
      ]
    }
  },
  {
    "unicode": "f60f",
    "label": "Markdown",
    "name": "markdown",
    "styles": [
      "fab"
    ],
    "membership": {
      "free": [
        "fab"
      ],
      "pro": [
        "fab"
      ]
    }
  },
  {
    "unicode": "f277",
    "label": "Map Signs",
    "name": "map-signs",
    "styles": [
      "fas",
      "far",
      "fal"
    ],
    "membership": {
      "free": [
        "fas"
      ],
      "pro": [
        "fas",
        "far",
        "fal"
      ]
    }
  },
  {
    "unicode": "f276",
    "label": "Map Pin",
    "name": "map-pin",
    "styles": [
      "fas",
      "far",
      "fal"
    ],
    "membership": {
      "free": [
        "fas"
      ],
      "pro": [
        "fas",
        "far",
        "fal"
      ]
    }
  },
  {
    "unicode": "f60e",
    "label": "Map Marker-times",
    "name": "map-marker-times",
    "styles": [
      "fas",
      "far",
      "fal"
    ],
    "membership": {
      "free": [],
      "pro": [
        "fas",
        "far",
        "fal"
      ]
    }
  },
  {
    "unicode": "f60d",
    "label": "Directions Alt",
    "name": "map-marker-smile",
    "styles": [
      "fas",
      "far",
      "fal"
    ],
    "membership": {
      "free": [],
      "pro": [
        "fas",
        "far",
        "fal"
      ]
    }
  },
  {
    "unicode": "f60c",
    "label": "Map Marker-slash",
    "name": "map-marker-slash",
    "styles": [
      "fas",
      "far",
      "fal"
    ],
    "membership": {
      "free": [],
      "pro": [
        "fas",
        "far",
        "fal"
      ]
    }
  },
  {
    "unicode": "f60b",
    "label": "Map Marker-question",
    "name": "map-marker-question",
    "styles": [
      "fas",
      "far",
      "fal"
    ],
    "membership": {
      "free": [],
      "pro": [
        "fas",
        "far",
        "fal"
      ]
    }
  },
  {
    "unicode": "f60a",
    "label": "Map Marker-plus",
    "name": "map-marker-plus",
    "styles": [
      "fas",
      "far",
      "fal"
    ],
    "membership": {
      "free": [],
      "pro": [
        "fas",
        "far",
        "fal"
      ]
    }
  },
  {
    "unicode": "f609",
    "label": "Map Marker-minus",
    "name": "map-marker-minus",
    "styles": [
      "fas",
      "far",
      "fal"
    ],
    "membership": {
      "free": [],
      "pro": [
        "fas",
        "far",
        "fal"
      ]
    }
  },
  {
    "unicode": "f608",
    "label": "Map Marker-exclamation",
    "name": "map-marker-exclamation",
    "styles": [
      "fas",
      "far",
      "fal"
    ],
    "membership": {
      "free": [],
      "pro": [
        "fas",
        "far",
        "fal"
      ]
    }
  },
  {
    "unicode": "f607",
    "label": "Map Marker-edit",
    "name": "map-marker-edit",
    "styles": [
      "fas",
      "far",
      "fal"
    ],
    "membership": {
      "free": [],
      "pro": [
        "fas",
        "far",
        "fal"
      ]
    }
  },
  {
    "unicode": "f606",
    "label": "Map Marker-check",
    "name": "map-marker-check",
    "styles": [
      "fas",
      "far",
      "fal"
    ],
    "membership": {
      "free": [],
      "pro": [
        "fas",
        "far",
        "fal"
      ]
    }
  },
  {
    "unicode": "f605",
    "label": "Map Marker-alt-slash",
    "name": "map-marker-alt-slash",
    "styles": [
      "fas",
      "far",
      "fal"
    ],
    "membership": {
      "free": [],
      "pro": [
        "fas",
        "far",
        "fal"
      ]
    }
  },
  {
    "unicode": "f3c5",
    "label": "Alternate Map Marker",
    "name": "map-marker-alt",
    "styles": [
      "fas",
      "far",
      "fal"
    ],
    "membership": {
      "free": [
        "fas"
      ],
      "pro": [
        "fas",
        "far",
        "fal"
      ]
    }
  },
  {
    "unicode": "f041",
    "label": "map-marker",
    "name": "map-marker",
    "styles": [
      "fas",
      "far",
      "fal"
    ],
    "membership": {
      "free": [
        "fas"
      ],
      "pro": [
        "fas",
        "far",
        "fal"
      ]
    }
  },
  {
    "unicode": "f5a0",
    "label": "Map Marked-alt",
    "name": "map-marked-alt",
    "styles": [
      "fas",
      "far",
      "fal"
    ],
    "membership": {
      "free": [
        "fas"
      ],
      "pro": [
        "fas",
        "far",
        "fal"
      ]
    }
  },
  {
    "unicode": "f59f",
    "label": "Map Marked",
    "name": "map-marked",
    "styles": [
      "fas",
      "far",
      "fal"
    ],
    "membership": {
      "free": [
        "fas"
      ],
      "pro": [
        "fas",
        "far",
        "fal"
      ]
    }
  },
  {
    "unicode": "f279",
    "label": "Map",
    "name": "map",
    "styles": [
      "fas",
      "far",
      "fal"
    ],
    "membership": {
      "free": [
        "fas",
        "far"
      ],
      "pro": [
        "fas",
        "far",
        "fal"
      ]
    }
  },
  {
    "unicode": "f50f",
    "label": "Mandalorian",
    "name": "mandalorian",
    "styles": [
      "fab"
    ],
    "membership": {
      "free": [
        "fab"
      ],
      "pro": [
        "fab"
      ]
    }
  },
  {
    "unicode": "f183",
    "label": "Male",
    "name": "male",
    "styles": [
      "fas",
      "far",
      "fal"
    ],
    "membership": {
      "free": [
        "fas"
      ],
      "pro": [
        "fas",
        "far",
        "fal"
      ]
    }
  },
  {
    "unicode": "f59e",
    "label": "Mailchimp",
    "name": "mailchimp",
    "styles": [
      "fab"
    ],
    "membership": {
      "free": [
        "fab"
      ],
      "pro": [
        "fab"
      ]
    }
  },
  {
    "unicode": "f076",
    "label": "magnet",
    "name": "magnet",
    "styles": [
      "fas",
      "far",
      "fal"
    ],
    "membership": {
      "free": [
        "fas"
      ],
      "pro": [
        "fas",
        "far",
        "fal"
      ]
    }
  },
  {
    "unicode": "f0d0",
    "label": "magic",
    "name": "magic",
    "styles": [
      "fas",
      "far",
      "fal"
    ],
    "membership": {
      "free": [
        "fas"
      ],
      "pro": [
        "fas",
        "far",
        "fal"
      ]
    }
  },
  {
    "unicode": "f3c4",
    "label": "Magento",
    "name": "magento",
    "styles": [
      "fab"
    ],
    "membership": {
      "free": [
        "fab"
      ],
      "pro": [
        "fab"
      ]
    }
  },
  {
    "unicode": "f3c3",
    "label": "lyft",
    "name": "lyft",
    "styles": [
      "fab"
    ],
    "membership": {
      "free": [
        "fab"
      ],
      "pro": [
        "fab"
      ]
    }
  },
  {
    "unicode": "f604",
    "label": "Lungs",
    "name": "lungs",
    "styles": [
      "fas",
      "far",
      "fal"
    ],
    "membership": {
      "free": [],
      "pro": [
        "fas",
        "far",
        "fal"
      ]
    }
  },
  {
    "unicode": "f59d",
    "label": "Luggage Cart",
    "name": "luggage-cart",
    "styles": [
      "fas",
      "far",
      "fal"
    ],
    "membership": {
      "free": [
        "fas"
      ],
      "pro": [
        "fas",
        "far",
        "fal"
      ]
    }
  },
  {
    "unicode": "f455",
    "label": "Luchador",
    "name": "luchador",
    "styles": [
      "fas",
      "far",
      "fal"
    ],
    "membership": {
      "free": [],
      "pro": [
        "fas",
        "far",
        "fal"
      ]
    }
  },
  {
    "unicode": "f2a8",
    "label": "Low Vision",
    "name": "low-vision",
    "styles": [
      "fas",
      "far",
      "fal"
    ],
    "membership": {
      "free": [
        "fas"
      ],
      "pro": [
        "fas",
        "far",
        "fal"
      ]
    }
  },
  {
    "unicode": "f4cc",
    "label": "Loveseat",
    "name": "loveseat",
    "styles": [
      "fas",
      "far",
      "fal"
    ],
    "membership": {
      "free": [],
      "pro": [
        "fas",
        "far",
        "fal"
      ]
    }
  },
  {
    "unicode": "f176",
    "label": "Long Arrow Up",
    "name": "long-arrow-up",
    "styles": [
      "fas",
      "far",
      "fal"
    ],
    "membership": {
      "free": [],
      "pro": [
        "fas",
        "far",
        "fal"
      ]
    }
  },
  {
    "unicode": "f178",
    "label": "Long Arrow Right",
    "name": "long-arrow-right",
    "styles": [
      "fas",
      "far",
      "fal"
    ],
    "membership": {
      "free": [],
      "pro": [
        "fas",
        "far",
        "fal"
      ]
    }
  },
  {
    "unicode": "f177",
    "label": "Long Arrow Left",
    "name": "long-arrow-left",
    "styles": [
      "fas",
      "far",
      "fal"
    ],
    "membership": {
      "free": [],
      "pro": [
        "fas",
        "far",
        "fal"
      ]
    }
  },
  {
    "unicode": "f175",
    "label": "Long Arrow Down",
    "name": "long-arrow-down",
    "styles": [
      "fas",
      "far",
      "fal"
    ],
    "membership": {
      "free": [],
      "pro": [
        "fas",
        "far",
        "fal"
      ]
    }
  },
  {
    "unicode": "f30c",
    "label": "Alternate Long Arrow Up",
    "name": "long-arrow-alt-up",
    "styles": [
      "fas",
      "far",
      "fal"
    ],
    "membership": {
      "free": [
        "fas"
      ],
      "pro": [
        "fas",
        "far",
        "fal"
      ]
    }
  },
  {
    "unicode": "f30b",
    "label": "Alternate Long Arrow Right",
    "name": "long-arrow-alt-right",
    "styles": [
      "fas",
      "far",
      "fal"
    ],
    "membership": {
      "free": [
        "fas"
      ],
      "pro": [
        "fas",
        "far",
        "fal"
      ]
    }
  },
  {
    "unicode": "f30a",
    "label": "Alternate Long Arrow Left",
    "name": "long-arrow-alt-left",
    "styles": [
      "fas",
      "far",
      "fal"
    ],
    "membership": {
      "free": [
        "fas"
      ],
      "pro": [
        "fas",
        "far",
        "fal"
      ]
    }
  },
  {
    "unicode": "f309",
    "label": "Alternate Long Arrow Down",
    "name": "long-arrow-alt-down",
    "styles": [
      "fas",
      "far",
      "fal"
    ],
    "membership": {
      "free": [
        "fas"
      ],
      "pro": [
        "fas",
        "far",
        "fal"
      ]
    }
  },
  {
    "unicode": "f3c2",
    "label": "Alternate Lock Open",
    "name": "lock-open-alt",
    "styles": [
      "fas",
      "far",
      "fal"
    ],
    "membership": {
      "free": [],
      "pro": [
        "fas",
        "far",
        "fal"
      ]
    }
  },
  {
    "unicode": "f3c1",
    "label": "Lock Open",
    "name": "lock-open",
    "styles": [
      "fas",
      "far",
      "fal"
    ],
    "membership": {
      "free": [
        "fas"
      ],
      "pro": [
        "fas",
        "far",
        "fal"
      ]
    }
  },
  {
    "unicode": "f30d",
    "label": "Alternate Lock",
    "name": "lock-alt",
    "styles": [
      "fas",
      "far",
      "fal"
    ],
    "membership": {
      "free": [],
      "pro": [
        "fas",
        "far",
        "fal"
      ]
    }
  },
  {
    "unicode": "f023",
    "label": "lock",
    "name": "lock",
    "styles": [
      "fas",
      "far",
      "fal"
    ],
    "membership": {
      "free": [
        "fas"
      ],
      "pro": [
        "fas",
        "far",
        "fal"
      ]
    }
  },
  {
    "unicode": "f603",
    "label": "Location Slash",
    "name": "location-slash",
    "styles": [
      "fas",
      "far",
      "fal"
    ],
    "membership": {
      "free": [],
      "pro": [
        "fas",
        "far",
        "fal"
      ]
    }
  },
  {
    "unicode": "f602",
    "label": "Location Circle",
    "name": "location-circle",
    "styles": [
      "fas",
      "far",
      "fal"
    ],
    "membership": {
      "free": [],
      "pro": [
        "fas",
        "far",
        "fal"
      ]
    }
  },
  {
    "unicode": "f124",
    "label": "location-arrow",
    "name": "location-arrow",
    "styles": [
      "fas",
      "far",
      "fal"
    ],
    "membership": {
      "free": [
        "fas"
      ],
      "pro": [
        "fas",
        "far",
        "fal"
      ]
    }
  },
  {
    "unicode": "f601",
    "label": "Location",
    "name": "location",
    "styles": [
      "fas",
      "far",
      "fal"
    ],
    "membership": {
      "free": [],
      "pro": [
        "fas",
        "far",
        "fal"
      ]
    }
  },
  {
    "unicode": "f0ca",
    "label": "list-ul",
    "name": "list-ul",
    "styles": [
      "fas",
      "far",
      "fal"
    ],
    "membership": {
      "free": [
        "fas"
      ],
      "pro": [
        "fas",
        "far",
        "fal"
      ]
    }
  },
  {
    "unicode": "f0cb",
    "label": "list-ol",
    "name": "list-ol",
    "styles": [
      "fas",
      "far",
      "fal"
    ],
    "membership": {
      "free": [
        "fas"
      ],
      "pro": [
        "fas",
        "far",
        "fal"
      ]
    }
  },
  {
    "unicode": "f022",
    "label": "Alternate List",
    "name": "list-alt",
    "styles": [
      "fas",
      "far",
      "fal"
    ],
    "membership": {
      "free": [
        "fas",
        "far"
      ],
      "pro": [
        "fas",
        "far",
        "fal"
      ]
    }
  },
  {
    "unicode": "f03a",
    "label": "List",
    "name": "list",
    "styles": [
      "fas",
      "far",
      "fal"
    ],
    "membership": {
      "free": [
        "fas"
      ],
      "pro": [
        "fas",
        "far",
        "fal"
      ]
    }
  },
  {
    "unicode": "f195",
    "label": "Turkish Lira Sign",
    "name": "lira-sign",
    "styles": [
      "fas",
      "far",
      "fal"
    ],
    "membership": {
      "free": [
        "fas"
      ],
      "pro": [
        "fas",
        "far",
        "fal"
      ]
    }
  },
  {
    "unicode": "f600",
    "label": "Lips",
    "name": "lips",
    "styles": [
      "fas",
      "far",
      "fal"
    ],
    "membership": {
      "free": [],
      "pro": [
        "fas",
        "far",
        "fal"
      ]
    }
  },
  {
    "unicode": "f17c",
    "label": "Linux",
    "name": "linux",
    "styles": [
      "fab"
    ],
    "membership": {
      "free": [
        "fab"
      ],
      "pro": [
        "fab"
      ]
    }
  },
  {
    "unicode": "f2b8",
    "label": "Linode",
    "name": "linode",
    "styles": [
      "fab"
    ],
    "membership": {
      "free": [
        "fab"
      ],
      "pro": [
        "fab"
      ]
    }
  },
  {
    "unicode": "f0e1",
    "label": "LinkedIn In",
    "name": "linkedin-in",
    "styles": [
      "fab"
    ],
    "membership": {
      "free": [
        "fab"
      ],
      "pro": [
        "fab"
      ]
    }
  },
  {
    "unicode": "f08c",
    "label": "LinkedIn",
    "name": "linkedin",
    "styles": [
      "fab"
    ],
    "membership": {
      "free": [
        "fab"
      ],
      "pro": [
        "fab"
      ]
    }
  },
  {
    "unicode": "f0c1",
    "label": "Link",
    "name": "link",
    "styles": [
      "fas",
      "far",
      "fal"
    ],
    "membership": {
      "free": [
        "fas"
      ],
      "pro": [
        "fas",
        "far",
        "fal"
      ]
    }
  },
  {
    "unicode": "f3c0",
    "label": "Line",
    "name": "line",
    "styles": [
      "fab"
    ],
    "membership": {
      "free": [
        "fab"
      ],
      "pro": [
        "fab"
      ]
    }
  },
  {
    "unicode": "f0eb",
    "label": "Lightbulb",
    "name": "lightbulb",
    "styles": [
      "fas",
      "far",
      "fal"
    ],
    "membership": {
      "free": [
        "fas",
        "far"
      ],
      "pro": [
        "fas",
        "far",
        "fal"
      ]
    }
  },
  {
    "unicode": "f1cd",
    "label": "Life Ring",
    "name": "life-ring",
    "styles": [
      "fas",
      "far",
      "fal"
    ],
    "membership": {
      "free": [
        "fas",
        "far"
      ],
      "pro": [
        "fas",
        "far",
        "fal"
      ]
    }
  },
  {
    "unicode": "f3bf",
    "label": "Alternate Level Up",
    "name": "level-up-alt",
    "styles": [
      "fas",
      "far",
      "fal"
    ],
    "membership": {
      "free": [
        "fas"
      ],
      "pro": [
        "fas",
        "far",
        "fal"
      ]
    }
  },
  {
    "unicode": "f148",
    "label": "Level Up",
    "name": "level-up",
    "styles": [
      "fas",
      "far",
      "fal"
    ],
    "membership": {
      "free": [],
      "pro": [
        "fas",
        "far",
        "fal"
      ]
    }
  },
  {
    "unicode": "f3be",
    "label": "Alternate Level Down",
    "name": "level-down-alt",
    "styles": [
      "fas",
      "far",
      "fal"
    ],
    "membership": {
      "free": [
        "fas"
      ],
      "pro": [
        "fas",
        "far",
        "fal"
      ]
    }
  },
  {
    "unicode": "f149",
    "label": "Level Down",
    "name": "level-down",
    "styles": [
      "fas",
      "far",
      "fal"
    ],
    "membership": {
      "free": [],
      "pro": [
        "fas",
        "far",
        "fal"
      ]
    }
  },
  {
    "unicode": "f537",
    "label": "Less Than Equal To",
    "name": "less-than-equal",
    "styles": [
      "fas",
      "far",
      "fal"
    ],
    "membership": {
      "free": [
        "fas"
      ],
      "pro": [
        "fas",
        "far",
        "fal"
      ]
    }
  },
  {
    "unicode": "f536",
    "label": "Less Than",
    "name": "less-than",
    "styles": [
      "fas",
      "far",
      "fal"
    ],
    "membership": {
      "free": [
        "fas"
      ],
      "pro": [
        "fas",
        "far",
        "fal"
      ]
    }
  },
  {
    "unicode": "f41d",
    "label": "Less",
    "name": "less",
    "styles": [
      "fab"
    ],
    "membership": {
      "free": [
        "fab"
      ],
      "pro": [
        "fab"
      ]
    }
  },
  {
    "unicode": "f094",
    "label": "Lemon",
    "name": "lemon",
    "styles": [
      "fas",
      "far",
      "fal"
    ],
    "membership": {
      "free": [
        "fas",
        "far"
      ],
      "pro": [
        "fas",
        "far",
        "fal"
      ]
    }
  },
  {
    "unicode": "f212",
    "label": "Leanpub",
    "name": "leanpub",
    "styles": [
      "fab"
    ],
    "membership": {
      "free": [
        "fab"
      ],
      "pro": [
        "fab"
      ]
    }
  },
  {
    "unicode": "f4cb",
    "label": "Leaf Heart",
    "name": "leaf-heart",
    "styles": [
      "fas",
      "far",
      "fal"
    ],
    "membership": {
      "free": [],
      "pro": [
        "fas",
        "far",
        "fal"
      ]
    }
  },
  {
    "unicode": "f06c",
    "label": "leaf",
    "name": "leaf",
    "styles": [
      "fas",
      "far",
      "fal"
    ],
    "membership": {
      "free": [
        "fas"
      ],
      "pro": [
        "fas",
        "far",
        "fal"
      ]
    }
  },
  {
    "unicode": "f5ff",
    "label": "Layer Plus",
    "name": "layer-plus",
    "styles": [
      "fas",
      "far",
      "fal"
    ],
    "membership": {
      "free": [],
      "pro": [
        "fas",
        "far",
        "fal"
      ]
    }
  },
  {
    "unicode": "f5fe",
    "label": "Layer Minus",
    "name": "layer-minus",
    "styles": [
      "fas",
      "far",
      "fal"
    ],
    "membership": {
      "free": [],
      "pro": [
        "fas",
        "far",
        "fal"
      ]
    }
  },
  {
    "unicode": "f5fd",
    "label": "Layer Group",
    "name": "layer-group",
    "styles": [
      "fas",
      "far",
      "fal"
    ],
    "membership": {
      "free": [
        "fas"
      ],
      "pro": [
        "fas",
        "far",
        "fal"
      ]
    }
  },
  {
    "unicode": "f59c",
    "label": "Laughing Winking Face",
    "name": "laugh-wink",
    "styles": [
      "fas",
      "far",
      "fal"
    ],
    "membership": {
      "free": [
        "fas",
        "far"
      ],
      "pro": [
        "fas",
        "far",
        "fal"
      ]
    }
  },
  {
    "unicode": "f59b",
    "label": "Laughing Squinting Face",
    "name": "laugh-squint",
    "styles": [
      "fas",
      "far",
      "fal"
    ],
    "membership": {
      "free": [
        "fas",
        "far"
      ],
      "pro": [
        "fas",
        "far",
        "fal"
      ]
    }
  },
  {
    "unicode": "f59a",
    "label": "Laugh Face with Beaming Eyes",
    "name": "laugh-beam",
    "styles": [
      "fas",
      "far",
      "fal"
    ],
    "membership": {
      "free": [
        "fas",
        "far"
      ],
      "pro": [
        "fas",
        "far",
        "fal"
      ]
    }
  },
  {
    "unicode": "f599",
    "label": "Grinning Face With Big Eyes",
    "name": "laugh",
    "styles": [
      "fas",
      "far",
      "fal"
    ],
    "membership": {
      "free": [
        "fas",
        "far"
      ],
      "pro": [
        "fas",
        "far",
        "fal"
      ]
    }
  },
  {
    "unicode": "f203",
    "label": "last.fm Square",
    "name": "lastfm-square",
    "styles": [
      "fab"
    ],
    "membership": {
      "free": [
        "fab"
      ],
      "pro": [
        "fab"
      ]
    }
  },
  {
    "unicode": "f202",
    "label": "last.fm",
    "name": "lastfm",
    "styles": [
      "fab"
    ],
    "membership": {
      "free": [
        "fab"
      ],
      "pro": [
        "fab"
      ]
    }
  },
  {
    "unicode": "f3bd",
    "label": "Laravel",
    "name": "laravel",
    "styles": [
      "fab"
    ],
    "membership": {
      "free": [
        "fab"
      ],
      "pro": [
        "fab"
      ]
    }
  },
  {
    "unicode": "f5fc",
    "label": "Laptop Code",
    "name": "laptop-code",
    "styles": [
      "fas",
      "far",
      "fal"
    ],
    "membership": {
      "free": [
        "fas"
      ],
      "pro": [
        "fas",
        "far",
        "fal"
      ]
    }
  },
  {
    "unicode": "f109",
    "label": "Laptop",
    "name": "laptop",
    "styles": [
      "fas",
      "far",
      "fal"
    ],
    "membership": {
      "free": [
        "fas"
      ],
      "pro": [
        "fas",
        "far",
        "fal"
      ]
    }
  },
  {
    "unicode": "f1ab",
    "label": "Language",
    "name": "language",
    "styles": [
      "fas",
      "far",
      "fal"
    ],
    "membership": {
      "free": [
        "fas"
      ],
      "pro": [
        "fas",
        "far",
        "fal"
      ]
    }
  },
  {
    "unicode": "f4ca",
    "label": "Lamp",
    "name": "lamp",
    "styles": [
      "fas",
      "far",
      "fal"
    ],
    "membership": {
      "free": [],
      "pro": [
        "fas",
        "far",
        "fal"
      ]
    }
  },
  {
    "unicode": "f42f",
    "label": "KORVUE",
    "name": "korvue",
    "styles": [
      "fab"
    ],
    "membership": {
      "free": [
        "fab"
      ],
      "pro": [
        "fab"
      ]
    }
  },
  {
    "unicode": "f535",
    "label": "Kiwi Bird",
    "name": "kiwi-bird",
    "styles": [
      "fas",
      "far",
      "fal"
    ],
    "membership": {
      "free": [
        "fas"
      ],
      "pro": [
        "fas",
        "far",
        "fal"
      ]
    }
  },
  {
    "unicode": "f598",
    "label": "Face Blowing a Kiss",
    "name": "kiss-wink-heart",
    "styles": [
      "fas",
      "far",
      "fal"
    ],
    "membership": {
      "free": [
        "fas",
        "far"
      ],
      "pro": [
        "fas",
        "far",
        "fal"
      ]
    }
  },
  {
    "unicode": "f597",
    "label": "Kissing Face With Smiling Eyes",
    "name": "kiss-beam",
    "styles": [
      "fas",
      "far",
      "fal"
    ],
    "membership": {
      "free": [
        "fas",
        "far"
      ],
      "pro": [
        "fas",
        "far",
        "fal"
      ]
    }
  },
  {
    "unicode": "f596",
    "label": "Kissing Face",
    "name": "kiss",
    "styles": [
      "fas",
      "far",
      "fal"
    ],
    "membership": {
      "free": [
        "fas",
        "far"
      ],
      "pro": [
        "fas",
        "far",
        "fal"
      ]
    }
  },
  {
    "unicode": "f5fb",
    "label": "Kidneys",
    "name": "kidneys",
    "styles": [
      "fas",
      "far",
      "fal"
    ],
    "membership": {
      "free": [],
      "pro": [
        "fas",
        "far",
        "fal"
      ]
    }
  },
  {
    "unicode": "f3bc",
    "label": "Kickstarter K",
    "name": "kickstarter-k",
    "styles": [
      "fab"
    ],
    "membership": {
      "free": [
        "fab"
      ],
      "pro": [
        "fab"
      ]
    }
  },
  {
    "unicode": "f3bb",
    "label": "Kickstarter",
    "name": "kickstarter",
    "styles": [
      "fab"
    ],
    "membership": {
      "free": [
        "fab"
      ],
      "pro": [
        "fab"
      ]
    }
  },
  {
    "unicode": "f3ba",
    "label": "KeyCDN",
    "name": "keycdn",
    "styles": [
      "fab"
    ],
    "membership": {
      "free": [
        "fab"
      ],
      "pro": [
        "fab"
      ]
    }
  },
  {
    "unicode": "f11c",
    "label": "Keyboard",
    "name": "keyboard",
    "styles": [
      "fas",
      "far",
      "fal"
    ],
    "membership": {
      "free": [
        "fas",
        "far"
      ],
      "pro": [
        "fas",
        "far",
        "fal"
      ]
    }
  },
  {
    "unicode": "f4f5",
    "label": "Keybase",
    "name": "keybase",
    "styles": [
      "fab"
    ],
    "membership": {
      "free": [
        "fab"
      ],
      "pro": [
        "fab"
      ]
    }
  },
  {
    "unicode": "f084",
    "label": "key",
    "name": "key",
    "styles": [
      "fas",
      "far",
      "fal"
    ],
    "membership": {
      "free": [
        "fas"
      ],
      "pro": [
        "fas",
        "far",
        "fal"
      ]
    }
  },
  {
    "unicode": "f5fa",
    "label": "Kaggle",
    "name": "kaggle",
    "styles": [
      "fab"
    ],
    "membership": {
      "free": [
        "fab"
      ],
      "pro": [
        "fab"
      ]
    }
  },
  {
    "unicode": "f1cc",
    "label": "jsFiddle",
    "name": "jsfiddle",
    "styles": [
      "fab"
    ],
    "membership": {
      "free": [
        "fab"
      ],
      "pro": [
        "fab"
      ]
    }
  },
  {
    "unicode": "f3b9",
    "label": "JavaScript (JS) Square",
    "name": "js-square",
    "styles": [
      "fab"
    ],
    "membership": {
      "free": [
        "fab"
      ],
      "pro": [
        "fab"
      ]
    }
  },
  {
    "unicode": "f3b8",
    "label": "JavaScript (JS)",
    "name": "js",
    "styles": [
      "fab"
    ],
    "membership": {
      "free": [
        "fab"
      ],
      "pro": [
        "fab"
      ]
    }
  },
  {
    "unicode": "f1aa",
    "label": "Joomla Logo",
    "name": "joomla",
    "styles": [
      "fab"
    ],
    "membership": {
      "free": [
        "fab"
      ],
      "pro": [
        "fab"
      ]
    }
  },
  {
    "unicode": "f595",
    "label": "Joint",
    "name": "joint",
    "styles": [
      "fas",
      "far",
      "fal"
    ],
    "membership": {
      "free": [
        "fas"
      ],
      "pro": [
        "fas",
        "far",
        "fal"
      ]
    }
  },
  {
    "unicode": "f3b7",
    "label": "Joget",
    "name": "joget",
    "styles": [
      "fab"
    ],
    "membership": {
      "free": [
        "fab"
      ],
      "pro": [
        "fab"
      ]
    }
  },
  {
    "unicode": "f3b6",
    "label": "Jenkis",
    "name": "jenkins",
    "styles": [
      "fab"
    ],
    "membership": {
      "free": [
        "fab"
      ],
      "pro": [
        "fab"
      ]
    }
  },
  {
    "unicode": "f50e",
    "label": "Jedi Order",
    "name": "jedi-order",
    "styles": [
      "fab"
    ],
    "membership": {
      "free": [
        "fab"
      ],
      "pro": [
        "fab"
      ]
    }
  },
  {
    "unicode": "f4e4",
    "label": "Java",
    "name": "java",
    "styles": [
      "fab"
    ],
    "membership": {
      "free": [
        "fab"
      ],
      "pro": [
        "fab"
      ]
    }
  },
  {
    "unicode": "f30e",
    "label": "Jack-o'-lantern",
    "name": "jack-o-lantern",
    "styles": [
      "fas",
      "far",
      "fal"
    ],
    "membership": {
      "free": [],
      "pro": [
        "fas",
        "far",
        "fal"
      ]
    }
  },
  {
    "unicode": "f3b5",
    "label": "Itunes Note",
    "name": "itunes-note",
    "styles": [
      "fab"
    ],
    "membership": {
      "free": [
        "fab"
      ],
      "pro": [
        "fab"
      ]
    }
  },
  {
    "unicode": "f3b4",
    "label": "iTunes",
    "name": "itunes",
    "styles": [
      "fab"
    ],
    "membership": {
      "free": [
        "fab"
      ],
      "pro": [
        "fab"
      ]
    }
  },
  {
    "unicode": "f033",
    "label": "italic",
    "name": "italic",
    "styles": [
      "fas",
      "far",
      "fal"
    ],
    "membership": {
      "free": [
        "fas"
      ],
      "pro": [
        "fas",
        "far",
        "fal"
      ]
    }
  },
  {
    "unicode": "f208",
    "label": "ioxhost",
    "name": "ioxhost",
    "styles": [
      "fab"
    ],
    "membership": {
      "free": [
        "fab"
      ],
      "pro": [
        "fab"
      ]
    }
  },
  {
    "unicode": "f480",
    "label": "Inventory",
    "name": "inventory",
    "styles": [
      "fas",
      "far",
      "fal"
    ],
    "membership": {
      "free": [],
      "pro": [
        "fas",
        "far",
        "fal"
      ]
    }
  },
  {
    "unicode": "f26b",
    "label": "Internet-explorer",
    "name": "internet-explorer",
    "styles": [
      "fab"
    ],
    "membership": {
      "free": [
        "fab"
      ],
      "pro": [
        "fab"
      ]
    }
  },
  {
    "unicode": "f16d",
    "label": "Instagram",
    "name": "instagram",
    "styles": [
      "fab"
    ],
    "membership": {
      "free": [
        "fab"
      ],
      "pro": [
        "fab"
      ]
    }
  },
  {
    "unicode": "f5f9",
    "label": "Inhaler",
    "name": "inhaler",
    "styles": [
      "fas",
      "far",
      "fal"
    ],
    "membership": {
      "free": [],
      "pro": [
        "fas",
        "far",
        "fal"
      ]
    }
  },
  {
    "unicode": "f30f",
    "label": "Info Square",
    "name": "info-square",
    "styles": [
      "fas",
      "far",
      "fal"
    ],
    "membership": {
      "free": [],
      "pro": [
        "fas",
        "far",
        "fal"
      ]
    }
  },
  {
    "unicode": "f05a",
    "label": "Info Circle",
    "name": "info-circle",
    "styles": [
      "fas",
      "far",
      "fal"
    ],
    "membership": {
      "free": [
        "fas"
      ],
      "pro": [
        "fas",
        "far",
        "fal"
      ]
    }
  },
  {
    "unicode": "f129",
    "label": "Info",
    "name": "info",
    "styles": [
      "fas",
      "far",
      "fal"
    ],
    "membership": {
      "free": [
        "fas"
      ],
      "pro": [
        "fas",
        "far",
        "fal"
      ]
    }
  },
  {
    "unicode": "f534",
    "label": "Infinity",
    "name": "infinity",
    "styles": [
      "fas",
      "far",
      "fal"
    ],
    "membership": {
      "free": [
        "fas"
      ],
      "pro": [
        "fas",
        "far",
        "fal"
      ]
    }
  },
  {
    "unicode": "f3b3",
    "label": "Alternate Industry",
    "name": "industry-alt",
    "styles": [
      "fas",
      "far",
      "fal"
    ],
    "membership": {
      "free": [],
      "pro": [
        "fas",
        "far",
        "fal"
      ]
    }
  },
  {
    "unicode": "f275",
    "label": "Industry",
    "name": "industry",
    "styles": [
      "fas",
      "far",
      "fal"
    ],
    "membership": {
      "free": [
        "fas"
      ],
      "pro": [
        "fas",
        "far",
        "fal"
      ]
    }
  },
  {
    "unicode": "f03c",
    "label": "Indent",
    "name": "indent",
    "styles": [
      "fas",
      "far",
      "fal"
    ],
    "membership": {
      "free": [
        "fas"
      ],
      "pro": [
        "fas",
        "far",
        "fal"
      ]
    }
  },
  {
    "unicode": "f311",
    "label": "Inbox Out",
    "name": "inbox-out",
    "styles": [
      "fas",
      "far",
      "fal"
    ],
    "membership": {
      "free": [],
      "pro": [
        "fas",
        "far",
        "fal"
      ]
    }
  },
  {
    "unicode": "f310",
    "label": "Inbox In",
    "name": "inbox-in",
    "styles": [
      "fas",
      "far",
      "fal"
    ],
    "membership": {
      "free": [],
      "pro": [
        "fas",
        "far",
        "fal"
      ]
    }
  },
  {
    "unicode": "f01c",
    "label": "inbox",
    "name": "inbox",
    "styles": [
      "fas",
      "far",
      "fal"
    ],
    "membership": {
      "free": [
        "fas"
      ],
      "pro": [
        "fas",
        "far",
        "fal"
      ]
    }
  },
  {
    "unicode": "f2d8",
    "label": "IMDB",
    "name": "imdb",
    "styles": [
      "fab"
    ],
    "membership": {
      "free": [
        "fab"
      ],
      "pro": [
        "fab"
      ]
    }
  },
  {
    "unicode": "f302",
    "label": "Images",
    "name": "images",
    "styles": [
      "fas",
      "far",
      "fal"
    ],
    "membership": {
      "free": [
        "fas",
        "far"
      ],
      "pro": [
        "fas",
        "far",
        "fal"
      ]
    }
  },
  {
    "unicode": "f03e",
    "label": "Image",
    "name": "image",
    "styles": [
      "fas",
      "far",
      "fal"
    ],
    "membership": {
      "free": [
        "fas",
        "far"
      ],
      "pro": [
        "fas",
        "far",
        "fal"
      ]
    }
  },
  {
    "unicode": "f47f",
    "label": "Alternate Identification Card",
    "name": "id-card-alt",
    "styles": [
      "fas",
      "far",
      "fal"
    ],
    "membership": {
      "free": [
        "fas"
      ],
      "pro": [
        "fas",
        "far",
        "fal"
      ]
    }
  },
  {
    "unicode": "f2c2",
    "label": "Identification Card",
    "name": "id-card",
    "styles": [
      "fas",
      "far",
      "fal"
    ],
    "membership": {
      "free": [
        "fas",
        "far"
      ],
      "pro": [
        "fas",
        "far",
        "fal"
      ]
    }
  },
  {
    "unicode": "f2c1",
    "label": "Identification Badge",
    "name": "id-badge",
    "styles": [
      "fas",
      "far",
      "fal"
    ],
    "membership": {
      "free": [
        "fas",
        "far"
      ],
      "pro": [
        "fas",
        "far",
        "fal"
      ]
    }
  },
  {
    "unicode": "f246",
    "label": "I Beam Cursor",
    "name": "i-cursor",
    "styles": [
      "fas",
      "far",
      "fal"
    ],
    "membership": {
      "free": [
        "fas"
      ],
      "pro": [
        "fas",
        "far",
        "fal"
      ]
    }
  },
  {
    "unicode": "f3b2",
    "label": "HubSpot",
    "name": "hubspot",
    "styles": [
      "fab"
    ],
    "membership": {
      "free": [
        "fab"
      ],
      "pro": [
        "fab"
      ]
    }
  },
  {
    "unicode": "f13b",
    "label": "HTML 5 Logo",
    "name": "html5",
    "styles": [
      "fab"
    ],
    "membership": {
      "free": [
        "fab"
      ],
      "pro": [
        "fab"
      ]
    }
  },
  {
    "unicode": "f27c",
    "label": "Houzz",
    "name": "houzz",
    "styles": [
      "fab"
    ],
    "membership": {
      "free": [
        "fab"
      ],
      "pro": [
        "fab"
      ]
    }
  },
  {
    "unicode": "f251",
    "label": "Hourglass Start",
    "name": "hourglass-start",
    "styles": [
      "fas",
      "far",
      "fal"
    ],
    "membership": {
      "free": [
        "fas"
      ],
      "pro": [
        "fas",
        "far",
        "fal"
      ]
    }
  },
  {
    "unicode": "f252",
    "label": "Hourglass Half",
    "name": "hourglass-half",
    "styles": [
      "fas",
      "far",
      "fal"
    ],
    "membership": {
      "free": [
        "fas"
      ],
      "pro": [
        "fas",
        "far",
        "fal"
      ]
    }
  },
  {
    "unicode": "f253",
    "label": "Hourglass End",
    "name": "hourglass-end",
    "styles": [
      "fas",
      "far",
      "fal"
    ],
    "membership": {
      "free": [
        "fas"
      ],
      "pro": [
        "fas",
        "far",
        "fal"
      ]
    }
  },
  {
    "unicode": "f254",
    "label": "Hourglass",
    "name": "hourglass",
    "styles": [
      "fas",
      "far",
      "fal"
    ],
    "membership": {
      "free": [
        "fas",
        "far"
      ],
      "pro": [
        "fas",
        "far",
        "fal"
      ]
    }
  },
  {
    "unicode": "f3b1",
    "label": "Hotjar",
    "name": "hotjar",
    "styles": [
      "fab"
    ],
    "membership": {
      "free": [
        "fab"
      ],
      "pro": [
        "fab"
      ]
    }
  },
  {
    "unicode": "f594",
    "label": "Hotel",
    "name": "hotel",
    "styles": [
      "fas",
      "far",
      "fal"
    ],
    "membership": {
      "free": [
        "fas"
      ],
      "pro": [
        "fas",
        "far",
        "fal"
      ]
    }
  },
  {
    "unicode": "f593",
    "label": "Hot Tub",
    "name": "hot-tub",
    "styles": [
      "fas",
      "far",
      "fal"
    ],
    "membership": {
      "free": [
        "fas"
      ],
      "pro": [
        "fas",
        "far",
        "fal"
      ]
    }
  },
  {
    "unicode": "f47e",
    "label": "Hospital Symbol",
    "name": "hospital-symbol",
    "styles": [
      "fas",
      "far",
      "fal"
    ],
    "membership": {
      "free": [
        "fas"
      ],
      "pro": [
        "fas",
        "far",
        "fal"
      ]
    }
  },
  {
    "unicode": "f47d",
    "label": "Alternate Hospital",
    "name": "hospital-alt",
    "styles": [
      "fas",
      "far",
      "fal"
    ],
    "membership": {
      "free": [
        "fas"
      ],
      "pro": [
        "fas",
        "far",
        "fal"
      ]
    }
  },
  {
    "unicode": "f0f8",
    "label": "hospital",
    "name": "hospital",
    "styles": [
      "fas",
      "far",
      "fal"
    ],
    "membership": {
      "free": [
        "fas",
        "far"
      ],
      "pro": [
        "fas",
        "far",
        "fal"
      ]
    }
  },
  {
    "unicode": "f592",
    "label": "Hornbill",
    "name": "hornbill",
    "styles": [
      "fab"
    ],
    "membership": {
      "free": [
        "fab"
      ],
      "pro": [
        "fab"
      ]
    }
  },
  {
    "unicode": "f427",
    "label": "Hooli",
    "name": "hooli",
    "styles": [
      "fab"
    ],
    "membership": {
      "free": [
        "fab"
      ],
      "pro": [
        "fab"
      ]
    }
  },
  {
    "unicode": "f4c9",
    "label": "Home Heart",
    "name": "home-heart",
    "styles": [
      "fas",
      "far",
      "fal"
    ],
    "membership": {
      "free": [],
      "pro": [
        "fas",
        "far",
        "fal"
      ]
    }
  },
  {
    "unicode": "f015",
    "label": "home",
    "name": "home",
    "styles": [
      "fas",
      "far",
      "fal"
    ],
    "membership": {
      "free": [
        "fas"
      ],
      "pro": [
        "fas",
        "far",
        "fal"
      ]
    }
  },
  {
    "unicode": "f454",
    "label": "Hockey Sticks",
    "name": "hockey-sticks",
    "styles": [
      "fas",
      "far",
      "fal"
    ],
    "membership": {
      "free": [],
      "pro": [
        "fas",
        "far",
        "fal"
      ]
    }
  },
  {
    "unicode": "f453",
    "label": "Hockey Puck",
    "name": "hockey-puck",
    "styles": [
      "fas",
      "far",
      "fal"
    ],
    "membership": {
      "free": [
        "fas"
      ],
      "pro": [
        "fas",
        "far",
        "fal"
      ]
    }
  },
  {
    "unicode": "f1da",
    "label": "History",
    "name": "history",
    "styles": [
      "fas",
      "far",
      "fal"
    ],
    "membership": {
      "free": [
        "fas"
      ],
      "pro": [
        "fas",
        "far",
        "fal"
      ]
    }
  },
  {
    "unicode": "f3b0",
    "label": "HireAHelper",
    "name": "hire-a-helper",
    "styles": [
      "fab"
    ],
    "membership": {
      "free": [
        "fab"
      ],
      "pro": [
        "fab"
      ]
    }
  },
  {
    "unicode": "f452",
    "label": "Hips",
    "name": "hips",
    "styles": [
      "fab"
    ],
    "membership": {
      "free": [
        "fab"
      ],
      "pro": [
        "fab"
      ]
    }
  },
  {
    "unicode": "f591",
    "label": "Highlighter",
    "name": "highlighter",
    "styles": [
      "fas",
      "far",
      "fal"
    ],
    "membership": {
      "free": [
        "fas"
      ],
      "pro": [
        "fas",
        "far",
        "fal"
      ]
    }
  },
  {
    "unicode": "f312",
    "label": "Hexagon",
    "name": "hexagon",
    "styles": [
      "fas",
      "far",
      "fal"
    ],
    "membership": {
      "free": [],
      "pro": [
        "fas",
        "far",
        "fal"
      ]
    }
  },
  {
    "unicode": "f533",
    "label": "Helicopter",
    "name": "helicopter",
    "styles": [
      "fas",
      "far",
      "fal"
    ],
    "membership": {
      "free": [
        "fas"
      ],
      "pro": [
        "fas",
        "far",
        "fal"
      ]
    }
  },
  {
    "unicode": "f21e",
    "label": "Heartbeat",
    "name": "heartbeat",
    "styles": [
      "fas",
      "far",
      "fal"
    ],
    "membership": {
      "free": [
        "fas"
      ],
      "pro": [
        "fas",
        "far",
        "fal"
      ]
    }
  },
  {
    "unicode": "f4c8",
    "label": "Heart Square",
    "name": "heart-square",
    "styles": [
      "fas",
      "far",
      "fal"
    ],
    "membership": {
      "free": [],
      "pro": [
        "fas",
        "far",
        "fal"
      ]
    }
  },
  {
    "unicode": "f5f8",
    "label": "Heart Rate",
    "name": "heart-rate",
    "styles": [
      "fas",
      "far",
      "fal"
    ],
    "membership": {
      "free": [],
      "pro": [
        "fas",
        "far",
        "fal"
      ]
    }
  },
  {
    "unicode": "f4c7",
    "label": "Heart Circle",
    "name": "heart-circle",
    "styles": [
      "fas",
      "far",
      "fal"
    ],
    "membership": {
      "free": [],
      "pro": [
        "fas",
        "far",
        "fal"
      ]
    }
  },
  {
    "unicode": "f004",
    "label": "Heart",
    "name": "heart",
    "styles": [
      "fas",
      "far",
      "fal"
    ],
    "membership": {
      "free": [
        "fas",
        "far"
      ],
      "pro": [
        "fas",
        "far",
        "fal"
      ]
    }
  },
  {
    "unicode": "f590",
    "label": "Headset",
    "name": "headset",
    "styles": [
      "fas",
      "far",
      "fal"
    ],
    "membership": {
      "free": [
        "fas"
      ],
      "pro": [
        "fas",
        "far",
        "fal"
      ]
    }
  },
  {
    "unicode": "f58f",
    "label": "Headphones Alt",
    "name": "headphones-alt",
    "styles": [
      "fas",
      "far",
      "fal"
    ],
    "membership": {
      "free": [
        "fas"
      ],
      "pro": [
        "fas",
        "far",
        "fal"
      ]
    }
  },
  {
    "unicode": "f025",
    "label": "headphones",
    "name": "headphones",
    "styles": [
      "fas",
      "far",
      "fal"
    ],
    "membership": {
      "free": [
        "fas"
      ],
      "pro": [
        "fas",
        "far",
        "fal"
      ]
    }
  },
  {
    "unicode": "f1dc",
    "label": "heading",
    "name": "heading",
    "styles": [
      "fas",
      "far",
      "fal"
    ],
    "membership": {
      "free": [
        "fas"
      ],
      "pro": [
        "fas",
        "far",
        "fal"
      ]
    }
  },
  {
    "unicode": "f0a0",
    "label": "HDD",
    "name": "hdd",
    "styles": [
      "fas",
      "far",
      "fal"
    ],
    "membership": {
      "free": [
        "fas",
        "far"
      ],
      "pro": [
        "fas",
        "far",
        "fal"
      ]
    }
  },
  {
    "unicode": "f292",
    "label": "Hashtag",
    "name": "hashtag",
    "styles": [
      "fas",
      "far",
      "fal"
    ],
    "membership": {
      "free": [
        "fas"
      ],
      "pro": [
        "fas",
        "far",
        "fal"
      ]
    }
  },
  {
    "unicode": "f4c6",
    "label": "Alternate Handshake",
    "name": "handshake-alt",
    "styles": [
      "fas",
      "far",
      "fal"
    ],
    "membership": {
      "free": [],
      "pro": [
        "fas",
        "far",
        "fal"
      ]
    }
  },
  {
    "unicode": "f2b5",
    "label": "Handshake",
    "name": "handshake",
    "styles": [
      "fas",
      "far",
      "fal"
    ],
    "membership": {
      "free": [
        "fas",
        "far"
      ],
      "pro": [
        "fas",
        "far",
        "fal"
      ]
    }
  },
  {
    "unicode": "f4c5",
    "label": "Hands with US Dollar",
    "name": "hands-usd",
    "styles": [
      "fas",
      "far",
      "fal"
    ],
    "membership": {
      "free": [],
      "pro": [
        "fas",
        "far",
        "fal"
      ]
    }
  },
  {
    "unicode": "f4c4",
    "label": "Helping Hands",
    "name": "hands-helping",
    "styles": [
      "fas",
      "far",
      "fal"
    ],
    "membership": {
      "free": [
        "fas"
      ],
      "pro": [
        "fas",
        "far",
        "fal"
      ]
    }
  },
  {
    "unicode": "f4c3",
    "label": "Hands Heart",
    "name": "hands-heart",
    "styles": [
      "fas",
      "far",
      "fal"
    ],
    "membership": {
      "free": [],
      "pro": [
        "fas",
        "far",
        "fal"
      ]
    }
  },
  {
    "unicode": "f4c2",
    "label": "Hands",
    "name": "hands",
    "styles": [
      "fas",
      "far",
      "fal"
    ],
    "membership": {
      "free": [
        "fas"
      ],
      "pro": [
        "fas",
        "far",
        "fal"
      ]
    }
  },
  {
    "unicode": "f259",
    "label": "Spock (Hand)",
    "name": "hand-spock",
    "styles": [
      "fas",
      "far",
      "fal"
    ],
    "membership": {
      "free": [
        "fas",
        "far"
      ],
      "pro": [
        "fas",
        "far",
        "fal"
      ]
    }
  },
  {
    "unicode": "f257",
    "label": "Scissors (Hand)",
    "name": "hand-scissors",
    "styles": [
      "fas",
      "far",
      "fal"
    ],
    "membership": {
      "free": [
        "fas",
        "far"
      ],
      "pro": [
        "fas",
        "far",
        "fal"
      ]
    }
  },
  {
    "unicode": "f255",
    "label": "Rock (Hand)",
    "name": "hand-rock",
    "styles": [
      "fas",
      "far",
      "fal"
    ],
    "membership": {
      "free": [
        "fas",
        "far"
      ],
      "pro": [
        "fas",
        "far",
        "fal"
      ]
    }
  },
  {
    "unicode": "f47c",
    "label": "Hand Receiving",
    "name": "hand-receiving",
    "styles": [
      "fas",
      "far",
      "fal"
    ],
    "membership": {
      "free": [],
      "pro": [
        "fas",
        "far",
        "fal"
      ]
    }
  },
  {
    "unicode": "f25a",
    "label": "Pointer (Hand)",
    "name": "hand-pointer",
    "styles": [
      "fas",
      "far",
      "fal"
    ],
    "membership": {
      "free": [
        "fas",
        "far"
      ],
      "pro": [
        "fas",
        "far",
        "fal"
      ]
    }
  },
  {
    "unicode": "f0a6",
    "label": "Hand Pointing Up",
    "name": "hand-point-up",
    "styles": [
      "fas",
      "far",
      "fal"
    ],
    "membership": {
      "free": [
        "fas",
        "far"
      ],
      "pro": [
        "fas",
        "far",
        "fal"
      ]
    }
  },
  {
    "unicode": "f0a4",
    "label": "Hand Pointing Right",
    "name": "hand-point-right",
    "styles": [
      "fas",
      "far",
      "fal"
    ],
    "membership": {
      "free": [
        "fas",
        "far"
      ],
      "pro": [
        "fas",
        "far",
        "fal"
      ]
    }
  },
  {
    "unicode": "f0a5",
    "label": "Hand Pointing Left",
    "name": "hand-point-left",
    "styles": [
      "fas",
      "far",
      "fal"
    ],
    "membership": {
      "free": [
        "fas",
        "far"
      ],
      "pro": [
        "fas",
        "far",
        "fal"
      ]
    }
  },
  {
    "unicode": "f0a7",
    "label": "Hand Pointing Down",
    "name": "hand-point-down",
    "styles": [
      "fas",
      "far",
      "fal"
    ],
    "membership": {
      "free": [
        "fas",
        "far"
      ],
      "pro": [
        "fas",
        "far",
        "fal"
      ]
    }
  },
  {
    "unicode": "f25b",
    "label": "Peace (Hand)",
    "name": "hand-peace",
    "styles": [
      "fas",
      "far",
      "fal"
    ],
    "membership": {
      "free": [
        "fas",
        "far"
      ],
      "pro": [
        "fas",
        "far",
        "fal"
      ]
    }
  },
  {
    "unicode": "f256",
    "label": "Paper (Hand)",
    "name": "hand-paper",
    "styles": [
      "fas",
      "far",
      "fal"
    ],
    "membership": {
      "free": [
        "fas",
        "far"
      ],
      "pro": [
        "fas",
        "far",
        "fal"
      ]
    }
  },
  {
    "unicode": "f258",
    "label": "Lizard (Hand)",
    "name": "hand-lizard",
    "styles": [
      "fas",
      "far",
      "fal"
    ],
    "membership": {
      "free": [
        "fas",
        "far"
      ],
      "pro": [
        "fas",
        "far",
        "fal"
      ]
    }
  },
  {
    "unicode": "f4c1",
    "label": "Hand Holding Water",
    "name": "hand-holding-water",
    "styles": [
      "fas",
      "far",
      "fal"
    ],
    "membership": {
      "free": [],
      "pro": [
        "fas",
        "far",
        "fal"
      ]
    }
  },
  {
    "unicode": "f4c0",
    "label": "Hand Holding US Dollar",
    "name": "hand-holding-usd",
    "styles": [
      "fas",
      "far",
      "fal"
    ],
    "membership": {
      "free": [
        "fas"
      ],
      "pro": [
        "fas",
        "far",
        "fal"
      ]
    }
  },
  {
    "unicode": "f4bf",
    "label": "Hand Holding Seedling",
    "name": "hand-holding-seedling",
    "styles": [
      "fas",
      "far",
      "fal"
    ],
    "membership": {
      "free": [],
      "pro": [
        "fas",
        "far",
        "fal"
      ]
    }
  },
  {
    "unicode": "f4be",
    "label": "Hand Holding Heart",
    "name": "hand-holding-heart",
    "styles": [
      "fas",
      "far",
      "fal"
    ],
    "membership": {
      "free": [
        "fas"
      ],
      "pro": [
        "fas",
        "far",
        "fal"
      ]
    }
  },
  {
    "unicode": "f47b",
    "label": "Hand Holding Box",
    "name": "hand-holding-box",
    "styles": [
      "fas",
      "far",
      "fal"
    ],
    "membership": {
      "free": [],
      "pro": [
        "fas",
        "far",
        "fal"
      ]
    }
  },
  {
    "unicode": "f4bd",
    "label": "Hand Holding",
    "name": "hand-holding",
    "styles": [
      "fas",
      "far",
      "fal"
    ],
    "membership": {
      "free": [
        "fas"
      ],
      "pro": [
        "fas",
        "far",
        "fal"
      ]
    }
  },
  {
    "unicode": "f4bc",
    "label": "Hand with Heart",
    "name": "hand-heart",
    "styles": [
      "fas",
      "far",
      "fal"
    ],
    "membership": {
      "free": [],
      "pro": [
        "fas",
        "far",
        "fal"
      ]
    }
  },
  {
    "unicode": "f5f7",
    "label": "Hackerrank",
    "name": "hackerrank",
    "styles": [
      "fab"
    ],
    "membership": {
      "free": [
        "fab"
      ],
      "pro": [
        "fab"
      ]
    }
  },
  {
    "unicode": "f3af",
    "label": "Hacker News Square",
    "name": "hacker-news-square",
    "styles": [
      "fab"
    ],
    "membership": {
      "free": [
        "fab"
      ],
      "pro": [
        "fab"
      ]
    }
  },
  {
    "unicode": "f1d4",
    "label": "Hacker News",
    "name": "hacker-news",
    "styles": [
      "fab"
    ],
    "membership": {
      "free": [
        "fab"
      ],
      "pro": [
        "fab"
      ]
    }
  },
  {
    "unicode": "f315",
    "label": "H3 Heading",
    "name": "h3",
    "styles": [
      "fas",
      "far",
      "fal"
    ],
    "membership": {
      "free": [],
      "pro": [
        "fas",
        "far",
        "fal"
      ]
    }
  },
  {
    "unicode": "f314",
    "label": "H2 Heading",
    "name": "h2",
    "styles": [
      "fas",
      "far",
      "fal"
    ],
    "membership": {
      "free": [],
      "pro": [
        "fas",
        "far",
        "fal"
      ]
    }
  },
  {
    "unicode": "f313",
    "label": "H1 Heading",
    "name": "h1",
    "styles": [
      "fas",
      "far",
      "fal"
    ],
    "membership": {
      "free": [],
      "pro": [
        "fas",
        "far",
        "fal"
      ]
    }
  },
  {
    "unicode": "f0fd",
    "label": "H Square",
    "name": "h-square",
    "styles": [
      "fas",
      "far",
      "fal"
    ],
    "membership": {
      "free": [
        "fas"
      ],
      "pro": [
        "fas",
        "far",
        "fal"
      ]
    }
  },
  {
    "unicode": "f3ae",
    "label": "Gulp",
    "name": "gulp",
    "styles": [
      "fab"
    ],
    "membership": {
      "free": [
        "fab"
      ],
      "pro": [
        "fab"
      ]
    }
  },
  {
    "unicode": "f3ad",
    "label": "Grunt",
    "name": "grunt",
    "styles": [
      "fab"
    ],
    "membership": {
      "free": [
        "fab"
      ],
      "pro": [
        "fab"
      ]
    }
  },
  {
    "unicode": "f3ac",
    "label": "Gripfire, Inc.",
    "name": "gripfire",
    "styles": [
      "fab"
    ],
    "membership": {
      "free": [
        "fab"
      ],
      "pro": [
        "fab"
      ]
    }
  },
  {
    "unicode": "f58e",
    "label": "Grip Vertical",
    "name": "grip-vertical",
    "styles": [
      "fas",
      "far",
      "fal"
    ],
    "membership": {
      "free": [
        "fas"
      ],
      "pro": [
        "fas",
        "far",
        "fal"
      ]
    }
  },
  {
    "unicode": "f58d",
    "label": "Grip Horizontal",
    "name": "grip-horizontal",
    "styles": [
      "fas",
      "far",
      "fal"
    ],
    "membership": {
      "free": [
        "fas"
      ],
      "pro": [
        "fas",
        "far",
        "fal"
      ]
    }
  },
  {
    "unicode": "f58c",
    "label": "Grinning Winking Face",
    "name": "grin-wink",
    "styles": [
      "fas",
      "far",
      "fal"
    ],
    "membership": {
      "free": [
        "fas",
        "far"
      ],
      "pro": [
        "fas",
        "far",
        "fal"
      ]
    }
  },
  {
    "unicode": "f58b",
    "label": "Winking Face With Tongue",
    "name": "grin-tongue-wink",
    "styles": [
      "fas",
      "far",
      "fal"
    ],
    "membership": {
      "free": [
        "fas",
        "far"
      ],
      "pro": [
        "fas",
        "far",
        "fal"
      ]
    }
  },
  {
    "unicode": "f58a",
    "label": "Squinting Face With Tongue",
    "name": "grin-tongue-squint",
    "styles": [
      "fas",
      "far",
      "fal"
    ],
    "membership": {
      "free": [
        "fas",
        "far"
      ],
      "pro": [
        "fas",
        "far",
        "fal"
      ]
    }
  },
  {
    "unicode": "f589",
    "label": "Face With Tongue",
    "name": "grin-tongue",
    "styles": [
      "fas",
      "far",
      "fal"
    ],
    "membership": {
      "free": [
        "fas",
        "far"
      ],
      "pro": [
        "fas",
        "far",
        "fal"
      ]
    }
  },
  {
    "unicode": "f588",
    "label": "Face With Tears of Joy",
    "name": "grin-tears",
    "styles": [
      "fas",
      "far",
      "fal"
    ],
    "membership": {
      "free": [
        "fas",
        "far"
      ],
      "pro": [
        "fas",
        "far",
        "fal"
      ]
    }
  },
  {
    "unicode": "f587",
    "label": "Star-Struck",
    "name": "grin-stars",
    "styles": [
      "fas",
      "far",
      "fal"
    ],
    "membership": {
      "free": [
        "fas",
        "far"
      ],
      "pro": [
        "fas",
        "far",
        "fal"
      ]
    }
  },
  {
    "unicode": "f586",
    "label": "Rolling on the Floor Laughing",
    "name": "grin-squint-tears",
    "styles": [
      "fas",
      "far",
      "fal"
    ],
    "membership": {
      "free": [
        "fas",
        "far"
      ],
      "pro": [
        "fas",
        "far",
        "fal"
      ]
    }
  },
  {
    "unicode": "f585",
    "label": "Grinning Squinting Face",
    "name": "grin-squint",
    "styles": [
      "fas",
      "far",
      "fal"
    ],
    "membership": {
      "free": [
        "fas",
        "far"
      ],
      "pro": [
        "fas",
        "far",
        "fal"
      ]
    }
  },
  {
    "unicode": "f584",
    "label": "Smiling Face With Heart-Eyes",
    "name": "grin-hearts",
    "styles": [
      "fas",
      "far",
      "fal"
    ],
    "membership": {
      "free": [
        "fas",
        "far"
      ],
      "pro": [
        "fas",
        "far",
        "fal"
      ]
    }
  },
  {
    "unicode": "f583",
    "label": "Grinning Face With Sweat",
    "name": "grin-beam-sweat",
    "styles": [
      "fas",
      "far",
      "fal"
    ],
    "membership": {
      "free": [
        "fas",
        "far"
      ],
      "pro": [
        "fas",
        "far",
        "fal"
      ]
    }
  },
  {
    "unicode": "f582",
    "label": "Grinning Face With Smiling Eyes",
    "name": "grin-beam",
    "styles": [
      "fas",
      "far",
      "fal"
    ],
    "membership": {
      "free": [
        "fas",
        "far"
      ],
      "pro": [
        "fas",
        "far",
        "fal"
      ]
    }
  },
  {
    "unicode": "f581",
    "label": "Alternate Grinning Face",
    "name": "grin-alt",
    "styles": [
      "fas",
      "far",
      "fal"
    ],
    "membership": {
      "free": [
        "fas",
        "far"
      ],
      "pro": [
        "fas",
        "far",
        "fal"
      ]
    }
  },
  {
    "unicode": "f580",
    "label": "Grinning Face",
    "name": "grin",
    "styles": [
      "fas",
      "far",
      "fal"
    ],
    "membership": {
      "free": [
        "fas",
        "far"
      ],
      "pro": [
        "fas",
        "far",
        "fal"
      ]
    }
  },
  {
    "unicode": "f57f",
    "label": "Grimacing Face",
    "name": "grimace",
    "styles": [
      "fas",
      "far",
      "fal"
    ],
    "membership": {
      "free": [
        "fas",
        "far"
      ],
      "pro": [
        "fas",
        "far",
        "fal"
      ]
    }
  },
  {
    "unicode": "f532",
    "label": "Greater Than Equal To",
    "name": "greater-than-equal",
    "styles": [
      "fas",
      "far",
      "fal"
    ],
    "membership": {
      "free": [
        "fas"
      ],
      "pro": [
        "fas",
        "far",
        "fal"
      ]
    }
  },
  {
    "unicode": "f531",
    "label": "Greater Than",
    "name": "greater-than",
    "styles": [
      "fas",
      "far",
      "fal"
    ],
    "membership": {
      "free": [
        "fas"
      ],
      "pro": [
        "fas",
        "far",
        "fal"
      ]
    }
  },
  {
    "unicode": "f2d6",
    "label": "Grav",
    "name": "grav",
    "styles": [
      "fab"
    ],
    "membership": {
      "free": [
        "fab"
      ],
      "pro": [
        "fab"
      ]
    }
  },
  {
    "unicode": "f184",
    "label": "Gratipay (Gittip)",
    "name": "gratipay",
    "styles": [
      "fab"
    ],
    "membership": {
      "free": [
        "fab"
      ],
      "pro": [
        "fab"
      ]
    }
  },
  {
    "unicode": "f19d",
    "label": "Graduation Cap",
    "name": "graduation-cap",
    "styles": [
      "fas",
      "far",
      "fal"
    ],
    "membership": {
      "free": [
        "fas"
      ],
      "pro": [
        "fas",
        "far",
        "fal"
      ]
    }
  },
  {
    "unicode": "f1ee",
    "label": "Google Wallet",
    "name": "google-wallet",
    "styles": [
      "fab"
    ],
    "membership": {
      "free": [
        "fab"
      ],
      "pro": [
        "fab"
      ]
    }
  },
  {
    "unicode": "f0d4",
    "label": "Google Plus Square",
    "name": "google-plus-square",
    "styles": [
      "fab"
    ],
    "membership": {
      "free": [
        "fab"
      ],
      "pro": [
        "fab"
      ]
    }
  },
  {
    "unicode": "f0d5",
    "label": "Google Plus G",
    "name": "google-plus-g",
    "styles": [
      "fab"
    ],
    "membership": {
      "free": [
        "fab"
      ],
      "pro": [
        "fab"
      ]
    }
  },
  {
    "unicode": "f2b3",
    "label": "Google Plus",
    "name": "google-plus",
    "styles": [
      "fab"
    ],
    "membership": {
      "free": [
        "fab"
      ],
      "pro": [
        "fab"
      ]
    }
  },
  {
    "unicode": "f3ab",
    "label": "Google Play",
    "name": "google-play",
    "styles": [
      "fab"
    ],
    "membership": {
      "free": [
        "fab"
      ],
      "pro": [
        "fab"
      ]
    }
  },
  {
    "unicode": "f3aa",
    "label": "Google Drive",
    "name": "google-drive",
    "styles": [
      "fab"
    ],
    "membership": {
      "free": [
        "fab"
      ],
      "pro": [
        "fab"
      ]
    }
  },
  {
    "unicode": "f1a0",
    "label": "Google Logo",
    "name": "google",
    "styles": [
      "fab"
    ],
    "membership": {
      "free": [
        "fab"
      ],
      "pro": [
        "fab"
      ]
    }
  },
  {
    "unicode": "f3a9",
    "label": "Goodreads G",
    "name": "goodreads-g",
    "styles": [
      "fab"
    ],
    "membership": {
      "free": [
        "fab"
      ],
      "pro": [
        "fab"
      ]
    }
  },
  {
    "unicode": "f3a8",
    "label": "Goodreads",
    "name": "goodreads",
    "styles": [
      "fab"
    ],
    "membership": {
      "free": [
        "fab"
      ],
      "pro": [
        "fab"
      ]
    }
  },
  {
    "unicode": "f451",
    "label": "Golf Club",
    "name": "golf-club",
    "styles": [
      "fas",
      "far",
      "fal"
    ],
    "membership": {
      "free": [],
      "pro": [
        "fas",
        "far",
        "fal"
      ]
    }
  },
  {
    "unicode": "f450",
    "label": "Golf Ball",
    "name": "golf-ball",
    "styles": [
      "fas",
      "far",
      "fal"
    ],
    "membership": {
      "free": [
        "fas"
      ],
      "pro": [
        "fas",
        "far",
        "fal"
      ]
    }
  },
  {
    "unicode": "f3a7",
    "label": "Gofore",
    "name": "gofore",
    "styles": [
      "fab"
    ],
    "membership": {
      "free": [
        "fab"
      ],
      "pro": [
        "fab"
      ]
    }
  },
  {
    "unicode": "f5f6",
    "label": "Globe Stand",
    "name": "globe-stand",
    "styles": [
      "fas",
      "far",
      "fal"
    ],
    "membership": {
      "free": [],
      "pro": [
        "fas",
        "far",
        "fal"
      ]
    }
  },
  {
    "unicode": "f57e",
    "label": "Globe with Asia shown",
    "name": "globe-asia",
    "styles": [
      "fas",
      "far",
      "fal"
    ],
    "membership": {
      "free": [
        "fas"
      ],
      "pro": [
        "fas",
        "far",
        "fal"
      ]
    }
  },
  {
    "unicode": "f57d",
    "label": "Globe with Americas shown",
    "name": "globe-americas",
    "styles": [
      "fas",
      "far",
      "fal"
    ],
    "membership": {
      "free": [
        "fas"
      ],
      "pro": [
        "fas",
        "far",
        "fal"
      ]
    }
  },
  {
    "unicode": "f57c",
    "label": "Globe with Africa shown",
    "name": "globe-africa",
    "styles": [
      "fas",
      "far",
      "fal"
    ],
    "membership": {
      "free": [
        "fas"
      ],
      "pro": [
        "fas",
        "far",
        "fal"
      ]
    }
  },
  {
    "unicode": "f0ac",
    "label": "Globe",
    "name": "globe",
    "styles": [
      "fas",
      "far",
      "fal"
    ],
    "membership": {
      "free": [
        "fas"
      ],
      "pro": [
        "fas",
        "far",
        "fal"
      ]
    }
  },
  {
    "unicode": "f2a6",
    "label": "Glide G",
    "name": "glide-g",
    "styles": [
      "fab"
    ],
    "membership": {
      "free": [
        "fab"
      ],
      "pro": [
        "fab"
      ]
    }
  },
  {
    "unicode": "f2a5",
    "label": "Glide",
    "name": "glide",
    "styles": [
      "fab"
    ],
    "membership": {
      "free": [
        "fab"
      ],
      "pro": [
        "fab"
      ]
    }
  },
  {
    "unicode": "f5f5",
    "label": "Glasses Alt",
    "name": "glasses-alt",
    "styles": [
      "fas",
      "far",
      "fal"
    ],
    "membership": {
      "free": [],
      "pro": [
        "fas",
        "far",
        "fal"
      ]
    }
  },
  {
    "unicode": "f530",
    "label": "Glasses",
    "name": "glasses",
    "styles": [
      "fas",
      "far",
      "fal"
    ],
    "membership": {
      "free": [
        "fas"
      ],
      "pro": [
        "fas",
        "far",
        "fal"
      ]
    }
  },
  {
    "unicode": "f57b",
    "label": "Glass Martini-alt",
    "name": "glass-martini-alt",
    "styles": [
      "fas",
      "far",
      "fal"
    ],
    "membership": {
      "free": [
        "fas"
      ],
      "pro": [
        "fas",
        "far",
        "fal"
      ]
    }
  },
  {
    "unicode": "f000",
    "label": "Martini Glass",
    "name": "glass-martini",
    "styles": [
      "fas",
      "far",
      "fal"
    ],
    "membership": {
      "free": [
        "fas"
      ],
      "pro": [
        "fas",
        "far",
        "fal"
      ]
    }
  },
  {
    "unicode": "f426",
    "label": "Gitter",
    "name": "gitter",
    "styles": [
      "fab"
    ],
    "membership": {
      "free": [
        "fab"
      ],
      "pro": [
        "fab"
      ]
    }
  },
  {
    "unicode": "f296",
    "label": "GitLab",
    "name": "gitlab",
    "styles": [
      "fab"
    ],
    "membership": {
      "free": [
        "fab"
      ],
      "pro": [
        "fab"
      ]
    }
  },
  {
    "unicode": "f3a6",
    "label": "GitKraken",
    "name": "gitkraken",
    "styles": [
      "fab"
    ],
    "membership": {
      "free": [
        "fab"
      ],
      "pro": [
        "fab"
      ]
    }
  },
  {
    "unicode": "f092",
    "label": "GitHub Square",
    "name": "github-square",
    "styles": [
      "fab"
    ],
    "membership": {
      "free": [
        "fab"
      ],
      "pro": [
        "fab"
      ]
    }
  },
  {
    "unicode": "f113",
    "label": "Alternate GitHub",
    "name": "github-alt",
    "styles": [
      "fab"
    ],
    "membership": {
      "free": [
        "fab"
      ],
      "pro": [
        "fab"
      ]
    }
  },
  {
    "unicode": "f09b",
    "label": "GitHub",
    "name": "github",
    "styles": [
      "fab"
    ],
    "membership": {
      "free": [
        "fab"
      ],
      "pro": [
        "fab"
      ]
    }
  },
  {
    "unicode": "f1d2",
    "label": "Git Square",
    "name": "git-square",
    "styles": [
      "fab"
    ],
    "membership": {
      "free": [
        "fab"
      ],
      "pro": [
        "fab"
      ]
    }
  },
  {
    "unicode": "f1d3",
    "label": "Git",
    "name": "git",
    "styles": [
      "fab"
    ],
    "membership": {
      "free": [
        "fab"
      ],
      "pro": [
        "fab"
      ]
    }
  },
  {
    "unicode": "f06b",
    "label": "gift",
    "name": "gift",
    "styles": [
      "fas",
      "far",
      "fal"
    ],
    "membership": {
      "free": [
        "fas"
      ],
      "pro": [
        "fas",
        "far",
        "fal"
      ]
    }
  },
  {
    "unicode": "f261",
    "label": "GG Currency Circle",
    "name": "gg-circle",
    "styles": [
      "fab"
    ],
    "membership": {
      "free": [
        "fab"
      ],
      "pro": [
        "fab"
      ]
    }
  },
  {
    "unicode": "f260",
    "label": "GG Currency",
    "name": "gg",
    "styles": [
      "fab"
    ],
    "membership": {
      "free": [
        "fab"
      ],
      "pro": [
        "fab"
      ]
    }
  },
  {
    "unicode": "f265",
    "label": "Get Pocket",
    "name": "get-pocket",
    "styles": [
      "fab"
    ],
    "membership": {
      "free": [
        "fab"
      ],
      "pro": [
        "fab"
      ]
    }
  },
  {
    "unicode": "f22d",
    "label": "Genderless",
    "name": "genderless",
    "styles": [
      "fas",
      "far",
      "fal"
    ],
    "membership": {
      "free": [
        "fas"
      ],
      "pro": [
        "fas",
        "far",
        "fal"
      ]
    }
  },
  {
    "unicode": "f3a5",
    "label": "Gem",
    "name": "gem",
    "styles": [
      "fas",
      "far",
      "fal"
    ],
    "membership": {
      "free": [
        "fas",
        "far"
      ],
      "pro": [
        "fas",
        "far",
        "fal"
      ]
    }
  },
  {
    "unicode": "f0e3",
    "label": "Gavel",
    "name": "gavel",
    "styles": [
      "fas",
      "far",
      "fal"
    ],
    "membership": {
      "free": [
        "fas"
      ],
      "pro": [
        "fas",
        "far",
        "fal"
      ]
    }
  },
  {
    "unicode": "f5f4",
    "label": "Gas Pump-slash",
    "name": "gas-pump-slash",
    "styles": [
      "fas",
      "far",
      "fal"
    ],
    "membership": {
      "free": [],
      "pro": [
        "fas",
        "far",
        "fal"
      ]
    }
  },
  {
    "unicode": "f52f",
    "label": "Gas Pump",
    "name": "gas-pump",
    "styles": [
      "fas",
      "far",
      "fal"
    ],
    "membership": {
      "free": [
        "fas"
      ],
      "pro": [
        "fas",
        "far",
        "fal"
      ]
    }
  },
  {
    "unicode": "f11b",
    "label": "Gamepad",
    "name": "gamepad",
    "styles": [
      "fas",
      "far",
      "fal"
    ],
    "membership": {
      "free": [
        "fas"
      ],
      "pro": [
        "fas",
        "far",
        "fal"
      ]
    }
  },
  {
    "unicode": "f50d",
    "label": "Galactic Senate",
    "name": "galactic-senate",
    "styles": [
      "fab"
    ],
    "membership": {
      "free": [
        "fab"
      ],
      "pro": [
        "fab"
      ]
    }
  },
  {
    "unicode": "f50c",
    "label": "Galactic Republic",
    "name": "galactic-republic",
    "styles": [
      "fab"
    ],
    "membership": {
      "free": [
        "fab"
      ],
      "pro": [
        "fab"
      ]
    }
  },
  {
    "unicode": "f1e3",
    "label": "Futbol",
    "name": "futbol",
    "styles": [
      "fas",
      "far",
      "fal"
    ],
    "membership": {
      "free": [
        "fas",
        "far"
      ],
      "pro": [
        "fas",
        "far",
        "fal"
      ]
    }
  },
  {
    "unicode": "f50b",
    "label": "Fulcrum",
    "name": "fulcrum",
    "styles": [
      "fab"
    ],
    "membership": {
      "free": [
        "fab"
      ],
      "pro": [
        "fab"
      ]
    }
  },
  {
    "unicode": "f57a",
    "label": "Frowning Face With Open Mouth",
    "name": "frown-open",
    "styles": [
      "fas",
      "far",
      "fal"
    ],
    "membership": {
      "free": [
        "fas",
        "far"
      ],
      "pro": [
        "fas",
        "far",
        "fal"
      ]
    }
  },
  {
    "unicode": "f119",
    "label": "Frowning Face",
    "name": "frown",
    "styles": [
      "fas",
      "far",
      "fal"
    ],
    "membership": {
      "free": [
        "fas",
        "far"
      ],
      "pro": [
        "fas",
        "far",
        "fal"
      ]
    }
  },
  {
    "unicode": "f52e",
    "label": "Frog",
    "name": "frog",
    "styles": [
      "fas",
      "far",
      "fal"
    ],
    "membership": {
      "free": [
        "fas"
      ],
      "pro": [
        "fas",
        "far",
        "fal"
      ]
    }
  },
  {
    "unicode": "f3a4",
    "label": "FreeBSD",
    "name": "freebsd",
    "styles": [
      "fab"
    ],
    "membership": {
      "free": [
        "fab"
      ],
      "pro": [
        "fab"
      ]
    }
  },
  {
    "unicode": "f2c5",
    "label": "Free Code Camp",
    "name": "free-code-camp",
    "styles": [
      "fab"
    ],
    "membership": {
      "free": [
        "fab"
      ],
      "pro": [
        "fab"
      ]
    }
  },
  {
    "unicode": "f4bb",
    "label": "Fragile",
    "name": "fragile",
    "styles": [
      "fas",
      "far",
      "fal"
    ],
    "membership": {
      "free": [],
      "pro": [
        "fas",
        "far",
        "fal"
      ]
    }
  },
  {
    "unicode": "f180",
    "label": "Foursquare",
    "name": "foursquare",
    "styles": [
      "fab"
    ],
    "membership": {
      "free": [
        "fab"
      ],
      "pro": [
        "fab"
      ]
    }
  },
  {
    "unicode": "f04e",
    "label": "forward",
    "name": "forward",
    "styles": [
      "fas",
      "far",
      "fal"
    ],
    "membership": {
      "free": [
        "fas"
      ],
      "pro": [
        "fas",
        "far",
        "fal"
      ]
    }
  },
  {
    "unicode": "f211",
    "label": "Forumbee",
    "name": "forumbee",
    "styles": [
      "fab"
    ],
    "membership": {
      "free": [
        "fab"
      ],
      "pro": [
        "fab"
      ]
    }
  },
  {
    "unicode": "f3a3",
    "label": "Alternate Fort Awesome",
    "name": "fort-awesome-alt",
    "styles": [
      "fab"
    ],
    "membership": {
      "free": [
        "fab"
      ],
      "pro": [
        "fab"
      ]
    }
  },
  {
    "unicode": "f286",
    "label": "Fort Awesome",
    "name": "fort-awesome",
    "styles": [
      "fab"
    ],
    "membership": {
      "free": [
        "fab"
      ],
      "pro": [
        "fab"
      ]
    }
  },
  {
    "unicode": "f47a",
    "label": "Forklift",
    "name": "forklift",
    "styles": [
      "fas",
      "far",
      "fal"
    ],
    "membership": {
      "free": [],
      "pro": [
        "fas",
        "far",
        "fal"
      ]
    }
  },
  {
    "unicode": "f44f",
    "label": "Football Helmet",
    "name": "football-helmet",
    "styles": [
      "fas",
      "far",
      "fal"
    ],
    "membership": {
      "free": [],
      "pro": [
        "fas",
        "far",
        "fal"
      ]
    }
  },
  {
    "unicode": "f44e",
    "label": "Football Ball",
    "name": "football-ball",
    "styles": [
      "fas",
      "far",
      "fal"
    ],
    "membership": {
      "free": [
        "fas"
      ],
      "pro": [
        "fas",
        "far",
        "fal"
      ]
    }
  },
  {
    "unicode": "f3a2",
    "label": "Fonticons Fi",
    "name": "fonticons-fi",
    "styles": [
      "fab"
    ],
    "membership": {
      "free": [
        "fab"
      ],
      "pro": [
        "fab"
      ]
    }
  },
  {
    "unicode": "f280",
    "label": "Fonticons",
    "name": "fonticons",
    "styles": [
      "fab"
    ],
    "membership": {
      "free": [
        "fab"
      ],
      "pro": [
        "fab"
      ]
    }
  },
  {
    "unicode": "f425",
    "label": "Font Awesome Flag",
    "name": "font-awesome-flag",
    "styles": [
      "fab"
    ],
    "membership": {
      "free": [
        "fab"
      ],
      "pro": [
        "fab"
      ]
    }
  },
  {
    "unicode": "f35c",
    "label": "Alternate Font Awesome",
    "name": "font-awesome-alt",
    "styles": [
      "fab"
    ],
    "membership": {
      "free": [
        "fab"
      ],
      "pro": [
        "fab"
      ]
    }
  },
  {
    "unicode": "f2b4",
    "label": "Font Awesome",
    "name": "font-awesome",
    "styles": [
      "fab"
    ],
    "membership": {
      "free": [
        "fab"
      ],
      "pro": [
        "fab"
      ]
    }
  },
  {
    "unicode": "f031",
    "label": "font",
    "name": "font",
    "styles": [
      "fas",
      "far",
      "fal"
    ],
    "membership": {
      "free": [
        "fas"
      ],
      "pro": [
        "fas",
        "far",
        "fal"
      ]
    }
  },
  {
    "unicode": "f07c",
    "label": "Folder Open",
    "name": "folder-open",
    "styles": [
      "fas",
      "far",
      "fal"
    ],
    "membership": {
      "free": [
        "fas",
        "far"
      ],
      "pro": [
        "fas",
        "far",
        "fal"
      ]
    }
  },
  {
    "unicode": "f07b",
    "label": "Folder",
    "name": "folder",
    "styles": [
      "fas",
      "far",
      "fal"
    ],
    "membership": {
      "free": [
        "fas",
        "far"
      ],
      "pro": [
        "fas",
        "far",
        "fal"
      ]
    }
  },
  {
    "unicode": "f417",
    "label": "Fly",
    "name": "fly",
    "styles": [
      "fab"
    ],
    "membership": {
      "free": [
        "fab"
      ],
      "pro": [
        "fab"
      ]
    }
  },
  {
    "unicode": "f579",
    "label": "Flushed Face",
    "name": "flushed",
    "styles": [
      "fas",
      "far",
      "fal"
    ],
    "membership": {
      "free": [
        "fas",
        "far"
      ],
      "pro": [
        "fas",
        "far",
        "fal"
      ]
    }
  },
  {
    "unicode": "f44d",
    "label": "Flipboard",
    "name": "flipboard",
    "styles": [
      "fab"
    ],
    "membership": {
      "free": [
        "fab"
      ],
      "pro": [
        "fab"
      ]
    }
  },
  {
    "unicode": "f16e",
    "label": "Flickr",
    "name": "flickr",
    "styles": [
      "fab"
    ],
    "membership": {
      "free": [
        "fab"
      ],
      "pro": [
        "fab"
      ]
    }
  },
  {
    "unicode": "f0c3",
    "label": "Flask",
    "name": "flask",
    "styles": [
      "fas",
      "far",
      "fal"
    ],
    "membership": {
      "free": [
        "fas"
      ],
      "pro": [
        "fas",
        "far",
        "fal"
      ]
    }
  },
  {
    "unicode": "f11e",
    "label": "flag-checkered",
    "name": "flag-checkered",
    "styles": [
      "fas",
      "far",
      "fal"
    ],
    "membership": {
      "free": [
        "fas"
      ],
      "pro": [
        "fas",
        "far",
        "fal"
      ]
    }
  },
  {
    "unicode": "f024",
    "label": "flag",
    "name": "flag",
    "styles": [
      "fas",
      "far",
      "fal"
    ],
    "membership": {
      "free": [
        "fas",
        "far"
      ],
      "pro": [
        "fas",
        "far",
        "fal"
      ]
    }
  },
  {
    "unicode": "f578",
    "label": "Fish",
    "name": "fish",
    "styles": [
      "fas",
      "far",
      "fal"
    ],
    "membership": {
      "free": [
        "fas"
      ],
      "pro": [
        "fas",
        "far",
        "fal"
      ]
    }
  },
  {
    "unicode": "f3a1",
    "label": "firstdraft",
    "name": "firstdraft",
    "styles": [
      "fab"
    ],
    "membership": {
      "free": [
        "fab"
      ],
      "pro": [
        "fab"
      ]
    }
  },
  {
    "unicode": "f50a",
    "label": "Alternate First Order",
    "name": "first-order-alt",
    "styles": [
      "fab"
    ],
    "membership": {
      "free": [
        "fab"
      ],
      "pro": [
        "fab"
      ]
    }
  },
  {
    "unicode": "f2b0",
    "label": "First Order",
    "name": "first-order",
    "styles": [
      "fab"
    ],
    "membership": {
      "free": [
        "fab"
      ],
      "pro": [
        "fab"
      ]
    }
  },
  {
    "unicode": "f479",
    "label": "First Aid",
    "name": "first-aid",
    "styles": [
      "fas",
      "far",
      "fal"
    ],
    "membership": {
      "free": [
        "fas"
      ],
      "pro": [
        "fas",
        "far",
        "fal"
      ]
    }
  },
  {
    "unicode": "f269",
    "label": "Firefox",
    "name": "firefox",
    "styles": [
      "fab"
    ],
    "membership": {
      "free": [
        "fab"
      ],
      "pro": [
        "fab"
      ]
    }
  },
  {
    "unicode": "f134",
    "label": "fire-extinguisher",
    "name": "fire-extinguisher",
    "styles": [
      "fas",
      "far",
      "fal"
    ],
    "membership": {
      "free": [
        "fas"
      ],
      "pro": [
        "fas",
        "far",
        "fal"
      ]
    }
  },
  {
    "unicode": "f06d",
    "label": "fire",
    "name": "fire",
    "styles": [
      "fas",
      "far",
      "fal"
    ],
    "membership": {
      "free": [
        "fas"
      ],
      "pro": [
        "fas",
        "far",
        "fal"
      ]
    }
  },
  {
    "unicode": "f577",
    "label": "Fingerprint",
    "name": "fingerprint",
    "styles": [
      "fas",
      "far",
      "fal"
    ],
    "membership": {
      "free": [
        "fas"
      ],
      "pro": [
        "fas",
        "far",
        "fal"
      ]
    }
  },
  {
    "unicode": "f0b0",
    "label": "Filter",
    "name": "filter",
    "styles": [
      "fas",
      "far",
      "fal"
    ],
    "membership": {
      "free": [
        "fas"
      ],
      "pro": [
        "fas",
        "far",
        "fal"
      ]
    }
  },
  {
    "unicode": "f3a0",
    "label": "Alternate Film",
    "name": "film-alt",
    "styles": [
      "fas",
      "far",
      "fal"
    ],
    "membership": {
      "free": [],
      "pro": [
        "fas",
        "far",
        "fal"
      ]
    }
  },
  {
    "unicode": "f008",
    "label": "Film",
    "name": "film",
    "styles": [
      "fas",
      "far",
      "fal"
    ],
    "membership": {
      "free": [
        "fas"
      ],
      "pro": [
        "fas",
        "far",
        "fal"
      ]
    }
  },
  {
    "unicode": "f576",
    "label": "Fill Drip",
    "name": "fill-drip",
    "styles": [
      "fas",
      "far",
      "fal"
    ],
    "membership": {
      "free": [
        "fas"
      ],
      "pro": [
        "fas",
        "far",
        "fal"
      ]
    }
  },
  {
    "unicode": "f575",
    "label": "Fill",
    "name": "fill",
    "styles": [
      "fas",
      "far",
      "fal"
    ],
    "membership": {
      "free": [
        "fas"
      ],
      "pro": [
        "fas",
        "far",
        "fal"
      ]
    }
  },
  {
    "unicode": "f1c2",
    "label": "Word File",
    "name": "file-word",
    "styles": [
      "fas",
      "far",
      "fal"
    ],
    "membership": {
      "free": [
        "fas",
        "far"
      ],
      "pro": [
        "fas",
        "far",
        "fal"
      ]
    }
  },
  {
    "unicode": "f1c8",
    "label": "Video File",
    "name": "file-video",
    "styles": [
      "fas",
      "far",
      "fal"
    ],
    "membership": {
      "free": [
        "fas",
        "far"
      ],
      "pro": [
        "fas",
        "far",
        "fal"
      ]
    }
  },
  {
    "unicode": "f574",
    "label": "File Upload",
    "name": "file-upload",
    "styles": [
      "fas",
      "far",
      "fal"
    ],
    "membership": {
      "free": [
        "fas"
      ],
      "pro": [
        "fas",
        "far",
        "fal"
      ]
    }
  },
  {
    "unicode": "f317",
    "label": "Times File",
    "name": "file-times",
    "styles": [
      "fas",
      "far",
      "fal"
    ],
    "membership": {
      "free": [],
      "pro": [
        "fas",
        "far",
        "fal"
      ]
    }
  },
  {
    "unicode": "f573",
    "label": "File Signature",
    "name": "file-signature",
    "styles": [
      "fas",
      "far",
      "fal"
    ],
    "membership": {
      "free": [
        "fas"
      ],
      "pro": [
        "fas",
        "far",
        "fal"
      ]
    }
  },
  {
    "unicode": "f572",
    "label": "File Prescription",
    "name": "file-prescription",
    "styles": [
      "fas",
      "far",
      "fal"
    ],
    "membership": {
      "free": [
        "fas"
      ],
      "pro": [
        "fas",
        "far",
        "fal"
      ]
    }
  },
  {
    "unicode": "f1c4",
    "label": "Powerpoint File",
    "name": "file-powerpoint",
    "styles": [
      "fas",
      "far",
      "fal"
    ],
    "membership": {
      "free": [
        "fas",
        "far"
      ],
      "pro": [
        "fas",
        "far",
        "fal"
      ]
    }
  },
  {
    "unicode": "f319",
    "label": "Plus File",
    "name": "file-plus",
    "styles": [
      "fas",
      "far",
      "fal"
    ],
    "membership": {
      "free": [],
      "pro": [
        "fas",
        "far",
        "fal"
      ]
    }
  },
  {
    "unicode": "f1c1",
    "label": "PDF File",
    "name": "file-pdf",
    "styles": [
      "fas",
      "far",
      "fal"
    ],
    "membership": {
      "free": [
        "fas",
        "far"
      ],
      "pro": [
        "fas",
        "far",
        "fal"
      ]
    }
  },
  {
    "unicode": "f318",
    "label": "Minus File",
    "name": "file-minus",
    "styles": [
      "fas",
      "far",
      "fal"
    ],
    "membership": {
      "free": [],
      "pro": [
        "fas",
        "far",
        "fal"
      ]
    }
  },
  {
    "unicode": "f478",
    "label": "Alternate Medical File",
    "name": "file-medical-alt",
    "styles": [
      "fas",
      "far",
      "fal"
    ],
    "membership": {
      "free": [
        "fas"
      ],
      "pro": [
        "fas",
        "far",
        "fal"
      ]
    }
  },
  {
    "unicode": "f477",
    "label": "Medical File",
    "name": "file-medical",
    "styles": [
      "fas",
      "far",
      "fal"
    ],
    "membership": {
      "free": [
        "fas"
      ],
      "pro": [
        "fas",
        "far",
        "fal"
      ]
    }
  },
  {
    "unicode": "f571",
    "label": "File Invoice with US Dollar",
    "name": "file-invoice-dollar",
    "styles": [
      "fas",
      "far",
      "fal"
    ],
    "membership": {
      "free": [
        "fas"
      ],
      "pro": [
        "fas",
        "far",
        "fal"
      ]
    }
  },
  {
    "unicode": "f570",
    "label": "File Invoice",
    "name": "file-invoice",
    "styles": [
      "fas",
      "far",
      "fal"
    ],
    "membership": {
      "free": [
        "fas"
      ],
      "pro": [
        "fas",
        "far",
        "fal"
      ]
    }
  },
  {
    "unicode": "f56f",
    "label": "File Import",
    "name": "file-import",
    "styles": [
      "fas",
      "far",
      "fal"
    ],
    "membership": {
      "free": [
        "fas"
      ],
      "pro": [
        "fas",
        "far",
        "fal"
      ]
    }
  },
  {
    "unicode": "f1c5",
    "label": "Image File",
    "name": "file-image",
    "styles": [
      "fas",
      "far",
      "fal"
    ],
    "membership": {
      "free": [
        "fas",
        "far"
      ],
      "pro": [
        "fas",
        "far",
        "fal"
      ]
    }
  },
  {
    "unicode": "f56e",
    "label": "File Export",
    "name": "file-export",
    "styles": [
      "fas",
      "far",
      "fal"
    ],
    "membership": {
      "free": [
        "fas"
      ],
      "pro": [
        "fas",
        "far",
        "fal"
      ]
    }
  },
  {
    "unicode": "f31a",
    "label": "Exclamation File",
    "name": "file-exclamation",
    "styles": [
      "fas",
      "far",
      "fal"
    ],
    "membership": {
      "free": [],
      "pro": [
        "fas",
        "far",
        "fal"
      ]
    }
  },
  {
    "unicode": "f1c3",
    "label": "Excel File",
    "name": "file-excel",
    "styles": [
      "fas",
      "far",
      "fal"
    ],
    "membership": {
      "free": [
        "fas",
        "far"
      ],
      "pro": [
        "fas",
        "far",
        "fal"
      ]
    }
  },
  {
    "unicode": "f31c",
    "label": "Edit File",
    "name": "file-edit",
    "styles": [
      "fas",
      "far",
      "fal"
    ],
    "membership": {
      "free": [],
      "pro": [
        "fas",
        "far",
        "fal"
      ]
    }
  },
  {
    "unicode": "f56d",
    "label": "File Download",
    "name": "file-download",
    "styles": [
      "fas",
      "far",
      "fal"
    ],
    "membership": {
      "free": [
        "fas"
      ],
      "pro": [
        "fas",
        "far",
        "fal"
      ]
    }
  },
  {
    "unicode": "f56c",
    "label": "File Contract",
    "name": "file-contract",
    "styles": [
      "fas",
      "far",
      "fal"
    ],
    "membership": {
      "free": [
        "fas"
      ],
      "pro": [
        "fas",
        "far",
        "fal"
      ]
    }
  },
  {
    "unicode": "f1c9",
    "label": "Code File",
    "name": "file-code",
    "styles": [
      "fas",
      "far",
      "fal"
    ],
    "membership": {
      "free": [
        "fas",
        "far"
      ],
      "pro": [
        "fas",
        "far",
        "fal"
      ]
    }
  },
  {
    "unicode": "f316",
    "label": "Check File",
    "name": "file-check",
    "styles": [
      "fas",
      "far",
      "fal"
    ],
    "membership": {
      "free": [],
      "pro": [
        "fas",
        "far",
        "fal"
      ]
    }
  },
  {
    "unicode": "f5f3",
    "label": "File Certificate",
    "name": "file-certificate",
    "styles": [
      "fas",
      "far",
      "fal"
    ],
    "membership": {
      "free": [],
      "pro": [
        "fas",
        "far",
        "fal"
      ]
    }
  },
  {
    "unicode": "f1c7",
    "label": "Audio File",
    "name": "file-audio",
    "styles": [
      "fas",
      "far",
      "fal"
    ],
    "membership": {
      "free": [
        "fas",
        "far"
      ],
      "pro": [
        "fas",
        "far",
        "fal"
      ]
    }
  },
  {
    "unicode": "f1c6",
    "label": "Archive File",
    "name": "file-archive",
    "styles": [
      "fas",
      "far",
      "fal"
    ],
    "membership": {
      "free": [
        "fas",
        "far"
      ],
      "pro": [
        "fas",
        "far",
        "fal"
      ]
    }
  },
  {
    "unicode": "f15c",
    "label": "Alternate File",
    "name": "file-alt",
    "styles": [
      "fas",
      "far",
      "fal"
    ],
    "membership": {
      "free": [
        "fas",
        "far"
      ],
      "pro": [
        "fas",
        "far",
        "fal"
      ]
    }
  },
  {
    "unicode": "f15b",
    "label": "File",
    "name": "file",
    "styles": [
      "fas",
      "far",
      "fal"
    ],
    "membership": {
      "free": [
        "fas",
        "far"
      ],
      "pro": [
        "fas",
        "far",
        "fal"
      ]
    }
  },
  {
    "unicode": "f0fb",
    "label": "fighter-jet",
    "name": "fighter-jet",
    "styles": [
      "fas",
      "far",
      "fal"
    ],
    "membership": {
      "free": [
        "fas"
      ],
      "pro": [
        "fas",
        "far",
        "fal"
      ]
    }
  },
  {
    "unicode": "f44c",
    "label": "Field Hockey",
    "name": "field-hockey",
    "styles": [
      "fas",
      "far",
      "fal"
    ],
    "membership": {
      "free": [],
      "pro": [
        "fas",
        "far",
        "fal"
      ]
    }
  },
  {
    "unicode": "f182",
    "label": "Female",
    "name": "female",
    "styles": [
      "fas",
      "far",
      "fal"
    ],
    "membership": {
      "free": [
        "fas"
      ],
      "pro": [
        "fas",
        "far",
        "fal"
      ]
    }
  },
  {
    "unicode": "f56b",
    "label": "Feather Alt",
    "name": "feather-alt",
    "styles": [
      "fas",
      "far",
      "fal"
    ],
    "membership": {
      "free": [
        "fas"
      ],
      "pro": [
        "fas",
        "far",
        "fal"
      ]
    }
  },
  {
    "unicode": "f52d",
    "label": "Feather",
    "name": "feather",
    "styles": [
      "fas",
      "far",
      "fal"
    ],
    "membership": {
      "free": [
        "fas"
      ],
      "pro": [
        "fas",
        "far",
        "fal"
      ]
    }
  },
  {
    "unicode": "f1ac",
    "label": "Fax",
    "name": "fax",
    "styles": [
      "fas",
      "far",
      "fal"
    ],
    "membership": {
      "free": [
        "fas"
      ],
      "pro": [
        "fas",
        "far",
        "fal"
      ]
    }
  },
  {
    "unicode": "f050",
    "label": "fast-forward",
    "name": "fast-forward",
    "styles": [
      "fas",
      "far",
      "fal"
    ],
    "membership": {
      "free": [
        "fas"
      ],
      "pro": [
        "fas",
        "far",
        "fal"
      ]
    }
  },
  {
    "unicode": "f049",
    "label": "fast-backward",
    "name": "fast-backward",
    "styles": [
      "fas",
      "far",
      "fal"
    ],
    "membership": {
      "free": [
        "fas"
      ],
      "pro": [
        "fas",
        "far",
        "fal"
      ]
    }
  },
  {
    "unicode": "f082",
    "label": "Facebook Square",
    "name": "facebook-square",
    "styles": [
      "fab"
    ],
    "membership": {
      "free": [
        "fab"
      ],
      "pro": [
        "fab"
      ]
    }
  },
  {
    "unicode": "f39f",
    "label": "Facebook Messenger",
    "name": "facebook-messenger",
    "styles": [
      "fab"
    ],
    "membership": {
      "free": [
        "fab"
      ],
      "pro": [
        "fab"
      ]
    }
  },
  {
    "unicode": "f39e",
    "label": "Facebook F",
    "name": "facebook-f",
    "styles": [
      "fab"
    ],
    "membership": {
      "free": [
        "fab"
      ],
      "pro": [
        "fab"
      ]
    }
  },
  {
    "unicode": "f09a",
    "label": "Facebook",
    "name": "facebook",
    "styles": [
      "fab"
    ],
    "membership": {
      "free": [
        "fab"
      ],
      "pro": [
        "fab"
      ]
    }
  },
  {
    "unicode": "f070",
    "label": "Eye Slash",
    "name": "eye-slash",
    "styles": [
      "fas",
      "far",
      "fal"
    ],
    "membership": {
      "free": [
        "fas",
        "far"
      ],
      "pro": [
        "fas",
        "far",
        "fal"
      ]
    }
  },
  {
    "unicode": "f1fb",
    "label": "Eye Dropper",
    "name": "eye-dropper",
    "styles": [
      "fas",
      "far",
      "fal"
    ],
    "membership": {
      "free": [
        "fas"
      ],
      "pro": [
        "fas",
        "far",
        "fal"
      ]
    }
  },
  {
    "unicode": "f06e",
    "label": "Eye",
    "name": "eye",
    "styles": [
      "fas",
      "far",
      "fal"
    ],
    "membership": {
      "free": [
        "fas",
        "far"
      ],
      "pro": [
        "fas",
        "far",
        "fal"
      ]
    }
  },
  {
    "unicode": "f360",
    "label": "Alternate External Link Square",
    "name": "external-link-square-alt",
    "styles": [
      "fas",
      "far",
      "fal"
    ],
    "membership": {
      "free": [
        "fas"
      ],
      "pro": [
        "fas",
        "far",
        "fal"
      ]
    }
  },
  {
    "unicode": "f14c",
    "label": "External Link Square",
    "name": "external-link-square",
    "styles": [
      "fas",
      "far",
      "fal"
    ],
    "membership": {
      "free": [],
      "pro": [
        "fas",
        "far",
        "fal"
      ]
    }
  },
  {
    "unicode": "f35d",
    "label": "Alternate External Link",
    "name": "external-link-alt",
    "styles": [
      "fas",
      "far",
      "fal"
    ],
    "membership": {
      "free": [
        "fas"
      ],
      "pro": [
        "fas",
        "far",
        "fal"
      ]
    }
  },
  {
    "unicode": "f08e",
    "label": "External Link",
    "name": "external-link",
    "styles": [
      "fas",
      "far",
      "fal"
    ],
    "membership": {
      "free": [],
      "pro": [
        "fas",
        "far",
        "fal"
      ]
    }
  },
  {
    "unicode": "f23e",
    "label": "ExpeditedSSL",
    "name": "expeditedssl",
    "styles": [
      "fab"
    ],
    "membership": {
      "free": [
        "fab"
      ],
      "pro": [
        "fab"
      ]
    }
  },
  {
    "unicode": "f320",
    "label": "Expand Wide",
    "name": "expand-wide",
    "styles": [
      "fas",
      "far",
      "fal"
    ],
    "membership": {
      "free": [],
      "pro": [
        "fas",
        "far",
        "fal"
      ]
    }
  },
  {
    "unicode": "f31e",
    "label": "Alternate Expand Arrows",
    "name": "expand-arrows-alt",
    "styles": [
      "fas",
      "far",
      "fal"
    ],
    "membership": {
      "free": [
        "fas"
      ],
      "pro": [
        "fas",
        "far",
        "fal"
      ]
    }
  },
  {
    "unicode": "f31d",
    "label": "Expand Arrows",
    "name": "expand-arrows",
    "styles": [
      "fas",
      "far",
      "fal"
    ],
    "membership": {
      "free": [],
      "pro": [
        "fas",
        "far",
        "fal"
      ]
    }
  },
  {
    "unicode": "f424",
    "label": "Alternate Expand",
    "name": "expand-alt",
    "styles": [
      "fas",
      "far",
      "fal"
    ],
    "membership": {
      "free": [],
      "pro": [
        "fas",
        "far",
        "fal"
      ]
    }
  },
  {
    "unicode": "f065",
    "label": "Expand",
    "name": "expand",
    "styles": [
      "fas",
      "far",
      "fal"
    ],
    "membership": {
      "free": [
        "fas"
      ],
      "pro": [
        "fas",
        "far",
        "fal"
      ]
    }
  },
  {
    "unicode": "f071",
    "label": "Exclamation Triangle",
    "name": "exclamation-triangle",
    "styles": [
      "fas",
      "far",
      "fal"
    ],
    "membership": {
      "free": [
        "fas"
      ],
      "pro": [
        "fas",
        "far",
        "fal"
      ]
    }
  },
  {
    "unicode": "f321",
    "label": "Exclamation Square",
    "name": "exclamation-square",
    "styles": [
      "fas",
      "far",
      "fal"
    ],
    "membership": {
      "free": [],
      "pro": [
        "fas",
        "far",
        "fal"
      ]
    }
  },
  {
    "unicode": "f06a",
    "label": "Exclamation Circle",
    "name": "exclamation-circle",
    "styles": [
      "fas",
      "far",
      "fal"
    ],
    "membership": {
      "free": [
        "fas"
      ],
      "pro": [
        "fas",
        "far",
        "fal"
      ]
    }
  },
  {
    "unicode": "f12a",
    "label": "exclamation",
    "name": "exclamation",
    "styles": [
      "fas",
      "far",
      "fal"
    ],
    "membership": {
      "free": [
        "fas"
      ],
      "pro": [
        "fas",
        "far",
        "fal"
      ]
    }
  },
  {
    "unicode": "f362",
    "label": "Alternate Exchange",
    "name": "exchange-alt",
    "styles": [
      "fas",
      "far",
      "fal"
    ],
    "membership": {
      "free": [
        "fas"
      ],
      "pro": [
        "fas",
        "far",
        "fal"
      ]
    }
  },
  {
    "unicode": "f0ec",
    "label": "Exchange",
    "name": "exchange",
    "styles": [
      "fas",
      "far",
      "fal"
    ],
    "membership": {
      "free": [],
      "pro": [
        "fas",
        "far",
        "fal"
      ]
    }
  },
  {
    "unicode": "f153",
    "label": "Euro Sign",
    "name": "euro-sign",
    "styles": [
      "fas",
      "far",
      "fal"
    ],
    "membership": {
      "free": [
        "fas"
      ],
      "pro": [
        "fas",
        "far",
        "fal"
      ]
    }
  },
  {
    "unicode": "f2d7",
    "label": "Etsy",
    "name": "etsy",
    "styles": [
      "fab"
    ],
    "membership": {
      "free": [
        "fab"
      ],
      "pro": [
        "fab"
      ]
    }
  },
  {
    "unicode": "f42e",
    "label": "Ethereum",
    "name": "ethereum",
    "styles": [
      "fab"
    ],
    "membership": {
      "free": [
        "fab"
      ],
      "pro": [
        "fab"
      ]
    }
  },
  {
    "unicode": "f39d",
    "label": "Erlang",
    "name": "erlang",
    "styles": [
      "fab"
    ],
    "membership": {
      "free": [
        "fab"
      ],
      "pro": [
        "fab"
      ]
    }
  },
  {
    "unicode": "f12d",
    "label": "eraser",
    "name": "eraser",
    "styles": [
      "fas",
      "far",
      "fal"
    ],
    "membership": {
      "free": [
        "fas"
      ],
      "pro": [
        "fas",
        "far",
        "fal"
      ]
    }
  },
  {
    "unicode": "f52c",
    "label": "Equals",
    "name": "equals",
    "styles": [
      "fas",
      "far",
      "fal"
    ],
    "membership": {
      "free": [
        "fas"
      ],
      "pro": [
        "fas",
        "far",
        "fal"
      ]
    }
  },
  {
    "unicode": "f299",
    "label": "Envira Gallery",
    "name": "envira",
    "styles": [
      "fab"
    ],
    "membership": {
      "free": [
        "fab"
      ],
      "pro": [
        "fab"
      ]
    }
  },
  {
    "unicode": "f199",
    "label": "Envelope Square",
    "name": "envelope-square",
    "styles": [
      "fas",
      "far",
      "fal"
    ],
    "membership": {
      "free": [
        "fas"
      ],
      "pro": [
        "fas",
        "far",
        "fal"
      ]
    }
  },
  {
    "unicode": "f2b6",
    "label": "Envelope Open",
    "name": "envelope-open",
    "styles": [
      "fas",
      "far",
      "fal"
    ],
    "membership": {
      "free": [
        "fas",
        "far"
      ],
      "pro": [
        "fas",
        "far",
        "fal"
      ]
    }
  },
  {
    "unicode": "f0e0",
    "label": "Envelope",
    "name": "envelope",
    "styles": [
      "fas",
      "far",
      "fal"
    ],
    "membership": {
      "free": [
        "fas",
        "far"
      ],
      "pro": [
        "fas",
        "far",
        "fal"
      ]
    }
  },
  {
    "unicode": "f5f2",
    "label": "Engine Warning",
    "name": "engine-warning",
    "styles": [
      "fas",
      "far",
      "fal"
    ],
    "membership": {
      "free": [],
      "pro": [
        "fas",
        "far",
        "fal"
      ]
    }
  },
  {
    "unicode": "f1d1",
    "label": "Galactic Empire",
    "name": "empire",
    "styles": [
      "fab"
    ],
    "membership": {
      "free": [
        "fab"
      ],
      "pro": [
        "fab"
      ]
    }
  },
  {
    "unicode": "f423",
    "label": "Ember",
    "name": "ember",
    "styles": [
      "fab"
    ],
    "membership": {
      "free": [
        "fab"
      ],
      "pro": [
        "fab"
      ]
    }
  },
  {
    "unicode": "f5f1",
    "label": "Ello",
    "name": "ello",
    "styles": [
      "fab"
    ],
    "membership": {
      "free": [
        "fab"
      ],
      "pro": [
        "fab"
      ]
    }
  },
  {
    "unicode": "f39c",
    "label": "Alternate Vertical Ellipsis",
    "name": "ellipsis-v-alt",
    "styles": [
      "fas",
      "far",
      "fal"
    ],
    "membership": {
      "free": [],
      "pro": [
        "fas",
        "far",
        "fal"
      ]
    }
  },
  {
    "unicode": "f142",
    "label": "Vertical Ellipsis",
    "name": "ellipsis-v",
    "styles": [
      "fas",
      "far",
      "fal"
    ],
    "membership": {
      "free": [
        "fas"
      ],
      "pro": [
        "fas",
        "far",
        "fal"
      ]
    }
  },
  {
    "unicode": "f39b",
    "label": "Alternate Horizontal Ellipsis",
    "name": "ellipsis-h-alt",
    "styles": [
      "fas",
      "far",
      "fal"
    ],
    "membership": {
      "free": [],
      "pro": [
        "fas",
        "far",
        "fal"
      ]
    }
  },
  {
    "unicode": "f141",
    "label": "Horizontal Ellipsis",
    "name": "ellipsis-h",
    "styles": [
      "fas",
      "far",
      "fal"
    ],
    "membership": {
      "free": [
        "fas"
      ],
      "pro": [
        "fas",
        "far",
        "fal"
      ]
    }
  },
  {
    "unicode": "f430",
    "label": "Elementor",
    "name": "elementor",
    "styles": [
      "fab"
    ],
    "membership": {
      "free": [
        "fab"
      ],
      "pro": [
        "fab"
      ]
    }
  },
  {
    "unicode": "f052",
    "label": "eject",
    "name": "eject",
    "styles": [
      "fas",
      "far",
      "fal"
    ],
    "membership": {
      "free": [
        "fas"
      ],
      "pro": [
        "fas",
        "far",
        "fal"
      ]
    }
  },
  {
    "unicode": "f044",
    "label": "Edit",
    "name": "edit",
    "styles": [
      "fas",
      "far",
      "fal"
    ],
    "membership": {
      "free": [
        "fas",
        "far"
      ],
      "pro": [
        "fas",
        "far",
        "fal"
      ]
    }
  },
  {
    "unicode": "f282",
    "label": "Edge Browser",
    "name": "edge",
    "styles": [
      "fab"
    ],
    "membership": {
      "free": [
        "fab"
      ],
      "pro": [
        "fab"
      ]
    }
  },
  {
    "unicode": "f4f4",
    "label": "eBay",
    "name": "ebay",
    "styles": [
      "fab"
    ],
    "membership": {
      "free": [
        "fab"
      ],
      "pro": [
        "fab"
      ]
    }
  },
  {
    "unicode": "f39a",
    "label": "Earlybirds",
    "name": "earlybirds",
    "styles": [
      "fab"
    ],
    "membership": {
      "free": [
        "fab"
      ],
      "pro": [
        "fab"
      ]
    }
  },
  {
    "unicode": "f5f0",
    "label": "Ear",
    "name": "ear",
    "styles": [
      "fas",
      "far",
      "fal"
    ],
    "membership": {
      "free": [],
      "pro": [
        "fas",
        "far",
        "fal"
      ]
    }
  },
  {
    "unicode": "f399",
    "label": "Dyalog",
    "name": "dyalog",
    "styles": [
      "fab"
    ],
    "membership": {
      "free": [
        "fab"
      ],
      "pro": [
        "fab"
      ]
    }
  },
  {
    "unicode": "f44b",
    "label": "Dumbbell",
    "name": "dumbbell",
    "styles": [
      "fas",
      "far",
      "fal"
    ],
    "membership": {
      "free": [
        "fas"
      ],
      "pro": [
        "fas",
        "far",
        "fal"
      ]
    }
  },
  {
    "unicode": "f1a9",
    "label": "Drupal Logo",
    "name": "drupal",
    "styles": [
      "fab"
    ],
    "membership": {
      "free": [
        "fab"
      ],
      "pro": [
        "fab"
      ]
    }
  },
  {
    "unicode": "f56a",
    "label": "Drum Steelpan",
    "name": "drum-steelpan",
    "styles": [
      "fas",
      "far",
      "fal"
    ],
    "membership": {
      "free": [
        "fas"
      ],
      "pro": [
        "fas",
        "far",
        "fal"
      ]
    }
  },
  {
    "unicode": "f569",
    "label": "Drum",
    "name": "drum",
    "styles": [
      "fas",
      "far",
      "fal"
    ],
    "membership": {
      "free": [
        "fas"
      ],
      "pro": [
        "fas",
        "far",
        "fal"
      ]
    }
  },
  {
    "unicode": "f16b",
    "label": "Dropbox",
    "name": "dropbox",
    "styles": [
      "fab"
    ],
    "membership": {
      "free": [
        "fab"
      ],
      "pro": [
        "fab"
      ]
    }
  },
  {
    "unicode": "f397",
    "label": "Dribbble Square",
    "name": "dribbble-square",
    "styles": [
      "fab"
    ],
    "membership": {
      "free": [
        "fab"
      ],
      "pro": [
        "fab"
      ]
    }
  },
  {
    "unicode": "f17d",
    "label": "Dribbble",
    "name": "dribbble",
    "styles": [
      "fab"
    ],
    "membership": {
      "free": [
        "fab"
      ],
      "pro": [
        "fab"
      ]
    }
  },
  {
    "unicode": "f5ef",
    "label": "Draw Square",
    "name": "draw-square",
    "styles": [
      "fas",
      "far",
      "fal"
    ],
    "membership": {
      "free": [],
      "pro": [
        "fas",
        "far",
        "fal"
      ]
    }
  },
  {
    "unicode": "f5ee",
    "label": "Draw Polygon",
    "name": "draw-polygon",
    "styles": [
      "fas",
      "far",
      "fal"
    ],
    "membership": {
      "free": [
        "fas"
      ],
      "pro": [
        "fas",
        "far",
        "fal"
      ]
    }
  },
  {
    "unicode": "f5ed",
    "label": "Draw Circle",
    "name": "draw-circle",
    "styles": [
      "fas",
      "far",
      "fal"
    ],
    "membership": {
      "free": [],
      "pro": [
        "fas",
        "far",
        "fal"
      ]
    }
  },
  {
    "unicode": "f568",
    "label": "Drafting Compass",
    "name": "drafting-compass",
    "styles": [
      "fas",
      "far",
      "fal"
    ],
    "membership": {
      "free": [
        "fas"
      ],
      "pro": [
        "fas",
        "far",
        "fal"
      ]
    }
  },
  {
    "unicode": "f396",
    "label": "Draft2digital",
    "name": "draft2digital",
    "styles": [
      "fab"
    ],
    "membership": {
      "free": [
        "fab"
      ],
      "pro": [
        "fab"
      ]
    }
  },
  {
    "unicode": "f019",
    "label": "Download",
    "name": "download",
    "styles": [
      "fas",
      "far",
      "fal"
    ],
    "membership": {
      "free": [
        "fas"
      ],
      "pro": [
        "fas",
        "far",
        "fal"
      ]
    }
  },
  {
    "unicode": "f4ba",
    "label": "Dove",
    "name": "dove",
    "styles": [
      "fas",
      "far",
      "fal"
    ],
    "membership": {
      "free": [
        "fas"
      ],
      "pro": [
        "fas",
        "far",
        "fal"
      ]
    }
  },
  {
    "unicode": "f192",
    "label": "Dot Circle",
    "name": "dot-circle",
    "styles": [
      "fas",
      "far",
      "fal"
    ],
    "membership": {
      "free": [
        "fas",
        "far"
      ],
      "pro": [
        "fas",
        "far",
        "fal"
      ]
    }
  },
  {
    "unicode": "f52b",
    "label": "Door Open",
    "name": "door-open",
    "styles": [
      "fas",
      "far",
      "fal"
    ],
    "membership": {
      "free": [
        "fas"
      ],
      "pro": [
        "fas",
        "far",
        "fal"
      ]
    }
  },
  {
    "unicode": "f52a",
    "label": "Door Closed",
    "name": "door-closed",
    "styles": [
      "fas",
      "far",
      "fal"
    ],
    "membership": {
      "free": [
        "fas"
      ],
      "pro": [
        "fas",
        "far",
        "fal"
      ]
    }
  },
  {
    "unicode": "f4b9",
    "label": "Donate",
    "name": "donate",
    "styles": [
      "fas",
      "far",
      "fal"
    ],
    "membership": {
      "free": [
        "fas"
      ],
      "pro": [
        "fas",
        "far",
        "fal"
      ]
    }
  },
  {
    "unicode": "f476",
    "label": "Dolly Flatbed-empty",
    "name": "dolly-flatbed-empty",
    "styles": [
      "fas",
      "far",
      "fal"
    ],
    "membership": {
      "free": [],
      "pro": [
        "fas",
        "far",
        "fal"
      ]
    }
  },
  {
    "unicode": "f475",
    "label": "Alternate Dolly Flatbed",
    "name": "dolly-flatbed-alt",
    "styles": [
      "fas",
      "far",
      "fal"
    ],
    "membership": {
      "free": [],
      "pro": [
        "fas",
        "far",
        "fal"
      ]
    }
  },
  {
    "unicode": "f474",
    "label": "Dolly Flatbed",
    "name": "dolly-flatbed",
    "styles": [
      "fas",
      "far",
      "fal"
    ],
    "membership": {
      "free": [
        "fas"
      ],
      "pro": [
        "fas",
        "far",
        "fal"
      ]
    }
  },
  {
    "unicode": "f473",
    "label": "Dolly Empty",
    "name": "dolly-empty",
    "styles": [
      "fas",
      "far",
      "fal"
    ],
    "membership": {
      "free": [],
      "pro": [
        "fas",
        "far",
        "fal"
      ]
    }
  },
  {
    "unicode": "f472",
    "label": "Dolly",
    "name": "dolly",
    "styles": [
      "fas",
      "far",
      "fal"
    ],
    "membership": {
      "free": [
        "fas"
      ],
      "pro": [
        "fas",
        "far",
        "fal"
      ]
    }
  },
  {
    "unicode": "f155",
    "label": "Dollar Sign",
    "name": "dollar-sign",
    "styles": [
      "fas",
      "far",
      "fal"
    ],
    "membership": {
      "free": [
        "fas"
      ],
      "pro": [
        "fas",
        "far",
        "fal"
      ]
    }
  },
  {
    "unicode": "f395",
    "label": "Docker",
    "name": "docker",
    "styles": [
      "fab"
    ],
    "membership": {
      "free": [
        "fab"
      ],
      "pro": [
        "fab"
      ]
    }
  },
  {
    "unicode": "f394",
    "label": "DocHub",
    "name": "dochub",
    "styles": [
      "fab"
    ],
    "membership": {
      "free": [
        "fab"
      ],
      "pro": [
        "fab"
      ]
    }
  },
  {
    "unicode": "f5ec",
    "label": "Do Not-enter",
    "name": "do-not-enter",
    "styles": [
      "fas",
      "far",
      "fal"
    ],
    "membership": {
      "free": [],
      "pro": [
        "fas",
        "far",
        "fal"
      ]
    }
  },
  {
    "unicode": "f471",
    "label": "DNA",
    "name": "dna",
    "styles": [
      "fas",
      "far",
      "fal"
    ],
    "membership": {
      "free": [
        "fas"
      ],
      "pro": [
        "fas",
        "far",
        "fal"
      ]
    }
  },
  {
    "unicode": "f567",
    "label": "Dizzy Face",
    "name": "dizzy",
    "styles": [
      "fas",
      "far",
      "fal"
    ],
    "membership": {
      "free": [
        "fas",
        "far"
      ],
      "pro": [
        "fas",
        "far",
        "fal"
      ]
    }
  },
  {
    "unicode": "f529",
    "label": "Divide",
    "name": "divide",
    "styles": [
      "fas",
      "far",
      "fal"
    ],
    "membership": {
      "free": [
        "fas"
      ],
      "pro": [
        "fas",
        "far",
        "fal"
      ]
    }
  },
  {
    "unicode": "f393",
    "label": "Discourse",
    "name": "discourse",
    "styles": [
      "fab"
    ],
    "membership": {
      "free": [
        "fab"
      ],
      "pro": [
        "fab"
      ]
    }
  },
  {
    "unicode": "f392",
    "label": "Discord",
    "name": "discord",
    "styles": [
      "fab"
    ],
    "membership": {
      "free": [
        "fab"
      ],
      "pro": [
        "fab"
      ]
    }
  },
  {
    "unicode": "f5eb",
    "label": "Directions",
    "name": "directions",
    "styles": [
      "fas",
      "far",
      "fal"
    ],
    "membership": {
      "free": [
        "fas"
      ],
      "pro": [
        "fas",
        "far",
        "fal"
      ]
    }
  },
  {
    "unicode": "f5ea",
    "label": "Diploma",
    "name": "diploma",
    "styles": [
      "fas",
      "far",
      "fal"
    ],
    "membership": {
      "free": [],
      "pro": [
        "fas",
        "far",
        "fal"
      ]
    }
  },
  {
    "unicode": "f566",
    "label": "Digital Tachograph",
    "name": "digital-tachograph",
    "styles": [
      "fas",
      "far",
      "fal"
    ],
    "membership": {
      "free": [
        "fas"
      ],
      "pro": [
        "fas",
        "far",
        "fal"
      ]
    }
  },
  {
    "unicode": "f391",
    "label": "Digital Ocean",
    "name": "digital-ocean",
    "styles": [
      "fab"
    ],
    "membership": {
      "free": [
        "fab"
      ],
      "pro": [
        "fab"
      ]
    }
  },
  {
    "unicode": "f1a6",
    "label": "Digg Logo",
    "name": "digg",
    "styles": [
      "fab"
    ],
    "membership": {
      "free": [
        "fab"
      ],
      "pro": [
        "fab"
      ]
    }
  },
  {
    "unicode": "f528",
    "label": "Dice Two",
    "name": "dice-two",
    "styles": [
      "fas",
      "far",
      "fal"
    ],
    "membership": {
      "free": [
        "fas"
      ],
      "pro": [
        "fas",
        "far",
        "fal"
      ]
    }
  },
  {
    "unicode": "f527",
    "label": "Dice Three",
    "name": "dice-three",
    "styles": [
      "fas",
      "far",
      "fal"
    ],
    "membership": {
      "free": [
        "fas"
      ],
      "pro": [
        "fas",
        "far",
        "fal"
      ]
    }
  },
  {
    "unicode": "f526",
    "label": "Dice Six",
    "name": "dice-six",
    "styles": [
      "fas",
      "far",
      "fal"
    ],
    "membership": {
      "free": [
        "fas"
      ],
      "pro": [
        "fas",
        "far",
        "fal"
      ]
    }
  },
  {
    "unicode": "f525",
    "label": "Dice One",
    "name": "dice-one",
    "styles": [
      "fas",
      "far",
      "fal"
    ],
    "membership": {
      "free": [
        "fas"
      ],
      "pro": [
        "fas",
        "far",
        "fal"
      ]
    }
  },
  {
    "unicode": "f524",
    "label": "Dice Four",
    "name": "dice-four",
    "styles": [
      "fas",
      "far",
      "fal"
    ],
    "membership": {
      "free": [
        "fas"
      ],
      "pro": [
        "fas",
        "far",
        "fal"
      ]
    }
  },
  {
    "unicode": "f523",
    "label": "Dice Five",
    "name": "dice-five",
    "styles": [
      "fas",
      "far",
      "fal"
    ],
    "membership": {
      "free": [
        "fas"
      ],
      "pro": [
        "fas",
        "far",
        "fal"
      ]
    }
  },
  {
    "unicode": "f522",
    "label": "Dice",
    "name": "dice",
    "styles": [
      "fas",
      "far",
      "fal"
    ],
    "membership": {
      "free": [
        "fas"
      ],
      "pro": [
        "fas",
        "far",
        "fal"
      ]
    }
  },
  {
    "unicode": "f219",
    "label": "Diamond",
    "name": "diamond",
    "styles": [
      "fas",
      "far",
      "fal"
    ],
    "membership": {
      "free": [],
      "pro": [
        "fas",
        "far",
        "fal"
      ]
    }
  },
  {
    "unicode": "f470",
    "label": "Diagnoses",
    "name": "diagnoses",
    "styles": [
      "fas",
      "far",
      "fal"
    ],
    "membership": {
      "free": [
        "fas"
      ],
      "pro": [
        "fas",
        "far",
        "fal"
      ]
    }
  },
  {
    "unicode": "f1bd",
    "label": "deviantART",
    "name": "deviantart",
    "styles": [
      "fab"
    ],
    "membership": {
      "free": [
        "fab"
      ],
      "pro": [
        "fab"
      ]
    }
  },
  {
    "unicode": "f390",
    "label": "Alternate Desktop",
    "name": "desktop-alt",
    "styles": [
      "fas",
      "far",
      "fal"
    ],
    "membership": {
      "free": [],
      "pro": [
        "fas",
        "far",
        "fal"
      ]
    }
  },
  {
    "unicode": "f108",
    "label": "Desktop",
    "name": "desktop",
    "styles": [
      "fas",
      "far",
      "fal"
    ],
    "membership": {
      "free": [
        "fas"
      ],
      "pro": [
        "fas",
        "far",
        "fal"
      ]
    }
  },
  {
    "unicode": "f38f",
    "label": "Deskpro",
    "name": "deskpro",
    "styles": [
      "fab"
    ],
    "membership": {
      "free": [
        "fab"
      ],
      "pro": [
        "fab"
      ]
    }
  },
  {
    "unicode": "f38e",
    "label": "deploy.dog",
    "name": "deploydog",
    "styles": [
      "fab"
    ],
    "membership": {
      "free": [
        "fab"
      ],
      "pro": [
        "fab"
      ]
    }
  },
  {
    "unicode": "f1a5",
    "label": "Delicious Logo",
    "name": "delicious",
    "styles": [
      "fab"
    ],
    "membership": {
      "free": [
        "fab"
      ],
      "pro": [
        "fab"
      ]
    }
  },
  {
    "unicode": "f2a4",
    "label": "Deaf",
    "name": "deaf",
    "styles": [
      "fas",
      "far",
      "fal"
    ],
    "membership": {
      "free": [
        "fas"
      ],
      "pro": [
        "fas",
        "far",
        "fal"
      ]
    }
  },
  {
    "unicode": "f1c0",
    "label": "Database",
    "name": "database",
    "styles": [
      "fas",
      "far",
      "fal"
    ],
    "membership": {
      "free": [
        "fas"
      ],
      "pro": [
        "fas",
        "far",
        "fal"
      ]
    }
  },
  {
    "unicode": "f210",
    "label": "DashCube",
    "name": "dashcube",
    "styles": [
      "fab"
    ],
    "membership": {
      "free": [
        "fab"
      ],
      "pro": [
        "fab"
      ]
    }
  },
  {
    "unicode": "f38d",
    "label": "Dungeons & Dragons",
    "name": "d-and-d",
    "styles": [
      "fab"
    ],
    "membership": {
      "free": [
        "fab"
      ],
      "pro": [
        "fab"
      ]
    }
  },
  {
    "unicode": "f38c",
    "label": "Cuttlefish",
    "name": "cuttlefish",
    "styles": [
      "fab"
    ],
    "membership": {
      "free": [
        "fab"
      ],
      "pro": [
        "fab"
      ]
    }
  },
  {
    "unicode": "f0c4",
    "label": "Cut",
    "name": "cut",
    "styles": [
      "fas",
      "far",
      "fal"
    ],
    "membership": {
      "free": [
        "fas"
      ],
      "pro": [
        "fas",
        "far",
        "fal"
      ]
    }
  },
  {
    "unicode": "f44a",
    "label": "Curling",
    "name": "curling",
    "styles": [
      "fas",
      "far",
      "fal"
    ],
    "membership": {
      "free": [],
      "pro": [
        "fas",
        "far",
        "fal"
      ]
    }
  },
  {
    "unicode": "f1b3",
    "label": "Cubes",
    "name": "cubes",
    "styles": [
      "fas",
      "far",
      "fal"
    ],
    "membership": {
      "free": [
        "fas"
      ],
      "pro": [
        "fas",
        "far",
        "fal"
      ]
    }
  },
  {
    "unicode": "f1b2",
    "label": "Cube",
    "name": "cube",
    "styles": [
      "fas",
      "far",
      "fal"
    ],
    "membership": {
      "free": [
        "fas"
      ],
      "pro": [
        "fas",
        "far",
        "fal"
      ]
    }
  },
  {
    "unicode": "f38b",
    "label": "Alternate CSS3 Logo",
    "name": "css3-alt",
    "styles": [
      "fab"
    ],
    "membership": {
      "free": [
        "fab"
      ],
      "pro": [
        "fab"
      ]
    }
  },
  {
    "unicode": "f13c",
    "label": "CSS 3 Logo",
    "name": "css3",
    "styles": [
      "fab"
    ],
    "membership": {
      "free": [
        "fab"
      ],
      "pro": [
        "fab"
      ]
    }
  },
  {
    "unicode": "f521",
    "label": "Crown",
    "name": "crown",
    "styles": [
      "fas",
      "far",
      "fal"
    ],
    "membership": {
      "free": [
        "fas"
      ],
      "pro": [
        "fas",
        "far",
        "fal"
      ]
    }
  },
  {
    "unicode": "f520",
    "label": "Crow",
    "name": "crow",
    "styles": [
      "fas",
      "far",
      "fal"
    ],
    "membership": {
      "free": [
        "fas"
      ],
      "pro": [
        "fas",
        "far",
        "fal"
      ]
    }
  },
  {
    "unicode": "f05b",
    "label": "Crosshairs",
    "name": "crosshairs",
    "styles": [
      "fas",
      "far",
      "fal"
    ],
    "membership": {
      "free": [
        "fas"
      ],
      "pro": [
        "fas",
        "far",
        "fal"
      ]
    }
  },
  {
    "unicode": "f565",
    "label": "Alternate Crop",
    "name": "crop-alt",
    "styles": [
      "fas",
      "far",
      "fal"
    ],
    "membership": {
      "free": [
        "fas"
      ],
      "pro": [
        "fas",
        "far",
        "fal"
      ]
    }
  },
  {
    "unicode": "f125",
    "label": "crop",
    "name": "crop",
    "styles": [
      "fas",
      "far",
      "fal"
    ],
    "membership": {
      "free": [
        "fas"
      ],
      "pro": [
        "fas",
        "far",
        "fal"
      ]
    }
  },
  {
    "unicode": "f449",
    "label": "Cricket",
    "name": "cricket",
    "styles": [
      "fas",
      "far",
      "fal"
    ],
    "membership": {
      "free": [],
      "pro": [
        "fas",
        "far",
        "fal"
      ]
    }
  },
  {
    "unicode": "f38a",
    "label": "Credit Card Front",
    "name": "credit-card-front",
    "styles": [
      "fas",
      "far",
      "fal"
    ],
    "membership": {
      "free": [],
      "pro": [
        "fas",
        "far",
        "fal"
      ]
    }
  },
  {
    "unicode": "f389",
    "label": "Credit Card Blank",
    "name": "credit-card-blank",
    "styles": [
      "fas",
      "far",
      "fal"
    ],
    "membership": {
      "free": [],
      "pro": [
        "fas",
        "far",
        "fal"
      ]
    }
  },
  {
    "unicode": "f09d",
    "label": "Credit Card",
    "name": "credit-card",
    "styles": [
      "fas",
      "far",
      "fal"
    ],
    "membership": {
      "free": [
        "fas",
        "far"
      ],
      "pro": [
        "fas",
        "far",
        "fal"
      ]
    }
  },
  {
    "unicode": "f4f3",
    "label": "Creative Commons CC0",
    "name": "creative-commons-zero",
    "styles": [
      "fab"
    ],
    "membership": {
      "free": [],
      "pro": [
        "fab"
      ]
    }
  },
  {
    "unicode": "f4f2",
    "label": "Creative Commons Share",
    "name": "creative-commons-share",
    "styles": [
      "fab"
    ],
    "membership": {
      "free": [
        "fab"
      ],
      "pro": [
        "fab"
      ]
    }
  },
  {
    "unicode": "f4f1",
    "label": "Creative Commons Sampling +",
    "name": "creative-commons-sampling-plus",
    "styles": [
      "fab"
    ],
    "membership": {
      "free": [
        "fab"
      ],
      "pro": [
        "fab"
      ]
    }
  },
  {
    "unicode": "f4f0",
    "label": "Creative Commons Sampling",
    "name": "creative-commons-sampling",
    "styles": [
      "fab"
    ],
    "membership": {
      "free": [
        "fab"
      ],
      "pro": [
        "fab"
      ]
    }
  },
  {
    "unicode": "f4ef",
    "label": "Creative Commons Share Alike",
    "name": "creative-commons-sa",
    "styles": [
      "fab"
    ],
    "membership": {
      "free": [
        "fab"
      ],
      "pro": [
        "fab"
      ]
    }
  },
  {
    "unicode": "f4ee",
    "label": "Creative Commons Remix",
    "name": "creative-commons-remix",
    "styles": [
      "fab"
    ],
    "membership": {
      "free": [
        "fab"
      ],
      "pro": [
        "fab"
      ]
    }
  },
  {
    "unicode": "f4ed",
    "label": "Creative Commons Public Domain Alternate",
    "name": "creative-commons-pd-alt",
    "styles": [
      "fab"
    ],
    "membership": {
      "free": [
        "fab"
      ],
      "pro": [
        "fab"
      ]
    }
  },
  {
    "unicode": "f4ec",
    "label": "Creative Commons Public Domain",
    "name": "creative-commons-pd",
    "styles": [
      "fab"
    ],
    "membership": {
      "free": [
        "fab"
      ],
      "pro": [
        "fab"
      ]
    }
  },
  {
    "unicode": "f4eb",
    "label": "Creative Commons No Derivative Works",
    "name": "creative-commons-nd",
    "styles": [
      "fab"
    ],
    "membership": {
      "free": [
        "fab"
      ],
      "pro": [
        "fab"
      ]
    }
  },
  {
    "unicode": "f4ea",
    "label": "Creative Commons Noncommercial (Yen Sign)",
    "name": "creative-commons-nc-jp",
    "styles": [
      "fab"
    ],
    "membership": {
      "free": [
        "fab"
      ],
      "pro": [
        "fab"
      ]
    }
  },
  {
    "unicode": "f4e9",
    "label": "Creative Commons Noncommercial (Euro Sign)",
    "name": "creative-commons-nc-eu",
    "styles": [
      "fab"
    ],
    "membership": {
      "free": [
        "fab"
      ],
      "pro": [
        "fab"
      ]
    }
  },
  {
    "unicode": "f4e8",
    "label": "Creative Commons Noncommercial",
    "name": "creative-commons-nc",
    "styles": [
      "fab"
    ],
    "membership": {
      "free": [
        "fab"
      ],
      "pro": [
        "fab"
      ]
    }
  },
  {
    "unicode": "f4e7",
    "label": "Creative Commons Attribution",
    "name": "creative-commons-by",
    "styles": [
      "fab"
    ],
    "membership": {
      "free": [
        "fab"
      ],
      "pro": [
        "fab"
      ]
    }
  },
  {
    "unicode": "f25e",
    "label": "Creative Commons",
    "name": "creative-commons",
    "styles": [
      "fab"
    ],
    "membership": {
      "free": [
        "fab"
      ],
      "pro": [
        "fab"
      ]
    }
  },
  {
    "unicode": "f388",
    "label": "cPanel",
    "name": "cpanel",
    "styles": [
      "fab"
    ],
    "membership": {
      "free": [
        "fab"
      ],
      "pro": [
        "fab"
      ]
    }
  },
  {
    "unicode": "f4b8",
    "label": "Couch",
    "name": "couch",
    "styles": [
      "fas",
      "far",
      "fal"
    ],
    "membership": {
      "free": [
        "fas"
      ],
      "pro": [
        "fas",
        "far",
        "fal"
      ]
    }
  },
  {
    "unicode": "f1f9",
    "label": "Copyright",
    "name": "copyright",
    "styles": [
      "fas",
      "far",
      "fal"
    ],
    "membership": {
      "free": [
        "fas",
        "far"
      ],
      "pro": [
        "fas",
        "far",
        "fal"
      ]
    }
  },
  {
    "unicode": "f0c5",
    "label": "Copy",
    "name": "copy",
    "styles": [
      "fas",
      "far",
      "fal"
    ],
    "membership": {
      "free": [
        "fas",
        "far"
      ],
      "pro": [
        "fas",
        "far",
        "fal"
      ]
    }
  },
  {
    "unicode": "f564",
    "label": "Cookie Bite",
    "name": "cookie-bite",
    "styles": [
      "fas",
      "far",
      "fal"
    ],
    "membership": {
      "free": [
        "fas"
      ],
      "pro": [
        "fas",
        "far",
        "fal"
      ]
    }
  },
  {
    "unicode": "f563",
    "label": "Cookie",
    "name": "cookie",
    "styles": [
      "fas",
      "far",
      "fal"
    ],
    "membership": {
      "free": [
        "fas"
      ],
      "pro": [
        "fas",
        "far",
        "fal"
      ]
    }
  },
  {
    "unicode": "f46f",
    "label": "Alternate Conveyor Belt",
    "name": "conveyor-belt-alt",
    "styles": [
      "fas",
      "far",
      "fal"
    ],
    "membership": {
      "free": [],
      "pro": [
        "fas",
        "far",
        "fal"
      ]
    }
  },
  {
    "unicode": "f46e",
    "label": "Conveyor Belt",
    "name": "conveyor-belt",
    "styles": [
      "fas",
      "far",
      "fal"
    ],
    "membership": {
      "free": [],
      "pro": [
        "fas",
        "far",
        "fal"
      ]
    }
  },
  {
    "unicode": "f26d",
    "label": "Contao",
    "name": "contao",
    "styles": [
      "fab"
    ],
    "membership": {
      "free": [
        "fab"
      ],
      "pro": [
        "fab"
      ]
    }
  },
  {
    "unicode": "f4b7",
    "label": "Container Storage",
    "name": "container-storage",
    "styles": [
      "fas",
      "far",
      "fal"
    ],
    "membership": {
      "free": [],
      "pro": [
        "fas",
        "far",
        "fal"
      ]
    }
  },
  {
    "unicode": "f20e",
    "label": "Connect Develop",
    "name": "connectdevelop",
    "styles": [
      "fab"
    ],
    "membership": {
      "free": [
        "fab"
      ],
      "pro": [
        "fab"
      ]
    }
  },
  {
    "unicode": "f562",
    "label": "Concierge Bell",
    "name": "concierge-bell",
    "styles": [
      "fas",
      "far",
      "fal"
    ],
    "membership": {
      "free": [
        "fas"
      ],
      "pro": [
        "fas",
        "far",
        "fal"
      ]
    }
  },
  {
    "unicode": "f326",
    "label": "Compress Wide",
    "name": "compress-wide",
    "styles": [
      "fas",
      "far",
      "fal"
    ],
    "membership": {
      "free": [],
      "pro": [
        "fas",
        "far",
        "fal"
      ]
    }
  },
  {
    "unicode": "f422",
    "label": "Alternate Compress",
    "name": "compress-alt",
    "styles": [
      "fas",
      "far",
      "fal"
    ],
    "membership": {
      "free": [],
      "pro": [
        "fas",
        "far",
        "fal"
      ]
    }
  },
  {
    "unicode": "f066",
    "label": "Compress",
    "name": "compress",
    "styles": [
      "fas",
      "far",
      "fal"
    ],
    "membership": {
      "free": [
        "fas"
      ],
      "pro": [
        "fas",
        "far",
        "fal"
      ]
    }
  },
  {
    "unicode": "f5e9",
    "label": "Compass Slash",
    "name": "compass-slash",
    "styles": [
      "fas",
      "far",
      "fal"
    ],
    "membership": {
      "free": [],
      "pro": [
        "fas",
        "far",
        "fal"
      ]
    }
  },
  {
    "unicode": "f14e",
    "label": "Compass",
    "name": "compass",
    "styles": [
      "fas",
      "far",
      "fal"
    ],
    "membership": {
      "free": [
        "fas",
        "far"
      ],
      "pro": [
        "fas",
        "far",
        "fal"
      ]
    }
  },
  {
    "unicode": "f51f",
    "label": "Compact Disc",
    "name": "compact-disc",
    "styles": [
      "fas",
      "far",
      "fal"
    ],
    "membership": {
      "free": [
        "fas"
      ],
      "pro": [
        "fas",
        "far",
        "fal"
      ]
    }
  },
  {
    "unicode": "f4b6",
    "label": "Comments Alt",
    "name": "comments-alt",
    "styles": [
      "fas",
      "far",
      "fal"
    ],
    "membership": {
      "free": [],
      "pro": [
        "fas",
        "far",
        "fal"
      ]
    }
  },
  {
    "unicode": "f086",
    "label": "comments",
    "name": "comments",
    "styles": [
      "fas",
      "far",
      "fal"
    ],
    "membership": {
      "free": [
        "fas",
        "far"
      ],
      "pro": [
        "fas",
        "far",
        "fal"
      ]
    }
  },
  {
    "unicode": "f4b5",
    "label": "Comment Times",
    "name": "comment-times",
    "styles": [
      "fas",
      "far",
      "fal"
    ],
    "membership": {
      "free": [],
      "pro": [
        "fas",
        "far",
        "fal"
      ]
    }
  },
  {
    "unicode": "f4b4",
    "label": "Comment Smile",
    "name": "comment-smile",
    "styles": [
      "fas",
      "far",
      "fal"
    ],
    "membership": {
      "free": [],
      "pro": [
        "fas",
        "far",
        "fal"
      ]
    }
  },
  {
    "unicode": "f4b3",
    "label": "Comment Slash",
    "name": "comment-slash",
    "styles": [
      "fas",
      "far",
      "fal"
    ],
    "membership": {
      "free": [
        "fas"
      ],
      "pro": [
        "fas",
        "far",
        "fal"
      ]
    }
  },
  {
    "unicode": "f4b2",
    "label": "Comment Plus",
    "name": "comment-plus",
    "styles": [
      "fas",
      "far",
      "fal"
    ],
    "membership": {
      "free": [],
      "pro": [
        "fas",
        "far",
        "fal"
      ]
    }
  },
  {
    "unicode": "f4b1",
    "label": "Comment Minus",
    "name": "comment-minus",
    "styles": [
      "fas",
      "far",
      "fal"
    ],
    "membership": {
      "free": [],
      "pro": [
        "fas",
        "far",
        "fal"
      ]
    }
  },
  {
    "unicode": "f4b0",
    "label": "Comment Lines",
    "name": "comment-lines",
    "styles": [
      "fas",
      "far",
      "fal"
    ],
    "membership": {
      "free": [],
      "pro": [
        "fas",
        "far",
        "fal"
      ]
    }
  },
  {
    "unicode": "f4af",
    "label": "Comment Exclamation",
    "name": "comment-exclamation",
    "styles": [
      "fas",
      "far",
      "fal"
    ],
    "membership": {
      "free": [],
      "pro": [
        "fas",
        "far",
        "fal"
      ]
    }
  },
  {
    "unicode": "f4ae",
    "label": "Comment Edit",
    "name": "comment-edit",
    "styles": [
      "fas",
      "far",
      "fal"
    ],
    "membership": {
      "free": [],
      "pro": [
        "fas",
        "far",
        "fal"
      ]
    }
  },
  {
    "unicode": "f4ad",
    "label": "Comment Dots",
    "name": "comment-dots",
    "styles": [
      "fas",
      "far",
      "fal"
    ],
    "membership": {
      "free": [
        "fas",
        "far"
      ],
      "pro": [
        "fas",
        "far",
        "fal"
      ]
    }
  },
  {
    "unicode": "f4ac",
    "label": "Comment Check",
    "name": "comment-check",
    "styles": [
      "fas",
      "far",
      "fal"
    ],
    "membership": {
      "free": [],
      "pro": [
        "fas",
        "far",
        "fal"
      ]
    }
  },
  {
    "unicode": "f4ab",
    "label": "Alternate Comment Times",
    "name": "comment-alt-times",
    "styles": [
      "fas",
      "far",
      "fal"
    ],
    "membership": {
      "free": [],
      "pro": [
        "fas",
        "far",
        "fal"
      ]
    }
  },
  {
    "unicode": "f4aa",
    "label": "Alternate Comment Smile",
    "name": "comment-alt-smile",
    "styles": [
      "fas",
      "far",
      "fal"
    ],
    "membership": {
      "free": [],
      "pro": [
        "fas",
        "far",
        "fal"
      ]
    }
  },
  {
    "unicode": "f4a9",
    "label": "Alternate Comment Slash",
    "name": "comment-alt-slash",
    "styles": [
      "fas",
      "far",
      "fal"
    ],
    "membership": {
      "free": [],
      "pro": [
        "fas",
        "far",
        "fal"
      ]
    }
  },
  {
    "unicode": "f4a8",
    "label": "Comment Alt-plus",
    "name": "comment-alt-plus",
    "styles": [
      "fas",
      "far",
      "fal"
    ],
    "membership": {
      "free": [],
      "pro": [
        "fas",
        "far",
        "fal"
      ]
    }
  },
  {
    "unicode": "f4a7",
    "label": "Comment Alt-minus",
    "name": "comment-alt-minus",
    "styles": [
      "fas",
      "far",
      "fal"
    ],
    "membership": {
      "free": [],
      "pro": [
        "fas",
        "far",
        "fal"
      ]
    }
  },
  {
    "unicode": "f4a6",
    "label": "Comment Alt-lines",
    "name": "comment-alt-lines",
    "styles": [
      "fas",
      "far",
      "fal"
    ],
    "membership": {
      "free": [],
      "pro": [
        "fas",
        "far",
        "fal"
      ]
    }
  },
  {
    "unicode": "f4a5",
    "label": "Comment Alt-exclamation",
    "name": "comment-alt-exclamation",
    "styles": [
      "fas",
      "far",
      "fal"
    ],
    "membership": {
      "free": [],
      "pro": [
        "fas",
        "far",
        "fal"
      ]
    }
  },
  {
    "unicode": "f4a4",
    "label": "Comment Alt-edit",
    "name": "comment-alt-edit",
    "styles": [
      "fas",
      "far",
      "fal"
    ],
    "membership": {
      "free": [],
      "pro": [
        "fas",
        "far",
        "fal"
      ]
    }
  },
  {
    "unicode": "f4a3",
    "label": "Comment Alt-dots",
    "name": "comment-alt-dots",
    "styles": [
      "fas",
      "far",
      "fal"
    ],
    "membership": {
      "free": [],
      "pro": [
        "fas",
        "far",
        "fal"
      ]
    }
  },
  {
    "unicode": "f4a2",
    "label": "Comment Alt-check",
    "name": "comment-alt-check",
    "styles": [
      "fas",
      "far",
      "fal"
    ],
    "membership": {
      "free": [],
      "pro": [
        "fas",
        "far",
        "fal"
      ]
    }
  },
  {
    "unicode": "f27a",
    "label": "Alternate Comment",
    "name": "comment-alt",
    "styles": [
      "fas",
      "far",
      "fal"
    ],
    "membership": {
      "free": [
        "fas",
        "far"
      ],
      "pro": [
        "fas",
        "far",
        "fal"
      ]
    }
  },
  {
    "unicode": "f075",
    "label": "comment",
    "name": "comment",
    "styles": [
      "fas",
      "far",
      "fal"
    ],
    "membership": {
      "free": [
        "fas",
        "far"
      ],
      "pro": [
        "fas",
        "far",
        "fal"
      ]
    }
  },
  {
    "unicode": "f0db",
    "label": "Columns",
    "name": "columns",
    "styles": [
      "fas",
      "far",
      "fal"
    ],
    "membership": {
      "free": [
        "fas"
      ],
      "pro": [
        "fas",
        "far",
        "fal"
      ]
    }
  },
  {
    "unicode": "f51e",
    "label": "Coins",
    "name": "coins",
    "styles": [
      "fas",
      "far",
      "fal"
    ],
    "membership": {
      "free": [
        "fas"
      ],
      "pro": [
        "fas",
        "far",
        "fal"
      ]
    }
  },
  {
    "unicode": "f085",
    "label": "cogs",
    "name": "cogs",
    "styles": [
      "fas",
      "far",
      "fal"
    ],
    "membership": {
      "free": [
        "fas"
      ],
      "pro": [
        "fas",
        "far",
        "fal"
      ]
    }
  },
  {
    "unicode": "f013",
    "label": "cog",
    "name": "cog",
    "styles": [
      "fas",
      "far",
      "fal"
    ],
    "membership": {
      "free": [
        "fas"
      ],
      "pro": [
        "fas",
        "far",
        "fal"
      ]
    }
  },
  {
    "unicode": "f0f4",
    "label": "Coffee",
    "name": "coffee",
    "styles": [
      "fas",
      "far",
      "fal"
    ],
    "membership": {
      "free": [
        "fas"
      ],
      "pro": [
        "fas",
        "far",
        "fal"
      ]
    }
  },
  {
    "unicode": "f284",
    "label": "Codie Pie",
    "name": "codiepie",
    "styles": [
      "fab"
    ],
    "membership": {
      "free": [
        "fab"
      ],
      "pro": [
        "fab"
      ]
    }
  },
  {
    "unicode": "f1cb",
    "label": "Codepen",
    "name": "codepen",
    "styles": [
      "fab"
    ],
    "membership": {
      "free": [
        "fab"
      ],
      "pro": [
        "fab"
      ]
    }
  },
  {
    "unicode": "f387",
    "label": "Code Merge",
    "name": "code-merge",
    "styles": [
      "fas",
      "far",
      "fal"
    ],
    "membership": {
      "free": [],
      "pro": [
        "fas",
        "far",
        "fal"
      ]
    }
  },
  {
    "unicode": "f386",
    "label": "Code Commit",
    "name": "code-commit",
    "styles": [
      "fas",
      "far",
      "fal"
    ],
    "membership": {
      "free": [],
      "pro": [
        "fas",
        "far",
        "fal"
      ]
    }
  },
  {
    "unicode": "f126",
    "label": "Code Branch",
    "name": "code-branch",
    "styles": [
      "fas",
      "far",
      "fal"
    ],
    "membership": {
      "free": [
        "fas"
      ],
      "pro": [
        "fas",
        "far",
        "fal"
      ]
    }
  },
  {
    "unicode": "f121",
    "label": "Code",
    "name": "code",
    "styles": [
      "fas",
      "far",
      "fal"
    ],
    "membership": {
      "free": [
        "fas"
      ],
      "pro": [
        "fas",
        "far",
        "fal"
      ]
    }
  },
  {
    "unicode": "f561",
    "label": "Cocktail",
    "name": "cocktail",
    "styles": [
      "fas",
      "far",
      "fal"
    ],
    "membership": {
      "free": [
        "fas"
      ],
      "pro": [
        "fas",
        "far",
        "fal"
      ]
    }
  },
  {
    "unicode": "f327",
    "label": "Club",
    "name": "club",
    "styles": [
      "fas",
      "far",
      "fal"
    ],
    "membership": {
      "free": [],
      "pro": [
        "fas",
        "far",
        "fal"
      ]
    }
  },
  {
    "unicode": "f385",
    "label": "cloudversify",
    "name": "cloudversify",
    "styles": [
      "fab"
    ],
    "membership": {
      "free": [
        "fab"
      ],
      "pro": [
        "fab"
      ]
    }
  },
  {
    "unicode": "f384",
    "label": "Cloudsmith",
    "name": "cloudsmith",
    "styles": [
      "fab"
    ],
    "membership": {
      "free": [
        "fab"
      ],
      "pro": [
        "fab"
      ]
    }
  },
  {
    "unicode": "f383",
    "label": "cloudscale.ch",
    "name": "cloudscale",
    "styles": [
      "fab"
    ],
    "membership": {
      "free": [
        "fab"
      ],
      "pro": [
        "fab"
      ]
    }
  },
  {
    "unicode": "f382",
    "label": "Alternate Cloud Upload",
    "name": "cloud-upload-alt",
    "styles": [
      "fas",
      "far",
      "fal"
    ],
    "membership": {
      "free": [
        "fas"
      ],
      "pro": [
        "fas",
        "far",
        "fal"
      ]
    }
  },
  {
    "unicode": "f0ee",
    "label": "Cloud Upload",
    "name": "cloud-upload",
    "styles": [
      "fas",
      "far",
      "fal"
    ],
    "membership": {
      "free": [],
      "pro": [
        "fas",
        "far",
        "fal"
      ]
    }
  },
  {
    "unicode": "f381",
    "label": "Alternate Cloud Download",
    "name": "cloud-download-alt",
    "styles": [
      "fas",
      "far",
      "fal"
    ],
    "membership": {
      "free": [
        "fas"
      ],
      "pro": [
        "fas",
        "far",
        "fal"
      ]
    }
  },
  {
    "unicode": "f0ed",
    "label": "Cloud Download",
    "name": "cloud-download",
    "styles": [
      "fas",
      "far",
      "fal"
    ],
    "membership": {
      "free": [],
      "pro": [
        "fas",
        "far",
        "fal"
      ]
    }
  },
  {
    "unicode": "f0c2",
    "label": "Cloud",
    "name": "cloud",
    "styles": [
      "fas",
      "far",
      "fal"
    ],
    "membership": {
      "free": [
        "fas"
      ],
      "pro": [
        "fas",
        "far",
        "fal"
      ]
    }
  },
  {
    "unicode": "f20a",
    "label": "Closed Captioning",
    "name": "closed-captioning",
    "styles": [
      "fas",
      "far",
      "fal"
    ],
    "membership": {
      "free": [
        "fas",
        "far"
      ],
      "pro": [
        "fas",
        "far",
        "fal"
      ]
    }
  },
  {
    "unicode": "f24d",
    "label": "Clone",
    "name": "clone",
    "styles": [
      "fas",
      "far",
      "fal"
    ],
    "membership": {
      "free": [
        "fas",
        "far"
      ],
      "pro": [
        "fas",
        "far",
        "fal"
      ]
    }
  },
  {
    "unicode": "f017",
    "label": "Clock",
    "name": "clock",
    "styles": [
      "fas",
      "far",
      "fal"
    ],
    "membership": {
      "free": [
        "fas",
        "far"
      ],
      "pro": [
        "fas",
        "far",
        "fal"
      ]
    }
  },
  {
    "unicode": "f5e8",
    "label": "Clipboard Prescription",
    "name": "clipboard-prescription",
    "styles": [
      "fas",
      "far",
      "fal"
    ],
    "membership": {
      "free": [],
      "pro": [
        "fas",
        "far",
        "fal"
      ]
    }
  },
  {
    "unicode": "f46d",
    "label": "Clipboard List",
    "name": "clipboard-list",
    "styles": [
      "fas",
      "far",
      "fal"
    ],
    "membership": {
      "free": [
        "fas"
      ],
      "pro": [
        "fas",
        "far",
        "fal"
      ]
    }
  },
  {
    "unicode": "f46c",
    "label": "Clipboard Check",
    "name": "clipboard-check",
    "styles": [
      "fas",
      "far",
      "fal"
    ],
    "membership": {
      "free": [
        "fas"
      ],
      "pro": [
        "fas",
        "far",
        "fal"
      ]
    }
  },
  {
    "unicode": "f328",
    "label": "Clipboard",
    "name": "clipboard",
    "styles": [
      "fas",
      "far",
      "fal"
    ],
    "membership": {
      "free": [
        "fas",
        "far"
      ],
      "pro": [
        "fas",
        "far",
        "fal"
      ]
    }
  },
  {
    "unicode": "f1ce",
    "label": "Circle Notched",
    "name": "circle-notch",
    "styles": [
      "fas",
      "far",
      "fal"
    ],
    "membership": {
      "free": [
        "fas"
      ],
      "pro": [
        "fas",
        "far",
        "fal"
      ]
    }
  },
  {
    "unicode": "f111",
    "label": "Circle",
    "name": "circle",
    "styles": [
      "fas",
      "far",
      "fal"
    ],
    "membership": {
      "free": [
        "fas",
        "far"
      ],
      "pro": [
        "fas",
        "far",
        "fal"
      ]
    }
  },
  {
    "unicode": "f51d",
    "label": "Church",
    "name": "church",
    "styles": [
      "fas",
      "far",
      "fal"
    ],
    "membership": {
      "free": [
        "fas"
      ],
      "pro": [
        "fas",
        "far",
        "fal"
      ]
    }
  },
  {
    "unicode": "f268",
    "label": "Chrome",
    "name": "chrome",
    "styles": [
      "fab"
    ],
    "membership": {
      "free": [
        "fab"
      ],
      "pro": [
        "fab"
      ]
    }
  },
  {
    "unicode": "f1ae",
    "label": "Child",
    "name": "child",
    "styles": [
      "fas",
      "far",
      "fal"
    ],
    "membership": {
      "free": [
        "fas"
      ],
      "pro": [
        "fas",
        "far",
        "fal"
      ]
    }
  },
  {
    "unicode": "f077",
    "label": "chevron-up",
    "name": "chevron-up",
    "styles": [
      "fas",
      "far",
      "fal"
    ],
    "membership": {
      "free": [
        "fas"
      ],
      "pro": [
        "fas",
        "far",
        "fal"
      ]
    }
  },
  {
    "unicode": "f32c",
    "label": "Chevron Square Up",
    "name": "chevron-square-up",
    "styles": [
      "fas",
      "far",
      "fal"
    ],
    "membership": {
      "free": [],
      "pro": [
        "fas",
        "far",
        "fal"
      ]
    }
  },
  {
    "unicode": "f32b",
    "label": "Chevron Square Right",
    "name": "chevron-square-right",
    "styles": [
      "fas",
      "far",
      "fal"
    ],
    "membership": {
      "free": [],
      "pro": [
        "fas",
        "far",
        "fal"
      ]
    }
  },
  {
    "unicode": "f32a",
    "label": "Chevron Square Left",
    "name": "chevron-square-left",
    "styles": [
      "fas",
      "far",
      "fal"
    ],
    "membership": {
      "free": [],
      "pro": [
        "fas",
        "far",
        "fal"
      ]
    }
  },
  {
    "unicode": "f329",
    "label": "Chevron Square Down",
    "name": "chevron-square-down",
    "styles": [
      "fas",
      "far",
      "fal"
    ],
    "membership": {
      "free": [],
      "pro": [
        "fas",
        "far",
        "fal"
      ]
    }
  },
  {
    "unicode": "f054",
    "label": "chevron-right",
    "name": "chevron-right",
    "styles": [
      "fas",
      "far",
      "fal"
    ],
    "membership": {
      "free": [
        "fas"
      ],
      "pro": [
        "fas",
        "far",
        "fal"
      ]
    }
  },
  {
    "unicode": "f053",
    "label": "chevron-left",
    "name": "chevron-left",
    "styles": [
      "fas",
      "far",
      "fal"
    ],
    "membership": {
      "free": [
        "fas"
      ],
      "pro": [
        "fas",
        "far",
        "fal"
      ]
    }
  },
  {
    "unicode": "f078",
    "label": "chevron-down",
    "name": "chevron-down",
    "styles": [
      "fas",
      "far",
      "fal"
    ],
    "membership": {
      "free": [
        "fas"
      ],
      "pro": [
        "fas",
        "far",
        "fal"
      ]
    }
  },
  {
    "unicode": "f325",
    "label": "Chevron Double Up",
    "name": "chevron-double-up",
    "styles": [
      "fas",
      "far",
      "fal"
    ],
    "membership": {
      "free": [],
      "pro": [
        "fas",
        "far",
        "fal"
      ]
    }
  },
  {
    "unicode": "f324",
    "label": "Chevron Double Right",
    "name": "chevron-double-right",
    "styles": [
      "fas",
      "far",
      "fal"
    ],
    "membership": {
      "free": [],
      "pro": [
        "fas",
        "far",
        "fal"
      ]
    }
  },
  {
    "unicode": "f323",
    "label": "Chevron Double Left",
    "name": "chevron-double-left",
    "styles": [
      "fas",
      "far",
      "fal"
    ],
    "membership": {
      "free": [],
      "pro": [
        "fas",
        "far",
        "fal"
      ]
    }
  },
  {
    "unicode": "f322",
    "label": "Chevron Double Down",
    "name": "chevron-double-down",
    "styles": [
      "fas",
      "far",
      "fal"
    ],
    "membership": {
      "free": [],
      "pro": [
        "fas",
        "far",
        "fal"
      ]
    }
  },
  {
    "unicode": "f139",
    "label": "Chevron Circle Up",
    "name": "chevron-circle-up",
    "styles": [
      "fas",
      "far",
      "fal"
    ],
    "membership": {
      "free": [
        "fas"
      ],
      "pro": [
        "fas",
        "far",
        "fal"
      ]
    }
  },
  {
    "unicode": "f138",
    "label": "Chevron Circle Right",
    "name": "chevron-circle-right",
    "styles": [
      "fas",
      "far",
      "fal"
    ],
    "membership": {
      "free": [
        "fas"
      ],
      "pro": [
        "fas",
        "far",
        "fal"
      ]
    }
  },
  {
    "unicode": "f137",
    "label": "Chevron Circle Left",
    "name": "chevron-circle-left",
    "styles": [
      "fas",
      "far",
      "fal"
    ],
    "membership": {
      "free": [
        "fas"
      ],
      "pro": [
        "fas",
        "far",
        "fal"
      ]
    }
  },
  {
    "unicode": "f13a",
    "label": "Chevron Circle Down",
    "name": "chevron-circle-down",
    "styles": [
      "fas",
      "far",
      "fal"
    ],
    "membership": {
      "free": [
        "fas"
      ],
      "pro": [
        "fas",
        "far",
        "fal"
      ]
    }
  },
  {
    "unicode": "f448",
    "label": "Alternate Chess Rook",
    "name": "chess-rook-alt",
    "styles": [
      "fas",
      "far",
      "fal"
    ],
    "membership": {
      "free": [],
      "pro": [
        "fas",
        "far",
        "fal"
      ]
    }
  },
  {
    "unicode": "f447",
    "label": "Chess Rook",
    "name": "chess-rook",
    "styles": [
      "fas",
      "far",
      "fal"
    ],
    "membership": {
      "free": [
        "fas"
      ],
      "pro": [
        "fas",
        "far",
        "fal"
      ]
    }
  },
  {
    "unicode": "f446",
    "label": "Alternate Chess Queen",
    "name": "chess-queen-alt",
    "styles": [
      "fas",
      "far",
      "fal"
    ],
    "membership": {
      "free": [],
      "pro": [
        "fas",
        "far",
        "fal"
      ]
    }
  },
  {
    "unicode": "f445",
    "label": "Chess Queen",
    "name": "chess-queen",
    "styles": [
      "fas",
      "far",
      "fal"
    ],
    "membership": {
      "free": [
        "fas"
      ],
      "pro": [
        "fas",
        "far",
        "fal"
      ]
    }
  },
  {
    "unicode": "f444",
    "label": "Alternate Chess Pawn",
    "name": "chess-pawn-alt",
    "styles": [
      "fas",
      "far",
      "fal"
    ],
    "membership": {
      "free": [],
      "pro": [
        "fas",
        "far",
        "fal"
      ]
    }
  },
  {
    "unicode": "f443",
    "label": "Chess Pawn",
    "name": "chess-pawn",
    "styles": [
      "fas",
      "far",
      "fal"
    ],
    "membership": {
      "free": [
        "fas"
      ],
      "pro": [
        "fas",
        "far",
        "fal"
      ]
    }
  },
  {
    "unicode": "f442",
    "label": "Alternate Chess Knight",
    "name": "chess-knight-alt",
    "styles": [
      "fas",
      "far",
      "fal"
    ],
    "membership": {
      "free": [],
      "pro": [
        "fas",
        "far",
        "fal"
      ]
    }
  },
  {
    "unicode": "f441",
    "label": "Chess Knight",
    "name": "chess-knight",
    "styles": [
      "fas",
      "far",
      "fal"
    ],
    "membership": {
      "free": [
        "fas"
      ],
      "pro": [
        "fas",
        "far",
        "fal"
      ]
    }
  },
  {
    "unicode": "f440",
    "label": "Alternate Chess King",
    "name": "chess-king-alt",
    "styles": [
      "fas",
      "far",
      "fal"
    ],
    "membership": {
      "free": [],
      "pro": [
        "fas",
        "far",
        "fal"
      ]
    }
  },
  {
    "unicode": "f43f",
    "label": "Chess King",
    "name": "chess-king",
    "styles": [
      "fas",
      "far",
      "fal"
    ],
    "membership": {
      "free": [
        "fas"
      ],
      "pro": [
        "fas",
        "far",
        "fal"
      ]
    }
  },
  {
    "unicode": "f43e",
    "label": "Alternate Chess Clock",
    "name": "chess-clock-alt",
    "styles": [
      "fas",
      "far",
      "fal"
    ],
    "membership": {
      "free": [],
      "pro": [
        "fas",
        "far",
        "fal"
      ]
    }
  },
  {
    "unicode": "f43d",
    "label": "Chess Clock",
    "name": "chess-clock",
    "styles": [
      "fas",
      "far",
      "fal"
    ],
    "membership": {
      "free": [],
      "pro": [
        "fas",
        "far",
        "fal"
      ]
    }
  },
  {
    "unicode": "f43c",
    "label": "Chess Board",
    "name": "chess-board",
    "styles": [
      "fas",
      "far",
      "fal"
    ],
    "membership": {
      "free": [
        "fas"
      ],
      "pro": [
        "fas",
        "far",
        "fal"
      ]
    }
  },
  {
    "unicode": "f43b",
    "label": "Alternate Chess Bishop",
    "name": "chess-bishop-alt",
    "styles": [
      "fas",
      "far",
      "fal"
    ],
    "membership": {
      "free": [],
      "pro": [
        "fas",
        "far",
        "fal"
      ]
    }
  },
  {
    "unicode": "f43a",
    "label": "Chess Bishop",
    "name": "chess-bishop",
    "styles": [
      "fas",
      "far",
      "fal"
    ],
    "membership": {
      "free": [
        "fas"
      ],
      "pro": [
        "fas",
        "far",
        "fal"
      ]
    }
  },
  {
    "unicode": "f439",
    "label": "Chess",
    "name": "chess",
    "styles": [
      "fas",
      "far",
      "fal"
    ],
    "membership": {
      "free": [
        "fas"
      ],
      "pro": [
        "fas",
        "far",
        "fal"
      ]
    }
  },
  {
    "unicode": "f14a",
    "label": "Check Square",
    "name": "check-square",
    "styles": [
      "fas",
      "far",
      "fal"
    ],
    "membership": {
      "free": [
        "fas",
        "far"
      ],
      "pro": [
        "fas",
        "far",
        "fal"
      ]
    }
  },
  {
    "unicode": "f560",
    "label": "Check Double",
    "name": "check-double",
    "styles": [
      "fas",
      "far",
      "fal"
    ],
    "membership": {
      "free": [
        "fas"
      ],
      "pro": [
        "fas",
        "far",
        "fal"
      ]
    }
  },
  {
    "unicode": "f058",
    "label": "Check Circle",
    "name": "check-circle",
    "styles": [
      "fas",
      "far",
      "fal"
    ],
    "membership": {
      "free": [
        "fas",
        "far"
      ],
      "pro": [
        "fas",
        "far",
        "fal"
      ]
    }
  },
  {
    "unicode": "f00c",
    "label": "Check",
    "name": "check",
    "styles": [
      "fas",
      "far",
      "fal"
    ],
    "membership": {
      "free": [
        "fas"
      ],
      "pro": [
        "fas",
        "far",
        "fal"
      ]
    }
  },
  {
    "unicode": "f200",
    "label": "Pie Chart",
    "name": "chart-pie",
    "styles": [
      "fas",
      "far",
      "fal"
    ],
    "membership": {
      "free": [
        "fas"
      ],
      "pro": [
        "fas",
        "far",
        "fal"
      ]
    }
  },
  {
    "unicode": "f201",
    "label": "Line Chart",
    "name": "chart-line",
    "styles": [
      "fas",
      "far",
      "fal"
    ],
    "membership": {
      "free": [
        "fas"
      ],
      "pro": [
        "fas",
        "far",
        "fal"
      ]
    }
  },
  {
    "unicode": "f080",
    "label": "Bar Chart",
    "name": "chart-bar",
    "styles": [
      "fas",
      "far",
      "fal"
    ],
    "membership": {
      "free": [
        "fas",
        "far"
      ],
      "pro": [
        "fas",
        "far",
        "fal"
      ]
    }
  },
  {
    "unicode": "f1fe",
    "label": "Area Chart",
    "name": "chart-area",
    "styles": [
      "fas",
      "far",
      "fal"
    ],
    "membership": {
      "free": [
        "fas"
      ],
      "pro": [
        "fas",
        "far",
        "fal"
      ]
    }
  },
  {
    "unicode": "f5e7",
    "label": "Charging Station",
    "name": "charging-station",
    "styles": [
      "fas",
      "far",
      "fal"
    ],
    "membership": {
      "free": [
        "fas"
      ],
      "pro": [
        "fas",
        "far",
        "fal"
      ]
    }
  },
  {
    "unicode": "f51c",
    "label": "Chalkboard Teacher",
    "name": "chalkboard-teacher",
    "styles": [
      "fas",
      "far",
      "fal"
    ],
    "membership": {
      "free": [
        "fas"
      ],
      "pro": [
        "fas",
        "far",
        "fal"
      ]
    }
  },
  {
    "unicode": "f51b",
    "label": "Chalkboard",
    "name": "chalkboard",
    "styles": [
      "fas",
      "far",
      "fal"
    ],
    "membership": {
      "free": [
        "fas"
      ],
      "pro": [
        "fas",
        "far",
        "fal"
      ]
    }
  },
  {
    "unicode": "f0a3",
    "label": "certificate",
    "name": "certificate",
    "styles": [
      "fas",
      "far",
      "fal"
    ],
    "membership": {
      "free": [
        "fas"
      ],
      "pro": [
        "fas",
        "far",
        "fal"
      ]
    }
  },
  {
    "unicode": "f380",
    "label": "Centercode",
    "name": "centercode",
    "styles": [
      "fab"
    ],
    "membership": {
      "free": [
        "fab"
      ],
      "pro": [
        "fab"
      ]
    }
  },
  {
    "unicode": "f1f0",
    "label": "Visa Credit Card",
    "name": "cc-visa",
    "styles": [
      "fab"
    ],
    "membership": {
      "free": [
        "fab"
      ],
      "pro": [
        "fab"
      ]
    }
  },
  {
    "unicode": "f1f5",
    "label": "Stripe Credit Card",
    "name": "cc-stripe",
    "styles": [
      "fab"
    ],
    "membership": {
      "free": [
        "fab"
      ],
      "pro": [
        "fab"
      ]
    }
  },
  {
    "unicode": "f1f4",
    "label": "Paypal Credit Card",
    "name": "cc-paypal",
    "styles": [
      "fab"
    ],
    "membership": {
      "free": [
        "fab"
      ],
      "pro": [
        "fab"
      ]
    }
  },
  {
    "unicode": "f1f1",
    "label": "MasterCard Credit Card",
    "name": "cc-mastercard",
    "styles": [
      "fab"
    ],
    "membership": {
      "free": [
        "fab"
      ],
      "pro": [
        "fab"
      ]
    }
  },
  {
    "unicode": "f24b",
    "label": "JCB Credit Card",
    "name": "cc-jcb",
    "styles": [
      "fab"
    ],
    "membership": {
      "free": [
        "fab"
      ],
      "pro": [
        "fab"
      ]
    }
  },
  {
    "unicode": "f1f2",
    "label": "Discover Credit Card",
    "name": "cc-discover",
    "styles": [
      "fab"
    ],
    "membership": {
      "free": [
        "fab"
      ],
      "pro": [
        "fab"
      ]
    }
  },
  {
    "unicode": "f24c",
    "label": "Diner's Club Credit Card",
    "name": "cc-diners-club",
    "styles": [
      "fab"
    ],
    "membership": {
      "free": [
        "fab"
      ],
      "pro": [
        "fab"
      ]
    }
  },
  {
    "unicode": "f416",
    "label": "Apple Pay Credit Card",
    "name": "cc-apple-pay",
    "styles": [
      "fab"
    ],
    "membership": {
      "free": [
        "fab"
      ],
      "pro": [
        "fab"
      ]
    }
  },
  {
    "unicode": "f1f3",
    "label": "American Express Credit Card",
    "name": "cc-amex",
    "styles": [
      "fab"
    ],
    "membership": {
      "free": [
        "fab"
      ],
      "pro": [
        "fab"
      ]
    }
  },
  {
    "unicode": "f42d",
    "label": "Amazon Pay Credit Card",
    "name": "cc-amazon-pay",
    "styles": [
      "fab"
    ],
    "membership": {
      "free": [
        "fab"
      ],
      "pro": [
        "fab"
      ]
    }
  },
  {
    "unicode": "f217",
    "label": "Add to Shopping Cart",
    "name": "cart-plus",
    "styles": [
      "fas",
      "far",
      "fal"
    ],
    "membership": {
      "free": [
        "fas"
      ],
      "pro": [
        "fas",
        "far",
        "fal"
      ]
    }
  },
  {
    "unicode": "f218",
    "label": "Shopping Cart Arrow Down",
    "name": "cart-arrow-down",
    "styles": [
      "fas",
      "far",
      "fal"
    ],
    "membership": {
      "free": [
        "fas"
      ],
      "pro": [
        "fas",
        "far",
        "fal"
      ]
    }
  },
  {
    "unicode": "f0d8",
    "label": "Caret Up",
    "name": "caret-up",
    "styles": [
      "fas",
      "far",
      "fal"
    ],
    "membership": {
      "free": [
        "fas"
      ],
      "pro": [
        "fas",
        "far",
        "fal"
      ]
    }
  },
  {
    "unicode": "f151",
    "label": "Caret Square Up",
    "name": "caret-square-up",
    "styles": [
      "fas",
      "far",
      "fal"
    ],
    "membership": {
      "free": [
        "fas",
        "far"
      ],
      "pro": [
        "fas",
        "far",
        "fal"
      ]
    }
  },
  {
    "unicode": "f152",
    "label": "Caret Square Right",
    "name": "caret-square-right",
    "styles": [
      "fas",
      "far",
      "fal"
    ],
    "membership": {
      "free": [
        "fas",
        "far"
      ],
      "pro": [
        "fas",
        "far",
        "fal"
      ]
    }
  },
  {
    "unicode": "f191",
    "label": "Caret Square Left",
    "name": "caret-square-left",
    "styles": [
      "fas",
      "far",
      "fal"
    ],
    "membership": {
      "free": [
        "fas",
        "far"
      ],
      "pro": [
        "fas",
        "far",
        "fal"
      ]
    }
  },
  {
    "unicode": "f150",
    "label": "Caret Square Down",
    "name": "caret-square-down",
    "styles": [
      "fas",
      "far",
      "fal"
    ],
    "membership": {
      "free": [
        "fas",
        "far"
      ],
      "pro": [
        "fas",
        "far",
        "fal"
      ]
    }
  },
  {
    "unicode": "f0da",
    "label": "Caret Right",
    "name": "caret-right",
    "styles": [
      "fas",
      "far",
      "fal"
    ],
    "membership": {
      "free": [
        "fas"
      ],
      "pro": [
        "fas",
        "far",
        "fal"
      ]
    }
  },
  {
    "unicode": "f0d9",
    "label": "Caret Left",
    "name": "caret-left",
    "styles": [
      "fas",
      "far",
      "fal"
    ],
    "membership": {
      "free": [
        "fas"
      ],
      "pro": [
        "fas",
        "far",
        "fal"
      ]
    }
  },
  {
    "unicode": "f0d7",
    "label": "Caret Down",
    "name": "caret-down",
    "styles": [
      "fas",
      "far",
      "fal"
    ],
    "membership": {
      "free": [
        "fas"
      ],
      "pro": [
        "fas",
        "far",
        "fal"
      ]
    }
  },
  {
    "unicode": "f331",
    "label": "Caret Circle Up",
    "name": "caret-circle-up",
    "styles": [
      "fas",
      "far",
      "fal"
    ],
    "membership": {
      "free": [],
      "pro": [
        "fas",
        "far",
        "fal"
      ]
    }
  },
  {
    "unicode": "f330",
    "label": "Caret Circle Right",
    "name": "caret-circle-right",
    "styles": [
      "fas",
      "far",
      "fal"
    ],
    "membership": {
      "free": [],
      "pro": [
        "fas",
        "far",
        "fal"
      ]
    }
  },
  {
    "unicode": "f32e",
    "label": "Caret Circle Left",
    "name": "caret-circle-left",
    "styles": [
      "fas",
      "far",
      "fal"
    ],
    "membership": {
      "free": [],
      "pro": [
        "fas",
        "far",
        "fal"
      ]
    }
  },
  {
    "unicode": "f32d",
    "label": "Caret Circle Down",
    "name": "caret-circle-down",
    "styles": [
      "fas",
      "far",
      "fal"
    ],
    "membership": {
      "free": [],
      "pro": [
        "fas",
        "far",
        "fal"
      ]
    }
  },
  {
    "unicode": "f5e6",
    "label": "Car Wash",
    "name": "car-wash",
    "styles": [
      "fas",
      "far",
      "fal"
    ],
    "membership": {
      "free": [],
      "pro": [
        "fas",
        "far",
        "fal"
      ]
    }
  },
  {
    "unicode": "f5e5",
    "label": "Car Tilt",
    "name": "car-tilt",
    "styles": [
      "fas",
      "far",
      "fal"
    ],
    "membership": {
      "free": [],
      "pro": [
        "fas",
        "far",
        "fal"
      ]
    }
  },
  {
    "unicode": "f5e4",
    "label": "Car Side",
    "name": "car-side",
    "styles": [
      "fas",
      "far",
      "fal"
    ],
    "membership": {
      "free": [
        "fas"
      ],
      "pro": [
        "fas",
        "far",
        "fal"
      ]
    }
  },
  {
    "unicode": "f5e3",
    "label": "Car Mechanic",
    "name": "car-mechanic",
    "styles": [
      "fas",
      "far",
      "fal"
    ],
    "membership": {
      "free": [],
      "pro": [
        "fas",
        "far",
        "fal"
      ]
    }
  },
  {
    "unicode": "f5e2",
    "label": "Car Garage",
    "name": "car-garage",
    "styles": [
      "fas",
      "far",
      "fal"
    ],
    "membership": {
      "free": [],
      "pro": [
        "fas",
        "far",
        "fal"
      ]
    }
  },
  {
    "unicode": "f5e1",
    "label": "Car Crash",
    "name": "car-crash",
    "styles": [
      "fas",
      "far",
      "fal"
    ],
    "membership": {
      "free": [
        "fas"
      ],
      "pro": [
        "fas",
        "far",
        "fal"
      ]
    }
  },
  {
    "unicode": "f5e0",
    "label": "Car Bump",
    "name": "car-bump",
    "styles": [
      "fas",
      "far",
      "fal"
    ],
    "membership": {
      "free": [],
      "pro": [
        "fas",
        "far",
        "fal"
      ]
    }
  },
  {
    "unicode": "f5df",
    "label": "Car Battery",
    "name": "car-battery",
    "styles": [
      "fas",
      "far",
      "fal"
    ],
    "membership": {
      "free": [
        "fas"
      ],
      "pro": [
        "fas",
        "far",
        "fal"
      ]
    }
  },
  {
    "unicode": "f5de",
    "label": "Car Alt",
    "name": "car-alt",
    "styles": [
      "fas",
      "far",
      "fal"
    ],
    "membership": {
      "free": [
        "fas"
      ],
      "pro": [
        "fas",
        "far",
        "fal"
      ]
    }
  },
  {
    "unicode": "f1b9",
    "label": "Car",
    "name": "car",
    "styles": [
      "fas",
      "far",
      "fal"
    ],
    "membership": {
      "free": [
        "fas"
      ],
      "pro": [
        "fas",
        "far",
        "fal"
      ]
    }
  },
  {
    "unicode": "f46b",
    "label": "Capsules",
    "name": "capsules",
    "styles": [
      "fas",
      "far",
      "fal"
    ],
    "membership": {
      "free": [
        "fas"
      ],
      "pro": [
        "fas",
        "far",
        "fal"
      ]
    }
  },
  {
    "unicode": "f55f",
    "label": "Cannabis",
    "name": "cannabis",
    "styles": [
      "fas",
      "far",
      "fal"
    ],
    "membership": {
      "free": [
        "fas"
      ],
      "pro": [
        "fas",
        "far",
        "fal"
      ]
    }
  },
  {
    "unicode": "f083",
    "label": "Retro Camera",
    "name": "camera-retro",
    "styles": [
      "fas",
      "far",
      "fal"
    ],
    "membership": {
      "free": [
        "fas"
      ],
      "pro": [
        "fas",
        "far",
        "fal"
      ]
    }
  },
  {
    "unicode": "f332",
    "label": "Alternate Camera",
    "name": "camera-alt",
    "styles": [
      "fas",
      "far",
      "fal"
    ],
    "membership": {
      "free": [],
      "pro": [
        "fas",
        "far",
        "fal"
      ]
    }
  },
  {
    "unicode": "f030",
    "label": "camera",
    "name": "camera",
    "styles": [
      "fas",
      "far",
      "fal"
    ],
    "membership": {
      "free": [
        "fas"
      ],
      "pro": [
        "fas",
        "far",
        "fal"
      ]
    }
  },
  {
    "unicode": "f273",
    "label": "Calendar Times",
    "name": "calendar-times",
    "styles": [
      "fas",
      "far",
      "fal"
    ],
    "membership": {
      "free": [
        "fas",
        "far"
      ],
      "pro": [
        "fas",
        "far",
        "fal"
      ]
    }
  },
  {
    "unicode": "f271",
    "label": "Calendar Plus",
    "name": "calendar-plus",
    "styles": [
      "fas",
      "far",
      "fal"
    ],
    "membership": {
      "free": [
        "fas",
        "far"
      ],
      "pro": [
        "fas",
        "far",
        "fal"
      ]
    }
  },
  {
    "unicode": "f272",
    "label": "Calendar Minus",
    "name": "calendar-minus",
    "styles": [
      "fas",
      "far",
      "fal"
    ],
    "membership": {
      "free": [
        "fas",
        "far"
      ],
      "pro": [
        "fas",
        "far",
        "fal"
      ]
    }
  },
  {
    "unicode": "f334",
    "label": "Calendar Exclamation",
    "name": "calendar-exclamation",
    "styles": [
      "fas",
      "far",
      "fal"
    ],
    "membership": {
      "free": [],
      "pro": [
        "fas",
        "far",
        "fal"
      ]
    }
  },
  {
    "unicode": "f333",
    "label": "Calendar Edit",
    "name": "calendar-edit",
    "styles": [
      "fas",
      "far",
      "fal"
    ],
    "membership": {
      "free": [],
      "pro": [
        "fas",
        "far",
        "fal"
      ]
    }
  },
  {
    "unicode": "f274",
    "label": "Calendar Check",
    "name": "calendar-check",
    "styles": [
      "fas",
      "far",
      "fal"
    ],
    "membership": {
      "free": [
        "fas",
        "far"
      ],
      "pro": [
        "fas",
        "far",
        "fal"
      ]
    }
  },
  {
    "unicode": "f073",
    "label": "Alternate Calendar",
    "name": "calendar-alt",
    "styles": [
      "fas",
      "far",
      "fal"
    ],
    "membership": {
      "free": [
        "fas",
        "far"
      ],
      "pro": [
        "fas",
        "far",
        "fal"
      ]
    }
  },
  {
    "unicode": "f133",
    "label": "Calendar",
    "name": "calendar",
    "styles": [
      "fas",
      "far",
      "fal"
    ],
    "membership": {
      "free": [
        "fas",
        "far"
      ],
      "pro": [
        "fas",
        "far",
        "fal"
      ]
    }
  },
  {
    "unicode": "f1ec",
    "label": "Calculator",
    "name": "calculator",
    "styles": [
      "fas",
      "far",
      "fal"
    ],
    "membership": {
      "free": [
        "fas"
      ],
      "pro": [
        "fas",
        "far",
        "fal"
      ]
    }
  },
  {
    "unicode": "f20d",
    "label": "BuySellAds",
    "name": "buysellads",
    "styles": [
      "fab"
    ],
    "membership": {
      "free": [
        "fab"
      ],
      "pro": [
        "fab"
      ]
    }
  },
  {
    "unicode": "f5dd",
    "label": "Bus School",
    "name": "bus-school",
    "styles": [
      "fas",
      "far",
      "fal"
    ],
    "membership": {
      "free": [],
      "pro": [
        "fas",
        "far",
        "fal"
      ]
    }
  },
  {
    "unicode": "f55e",
    "label": "Bus Alt",
    "name": "bus-alt",
    "styles": [
      "fas",
      "far",
      "fal"
    ],
    "membership": {
      "free": [
        "fas"
      ],
      "pro": [
        "fas",
        "far",
        "fal"
      ]
    }
  },
  {
    "unicode": "f207",
    "label": "Bus",
    "name": "bus",
    "styles": [
      "fas",
      "far",
      "fal"
    ],
    "membership": {
      "free": [
        "fas"
      ],
      "pro": [
        "fas",
        "far",
        "fal"
      ]
    }
  },
  {
    "unicode": "f37f",
    "label": "Büromöbel-Experte GmbH & Co. KG.",
    "name": "buromobelexperte",
    "styles": [
      "fab"
    ],
    "membership": {
      "free": [
        "fab"
      ],
      "pro": [
        "fab"
      ]
    }
  },
  {
    "unicode": "f46a",
    "label": "Burn",
    "name": "burn",
    "styles": [
      "fas",
      "far",
      "fal"
    ],
    "membership": {
      "free": [
        "fas"
      ],
      "pro": [
        "fas",
        "far",
        "fal"
      ]
    }
  },
  {
    "unicode": "f140",
    "label": "Bullseye",
    "name": "bullseye",
    "styles": [
      "fas",
      "far",
      "fal"
    ],
    "membership": {
      "free": [
        "fas"
      ],
      "pro": [
        "fas",
        "far",
        "fal"
      ]
    }
  },
  {
    "unicode": "f0a1",
    "label": "bullhorn",
    "name": "bullhorn",
    "styles": [
      "fas",
      "far",
      "fal"
    ],
    "membership": {
      "free": [
        "fas"
      ],
      "pro": [
        "fas",
        "far",
        "fal"
      ]
    }
  },
  {
    "unicode": "f1ad",
    "label": "Building",
    "name": "building",
    "styles": [
      "fas",
      "far",
      "fal"
    ],
    "membership": {
      "free": [
        "fas",
        "far"
      ],
      "pro": [
        "fas",
        "far",
        "fal"
      ]
    }
  },
  {
    "unicode": "f188",
    "label": "Bug",
    "name": "bug",
    "styles": [
      "fas",
      "far",
      "fal"
    ],
    "membership": {
      "free": [
        "fas"
      ],
      "pro": [
        "fas",
        "far",
        "fal"
      ]
    }
  },
  {
    "unicode": "f15a",
    "label": "BTC",
    "name": "btc",
    "styles": [
      "fab"
    ],
    "membership": {
      "free": [
        "fab"
      ],
      "pro": [
        "fab"
      ]
    }
  },
  {
    "unicode": "f55d",
    "label": "Brush",
    "name": "brush",
    "styles": [
      "fas",
      "far",
      "fal"
    ],
    "membership": {
      "free": [
        "fas"
      ],
      "pro": [
        "fas",
        "far",
        "fal"
      ]
    }
  },
  {
    "unicode": "f37e",
    "label": "Browser",
    "name": "browser",
    "styles": [
      "fas",
      "far",
      "fal"
    ],
    "membership": {
      "free": [],
      "pro": [
        "fas",
        "far",
        "fal"
      ]
    }
  },
  {
    "unicode": "f51a",
    "label": "Broom",
    "name": "broom",
    "styles": [
      "fas",
      "far",
      "fal"
    ],
    "membership": {
      "free": [
        "fas"
      ],
      "pro": [
        "fas",
        "far",
        "fal"
      ]
    }
  },
  {
    "unicode": "f519",
    "label": "Broadcast Tower",
    "name": "broadcast-tower",
    "styles": [
      "fas",
      "far",
      "fal"
    ],
    "membership": {
      "free": [
        "fas"
      ],
      "pro": [
        "fas",
        "far",
        "fal"
      ]
    }
  },
  {
    "unicode": "f469",
    "label": "Medical Briefcase",
    "name": "briefcase-medical",
    "styles": [
      "fas",
      "far",
      "fal"
    ],
    "membership": {
      "free": [
        "fas"
      ],
      "pro": [
        "fas",
        "far",
        "fal"
      ]
    }
  },
  {
    "unicode": "f0b1",
    "label": "Briefcase",
    "name": "briefcase",
    "styles": [
      "fas",
      "far",
      "fal"
    ],
    "membership": {
      "free": [
        "fas"
      ],
      "pro": [
        "fas",
        "far",
        "fal"
      ]
    }
  },
  {
    "unicode": "f5dc",
    "label": "Brain",
    "name": "brain",
    "styles": [
      "fas",
      "far",
      "fal"
    ],
    "membership": {
      "free": [
        "fas"
      ],
      "pro": [
        "fas",
        "far",
        "fal"
      ]
    }
  },
  {
    "unicode": "f2a1",
    "label": "Braille",
    "name": "braille",
    "styles": [
      "fas",
      "far",
      "fal"
    ],
    "membership": {
      "free": [
        "fas"
      ],
      "pro": [
        "fas",
        "far",
        "fal"
      ]
    }
  },
  {
    "unicode": "f438",
    "label": "Boxing Glove",
    "name": "boxing-glove",
    "styles": [
      "fas",
      "far",
      "fal"
    ],
    "membership": {
      "free": [],
      "pro": [
        "fas",
        "far",
        "fal"
      ]
    }
  },
  {
    "unicode": "f4a1",
    "label": "Alternate Boxes",
    "name": "boxes-alt",
    "styles": [
      "fas",
      "far",
      "fal"
    ],
    "membership": {
      "free": [],
      "pro": [
        "fas",
        "far",
        "fal"
      ]
    }
  },
  {
    "unicode": "f468",
    "label": "Boxes",
    "name": "boxes",
    "styles": [
      "fas",
      "far",
      "fal"
    ],
    "membership": {
      "free": [
        "fas"
      ],
      "pro": [
        "fas",
        "far",
        "fal"
      ]
    }
  },
  {
    "unicode": "f4a0",
    "label": "Box with US Dollar",
    "name": "box-usd",
    "styles": [
      "fas",
      "far",
      "fal"
    ],
    "membership": {
      "free": [],
      "pro": [
        "fas",
        "far",
        "fal"
      ]
    }
  },
  {
    "unicode": "f49f",
    "label": "Box Up",
    "name": "box-up",
    "styles": [
      "fas",
      "far",
      "fal"
    ],
    "membership": {
      "free": [],
      "pro": [
        "fas",
        "far",
        "fal"
      ]
    }
  },
  {
    "unicode": "f49e",
    "label": "Box Open",
    "name": "box-open",
    "styles": [
      "fas",
      "far",
      "fal"
    ],
    "membership": {
      "free": [
        "fas"
      ],
      "pro": [
        "fas",
        "far",
        "fal"
      ]
    }
  },
  {
    "unicode": "f49d",
    "label": "Box with Heart",
    "name": "box-heart",
    "styles": [
      "fas",
      "far",
      "fal"
    ],
    "membership": {
      "free": [],
      "pro": [
        "fas",
        "far",
        "fal"
      ]
    }
  },
  {
    "unicode": "f49c",
    "label": "Box Full",
    "name": "box-full",
    "styles": [
      "fas",
      "far",
      "fal"
    ],
    "membership": {
      "free": [],
      "pro": [
        "fas",
        "far",
        "fal"
      ]
    }
  },
  {
    "unicode": "f49b",
    "label": "Box Fragile",
    "name": "box-fragile",
    "styles": [
      "fas",
      "far",
      "fal"
    ],
    "membership": {
      "free": [],
      "pro": [
        "fas",
        "far",
        "fal"
      ]
    }
  },
  {
    "unicode": "f467",
    "label": "Box Check",
    "name": "box-check",
    "styles": [
      "fas",
      "far",
      "fal"
    ],
    "membership": {
      "free": [],
      "pro": [
        "fas",
        "far",
        "fal"
      ]
    }
  },
  {
    "unicode": "f49a",
    "label": "Alternate Box",
    "name": "box-alt",
    "styles": [
      "fas",
      "far",
      "fal"
    ],
    "membership": {
      "free": [],
      "pro": [
        "fas",
        "far",
        "fal"
      ]
    }
  },
  {
    "unicode": "f466",
    "label": "Box",
    "name": "box",
    "styles": [
      "fas",
      "far",
      "fal"
    ],
    "membership": {
      "free": [
        "fas"
      ],
      "pro": [
        "fas",
        "far",
        "fal"
      ]
    }
  },
  {
    "unicode": "f437",
    "label": "Bowling Pins",
    "name": "bowling-pins",
    "styles": [
      "fas",
      "far",
      "fal"
    ],
    "membership": {
      "free": [],
      "pro": [
        "fas",
        "far",
        "fal"
      ]
    }
  },
  {
    "unicode": "f436",
    "label": "Bowling Ball",
    "name": "bowling-ball",
    "styles": [
      "fas",
      "far",
      "fal"
    ],
    "membership": {
      "free": [
        "fas"
      ],
      "pro": [
        "fas",
        "far",
        "fal"
      ]
    }
  },
  {
    "unicode": "f5db",
    "label": "Books",
    "name": "books",
    "styles": [
      "fas",
      "far",
      "fal"
    ],
    "membership": {
      "free": [],
      "pro": [
        "fas",
        "far",
        "fal"
      ]
    }
  },
  {
    "unicode": "f02e",
    "label": "bookmark",
    "name": "bookmark",
    "styles": [
      "fas",
      "far",
      "fal"
    ],
    "membership": {
      "free": [
        "fas",
        "far"
      ],
      "pro": [
        "fas",
        "far",
        "fal"
      ]
    }
  },
  {
    "unicode": "f5da",
    "label": "Book Reader",
    "name": "book-reader",
    "styles": [
      "fas",
      "far",
      "fal"
    ],
    "membership": {
      "free": [
        "fas"
      ],
      "pro": [
        "fas",
        "far",
        "fal"
      ]
    }
  },
  {
    "unicode": "f518",
    "label": "Book Open",
    "name": "book-open",
    "styles": [
      "fas",
      "far",
      "fal"
    ],
    "membership": {
      "free": [
        "fas"
      ],
      "pro": [
        "fas",
        "far",
        "fal"
      ]
    }
  },
  {
    "unicode": "f499",
    "label": "Book with Heart",
    "name": "book-heart",
    "styles": [
      "fas",
      "far",
      "fal"
    ],
    "membership": {
      "free": [],
      "pro": [
        "fas",
        "far",
        "fal"
      ]
    }
  },
  {
    "unicode": "f5d9",
    "label": "Book Alt",
    "name": "book-alt",
    "styles": [
      "fas",
      "far",
      "fal"
    ],
    "membership": {
      "free": [],
      "pro": [
        "fas",
        "far",
        "fal"
      ]
    }
  },
  {
    "unicode": "f02d",
    "label": "book",
    "name": "book",
    "styles": [
      "fas",
      "far",
      "fal"
    ],
    "membership": {
      "free": [
        "fas"
      ],
      "pro": [
        "fas",
        "far",
        "fal"
      ]
    }
  },
  {
    "unicode": "f55c",
    "label": "Bong",
    "name": "bong",
    "styles": [
      "fas",
      "far",
      "fal"
    ],
    "membership": {
      "free": [
        "fas"
      ],
      "pro": [
        "fas",
        "far",
        "fal"
      ]
    }
  },
  {
    "unicode": "f5d8",
    "label": "Bone Break",
    "name": "bone-break",
    "styles": [
      "fas",
      "far",
      "fal"
    ],
    "membership": {
      "free": [],
      "pro": [
        "fas",
        "far",
        "fal"
      ]
    }
  },
  {
    "unicode": "f5d7",
    "label": "Bone",
    "name": "bone",
    "styles": [
      "fas",
      "far",
      "fal"
    ],
    "membership": {
      "free": [
        "fas"
      ],
      "pro": [
        "fas",
        "far",
        "fal"
      ]
    }
  },
  {
    "unicode": "f1e2",
    "label": "Bomb",
    "name": "bomb",
    "styles": [
      "fas",
      "far",
      "fal"
    ],
    "membership": {
      "free": [
        "fas"
      ],
      "pro": [
        "fas",
        "far",
        "fal"
      ]
    }
  },
  {
    "unicode": "f0e7",
    "label": "Lightning Bolt",
    "name": "bolt",
    "styles": [
      "fas",
      "far",
      "fal"
    ],
    "membership": {
      "free": [
        "fas"
      ],
      "pro": [
        "fas",
        "far",
        "fal"
      ]
    }
  },
  {
    "unicode": "f032",
    "label": "bold",
    "name": "bold",
    "styles": [
      "fas",
      "far",
      "fal"
    ],
    "membership": {
      "free": [
        "fas"
      ],
      "pro": [
        "fas",
        "far",
        "fal"
      ]
    }
  },
  {
    "unicode": "f294",
    "label": "Bluetooth",
    "name": "bluetooth-b",
    "styles": [
      "fab"
    ],
    "membership": {
      "free": [
        "fab"
      ],
      "pro": [
        "fab"
      ]
    }
  },
  {
    "unicode": "f293",
    "label": "Bluetooth",
    "name": "bluetooth",
    "styles": [
      "fab"
    ],
    "membership": {
      "free": [
        "fab"
      ],
      "pro": [
        "fab"
      ]
    }
  },
  {
    "unicode": "f37d",
    "label": "Blogger B",
    "name": "blogger-b",
    "styles": [
      "fab"
    ],
    "membership": {
      "free": [
        "fab"
      ],
      "pro": [
        "fab"
      ]
    }
  },
  {
    "unicode": "f37c",
    "label": "Blogger",
    "name": "blogger",
    "styles": [
      "fab"
    ],
    "membership": {
      "free": [
        "fab"
      ],
      "pro": [
        "fab"
      ]
    }
  },
  {
    "unicode": "f29d",
    "label": "Blind",
    "name": "blind",
    "styles": [
      "fas",
      "far",
      "fal"
    ],
    "membership": {
      "free": [
        "fas"
      ],
      "pro": [
        "fas",
        "far",
        "fal"
      ]
    }
  },
  {
    "unicode": "f517",
    "label": "Blender",
    "name": "blender",
    "styles": [
      "fas",
      "far",
      "fal"
    ],
    "membership": {
      "free": [
        "fas"
      ],
      "pro": [
        "fas",
        "far",
        "fal"
      ]
    }
  },
  {
    "unicode": "f498",
    "label": "Blanket",
    "name": "blanket",
    "styles": [
      "fas",
      "far",
      "fal"
    ],
    "membership": {
      "free": [],
      "pro": [
        "fas",
        "far",
        "fal"
      ]
    }
  },
  {
    "unicode": "f37b",
    "label": "BlackBerry",
    "name": "blackberry",
    "styles": [
      "fab"
    ],
    "membership": {
      "free": [
        "fab"
      ],
      "pro": [
        "fab"
      ]
    }
  },
  {
    "unicode": "f27e",
    "label": "Font Awesome Black Tie",
    "name": "black-tie",
    "styles": [
      "fab"
    ],
    "membership": {
      "free": [
        "fab"
      ],
      "pro": [
        "fab"
      ]
    }
  },
  {
    "unicode": "f37a",
    "label": "Bity",
    "name": "bity",
    "styles": [
      "fab"
    ],
    "membership": {
      "free": [
        "fab"
      ],
      "pro": [
        "fab"
      ]
    }
  },
  {
    "unicode": "f379",
    "label": "Bitcoin",
    "name": "bitcoin",
    "styles": [
      "fab"
    ],
    "membership": {
      "free": [
        "fab"
      ],
      "pro": [
        "fab"
      ]
    }
  },
  {
    "unicode": "f171",
    "label": "Bitbucket",
    "name": "bitbucket",
    "styles": [
      "fab"
    ],
    "membership": {
      "free": [
        "fab"
      ],
      "pro": [
        "fab"
      ]
    }
  },
  {
    "unicode": "f1fd",
    "label": "Birthday Cake",
    "name": "birthday-cake",
    "styles": [
      "fas",
      "far",
      "fal"
    ],
    "membership": {
      "free": [
        "fas"
      ],
      "pro": [
        "fas",
        "far",
        "fal"
      ]
    }
  },
  {
    "unicode": "f1e5",
    "label": "Binoculars",
    "name": "binoculars",
    "styles": [
      "fas",
      "far",
      "fal"
    ],
    "membership": {
      "free": [
        "fas"
      ],
      "pro": [
        "fas",
        "far",
        "fal"
      ]
    }
  },
  {
    "unicode": "f378",
    "label": "BIMobject",
    "name": "bimobject",
    "styles": [
      "fab"
    ],
    "membership": {
      "free": [
        "fab"
      ],
      "pro": [
        "fab"
      ]
    }
  },
  {
    "unicode": "f206",
    "label": "Bicycle",
    "name": "bicycle",
    "styles": [
      "fas",
      "far",
      "fal"
    ],
    "membership": {
      "free": [
        "fas"
      ],
      "pro": [
        "fas",
        "far",
        "fal"
      ]
    }
  },
  {
    "unicode": "f55b",
    "label": "Bezier Curve",
    "name": "bezier-curve",
    "styles": [
      "fas",
      "far",
      "fal"
    ],
    "membership": {
      "free": [
        "fas"
      ],
      "pro": [
        "fas",
        "far",
        "fal"
      ]
    }
  },
  {
    "unicode": "f1f6",
    "label": "Bell Slash",
    "name": "bell-slash",
    "styles": [
      "fas",
      "far",
      "fal"
    ],
    "membership": {
      "free": [
        "fas",
        "far"
      ],
      "pro": [
        "fas",
        "far",
        "fal"
      ]
    }
  },
  {
    "unicode": "f5d6",
    "label": "Bell School-slash",
    "name": "bell-school-slash",
    "styles": [
      "fas",
      "far",
      "fal"
    ],
    "membership": {
      "free": [],
      "pro": [
        "fas",
        "far",
        "fal"
      ]
    }
  },
  {
    "unicode": "f5d5",
    "label": "Bell School",
    "name": "bell-school",
    "styles": [
      "fas",
      "far",
      "fal"
    ],
    "membership": {
      "free": [],
      "pro": [
        "fas",
        "far",
        "fal"
      ]
    }
  },
  {
    "unicode": "f0f3",
    "label": "bell",
    "name": "bell",
    "styles": [
      "fas",
      "far",
      "fal"
    ],
    "membership": {
      "free": [
        "fas",
        "far"
      ],
      "pro": [
        "fas",
        "far",
        "fal"
      ]
    }
  },
  {
    "unicode": "f1b5",
    "label": "Behance Square",
    "name": "behance-square",
    "styles": [
      "fab"
    ],
    "membership": {
      "free": [
        "fab"
      ],
      "pro": [
        "fab"
      ]
    }
  },
  {
    "unicode": "f1b4",
    "label": "Behance",
    "name": "behance",
    "styles": [
      "fab"
    ],
    "membership": {
      "free": [
        "fab"
      ],
      "pro": [
        "fab"
      ]
    }
  },
  {
    "unicode": "f0fc",
    "label": "beer",
    "name": "beer",
    "styles": [
      "fas",
      "far",
      "fal"
    ],
    "membership": {
      "free": [
        "fas"
      ],
      "pro": [
        "fas",
        "far",
        "fal"
      ]
    }
  },
  {
    "unicode": "f236",
    "label": "Bed",
    "name": "bed",
    "styles": [
      "fas",
      "far",
      "fal"
    ],
    "membership": {
      "free": [
        "fas"
      ],
      "pro": [
        "fas",
        "far",
        "fal"
      ]
    }
  },
  {
    "unicode": "f241",
    "label": "Battery 3/4 Full",
    "name": "battery-three-quarters",
    "styles": [
      "fas",
      "far",
      "fal"
    ],
    "membership": {
      "free": [
        "fas"
      ],
      "pro": [
        "fas",
        "far",
        "fal"
      ]
    }
  },
  {
    "unicode": "f377",
    "label": "Battery Slash",
    "name": "battery-slash",
    "styles": [
      "fas",
      "far",
      "fal"
    ],
    "membership": {
      "free": [],
      "pro": [
        "fas",
        "far",
        "fal"
      ]
    }
  },
  {
    "unicode": "f243",
    "label": "Battery 1/4 Full",
    "name": "battery-quarter",
    "styles": [
      "fas",
      "far",
      "fal"
    ],
    "membership": {
      "free": [
        "fas"
      ],
      "pro": [
        "fas",
        "far",
        "fal"
      ]
    }
  },
  {
    "unicode": "f242",
    "label": "Battery 1/2 Full",
    "name": "battery-half",
    "styles": [
      "fas",
      "far",
      "fal"
    ],
    "membership": {
      "free": [
        "fas"
      ],
      "pro": [
        "fas",
        "far",
        "fal"
      ]
    }
  },
  {
    "unicode": "f240",
    "label": "Battery Full",
    "name": "battery-full",
    "styles": [
      "fas",
      "far",
      "fal"
    ],
    "membership": {
      "free": [
        "fas"
      ],
      "pro": [
        "fas",
        "far",
        "fal"
      ]
    }
  },
  {
    "unicode": "f244",
    "label": "Battery Empty",
    "name": "battery-empty",
    "styles": [
      "fas",
      "far",
      "fal"
    ],
    "membership": {
      "free": [
        "fas"
      ],
      "pro": [
        "fas",
        "far",
        "fal"
      ]
    }
  },
  {
    "unicode": "f376",
    "label": "Battery Bolt",
    "name": "battery-bolt",
    "styles": [
      "fas",
      "far",
      "fal"
    ],
    "membership": {
      "free": [],
      "pro": [
        "fas",
        "far",
        "fal"
      ]
    }
  },
  {
    "unicode": "f2cd",
    "label": "Bath",
    "name": "bath",
    "styles": [
      "fas",
      "far",
      "fal"
    ],
    "membership": {
      "free": [
        "fas"
      ],
      "pro": [
        "fas",
        "far",
        "fal"
      ]
    }
  },
  {
    "unicode": "f435",
    "label": "Basketball Hoop",
    "name": "basketball-hoop",
    "styles": [
      "fas",
      "far",
      "fal"
    ],
    "membership": {
      "free": [],
      "pro": [
        "fas",
        "far",
        "fal"
      ]
    }
  },
  {
    "unicode": "f434",
    "label": "Basketball Ball",
    "name": "basketball-ball",
    "styles": [
      "fas",
      "far",
      "fal"
    ],
    "membership": {
      "free": [
        "fas"
      ],
      "pro": [
        "fas",
        "far",
        "fal"
      ]
    }
  },
  {
    "unicode": "f433",
    "label": "Baseball Ball",
    "name": "baseball-ball",
    "styles": [
      "fas",
      "far",
      "fal"
    ],
    "membership": {
      "free": [
        "fas"
      ],
      "pro": [
        "fas",
        "far",
        "fal"
      ]
    }
  },
  {
    "unicode": "f432",
    "label": "Baseball",
    "name": "baseball",
    "styles": [
      "fas",
      "far",
      "fal"
    ],
    "membership": {
      "free": [],
      "pro": [
        "fas",
        "far",
        "fal"
      ]
    }
  },
  {
    "unicode": "f0c9",
    "label": "Bars",
    "name": "bars",
    "styles": [
      "fas",
      "far",
      "fal"
    ],
    "membership": {
      "free": [
        "fas"
      ],
      "pro": [
        "fas",
        "far",
        "fal"
      ]
    }
  },
  {
    "unicode": "f465",
    "label": "Barcode Scan",
    "name": "barcode-scan",
    "styles": [
      "fas",
      "far",
      "fal"
    ],
    "membership": {
      "free": [],
      "pro": [
        "fas",
        "far",
        "fal"
      ]
    }
  },
  {
    "unicode": "f464",
    "label": "Barcode Read",
    "name": "barcode-read",
    "styles": [
      "fas",
      "far",
      "fal"
    ],
    "membership": {
      "free": [],
      "pro": [
        "fas",
        "far",
        "fal"
      ]
    }
  },
  {
    "unicode": "f463",
    "label": "Alternate Barcode",
    "name": "barcode-alt",
    "styles": [
      "fas",
      "far",
      "fal"
    ],
    "membership": {
      "free": [],
      "pro": [
        "fas",
        "far",
        "fal"
      ]
    }
  },
  {
    "unicode": "f02a",
    "label": "barcode",
    "name": "barcode",
    "styles": [
      "fas",
      "far",
      "fal"
    ],
    "membership": {
      "free": [
        "fas"
      ],
      "pro": [
        "fas",
        "far",
        "fal"
      ]
    }
  },
  {
    "unicode": "f2d5",
    "label": "Bandcamp",
    "name": "bandcamp",
    "styles": [
      "fab"
    ],
    "membership": {
      "free": [
        "fab"
      ],
      "pro": [
        "fab"
      ]
    }
  },
  {
    "unicode": "f462",
    "label": "Band-Aid",
    "name": "band-aid",
    "styles": [
      "fas",
      "far",
      "fal"
    ],
    "membership": {
      "free": [
        "fas"
      ],
      "pro": [
        "fas",
        "far",
        "fal"
      ]
    }
  },
  {
    "unicode": "f05e",
    "label": "ban",
    "name": "ban",
    "styles": [
      "fas",
      "far",
      "fal"
    ],
    "membership": {
      "free": [
        "fas"
      ],
      "pro": [
        "fas",
        "far",
        "fal"
      ]
    }
  },
  {
    "unicode": "f516",
    "label": "Balance Scale (Right-Weighted)",
    "name": "balance-scale-right",
    "styles": [
      "fas",
      "far",
      "fal"
    ],
    "membership": {
      "free": [],
      "pro": [
        "fas",
        "far",
        "fal"
      ]
    }
  },
  {
    "unicode": "f515",
    "label": "Balance Scale (Left-Weighted)",
    "name": "balance-scale-left",
    "styles": [
      "fas",
      "far",
      "fal"
    ],
    "membership": {
      "free": [],
      "pro": [
        "fas",
        "far",
        "fal"
      ]
    }
  },
  {
    "unicode": "f24e",
    "label": "Balance Scale",
    "name": "balance-scale",
    "styles": [
      "fas",
      "far",
      "fal"
    ],
    "membership": {
      "free": [
        "fas"
      ],
      "pro": [
        "fas",
        "far",
        "fal"
      ]
    }
  },
  {
    "unicode": "f336",
    "label": "Check Badge",
    "name": "badge-check",
    "styles": [
      "fas",
      "far",
      "fal"
    ],
    "membership": {
      "free": [],
      "pro": [
        "fas",
        "far",
        "fal"
      ]
    }
  },
  {
    "unicode": "f335",
    "label": "Badge",
    "name": "badge",
    "styles": [
      "fas",
      "far",
      "fal"
    ],
    "membership": {
      "free": [],
      "pro": [
        "fas",
        "far",
        "fal"
      ]
    }
  },
  {
    "unicode": "f04a",
    "label": "backward",
    "name": "backward",
    "styles": [
      "fas",
      "far",
      "fal"
    ],
    "membership": {
      "free": [
        "fas"
      ],
      "pro": [
        "fas",
        "far",
        "fal"
      ]
    }
  },
  {
    "unicode": "f55a",
    "label": "Backspace",
    "name": "backspace",
    "styles": [
      "fas",
      "far",
      "fal"
    ],
    "membership": {
      "free": [
        "fas"
      ],
      "pro": [
        "fas",
        "far",
        "fal"
      ]
    }
  },
  {
    "unicode": "f5d4",
    "label": "Backpack",
    "name": "backpack",
    "styles": [
      "fas",
      "far",
      "fal"
    ],
    "membership": {
      "free": [],
      "pro": [
        "fas",
        "far",
        "fal"
      ]
    }
  },
  {
    "unicode": "f375",
    "label": "Amazon Web Services (AWS)",
    "name": "aws",
    "styles": [
      "fab"
    ],
    "membership": {
      "free": [
        "fab"
      ],
      "pro": [
        "fab"
      ]
    }
  },
  {
    "unicode": "f559",
    "label": "Award",
    "name": "award",
    "styles": [
      "fas",
      "far",
      "fal"
    ],
    "membership": {
      "free": [
        "fas"
      ],
      "pro": [
        "fas",
        "far",
        "fal"
      ]
    }
  },
  {
    "unicode": "f421",
    "label": "Aviato",
    "name": "aviato",
    "styles": [
      "fab"
    ],
    "membership": {
      "free": [
        "fab"
      ],
      "pro": [
        "fab"
      ]
    }
  },
  {
    "unicode": "f374",
    "label": "avianex",
    "name": "avianex",
    "styles": [
      "fab"
    ],
    "membership": {
      "free": [
        "fab"
      ],
      "pro": [
        "fab"
      ]
    }
  },
  {
    "unicode": "f41c",
    "label": "Autoprefixer",
    "name": "autoprefixer",
    "styles": [
      "fab"
    ],
    "membership": {
      "free": [
        "fab"
      ],
      "pro": [
        "fab"
      ]
    }
  },
  {
    "unicode": "f29e",
    "label": "Audio Description",
    "name": "audio-description",
    "styles": [
      "fas",
      "far",
      "fal"
    ],
    "membership": {
      "free": [
        "fas"
      ],
      "pro": [
        "fas",
        "far",
        "fal"
      ]
    }
  },
  {
    "unicode": "f373",
    "label": "Audible",
    "name": "audible",
    "styles": [
      "fab"
    ],
    "membership": {
      "free": [
        "fab"
      ],
      "pro": [
        "fab"
      ]
    }
  },
  {
    "unicode": "f5d3",
    "label": "Atom Alt",
    "name": "atom-alt",
    "styles": [
      "fas",
      "far",
      "fal"
    ],
    "membership": {
      "free": [],
      "pro": [
        "fas",
        "far",
        "fal"
      ]
    }
  },
  {
    "unicode": "f5d2",
    "label": "Atom",
    "name": "atom",
    "styles": [
      "fas",
      "far",
      "fal"
    ],
    "membership": {
      "free": [
        "fas"
      ],
      "pro": [
        "fas",
        "far",
        "fal"
      ]
    }
  },
  {
    "unicode": "f558",
    "label": "Atlas",
    "name": "atlas",
    "styles": [
      "fas",
      "far",
      "fal"
    ],
    "membership": {
      "free": [
        "fas"
      ],
      "pro": [
        "fas",
        "far",
        "fal"
      ]
    }
  },
  {
    "unicode": "f1fa",
    "label": "At",
    "name": "at",
    "styles": [
      "fas",
      "far",
      "fal"
    ],
    "membership": {
      "free": [
        "fas"
      ],
      "pro": [
        "fas",
        "far",
        "fal"
      ]
    }
  },
  {
    "unicode": "f372",
    "label": "Asymmetrik, Ltd.",
    "name": "asymmetrik",
    "styles": [
      "fab"
    ],
    "membership": {
      "free": [
        "fab"
      ],
      "pro": [
        "fab"
      ]
    }
  },
  {
    "unicode": "f069",
    "label": "asterisk",
    "name": "asterisk",
    "styles": [
      "fas",
      "far",
      "fal"
    ],
    "membership": {
      "free": [
        "fas"
      ],
      "pro": [
        "fas",
        "far",
        "fal"
      ]
    }
  },
  {
    "unicode": "f2a2",
    "label": "Assistive Listening Systems",
    "name": "assistive-listening-systems",
    "styles": [
      "fas",
      "far",
      "fal"
    ],
    "membership": {
      "free": [
        "fas"
      ],
      "pro": [
        "fas",
        "far",
        "fal"
      ]
    }
  },
  {
    "unicode": "f07d",
    "label": "Arrows Vertical",
    "name": "arrows-v",
    "styles": [
      "fas",
      "far",
      "fal"
    ],
    "membership": {
      "free": [],
      "pro": [
        "fas",
        "far",
        "fal"
      ]
    }
  },
  {
    "unicode": "f07e",
    "label": "Arrows Horizontal",
    "name": "arrows-h",
    "styles": [
      "fas",
      "far",
      "fal"
    ],
    "membership": {
      "free": [],
      "pro": [
        "fas",
        "far",
        "fal"
      ]
    }
  },
  {
    "unicode": "f338",
    "label": "Alternate Arrows Vertical",
    "name": "arrows-alt-v",
    "styles": [
      "fas",
      "far",
      "fal"
    ],
    "membership": {
      "free": [
        "fas"
      ],
      "pro": [
        "fas",
        "far",
        "fal"
      ]
    }
  },
  {
    "unicode": "f337",
    "label": "Alternate Arrows Horizontal",
    "name": "arrows-alt-h",
    "styles": [
      "fas",
      "far",
      "fal"
    ],
    "membership": {
      "free": [
        "fas"
      ],
      "pro": [
        "fas",
        "far",
        "fal"
      ]
    }
  },
  {
    "unicode": "f0b2",
    "label": "Alternate Arrows",
    "name": "arrows-alt",
    "styles": [
      "fas",
      "far",
      "fal"
    ],
    "membership": {
      "free": [
        "fas"
      ],
      "pro": [
        "fas",
        "far",
        "fal"
      ]
    }
  },
  {
    "unicode": "f047",
    "label": "Arrows",
    "name": "arrows",
    "styles": [
      "fas",
      "far",
      "fal"
    ],
    "membership": {
      "free": [],
      "pro": [
        "fas",
        "far",
        "fal"
      ]
    }
  },
  {
    "unicode": "f062",
    "label": "arrow-up",
    "name": "arrow-up",
    "styles": [
      "fas",
      "far",
      "fal"
    ],
    "membership": {
      "free": [
        "fas"
      ],
      "pro": [
        "fas",
        "far",
        "fal"
      ]
    }
  },
  {
    "unicode": "f341",
    "label": "Arrow to Top",
    "name": "arrow-to-top",
    "styles": [
      "fas",
      "far",
      "fal"
    ],
    "membership": {
      "free": [],
      "pro": [
        "fas",
        "far",
        "fal"
      ]
    }
  },
  {
    "unicode": "f340",
    "label": "Arrow to Right",
    "name": "arrow-to-right",
    "styles": [
      "fas",
      "far",
      "fal"
    ],
    "membership": {
      "free": [],
      "pro": [
        "fas",
        "far",
        "fal"
      ]
    }
  },
  {
    "unicode": "f33e",
    "label": "Arrow to Left",
    "name": "arrow-to-left",
    "styles": [
      "fas",
      "far",
      "fal"
    ],
    "membership": {
      "free": [],
      "pro": [
        "fas",
        "far",
        "fal"
      ]
    }
  },
  {
    "unicode": "f33d",
    "label": "Arrow to Bottom",
    "name": "arrow-to-bottom",
    "styles": [
      "fas",
      "far",
      "fal"
    ],
    "membership": {
      "free": [],
      "pro": [
        "fas",
        "far",
        "fal"
      ]
    }
  },
  {
    "unicode": "f33c",
    "label": "Arrow Square Up",
    "name": "arrow-square-up",
    "styles": [
      "fas",
      "far",
      "fal"
    ],
    "membership": {
      "free": [],
      "pro": [
        "fas",
        "far",
        "fal"
      ]
    }
  },
  {
    "unicode": "f33b",
    "label": "Arrow Square Right",
    "name": "arrow-square-right",
    "styles": [
      "fas",
      "far",
      "fal"
    ],
    "membership": {
      "free": [],
      "pro": [
        "fas",
        "far",
        "fal"
      ]
    }
  },
  {
    "unicode": "f33a",
    "label": "Arrow Square Left",
    "name": "arrow-square-left",
    "styles": [
      "fas",
      "far",
      "fal"
    ],
    "membership": {
      "free": [],
      "pro": [
        "fas",
        "far",
        "fal"
      ]
    }
  },
  {
    "unicode": "f339",
    "label": "Arrow Square Down",
    "name": "arrow-square-down",
    "styles": [
      "fas",
      "far",
      "fal"
    ],
    "membership": {
      "free": [],
      "pro": [
        "fas",
        "far",
        "fal"
      ]
    }
  },
  {
    "unicode": "f061",
    "label": "arrow-right",
    "name": "arrow-right",
    "styles": [
      "fas",
      "far",
      "fal"
    ],
    "membership": {
      "free": [
        "fas"
      ],
      "pro": [
        "fas",
        "far",
        "fal"
      ]
    }
  },
  {
    "unicode": "f060",
    "label": "arrow-left",
    "name": "arrow-left",
    "styles": [
      "fas",
      "far",
      "fal"
    ],
    "membership": {
      "free": [
        "fas"
      ],
      "pro": [
        "fas",
        "far",
        "fal"
      ]
    }
  },
  {
    "unicode": "f345",
    "label": "Arrow from Top",
    "name": "arrow-from-top",
    "styles": [
      "fas",
      "far",
      "fal"
    ],
    "membership": {
      "free": [],
      "pro": [
        "fas",
        "far",
        "fal"
      ]
    }
  },
  {
    "unicode": "f344",
    "label": "Arrow from Right",
    "name": "arrow-from-right",
    "styles": [
      "fas",
      "far",
      "fal"
    ],
    "membership": {
      "free": [],
      "pro": [
        "fas",
        "far",
        "fal"
      ]
    }
  },
  {
    "unicode": "f343",
    "label": "Arrow from Left",
    "name": "arrow-from-left",
    "styles": [
      "fas",
      "far",
      "fal"
    ],
    "membership": {
      "free": [],
      "pro": [
        "fas",
        "far",
        "fal"
      ]
    }
  },
  {
    "unicode": "f342",
    "label": "Arrow from Bottom",
    "name": "arrow-from-bottom",
    "styles": [
      "fas",
      "far",
      "fal"
    ],
    "membership": {
      "free": [],
      "pro": [
        "fas",
        "far",
        "fal"
      ]
    }
  },
  {
    "unicode": "f063",
    "label": "arrow-down",
    "name": "arrow-down",
    "styles": [
      "fas",
      "far",
      "fal"
    ],
    "membership": {
      "free": [
        "fas"
      ],
      "pro": [
        "fas",
        "far",
        "fal"
      ]
    }
  },
  {
    "unicode": "f0aa",
    "label": "Arrow Circle Up",
    "name": "arrow-circle-up",
    "styles": [
      "fas",
      "far",
      "fal"
    ],
    "membership": {
      "free": [
        "fas"
      ],
      "pro": [
        "fas",
        "far",
        "fal"
      ]
    }
  },
  {
    "unicode": "f0a9",
    "label": "Arrow Circle Right",
    "name": "arrow-circle-right",
    "styles": [
      "fas",
      "far",
      "fal"
    ],
    "membership": {
      "free": [
        "fas"
      ],
      "pro": [
        "fas",
        "far",
        "fal"
      ]
    }
  },
  {
    "unicode": "f0a8",
    "label": "Arrow Circle Left",
    "name": "arrow-circle-left",
    "styles": [
      "fas",
      "far",
      "fal"
    ],
    "membership": {
      "free": [
        "fas"
      ],
      "pro": [
        "fas",
        "far",
        "fal"
      ]
    }
  },
  {
    "unicode": "f0ab",
    "label": "Arrow Circle Down",
    "name": "arrow-circle-down",
    "styles": [
      "fas",
      "far",
      "fal"
    ],
    "membership": {
      "free": [
        "fas"
      ],
      "pro": [
        "fas",
        "far",
        "fal"
      ]
    }
  },
  {
    "unicode": "f357",
    "label": "Alternate Arrow Up",
    "name": "arrow-alt-up",
    "styles": [
      "fas",
      "far",
      "fal"
    ],
    "membership": {
      "free": [],
      "pro": [
        "fas",
        "far",
        "fal"
      ]
    }
  },
  {
    "unicode": "f34d",
    "label": "Alternate Arrow to Top",
    "name": "arrow-alt-to-top",
    "styles": [
      "fas",
      "far",
      "fal"
    ],
    "membership": {
      "free": [],
      "pro": [
        "fas",
        "far",
        "fal"
      ]
    }
  },
  {
    "unicode": "f34c",
    "label": "Alternate Arrow to Right",
    "name": "arrow-alt-to-right",
    "styles": [
      "fas",
      "far",
      "fal"
    ],
    "membership": {
      "free": [],
      "pro": [
        "fas",
        "far",
        "fal"
      ]
    }
  },
  {
    "unicode": "f34b",
    "label": "Alternate Arrow to Left",
    "name": "arrow-alt-to-left",
    "styles": [
      "fas",
      "far",
      "fal"
    ],
    "membership": {
      "free": [],
      "pro": [
        "fas",
        "far",
        "fal"
      ]
    }
  },
  {
    "unicode": "f34a",
    "label": "Alternate Arrow to Bottom",
    "name": "arrow-alt-to-bottom",
    "styles": [
      "fas",
      "far",
      "fal"
    ],
    "membership": {
      "free": [],
      "pro": [
        "fas",
        "far",
        "fal"
      ]
    }
  },
  {
    "unicode": "f353",
    "label": "Alternate Arrow Square Up",
    "name": "arrow-alt-square-up",
    "styles": [
      "fas",
      "far",
      "fal"
    ],
    "membership": {
      "free": [],
      "pro": [
        "fas",
        "far",
        "fal"
      ]
    }
  },
  {
    "unicode": "f352",
    "label": "Alternate Arrow Square Right",
    "name": "arrow-alt-square-right",
    "styles": [
      "fas",
      "far",
      "fal"
    ],
    "membership": {
      "free": [],
      "pro": [
        "fas",
        "far",
        "fal"
      ]
    }
  },
  {
    "unicode": "f351",
    "label": "Alternate Arrow Square Left",
    "name": "arrow-alt-square-left",
    "styles": [
      "fas",
      "far",
      "fal"
    ],
    "membership": {
      "free": [],
      "pro": [
        "fas",
        "far",
        "fal"
      ]
    }
  },
  {
    "unicode": "f350",
    "label": "Alternate Arrow Square Down",
    "name": "arrow-alt-square-down",
    "styles": [
      "fas",
      "far",
      "fal"
    ],
    "membership": {
      "free": [],
      "pro": [
        "fas",
        "far",
        "fal"
      ]
    }
  },
  {
    "unicode": "f356",
    "label": "Alternate Arrow Right",
    "name": "arrow-alt-right",
    "styles": [
      "fas",
      "far",
      "fal"
    ],
    "membership": {
      "free": [],
      "pro": [
        "fas",
        "far",
        "fal"
      ]
    }
  },
  {
    "unicode": "f355",
    "label": "Alternate Arrow Left",
    "name": "arrow-alt-left",
    "styles": [
      "fas",
      "far",
      "fal"
    ],
    "membership": {
      "free": [],
      "pro": [
        "fas",
        "far",
        "fal"
      ]
    }
  },
  {
    "unicode": "f349",
    "label": "Alternate Arrow from Top",
    "name": "arrow-alt-from-top",
    "styles": [
      "fas",
      "far",
      "fal"
    ],
    "membership": {
      "free": [],
      "pro": [
        "fas",
        "far",
        "fal"
      ]
    }
  },
  {
    "unicode": "f348",
    "label": "Alternate Arrow from Right",
    "name": "arrow-alt-from-right",
    "styles": [
      "fas",
      "far",
      "fal"
    ],
    "membership": {
      "free": [],
      "pro": [
        "fas",
        "far",
        "fal"
      ]
    }
  },
  {
    "unicode": "f347",
    "label": "Alternate Arrow from Left",
    "name": "arrow-alt-from-left",
    "styles": [
      "fas",
      "far",
      "fal"
    ],
    "membership": {
      "free": [],
      "pro": [
        "fas",
        "far",
        "fal"
      ]
    }
  },
  {
    "unicode": "f346",
    "label": "Alternate Arrow from Bottom",
    "name": "arrow-alt-from-bottom",
    "styles": [
      "fas",
      "far",
      "fal"
    ],
    "membership": {
      "free": [],
      "pro": [
        "fas",
        "far",
        "fal"
      ]
    }
  },
  {
    "unicode": "f354",
    "label": "Alternate Arrow Down",
    "name": "arrow-alt-down",
    "styles": [
      "fas",
      "far",
      "fal"
    ],
    "membership": {
      "free": [],
      "pro": [
        "fas",
        "far",
        "fal"
      ]
    }
  },
  {
    "unicode": "f35b",
    "label": "Alternate Arrow Circle Up",
    "name": "arrow-alt-circle-up",
    "styles": [
      "fas",
      "far",
      "fal"
    ],
    "membership": {
      "free": [
        "fas",
        "far"
      ],
      "pro": [
        "fas",
        "far",
        "fal"
      ]
    }
  },
  {
    "unicode": "f35a",
    "label": "Alternate Arrow Circle Right",
    "name": "arrow-alt-circle-right",
    "styles": [
      "fas",
      "far",
      "fal"
    ],
    "membership": {
      "free": [
        "fas",
        "far"
      ],
      "pro": [
        "fas",
        "far",
        "fal"
      ]
    }
  },
  {
    "unicode": "f359",
    "label": "Alternate Arrow Circle Left",
    "name": "arrow-alt-circle-left",
    "styles": [
      "fas",
      "far",
      "fal"
    ],
    "membership": {
      "free": [
        "fas",
        "far"
      ],
      "pro": [
        "fas",
        "far",
        "fal"
      ]
    }
  },
  {
    "unicode": "f358",
    "label": "Alternate Arrow Circle Down",
    "name": "arrow-alt-circle-down",
    "styles": [
      "fas",
      "far",
      "fal"
    ],
    "membership": {
      "free": [
        "fas",
        "far"
      ],
      "pro": [
        "fas",
        "far",
        "fal"
      ]
    }
  },
  {
    "unicode": "f557",
    "label": "Archway",
    "name": "archway",
    "styles": [
      "fas",
      "far",
      "fal"
    ],
    "membership": {
      "free": [
        "fas"
      ],
      "pro": [
        "fas",
        "far",
        "fal"
      ]
    }
  },
  {
    "unicode": "f187",
    "label": "Archive",
    "name": "archive",
    "styles": [
      "fas",
      "far",
      "fal"
    ],
    "membership": {
      "free": [
        "fas"
      ],
      "pro": [
        "fas",
        "far",
        "fal"
      ]
    }
  },
  {
    "unicode": "f415",
    "label": "Apple Pay",
    "name": "apple-pay",
    "styles": [
      "fab"
    ],
    "membership": {
      "free": [
        "fab"
      ],
      "pro": [
        "fab"
      ]
    }
  },
  {
    "unicode": "f5d1",
    "label": "Fruit Apple",
    "name": "apple-alt",
    "styles": [
      "fas",
      "far",
      "fal"
    ],
    "membership": {
      "free": [
        "fas"
      ],
      "pro": [
        "fas",
        "far",
        "fal"
      ]
    }
  },
  {
    "unicode": "f179",
    "label": "Apple",
    "name": "apple",
    "styles": [
      "fab"
    ],
    "membership": {
      "free": [
        "fab"
      ],
      "pro": [
        "fab"
      ]
    }
  },
  {
    "unicode": "f371",
    "label": "Apper Systems AB",
    "name": "apper",
    "styles": [
      "fab"
    ],
    "membership": {
      "free": [
        "fab"
      ],
      "pro": [
        "fab"
      ]
    }
  },
  {
    "unicode": "f370",
    "label": "iOS App Store",
    "name": "app-store-ios",
    "styles": [
      "fab"
    ],
    "membership": {
      "free": [
        "fab"
      ],
      "pro": [
        "fab"
      ]
    }
  },
  {
    "unicode": "f36f",
    "label": "App Store",
    "name": "app-store",
    "styles": [
      "fab"
    ],
    "membership": {
      "free": [
        "fab"
      ],
      "pro": [
        "fab"
      ]
    }
  },
  {
    "unicode": "f420",
    "label": "Angular",
    "name": "angular",
    "styles": [
      "fab"
    ],
    "membership": {
      "free": [
        "fab"
      ],
      "pro": [
        "fab"
      ]
    }
  },
  {
    "unicode": "f36e",
    "label": "Angry Creative",
    "name": "angrycreative",
    "styles": [
      "fab"
    ],
    "membership": {
      "free": [
        "fab"
      ],
      "pro": [
        "fab"
      ]
    }
  },
  {
    "unicode": "f556",
    "label": "Angry Face",
    "name": "angry",
    "styles": [
      "fas",
      "far",
      "fal"
    ],
    "membership": {
      "free": [
        "fas",
        "far"
      ],
      "pro": [
        "fas",
        "far",
        "fal"
      ]
    }
  },
  {
    "unicode": "f106",
    "label": "angle-up",
    "name": "angle-up",
    "styles": [
      "fas",
      "far",
      "fal"
    ],
    "membership": {
      "free": [
        "fas"
      ],
      "pro": [
        "fas",
        "far",
        "fal"
      ]
    }
  },
  {
    "unicode": "f105",
    "label": "angle-right",
    "name": "angle-right",
    "styles": [
      "fas",
      "far",
      "fal"
    ],
    "membership": {
      "free": [
        "fas"
      ],
      "pro": [
        "fas",
        "far",
        "fal"
      ]
    }
  },
  {
    "unicode": "f104",
    "label": "angle-left",
    "name": "angle-left",
    "styles": [
      "fas",
      "far",
      "fal"
    ],
    "membership": {
      "free": [
        "fas"
      ],
      "pro": [
        "fas",
        "far",
        "fal"
      ]
    }
  },
  {
    "unicode": "f107",
    "label": "angle-down",
    "name": "angle-down",
    "styles": [
      "fas",
      "far",
      "fal"
    ],
    "membership": {
      "free": [
        "fas"
      ],
      "pro": [
        "fas",
        "far",
        "fal"
      ]
    }
  },
  {
    "unicode": "f102",
    "label": "Angle Double Up",
    "name": "angle-double-up",
    "styles": [
      "fas",
      "far",
      "fal"
    ],
    "membership": {
      "free": [
        "fas"
      ],
      "pro": [
        "fas",
        "far",
        "fal"
      ]
    }
  },
  {
    "unicode": "f101",
    "label": "Angle Double Right",
    "name": "angle-double-right",
    "styles": [
      "fas",
      "far",
      "fal"
    ],
    "membership": {
      "free": [
        "fas"
      ],
      "pro": [
        "fas",
        "far",
        "fal"
      ]
    }
  },
  {
    "unicode": "f100",
    "label": "Angle Double Left",
    "name": "angle-double-left",
    "styles": [
      "fas",
      "far",
      "fal"
    ],
    "membership": {
      "free": [
        "fas"
      ],
      "pro": [
        "fas",
        "far",
        "fal"
      ]
    }
  },
  {
    "unicode": "f103",
    "label": "Angle Double Down",
    "name": "angle-double-down",
    "styles": [
      "fas",
      "far",
      "fal"
    ],
    "membership": {
      "free": [
        "fas"
      ],
      "pro": [
        "fas",
        "far",
        "fal"
      ]
    }
  },
  {
    "unicode": "f209",
    "label": "AngelList",
    "name": "angellist",
    "styles": [
      "fab"
    ],
    "membership": {
      "free": [
        "fab"
      ],
      "pro": [
        "fab"
      ]
    }
  },
  {
    "unicode": "f17b",
    "label": "Android",
    "name": "android",
    "styles": [
      "fab"
    ],
    "membership": {
      "free": [
        "fab"
      ],
      "pro": [
        "fab"
      ]
    }
  },
  {
    "unicode": "f13d",
    "label": "Anchor",
    "name": "anchor",
    "styles": [
      "fas",
      "far",
      "fal"
    ],
    "membership": {
      "free": [
        "fas"
      ],
      "pro": [
        "fas",
        "far",
        "fal"
      ]
    }
  },
  {
    "unicode": "f36d",
    "label": "Amilia",
    "name": "amilia",
    "styles": [
      "fab"
    ],
    "membership": {
      "free": [
        "fab"
      ],
      "pro": [
        "fab"
      ]
    }
  },
  {
    "unicode": "f2a3",
    "label": "American Sign Language Interpreting",
    "name": "american-sign-language-interpreting",
    "styles": [
      "fas",
      "far",
      "fal"
    ],
    "membership": {
      "free": [
        "fas"
      ],
      "pro": [
        "fas",
        "far",
        "fal"
      ]
    }
  },
  {
    "unicode": "f0f9",
    "label": "ambulance",
    "name": "ambulance",
    "styles": [
      "fas",
      "far",
      "fal"
    ],
    "membership": {
      "free": [
        "fas"
      ],
      "pro": [
        "fas",
        "far",
        "fal"
      ]
    }
  },
  {
    "unicode": "f42c",
    "label": "Amazon Pay",
    "name": "amazon-pay",
    "styles": [
      "fab"
    ],
    "membership": {
      "free": [
        "fab"
      ],
      "pro": [
        "fab"
      ]
    }
  },
  {
    "unicode": "f270",
    "label": "Amazon",
    "name": "amazon",
    "styles": [
      "fab"
    ],
    "membership": {
      "free": [
        "fab"
      ],
      "pro": [
        "fab"
      ]
    }
  },
  {
    "unicode": "f461",
    "label": "Allergies",
    "name": "allergies",
    "styles": [
      "fas",
      "far",
      "fal"
    ],
    "membership": {
      "free": [
        "fas"
      ],
      "pro": [
        "fas",
        "far",
        "fal"
      ]
    }
  },
  {
    "unicode": "f038",
    "label": "align-right",
    "name": "align-right",
    "styles": [
      "fas",
      "far",
      "fal"
    ],
    "membership": {
      "free": [
        "fas"
      ],
      "pro": [
        "fas",
        "far",
        "fal"
      ]
    }
  },
  {
    "unicode": "f036",
    "label": "align-left",
    "name": "align-left",
    "styles": [
      "fas",
      "far",
      "fal"
    ],
    "membership": {
      "free": [
        "fas"
      ],
      "pro": [
        "fas",
        "far",
        "fal"
      ]
    }
  },
  {
    "unicode": "f039",
    "label": "align-justify",
    "name": "align-justify",
    "styles": [
      "fas",
      "far",
      "fal"
    ],
    "membership": {
      "free": [
        "fas"
      ],
      "pro": [
        "fas",
        "far",
        "fal"
      ]
    }
  },
  {
    "unicode": "f037",
    "label": "align-center",
    "name": "align-center",
    "styles": [
      "fas",
      "far",
      "fal"
    ],
    "membership": {
      "free": [
        "fas"
      ],
      "pro": [
        "fas",
        "far",
        "fal"
      ]
    }
  },
  {
    "unicode": "f36c",
    "label": "Algolia",
    "name": "algolia",
    "styles": [
      "fab"
    ],
    "membership": {
      "free": [
        "fab"
      ],
      "pro": [
        "fab"
      ]
    }
  },
  {
    "unicode": "f34e",
    "label": "Alarm Clock",
    "name": "alarm-clock",
    "styles": [
      "fas",
      "far",
      "fal"
    ],
    "membership": {
      "free": [],
      "pro": [
        "fas",
        "far",
        "fal"
      ]
    }
  },
  {
    "unicode": "f5d0",
    "label": "Air Freshener",
    "name": "air-freshener",
    "styles": [
      "fas",
      "far",
      "fal"
    ],
    "membership": {
      "free": [
        "fas"
      ],
      "pro": [
        "fas",
        "far",
        "fal"
      ]
    }
  },
  {
    "unicode": "f36b",
    "label": "affiliatetheme",
    "name": "affiliatetheme",
    "styles": [
      "fab"
    ],
    "membership": {
      "free": [
        "fab"
      ],
      "pro": [
        "fab"
      ]
    }
  },
  {
    "unicode": "f36a",
    "label": "Adversal",
    "name": "adversal",
    "styles": [
      "fab"
    ],
    "membership": {
      "free": [
        "fab"
      ],
      "pro": [
        "fab"
      ]
    }
  },
  {
    "unicode": "f170",
    "label": "App.net",
    "name": "adn",
    "styles": [
      "fab"
    ],
    "membership": {
      "free": [
        "fab"
      ],
      "pro": [
        "fab"
      ]
    }
  },
  {
    "unicode": "f042",
    "label": "adjust",
    "name": "adjust",
    "styles": [
      "fas",
      "far",
      "fal"
    ],
    "membership": {
      "free": [
        "fas"
      ],
      "pro": [
        "fas",
        "far",
        "fal"
      ]
    }
  },
  {
    "unicode": "f2bb",
    "label": "Address Card",
    "name": "address-card",
    "styles": [
      "fas",
      "far",
      "fal"
    ],
    "membership": {
      "free": [
        "fas",
        "far"
      ],
      "pro": [
        "fas",
        "far",
        "fal"
      ]
    }
  },
  {
    "unicode": "f2b9",
    "label": "Address Book",
    "name": "address-book",
    "styles": [
      "fas",
      "far",
      "fal"
    ],
    "membership": {
      "free": [
        "fas",
        "far"
      ],
      "pro": [
        "fas",
        "far",
        "fal"
      ]
    }
  },
  {
    "unicode": "f369",
    "label": "Accusoft",
    "name": "accusoft",
    "styles": [
      "fab"
    ],
    "membership": {
      "free": [
        "fab"
      ],
      "pro": [
        "fab"
      ]
    }
  },
  {
    "unicode": "f368",
    "label": "Accessible Icon",
    "name": "accessible-icon",
    "styles": [
      "fab"
    ],
    "membership": {
      "free": [
        "fab"
      ],
      "pro": [
        "fab"
      ]
    }
  },
  {
    "unicode": "f26e",
    "label": "500px",
    "name": "500px",
    "styles": [
      "fab"
    ],
    "membership": {
      "free": [
        "fab"
      ],
      "pro": [
        "fab"
      ]
    }
  }
];











