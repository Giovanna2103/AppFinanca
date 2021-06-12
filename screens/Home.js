import * as React from "react";
import { View, Text, TextInput, Picker, Alert, ToastAndroid } from "react-native";
import { style } from "../css/styles";
import { TouchableOpacity, ScrollView } from "react-native-gesture-handler";
import { MaterialIcons,  MaterialCommunityIcons, FontAwesome } from "@expo/vector-icons";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { ipserver } from '../config/settings';
import Teladd from "./Teladd";
import Perfil from "./Perfil";


const lista = createStackNavigator()


export default function Home (){
    return(
    <NavigationContainer independent={true}>
        <lista.Navigator >
         <lista.Screen name="telaHome" component={telaHome} options={{headerShown:false}}/>
         <lista.Screen name="Teladd" component={Teladd} options={{headerShown:false}}/>
         <lista.Screen name="Perfil" component={Perfil} options={{headerShown:false}}/>
        </lista.Navigator>
    </NavigationContainer>
    )
}

function telaHome({navigation}){
    const [dados,setDados]=React.useState([])
    const [saldo,setSaldo]=React.useState([])


    React.useEffect(() => {
        fetch(`${ipserver}/despesas/listar`)
        .then((response) => response.json())
        .then((rs) => setDados(rs.output)).catch((error) => console.error(`Dados não encontrado ${error}`))
    },[])

    React.useEffect(() => {
        fetch(`${ipserver}/receita/listar`)
        .then((response) => response.json())
        .then((rs) => setDados(rs.output)).catch((error) => console.error(`Dados não encontrado ${error}`))
    },[])


    React.useEffect(() => {
        fetch(`${ipserver}/receita/saldo`)
        .then((response) => response.json())
        .then((rs) => setSaldo(rs.output)).catch((error) => console.error(`Saldo não encontrado ${error}`))
    },[])


    return(

        <View style={style.container}>

            <View style={style.vSaldo}>

                <Text style={style.itemsaldo}> Saldo Atual </Text>

                {
                    saldo.map((item, index) => (
                        <View key={item.id}>
                            
                            <Text style={style.txtSaldo}>R$ {item.SaldoFinal}</Text>

                        </View>
                    ))
                }

            </View>

            <View style={style.vHistorico}>

                <ScrollView>
                
                    <Text style={style.txtHistorico}> Historico</Text>
                    {
                        dados.map((item, index) => (
                            <View key={item.id} style={style.vDadosHistorico}>

                             <Text style={style.txtconta}>{item.nomedaConta}</Text>

                             <Text style={style.txtvalor}> R${item.valorConta}</Text>

                             <Text style={style.txtclassi}>{item.classificacao}</Text>

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

                <TouchableOpacity
                    style={style.btnHome}
                    onPress={()=> navigation.navigate("Perfil")}

                    >
                    <FontAwesome name="user-o" size={30} color="black" />
                    <Text> Perfil </Text>
                </TouchableOpacity>
            </View>

        </View>
    );
}