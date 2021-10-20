import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";
import { NavigationContainer } from "@react-navigation/native";
import { TabOneScreen } from "./screens/TabOneScreen";
import { TabTwoScreen } from "./screens/TabTwoScreen";
import { TabThreeScreen } from "./screens/TabThreeScreen";

const BottomTab = createBottomTabNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <BottomTab.Navigator>
        <BottomTab.Screen
          name="TabOne"
          component={TabOneScreen}
          options={{
            tabBarLabel: "Inline",
            tabBarIcon: () => <Ionicons name={"code-slash"} size={20} />,
          }}
        />
        <BottomTab.Screen
          name="TabTwo"
          component={TabTwoScreen}
          options={{
            tabBarLabel: "URL",
            tabBarIcon: () => <Ionicons name={"link"} size={20} />,
          }}
        />
        <BottomTab.Screen
          name="TabThree"
          component={TabThreeScreen}
          options={{
            tabBarLabel: "Local",
            tabBarIcon: () => <Ionicons name={"document"} size={20} />,
          }}
        />
      </BottomTab.Navigator>
    </NavigationContainer>
  );
};

export default App;
