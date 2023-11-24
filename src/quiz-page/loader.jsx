import { RotatingLines } from "react-loader-spinner";

function Loader() {
  return (
    <section className="min-h-[100dvh] grid place-items-center">
      <RotatingLines
        strokeColor="#815355"
        strokeWidth="5"
        animationDuration="0.75"
        width="80"
        visible={true}
      />
    </section>
  );
}

export default Loader;
