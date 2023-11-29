import { Routes, Route, Link } from "react-router-dom";
import QuizPage from "./quiz-page/quiz-page";
import { Button } from "../components/ui/button";

function Home() {
  return (
    <section className="min-h-[100dvh] bg-main flex flex-col items-center justify-center gap-2 font-[poppins] select-none text-[#0D1321]">
      <p className="text-[calc(1rem+0.75vw)] underline font-semibold">Rules</p>
      <ul className="text-[calc(1rem+0.5vw)] mb-4 px-4 space-y-1 list-disc">
        <li>You will have only 10 seconds per each question.</li>
        <li>Once you select an answer, it can't be undone.</li>
        <li>You can't select any option once time goes off.</li>
        <li>You can't exit from Quiz while you're playing.</li>
        <li>You get points on the basis of correct answers.</li>
      </ul>
      <Button
        asChild
        className="bg-sub text-[calc(1.5rem+1vw)] font-semibold tracking-wide uppercase hover:text-white p-6"
      >
        <Link to="/quiz-page">Start Quiz</Link>
      </Button>
    </section>
  );
}

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/quiz-page" element={<QuizPage />} />
      </Routes>
    </>
  );
}

export default App;
