import { FlatList, ScrollView, Text, View } from "react-native";
import React, { Fragment, useState } from "react";
import LoadingComponent from "../../components/loading-component/loading-component";
import ErrorComponent from "../../components/error-component/error-component";
import SearchComponent from "../../components/search-component/search-component";
import ButtonComponent from "../../components/button-component/button-component";
import TextInputComponent from "../../components/text-input-component/text-input-component";
import { SINGLE_INPUT_STYLE } from "../../components/reuseable-style-component/common-style-1";
import Services from "../../config/apis/Services";

export const CelebrityScreen = () => {
  const [inputForm, setInputForm] = useState("");
  const [showResult, setShowResult] = useState([]);
  const [loading, setLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");

  const handleSubmit = () => {
    setLoading(true);
    Services.celebrity(inputForm)
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
        setShowResult([]);
      });
  };

  return (
    <Fragment>
      <View style={SINGLE_INPUT_STYLE.container}>
        <View style={SINGLE_INPUT_STYLE.subContainer}>
          <TextInputComponent
            placeHolderName="Enter celebrity name"
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
          {showResult.length > 0 || errorMsg ? (
            <ScrollView>
              {showResult?.map((d: any, index: any) => (
                <View key={index}>
                  <View style={SINGLE_INPUT_STYLE.singleCardContainer}>
                    <Text style={SINGLE_INPUT_STYLE.singleCardContainerText}>
                      Name:- {d.name}
                    </Text>
                  </View>
                  <View style={SINGLE_INPUT_STYLE.singleCardContainer}>
                    <Text style={SINGLE_INPUT_STYLE.singleCardContainerText}>
                      Net Worth:- {d.net_worth}
                    </Text>
                  </View>
                  <View style={SINGLE_INPUT_STYLE.singleCardContainer}>
                    <Text style={SINGLE_INPUT_STYLE.singleCardContainerText}>
                      Gender:- {d.gender}
                    </Text>
                  </View>
                  <View style={SINGLE_INPUT_STYLE.singleCardContainer}>
                    <Text style={SINGLE_INPUT_STYLE.singleCardContainerText}>
                      Nationality:- {d.nationality}
                    </Text>
                  </View>
                  <View style={SINGLE_INPUT_STYLE.singleCardContainer}>
                    <Text style={SINGLE_INPUT_STYLE.singleCardContainerText}>
                      Occupation:- {d.occupation.join(", ")}
                    </Text>
                  </View>
                  <View style={SINGLE_INPUT_STYLE.singleCardContainer}>
                    <Text style={SINGLE_INPUT_STYLE.singleCardContainerText}>
                      Height:- {d.height}
                    </Text>
                  </View>
                  <View style={SINGLE_INPUT_STYLE.singleCardContainer}>
                    <Text style={SINGLE_INPUT_STYLE.singleCardContainerText}>
                      Birthday:- {d.birthday}
                    </Text>
                  </View>
                  <View style={SINGLE_INPUT_STYLE.singleCardContainer}>
                    <Text style={SINGLE_INPUT_STYLE.singleCardContainerText}>
                      Age:- {d.age}
                    </Text>
                  </View>
                </View>
              ))}
            </ScrollView>
          ) : (
            <SearchComponent />
          )}
        </View>
      </View>
    </Fragment>
  );
};
