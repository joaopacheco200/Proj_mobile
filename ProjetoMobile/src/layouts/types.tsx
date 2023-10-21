import { NativeStackScreenProps } from "@react-navigation/native-stack";

type RootStackParamList = {
    Home: undefined;
    Entrou: undefined;
    Esqueci: undefined;
    Cadastrar: undefined;
    Login: undefined;
    Confirmar: undefined;
    TelaListaNota:undefined;
  };
  
  type HomeProps = NativeStackScreenProps < RootStackParamList, 'Home'>;
  

  //LoginScreen

type LoginProps = NativeStackScreenProps<RootStackParamList, 'Login'>;


type CadastrarProps = NativeStackScreenProps<RootStackParamList, 'Cadastrar'>;
type ListarNotasProps = NativeStackScreenProps<RootStackParamList, 'TelaListaNota'>;



  export type {HomeProps, RootStackParamList, LoginProps, CadastrarProps, ListarNotasProps};