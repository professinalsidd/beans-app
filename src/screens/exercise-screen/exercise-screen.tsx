import { FlatList, Text, View } from "react-native";
import React, { Fragment, useState } from "react";
import LoadingComponent from "../../components/loading-component/loading-component";
import ErrorComponent from "../../components/error-component/error-component";
import Axios from "../../config/axios/axios";
import HeaderComponent from "../../components/header-component/header-component";
import { ICONS } from "../../constants/icons-constants/icons-constant";
import { useNavigation } from "@react-navigation/native";
import SearchComponent from "../../components/search-component/search-component";
import ButtonComponent from "../../components/button-component/button-component";
import TextInputComponent from "../../components/text-input-component/text-input-component";
import { SINGLE_INPUT_STYLE } from "../../components/reuseable-style-component/common-style-1";

export const ExerciseScreen = () => {
  const navigation = useNavigation();
  const [inputForm, setInputForm] = useState("");
  const [showResult, setShowResult] = useState([]);
  const [loading, setLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");

  const handleSubmit = () => {
    setLoading(true);
    Axios.get(`https://api.api-ninjas.com/v1/exercises?muscle=${inputForm}`)
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
        console.log("err==>.", err.message);
        setErrorMsg(err.message);
        setLoading(false);
        setShowResult([]);
      });
  };

  const renderItem = ({ item }: { item: any }) => {
    return (
      <View style={SINGLE_INPUT_STYLE.mainContainer}>
        {Object.entries(item).map(([key, value]: [any, any]) => (
          <Text style={SINGLE_INPUT_STYLE.textStyle} key={key}>
            {key}: - {value}
          </Text>
        ))}
      </View>
    );
  };

  return (
    <Fragment>
      <HeaderComponent
        heading="Exercise Details"
        leftIcon={ICONS.left_Arrow}
        leftRoute={() => navigation.navigate("Home" as never)}
      />
      <View style={SINGLE_INPUT_STYLE.container}>
        <View style={SINGLE_INPUT_STYLE.subContainer}>
          <TextInputComponent
            placeHolderName="Enter your exercise name"
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
            <FlatList
              data={showResult}
              renderItem={renderItem}
              keyExtractor={(item, index) => index.toString()}
            />
          ) : (
            <SearchComponent />
          )}
        </View>
      </View>
    </Fragment>
  );
};
