import { NativeStackScreenProps } from "@react-navigation/native-stack";

type RootStackParamList = {
    Home: undefined;
    Entrou: undefined;
    Esqueci: undefined;
    Cadastrar: undefined;
    Login: undefined;
    Confirmar: undefined;
    TelaListaNota:undefined;
    CadastrarProduto:undefined;
    Inicial:undefined;
    Ex1:undefined;
    CadastroClien:undefined;
    ListarCliente:{buscarCli: (id: string, cpfCli: string, nomeCli: string) => void};
    CadastrarAten:undefined;
    ListarAten:{buscarAtend: (id: string, cpfAtend: string, nomeAtend: string) => void};
    AlterarCliente:{id: string;}

  };
  
  type HomeProps = NativeStackScreenProps < RootStackParamList, 'Home'>;
  

  //LoginScreen

type LoginProps = NativeStackScreenProps<RootStackParamList, 'Login'>;


type CadastrarProps = NativeStackScreenProps<RootStackParamList, 'Cadastrar'>;
type ListarNotasProps = NativeStackScreenProps<RootStackParamList, 'TelaListaNota'>;


type CadastrarProdProps = NativeStackScreenProps<RootStackParamList, 'CadastrarProduto'>;

type InicialProps = NativeStackScreenProps<RootStackParamList, 'Inicial'>;


type Ex1Props = NativeStackScreenProps<RootStackParamList, 'Ex1'>;

type CadastroCliProps = NativeStackScreenProps<RootStackParamList, 'CadastroClien'>;

type EntrouProps = NativeStackScreenProps<RootStackParamList, 'Entrou'>;

type ListarClienteProps = NativeStackScreenProps<RootStackParamList, 'ListarCliente'>;

type AlterarClienteProps = NativeStackScreenProps<RootStackParamList, 'AlterarCliente'>;

type CadastroAtendimentoProps = NativeStackScreenProps<RootStackParamList, 'CadastrarAten'>;


type ListarAtendimentoProps = NativeStackScreenProps<RootStackParamList, 'ListarAten'>;




  export type {HomeProps, RootStackParamList, LoginProps, CadastrarProps, ListarNotasProps,
  CadastrarProdProps, InicialProps,
  Ex1Props, CadastroCliProps, EntrouProps, ListarClienteProps, AlterarClienteProps, CadastroAtendimentoProps, ListarAtendimentoProps};