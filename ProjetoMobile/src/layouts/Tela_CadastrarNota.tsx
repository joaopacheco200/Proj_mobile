import firestore from "@react-native-firebase/firestore";
import { useState } from "react";
import { CadastrarProps } from "./types";
import { Alert, Pressable, StyleSheet, Text, TextInput, View } from "react-native";

const Tela_CadastrarNota = ({ navigation }: CadastrarProps) => {
    const [titulo, setTitulo] = useState('');
    const [descricao, setDescricao] = useState('');
    const [isLoading, setIsLoading] = useState(false);

    function cadastrarNota() {
        setIsLoading(true);

        firestore()
            .collection('notas')
            .add({
                titulo,
                descricao,
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


        <Text style={styles.titulo}>Titulo:</Text>

        <TextInput style={styles.Caixatitulo}
            onChangeText={(text) => { setTitulo(text) }} />

        <Text style={styles.descricao}>Descrição:</Text>

        <TextInput style={styles.CaixaDescricao}
            onChangeText={(text) => { setDescricao(text) }} />



        <Pressable style={styles.BotaoEntrar}
            onPress={() => cadastrarNota()}>
            <Text style={styles.ConfBu}>Confirmar</Text>
        </Pressable>




    </View>
    </>
);
};

export default Tela_CadastrarNota;



const styles = StyleSheet.create({
    CaixaDescricao: {
        borderColor: 'black',
        borderWidth: 5,
        backgroundColor: '#D3D3D3'

    },

    Caixatitulo: {
        borderColor: 'black',
        borderWidth: 5,
        backgroundColor: '#D3D3D3'
    },
    titulo: {
        color: 'black',
        textAlign: 'center',
        fontWeight: 'bold',
        fontSize: 30,


    },
    descricao: {
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


