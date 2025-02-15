import { create } from "zustand"
import { EngineerResultCalc } from "@interfaces/engineer-result-calc"

interface StateProps {
  results: EngineerResultCalc | null
}

interface ActionProps {
  setResults: ({
    budgetValue,
    proposalValue,
  }: {
    proposalValue: number
    budgetValue: number
  }) => void
  clearResults: () => void
}

const initialState: StateProps = {
  results: null,
}

export const useEngineerStore = create<StateProps & ActionProps>()((set) => ({
  ...initialState,
  setResults: ({ budgetValue, proposalValue }) => {
    const unfeasiblePercentage = 0.75
    const additionalGuaranteePercentage = 0.85
    const totalInsurancePercentage = 0.05

    return set(() => {
      const isUnfeasible = proposalValue < budgetValue * unfeasiblePercentage
      const needAdditionalGuarantee =
        proposalValue < budgetValue * additionalGuaranteePercentage
      const additionalGuarantee =
        budgetValue * additionalGuaranteePercentage - proposalValue
      const fivePercentProposalValue = proposalValue * totalInsurancePercentage
      const totalInsuranceValue = needAdditionalGuarantee
        ? additionalGuarantee + fivePercentProposalValue
        : fivePercentProposalValue

      return {
        results: {
          budgetValue,
          proposalValue,
          isUnfeasible,
          needAdditionalGuarantee,
          additionalGuarantee,
          fivePercentProposalValue,
          totalInsuranceValue,
        },
      }
    })
  },
  clearResults: () => set({ results: null }),
}))
