import { useLinking } from "@react-navigation/native";
import { Linking } from "expo";

// https://reactnavigation.org/docs/use-linking/
export default function (containerRef) {
  return useLinking(containerRef, {
    prefixes: [Linking.makeUrl("/")],
    config: {
      Root: {
        path: "/",
        screens: {
          Home: "home",
          Links: "links",
          Settings: "settings",
        },
      },
    },
  });
}
