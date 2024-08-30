import { Pressable, ScrollView, Text, View } from "react-native";
import React, { Fragment, useEffect, useState } from "react";
import { DASHBOARD_STYLE } from "./dashboard-screen.style";
import { DASHBOARD_DATA } from "../../constants/ui-constants/ui-constants";

export const DashboardScreen = ({ navigation }) => {
  const [shuffledData, setShuffledData] = useState([]);
  useEffect(() => {
    // Shuffle the DASHBOARD_DATA array on component mount
    const shuffledArray = [...DASHBOARD_DATA];
    for (let i = shuffledArray.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffledArray[i], shuffledArray[j]] = [
        shuffledArray[j],
        shuffledArray[i],
      ];
    }
    setShuffledData(shuffledArray as []);
  }, []);

  return (
    <Fragment>
      <View style={DASHBOARD_STYLE.container}>
        <ScrollView>
          <View style={DASHBOARD_STYLE.subContainer}>
            {shuffledData.map((d: any) => (
              <Fragment key={d.id}>
                <Pressable onPress={() => navigation.navigate(d.link as never)}>
                  <View style={DASHBOARD_STYLE.mappingContainer}>
                    <Text style={DASHBOARD_STYLE.heading}>{d.name}</Text>
                  </View>
                </Pressable>
              </Fragment>
            ))}
          </View>
        </ScrollView>
      </View>
    </Fragment>
  );
};
