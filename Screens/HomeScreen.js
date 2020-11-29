import { StatusBar } from 'expo-status-bar';
import React, {Component} from 'react';
import {StyleSheet, Button, View, Text} from 'react-native';

const axios = require('axios');

export class HomeScreen extends Component {
    constructor(props){
        super(props);
        this.state ={consulteApi:false, item:[]};
        
      }
    
      hundlerBt(){      
           this.setState(()=>{return {consulteApi:false}});
        axios.get("https://www.dolarsi.com/api/api.php?type=valoresprincipales")
              .then(response=>{
                this.setState(() => {return {consulteApi: true, item:  response.data}});
              })
              .catch((error)=>{
                console.log(error);
              });
      }
      
      handlerLogout=()=>{
        console.log("Logouthome");
      }

      render(){
        
        if(this.state.consulteApi){

          return (
            <>
            <View style={styles.container}>
        
              <Button
                onPress={this.hundlerBt.bind(this)}
                title="Consultar Precio dolar"
                color="#006400"
                accessibilityLabel="Learn more about this purple button"
                
              />
    </View>
  
          <>

              <View style={styles.containerDolar}>
                <Text style={styles.textp}>Precio dolar Blue Compra</Text>
                <Text style={styles.text}>${this.state.item[1].casa.compra}</Text>
                <Text style={styles.textp}>Precio dolar Blue Venta</Text>
                <Text style={styles.text}>${this.state.item[1].casa.venta}</Text>
                <Text style={styles.textp}>Precio dolar Oficial Compra</Text>
                <Text style={styles.text}>${this.state.item[0].casa.compra}</Text>
                <Text style={styles.textp}>Precio dolar Oficial Venta</Text>
                <Text style={styles.text}>${this.state.item[0].casa.venta}</Text>  
              </View>

              </>
    
            
        </>
      );
    
    }else{
    
     return (
      <>
      <View style={styles.container}>
    
        <Button
          onPress={this.hundlerBt.bind(this)}
          title="Consultar Precio dolar"
          color="#006400"
          accessibilityLabel="Learn more about this purple button"
        />
      
      </View>

          </>
        );
    }
    
}
}

const styles = StyleSheet.create({
    container: {
      flex: 2,
      backgroundColor: `#85bb65`,
      alignItems: 'center',
      justifyContent: 'center',
    },
    tinyLogo: {
      width: 200,
      height: 400,
    },
    containerDolar:{
      backgroundColor: '#85bb65',
      paddingBottom: 20,
      flex: 10,
      height: 100,
      alignItems: 'center',
      justifyContent: 'center',},
      text: {
        color: "black",
        fontSize: 20,
        fontWeight: "bold",
        textAlign: "center",
      },
      textP: {
        color: "black",
        fontSize: 20,
        textAlign: "center",
      }
  });