import { Routes, Route, Link } from "react-router-dom";
import { Button } from "../components/ui/button";
import QuizPage from "./quiz-page";

function Home() {
  return (
    <section className="min-h-[100dvh] bg-[#F1DEDE] grid place-items-center">
      <Link to="/quiz-page">
        <Button className="uppercase text-[calc(1rem+1vw)] font-semibold tracking-wide border">
          Start Quiz
        </Button>
      </Link>
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
