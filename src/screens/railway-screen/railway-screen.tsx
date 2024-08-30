import { FlatList, ScrollView, Text, View } from "react-native";
import React, { Fragment, useState } from "react";
import LoadingComponent from "../../components/loading-component/loading-component";
import ErrorComponent from "../../components/error-component/error-component";
import SearchComponent from "../../components/search-component/search-component";
import ButtonComponent from "../../components/button-component/button-component";
import TextInputComponent from "../../components/text-input-component/text-input-component";
import { SINGLE_INPUT_STYLE } from "../../components/reuseable-style-component/common-style-1";
import axios from "axios";

export const RailwayScreen = () => {
  const [inputForm, setInputForm] = useState("");
  const [showResult, setShowResult] = useState([]);
  const [loading, setLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");

  const handleSubmit = () => {
    setLoading(true);
    axios
      .post(
        "https://trains.p.rapidapi.com/",
        { search: inputForm },
        {
          headers: {
            "Content-Type": "application/json",
            "X-RapidAPI-Key":
              "21aba5f66cmsh8f80e1041fcee06p1c1223jsn04309f935c66",
            "X-RapidAPI-Host": "trains.p.rapidapi.com",
          },
        }
      )
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
        setShowResult([]);
      });
  };

  return (
    <Fragment>
      <View style={SINGLE_INPUT_STYLE.container}>
        <View style={SINGLE_INPUT_STYLE.subContainer}>
          <TextInputComponent
            placeHolderName="Search with train number or train name."
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
              <View style={SINGLE_INPUT_STYLE.mainContainer}>
                <View>
                  {showResult.map((d: any, index: any) => (
                    <View key={index}>
                      <View style={SINGLE_INPUT_STYLE.singleCardContainer}>
                        <Text
                          style={SINGLE_INPUT_STYLE.singleCardContainerText}
                        >
                          Train name:- {d.name}
                        </Text>
                      </View>
                      <View style={SINGLE_INPUT_STYLE.singleCardContainer}>
                        <Text
                          style={SINGLE_INPUT_STYLE.singleCardContainerText}
                        >
                          Train Number:-
                          {d.train_num}
                        </Text>
                      </View>
                      <View style={SINGLE_INPUT_STYLE.singleCardContainer}>
                        <Text
                          style={SINGLE_INPUT_STYLE.singleCardContainerText}
                        >
                          Train from:- {d.train_from}
                        </Text>
                      </View>
                      <View style={SINGLE_INPUT_STYLE.singleCardContainer}>
                        <Text
                          style={SINGLE_INPUT_STYLE.singleCardContainerText}
                        >
                          Depart time:-
                          {d.data.departTime}
                        </Text>
                      </View>
                      <View style={SINGLE_INPUT_STYLE.singleCardContainer}>
                        <Text
                          style={SINGLE_INPUT_STYLE.singleCardContainerText}
                        >
                          Train to:- {d.train_to}
                        </Text>
                      </View>
                      <View style={SINGLE_INPUT_STYLE.singleCardContainer}>
                        <Text
                          style={SINGLE_INPUT_STYLE.singleCardContainerText}
                        >
                          Arrive time:- {d.data?.arriveTime}
                        </Text>
                      </View>
                      <View style={SINGLE_INPUT_STYLE.singleCardContainer}>
                        <Text
                          style={SINGLE_INPUT_STYLE.singleCardContainerText}
                        >
                          Classes:- {d.data?.classes.join(", ")}
                        </Text>
                      </View>
                      <View style={SINGLE_INPUT_STYLE.singleCardContainer}>
                        <Text
                          style={SINGLE_INPUT_STYLE.singleCardContainerText}
                        >
                          From Id:-
                          {d.data?.from_id}
                        </Text>
                      </View>
                      <View style={SINGLE_INPUT_STYLE.singleCardContainer}>
                        <Text
                          style={SINGLE_INPUT_STYLE.singleCardContainerText}
                        >
                          To Id:- {d.data?.to_id}
                        </Text>
                      </View>
                      <View style={SINGLE_INPUT_STYLE.singleCardContainer}>
                        <Text
                          style={SINGLE_INPUT_STYLE.singleCardContainerText}
                        >
                          Id:- {d.data?.id}
                        </Text>
                      </View>
                    </View>
                  ))}
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
