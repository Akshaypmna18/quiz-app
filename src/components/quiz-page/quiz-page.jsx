import { Progress } from "../ui/progress";
import { useEffect, useMemo } from "react";
import ResultPage from "../result-page";
import Loader from "./loader";
import { useQuiz } from "../../store";

export default function QuizPage() {
  let shuffledOptions;

  const {
    updateScore,
    round,
    qNum,
    updateQNum,
    countdown,
    setCountdown,
    reset,
    questions,
    fetchQuestions,
  } = useQuiz((state) => state);

  useEffect(() => {
    fetchQuestions();
    reset();
  }, [round]);

  // countdown timer
  useEffect(() => {
    if (questions.length > 0) {
      const interval = setInterval(() => {
        setCountdown(countdown - 1);
      }, 1000);
      if (countdown === 0) {
        clearInterval(interval);
        setCountdown(10);
        updateQNum();
      }
      return () => clearInterval(interval);
    }
  }, [countdown, qNum, questions]);

  // mutliple choices
  shuffledOptions = useMemo(() => {
    if (qNum < questions.length)
      return [
        ...questions[qNum].incorrect_answers,
        questions[qNum].correct_answer,
      ].sort(() => Math.random() - 0.5);
  }, [questions, qNum]);
  // handleClick on multiple choices
  const handleOptionClick = (answer) => {
    updateQNum();
    setCountdown(10);
    if (answer === questions[qNum].correct_answer) updateScore();
  };

  if (questions.length === 0) {
    return <Loader />; // loader until api request is successful
  } else {
    if (qNum < questions.length) {
      return (
        <main className="min-h-[100dvh] absolute inset-0  grid place-items-center select-none font-[poppins]">
          <section className="w-[90%] lg:w-[calc(50rem+1vw)] text-[calc(1.25rem+1vw)] text-[#0D1321] py-8">
            <header className="flex justify-between text-center mb-8">
              <div className="space-y-2">
                <p>Questions {qNum + 1}/5</p>
                <Progress className="bg-[#f6f6f6]" value={(qNum + 1) * 20} />
              </div>
              <div>
                <p>Time</p>
                <p className="text-[calc(2rem+1vw)] font-bold text-sub">
                  {countdown}s
                </p>
              </div>
            </header>
            <main>
              <p
                className="text-[calc(1.75rem+1vw)] font-bold"
                dangerouslySetInnerHTML={{ __html: questions[qNum].question }}
              />
              <div className="space-y-2 mt-4">
                {shuffledOptions.map((option, pos) => {
                  return (
                    <p
                      onClick={() => handleOptionClick(option)}
                      key={pos}
                      className="bg-white hover:font-semibold hover:bg-[#f6f6f6] cursor-pointer text-[calc(1.5rem+1vw)]"
                    >
                      <span className="text-white bg-sub capitalize w-[min(15%,3.5rem)] inline-flex items-center justify-center mr-2">
                        {pos + 1}
                      </span>
                      <span dangerouslySetInnerHTML={{ __html: option }} />
                    </p>
                  );
                })}
              </div>
            </main>
          </section>
        </main>
      );
    } else return <ResultPage />;
  }
}
