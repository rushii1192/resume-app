import { Text, View, TextInput, StyleSheet, Button } from "react-native";
import Header from "../components/Header";
import { useEffect, useState } from "react";


const Contact = (props) => {

    const submitData = () => {
        fetch(`https://getform.io/f/48ac2808-8615-4e0f-ae13-6e9379c09878`, {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ name: name, email:email, message:message })
        }).then(resp => resp.json())
            .then(data => {
                setEmail('');
                setName('');
                setMessage('');
            }).catch((err) => console.log(err))
    }

    var [email, setEmail] = useState('');
    var [name, setName] = useState('');
    var [message, setMessage] = useState('');

    return (
        <View>
            <Header />
            <View style={{ marginHorizontal: 10 }}>
                <Text style={styles.headings}>Contact Me</Text>

                <TextInput
                    placeholder="Enter your Name"
                    value={name}
                    onChangeText={text => setName(text)}
                    style={styles.textStyle}
                />
                <TextInput
                    placeholder="Enter your Email"
                    value={email}
                    onChangeText={text => setEmail(text)}
                    style={styles.textStyle}
                />
                <TextInput
                    placeholder="Enter your Message"
                    value={message}
                    onChangeText={text => setMessage(text)}
                    style={styles.textStyle}
                    multiline
                    numberOfLines={6}
                />

                <Button title="Submit" onPress={() => submitData()} />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    headings: {
        fontSize: 20,
        color: 'black',
        fontWeight: 'bold',
        marginTop: 10,
    },
    textStyle: {
        justifyContent: "center",
        borderColor: "black",
        borderRadius: 10,
        borderWidth: 1,
        margin: 10,
        padding: 5,
    },
})

export default Contact;