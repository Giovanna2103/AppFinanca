import * as React from "react";
import { View, Text, Alert} from "react-native";
import { style } from "../css/styles";
import { TouchableOpacity, ScrollView } from "react-native-gesture-handler";
import { MaterialIcons,  MaterialCommunityIcons, FontAwesome, AntDesign } from "@expo/vector-icons";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { ipserver } from '../config/settings';
import Teladd from "./Teladd";
import telaHome from "./Home";
import telaLogin from "./Login";
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
         <lista.Screen name="telaLogin" component={telaLogin} options={{headerShown:false}}/>
        </lista.Navigator>
    </NavigationContainer>
    )
}


function Perfil ({navigation}){
 const [dados,setDados]=React.useState([])


    React.useEffect(() => {
        banco.transaction((info) =>{
            info.executeSql("select * from tbcelular limit 0,1", [], (_,{rows:{_array}}) => {
                setDados(_array)
            })
        })
    },[])

    return(

        <View style={style.container}>

            <View style={style.vPerfil}>
                <ScrollView>

                    <TouchableOpacity 
                    style={style.btnsair}
                    onPress={()=>{ 
                        banco.transaction((sair) => {
                            sair.executeSql("delete from tbcelular");
                            Alert.alert("Saindo","Tchauuuuuuuuuuuuu")
                        })
                        navigation.navigate("telaLogin")}}
                    >
                        <AntDesign name="logout" size={30} color="#689f38" />
                        <Text style={{color:"#689f38", textAlign:"center"}}> Sair </Text>
                        
                    </TouchableOpacity>

                    {
                        dados.map((item, index) => (
                            <View key={item.id}>

                                <Text style={style.itemperfil}> Nome Usuario </Text>
                             <Text style={style.txtPerfil}>{item.nomeusuario} </Text>

                                <Text style={style.itemperfil}> Email </Text>
                             <Text style={style.txtPerfil}>{item.email} </Text>

                                <Text style={style.itemperfil}>Seu Nome </Text>
                             <Text style={style.txtPerfil}>{item.nome} </Text>

                                <Text style={style.itemperfil}>Data Nascimento </Text>
                             <Text style={style.txtPerfil}>{item.datanascimento} </Text>


                            </View>
                        ))
                    }

                    <TouchableOpacity 
                        style={style.btnconfig}
                    >
                        <Text style={style.txtconfig}>Configurações </Text>
                        <AntDesign name="setting" size={24} color="#689f38" /> 

                    </TouchableOpacity>


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