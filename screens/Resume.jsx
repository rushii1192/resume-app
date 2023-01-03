import { Text, View, Image, StyleSheet, SafeAreaView, ScrollView } from "react-native";
import Header from "../components/Header";
import Timeline from "../components/Timeline";

const Resume = (props) => {
    return (
        <SafeAreaView>
            <ScrollView>
                <Header />
                <View
                    style={{
                        marginHorizontal: 10,
                    }}
                >
                    <Text style={styles.headings}>Education</Text>
                    <Timeline title='St.Francis Institute of Technology' duration='2020-2024' description='Utilized previously learned frameworks and technologies to develop the projects. As a result, I was able to improve my skills gained in those frameworks. I also learnt how to automate manual process.
                '/>
                    <Timeline title='North Maharashtra University' duration='2018 — 2020' description='Gained the knowledge of basic computer operations by completing the Board studies. Learned programming languages such as C++, JavaScript, Python along with some frontend frameworks.
                '/>

                    <Text style={styles.headings}>Experience</Text>
                    <Timeline title='React Developer at ABN Junction' duration='September 2022 — November 2022' description='Worked with clients of the company to develop react apps. Contributed to a 2% increase in profit for the company by completing the assignment on time.' />
                </View>
            </ScrollView>
        </SafeAreaView>
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
    headings: {
        fontSize: 20,
        color: 'black',
        fontWeight: 'bold',
        marginTop: 10,
    },
});

export default Resume;