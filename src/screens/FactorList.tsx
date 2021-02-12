import { priceString } from "dhj-string";
import React, { useMemo } from "react";
import { Button, StyleSheet, Text, View } from "react-native";
import { EIntervalType } from "../@api/ItemList/outcomesApi";
import useFactorList from "../hooks/FactorList";
import moment from "moment";
import { blue_8, gray_5, yellow_8 } from ".";
import { ScrollView } from "react-native-gesture-handler";

export default ({ navigation }: any) => {
  const { outcomes, incomes } = useFactorList();

  const outcomesView = useMemo(() => {
    return outcomes.map(
      ({
        id,
        started_date,
        name,
        category_name,
        interval_type,
        interval_value,
        price,
        enabled_remind,
      }) => (
        <View style={styles.outcomeBar} key={id}>
          <View>
            <Text style={styles.text}>
              {interval_type === EIntervalType.default
                ? interval_value === 1
                  ? `매달 ${moment(started_date).format("D일")}`
                  : "일 년 주기"
                : `${interval_value}일 주기`}
            </Text>
          </View>
          <View>
            <Text style={styles.categoryLabel}>{category_name}</Text>
            <Text style={styles.text}>{name}</Text>
          </View>
          <View>
            <Text style={styles.text}>{priceString(price)}원</Text>
          </View>
          <Button
            title="알람"
            onPress={() => {}}
            color={enabled_remind ? blue_8 : gray_5}
          ></Button>
        </View>
      )
    );
  }, [outcomes]);

  const incomesView = useMemo(() => {
    return incomes.map(
      ({
        id,
        started_date,
        name,
        category_name,
        interval_type,
        interval_value,
        price,
      }) => (
        <View style={styles.incomeBar} key={id}>
          <View>
            <Text style={styles.text}>
              {interval_type === EIntervalType.default
                ? interval_value === 1
                  ? `매달 ${moment(started_date).format("D일")}`
                  : "일 년 주기"
                : `${interval_value}일 주기`}
            </Text>
          </View>
          <View>
            <Text style={styles.categoryLabel}>{category_name}</Text>
            <Text style={styles.text}>{name}</Text>
          </View>
          <View>
            <Text style={styles.text}>{priceString(price)}원</Text>
          </View>
        </View>
      )
    );
  }, [incomes]);

  return (
    <ScrollView style={{ backgroundColor: "black", padding: 5 }}>
      <Button
        title="새 항목 추가하기"
        onPress={() => navigation.navigate("AddForm")}
      />
      <View>
        <Text style={styles.title}>고정지출 목록</Text>
        {outcomesView}
      </View>
      <View>
        <Text style={styles.title}>고정수입 목록</Text>
        {incomesView}
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  title: {
    fontSize: 16,
    fontWeight: "bold",
    color: "white",
    marginTop: 20,
    marginBottom: 20,
  },
  text: {
    fontSize: 14,
  },
  outcomeBar: {
    borderRadius: 5,
    backgroundColor: "#dddddd",
    flex: 4,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 5,
    marginBottom: 10,
  },
  categoryLabel: {
    color: yellow_8,
  },
  incomeBar: {
    borderRadius: 5,
    backgroundColor: "#dddddd",
    flex: 4,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 5,
    marginBottom: 10,
  },
});
