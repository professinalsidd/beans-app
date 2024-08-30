import { FlatList, Text, View } from "react-native";
import React, { Fragment, useState } from "react";
import LoadingComponent from "../../components/loading-component/loading-component";
import ErrorComponent from "../../components/error-component/error-component";
import HeaderComponent from "../../components/header-component/header-component";
import { ICONS } from "../../constants/icons-constants/icons-constant";
import SearchComponent from "../../components/search-component/search-component";
import ButtonComponent from "../../components/button-component/button-component";
import TextInputComponent from "../../components/text-input-component/text-input-component";
import { SINGLE_INPUT_STYLE } from "../../components/reuseable-style-component/common-style-1";
import Services from "../../config/apis/Services";

export const AnimalsScreen = ({ navigation }) => {
  const [inputForm, setInputForm] = useState("");
  const [showResult, setShowResult] = useState([]);
  const [loading, setLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");

  const handleSubmit = () => {
    setLoading(true);
    Services.animal(inputForm)
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
        console.log("err==>.", err.message);
        setErrorMsg(err.message);
        setLoading(false);
        setShowResult([]);
      });
  };

  const renderItem = ({ item }: any) => {
    const characteristics = Object.entries<string>(item.characteristics);
    const taxonomy = Object.entries<string>(item.taxonomy);

    return (
      <View style={SINGLE_INPUT_STYLE.mainContainer}>
        <View style={SINGLE_INPUT_STYLE.headingContainer}>
          <Text style={SINGLE_INPUT_STYLE.headingText}>{item.name}</Text>
        </View>
        {characteristics.map(([key, value]: [string, string]) => (
          <Text style={SINGLE_INPUT_STYLE.textStyle} key={key}>
            {key}: - {value}
          </Text>
        ))}
        {taxonomy.map(([key, value]: [string, string]) => (
          <Text style={SINGLE_INPUT_STYLE.textStyle} key={key}>
            {key}: - {value}
          </Text>
        ))}
        <View style={{ marginVertical: 10 }}>
          {item.locations.map((location: string, index: number) => (
            <Text key={index.toString()} style={SINGLE_INPUT_STYLE.textStyle}>
              Locations: - {location}
            </Text>
          ))}
        </View>
      </View>
    );
  };

  return (
    <Fragment>
      <HeaderComponent
        heading="Animals Details"
        leftIcon={ICONS.left_Arrow}
        leftRoute={() => navigation.navigate("Home" as never)}
      />
      <View style={SINGLE_INPUT_STYLE.container}>
        <View style={SINGLE_INPUT_STYLE.subContainer}>
          <TextInputComponent
            placeHolderName="Enter Animal Name"
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
