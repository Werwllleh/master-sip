import { create } from 'zustand'

export const useQuizStore = create((set) => ({
  quizStep: 0,
  maxStep: 0,
  answers: [],
  updateMaxStep: (data) => set(() => ({ maxStep: data })),
  updateStepBack: () => set((state) => ({quizStep: state.quizStep > 0 ? state.quizStep - 1 : 0})),
  updateStepNext: () => set((state) => ({quizStep: state.quizStep < state.maxStep ? state.quizStep + 1 : state.maxStep})),
}))
