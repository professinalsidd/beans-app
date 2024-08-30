import { ScrollView, Text, View } from "react-native";
import React, { Fragment, useState } from "react";
import LoadingComponent from "../../components/loading-component/loading-component";
import ErrorComponent from "../../components/error-component/error-component";
import Axios from "../../config/axios/axios";
import HeaderComponent from "../../components/header-component/header-component";
import { ICONS } from "../../constants/icons-constants/icons-constant";
import SearchComponent from "../../components/search-component/search-component";
import ButtonComponent from "../../components/button-component/button-component";
import TextInputComponent from "../../components/text-input-component/text-input-component";
import { SINGLE_INPUT_STYLE } from "../../components/reuseable-style-component/common-style-1";
import { useCustomNavigation } from "../../config/use-navigation/use-navigation";

export const AirQualityScreen = () => {
  const navigation = useCustomNavigation();
  const [inputForm, setInputForm] = useState("");
  const [showResult, setShowResult] = useState({});
  const [loading, setLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");

  const handleSubmit = () => {
    setLoading(true);
    Axios.get(`https://api.api-ninjas.com/v1/airquality?city=${inputForm}`)
      .then((res) => {
        setShowResult(res.data);
        setLoading(false);
        if (res.data.length === 0) {
          setErrorMsg("No results found. Please search again");
        } else {
          setErrorMsg("");
        }
      })
      .catch((err) => {
        setErrorMsg(err.message);
        setLoading(false);
        setShowResult({});
      });
  };

  return (
    <Fragment>
      <HeaderComponent
        heading="Air Quality Details"
        leftIcon={ICONS.left_Arrow}
        leftRoute={() => navigation.navigate("Home" as never)}
      />
      <View style={SINGLE_INPUT_STYLE.container}>
        <View style={SINGLE_INPUT_STYLE.subContainer}>
          <TextInputComponent
            placeHolderName="Enter City Name"
            placeHolderTextColor="#000"
            onChangeText={(text: React.SetStateAction<string>) =>
              setInputForm(text)
            }
            value={inputForm}
            style={SINGLE_INPUT_STYLE.textInput}
          />
          <ButtonComponent
            onPress={handleSubmit}
            buttonContainer={[
              SINGLE_INPUT_STYLE.buttonContainer,
              inputForm ? {} : { opacity: 0.5 },
            ]}
            disabled={!inputForm}
            text="Search"
            buttonText={SINGLE_INPUT_STYLE.buttonText}
          />
          {loading ? <LoadingComponent /> : null}
          {errorMsg ? <ErrorComponent msg={errorMsg} /> : null}
          {showResult || errorMsg ? (
            <ScrollView>
              <View style={SINGLE_INPUT_STYLE.mainContainer}>
                <View style={SINGLE_INPUT_STYLE.singleCardContainer}>
                  <Text style={SINGLE_INPUT_STYLE.singleCardContainerText}>
                    Overall aqi:- {showResult && showResult?.overall_aqi}
                  </Text>
                </View>
                <View style={SINGLE_INPUT_STYLE.singleCardContainer}>
                  <Text style={SINGLE_INPUT_STYLE.singleCardContainerText}>
                    CO:- Concentration{" "}
                    {showResult && showResult?.CO?.concentration}
                  </Text>
                  <Text style={SINGLE_INPUT_STYLE.singleCardContainerText}>
                    CO:- Aqi {showResult && showResult?.CO?.aqi}
                  </Text>
                </View>
                <View style={SINGLE_INPUT_STYLE.singleCardContainer}>
                  <Text style={SINGLE_INPUT_STYLE.singleCardContainerText}>
                    PM10:- Concentration{" "}
                    {showResult && showResult?.PM10?.concentration}
                  </Text>
                  <Text style={SINGLE_INPUT_STYLE.singleCardContainerText}>
                    PM10:- Aqi {showResult && showResult?.PM10?.aqi}
                  </Text>
                </View>
                <View style={SINGLE_INPUT_STYLE.singleCardContainer}>
                  <Text style={SINGLE_INPUT_STYLE.singleCardContainerText}>
                    SO2:- Concentration{" "}
                    {showResult && showResult?.SO2?.concentration}
                  </Text>
                  <Text style={SINGLE_INPUT_STYLE.singleCardContainerText}>
                    SO2:- Aqi {showResult && showResult?.SO2?.aqi}
                  </Text>
                </View>
                <View style={SINGLE_INPUT_STYLE.singleCardContainer}>
                  <Text style={SINGLE_INPUT_STYLE.singleCardContainerText}>
                    O3:- Concentration{" "}
                    {showResult && showResult?.O3?.concentration}
                  </Text>
                  <Text style={SINGLE_INPUT_STYLE.singleCardContainerText}>
                    O3:- Aqi {showResult && showResult?.O3?.aqi}
                  </Text>
                </View>
                <View style={SINGLE_INPUT_STYLE.singleCardContainer}>
                  <Text style={SINGLE_INPUT_STYLE.singleCardContainerText}>
                    NO2:- Concentration{" "}
                    {showResult && showResult?.NO2?.concentration}
                  </Text>
                  <Text style={SINGLE_INPUT_STYLE.singleCardContainerText}>
                    NO2:- Aqi {showResult && showResult?.NO2?.aqi}
                  </Text>
                </View>
              </View>
            </ScrollView>
          ) : (
            <SearchComponent />
          )}
        </View>
      </View>
    </Fragment>
  );
};
