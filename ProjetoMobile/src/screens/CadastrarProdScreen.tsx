import { Text, View } from 'react-native';
import { CadastrarProdProps, CadastrarProps, HomeProps } from '../layouts/types';
import Tela from '../layouts/Tela_Login';
import Tela_Cadastrar from '../layouts/Tela_Cadastrar';
import Tela_CadastroPodutos from '../layouts/Tela_Cadastrar';

const CadastrarProdScreen = ({navigation,route}: CadastrarProdProps) => {
  return (
    <View style={{
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center'
    }}>
      <Tela_CadastroPodutos navigation={navigation} route={route}/>
      <Text>Cadastrar Screen</Text>

    </View>
  );

};

export default CadastrarProdScreen;