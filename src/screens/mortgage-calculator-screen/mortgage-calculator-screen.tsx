import { ScrollView, Text, View } from "react-native";
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

export const MortgageCalculatorScreen = () => {
  const navigation = useNavigation();
  const [inputForm, setInputForm] = useState("");
  const [inputForm2, setInputForm2] = useState("");
  const [inputForm3, setInputForm3] = useState("");
  const [showResult, setShowResult] = useState({});
  const [loading, setLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");

  const handleSubmit = () => {
    setLoading(true);
    Axios.get(
      `https://api.api-ninjas.com/v1/mortgagecalculator?loan_amount=${inputForm}&interest_rate=
${inputForm2}&duration_years=
${inputForm3}`
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
        console.log("err==>.", err.message);
        setErrorMsg(err.message);
        setLoading(false);
        setShowResult({});
      });
  };

  return (
    <Fragment>
      <HeaderComponent
        heading="Mortgage Calculator"
        leftIcon={ICONS.left_Arrow}
        leftRoute={() => navigation.navigate("Home" as never)}
      />
      <View style={SINGLE_INPUT_STYLE.container}>
        <View style={SINGLE_INPUT_STYLE.subContainer}>
          <TextInputComponent
            placeHolderName="Enter loan amount"
            placeHolderTextColor="#000"
            onChangeText={(text: React.SetStateAction<string>) =>
              setInputForm(text)
            }
            value={inputForm}
            style={SINGLE_INPUT_STYLE.textInput}
            keyboardType="numeric"
          />
          <View style={{ marginVertical: "2%" }}></View>
          <TextInputComponent
            placeHolderName="Enter your interest rate example 1.2"
            placeHolderTextColor="#000"
            onChangeText={(text: React.SetStateAction<string>) =>
              setInputForm2(text)
            }
            value={inputForm2}
            style={SINGLE_INPUT_STYLE.textInput}
            keyboardType="numeric"
          />
          <View style={{ marginVertical: "2%" }}></View>
          <TextInputComponent
            placeHolderName="Enter your duration years"
            placeHolderTextColor="#000"
            onChangeText={(text: React.SetStateAction<string>) =>
              setInputForm3(text)
            }
            value={inputForm3}
            style={SINGLE_INPUT_STYLE.textInput}
            keyboardType="numeric"
          />
          <ButtonComponent
            onPress={handleSubmit}
            buttonContainer={[
              SINGLE_INPUT_STYLE.buttonContainer,
              inputForm && inputForm2 && inputForm3 ? {} : { opacity: 0.5 },
            ]}
            disabled={!inputForm && !inputForm2 && !inputForm3}
            text="Search"
            buttonText={SINGLE_INPUT_STYLE.buttonText}
          />

          {loading ? <LoadingComponent /> : null}
          <View style={{ marginTop: errorMsg ? "26%" : "1%" }}></View>
          {errorMsg ? (
            <ErrorComponent
              msg={errorMsg ? "please provide correct number" : null}
            />
          ) : null}
          <View style={{ marginTop: errorMsg ? "26%" : "1%" }}></View>
          {showResult || errorMsg ? (
            <ScrollView>
              <View style={SINGLE_INPUT_STYLE.mainContainer}>
                <View style={SINGLE_INPUT_STYLE.singleCardContainer}>
                  <Text style={SINGLE_INPUT_STYLE.singleCardContainerText}>
                    Total interest paid:-{" "}
                    {showResult && showResult?.total_interest_paid}
                  </Text>
                </View>
                <View style={SINGLE_INPUT_STYLE.singleCardContainer}>
                  <Text style={SINGLE_INPUT_STYLE.singleCardContainerText}>
                    monthly payment total:-{" "}
                    {showResult && showResult?.monthly_payment?.total}
                  </Text>
                </View>
                <View style={SINGLE_INPUT_STYLE.singleCardContainer}>
                  <Text style={SINGLE_INPUT_STYLE.singleCardContainerText}>
                    monthly payment mortgage:-{" "}
                    {showResult && showResult?.monthly_payment?.mortgage}
                  </Text>
                </View>
                <View style={SINGLE_INPUT_STYLE.singleCardContainer}>
                  <Text style={SINGLE_INPUT_STYLE.singleCardContainerText}>
                    monthly payment property tax:-{" "}
                    {showResult && showResult?.monthly_payment?.property_tax}
                  </Text>
                </View>
                <View style={SINGLE_INPUT_STYLE.singleCardContainer}>
                  <Text style={SINGLE_INPUT_STYLE.singleCardContainerText}>
                    monthly payment hoa:-{" "}
                    {showResult && showResult?.monthly_payment?.hoa}
                  </Text>
                </View>
                <View style={SINGLE_INPUT_STYLE.singleCardContainer}>
                  <Text style={SINGLE_INPUT_STYLE.singleCardContainerText}>
                    monthly payment annual home ins:-{" "}
                    {showResult && showResult?.monthly_payment?.annual_home_ins}
                  </Text>
                </View>
                <View style={SINGLE_INPUT_STYLE.singleCardContainer}>
                  <Text style={SINGLE_INPUT_STYLE.singleCardContainerText}>
                    annual payment:-{" "}
                    {showResult && showResult?.annual_payment?.annual_home_ins}
                  </Text>
                </View>
                <View style={SINGLE_INPUT_STYLE.singleCardContainer}>
                  <Text style={SINGLE_INPUT_STYLE.singleCardContainerText}>
                    annual payment total:-{" "}
                    {showResult && showResult?.annual_payment?.total}
                  </Text>
                </View>
                <View style={SINGLE_INPUT_STYLE.singleCardContainer}>
                  <Text style={SINGLE_INPUT_STYLE.singleCardContainerText}>
                    annual payment mortgage:-{" "}
                    {showResult && showResult?.annual_payment?.mortgage}
                  </Text>
                </View>
                <View style={SINGLE_INPUT_STYLE.singleCardContainer}>
                  <Text style={SINGLE_INPUT_STYLE.singleCardContainerText}>
                    annual payment property tax:-{" "}
                    {showResult && showResult?.annual_payment?.property_tax}
                  </Text>
                </View>
                <View style={SINGLE_INPUT_STYLE.singleCardContainer}>
                  <Text style={SINGLE_INPUT_STYLE.singleCardContainerText}>
                    annual payment hoa:-{" "}
                    {showResult && showResult?.annual_payment?.hoa}
                  </Text>
                </View>
                <View style={SINGLE_INPUT_STYLE.singleCardContainer}>
                  <Text style={SINGLE_INPUT_STYLE.singleCardContainerText}>
                    annual payment home_insurance:-{" "}
                    {showResult && showResult?.annual_payment?.home_insurance}
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
