import { z } from "zod"

export const engineerFormSchema = z.object({
  budgetValue: z.coerce
    .string({
      required_error: "O valor do orçamento é obrigatório",
    })
    .transform((v) => v.replace(/\./g, "").replace(",", "."))
    .refine(
      (v) => {
        if (+v <= 0) return false
        return true
      },
      {
        message: "O valor do orçamento deve ser maior que zero",
      }
    ),
  proposalValue: z.coerce
    .string({
      required_error: "O valor da proposta é obrigatório",
    })
    .transform((v) => v.replace(/\./g, "").replace(",", "."))
    .refine(
      (v) => {
        if (+v <= 0) return false
        return true
      },
      {
        message: "O valor da proposta deve ser maior que zero",
      }
    ),
})

export type EngineerFormSchema = z.infer<typeof engineerFormSchema>
