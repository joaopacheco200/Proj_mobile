import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "../screens/HomeScreen";
import DetalhesScreen from "../screens/EntrouScreen";
import { RootStackParamList } from "../layouts/types";
import EsqueciScreen from "../screens/EsqueciScreen";
import CadastrarScreen from "../screens/CadastrarScreen";
import EntrouScreen from "../screens/EntrouScreen";
import LoginScreen from "../screens/LoginScreen";
import CadastrarProdScreen from "../screens/CadastrarProdScreen";
import Ex2 from "../layouts/Ex2";
import Ex1 from "../layouts/Ex1";
import Tela_CadastroCli from "../layouts/CadastroCliente";
import CadastrarClienteScreen from "../screens/CadastroClienteScreen";
import ListarClienteScreen from "../screens/ListarClienteScreen";

const Stack = createNativeStackNavigator<RootStackParamList>();

const HomeNavigator = () => {
  return (

    <Stack.Navigator initialRouteName="Entrou">

      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="Entrou" component={EntrouScreen} />
      <Stack.Screen name="Esqueci" component={EsqueciScreen} />
      <Stack.Screen name="Cadastrar" component={CadastrarScreen} />
      <Stack.Screen name="Login" component={LoginScreen} />
      <Stack.Screen name="CadastrarProduto" component={CadastrarProdScreen} />
      <Stack.Screen name="Ex1" component={Ex1} />
      <Stack.Screen name="CadastroClien" component={CadastrarClienteScreen} />
      <Stack.Screen name="ListarCliente" component={ListarClienteScreen} />

    </Stack.Navigator>

  );
};
export default HomeNavigator;