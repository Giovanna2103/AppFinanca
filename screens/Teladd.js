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
import * as SQLite from 'expo-sqlite';

const banco = SQLite.openDatabase("yourcash.banco");


let vd = "";   // Valor Despesa
let nd = "";   // Nome Despesa
let cl = "";   // Classificação Despesa

let vr = "";   // Valor Renda
let tr = "";   // Tipo de Renda

let sf = "";   // Saldo Final



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
    const [dados,setDados] = React.useState([]);
    const [renda, setRenda] = React.useState("");
    const [tiporenda, setTipoRenda] = React.useState("");
    const [valordespesa, setValordespesa] = React.useState("");
    const [nomedespesa, setNomedespesa] = React.useState("");
    const [classificacao, setClassificacao] = React.useState("");
    const [saldo, setSaldo] = React.useState(0);


    React.useEffect(() => {
        fetch(`${ipserver}/receita/saldo`)
        .then((response) => response.json())
        .then((rs) => {
            setDados(rs.output)
            setSaldo(rs.output[0].SaldoFinal)
        }).catch((error) => console.error(`Dados não encontrado ${error}`))
    },[])

    return(

        <View style={style.container}>

            <View style={style.vSaldoAdd}>

                <Text style={style.itemsaldoAdd}> Saldo Atual </Text>

                {
                    dados.map((item, index) => (
                        <View key={item.id}>
                            <Text style={style.txtSaldoAdd}>R$ {saldo}</Text>
                        </View>
                    ))
                }
            </View>


            {/* --------------- Cadastramento das rendas e despesas ------------------ */}

            <View style={style.areaAdd}>

                <ScrollView horizontal={false} >

                    <View style={{flexDirection:"row"}}>

                        {/* ---------------- Renda -------------------- */}
                        <View style={style.renda}>

                            <TextInput
                                style={style.inputRenda}
                                placeholder="Valor renda"
                                keyboardType="number-pad"
                                value={renda}
                                onChangeText={(value) => setRenda(value)}
                            />

                            <Picker
                            mode="dropdown"
                            style={style.inputclassi}
                            selectedValue={tiporenda}
                            onValueChange={setTipoRenda}
                            >

                            <Picker.Item label="Renda Fixa" value="Renda Fixa" />
                            <Picker.Item label="Renda Extra" value="Renda Extra" />

                            </Picker>

                        </View>

                        {/* ---------------- Despesas -------------------- */}

                        <View style={style.renda}>

                            <TextInput
                             style={style.inputRenda}
                             placeholder="Valor da Despesa"
                             keyboardType="number-pad"
                             value={valordespesa}
                             onChangeText={(value) => setValordespesa(value)}
                            />

                            <TextInput
                             style={style.inputRenda}
                             placeholder="Nome Despesa"
                             keyboardType="default"
                             value={nomedespesa}
                             onChangeText={(value) => setNomedespesa(value)}
                            />


                            <Picker
                             mode="dropdown"
                             style={style.inputclassi}
                             selectedValue={classificacao}
                             onValueChange={setClassificacao}
                            >

                             <Picker.Item label="Despesa Extra" value="Despesa Extra" />
                             <Picker.Item label="Despesa Mensal" value="Despesa Mensal" />


                            </Picker>

                        </View>

                    </View>

                </ScrollView>

            </View>


            {/* ----------------- Area dos botoes ---------------------*/}

            <View style={style.vBotaoAdd}>

                <TouchableOpacity 
                    style={style.btnrenda}
                    onPress={() => {
                        setSaldo(saldo+parseFloat(renda))

                     vr = renda;
                     tr = tiporenda;
                     sf = saldo+parseFloat(renda);

                     esperar(2000).then (() => contaRenda())
                     ToastAndroid.showWithGravity("Aguarde... Efetuando conta", ToastAndroid.SHORT, ToastAndroid.CENTER);

                    }}
                >

                 <Text style={style.txtAdd}>Adicionar renda</Text>

                </TouchableOpacity>


                <TouchableOpacity 
                    style={style.btndespesa} 
                    onPress={() => {
                        setSaldo(saldo-valordespesa)

                     vd = valordespesa;
                     nd = nomedespesa;
                     cl = classificacao;
                     sf = saldo-valordespesa;


                     esperar(2000).then (() => contaDespesa())
                     ToastAndroid.showWithGravity("Aguarde... Efetuando conta", ToastAndroid.SHORT, ToastAndroid.CENTER);

                    }}
                >

                 <Text style={style.txtAdd}>Adicionar despesa</Text>

                </TouchableOpacity>

            </View>

            {/* ---------- Área Navegaçao para outras telas ------------- */}


            <View style={style.vBtnAdd}>

                <TouchableOpacity
                 style={style.btnAdd}
                 onPress={()=> navigation.navigate("telaHome")}
                >
                 <MaterialCommunityIcons name="home-currency-usd" size={30} color="black" />          
                 <Text> Home </Text>
                </TouchableOpacity>

                <TouchableOpacity
                 style={style.btnAdd}
                >
                 <MaterialIcons name="add-circle-outline" size={30} color="black" />
                 <Text> Adicionar </Text>
                </TouchableOpacity>

                <TouchableOpacity
                 style={style.btnAdd}
                 onPress={()=> navigation.navigate("Perfil")}
                >
                 <FontAwesome name="user-o" size={30} color="black" />
                 <Text> Perfil </Text>
                </TouchableOpacity>

            </View>
        </View>
    );
}


// ---------------- Função para conta de Despesas (-) -----------------------


function contaDespesa() {
 let cli = 1

    banco.transaction((info) =>{
        info.executeSql("select * from tbcelular limit 0,1", [], (_,{rows:{_array}}) => {
            cli=_array[0].idcliente
            console.log(_array[0].idcliente)
        })
    })

 
    fetch(`${ipserver}/despesas`, {
     method: "POST",
        headers: {
            accept: "application/json",
          "content-type": "application/json",
        },
        body: JSON.stringify({
            valorConta:vd,
            nomedaConta:nd,
            classificacao:cl,
            SaldoFinal:sf,
            idCliente:cli,
            idSalario:2
        }),
    })
    .then((response) => response.json())
    .then((rs) => console.log(rs))
    .catch((error) => console.error(`Erro ao tentar realizar a conta -> ${error}`));
  
}


// ---------------- Função para conta de Renda (+) -----------------------


function contaRenda() {
    let cli = 1

    banco.transaction((info) =>{
        info.executeSql("select * from tbcelular limit 0,1", [], (_,{rows:{_array}}) => {
            cli=_array[0].idcliente
            console.log(_array[0].idcliente)
        })
    })

 
    fetch(`${ipserver}/receita`, {
     method: "POST",
      headers: {
        accept: "application/json",
        "content-type": "application/json",
      },
      body: JSON.stringify({
          renda:vr,
          tipodeRenda:tr,
          SaldoFinal:sf,
          idCliente:cli,
          idDespesa:2
        }),
    })
    .then((response) => response.json())
    .then((rs) => console.log(rs))
    .catch((error) => console.error(`Erro ao tentar efetuar a função -> ${error}`));

}

const esperar = (tempo) => {
    return new Promise((resolver) => {
        setTimeout(resolver,tempo)
    })
}