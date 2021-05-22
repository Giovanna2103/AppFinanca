import * as React from 'react';
import { View, Text, TextInput, TouchableOpacity, ScrollView, Alert, Image} from "react-native";
import { style } from "../css/styles";
import Cadastro from './Cadastro';
import Home from './Home';
import { AntDesign } from '@expo/vector-icons';
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { ipserver } from '../config/settings';


let nomeusuario = "";
let email = "";
let sh = "";


const lista = createStackNavigator()

export default function Login () {
    return(
        <NavigationContainer independent={true}>
            <lista.Navigator>
             <lista.Screen name="telaLogin" component={telaLogin} options={{headerShown:false}}/>
             <lista.Screen name="cadastro" component={Cadastro} options={{headerShown:false}}/>
             <lista.Screen name="Home" component={Home} options={{headerShown:false}}/>
            </lista.Navigator>
        </NavigationContainer>
    )
}

function telaLogin({navigation}){
 const [usumail, setUsumail] = React.useState("");
 const [senha, setSenha] = React.useState("");

    return(
        <View style={style.container} >
            <ScrollView>

                <View style={style.cxInputLogin}>

                    <Image source={require('../assets/LogoApp2.png')}
                     style={style.logoLogin}
                    />

                    <TextInput
                     style={style.input}
                     placeholder="Nome Usuário"
                     value={usumail}
                     keyboardType="email-address"
                     onChangeText={(value) => setUsumail(value)}
                    />

                    <TextInput
                     style={style.input}
                     placeholder="Senha"
                     value={senha}
                     keyboardType="default"
                     secureTextEntry
                     onChangeText={(value) => setSenha(value)}
                    />
                </View>

                <TouchableOpacity style={style.btnLogin} 
                 onPress={() => {
                 nomeusuario=usumail;
                 email=usumail;
                 sh=senha;
                 Logar();
                 navigation.navigate("Home")
                 }}>
                 <Text style={style.txtLogin}> Entrar </Text>
                  <AntDesign name="arrowright" size={20} color="black" style={{alignItems:"right"}}/>
                </TouchableOpacity>

                <Text style={style.txtLoginCad}>Ainda não tem uma conta</Text>


                <TouchableOpacity onPress={() => navigation.navigate("cadastro")}
                 style={style.btnLoginCad}>
                 <Text style={style.txtLoginCadi}> Cadastre-se!! </Text>
                </TouchableOpacity>

            </ScrollView>
        </View>
    );
}

function Logar(){
    fetch(`${ipserver}/usuario/login`,{
        method:"POST",
        headers:{
            accept:"application/json",
            "content-type":"application/json"
        },
        body:JSON.stringify({
            nomeusuario:nomeusuario,
            email:email,
            senha:sh
        })
    }).then((response) => response.json())
    .then((rs) => {
        if(rs.output=="" || rs.output==null){
            Alert.alert("Aguarde.....", "Usuario não existente")
        }
        else{
            Alert.alert("Aguarde....", "ENTROUUUUUUUUU")
        }

    }).catch((erro) => console.error(`Erro ao tentar logar ${erro}`))

}