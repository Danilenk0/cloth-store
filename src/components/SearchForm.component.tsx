const SearchForm = () => {
  return (
    <div className="flex flex-col gap-3.5">
      <ul>
        <li className="text-sm sm:text-base md:text-lg xl:text-2xl">MEN</li>
        <li className="text-sm sm:text-base md:text-lg xl:text-2xl">WOMEN</li>
        <li className="text-sm sm:text-base md:text-lg xl:text-2xl">KIDS</li>
      </ul>
      <div className="flex items-center gap-3 rounded py-3 px-4 bg-[#D9D9D9] w-full sm:w-full md:w-[40%] border border-[#D9D9D9] focus-within:border-black">
        <button className="border-0">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="size-5"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
            />
          </svg>
        </button>
        <input
          className="text-[12px] outline-none w-full flex justify-end"
          type="text"
          placeholder="Search..."
        />
      </div>
    </div>
  );
};

export default SearchForm;
