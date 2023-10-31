import { View, Text, TextInput, StyleSheet, Button, ImageBackground, Pressable, Alert, FlatList, ScrollView } from 'react-native';
import { IClientes } from "../models/IClientes"
import firestore from "@react-native-firebase/firestore";
import { useState, useEffect } from "react";
import { ListarAtendimentoProps, ListarClienteProps, ListarNotasProps } from "./types";
import alterarClientes from './alterarClientes';

export default ({ navigation, route }: ListarAtendimentoProps) => {
    const [cpf, setcpf] = useState([] as IClientes[]);
    const [atendimentos, setAtendientos] = useState([] as IClientes[]);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        setIsLoading(true);

        const Subscribe = firestore()
            .collection('atendimento')
            .onSnapshot((querySnapshot) => {
                if (querySnapshot) {
                    const data = querySnapshot.docs.map(doc => {

                        return {
                            id: doc.id,
                            ...doc.data()
                        }

                    }) as IClientes[];

                    setAtendientos(data);
                    setIsLoading(false);
                }
            });
        return () => Subscribe();
    }, []);


    function deletarAtend(id: string) {
        setIsLoading(true);

        firestore()

            .collection('atendimento')
            .doc(id)
            .delete()
            .then(() => {
                Alert.alert("Atendimento", "Removido com sucesso")
                navigation.navigate('Entrou')
            })
            .catch((error) => console.log(error))
            .finally(() => setIsLoading(false));


    }

    function alterarAtend(id: string) {
        navigation.navigate("AlterarCliente", { id: id })
    }

    return (
        <View>
            <Text style={{ fontSize: 30 }}>Listagem de Atendimentos</Text>

            <FlatList
                data={atendimentos}
                renderItem={(info) => {
                    return (

                        <View style={styles.card}>
                            <ScrollView>
                                <Pressable onPress={() => {
                                    route.params?.buscarAtend(info.item.id, info.item.cpf,info.item.nome)
                                    navigation.goBack();
                                }}>
                                    <Text>{info.index}</Text>
                                    <Text>{info.item.cpf}</Text>
                                    <Text>{info.item.estado}</Text>
                                    <Text>{info.item.cidade}</Text>
                                    <Text>{info.item.bairro}</Text>
                                    <Text>{info.item.rua}</Text>
                                    <Text>{info.item.nome}</Text>
                                    <Text>{info.item.datanasc}</Text>
                                </Pressable>

                                <View style={styles.botao_alterar}>
                                    <Pressable
                                        onPress={() => alterarAtend(info.item.id)}>
                                        <Text style={{ fontWeight: "bold", fontSize: 40 }}>
                                            A
                                        </Text>
                                    </Pressable>
                                </View>


                                <View style={styles.botao_deletar}>
                                    <Pressable
                                        onPress={() => deletarAtend(info.item.id)}>
                                        <Text style={{ fontWeight: "bold", fontSize: 50 }}>
                                            X
                                        </Text>
                                    </Pressable>

                                </View>
                            </ScrollView>
                        </View>
                    )
                }}>
            </FlatList>
        </View>
    );
}
const styles = StyleSheet.create({
    card: {
        borderWidth: 2,
        borderColor: 'grey',
        margin: 5,
        borderRadius: 10,
        padding: 3,
        flexDirection: 'row'
    },
    dados_card: {
        flex: 1
    },
    botao_deletar: {
        backgroundColor: 'red',
        width: 40,
        justifyContent: 'center',
        alignItems: 'center',
    },
    botao_alterar: {
        backgroundColor: 'yellow',
        width: 40,
        justifyContent: 'center',
        alignItems: 'center',
    }
});

