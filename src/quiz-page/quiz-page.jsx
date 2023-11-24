import { Progress } from "../../components/ui/progress";
import { useState, useEffect } from "react";
import ResultPage from "./result-page";
import Loader from "./loader";
// import axios from "axios";

export default function QuizPage() {
  const [data, setData] = useState([]); // api data
  const [round, setRound] = useState(0); // to change current set of questions
  const [countdown, setCountdown] = useState(10);
  let [num, setNum] = useState(0); // question number
  const [score, setScore] = useState(0);
  let options, shuffledOptions;

  // api fetching using fetch API
  useEffect(() => {
    fetch(
      "https://opentdb.com/api.php?amount=5&category=21&difficulty=easy&type=multiple"
    )
      .then((response) => {
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        return response.json();
      })
      .then((json) => setData(json.results))
      .catch((error) => console.error("Fetch error:", error));
    // Axios
    // const fetchData = async () => {
    //   const response = await axios.get(
    //     "https://opentdb.com/api.php?amount=5&category=21&difficulty=easy&type=multiple"
    //   );
    //   setData(response);
    // };
    // fetchData();
  }, [round]);

  // countdown timer
  useEffect(() => {
    if (data.length > 0) {
      const interval = setInterval(() => {
        setCountdown(countdown - 1);
      }, 1000);
      if (countdown === 0) {
        clearInterval(interval);
        setCountdown(10);
        setNum(num + 1);
      }
      return () => clearInterval(interval);
    }
  }, [countdown, num, data]);

  // mutliple choices
  if (num < data.length) {
    options = [...data[num].incorrect_answers, data[num].correct_answer];
    shuffledOptions = options.sort(() => Math.random() - 0.5);
  }
  // handleClick on multiple choices
  const handleAnswer = (answer) => {
    setNum(num + 1);
    setCountdown(10);
    if (answer === data[num].correct_answer) setScore(score + 1);
  };

  if (data.length === 0) {
    return <Loader />; // loader until api request is successful
  } else {
    if (num < data.length) {
      return (
        <section className="min-h-[100dvh] absolute inset-0  grid place-items-center select-none font-[poppins]">
          <div className="w-[90%] lg:w-[calc(50rem+1vw)] text-[calc(1.25rem+1vw)] text-[#0D1321] py-8">
            <div className="flex justify-between text-center mb-8">
              <div className="space-y-2">
                <p>Questions {num + 1}/5</p>
                <Progress className="bg-[#f6f6f6]" value={(num + 1) * 20} />
              </div>
              <div>
                <p>Time</p>
                <p className="text-[calc(2rem+1vw)] font-bold text-sub">
                  {countdown}s
                </p>
              </div>
            </div>
            <div>
              <p
                className="text-[calc(1.75rem+1vw)] font-bold"
                dangerouslySetInnerHTML={{ __html: data[num].question }}
              />
              <div className="space-y-2 mt-4">
                {shuffledOptions.map((item, pos) => {
                  return (
                    <p
                      onClick={() => handleAnswer(item)}
                      key={pos}
                      className="bg-white hover:font-semibold hover:bg-[#f6f6f6] cursor-pointer text-[calc(1.5rem+1vw)]"
                    >
                      <span className="text-white bg-sub capitalize w-[min(15%,3.5rem)] inline-flex items-center justify-center mr-2">
                        {pos + 1}
                      </span>
                      <span dangerouslySetInnerHTML={{ __html: item }} />
                    </p>
                  );
                })}
              </div>
            </div>
          </div>
        </section>
      );
    } else
      return (
        <ResultPage
          score={score}
          setNum={setNum}
          setScore={setScore}
          setCountdown={setCountdown}
          setData={setData}
          setRound={setRound}
          round={round}
        />
      );
  }
}
