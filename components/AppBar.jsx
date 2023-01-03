import { View, Pressable, Text } from "react-native";

const AppBar = (props) => {
    return(
        <View>
            <Pressable
                onPress={()=>alert('pressed')}
            >
                <Text>Home</Text>
            </Pressable>
            <Pressable
                onPress={()=>alert('pressed')}
            >
                <Text>Home</Text>
            </Pressable>
            <Pressable
                onPress={()=>alert('pressed')}
            >
                <Text>Home</Text>
            </Pressable>
        </View>
    )
}

export default AppBar;