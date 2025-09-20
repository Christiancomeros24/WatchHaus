import { View, Text, StyleSheet, FlatList, Pressable, Alert, Platform, Image } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useEffect } from "react";
import { useGoals } from "../../hooks/useGoals";
import { useRouter } from "expo-router";
import { LinearGradient } from "expo-linear-gradient";

// ✅ Image map for watches
const images = {
  rolex: require("../../assets/jp1.jpg"),
  casio: require("../../assets/jp2.jpg"),
  jp1: require("../../assets/jp3.jpg"), // fallback or default
};

const Goals = () => {
  const { goals, fetchGoals, deleteGoal } = useGoals();
  const router = useRouter();

  useEffect(() => {
    fetchGoals();
  }, []);

  const handleEdit = (goal) => {
    router.push({
      pathname: "/goals/updategoals",
      params: {
        id: goal.id,
        name: goal.name,
        progress: goal.progress,
      },
    });
  };

  const handleDelete = (id) => {
    if (Platform.OS === "web") {
      if (window.confirm("Are you sure you want to delete this goal?")) {
        deleteGoal(id);
      }
    } else {
      Alert.alert("Delete Goal", "Are you sure you want to delete this goal?", [
        { text: "Cancel", style: "cancel" },
        { text: "Delete", style: "destructive", onPress: async () => await deleteGoal(id) },
      ]);
    }
  };

  const handleBack = () => {
    router.back();
  };

  return (
    <LinearGradient
      colors={["rgba(40, 162, 196, 1))", "#804decff)", "#D9C4B0)"]}
      start={{ x: 0, y: 0 }}
      end={{ x: 0, y: 1 }}
      style={styles.container}
    >
      <SafeAreaView style={styles.safe}>
        {/* Back Button */}
        <Pressable style={styles.backButton} onPress={handleBack}>
          <Text style={styles.buttonText}>Back</Text>
        </Pressable>

        <Text style={styles.title}>Your Watch</Text>

        <FlatList
          data={goals}
          keyExtractor={(item) => item.id}
          contentContainerStyle={styles.list}
          renderItem={({ item }) => {
            // pick image based on goal name (lowercased)
            const imageKey = item.name?.toLowerCase();
            const goalImage = images[imageKey] || images.jp1;

            return (
              <View style={styles.goalItem}>
                {/* Image for each goal */}
                <Image source={goalImage} style={styles.goalImage} resizeMode="contain" />

                <Text style={styles.goalText}>{item.name || "Untitled Goal"}</Text>
                <Text style={styles.progress}>Quantity: {item.progress ?? "N/A"}</Text>

                <View style={styles.actions}>
                  <Pressable style={[styles.button, styles.editButton]} onPress={() => handleEdit(item)}>
                    <Text style={styles.buttonText}>Edit</Text>
                  </Pressable>
                  <Pressable style={[styles.button, styles.deleteButton]} onPress={() => handleDelete(item.id)}>
                    <Text style={styles.buttonText}>Delete</Text>
                  </Pressable>
                </View>
              </View>
            );
          }}
          ListEmptyComponent={<Text style={styles.empty}>No appliances found.</Text>}
        />
      </SafeAreaView>
    </LinearGradient>
  );
};

export default Goals;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  safe: {
    flex: 1,
    padding: 20,
  },
  list: {
    paddingBottom: 40,
  },
  title: {
    fontSize: 28,
    fontWeight: "bold",
    color: "white",
    textAlign: "center",
    marginBottom: 30,
  },
  goalItem: {
    backgroundColor: "rgba(0,0,0,0.45)",
    padding: 16,
    borderRadius: 12,
    marginBottom: 16,
    alignSelf: "center",
    width: "95%",
    maxWidth: 420,
    alignItems: "center", // center contents
  },
  goalImage: {
    width: 100,
    height: 100,
    marginBottom: 12,
    borderRadius: 8,
  },
  goalText: {
    fontSize: 18,
    fontWeight: "600",
    color: "white",
  },
  progress: {
    marginTop: 4,
    fontSize: 14,
    color: "#ddd",
  },
  actions: {
    flexDirection: "row",
    justifyContent: "flex-end",
    gap: 10,
    marginTop: 12,
  },
  button: {
    paddingVertical: 8,
    paddingHorizontal: 14,
    borderRadius: 6,
  },
  editButton: {
    backgroundColor: "rgba(0,0,0,0.4)",
  },
  deleteButton: {
    backgroundColor: "#E8DFCA",
  },
  buttonText: {
    color: "white",
    fontWeight: "600",
  },
  empty: {
    textAlign: "center",
    color: "white",
    marginTop: 40,
    fontSize: 16,
  },
  // Back Button Styles
  backButton: {
    paddingVertical: 10,
    paddingHorizontal: 20,
    backgroundColor: "rgba(0, 0, 0, 0.6)",
    borderRadius: 6,
    marginBottom: 20,
    alignSelf: "flex-start",
  },
});
