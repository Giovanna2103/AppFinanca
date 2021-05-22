import { StyleSheet } from "react-native";

export const style = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ffff",
    justifyContent: "center",
    alignItems: "center",
  },

  input: {
    width:335,
    padding:15,
    marginBottom:10,
    borderBottomColor:'#81c784',
    borderBottomWidth:1

  },

  cxInput:{
    backgroundColor:'white',
    padding:10,
    marginTop:10,
    marginBottom:5,
    height:395

  },


  // --------- Tela Inicial -----------------
  
  logo: {
    width: "65%",
    height: "75%",
    marginRight: "auto",
    marginLeft: "auto",
    resizeMode: "contain",
  },

  btnApp: {
    flexDirection: "row",
    width: "90%",
    padding: 10,
    backgroundColor: "#66bb6a",
    borderRadius: 15,
    shadowColor: "black",
    shadowOffset: { width: 15, height: 15 },
    shadowOpacity: 0.9,
    shadowRadius: 10,
    elevation: 7,
  },

  btn: {
    padding: 10,
    alignItems: "center",
    justifyContent: "center",
    flex: 1,
  },


  // ------------ Tela Cadastro ----------------

  cxsexo:{
    width:325,
    padding:10,

  },

  btnCadastro:{
    marginTop:10,
    marginBottom:50,
    backgroundColor:'#c5e1a5',
    padding:15,
    width:140,
    marginLeft:"auto",
    marginRight:"auto",
    borderRadius:30,

  },

  txtCadastro:{
    color:'black',
    fontWeight:'bold',
    textAlign:'center',
    fontSize:20

  },


 // -------------- Tela de Login ---------------------
 
 logoLogin:{
  width: 150,
  height: 150,
  marginRight: "auto",
  marginLeft: "auto",
  resizeMode: "contain",

 },
 
 
 btnLogin:{
  marginTop:20,
  marginBottom:10,
  backgroundColor:'#c5e1a5',
  padding:10,
  width:"90%",
  marginLeft:"auto",
  marginRight:"auto",
  borderRadius:30,

 },

 txtLogin:{
  color:'black',
  fontWeight:'bold',
  textAlign:'left',
  fontSize:20

 },

cxInputLogin:{
  backgroundColor:'white',
  padding:10,
  marginTop:10,
  marginBottom:5,
  
},

btnLoginCad:{
  padding:15,
  width:200,
  marginLeft:"auto",
  marginRight:"auto",

 },

 txtLoginCad:{
  color:'black',
  textAlign:'center',
  fontSize:20

 },

 txtLoginCadi:{
  color:'black',
  fontWeight:'bold',
  textAlign:'left',
  fontSize:25

 },


 







});
