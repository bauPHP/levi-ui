const default_settings = {
  leviui: {
    name: "Levi UI",
    pnlr: 1,
    inc: {
      lock: {
        name: "Lock UI",
        enabled: true,
        desc: "Lock ui movement",
        f: [
          'settingsNameHtmlElement',
          'tickHtmlElement'
        ],
        a: "lockUiAction"
      },
      map: {
        name: "Center Map",
        enabled: false,
        desc: "Center map position",
        left: 0,
        top: 0,
        f: [
          'settingsNameHtmlElement',
          'tickHtmlElement'
        ]
      },
      roundmap: {
        name: "Round Map",
        enabled: false,
        desc: "This will round the corners of your map.",
        f: [
          'settingsNameHtmlElement',
          'tickHtmlElement'
        ],
        a: "roundmapAction"
      },
      quicklinks: {
        name: "Quick Links",
        enabled: true,
        desc: "Remove all quicklinks",
        f: [
          'settingsNameHtmlElement',
          'tickHtmlElement'
        ],
        a: "quicklinksAction"
      },
      partyspacer: {
        name: "Party",
        f: "spacerHtmlElement"
      },
      mouseoverparty: {
        name: "Mouseover Party",
        enabled: true,
        desc: "Abilities can be used as mouseover on party",
        f: [
          'settingsNameHtmlElement',
          'tickHtmlElement'
        ]
      },
      shiftselectparty: {
        name: "Shift Key Party",
        enabled: true,
        desc: "Select your party using shift+key",
        f: [
          'settingsNameHtmlElement',
          'tickHtmlElement'
        ]
      },
      partyframerow: {
        name: "Party Columns",
        enabled: true,
        desc: "Change how many rows u want",
        f: [
          'settingsNameHtmlElement',
          'numberboxHtmlElement'
        ],
        n: 3,
        a: "doSavePartyFrameRow",
        ia: true
      },
      featurespacer: {
        name: "Features",
        f: "spacerHtmlElement"
      },
      customplayertimer: {
        name: "Custom Timer",
        enabled: true,
        desc: "Enable custom timer",
        f: [
          'settingsNameHtmlElement',
          'tickHtmlElement'
        ]
      },
      localclock: {
        name: "Local Clock",
        enabled: true,
        desc: "Enable local clock",
        f: [
          'settingsNameHtmlElement',
          'tickHtmlElement'
        ]
      },
      otherspacer: {
        name: "Other",
        f: "spacerHtmlElement"
      },
      classcolorchange: {
        name: "Class Colors",
        enabled: true,
        desc: "Change ui color depending on class",
        f: [
          'settingsNameHtmlElement',
          'tickHtmlElement'
        ]
      },
      itemlink: {
        name: "Item Linking",
        enabled: true,
        desc: "Enable linking items to chat",
        f: [
          'settingsNameHtmlElement',
          'tickHtmlElement'
        ]
      },
      skillcooldown: {
        name: "Cooldown Numbers",
        enabled: true,
        desc: "Show numbers for skill cooldown",
        f: [
          'settingsNameHtmlElement',
          'tickHtmlElement'
        ]
      }
    }
  },
  uisharing: {
    name: "Ui Sharing",
    pnlr: 1,
    inc: {
      headspaceruss: {
        name: "Share UI",
        s: true,
        f: "spacerHtmlElement"
      },
      export: {
        name: "Export UI",
        enabled: true,
        desc: "Export your ui",
        f: [
          'settingsNameHtmlElement',
          'buttonHtmlElement'
        ],
        a: "exportUiAction",
        bn: "Export"
      },
      import: {
        name: "Import UI",
        enabled: true,
        desc: "Import someones ui",
        f: [
          'settingsNameHtmlElement',
          'textboxHtmlElement',
          'buttonRightHtmlElement'
        ],
        a: "importUiAction",
        bn: "Import"
      }
    }
  },
  blockedusers: {
    name: "Blocked Users",
    pnlr: 1,
    f: "getBlockedUsers"
  },
  resetlevi: {
    name: "Reset Levi",
    pnlr: 2,
    f: "doResetLevi"
  }
};
