import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <main className="min-h-[100dvh] bg-main flex flex-col items-center justify-center gap-2 font-[poppins] select-none text-[#0D1321]">
      <p className="text-[calc(1rem+0.75vw)] underline font-semibold">Rules</p>
      <ul className="text-[calc(1rem+0.5vw)] mb-4 ml-4 px-4 space-y-1 list-disc">
        <li>You will have only 10 seconds per each question.</li>
        <li>Once you select an answer, it can't be undone.</li>
        <li>You can't select any option once time goes off.</li>
        <li>You can't exit from Quiz while you're playing.</li>
        <li>You get points on the basis of correct answers.</li>
      </ul>
      <Button
        asChild
        className="bg-sub text-[calc(1rem+0.5vw)] font-semibold tracking-wide uppercase hover:text-white p-3"
      >
        <Link to="/quiz-page">Start Quiz</Link>
      </Button>
    </main>
  );
}
