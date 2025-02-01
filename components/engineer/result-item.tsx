import { Info } from "@tamagui/lucide-icons"
import { TouchableOpacity, Alert } from "react-native"
import { Text, XStack } from "tamagui"

interface EngineerResultItemProps {
  title: string
  value?: string
  children?: React.ReactNode
  infoMessage: string
}

export function EngineerResultItem({
  title,
  value,
  children,
  infoMessage,
}: EngineerResultItemProps) {
  const handlePressSeeMoreInfo = () => {
    console.log("see more info")
    console.log(infoMessage)
    Alert.alert(title, infoMessage)
  }

  return (
    <XStack justifyContent="space-between" alignItems="center">
      <Text fontSize={18} fontWeight={"bold"}>
        {title}
      </Text>
      <XStack gap={8} alignItems="center">
        {value && <Text fontSize={18}>{value}</Text>}
        {children}
        <TouchableOpacity
          style={{ paddingHorizontal: 4 }}
          onPress={handlePressSeeMoreInfo}
          aria-label="Ver mais informações">
          <Info size={18} />
        </TouchableOpacity>
      </XStack>
    </XStack>
  )
}
