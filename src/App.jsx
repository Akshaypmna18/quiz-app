import { Routes, Route, Link } from "react-router-dom";
import QuizPage from "./quiz-page";

function Home() {
  return (
    <section className="min-h-[100dvh] bg-[#F1DEDE] grid place-items-center">
      <Link
        to="/quiz-page"
        className="uppercase text-[calc(1rem+1vw)] font-semibold tracking-wide border text-[#5D576B] underline hover:text-black"
      >
        Start Quiz
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
