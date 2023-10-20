import { View, Text, TextInput, StyleSheet, Button, ImageBackground, Pressable, Alert } from 'react-native';
import { HomeProps } from './types';
import LoginScreen from '../screens/LoginScreen';
import { useState } from 'react';
import auth from '@react-native-firebase/auth';

const Tela = ({ navigation }: HomeProps) => {
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');
    const [isLoading, setIsLoading] = useState(false);

    function logar() {
        setIsLoading(true);
        auth()
            .signInWithEmailAndPassword(email, senha)
            .then(() => { navigation.navigate('Home') })
            .catch((error) => console.log(error))
            .finally(() => setIsLoading(false))
    }

    function redefinirSenha() {
        auth()
            .sendPasswordResetEmail(email)
            .then(() => Alert.alert("Redefinir Senha",
                "Enviamos um email para você!"))
            .catch((error) => console.log(error))
    }
    return (
        <>
            <View style={styles.Cbum}>

                <ImageBackground source={require('../assets/chis.jpeg')} style={styles.fundo}>
                    <Text style={styles.Email}>Email:</Text>

                    <TextInput style={styles.CaixaEmail}
                        onChangeText={(text) => { setEmail(text) }} />

                    <Text style={styles.Senha}>Senha:</Text>

                    <TextInput style={styles.CaixaSenha}
                        onChangeText={(text) => { setSenha(text) }} />


                    <Pressable style={styles.BotaoEntrar}
                        onPress={() => navigation.navigate('Entrou')}>
                        <Text style={styles.EntraBu}>Entrar</Text>
                    </Pressable>

                    <View style={styles.Butoes}>
                        <Pressable style={styles.BotaoEsqueci}
                            onPress={() => navigation.navigate('Esqueci')}>
                            <Text style={styles.Butao}>Esqueci a senha</Text>
                        </Pressable>


                        <Pressable style={styles.BotaoCadastrar}
                            onPress={() => navigation.navigate('Cadastrar')}>
                            <Text style={styles.Butao}>Cadastrar</Text>
                        </Pressable>
                    </View>

                </ImageBackground>
            </View>
        </>
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
        color: 'white',
        textAlign: 'center',
        fontWeight: 'bold',
        fontSize: 30,


    },
    Senha: {
        color: 'white',
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
    EntraBu: {
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
export default Tela;