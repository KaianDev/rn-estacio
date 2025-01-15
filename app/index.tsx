import { router } from "expo-router"
import { SafeAreaView, StyleSheet } from "react-native"
import { Button, Text, View } from "tamagui"

export default function HomePage() {
  return (
    <SafeAreaView style={styles.container}>
      <View gap={16} alignItems="center" justifyContent="center" flex={1}>
        <Text fontSize={64} fontWeight={"bold"} textAlign="center">
          Facilitador
        </Text>
        <Text fontSize={28} textAlign="center" color="$gray10">
          Bem vindo ao facilitador
        </Text>
        <Button
          onPress={() => router.push("/engineer")}
          backgroundColor="black"
          color={"white"}
          width={200}
          fontSize={24}
          fontWeight="bold"
          justifyContent="center"
          alignItems="center">
          Entrar
        </Button>
      </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    padding: 24,
    backgroundColor: "#eee",
  },
})
