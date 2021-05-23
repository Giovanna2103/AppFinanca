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

  logoHome:{
      width: 350,
      height: 250,
      marginRight: "auto",
      marginLeft: "auto",
      marginBottom:100,
      resizeMode: "contain",
          
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
  width: 300,
  height: 100,
  marginRight: "auto",
  marginLeft: "auto",
  marginBottom:1,
  resizeMode: "contain",

 },
 
 btnLogin:{
   flexDirection:"row",
  marginTop:20,
  marginBottom:10,
  backgroundColor:'#c5e1a5',
  padding:15,
  width:"90%",
  marginLeft:"auto",
  marginRight:"auto",
  borderRadius:30,

 },

 txtLogin:{
  color:'black',
  fontWeight:'bold',
  textAlign:'left',
  fontSize:20,
  marginRight:180,

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

//  -------------- Tela Home -----------------

vBtnHome: {
  flex:1,
  flexDirection: "row",
  width: "100%",
  backgroundColor: "#66bb6a",

},

btnHome: {
  padding: 10,
  marginRight:25,
  marginLeft:25,
  alignItems: "center",
  justifyContent: "center",

},

vSaldo:{
  flex:1,
  borderColor:'red',
  borderWidth:3,

},

txtSaldo:{
  fontSize:35,
  marginTop:10,
  marginBottom:10,

},

vHistorico:{
  flex:4,
  borderColor:'red',
  borderWidth:3,
  width:"100%",
  marginTop:20

},

txtHistorico:{
  fontSize:20,
  marginTop:10,
  marginBottom:10,

},

vDadosHistorico:{
  flexDirection: "row",

},

txtconta:{
  fontSize:20,
  marginTop:10,
  marginBottom:10,
  marginLeft:15,
  marginRight:15,
  borderColor:'red',
  borderWidth:2,

},

// ---------------------- Tela Adicionar -----------------------

vAdd:{
  flex:2,
  flexDirection:"row",
  width:"100%",
  marginTop:20

},

txtAdd:{
  fontSize:20,
  marginTop:10,
  marginBottom:10,
  borderColor:'red',
  borderWidth:3,
  marginRight:4,
  marginLeft:4,

},

vSaldoAdd:{
  flex:1,
  borderColor:'red',
  borderWidth:3,
  width:"80%",

},

txtSaldoAdd:{
  fontSize:35,
  marginTop:20,
  marginBottom:10,
  textAlign:"center"

},


// ----------------------- Tela Perfil --------------------------

vPerfil:{
  flex:5.9,
  width:"100%",
  marginTop:20

},

txtPerfil:{
  fontSize:20,
  marginTop:20,
  marginBottom:10,
  borderColor:'red',
  borderWidth:3,

},



 







});
