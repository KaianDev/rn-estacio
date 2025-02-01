import { router } from "expo-router"
import { SafeAreaView, StyleSheet } from "react-native"
import { Button, Text, View, YStack } from "tamagui"
import { TeamBuilderIcon } from "../components/icons/team-builder"

export default function HomePage() {
  return (
    <SafeAreaView style={styles.container}>
      <View
        backgroundColor={"$gray1"}
        gap={40}
        width={"100%"}
        alignItems="center"
        justifyContent="center"
        flex={1}>
        <TeamBuilderIcon />
        <YStack>
          <Text fontSize={64} fontWeight={"bold"} textAlign="center">
            Facilitador
          </Text>
          <Text fontSize={28} textAlign="center" color="$gray10">
            Bem vindo ao facilitador
          </Text>
        </YStack>
        <Button
          onPress={() => router.push("/engineer")}
          backgroundColor="black"
          color={"white"}
          width={200}
          fontSize={18}
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
  },
})
