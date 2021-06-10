import * as React from 'react';
import { View, Text, TextInput, TouchableOpacity, ScrollView, Alert, Image} from "react-native";
import { style } from "../css/styles";
import Cadastro from './Cadastro';
import telaHome from './Home';
import { AntDesign } from '@expo/vector-icons';
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { ipserver } from '../config/settings';
import * as SQLite from 'expo-sqlite';

const banco = SQLite.openDatabase("yourcash.banco");


let nomeusuario = "";
let email = "";
let sh = "";
let x = 0;


const lista = createStackNavigator()

export default function Login () {
    return(
        <NavigationContainer independent={true}>
            <lista.Navigator>
             <lista.Screen name="telaLogin" component={telaLogin} options={{headerShown:false}}/>
             <lista.Screen name="cadastro" component={Cadastro} options={{headerShown:false}}/>
             <lista.Screen name="telaHome" component={telaHome} options={{headerShown:false}}/>
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
            <Image source ={require('../assets/LogoApp2.png')} style={style.logoLogin}/>


                <View style={style.cxInputLogin}>
                    
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

                 wait(3000).then(()=>Logar()).then(()=>{
                    console.log(x);
                    if(x==1){
                        Alert.alert("Aguarde.....", "Usuario não existente")
                    }
                    else{
                        Alert.alert("Aguarde....", "ENTROUUUUUUUUU")
                        navigation.navigate("telaHome")
                    }
                 })
                    alert("Aguarde")

                 }}>
                 <Text style={style.txtLogin}> Entrar </Text>
                  <AntDesign name="arrowright" size={30} color="black" />
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
            x = 1;
        }
        else{
            x = 0;
            gravar(rs.output[0]);
        }

    }).catch((erro) => console.error(`Erro ao tentar logar ${erro}`))


}

const wait = (time) =>{
    return new Promise((resolver)=>{
        setTimeout(resolver,time)
    })
}

function gravar(dados){
    banco.transaction((ts) => {
        ts.executeSql(`create table if not exists tbcelular(id integer primary key, idcliente int,  
        nomeusuario text,
        senha text,
        email text,
        nome text,
        datanascimento text,
        sexo text )`);
        ts.executeSql(`insert into tbcelular (idcliente,  
            nomeusuario ,
            senha ,
            email ,
            nome ,
            datanascimento ,
            sexo )values(?,?,?,?,?,?,?)`,[
                dados.idCliente, dados.nomeUsuario, dados.senha, dados.email, dados.nome, dados.datanascimento, dados.sexo
            ])
    })
}