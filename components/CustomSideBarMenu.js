import React , {Component} from 'react';
import {View, Text , TouchableOpacity, StyleSheet} from 'react-native';
import {DrawerItems} from 'react-navigation-drawer';
import firebase from 'firebase';

export default class CustomSideBarMenu extends Component{
    
    render(){
        return(
            <View style={styles.container}>
                <View style={styles.drawerItemsContainer}>
                    <DrawerItems {...this.props}/>
                </View>
               
               <View style={styles.logOutContainer}>
                   <TouchableOpacity  style= {styles.logOutButton}onPress={()=>{

                       this.props.navigation.navigate('WelcomeScreen');
                       firebase.auth().signOut();

                   }}>
                       <Text style={styles.logOutText}>
                           Log Out
                       </Text>
                   </TouchableOpacity>
               </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container:{
        flex:1,

    },
    drawerItemsContainer:{
        flex:0.8,
        
    },
    logOutContainer:{
        flex:0.2,
        justifyContent:'flex-end',
        paddingBottom:30,

    },
    logOutButton:{
        color:'blue',
        backgroundColor:'cyan',
        borderWidth:2,
        borderRadius:20,
        height:40,
        width:100,
        marginLeft:'30%',

    },
    logOutText:{
        fontFamily:'serif',
        fontSize:15,
        fontWeight:'bold',
        alignSelf:'center'
    }

})

