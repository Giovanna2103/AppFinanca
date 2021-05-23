import * as React from "react";
import { View, Text, TextInput, Picker, Alert, ToastAndroid } from "react-native";
import { style } from "../css/styles";
import { TouchableOpacity, ScrollView } from "react-native-gesture-handler";
import { MaterialIcons,  MaterialCommunityIcons, FontAwesome } from "@expo/vector-icons";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { ipserver } from '../config/settings';
import Perfil from "./Perfil";
import telaHome from "./Home";

const lista = createStackNavigator()


export default function Add (){
    return(
    <NavigationContainer independent={true}>
        <lista.Navigator >
        <lista.Screen name="Teladd" component={Teladd} options={{headerShown:false}}/>
         <lista.Screen name="telaHome" component={telaHome} options={{headerShown:false}}/>
         <lista.Screen name="Perfil" component={Perfil} options={{headerShown:false}}/>
        </lista.Navigator>
    </NavigationContainer>
    )
}


 function Teladd ({navigation}){
    const [dados,setDados]=React.useState([])


    React.useEffect(() => {
        fetch(`${ipserver}/receita/saldo`)
        .then((response) => response.json())
        .then((rs) => setDados(rs.output)).catch((error) => console.error(`Dados não encontrado ${error}`))
    },[])

    return(

        <View style={style.container}>


            <View style={style.vSaldoAdd}>
            {
                dados.map((item, index) => (
                    <View>

                        <Text style={style.txtSaldoAdd}>R$ {item.totalRendimento}</Text>

                    </View>
                ))
            }



            </View>

            <View style={style.vAdd}>

                <Text style={style.txtAdd}> Adicionar Renda </Text>
                <Text style={style.txtAdd}> Adicionar Despesa </Text>

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