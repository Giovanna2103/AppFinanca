import * as React from "react";
import { View, Text, TextInput, Picker, Alert, ToastAndroid } from "react-native";
import { style } from "../css/styles";
import { TouchableOpacity, ScrollView } from "react-native-gesture-handler";
import { ipserver } from "../config/settings"

let us = ""; // USUARIO
let sh = ""; // SENHA
let em = ""; // email
let nc = ""; // nome completo
let dn = ""; // data nascimento
let sx = ""; // sexo



export default function Cadastro() {
  const [usuario, setUsuario] = React.useState("");
  const [senha, setSenha] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [nomecliente, setNomeCliente] = React.useState("");
  const [datanascimento, setDataNascimento] = React.useState("");
  const [sexo, setSexo] = React.useState("");



  return (
    <View style={style.container}>

      <Text style={style.txtCadastroInicio}> Faça o seu cadastro</Text>

      <ScrollView horizontal={false}>


        {/* Começo  Área do cadastro de Cliente */}

        <View style={style.cxInput}>
          <TextInput
            style={style.input}
            placeholder="Nome Completo"
            value={nomecliente}
            keyboardType="default"
            onChangeText={(value) => setNomeCliente(value)}
          />

          <TextInput
            style={style.input}
            placeholder="Data Nascimento"
            value={datanascimento}
            keyboardType="numbers-and-punctuation"
            onChangeText={(value) => setDataNascimento(value)}
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
            em = email;
            dn = datanascimento;
            nc = nomecliente;
            sx = sexo;

            efetuarCadastro();
            ToastAndroid.showWithGravity("Aguarde... Efetuando o cadastro", ToastAndroid.SHORT, ToastAndroid.CENTER);

            alert("Cadastro concluido com sucesso")

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


  fetch(`${ipserver}/usuario/cadastro`, {
    method: "POST",
    headers: {
      accept: "application/json",
      "content-type": "application/json",
    },
    body: JSON.stringify({
      nomeusuario: us,
      senha: sh,
      email: em,
      nome: nc,
      datanascimento: dn,
      sexo: sx

    }),
  })
    .then((response) => response.json())
    .then((rs) => console.log(rs))
    .catch((error) => console.error(`Erro ao tentar cadastrar -> ${error}`));


}

