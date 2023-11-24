import { Button } from "../../components/ui/button";

function ResultPage({
  score,
  setNum,
  setScore,
  setCountdown,
  setData,
  setRound,
  round,
}) {
  return (
    <section className="min-h-[100dvh] grid place-items-center select-none">
      <div>
        <p className="text-center text-[calc(2rem+1vw)]">
          Your scored
          <span className="text-sub font-semibold">
            {" "}
            {score} {score < 2 ? "point " : "points "}
          </span>
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
              setCountdown(10);
            }}
            className="text-[calc(1rem+1vw)] p-[calc(1rem+0.5vw)] bg-sub"
          >
            Restart
          </Button>
          <Button
            onClick={() => {
              setNum(0);
              setCountdown(10);
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

export default ResultPage;
