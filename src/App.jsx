import { Routes, Route } from "react-router-dom";
import QuizPage from "./Pages/QuizPage";
import Home from "./Pages/Home";
import ErrorPage from "./pages/NotFound";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/quiz-page" element={<QuizPage />} />
      <Route path="/*" element={<ErrorPage />} />
    </Routes>
  );
}

export default App;
