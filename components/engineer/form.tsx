import { Controller, useForm } from "react-hook-form"
import { Button, Input, Text, View } from "tamagui"
import { zodResolver } from "@hookform/resolvers/zod"
import { engineerFormSchema, EngineerFormSchema } from "../../schemas/engineer"
import { maskCurrency } from "../../helpers/mask-currency"
import { router } from "expo-router"

export function EngineerForm() {
  const form = useForm<EngineerFormSchema>({
    resolver: zodResolver(engineerFormSchema),
    defaultValues: {
      budgetValue: "",
      proposalValue: "",
    },
  })

  const handleSubmit = form.handleSubmit((data) => {
    const budgetValue = +data.budgetValue
    const proposalValue = +data.proposalValue
    console.log({
      budgetValue,
      proposalValue,
    })
    router.push("/engineer-result")
  })

  return (
    <View flex={1} justifyContent="center" alignItems="center" gap={24}>
      <Text fontSize={24} fontWeight={"bold"} textAlign="center">
        Cálculos de engenharia
      </Text>
      <View padding={16} width={"100%"} gap={32}>
        <Controller
          control={form.control}
          name="budgetValue"
          render={({ field, formState }) => (
            <View gap={8} width={"100%"}>
              <Text
                fontWeight={"bold"}
                fontSize={16}
                color={formState.errors.budgetValue ? "$red10" : "$black"}>
                Valor do orçamento
              </Text>
              <Input
                borderBlockColor={"$gray10"}
                placeholder="Orçamento"
                keyboardType="numeric"
                onBlur={field.onBlur}
                onChangeText={(t) => field.onChange(maskCurrency(t))}
                value={field.value?.toString()}
              />
              {formState.errors.budgetValue && (
                <Text color="$red10">
                  {formState.errors.budgetValue?.message}
                </Text>
              )}
            </View>
          )}
        />
        <Controller
          control={form.control}
          name="proposalValue"
          render={({ field, formState }) => (
            <View gap={8} width={"100%"}>
              <Text
                fontWeight={"bold"}
                fontSize={16}
                color={formState.errors.proposalValue ? "$red10" : "$black"}>
                Valor da proposta
              </Text>
              <Input
                borderBlockColor={"$gray10"}
                placeholder="Proposta"
                keyboardType="numeric"
                onBlur={field.onBlur}
                onChangeText={(t) => field.onChange(maskCurrency(t))}
                value={field.value?.toString()}
              />
              {formState.errors.proposalValue && (
                <Text color="$red10">
                  {formState.errors.proposalValue?.message}
                </Text>
              )}
            </View>
          )}
        />
        <Button
          onPress={handleSubmit}
          backgroundColor="black"
          color={"white"}
          fontSize={18}
          fontWeight="bold"
          width={"100%"}
          justifyContent="center"
          alignItems="center">
          Calcular
        </Button>
      </View>
    </View>
  )
}
