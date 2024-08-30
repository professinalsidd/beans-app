import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { DashboardScreen } from "../../screens/dashboard-screen";
import { FactsScreen } from "../../screens/facts-screen/facts-screen";
import { RecipeScreen } from "../../screens/recipe-screen/recipe-screen";
import { PlantsScreen } from "../../screens/plants-screen/plants-screen";
import { WeatherScreen } from "../../screens/weather-screen/weather-screen";
import { HelicopterScreen } from "../../screens/helicopter-screen/helicopter-screen";
import { RailwayScreen } from "../../screens/railway-screen/railway-screen";
import { CocktailScreen } from "../../screens/cocktail-screen/cocktail-screen";
import { CaloriesBurnedScreen } from "../../screens/calories-burned-screen/calories-burned-screen";
import { RandomImagesScreen } from "../../screens/random-images/random-images";
import { StarsScreen } from "../../screens/stars-screen/stars-screen";
import { CelebrityScreen } from "../../screens/celebrity-screen/celebrity-screen";
import { BabyScreen } from "../../screens/baby-name-screen/baby-name-screen";
import { HistoricalEvents } from "../../screens/historical-events-screen";

export function CustomDrawer() {
  const Drawer = createDrawerNavigator();
  return (
    <Drawer.Navigator useLegacyImplementation={true}>
      <Drawer.Screen
        name="Welcome To Beans Dashboard"
        component={DashboardScreen}
        options={{
          drawerLabelStyle: { color: "#000" },
          drawerActiveBackgroundColor: "#AEE2FF",
        }}
      />
      <Drawer.Screen
        name="Facts"
        component={FactsScreen}
        options={{
          drawerLabelStyle: { color: "#000" },
          drawerActiveBackgroundColor: "#AEE2FF",
        }}
      />
      <Drawer.Screen
        name="Recipe Details"
        component={RecipeScreen}
        options={{
          drawerLabelStyle: { color: "#000" },
          drawerActiveBackgroundColor: "#AEE2FF",
        }}
      />
      <Drawer.Screen
        name="Plants Details"
        component={PlantsScreen}
        options={{
          drawerLabelStyle: { color: "#000" },
          drawerActiveBackgroundColor: "#AEE2FF",
        }}
      />
      <Drawer.Screen
        name="Weather Details"
        component={WeatherScreen}
        options={{
          drawerLabelStyle: { color: "#000" },
          drawerActiveBackgroundColor: "#AEE2FF",
        }}
      />
      <Drawer.Screen
        name="Helicopter Details"
        component={HelicopterScreen}
        options={{
          drawerLabelStyle: { color: "#000" },
          drawerActiveBackgroundColor: "#AEE2FF",
        }}
      />
      <Drawer.Screen
        name="Railway Details"
        component={RailwayScreen}
        options={{
          drawerLabelStyle: { color: "#000" },
          drawerActiveBackgroundColor: "#AEE2FF",
        }}
      />
      <Drawer.Screen
        name="Cocktail Details"
        component={CocktailScreen}
        options={{
          drawerLabelStyle: { color: "#000" },
          drawerActiveBackgroundColor: "#AEE2FF",
        }}
      />
      <Drawer.Screen
        name="Calories Burned Details"
        component={CaloriesBurnedScreen}
        options={{
          drawerLabelStyle: { color: "#000" },
          drawerActiveBackgroundColor: "#AEE2FF",
        }}
      />
      <Drawer.Screen
        name="Random Images"
        component={RandomImagesScreen}
        options={{
          drawerLabelStyle: { color: "#000" },
          drawerActiveBackgroundColor: "#AEE2FF",
        }}
      />
      <Drawer.Screen
        name="Stars Details"
        component={StarsScreen}
        options={{
          drawerLabelStyle: { color: "#000" },
          drawerActiveBackgroundColor: "#AEE2FF",
        }}
      />
      <Drawer.Screen
        name="Celebrity Details"
        component={CelebrityScreen}
        options={{
          drawerLabelStyle: { color: "#000" },
          drawerActiveBackgroundColor: "#AEE2FF",
        }}
      />
      <Drawer.Screen
        name="Baby Name"
        component={BabyScreen}
        options={{
          drawerLabelStyle: { color: "#000" },
          drawerActiveBackgroundColor: "#AEE2FF",
        }}
      />
      <Drawer.Screen
        name="History Events"
        component={HistoricalEvents}
        options={{
          drawerLabelStyle: { color: "#000" },
          drawerActiveBackgroundColor: "#AEE2FF",
        }}
      />
    </Drawer.Navigator>
  );
}
