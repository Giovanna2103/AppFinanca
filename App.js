import { StatusBar } from "expo-status-bar";
import React from "react";
import { Text, View, TouchableOpacity, Image } from "react-native";
import { styleFormat } from "./css/styles";
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
    <View style={styleFormat.container}>
      <Image
        source={{
          uri:
            "https://i.pinimg.com/originals/8d/78/75/8d787538cd86e9aeaa510e0be50fa11a.png",
        }}
        style={styleFormat.logo}
      />

      <View style={styleFormat.btnApp}>
        <TouchableOpacity
          style={styleFormat.btn}
          onPress={() => navigation.navigate("Login")}
        >
          <MaterialIcons name="login" size={24} color="black" />
          <Text> Login </Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styleFormat.btn}
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
