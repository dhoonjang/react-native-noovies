import AsyncStorage from "@react-native-community/async-storage";

export enum EAsyncItemKeys {
  selected_date = "selected_date",
  access_token = "access_token",
}

export const setData = async (key: EAsyncItemKeys, data: string) => {
  try {
    await AsyncStorage.setItem(key, data);
  } catch (e) {
    console.log(e);
  }
};

export const getData = async (key: EAsyncItemKeys) => {
  return await AsyncStorage.getItem(key);
};
