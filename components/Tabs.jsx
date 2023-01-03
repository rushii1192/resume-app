import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Image, View } from "react-native";
import Contact from "../screens/Contact";
import Home from "../screens/Home";
import Resume from "../screens/Resume";

const Tab = createBottomTabNavigator();

const Tabs = (props) => {
    return (
        <Tab.Navigator>
            <Tab.Screen 
                name="Home" 
                component={Home} 
                options={{
                    tabBarIcon:({focused})=>(
                        <View style={{alignItems:'center', justifyContent: 'center', top:10}}>
                            <Image
                                source={require('../assests/home.png')}
                                style={{width:25,height:25}} />
                        </View>
                    )
                }}
            />
            <Tab.Screen 
                name="Resume" 
                component={Resume} 
                options={{
                    tabBarIcon:({focused})=>(
                        <View style={{alignItems:'center', justifyContent: 'center', top:10}}>
                            <Image
                                source={require('../assests/resume.png')}
                                style={{width:25,height:25}} />
                        </View>
                    )
                }}
            />
            <Tab.Screen 
                name="Contact" 
                component={Contact} 
                options={{
                    tabBarIcon:({focused})=>(
                        <View style={{alignItems:'center', justifyContent: 'center', top:10}}>
                            <Image
                                source={require('../assests/contact.png')}
                                style={{width:25,height:25}} />
                        </View>
                    )
                }}
            />
        </Tab.Navigator>
    )
}

export default Tabs;