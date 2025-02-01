import { AlertCircle, CircleCheck } from "@tamagui/lucide-icons"
import { Text, View, XStack } from "tamagui"

interface EngineerResultBadgeProps {
  title: string
  variant: "success" | "error"
}

export function EngineerResultBadge({
  title,
  variant,
}: EngineerResultBadgeProps) {
  return (
    <XStack
      gap={4}
      backgroundColor={variant === "success" ? "$green10" : "$red10"}
      alignItems="center"
      borderRadius={100}
      paddingVertical={4}
      paddingHorizontal={8}>
      {variant === "success" ? (
        <CircleCheck color={"white"} size={16} />
      ) : (
        <AlertCircle color={"white"} size={16} />
      )}
      <Text color={"white"} fontSize={14}>
        {title}
      </Text>
    </XStack>
  )
}
