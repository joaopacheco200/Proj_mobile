import { View, Text, TextInput, StyleSheet, Button, ImageBackground, Pressable, Alert, FlatList } from 'react-native';
import { INotas } from "./INotas"
import firestore from "@react-native-firebase/firestore";
import { useState, useEffect } from "react";
import { ListarNotasProps } from "./types";

export default ({ navigation, route }: ListarNotasProps) => {
    const [notas, setNotas] = useState([] as INotas[]);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        setIsLoading(true);

        const subscribe = firestore()
            .collection('notas')
            .onSnapshot(querySnapshot => {
                const data = querySnapshot.docs.map(doc => {

                    return {
                        id: doc.id,
                        ...doc.data()
                    }

                }) as INotas[];

                setNotas(data);
                setIsLoading(false);
            });
        return () => subscribe();
    }, []);

    return (
        <View>
            <Text style={{ fontSize: 30 }}> Listagem de Notas</Text>
            <FlatList data={notas}
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

