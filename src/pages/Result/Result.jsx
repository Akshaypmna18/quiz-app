import { useQuiz } from "../../store";
import { Button } from "../../components/ui/button";

function ResultPage() {
  const { updateRoundAndQuestions, reset, score } = useQuiz((state) => state);
  const handleButton = (type) => {
    reset();
    if (type == "reset") updateRoundAndQuestions();
  };

  return (
    <main className="min-h-[100svh] grid place-items-center select-none">
      <section>
        <p className="text-center text-[calc(1.75rem+1vw)] p-4">
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
              handleButton("restart");
            }}
            className="text-[calc(1rem+1vw)] p-[calc(1rem+0.5vw)] hover:bg-sub"
          >
            Restart
          </Button>
          <Button
            onClick={() => {
              handleButton("reset");
            }}
            variant="outline"
            className="bg-white text-[calc(1rem+1vw)] p-[calc(1rem+0.5vw)]"
          >
            Reset
          </Button>
        </div>
      </section>
    </main>
  );
}

export default ResultPage;
