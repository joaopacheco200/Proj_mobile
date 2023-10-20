import { Text, View } from 'react-native';
import { CadastrarProps, HomeProps } from '../layouts/types';
import Tela from '../layouts/Tela_Login';
import Tela_Cadastrar from '../layouts/Tela_Cadastrar';

const CadastrarScreen = ({navigation,route}: CadastrarProps) => {
  return (
    <View style={{
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center'
    }}>
      <Tela_Cadastrar navigation={navigation} route={route}/>
      <Text>Cadastrar Screen</Text>

    </View>
  );

};

export default CadastrarScreen;