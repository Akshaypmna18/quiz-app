import { RotatingLines } from "react-loader-spinner";

function Loader() {
  const shuffledOptions = [
    "cascading style sheet",
    "cascading style sheet",
    "cascading style sheet",
    "cascading style sheet",
  ];
  return (
    <section className="h-[100svh] overflow-hidden relative grid place-items-center select-none font-[poppins]">
      <div className="w-[90%] lg:w-[calc(50rem+1vw)] text-[calc(1.25rem+1vw)] text-[#0D1321] py-8">
        <div className="absolute inset-0 min-h-[100dvh] w-screen backdrop-blur-lg grid place-items-center">
          <RotatingLines
            strokeColor="#815355"
            strokeWidth="5"
            animationDuration="0.75"
            width="80"
            visible={true}
          />
        </div>
        <div className="flex justify-between text-center mb-8">
          <div className="space-y-2">
            <p>Questions 1/5</p>
            <div className="w-[20rem] bg-[#f6f6f6] h-2"></div>
          </div>
          <div>
            <p>Time</p>
            <p className="text-[calc(2rem+1vw)] font-bold text-sub">10s</p>
          </div>
        </div>
        <div>
          <p className="text-[calc(1.75rem+1vw)] font-bold">
            In web development, what does CSS stand for? Do you know?
          </p>
          <div className="space-y-2 mt-4">
            {shuffledOptions.map((item, pos) => {
              return (
                <p
                  key={pos}
                  className="bg-white hover:font-semibold hover:bg-[#f6f6f6] cursor-pointer text-[calc(1.5rem+1vw)]"
                >
                  <span className="text-white bg-sub capitalize w-[min(15%,3.5rem)] inline-flex items-center justify-center mr-2">
                    {pos + 1}
                  </span>
                  {item}
                </p>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Loader;
