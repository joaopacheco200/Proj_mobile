import { NativeStackScreenProps } from "@react-navigation/native-stack";

type RootStackParamList = {
    Home: undefined;
    Entrou: undefined;
    Esqueci: undefined;
    Cadastrar: undefined;
    Login: undefined;
    Confirmar: undefined;
  };
  
  type HomeProps = NativeStackScreenProps < RootStackParamList, 'Home'>;
  

  //LoginScreen

type LoginProps = NativeStackScreenProps<RootStackParamList, 'Login'>;


type CadastrarProps = NativeStackScreenProps<RootStackParamList, 'Cadastrar'>;

  export type {HomeProps, RootStackParamList, LoginProps, CadastrarProps};