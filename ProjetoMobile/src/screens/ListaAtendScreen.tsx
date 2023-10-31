import { Text, View } from 'react-native';
import { CadastrarProdProps, CadastrarProps, HomeProps, ListarAtendimentoProps } from '../layouts/types';
import Tela from '../layouts/Tela_Login';
import Tela_Cadastrar from '../layouts/Tela_Cadastrar';
import Tela_CadastroPodutos from '../layouts/Tela_Cadastrar';
import ListaAtend from '../layouts/ListaAtend';

const ListarAtendScreen = ({navigation,route}: ListarAtendimentoProps) => {
  return (
    <View style={{
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center'
    }}>
      <ListaAtend navigation={navigation} route={route}/>
      

    </View>
  );

};

export default ListarAtendScreen;