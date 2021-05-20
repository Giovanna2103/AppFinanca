import * as React from 'react';
import { View, Text, TextInput, TouchableOpacity, ScrollView} from "react-native";
import { styleFormat } from "../css/styles";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";


export default function Login ({navigation}) {
    return(
        <View style={styleFormat.container}>
            <ScrollView>

                <View style={styleFormat.cxInput}>

                    <TextInput
                    style={styleFormat.input}
                    placeholder="Nome Usuário"
                    //   value={usuario}
                    keyboardType="email-address"
                    //   onChangeText={(value) => setUsuario(value)}
                    />

                    <TextInput
                    style={styleFormat.input}
                    placeholder="Senha"
                    //   value={senha}
                    keyboardType="default"
                    //   secureTextEntry
                    //   onChangeText={(value) => setSenha(value)}
                    />
                </View>

                <TouchableOpacity style={styleFormat.btnLogin} >
                    <Text style={styleFormat.txtLogin}> Cadastrar </Text>
                </TouchableOpacity>

                <TouchableOpacity
                    style={styleFormat.btn}
                    onPress={() => navigation.navigate("Cadastro")}
                    >
                    <Text> Cadastro </Text>
                </TouchableOpacity>

            </ScrollView>
        </View>
    );
}