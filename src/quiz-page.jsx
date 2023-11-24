import { Progress } from "../components/ui/progress";
import { Button } from "../components/ui/button";
import { useState, useEffect } from "react";
import { RotatingLines } from "react-loader-spinner";
// import axios from "axios";

export default function QuizPage() {
  const [data, setData] = useState([]);
  const [round, setRound] = useState(0);
  const [countdown, setCountdown] = useState(10);
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

  useEffect(() => {
    const interval = setInterval(() => {
      setCountdown(countdown - 1);
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  const [score, setScore] = useState(0);
  let [num, setNum] = useState(0);
  let options, shuffledOptions;
  if (num < data.length) {
    options = [...data[num].incorrect_answers, data[num].correct_answer];
    shuffledOptions = options.sort(() => Math.random() - 0.5);
  }
  const handleAnswer = (answer) => {
    if (answer === data[num].correct_answer) setScore(score + 1);
  };

  if (data.length === 0) {
    return (
      <div className="min-h-[100dvh]  grid place-items-center">
        <RotatingLines
          strokeColor="#815355"
          strokeWidth="5"
          animationDuration="0.75"
          width="80"
          visible={true}
        />
      </div>
    );
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
                      onClickCapture={() => handleAnswer(item)}
                      key={pos}
                      className="bg-white hover:font-semibold hover:bg-[#f6f6f6] cursor-pointer text-[calc(1.5rem+1vw)]"
                      onClick={() => {
                        setNum(num + 1);
                      }}
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
    } else {
      return (
        <section className="min-h-[100dvh] grid place-items-center select-none">
          <div>
            <p className="text-center text-[calc(2rem+1vw)]">
              Your scored
              <span className="text-sub font-semibold"> {score} points </span>
              {score >= 4
                ? "Congrats🎉"
                : score === 3
                ? "Good game👍"
                : "Better luck next time🙂"}
            </p>
            <div className="flex gap-4 justify-center mt-4">
              <Button
                onClick={() => {
                  setNum(0);
                  setScore(0);
                }}
                className="text-[calc(1rem+1vw)] p-[calc(1rem+0.5vw)]"
              >
                Restart
              </Button>
              <Button
                onClick={() => {
                  setNum(0);
                  setScore(0);
                  setData([]);
                  setRound(round + 1);
                }}
                variant="outline"
                className="bg-white text-[calc(1rem+1vw)] p-[calc(1rem+0.5vw)]"
              >
                Reset
              </Button>
            </div>
          </div>
        </section>
      );
    }
  }
}
