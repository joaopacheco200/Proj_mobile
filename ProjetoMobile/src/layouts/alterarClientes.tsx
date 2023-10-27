import { useEffect, useState } from "react";
import { Alert, Pressable, StyleSheet, Text, TextInput, View } from "react-native";

import firestore from "@react-native-firebase/firestore";
import { IClientes } from "../models/IClientes";
import { AlterarClienteProps } from "./types";



export default ({ navigation, route }: AlterarClienteProps) => {
    const [id, setId] = useState(route.params.id);
    const [cpf, setCpf] = useState('');
    const [nome, setNome] = useState('');
    const [estado, setEstado] = useState('');
    const [cidade, setCidade] = useState('');
    const [bairro, setBairro] = useState('');
    const [rua, setRua] = useState('');
    const [datanasc, setDatanasc] = useState('');
    const [isLoading, setIsLoading] = useState(false);

    async function carregar(){
        const resultado = await firestore()
            .collection('clientes')
            .doc(id)
            .get();

        const nota = {
                id: resultado.id,
                ...resultado.data()
            } as IClientes;   

        setCpf(nota.cpf);
        setNome(nota.nome);
        setDatanasc(nota.datanasc);
        setEstado(nota.estado);
        setCidade(nota.cidade);
        setBairro(nota.bairro);
        setRua(nota.rua);
    };

    useEffect(() => {
        setIsLoading(true);
        carregar();

    }, []);

    function alterar() {
        setIsLoading(true);

        firestore()
            .collection('clientes')
            .doc(id)
            .update({
                cpf,
                nome,
                estado,
                cidade,
                bairro,
                rua,
                datanasc,
                created_at: firestore.FieldValue.serverTimestamp()
            })
            .then(() => {
                Alert.alert("clientes", "Cadastrada com sucesso")
                navigation.navigate('Home')
            })
            .catch((error) => console.log(error))
            .finally(() => setIsLoading(false));
    }

    return (
        <View>
            <Text>CPF</Text>
            <TextInput
                style={styles.caixa_texto}
                onChangeText={(text) => { setCpf(text) }} />
           
            <Text>Nome</Text>
            <TextInput
                style={styles.caixa_texto}
                onChangeText={(text) => { setNome(text) }} />
            

            <Text>Estado:</Text>
            <TextInput
                style={styles.caixa_texto}
                onChangeText={(text) => { setEstado(text) }} />


            <Text>Cidade:</Text>
            <TextInput
                style={styles.caixa_texto}
                onChangeText={(text) => { setCidade(text) }} />


            <Text>Bairro:</Text>
            <TextInput
                style={styles.caixa_texto}
                onChangeText={(text) => { setBairro(text) }} />


            <Text>Rua:</Text>
            <TextInput
                style={styles.caixa_texto}
                onChangeText={(text) => { setRua(text) }} />

            
           

            <Text>Data de Nascimento</Text>
            <TextInput
                style={styles.caixa_texto}
                onChangeText={(text) => { setDatanasc(text) }} />
            


          



            <Pressable
                style={styles.botao}
                onPress={() => alterar()}
                disabled={isLoading}>
                <Text style={styles.desc_botao}>Alterar</Text>
            </Pressable>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    caixa_texto: {
        width: '70%',
        color: 'black',
        borderWidth: 1,
        borderRadius: 4,
        margin: 3
    },
    botao: {
        justifyContent: 'center',
        backgroundColor: 'green',
        paddingVertical: 10,
        paddingHorizontal: 30
    },
    desc_botao: {
        fontSize: 20
    },
    text_area: {
        borderWidth: 1,
        borderColor: 'grey'
    }
});