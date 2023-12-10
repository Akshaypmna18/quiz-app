import { create } from "zustand";

const quiz = (set) => ({
  // to change current set of questions
  round: 0,
  updateRound: () => {
    set((state) => ({ round: state.round + 1 }));
  },
  //   score
  score: 0,
  updateScore: () => {
    set((state) => ({ score: state.score + 1 }));
  },
  //   question number
  qNum: 0,
  updateQNum: () => {
    set((state) => ({ qNum: state.qNum + 1 }));
  },
  //   countdown
  countdown: 0,
  setCountdown: (value) => {
    set(() => ({ countdown: value }));
  },
  //   reset score,num,countdown
  reset: () => {
    set(() => ({ score: 0 }));
    set(() => ({ qNum: 0 }));
    set(() => ({ countdown: 10 }));
  },
});

export const useQuiz = create(quiz);
