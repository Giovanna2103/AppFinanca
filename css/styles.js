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
    borderBottomWidth:1,

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
    backgroundColor: "#2196f3",
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

  cxInput:{
    backgroundColor:'white',
    padding:10,
    marginTop:10,
    marginBottom:5,
    height:395,

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
    fontSize:20,

  },

  txtCadastroInicio:{
    color:'black',
    fontWeight:'bold',
    textAlign:'center',
    fontSize:20,
    marginTop:40,    

  },



 // -------------- Tela de Login ---------------------
 

 logoLogin:{
  width: 300,
  height: 100,
  marginRight: "auto",
  marginLeft: "auto",
  marginTop:60,
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
  fontSize:20,

 },

 txtLoginCadi:{
  color:'black',
  fontWeight:'bold',
  textAlign:'left',
  fontSize:25,

 },


  //  -------------- Tela Home -----------------


  vBtnHome: {
    flex:1.2,
    flexDirection: "row",
    width: "100%",
    borderRadius:25,  
    shadowColor: "black",
    shadowOffset: { width: 10, height: 20 },
    shadowOpacity: 0.9,
    shadowRadius: 10,
    elevation: 5,

  },

  btnHome: {
    padding:25,
    marginRight:10,
    marginLeft:10,
    alignItems: "center",
    justifyContent: "center",

  },

  vSaldo:{
    flex:2,
    width:"100%",
    backgroundColor:"#43a047",

  },

  txtSaldo:{
    fontSize:35,
    marginTop:50,
    marginBottom:10,
    color:"white",
    textAlign:"center",

  },

  vHistorico:{
    flex:5,
    width:"100%",

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
    flex:1,
    fontSize:16,
    marginTop:10,
    marginBottom:10,
    marginLeft:5,
    borderBottomWidth:1,
    borderBottomColor:'silver'
    
  },

  txtvalor:{
    flex:1,
    fontSize:16,
    marginTop:10,
    marginBottom:10,
    textAlign:'left',
    borderBottomWidth:1,
    borderBottomColor:'silver'
    
  },

  txtclassi:{
    flex:1,
    fontSize:16,
    marginTop:10,
    marginBottom:10,
    marginRight:5,
    textAlign:'center',
    borderBottomWidth:1,
    borderBottomColor:'silver'
    
  },


  // ---------------------- Tela Adicionar -----------------------


  vSaldoAdd:{
    flex:1,
    width:"100%",
    backgroundColor:"#43a047",

  },

  txtSaldoAdd:{
    fontSize:45,
    marginTop:50,
    marginBottom:10,
    color:"white",
    textAlign:"center",

  },


  vBotaoAdd:{
    flex:2,
    flexDirection:"row",
    width:"98%",
    marginTop:20,

  },

  txtAdd:{
    fontSize:20,
    marginTop:10,
    marginBottom:10,
    marginRight:4,
    marginLeft:4,
    textAlign:"center"

  },

  btnrenda:{
    marginTop:60,
    marginLeft:15,
    marginRight:15,
    backgroundColor:'#c5e1a5',
    padding:15,
    width:150,
    borderRadius:30,
    alignItems:"center",

  },

  inputRenda:{
    width:"90%",
    padding:15,
    marginBottom:5,

  },


  vBtnAdd: {
    flex:0.6,
    flexDirection: "row",
    width: "100%",
    borderRadius:25,  
    shadowColor: "black",
    shadowOffset: { width: 10, height: 20 },
    shadowOpacity: 0.9,
    shadowRadius: 10,
    elevation: 5,

  },

  btnAdd: {
    padding:25,
    marginRight:10,
    marginLeft:10,
    alignItems: "center",
    justifyContent: "center",

  },


  // ----------------------- Tela Perfil --------------------------


  vPerfil:{
    flex:5.9,
    width:"100%",
    marginTop:20,

  },

  txtPerfil:{
    fontSize:20,
    marginTop:20,
    marginBottom:10,
    borderColor:'red',
    borderWidth:3,

  },



});
