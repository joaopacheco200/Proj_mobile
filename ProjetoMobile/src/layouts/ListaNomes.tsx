import React from 'react';
import {
    FlatList,
    StyleSheet,
  Text,
  TextInput,
  View
} from 'react-native';
import Arma from './ExSor';

type ListaProps = {
    array: {nome: string}[]
}

const ListaArma = (props: ListaProps) => {
    return <FlatList
    data = {props.array}
    renderItem={({item}) => (
        <Arma nome = {item.nome}/>
    )}
    />
    }

export default ListaArma;