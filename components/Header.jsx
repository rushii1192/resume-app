import { View, Text, Image, StyleSheet } from "react-native";

const Header = (props) => {
    return (
        <View>
            <View style={{ width: '100%', height:150 }}>
                <Image source={require('../assests/bg-img.jpg')} style={{ height: '100%' }} />
            </View>
            <View
                style={{
                    marginHorizontal: 10
                }}
            >
                <Image
                    source={require('../assests/my-avatar.png')}
                    style={styles.avatar}
                />

                <Text
                    style={{
                        fontSize: 30,
                        color: 'black',
                        fontWeight: 'bold',
                    }}
                >Rushikesh Borakhede</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    avatar: {
        width: 100,
        borderRadius: 50,
        height: 100,
        marginTop: -60,
        borderColor: 'black',
        borderWidth: 1
    },
});

export default Header;