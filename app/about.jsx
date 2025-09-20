import { View, Text, StyleSheet } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

const About = () => {
  return (
    <LinearGradient
          colors={["#E8DFCA", "#E8DFCA", "#19183B"]}
          start={{ x: 0, y: 0 }}
          end={{ x: 0, y: 1 }}
          style={styles.container}
        >
      <View style={styles.content}>
        <Text style={styles.title}>WatchHaus</Text>
        <Text style={styles.text}>“WatchHaus" Timeless luxury, crafted for your wrist.".”</Text>
      </View>
    </LinearGradient>
  );
};

export default About;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    padding: 24,
  },
  content: {
    alignItems: "center",
    
    padding: 20,
    borderRadius: 12,
  },
  title: {
    fontSize: 35,
    marginBottom: 20,
    fontWeight: "bold",
    color: "black",
    textAlign: "center",
  },
  text: {
    fontSize: 25,
    color: "black",
    textAlign: "center",
  },
});
