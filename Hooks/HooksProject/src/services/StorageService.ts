import AsyncStorage from '@react-native-async-storage/async-storage';

async function storeData(key: string, value: string) {
  try {
    await AsyncStorage.setItem(key, value);
  } catch (e) {}
}

async function storeDataObj(key: string, value: object) {
  try {
    const valueAsString = JSON.stringify(value);
    await AsyncStorage.setItem(key, valueAsString);
  } catch (e) {}
}

async function getData(key: string): Promise<string | null> {
  try {
    const value = await AsyncStorage.getItem(key);
    return value;
  } catch (e) {
    return null;
  }
}

async function getDataObj(key: string): Promise<string | null> {
  try {
    const valueAsString = await AsyncStorage.getItem(key);
    return valueAsString !== null ? JSON.parse(valueAsString) : null;
  } catch (e) {
    return null;
  }
}

async function clearStorage() {
  try {
    await AsyncStorage.clear();
    console.log('The localstorage was cleared');
  } catch (e) {}
}

export default {
  getData,
  getDataObj,
  storeData,
  storeDataObj,
  clearStorage,
};
