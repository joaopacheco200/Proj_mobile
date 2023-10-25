import { Text, View } from 'react-native';
import {CadastroCliProps} from '../layouts/types';
import Tela_Cadastrar from '../layouts/Tela_Cadastrar';
import Tela_CadastroCli from '../layouts/CadastroCliente';


const CadastrarClienteScreen = ({navigation,route}: CadastroCliProps) => {
  return (
    <View style={{
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center'
    }}>
      <Tela_CadastroCli navigation={navigation} route={route}/>
      

    </View>
  );

};

export default CadastrarClienteScreen;