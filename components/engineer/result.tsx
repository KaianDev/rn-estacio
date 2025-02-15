import { Button, Text, View, YStack } from "tamagui"
import { EngineerResultItem } from "./result-item"
import { EngineerResultBadge } from "./result-badge"
import { router } from "expo-router"
import { useEngineerStore } from "../../stores/engineer"
import { formatCurrency } from "../../helpers/format-currency"

export function EngineerResult() {
  const { results, clearResults } = useEngineerStore()
  console.log(JSON.stringify(results, null, 2))
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
          value={formatCurrency(results?.budgetValue ?? 0)}
          infoMessage="Valor total do orçamento, valor estimado."
        />
        <EngineerResultItem
          title="Proposta"
          value={formatCurrency(results?.proposalValue ?? 0)}
          infoMessage="Valor total da proposta da empresa em análise."
        />
        {results?.isUnfeasible && (
          <EngineerResultItem
            title="Valor é inexequível?"
            infoMessage="SIM! Valor da proposta é inferior a 75% do valor do orçamento. Obs*: Solicitar comprovação de exequibilidade.">
            <EngineerResultBadge title="Sim" variant="error" />
          </EngineerResultItem>
        )}
        {results && !results.isUnfeasible && (
          <EngineerResultItem
            title="Valor é inexequível?"
            infoMessage="Valor da proposta é superior a 75% do valor do orçamento.">
            <EngineerResultBadge title="Não" variant="success" />
          </EngineerResultItem>
        )}
        {results?.needAdditionalGuarantee && (
          <EngineerResultItem
            title="Precisa de garantia adicional?"
            infoMessage="Valor da proposta é inferior a 85% do valor do orçamento.">
            <EngineerResultBadge title="Sim" variant="error" />
          </EngineerResultItem>
        )}
        {results && !results.needAdditionalGuarantee && (
          <EngineerResultItem
            title="Precisa de garantia adicional?"
            infoMessage="Valor da proposta é superior a 85% do valor do orçamento.">
            <EngineerResultBadge title="Não" variant="success" />
          </EngineerResultItem>
        )}
        {results?.needAdditionalGuarantee && (
          <>
            <EngineerResultItem
              title="Garantia adicional"
              value={formatCurrency(results?.additionalGuarantee ?? 0)}
              infoMessage="85% do valor do orçamento - valor da proposta."
            />
            <EngineerResultItem
              title="5% do valor da proposta"
              value={formatCurrency(results?.fivePercentProposalValue ?? 0)}
              infoMessage="5% do valor da proposta."
            />
          </>
        )}

        <EngineerResultItem
          title="Total da Garantia"
          value={formatCurrency(results?.totalInsuranceValue ?? 0)}
          infoMessage={
            results?.needAdditionalGuarantee
              ? "Garantia adicional + 5% do valor da proposta."
              : "5% do valor da proposta."
          }
        />
      </YStack>
      <View padding={16} width={"100%"} gap={32}>
        <Button
          onPress={() => {
            router.back()
            clearResults()
          }}
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
