import { View, Text, StyleSheet, Pressable, Image } from 'react-native';
import { EntrouProps, HomeProps } from './types';
import ListarCliente from '../screens/ListarClienteScreen';
import { useState } from 'react';
import auth from '@react-native-firebase/auth';

const Tela_Entrou = ({ navigation }: EntrouProps) => {
    return (
        <>
            <Image source={require(
            '../assets/Entrou.png'
    )} />

            <View style={styles.BotaoCadCli}>
                <Pressable onPress={() => navigation.navigate('CadastroClien')}>
                    <Text style={styles.ButaoCli}>Cadastrar Cliente</Text>
                </Pressable>

            </View>

            <View style={styles.BotaoLisCli}>

                <Pressable onPress={() => navigation.navigate('ListarCliente')}>
                    <Text style={styles.ButaoCli}>Listar Cliente</Text>
                </Pressable>
            </View>

            <View style={styles.BotaoCadAtend}>

                <Pressable onPress={() => navigation.navigate('CadastrarAten')}>
                    <Text style={styles.ButaoCli}>Cadastrar Atendimento</Text>
                </Pressable>

            </View>






        </>
    );


};
export default Tela_Entrou;

const styles = StyleSheet.create({
    BotaoCliente: {

        backgroundColor: 'grey',
        borderRadius: 100,
        borderColor: 'grey',
        borderWidth: 5,
        fontSize: 30,
        color: 'black',
        fontWeight: 'bold',

    },
    ButaoCli: {
        color: 'black',
        fontWeight: 'bold',
        fontSize: 30,

    },
    BotaoCadCli: {
        backgroundColor: 'grey',
        borderRadius: 100,
        borderColor: 'grey',
        borderWidth: 5,
        fontSize: 30,
        color: 'black',
        fontWeight: 'bold',
        marginTop: 50
    },
    BotaoLisCli: {
        backgroundColor: 'grey',
        borderRadius: 100,
        borderColor: 'grey',
        borderWidth: 5,
        fontSize: 30,
        color: 'black',
        fontWeight: 'bold',
        marginTop: 50
    },
    BotaoCadAtend: {
        backgroundColor: 'grey',
        borderRadius: 100,
        borderColor: 'grey',
        borderWidth: 5,
        fontSize: 30,
        color: 'black',
        fontWeight: 'bold',
        marginTop: 50
    }

});