import { ScrollView, Text, View } from "react-native";
import React, { Fragment, useState } from "react";
import LoadingComponent from "../../components/loading-component/loading-component";
import ErrorComponent from "../../components/error-component/error-component";
import SearchComponent from "../../components/search-component/search-component";
import ButtonComponent from "../../components/button-component/button-component";
import TextInputComponent from "../../components/text-input-component/text-input-component";
import { SINGLE_INPUT_STYLE } from "../../components/reuseable-style-component/common-style-1";
import Services from "../../config/apis/Services";

export const WeatherScreen = () => {
  const [inputForm, setInputForm] = useState("");
  const [showResult, setShowResult] = useState({});
  const [loading, setLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");

  const handleSubmit = () => {
    setLoading(true);
    Services.weather(inputForm)
      .then((res: any) => {
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
                    Wind speed:- {showResult && showResult?.wind_speed}
                  </Text>
                </View>
                <View style={SINGLE_INPUT_STYLE.singleCardContainer}>
                  <Text style={SINGLE_INPUT_STYLE.singleCardContainerText}>
                    Wind Degrees:- {showResult && showResult?.wind_degrees}
                  </Text>
                  <Text style={SINGLE_INPUT_STYLE.singleCardContainerText}>
                    Temp:- {showResult && showResult?.temp}
                  </Text>
                </View>
                <View style={SINGLE_INPUT_STYLE.singleCardContainer}>
                  <Text style={SINGLE_INPUT_STYLE.singleCardContainerText}>
                    Humidity:- {showResult && showResult?.humidity}
                  </Text>
                  <Text style={SINGLE_INPUT_STYLE.singleCardContainerText}>
                    Sunset:- {showResult && showResult?.sunset}
                  </Text>
                </View>
                <View style={SINGLE_INPUT_STYLE.singleCardContainer}>
                  <Text style={SINGLE_INPUT_STYLE.singleCardContainerText}>
                    Min temp:- {showResult && showResult?.min_temp}
                  </Text>
                  <Text style={SINGLE_INPUT_STYLE.singleCardContainerText}>
                    Cloud pct:- {showResult && showResult?.cloud_pct}
                  </Text>
                </View>
                <View style={SINGLE_INPUT_STYLE.singleCardContainer}>
                  <Text style={SINGLE_INPUT_STYLE.singleCardContainerText}>
                    Feels like:- {showResult && showResult?.feels_like}
                  </Text>
                  <Text style={SINGLE_INPUT_STYLE.singleCardContainerText}>
                    Sunrise:- {showResult && showResult?.sunrise}
                  </Text>
                </View>
                <View style={SINGLE_INPUT_STYLE.singleCardContainer}>
                  <Text style={SINGLE_INPUT_STYLE.singleCardContainerText}>
                    Max temp:-
                    {showResult && showResult?.max_temp}
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
