import { Text, View } from 'react-native';
import { CadastrarProdProps, CadastrarProps, HomeProps, ListarAtendimentoProps } from '../layouts/types';
import Tela from '../layouts/Tela_Login';
import Tela_Cadastrar from '../layouts/Tela_Cadastrar';
import Tela_CadastroPodutos from '../layouts/Tela_Cadastrar';

const ListarAtendimento = ({navigation,route}: ListarAtendimentoProps) => {
  return (
    <View style={{
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center'
    }}>
      <Tela navigation={navigation} route={route}/>
      <Text>Cadastrar Screen</Text>

    </View>
  );

};

export default ListarAtendimento;