import * as React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, Button, View,Image,ScrollView,TouchableOpacity, ImageBackgroundComponent } from 'react-native';





export default function Home() {
  return (
    
    <View  style={estilo.container}>
       
        <Image style={estilo.img2} source={require('../assets/logo.png')} />
       
      <ScrollView>
     
      <Image style={estilo.imagem} source={require('../assets/home1.png')} />
      <Image style={estilo.imagem2} source={require('../assets/regras.png')} />




      <TouchableOpacity style={estilo.botao} onPress={()=> noticias()}>
      <Image style={estilo.imagem3} source={require('../assets/botao3.png')} />
      </TouchableOpacity>
      
     


        <StatusBar style="auto" />
        </ScrollView>
    </View>
    
    
    
  );
}

const estilo = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },

  imagem:{
    flex:1,
    width:380,
    height:220,
    marginTop: 150,
    borderTopLeftRadius:10,
    borderTopRightRadius:10,
    
  },
  img2: {
    width: 395,
    height: 95,
  },
  imagem2:{
    flex:1,
    width:380,
    height:100,
    borderBottomLeftRadius:10,
    borderBottomRightRadius:10,
   
   
  },
  imagem3:{
    flex:1,
    width:220,
    height:50,
    borderRadius:20,
    marginLeft:70,
    marginTop:30
   
   
  },
  img5: {
    width: 395,
    height: 1000,
    opacity:10
    
  },
});
