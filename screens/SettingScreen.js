import React from 'react';
import {Component} from 'react';
import {View, Text, TextInput, TouchableOpacity, StyleSheet} from 'react-native';
import MyHeader from '../components/MyHeader';
import db from '../config';
import firebase from 'firebase';
import { Alert } from 'react-native';


export default class SettingScreen extends Component{
    constructor(){
        super();
        this.state={
            firstName:'',
            lastName:'',
            contact:'',
            address:'',
            emailId:'',
            docId:''
        }
    }


    getUserDetails(){
        var user = firebase.auth().currentUser;
        var email = user.email
        db.collection('users').where('email_id', '==', email).get()
        .then(snapshot=>{
            snapshot.forEach(doc=>{
                var data = doc.data()
                this.setState({
                    emailId:data.email_id,
                    firstName:data.first_name,
                    lastName:data.last_name,
                    address:data.address,
                    contact:data.contact,
                    docId:doc.id
                })
            })
        })
    }

    updateUserDetails=()=>{
        db.collection('users').doc(this.state.docId).update(
            {
                "first_name":this.state.firstName,
                "last_name":this.state.lastName,
                "address":this.state.address,
                "contact":this.state.contact
            }
        )

        Alert.alert("Profie updated successfully")
    }

    componentDidMount(){
        this.getUserDetails();
    }
    
    render(){
        return(
            <View style={styles.container}>
                <MyHeader title="settings" navigation={this.props.navigation}/>

                <View style={styles.formContainer}>

                    <TextInput 
                    style={styles.formTextInputs}
                    placeholder={"First Name"}
                    maxLength={8}
                    onChangeText={(text)=>{
                        this.setState({firstName:text})
                    }} 
                    value={this.state.firstName}/>

                    <TextInput  style={styles.formTextInputs}
                    placeholder={"Last Name"}
                    maxLength={8}
                    onChangeText={(text)=>{
                        this.setState({lastName:text})
                    }} 
                    value={this.state.lastName}/>

                    <TextInput style={styles.formTextInputs}
                    placeholder={"Contact"}
                    maxLength={15}
                    keyboardType={"numeric"}
                    onChangeText={(text)=>{
                        this.setState({contact:text})
                    }} 
                    value={this.state.contact}/>

                    <TextInput style={styles.formTextInputs}
                    placeholder={"Address"}
                    multiline={true}
                    onChangeText={(text)=>{
                        this.setState({address:text})
                    }} 
                    value={this.state.address}/>

                <TouchableOpacity onPress={()=>{
                    this.updateUserDetails()
                }}
                style={styles.button}>
                        <Text style={styles.buttonText}>
                            Save
                        </Text>
                </TouchableOpacity>
                </View>

               

            </View>
        );
    }
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        alignItems:'center',
        justifyContent:'center'
    },
    formContainer:{
        flex:1,
        width:'100%',
        alignItems:'center',

    },
    formTextInputs:{
        width:'75%',
        height:45,
        alignSelf:'center',
        borderColor:'#FFAB91',
        borderRadius:10,
        borderWidth:1,
        marginTop:20,
        padding:10,
        
    },
    button:{
      width:"75%",
      height:50,
      justifyContent:'center',
      alignItems:'center',
      borderRadius:10,
      backgroundColor:"#ff5722",
      shadowColor: "#000",
      shadowOffset: {
         width: 0,
         height: 8,
      },
      
      shadowOpacity: 0.30,
      shadowRadius: 10.32,
      elevation: 16,
      marginTop: 20
    },
    buttonText:{

        fontSize:25,
        fontWeight:'bold',
        color:'#fff'
    }
})