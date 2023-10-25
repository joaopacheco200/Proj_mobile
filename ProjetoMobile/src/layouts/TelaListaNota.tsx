import { View, Text, TextInput, StyleSheet, Button, ImageBackground, Pressable, Alert, FlatList } from 'react-native';
import { IClientes} from "../models/IClientes"
import firestore from "@react-native-firebase/firestore";
import { useState, useEffect } from "react";
import { ListarNotasProps } from "./types";

export default ({ navigation, route }: ListarNotasProps) => {
    const [clientes, setClientes] = useState([] as IClientes[]);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        setIsLoading(true);

        const subscribe = firestore()
            .collection('cliente')
            .onSnapshot(querySnapshot => {
                const data = querySnapshot.docs.map(doc => {

                    return {
                        id: doc.id,
                        ...doc.data()
                    }

                }) as IClientes[];

                setClientes(data);
                setIsLoading(false);
            });
        return () => subscribe();
    }, []);


    function deletarNota(id: string) {
        setIsLoading(true);

        firestore()

        .collection('notas')
        .doc(id)
        .delete()
        .then(()=> {
            Alert.alert("Nota", "Removido com sucesso")
            navigation.navigate('Home')
        })
        .catch ((error) => console.log(error))
        .finally (() => setIsLoading(false));

    }

    return (
        <View>
            <Text style={{ fontSize: 30 }}> Listagem de Notas</Text>
            <FlatList data={clientes}
                renderItem={(info) => {
                    return (
                        <View style={styles.card}>
                            <Text>{info.index}</Text>
                            <Text>{info.item.titulo}</Text>
                            <Text>{info.item.descricao}</Text>
                        </View>
                    )
                }}>
            </FlatList>
        </View>
    );
}
const styles = StyleSheet.create({
    card:{
        borderWidth: 2,
        borderColor: 'grey',
        margin: 5,
        borderRadius:10,
        padding: 3
    }

})

