import React from 'react';
import {
    FlatList,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

type ListaFlatProps = {
    array: {key: number, descricao: string} []
}

const ListaFlat = (props: ListaFlatProps) => {
        return <FlatList
        data= {props.array}
        renderItem= {({item}) => (
            <text style={styles.item}>{item.descricao}</text>
            
        )
    }
    />

        

}

export default ListaFlat;

const styles = StyleSheet.create({
    item: {
        padding:10,
        fontSize:18,
        height: 44,
    }
})

