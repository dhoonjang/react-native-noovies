import React from "react";
import { Text, View, StyleSheet } from "react-native";
import { commonStyles } from ".";
import { EDateObjType, useCalendarView } from "../hooks/Calendar";
import { EAsyncItemKeys, setData } from "../utils/local";

export default ({ navigation }: any) => {
  const { year, month, table, nextMonth, prevMonth } = useCalendarView();

  const view = table.map((w, wi) => (
    <View style={styles.week} key={wi}>
      {w.map(({ dayObj, type }, i) => (
        <View
          style={styles.day}
          key={`${wi}_${i}`}
          onTouchEnd={() => {
            if (type === EDateObjType.next) nextMonth();
            else if (type === EDateObjType.prev) prevMonth();
            else {
              setData(EAsyncItemKeys.selected_date, String(dayObj));
              navigation.navigate("Detail");
            }
          }}
        >
          <Text
            style={{
              color:
                type === EDateObjType.current
                  ? "white"
                  : type === EDateObjType.today
                  ? "#1c7ed6"
                  : "grey",
            }}
          >
            {dayObj.format("D")}
          </Text>
        </View>
      ))}
    </View>
  ));

  return <View style={commonStyles.page}>{view}</View>;
};

const styles = StyleSheet.create({
  week: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 10,
    flex: 7,
  },
  day: {
    width: 45,
    paddingLeft: 5,
    paddingTop: 5,
    borderBottomWidth: 1,
    borderColor: "white",
    textAlign: "left",
  },
});
