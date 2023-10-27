import { Text, View } from 'react-native';
import {CadastroAtendimentoProps, CadastroCliProps} from '../layouts/types';
import Tela_Cadastrar from '../layouts/Tela_Cadastrar';
import Tela_CadastroCli from '../layouts/CadastroCliente';
import Tela_CadastroAten from '../layouts/Tela_CadastroAtendimento';


const CadastroAtendimentoScreen = ({navigation,route}: CadastroAtendimentoProps) => {
  return (
    <View style={{
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center'
    }}>
      <Tela_CadastroAten navigation={navigation} route={route}/>
      

    </View>
  );

};

export default CadastroAtendimentoScreen;