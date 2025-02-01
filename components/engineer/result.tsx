import { Button, Text, View, YStack } from "tamagui"
import { EngineerResultItem } from "./result-item"
import { EngineerResultBadge } from "./result-badge"
import { router } from "expo-router"

export function EngineerResult() {
  return (
    <View flex={1} justifyContent="center" alignItems="center" gap={24}>
      <YStack>
        <Text fontSize={28} fontWeight={"bold"} textAlign="center">
          Resultados
        </Text>
        <Text fontSize={16} textAlign="center" color="$gray10">
          Pressione o botão (i) para ver os detalhes
        </Text>
      </YStack>
      <YStack width={"100%"} gap={24} paddingHorizontal={16}>
        <EngineerResultItem
          title="Orçamento"
          value="R$ 1.000,00"
          infoMessage="Valor total do orçamento, valor estimado."
        />
        <EngineerResultItem
          title="Proposta"
          value="R$ 1.000,00"
          infoMessage="Valor total da proposta da empresa em análise."
        />
        <EngineerResultItem
          title="Valor é inexequível?"
          infoMessage="Valor da proposta é superior a 75% do valor do orçamento.">
          <EngineerResultBadge title="Não" variant="success" />
        </EngineerResultItem>
        <EngineerResultItem
          title="Precisa de garantia adicional?"
          infoMessage="Valor da proposta é superior a 75% do valor do orçamento.">
          <EngineerResultBadge title="Sim" variant="error" />
        </EngineerResultItem>
        <EngineerResultItem
          title="Garantia adicional"
          value="R$ 1.000,00"
          infoMessage="85% do valor do orçamento - valor da proposta."
        />
        <EngineerResultItem
          title="5% do valor da proposta"
          value="R$ 1.000,00"
          infoMessage="5% do valor da proposta."
        />
        <EngineerResultItem
          title="Total da Garantia"
          value="R$ 1.000,00"
          infoMessage="5% do valor da proposta + garantia adicional."
        />
      </YStack>
      <View padding={16} width={"100%"} gap={32}>
        <Button
          onPress={() => router.push("/engineer")}
          variant={"outlined"}
          fontSize={18}
          fontWeight="bold"
          width={"100%"}
          justifyContent="center"
          alignItems="center">
          Voltar
        </Button>
      </View>
    </View>
  )
}
