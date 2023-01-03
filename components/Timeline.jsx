import { Text, View, } from "react-native";

const Timeline = (props) =>{
    return(
        <View style={{
            marginTop:5,
        }}>
            <Text style={{
                fontWeight:'bold',
                marginBottom:3,
            }} >{props.title}</Text>
            <Text style={{
                color:"#4d59ff",
                marginBottom:3,
            }}>{props.duration}</Text>
            <Text>{props.description}</Text>
        </View>
    )
}

export default Timeline;
