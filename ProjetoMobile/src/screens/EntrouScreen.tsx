import { Text, View } from 'react-native';
import Tela_Entrou from '../layouts/Tela_Entrou';
import { EntrouProps } from '../layouts/types';

const EntrouScreen = ({ navigation, route }: EntrouProps) => {
    return(
      <View style= {{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'}}>
    
          <Text>Entrou Screen</Text>
    
   <Tela_Entrou navigation={navigation} route={route}/>
      </View>
    );
    
    };

    export default EntrouScreen;