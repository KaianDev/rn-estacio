import { Text, YStack } from "tamagui"

export function Footer() {
  return (
    <YStack alignItems="center" padding={16}>
      <Text color={"$gray10"}>
        &copy; - {new Date().getFullYear()} - Facilitador
      </Text>
      <Text color={"$gray10"}>Desenvolvido por Kaian Vasconcelos</Text>
    </YStack>
  )
}
