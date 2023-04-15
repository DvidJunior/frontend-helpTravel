export default {
    "theme": {
      "extend": {
        "colors": {
          "Grays": {
            "Gray40": "#63667066",
            "Black100": "#000000",
            "Dark100": "#212121ff",
            "Gray60": "#63667099",
            "White60": "#ffffff99",
            "White100": "#FFFFFF",
            "White80": "#ffffffcc",
            "Dark80": "#212121cc",
            "Gray100": "#636670ff"
          },
          "Backgrounds": {
            "DarkBlue": "#364570ff",
            "Green": "#2b584dff",
            "LightGreen": "#9cbec6ff",
            "Purple": "#623373ff",
            "Gray": "#f7f4f2ff",
            "Primary": "#fa7930ff"
          },
          "foreground": "#212121ff",
          "background": "#FFFFFF"
        },
        "spacing": {
          "FourUnits": "64px",
          "SixUnits": "96px",
          "FiveUnits": "80px",
          "ThreeUnits": "48px",
          "TwoUnits": "32px",
          "HalfUnit": "8px",
          "Unit": "16px",
          "OneAndHalfUnits": "24px"
        },
        "borderRadius": {
          "Round": "50%",
          "Radius4": "4px",
          "Radius2": "2px",
          "Radius8": "8px"
        },
        "scale": {
          "MaxWidth": "1158px",
          "XXLarge": "288px",
          "Small": "48px",
          "XSmall": "16px",
          "XLarge": "192px",
          "Medium": "96px",
          "Large": "144px"
        }
      }
    },
    "plugins": [],
    "content": [
      "./components/**/*.{js,vue,ts}",
      "./layouts/**/*.vue",
      "./pages/**/*.vue",
      "./plugins/**/*.{js,ts}",
      "./nuxt.config.{js,ts}"
    ]
  }