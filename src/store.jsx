import { create } from "zustand";
import axios from "axios";

const fetchQuestions = async (set) => {
  const response = await axios.get(
    "https://opentdb.com/api.php?amount=5&category=21&difficulty=easy&type=multiple"
  );
  set(() => ({ questions: response.data.results }));
};

const quiz = (set) => ({
  // fetch questions
  fetchQuestions: () => fetchQuestions(set),
  questions: [],
  // to change current set of questions
  round: 0,
  updateRoundAndQuestions: () => {
    set((state) => ({ round: state.round + 1 }));
    set(() => ({ questions: [] }));
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
