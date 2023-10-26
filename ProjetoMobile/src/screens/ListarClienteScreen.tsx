import { ListarClienteProps } from "../layouts/types";
import { Text, View } from 'react-native';
import {CadastroCliProps} from '../layouts/types';
import Tela_Cadastrar from '../layouts/Tela_Cadastrar';
import Tela_CadastroCli from '../layouts/CadastroCliente';
import TelaListaCliente from "../layouts/TelaListaCliente";

const ListarClienteScreen = ({ navigation, route }: ListarClienteProps) => {
    return (
        <View style={{
            flex: 1,
        }}>
                 <TelaListaCliente navigation={navigation} route={route}/> 
             {/* <Principal navigation={navigation} route={route} />  */}
        </View>
    );
};

export default ListarClienteScreen;