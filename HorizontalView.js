import React from 'react';
import {View,Text,StyleSheet,ScrollView,Dimentions,Button} from 'react-native  ';

export default class HorizontalView extends React.Component{
    render(){
        return(
  <ScrollView horizontal = {true} pangingEnable={true} styles={styles.container}>
            <View styles={styles.outer}>
                 <Text styles={styles.innerText}>Alzhemier App</Text>
                 <Text>Introduction 
                     This app helps the patient who is suffring from Alzhemier
                                      </Text>
                 <Button title="Next"/>
                 <View styles={[styles.outer, styles.red]}>
                 <Text styles={styles.innerText}>SignUp Or Login</Text>
                 <Button title="SignUp"/>
                 <Button title="Login"/>
                 </View>
            </View>
            <View styles={[style.outer, style.green]}>
            <Text styles={styles.innerText}>Questions</Text>
            <Text>Q.1</Text>
            </View>
  </ScrollView>
        )
    }
}
const styles =StyleSheet.create({
    container:{

    },
    outer:{
        backgroundColor:'white',
        alignItems:'center',
         justiflyContent:'center',
         width: Dimentions.get('window').width,
         height: Dimentions.get('window').height
    },
    innerText:{
        color:'#fff',
        fontSize:25,
        fontWeight:  'bold'
    },
    red:{
        backgroundColor:'red'
    },
    green:{
        backgroundColor:'green'
    }
})