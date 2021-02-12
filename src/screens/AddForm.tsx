import React from "react";
import { Text, View, Button } from "react-native";
import { TextInput } from "react-native-gesture-handler";
import { blue_8, gray_5 } from ".";
import useAddItem, { EItemType, ECycleType } from "../hooks/FactorList/AddItem";

export default () => {
  const {
    type,
    name,
    price,
    date,
    cycle,
    category_id,
    customCategory,
    categories,
    remind,
    action: {
      setType,
      setName,
      setPrice,
      setDate,
      setCategory,
      setCustomCategory,
      setCycle,
      toggleRemind,
    },
  } = useAddItem();

  return (
    <View>
      <View>
        <Text>종류</Text>
        <View>
          <Button
            title="지출"
            onPress={() => setType(EItemType.outcome)}
            color={type === EItemType.outcome ? blue_8 : gray_5}
          />
          <Button
            title="수입"
            onPress={() => setType(EItemType.income)}
            color={type === EItemType.income ? blue_8 : gray_5}
          />
        </View>
      </View>
      <View>
        <Text>이름</Text>
        <TextInput value={name} onChangeText={setName} />
      </View>
      <View>
        <Text>가격</Text>
        <TextInput
          value={String(price)}
          keyboardType="numeric"
          onChangeText={(text) => setPrice(Number(text))}
        />
      </View>
      <View>
        <Text>시작일</Text>
        <TextInput value={date} keyboardType="numeric" onChangeText={setDate} />
      </View>
      <View>
        <Text>주기</Text>
        <View>
          <Button
            title="월"
            onPress={() => setCycle(ECycleType.month)}
            color={cycle === ECycleType.month ? blue_8 : gray_5}
          />
          <Button
            title="년"
            onPress={() => setCycle(ECycleType.year)}
            color={cycle === ECycleType.year ? blue_8 : gray_5}
          />
          <Button
            title="커스텀"
            onPress={() => setCycle(30)}
            color={typeof cycle === "number" ? blue_8 : gray_5}
          />
        </View>
        {typeof cycle === "number" && (
          <TextInput
            value={String(cycle)}
            keyboardType="numeric"
            onChangeText={(txt) => setCycle(Number(txt))}
          />
        )}
      </View>
      {type === EItemType.outcome && (
        <View>
          <Button
            title="리마인드 여부"
            onPress={toggleRemind}
            color={remind ? blue_8 : gray_5}
          />
        </View>
      )}
      <View>
        <Button title="등록" onPress={() => {}}></Button>
      </View>
    </View>
  );
};
