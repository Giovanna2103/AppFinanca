import * as React from "react";
import { View, Text, TextInput, Picker, Alert, ToastAndroid } from "react-native";
import { style } from "../css/styles";
import { TouchableOpacity, ScrollView } from "react-native-gesture-handler";
import { MaterialIcons,  MaterialCommunityIcons, FontAwesome } from "@expo/vector-icons";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { ipserver } from '../config/settings';
import Teladd from "./Teladd";
import telaHome from "./Home";
import * as SQLite from 'expo-sqlite';

const banco = SQLite.openDatabase("yourcash.banco");


const lista = createStackNavigator()

export default function telaPerfil (){
    return(
    <NavigationContainer independent={true}>
        <lista.Navigator >
        <lista.Screen name="Perfil" component={Perfil} options={{headerShown:false}}/>
        <lista.Screen name="Teladd" component={Teladd} options={{headerShown:false}}/>
         <lista.Screen name="telaHome" component={telaHome} options={{headerShown:false}}/>
        </lista.Navigator>
    </NavigationContainer>
    )
}


function Perfil ({navigation}){
 const [dados,setDados]=React.useState([])


    React.useEffect(() => {
        banco.transaction((info) =>{
            info.executeSql("select * from tbcelular", [], (_,{rows:{_array}}) => {
                setDados(_array)
            })
        })
    },[])

    return(

        <View style={style.container}>

            <View style={style.vPerfil}>
                <ScrollView>
                    {
                        dados.map((item, index) => (
                            <View key={item.id}>

                             <Text style={style.txtPerfil}>{item.nomeusuario} </Text>

                             <Text style={style.txtPerfil}>{item.email} </Text>

                             <Text style={style.txtPerfil}>{item.nome} </Text>

                             <Text style={style.txtPerfil}> Seu salario atual </Text>

                             <Text style={style.txtPerfil}> Configuracoes </Text>

                            </View>
                        ))
                    }
                </ScrollView>
            </View>


            <View style={style.vBtnHome}>

                <TouchableOpacity
                 style={style.btnHome}
                 onPress={()=> navigation.navigate("telaHome")}
                 >
                 <MaterialCommunityIcons name="home-currency-usd" size={30} color="black" />          
                 <Text> Home </Text>
                </TouchableOpacity>

                <TouchableOpacity
                 style={style.btnHome}
                 onPress={()=> navigation.navigate("Teladd")}
                 >
                 <MaterialIcons name="add-circle-outline" size={30} color="black" />
                 <Text> Adicionar </Text>
                </TouchableOpacity>

                <TouchableOpacity style={style.btnHome} >
                 <FontAwesome name="user-o" size={30} color="black" />
                 <Text> Perfil </Text>
                </TouchableOpacity>

            </View>
        </View>
    );
}