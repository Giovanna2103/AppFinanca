import * as React from 'react';
import { View, Text, TextInput, TouchableOpacity, ScrollView} from "react-native";
import { style } from "../css/styles";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";


export default function Login ({navigation}) {
    return(
        <View style={style.container}>
            <ScrollView>

                <View style={style.cxInput}>

                    <TextInput
                    style={style.input}
                    placeholder="Nome Usuário"
                    //   value={usuario}
                    keyboardType="email-address"
                    //   onChangeText={(value) => setUsuario(value)}
                    />

                    <TextInput
                    style={style.input}
                    placeholder="Senha"
                    //   value={senha}
                    keyboardType="default"
                    //   secureTextEntry
                    //   onChangeText={(value) => setSenha(value)}
                    />
                </View>

                <TouchableOpacity style={style.btnLogin} >
                    <Text style={style.txtLogin}> Cadastrar </Text>
                </TouchableOpacity>

                <TouchableOpacity
                    style={style.btnLogin}
                    onPress={() => navigation.navigate("Cadastro")}
                    >
                    <Text> Cadastro </Text>
                </TouchableOpacity>

            </ScrollView>
        </View>
    );
}