import { Building2 } from "@tamagui/lucide-icons"
import { Text, View, XStack } from "tamagui"
import { EngineerResult } from "../components/engineer/result"

export default function EngineerResultPage() {
  return (
    <View backgroundColor={"$gray1"} flex={1}>
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
      <EngineerResult />
    </View>
  )
}
