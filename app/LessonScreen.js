import React, { Component } from 'react';
import { ScrollView, Text, StyleSheet, StatusBar, View } from 'react-native';

export default class LessonScreen extends Component {
  static navigationOptions = {
    title: 'Lesson 1',
    headerStyle: { backgroundColor: '#006A40' },
    headerTitleStyle: { color: '#FFFFFF' },
  };
  render() {
    return (
      <View style={styles.container}>
        <StatusBar hidden={true} /> 
        <ScrollView style={{padding: 14}}>
          <Text style={{fontSize:24, color: '#34495e'}}>Adding & Subtracting Radicals</Text>
          <Text style={styles.content}>Just as with "regular" numbers, square roots can be added together. But you might not be able to simplify the addition all the way down to one number. Just as "you can't add apples and oranges", so also you cannot combine "unlike" radical terms. In order to be able to combine radical terms together, those terms have to have the same radical part.</Text>
          <Text style={styles.content}>Since the radical is the same in each term (being the square root of three), then these are "like" terms. This means that I can combine the terms.</Text>
          <Text style={styles.content}>I have two copies of the radical, added to another three copies. This gives mea total of five copies:</Text>
          <Text style={styles.content}>That middle step, with the parentheses, shows the reasoning that justifies the final answer. You probably won't ever need to "show" this step, but it's what should be going through your mind.</Text>
          <Text style={styles.content}>The radical part is the same in each term, so I can do this addition. To help me keep track that the first term means "one copy of the square root of three", I'll insert the "understood" "1":</Text>
          <Text style={styles.content}>Don't assume that expressions with unlike radicals cannot be simplified. It is possible that, after simplifying the radicals, the expression can indeed be simplified.</Text>
          <Text style={styles.content}>I have three copies of the radical, plus another two copies, giving me— Wait a minute! I can simplify those radicals right down to whole numbers:</Text>
          <Text style={styles.content}>Don't worry if you don't see a simplification right away. If I hadn't noticed until the end that the radical simplified, my steps would have been different, but my final answer would have been the same:</Text>
          <Text style={styles.content}>I can only combine the "like" radicals. The first and last terms contain the square root of three, so they can be combined; the middle term contains the square root of five, so it cannot be combined with the others. So, in this case, I'll end up with two terms in my answer.</Text>
          <Text style={styles.content}>I'll start by rearranging the terms, to put the "like" terms together, and by inserting the "understood" 1 into the second square-root-of-three term:</Text>
          <Text style={styles.content}>As given to me, these are "unlike" terms, and I can't combine them. But the 8 in the first term's radical factors as 2 × 2 × 2. This means that I can pull a 2 out of the radical. At that point, I will have "like" terms that I can combine.</Text>
          <Text style={styles.content}>I can simplify most of the radicals, and this will allow for at least a little simplification:</Text>
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#FFFFFF'
  },
  content: {
    fontSize:18,
    paddingTop: 20,
    color: '#34495e'
  }
});

