import { Text, View } from 'react-native';
import {AlterarClienteProps, CadastroCliProps} from '../layouts/types';
import AlterarClientes from '../layouts/alterarClientes';


const AlterarClienteScreen = ({navigation,route}: AlterarClienteProps) => {
  return (
    <View style={{
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center'
    }}>
      <AlterarClientes navigation={navigation} route={route}/>
      

    </View>
  );

};

export default AlterarClienteScreen;