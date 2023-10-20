import { View, Text, TextInput, StyleSheet, Button, ImageBackground, Pressable, Alert } from 'react-native';
import { CadastrarProps } from './types';
import LoginScreen from '../screens/LoginScreen';
import { useState } from 'react';
import auth from '@react-native-firebase/auth';

const Tela_Cadastrar = ({ navigation }: CadastrarProps) => {
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');
    const [isLoading, setIsLoading] = useState(false);

    function cadastrar() {
        setIsLoading(true);
        if (email && senha) {

            auth()
                .createUserWithEmailAndPassword(email, senha)
                .then(() => {
                    Alert.alert("Conta", "Cadastrado com sucesso")
                    navigation.navigate('Home');
                })
                .catch((error) => {
                    console.log(error)
                    Alert.alert("Erro", String(Error));
                    }
                )
                .finally(() => setIsLoading(false));

        } else setIsLoading(false);




    }


    return (

        <View>


            <Text style={styles.Email}>Email:</Text>

            <TextInput style={styles.CaixaEmail}
                onChangeText={(text) => { setEmail(text) }} />

            <Text style={styles.Senha}>Senha:</Text>

            <TextInput style={styles.CaixaSenha}
                onChangeText={(text) => { setSenha(text) }} />


            <Pressable style={styles.BotaoEntrar}
                onPress={() => cadastrar()}>
                <Text style={styles.ConfBu}>Confirmar</Text>
            </Pressable>




        </View>

    );
};





const styles = StyleSheet.create({
    CaixaSenha: {
        borderColor: 'black',
        borderWidth: 5,
        backgroundColor: '#D3D3D3'

    },

    CaixaEmail: {
        borderColor: 'black',
        borderWidth: 5,
        backgroundColor: '#D3D3D3'
    },
    Email: {
        color: 'black',
        textAlign: 'center',
        fontWeight: 'bold',
        fontSize: 30,


    },
    Senha: {
        color: 'black',
        textAlign: 'center',
        fontWeight: 'bold',
        fontSize: 30
    },
    BotaoEntrar: {
        borderColor: 'grey',
        borderWidth: 5,
        marginHorizontal: 15,
        backgroundColor: 'grey',
        borderRadius: 100,
        marginLeft: 20,

    },
    Cbum: {
        flex: 1
    },
    fundo: {
        flex: 1
    },
    Butao: {
        fontSize: 23,
        textAlign: 'center',
        fontWeight: 'bold',
        color: 'black'
    },
    BotaoEsqueci: {
        borderColor: 'grey',
        borderWidth: 5,
        marginHorizontal: 100,
        backgroundColor: 'grey',
        borderRadius: 100,
        marginLeft: 1,

    },
    BotaoCadastrar: {
        // marginBottom:400,
        borderColor: 'grey',
        borderWidth: 5,
        // marginHorizontal: 240,
        backgroundColor: 'grey',
        borderRadius: 100,
        marginLeft: 1,
        // marginVertical: 295

    },
    Butoes: {
        flexDirection: 'row',
        marginVertical: 300

    },
    ConfBu: {
        textAlign: 'center',
        backgroundColor: 'grey',
        borderRadius: 100,
        borderColor: 'grey',
        borderWidth: 5,
        fontSize: 30,
        color: 'black',
        fontWeight: 'bold',

    }

});
export default Tela_Cadastrar;