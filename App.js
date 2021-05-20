import { StatusBar } from "expo-status-bar";
import React from "react";
import { Text, View, TouchableOpacity, Image } from "react-native";
import { style } from "./css/styles";
import { MaterialIcons,  MaterialCommunityIcons } from "@expo/vector-icons";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Login from "./screens/Login";
import Cadastro from "./screens/Cadastro";
import Home from "./screens/Home";

const pilha = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <pilha.Navigator initialRoute="TelaInicial">
        <pilha.Screen
          name="TelaInicial"
          component={TelaInicial}
          options={{ headerShown: false }}
        />
        <pilha.Screen name="Login" component={Login} />
        <pilha.Screen name="Home" component={Home} />
      </pilha.Navigator>
    </NavigationContainer>
  );
}

function TelaInicial({ navigation }) {
  return (
    <View style={style.container}>
      <Image
        source={{
          uri:
            "data:image/png;base64,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",
        }}
        style={style.logo}
      />

      <View style={style.btnApp}>
        <TouchableOpacity
          style={style.btn}
          onPress={() => navigation.navigate("Login")}
        >
          <MaterialIcons name="login" size={24} color="black" />
          <Text> Login </Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={style.btn}
          onPress={() => navigation.navigate("Home")}
          >
          <MaterialCommunityIcons name="home-currency-usd" size={24} color="black" />          
          <Text> Home </Text>
        </TouchableOpacity>
      </View>

      <StatusBar style="auto" />
    </View>
  );
}
