import { Controller, useForm } from "react-hook-form"
import { Button, Input, Text, View } from "tamagui"
import { zodResolver } from "@hookform/resolvers/zod"
import { engineerFormSchema, EngineerFormSchema } from "../schemas/engineer"
import { maskCurrency } from "../helpers/mask-currency"
import { withMask } from "use-mask-input"
import { CurrencyInput } from "react-currency-mask"

export default function EngineerForm() {
  const form = useForm<EngineerFormSchema>({
    resolver: zodResolver(engineerFormSchema),
    defaultValues: {
      budgetValue: "",
      proposalValue: "",
    },
  })

  console.log("8")

  const handleSubmit = form.handleSubmit((data) => {
    const budgetValue = +data.budgetValue
    const proposalValue = +data.proposalValue
    console.log({
      budgetValue,
      proposalValue,
    })
  })

  console.log(form.getValues("budgetValue"))

  return (
    <View padding={16} gap={32}>
      <Controller
        control={form.control}
        name="budgetValue"
        render={({ field, formState }) => (
          <View gap={8}>
            <Text fontWeight={"bold"} fontSize={16}>
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
          <View gap={8}>
            <Text fontWeight={"bold"} fontSize={16}>
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
        justifyContent="center"
        alignItems="center">
        Entrar
      </Button>
    </View>
  )
}
