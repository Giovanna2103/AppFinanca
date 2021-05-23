import { StatusBar } from "expo-status-bar";
import React from "react";
import { Text, View, TouchableOpacity, Image } from "react-native";
import { style } from "./css/styles";
import { MaterialIcons,  MaterialCommunityIcons } from "@expo/vector-icons";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Login from "./screens/Login";
import Cadastro from "./screens/Cadastro";
import telaHome from "./screens/Home";


const pilha = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer independent={true}>
      <pilha.Navigator initialRoute="TelaInicial">
        <pilha.Screen
          name="TelaInicial"
          component={TelaInicial}
          options={{ headerShown: false }}
        />
        <pilha.Screen name="Login" component={Login} />
        <pilha.Screen name="telaHome" component={telaHome} />
      </pilha.Navigator>
    </NavigationContainer>
  );
}

function TelaInicial({ navigation }) {
  return (
    <View style={style.container}>

    <Image source ={require('./assets/LogoApp2.png')} style={style.logoHome}/>

      <View style={style.btnApp}>

        <TouchableOpacity
          style={style.btn}
          onPress={() => navigation.navigate("Login")}
        >
          <MaterialIcons name="login" size={40} color="black" />
          <Text> Login </Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={style.btn}
          onPress={() => navigation.navigate("telaHome")}
          >
          <MaterialCommunityIcons name="home-currency-usd" size={40} color="black" />          
          <Text> Home </Text>
        </TouchableOpacity>
      </View>

      <StatusBar style="auto" />
    </View>
  );
}
