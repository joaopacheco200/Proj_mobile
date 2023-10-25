import firestore from "@react-native-firebase/firestore";
import { useState } from "react";
import { CadastroCliProps } from "./types";
import { Alert, Pressable, StyleSheet, Text, TextInput, View } from "react-native";

const Tela_CadastroCli = ({ navigation }: CadastroCliProps) => {
    const [nome, setNome] = useState('');
    const [cpf, setCpf] = useState('');
    const [endereco, setEndereco] = useState('');
    const [datanasc, setDatanasc] = useState('');
    const [isLoading, setIsLoading] = useState(false);

    function cadastrarCli() {
        setIsLoading(true);

        firestore()
            .collection('notas')
            .add({
                nome,
                cpf,
                endereco,
                datanasc,
                created_at: firestore.FieldValue.serverTimestamp()
            })

            .then(() => {
                Alert.alert("Nota", "Cadastrado com sucesso")
                navigation.navigate('Home');
            })
            .catch((error) => console.log(error))
            .finally(() => setIsLoading(false));

    }

  



    return (
        <>
            <View>


                <Text style={styles.Nome}>Nome:</Text>

                <TextInput style={styles.CaixaNome}
                    onChangeText={(text) => { setNome(text) }} />


                <Text style={styles.Cpf}>CPF:</Text>

                <TextInput style={styles.CaixaCpf}
                    onChangeText={(text) => { setCpf(text) }} />


                <Text style={styles.Endereco}>Endereço:</Text>

                <TextInput style={styles.CaixaEndereco}
                    onChangeText={(text) => { setEndereco(text) }} />


                <Text style={styles.DataNasc}>Data de Nascimento:</Text>

                <TextInput style={styles.CaixaDataNasc}
                    onChangeText={(text) => { setDatanasc(text) }} />



                <Pressable style={styles.BotaoEntrar}
                    onPress={() => cadastrarCli()}>
                    <Text style={styles.ConfBu}>Confirmar</Text>
                </Pressable>




            </View>
        </>
    );
};

export default Tela_CadastroCli;



const styles = StyleSheet.create({
    CaixaNome: {
        borderColor: 'black',
        borderWidth: 5,
        backgroundColor: '#D3D3D3'

    },

    CaixaCpf: {
        borderColor: 'black',
        borderWidth: 5,
        backgroundColor: '#D3D3D3'
    },
    CaixaEndereco: {
        borderColor: 'black',
        borderWidth: 5,
        backgroundColor: '#D3D3D3'
    },
    CaixaDataNasc: {
        borderColor: 'black',
        borderWidth: 5,
        backgroundColor: '#D3D3D3'
    },
    Cpf: {
        color: 'black',
        textAlign: 'center',
        fontWeight: 'bold',
        fontSize: 30,


    },
    Nome: {
        color: 'black',
        textAlign: 'center',
        fontWeight: 'bold',
        fontSize: 30
    },
    Endereco: {
        color: 'black',
        textAlign: 'center',
        fontWeight: 'bold',
        fontSize: 30,
    },
    DataNasc: {
        color: 'black',
        textAlign: 'center',
        fontWeight: 'bold',
        fontSize: 30,
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


