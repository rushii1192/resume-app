
import { StyleSheet, Text, View, Pressable, ScrollView } from "react-native";

const Skills = (props) => {
    return (
        <View style={styles.skillsItem}>

                <Text style={{fontWeight:'bold'}}>{props.title}</Text>
                <Text>{props.percentage}</Text>

                <View style={styles.skillProgressBg}>
                    <View style={{
                        backgroundColor:'#868eff',
                        height:'100%',
                        width:props.percentage,
                    }}></View>
                </View>
            

        </View>
    )
}

const styles = StyleSheet.create({
    skillsItem:{
        marginBottom: 15,
    },
    titleWrapper:{
        display:'flex',
        alignItems:'center',
        gap: 5,
        marginBottom:8,
    },
    skillProgressBg:{
        backgroundColor: '#fffff',
        width:'100%',
        height:8,
    },
    skillProgressFill:{
        backgroundColor:'#000000',
        height:'100%',
    },
});

export default Skills;