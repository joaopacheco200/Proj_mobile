import firestore from "@react-native-firebase/firestore";
import { useState } from "react";
import { CadastroCliProps } from "./types";
import { Alert, Pressable, StyleSheet, Text, TextInput, View, ScrollView } from "react-native";

const Tela_CadastroCli = ({ navigation }: CadastroCliProps) => {
    const [nome, setNome] = useState('');
    const [cpf, setCpf] = useState('');
    const [estado, setEstado] = useState('');
    const [cidade, setCidade] = useState('');
    const [bairro, setBairro] = useState('');
    const [rua, setRua] = useState('');
    const [numero, setNumero] = useState('');
    const [datanasc, setDatanasc] = useState('');
    const [complemento, setComplemento] = useState('');
    const [isLoading, setIsLoading] = useState(false);

    function validar (): boolean {
        // Use uma expressão regular para verificar se a string contém apenas números
        if (!(/^[0-9]*$/.test(cpf))) {
            Alert.alert('Erro', 'Digite somente números');
            return false;
        }

        return true
    };

    function cadastrarCli() {
        if (!validar()){
            return
         }


        setIsLoading(true);

        firestore()
            .collection('cliente')
            .add({
                nome,
                cpf,
                estado,
                cidade,
                bairro,
                rua,
                numero,
                datanasc,
                complemento,
                created_at: firestore.FieldValue.serverTimestamp()
            })

            .then(() => {
                Alert.alert("Cliente", "Cadastrado com sucesso")
                navigation.navigate('Home');
            })
            .catch((error) => console.log(error))
            .finally(() => setIsLoading(false));

       

    }





    return (
        <>
            <View>

                <ScrollView>
                    <Text style={styles.Nome}>Nome:</Text>

                    <TextInput style={styles.CaixaNome}
                        onChangeText={(text) => { setNome(text) }} />


                    <Text style={styles.Cpf}>CPF:</Text>

                    <TextInput style={styles.CaixaCpf}
                        onChangeText={(text) => { setCpf(text) } } 
                        value={cpf}
                        
                        keyboardType="numeric"/>


                    <Text style={styles.Endereco}>Estado:</Text>

                    <TextInput style={styles.CaixaEndereco}
                        onChangeText={(text) => { setEstado(text) }} />


                    <Text style={styles.Endereco}>Cidade:</Text>

                    <TextInput style={styles.CaixaEndereco}
                        onChangeText={(text) => { setCidade(text) }} />


                    <Text style={styles.Endereco}>Bairro:</Text>

                    <TextInput style={styles.CaixaEndereco}
                        onChangeText={(text) => { setBairro(text) }} />

                    <Text style={styles.Endereco}>Rua:</Text>

                    <TextInput style={styles.CaixaEndereco}
                        onChangeText={(text) => { setRua(text) }} />

                    <Text style={styles.Endereco}>Numero:</Text>

                    <TextInput style={styles.CaixaEndereco}
                        onChangeText={(text) => { setNumero(text) }} />


                    <Text style={styles.DataNasc}>Data de Nascimento:</Text>

                    <TextInput style={styles.CaixaDataNasc}
                        onChangeText={(text) => { setDatanasc(text) }} />

                    <Text style={styles.Nome}>Complemento:</Text>

                    <TextInput style={styles.CaixaNome}
                        onChangeText={(text) => { setComplemento(text) }} />




                    <Pressable style={styles.BotaoEntrar}
                        onPress={() => cadastrarCli()}>
                        <Text style={styles.ConfBu}>Confirmar</Text>
                    </Pressable>


                </ScrollView>

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


