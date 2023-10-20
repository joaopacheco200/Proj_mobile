import React from 'react';
import {
    StyleSheet,
  Text,
  TextInput,
  View
} from 'react-native';

type ArmaProps = {
    nome: string;
}

const Arma = (props: ArmaProps) => {
    return <>
            <View>
                <Text> Isso é uma/um {props.nome}!</Text>
                <TextInput style= {styles.caixaTexto}/>
            </View>
            </>
}
export default Arma;

const styles = StyleSheet.create({
        caixaTexto:{
            backgroundColor: 'green',
            borderColor: 'black',
        }
        

})

