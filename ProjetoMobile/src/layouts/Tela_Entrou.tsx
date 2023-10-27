import { View, Text, StyleSheet, Pressable, Alert } from 'react-native';
import { EntrouProps, HomeProps } from './types';
import LoginScreen from '../screens/LoginScreen';
import { useState } from 'react';
import auth from '@react-native-firebase/auth';

const Tela_Entrou = ({ navigation }: EntrouProps) => {
    return (
        <>
            <View style={styles.BotaoCliente}>
                <Pressable onPress={() => navigation.navigate('CadastroClien')}>
                    <Text style={styles.ButaoCli}>Cadastrar Cliente</Text>
                </Pressable>

                <Pressable onPress={() => navigation.navigate('ListarCliente')}>
                    <Text style={styles.ButaoCli}>Listar Cliente</Text>
                </Pressable>

                <Pressable onPress={() => navigation.navigate('CadastrarAten')}>
                    <Text style={styles.ButaoCli}>Cadastrar Atendimento</Text>
                </Pressable>

                <Pressable onPress={() => navigation.navigate('ListarAten')}>
                    <Text style={styles.ButaoCli}>Listar Atendimento</Text>
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

    }

});