import * as Linking from "expo-linking";

export default {
  prefixes: [Linking.makeUrl("/")],
  config: {
    Root: {
      path: "root",
      screens: {
        Home: "home",
        Links: "links",
      },
    },
    Settings: {
      path: "settings",
      screens: {
        Profile: "profile",
        Settings: "options",
        Notifications: "notifications",
      },
    },
  },
};
