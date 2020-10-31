import * as SecureStore from "expo-secure-store";
import _ from "lodash";

async function set(data) {
  try {
    
    let dadosLocation = JSON.stringify(data)

    await SecureStore.setItemAsync('moreInfo', dadosLocation);
    return await get()
  }
  catch (error) {
    return { error: "Não foi possivel armazenar dadosLocation" }
  }
}

async function get() {
  try {
    return await tryGet()
  }
  catch (error) {
    return { error: "Não existe a sessão dadosLocation" }
  }
}

async function tryGet() {
  const dados = await SecureStore.getItemAsync('moreInfo');

  if (dados) {
    return _.cloneDeep(JSON.parse(dados));
  }
  else {
    return { error: "Não existe a sessão dadosLocation" }
  }
}

async function delet() {
  try {

    await SecureStore.deleteItemAsync('moreInfo')

  }
  catch (error) {

    return { error: "Não existe a sessão dadosLocation" }

  }
}

const responseApi = {
  set, get, delet,
};

export default responseApi;