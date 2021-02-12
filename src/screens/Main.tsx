import { priceString } from "dhj-string";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { commonStyles, yellow_5, blue_5 } from ".";
import useMain from "../hooks/Main";

export default () => {
  const { income, outcome, remain } = useMain();

  return (
    <View style={commonStyles.page}>
      <Text style={styles.label}>남은 고정 지출</Text>
      <Text style={styles.remain}>
        {priceString(remain)}
        <Text style={styles.won}>원</Text>
      </Text>
      <View style={styles.fixdArea}>
        <Text style={styles.label}>월별 고정 지출 및 수입</Text>
        <Text style={styles.outcome}>
          -{priceString(outcome)}
          <Text style={styles.won}>원</Text>
        </Text>
        <Text style={styles.income}>
          +{priceString(income)}
          <Text style={styles.won}>원</Text>
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  label: {
    fontSize: 14,
    color: "white",
  },
  remain: {
    fontSize: 48,
    color: "white",
  },
  fixdArea: {
    marginTop: 50,
  },
  outcome: {
    fontSize: 36,
    color: yellow_5,
  },
  income: {
    fontSize: 36,
    color: blue_5,
  },
  won: {
    fontSize: 12,
    color: "white",
  },
});
