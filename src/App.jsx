import { Routes, Route } from "react-router-dom";
import QuizPage from "./Pages/QuizPage";
import Home from "./Pages/Home";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/quiz-page" element={<QuizPage />} />
    </Routes>
  );
}

export default App;
