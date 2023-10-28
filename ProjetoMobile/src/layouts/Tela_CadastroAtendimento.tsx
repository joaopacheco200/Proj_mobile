import { CadastroAtendimentoProps } from "./types";
import firestore from "@react-native-firebase/firestore";
import { useState } from "react";
import { CadastroCliProps } from "./types";
import { Alert, Pressable, StyleSheet, Text, TextInput, View, ScrollView } from "react-native";
import TelaListaCliente from "./TelaListaCliente";

const Tela_CadastroAten = ({ navigation }: CadastroAtendimentoProps) => {
    const [idCli, setidCli] = useState('');
    const [nomeCli, setNomeCli] = useState('');
    const [cpfCli, setCpfCli] = useState('');
    const [data, setData] = useState('');
    const [hora, setHora] = useState('');
    const [descricao, setDescricao] = useState('');
    const [cpf, setCpf] = useState('');
    const [isLoading, setIsLoading] = useState(false);

    function validar (): boolean {
        // Use uma expressão regular para verificar se a string contém apenas números
        if (!(/^[0-9]*$/.test(cpf))) {
            Alert.alert('Erro', 'Digite somente números');
            return false;
        }

        return true
    };
    

    function cadastrarAtend() {
         if (!validar()){
            return
         }

        setIsLoading(true);

        firestore()
            .collection('atendimento')
            .add({
                idCli,
                nomeCli,
                cpfCli,
                data,
                hora,
                descricao,
                cpf,

                created_at: firestore.FieldValue.serverTimestamp()
            })

            .then(() => {
                Alert.alert("Atendimento", "Cadastrado com sucesso")
                navigation.navigate('Entrou');
            })
            .catch((error) => console.log(error))
            .finally(() => setIsLoading(false));
     

    }

    function selectCli(id: string, cpfCli: string, nomeCli: string) {
        setCpfCli(cpfCli)
        setNomeCli(nomeCli)
        setidCli(idCli)

    }

    return (
        <>
            <View>
                <ScrollView>
                    <Text style={styles.Nome}>CPF:</Text>

                    <TextInput style={styles.CaixaNome}
                        onChangeText={(text) => { setCpfCli(text) }}
                        value={cpfCli}
                        editable={false}
                        keyboardType="numeric" />

                    <Pressable style={styles.BotaoEntrar}
                        onPress={() => navigation.navigate('ListarCliente', { buscarCli: selectCli })}>
                        <Text style={styles.ConfBu}>Listar Cliente</Text>
                    </Pressable>


                    <Text style={styles.Nome}>Nome:</Text>

                    <TextInput style={styles.CaixaNome}
                        onChangeText={(text) => { setNomeCli(text) }} />


                    <Text style={styles.Cpf}>Data:</Text>

                    <TextInput style={styles.CaixaCpf}
                        onChangeText={(text) => { setData(text) }} />


                    <Text style={styles.Endereco}>Hora:</Text>

                    <TextInput style={styles.CaixaEndereco}
                        onChangeText={(text) => { setHora(text) }} />


                    <Text style={styles.Endereco}>Descrição:</Text>

                    <TextInput style={styles.CaixaEndereco}
                        onChangeText={(text) => { setDescricao(text) }} />



                    <View style={styles.viewCadAten}>

                        <Pressable
                            onPress={() => cadastrarAtend()}>
                            <Text style={styles.ConfBu}>Cadastrar</Text>
                        </Pressable>
                    </View>

                </ScrollView>

            </View>
        </>
    );
};

export default Tela_CadastroAten;



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

    },
    viewCadAten: {
        textAlign: 'center',
        backgroundColor: 'grey',
        borderRadius: 100,
        borderColor: 'grey',
        borderWidth: 5,
        color: 'black',
        fontWeight: 'bold',
        marginTop: 50

    }
});


