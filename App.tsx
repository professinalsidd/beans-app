import "react-native-gesture-handler";
import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import { CustomDrawer } from "./src/Routes/drawer-navigation-routes";
import { AnimalsScreen } from "./src/screens/animals-screen";
import { CarScreen } from "./src/screens/cars-screen";
import { JokesScreen } from "./src/screens/jokes-screen";
import { AirQualityScreen } from "./src/screens/air-quality-screen";
import { CryptoPriceScreen } from "./src/screens/crypto-price-screen";
import { BikeScreen } from "./src/screens/bike-screen";
import { CityScreen } from "./src/screens/city-screen";
import { DictionaryScreen } from "./src/screens/dictionary-screen";
import { DogsScreen } from "./src/screens/dogs-screen";
import { ExerciseScreen } from "./src/screens/exercise-screen";
import { InterestRateScreen } from "./src/screens/interest-rate-screen";
import { MortgageCalculatorScreen } from "./src/screens/mortgage-calculator-screen";
import { PasswordGenerator } from "./src/screens/password-generator";
import { QuotesScreen } from "./src/screens/quotes-screen";

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={CustomDrawer}
          options={{ headerShown: false, animationEnabled: false }}
        />
        <Stack.Screen
          name="animals"
          component={AnimalsScreen}
          options={{ headerShown: false, animationEnabled: false }}
        />
        <Stack.Screen
          name="cars"
          component={CarScreen}
          options={{ headerShown: false, animationEnabled: false }}
        />
        <Stack.Screen
          name="jokes"
          component={JokesScreen}
          options={{ headerShown: false, animationEnabled: false }}
        />
        <Stack.Screen
          name="airQuality"
          component={AirQualityScreen}
          options={{ headerShown: false, animationEnabled: false }}
        />
        <Stack.Screen
          name="cryptoPrice"
          component={CryptoPriceScreen}
          options={{ headerShown: false, animationEnabled: false }}
        />
        <Stack.Screen
          name="dogs"
          component={DogsScreen}
          options={{ headerShown: false, animationEnabled: false }}
        />
        <Stack.Screen
          name="bike"
          component={BikeScreen}
          options={{ headerShown: false, animationEnabled: false }}
        />
        <Stack.Screen
          name="exercise"
          component={ExerciseScreen}
          options={{ headerShown: false, animationEnabled: false }}
        />
        <Stack.Screen
          name="dictionary"
          component={DictionaryScreen}
          options={{ headerShown: false, animationEnabled: false }}
        />
        <Stack.Screen
          name="interestRateScreen"
          component={InterestRateScreen}
          options={{ headerShown: false, animationEnabled: false }}
        />
        <Stack.Screen
          name="password_generator"
          component={PasswordGenerator}
          options={{ headerShown: false, animationEnabled: false }}
        />
        <Stack.Screen
          name="city"
          component={CityScreen}
          options={{ headerShown: false, animationEnabled: false }}
        />
        <Stack.Screen
          name="mortgageCalculator"
          component={MortgageCalculatorScreen}
          options={{ headerShown: false, animationEnabled: false }}
        />
        <Stack.Screen
          name="quotes"
          component={QuotesScreen}
          options={{ headerShown: false, animationEnabled: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
