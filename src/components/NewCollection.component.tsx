import Carusel from "./Carusel";

const NewCollection = () => {
  return (
    <div className="mt-13 gap-8 flex flex-col lg:flex-row w-full">
      <div className="flex flex-col gap-2.5 ">
        <h1 className="text-5xl sm:text-base lg:text-6xl font-bold">
          NEW <br /> COLLECTION
        </h1>
        <p>
          summer <br />
          2026
        </p>
      </div>
      <Carusel />
    </div>
  );
};

export default NewCollection;
