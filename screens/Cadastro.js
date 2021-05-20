import * as React from "react";
import { View, Text, TextInput, Picker, Alert, ToastAndroid } from "react-native";
import { style } from "../css/styles";
import { TouchableOpacity, ScrollView } from "react-native-gesture-handler";
import { ipserver} from "../config/settings"

let us = ""; // USUARIO
let sh = ""; // SENHA

let nc = ""; // nome completo
let sx = ""; // sexo

let em = ""; // email


export default function Cadastro() {
  const [usuario, setUsuario] = React.useState("");
  const [senha, setSenha] = React.useState("");

  const [nomecliente, setNomeCliente] = React.useState("");
  const [sexo, setSexo] = React.useState("");


  const [email, setEmail] = React.useState("");

  return (
    <View style={style.container}>
      <ScrollView horizontal={false}>
        

        {/* Começo  Área do cadastro de Cliente */}

        <View style={style.cxInput}>
          <TextInput
            style={style.input}
            placeholder="Nome Cliente"
            value={nomecliente}
            keyboardType="default"
            onChangeText={(value) => setNomeCliente(value)}
          />


          <Picker
            mode="dialog"
            selectedValue={sexo}
            onValueChange={setSexo}
            style={style.cxsexo}
          >
            <Picker.Item label="Masculino" value="M" />
            <Picker.Item label="Feminino" value="F" />
            <Picker.Item label="Outro" value="O" />
          </Picker>

          {/* Fim da área do cadastro de Cliente */}

          {/* -------------------------------------------------------------------------------------------------------------------------------------- */}


          {/* Começo Área do cadastro de Contato */}


          <TextInput
            style={style.input}
            placeholder="Email"
            value={email}
            keyboardType="email-address"
            onChangeText={(value) => setEmail(value)}
          />

        {/* Fim da área do cadastro de Contato */}


        {/* -------------------------------------------------------------------------------------------------------------------------------------- */}


        {/* Começo  Área do cadastro de Usuario */}

          <TextInput
            style={style.input}
            placeholder="Nome Usuário"
            value={usuario}
            keyboardType="email-address"
            onChangeText={(value) => setUsuario(value)}
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

        {/* Fim da área do cadastro de Usuario */}

        {/* ----------------------------------------------------------------------------------------------------------------------------- */}


        <TouchableOpacity
          style={style.btnCadastro}
          onPress={() => {
            us = usuario;
            sh = senha;
            nc = nomecliente;
            sx = sexo;

            efetuarCadastro();
            ToastAndroid.showWithGravity("Aguarde... Efetuando o cadastro", ToastAndroid.SHORT, ToastAndroid.CENTER);
          }}
        >
          <Text style={style.txtCadastro}> Cadastrar </Text>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
}

function efetuarCadastro() {
  let idusuario = "";
  let idcontato = "";

  fetch(`${ipserver}/usuario/cadastro`, {
    method: "POST",
    headers: {
      accept: "application/json",
      "content-type": "application/json",
    },
    body: JSON.stringify({
      nomeusuario: us,
      senha: sh,
    }),
  })
    .then((response) => response.json())
    .then((rs) => idusuario = rs.output.insertId)
    .catch((error) => console.error(`Erro ao tentar cadastrar -> ${error}`));
    

  // --------------------------------------------------------------------------------------------------------------------------------------


  fetch(`${ipserver}/contato/cadastro`, {
    method: "POST",
    headers: {
      accept: "application/json",
      "content-type": "application/json",
    },
    body: JSON.stringify({
      email: em,
    }),
  })
    .then((response) => response.json())
    .then((rs) => idcontato = rs.output.insertId)
    .catch((error) => console.error(`Erro ao tentar cadastrar -> ${error}`));


  // --------------------------------------------------------------------------------------------------------------------------------------



  
  


    perai (2000).then(() => {

      fetch(`${ipserver}/cliente/cadastro`, {
        method: "POST",
        headers: {
          accept: "application/json",
          "content-type": "application/json",
        },
        body: JSON.stringify({
          nomecliente:nc,
          sexo:sx,
          idusuario:idusuario,
          idcontato:idcontato,
        }),
      })
        .then((response) => response.json())
        .then((rs) => {
          console.log(rs);
          Alert.alert("Cadastro", "Cliente Cadastrado")
        }
          )
        .catch((error) => Alert.alert("Erro", `Erro ao tentar cadastrar -> ${error}`));

    })




}

const perai = (tempo) => {
  return new Promise((resolver) => {
    setTimeout(resolver, tempo)
  })
}
