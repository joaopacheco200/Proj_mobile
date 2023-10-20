import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "../screens/HomeScreen";
import DetalhesScreen from "../screens/EntrouScreen";
import { RootStackParamList } from "../layouts/types";
import EsqueciScreen from "../screens/EsqueciScreen";
import CadastrarScreen from "../screens/CadastrarScreen";
import EntrouScreen from "../screens/EntrouScreen";
import LoginScreen from "../screens/LoginScreen";

const Stack = createNativeStackNavigator<RootStackParamList>();

const HomeNavigator = () => {
  return (

    <Stack.Navigator initialRouteName="Home">

      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="Entrou" component={EntrouScreen} />
      <Stack.Screen name="Esqueci" component={EsqueciScreen} />
      <Stack.Screen name="Cadastrar" component={CadastrarScreen} />
      <Stack.Screen name="Login" component={LoginScreen} />

    </Stack.Navigator>

  );
};
export default HomeNavigator;