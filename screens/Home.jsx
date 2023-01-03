
import React from 'react';
import {
  Image,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import AppBar from '../components/AppBar';
import Skills from '../components/Skills';
import Header from "../components/Header";


const Home = (props) => {

  return (
    <SafeAreaView>
      <ScrollView>
        <Header />
        <View
          style={{
            marginHorizontal: 10
          }}
        >

          <View style={styles.sectionContainer}>
            <Text style={styles.headings}>
              About Me
            </Text>
            <Text

              style={{
                textAlign: 'justify',
              }}

            >
              I am a full-stack developer living in Mumbai, India, with an interest in learning AI and machine learning. One of my favorite parts of my job is coming up with simple, user-friendly solutions to complex problems. As a full-stack developer, I am skilled at using multiple frameworks in one application in order to improve performance and functionality. What I love most about my job is dealing with dreadful situations.
            </Text>
          </View>

          <View style={styles.sectionContainer}>
            <Text style={styles.headings}>Skills</Text>

          </View>

          <Skills title='React Native' percentage='80%' />
          <Skills title='React Js' percentage='50%' />
          <Skills title='App Development' percentage='70%' />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

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
    fontSize: 25,
    color: 'black',
    fontWeight: 'bold',
    marginBottom: 5,
  },

  sectionContainer: {
    marginTop: 20,
  },

  menuItem: {
    color: 'black',
  }
});

export default Home;
