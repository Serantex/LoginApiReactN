
import React, {Component} from "react";
import { createDrawerNavigator } from '@react-navigation/drawer';

// Screens
import {HomeScreen} from "../Screens/HomeScreen";
import {DrawerContentScreen} from "../Screens/DrawerContentScreen";
console.log(HomeScreen);

const Drawer = createDrawerNavigator();

export class DrawerCustomNavigator extends Component {

    constructor(props){
        super(props);
    }

    HandlerLogout=()=>{
        this.props.onLogout();
    }


    render(){
        return(
            <Drawer.Navigator 
                initialRouteName="Home"
                headerMode={'none'}
                drawerContent={props => <DrawerContentScreen onLogout={this.HandlerLogout}{...props}/>}
                
            >
                <Drawer.Screen name="Precio Dolar" component={HomeScreen} />
            </Drawer.Navigator>
        );
    }
    
}

