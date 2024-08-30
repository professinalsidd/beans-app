import { Image, ScrollView, Text, View } from "react-native";
import React, { Fragment, useState } from "react";
import LoadingComponent from "../../components/loading-component/loading-component";
import ErrorComponent from "../../components/error-component/error-component";
import SearchComponent from "../../components/search-component/search-component";
import ButtonComponent from "../../components/button-component/button-component";
import TextInputComponent from "../../components/text-input-component/text-input-component";
import { SINGLE_INPUT_STYLE } from "../../components/reuseable-style-component/common-style-1";
import Services from "../../config/apis/Services";

export const RandomImagesScreen = () => {
  const [inputForm, setInputForm] = useState("");
  const [showResult, setShowResult] = useState("");
  const [loading, setLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");

  const handleSubmit = () => {
    setLoading(true);
    Services.randomImages(inputForm)
      .then((res: any) => {
        setShowResult(res.data);
        setLoading(false);
        if (!res.data) {
          setErrorMsg("No results found. Please search again");
        } else {
          setErrorMsg("");
        }
      })
      .catch((err) => {
        setErrorMsg(err.message);
        setLoading(false);
      });
  };

  return (
    <Fragment>
      <View style={SINGLE_INPUT_STYLE.container}>
        <View style={SINGLE_INPUT_STYLE.subContainer}>
          <TextInputComponent
            placeHolderName="Enter images category"
            placeHolderTextColor="#000"
            onChangeText={(text: React.SetStateAction<string>) =>
              setInputForm(text)
            }
            value={inputForm}
            style={SINGLE_INPUT_STYLE.textInput}
            keyboardType="default"
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
          {showResult ? (
            <ScrollView>
              <View style={SINGLE_INPUT_STYLE.mainContainer}>
                <View>
                  <Image
                    source={{ uri: `data:image/jpeg;base64,${showResult}` }}
                    style={{ width: "100%", aspectRatio: 1 }}
                    resizeMode="contain"
                  />
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
