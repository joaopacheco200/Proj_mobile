import React from 'react';
import {
  Button,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';
import ListaFlat from './ListaFlat';
import Ex1 from './Ex1';
import Ex2 from './Ex2';
import Ex3 from './Ex3';
import ListaArma from './ListaNomes';
import ExemploStylesText from './ExemploStylesText';
import ExemploStylesView from './ExemploStyleView';
import { HomeProps } from './types';



// const lista = [
//   {key: 1, descricao: 'teste'},
//   {key: 2, descricao: 'teste2'},
//   {key: 3, descricao: 'teste3'},
//   {key: 4, descricao: 'teste4'},
//   {key: 5, descricao: 'teste5'}
// ];

// const listaSection = [
// (title: 'A', data: [{key:1, descricao: 'Ana'}]),
// (title: 'B', data: [{key:2, descricao: 'Bruno'}]),
// (title: 'C', data: [{key:3, descricao: 'Carlos'}]),
// (title: 'D', data: [{key:4, descricao: 'Douglas'}]),
// (title: 'E', data: [{key:5, descricao: 'Elio'}]),
// (title: 'F', data: [{key:6, descricao: 'Fabio'}]),
// ];

const ArmasNome = [
  {nome: 'Fuzil'},
  {nome: 'Rifle'},
  {nome: 'Pistola'},
];

/*<Ex1 titulo="teste"/>
      <Ex2/>
      <Ex3/>

      <ListaFlat array={lista}/>
      <ListaFlat array={listaSection}/>*/




const Principal = ({navigation, route}: HomeProps) => {
  return(
    <>
      <Button 
      title="go to details"
      onPress= {() => navigation.navigate('Detalhes')} />
    <ExemploStylesText/>
    <ExemploStylesView/>
    <ListaArma array = {ArmasNome}/>
    </>
  )
}

export default Principal;

