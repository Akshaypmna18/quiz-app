import { Progress } from "../components/ui/progress";
export default function QuizPage() {
  const options = [
    { si: "a", option: "html" },
    { si: "b", option: "css" },
    { si: "c", option: "js" },
    { si: "d", option: "react" },
  ];
  return (
    <section className="min-h-[100dvh] absolute inset-0 bg-main grid place-items-center select-none font-[poppins]">
      <div className="w-[90%] lg:w-[calc(50rem+1vw)] text-[calc(1rem+1vw)]">
        <div className="flex justify-between text-center mb-8">
          <div className="space-y-2">
            <p>Questions 1/5</p>
            <Progress className="bg-[#f6f6f6]" value={20} />
          </div>
          <div>
            <p>Time</p>
            <p className="text-[calc(1.75rem+1vw)] font-bold text-sub">10s</p>
          </div>
        </div>
        <div>
          <p className="text-[calc(1.75rem+1vw)] font-bold ">
            In web design, what does CSS stand for?
          </p>
          <div className="space-y-2 mt-4">
            {options.map((item, pos) => {
              return (
                <p
                  key={pos}
                  className="bg-white hover:font-semibold hover:bg-[#f6f6f6] cursor-pointer"
                >
                  <span className="text-white bg-sub capitalize w-[min(10%,3rem)] inline-flex items-center justify-center mr-2">
                    {item.si}
                  </span>
                  {item.option}
                </p>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
