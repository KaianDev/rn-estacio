import { Building2 } from "@tamagui/lucide-icons"
import { Text, XStack } from "tamagui"

export function Header() {
  return (
    <XStack
      rowGap={16}
      justifyContent="center"
      paddingVertical={16}
      marginBottom={16}
      borderBottomWidth={1}
      borderBottomColor={"$gray4"}
      alignItems="center"
      gap={16}>
      <Text fontSize={32} fontWeight={"bold"}>
        Facilitador
      </Text>
      <Building2 size={32} />
    </XStack>
  )
}
