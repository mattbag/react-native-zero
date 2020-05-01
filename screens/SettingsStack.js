import { Ionicons } from "@expo/vector-icons";
import * as WebBrowser from "expo-web-browser";
import * as React from "react";
// import { StyleSheet, Text, View } from "react-native";
// import { RectButton, ScrollView } from "react-native-gesture-handler";

import ProfileScreen from "./Profile/ProfileScreen";
import SettingsScreen from "./Profile/SettingsScreen";
import NotificationsScreen from "./Profile/NotificationsScreen";
import { createStackNavigator } from "@react-navigation/stack";
const Stack = createStackNavigator();

export default function SettingsStack() {
  return (
    <Stack.Navigator>
      {/* <Stack.Screen name="Notifications" component={Notifications} /> */}
      <Stack.Screen
        name="Settings"
        component={SettingsScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen name="Profile" component={ProfileScreen} />
      <Stack.Screen
        name="Notifications"
        component={NotificationsScreen}
        options={{ headerShown: true }}
      />
    </Stack.Navigator>
  );
}
