import { Routes, Route } from "react-router-dom";
import Quiz from "./pages/Quiz";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/quiz-page" element={<Quiz />} />
      <Route path="/*" element={<NotFound />} />
    </Routes>
  );
}

export default App;
