const SearchError = ({
  errorMessage,
  onBack,
}: {
  errorMessage: string;
  onBack: () => void;
}) => {
  return (
    <div className="mt-10 w-96">
      <div
        className="bg-red-100 border-t-4 border-red-400 rounded-b text-red-700 px-4 py-3 shadow-md"
        role="alert"
      >
        <div className="flex flex-col">
          <div className="flex">
            <svg
              className="fill-current h-6 w-6 text-red-500 mr-4"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
            >
              <path d="M2.93 17.07A10 10 0 1 1 17.07 2.93 10 10 0 0 1 2.93 17.07zm12.73-1.41A8 8 0 1 0 4.34 4.34a8 8 0 0 0 11.32 11.32zM9 11V9h2v6H9v-4zm0-6h2v2H9V5z" />
            </svg>
            <p className="font-bold">Error!</p>
          </div>
          <p className="text-sm mt-3">Uh-oh. Something went wrong:</p>

          <p className="text-sm mt-3 font-bold">{errorMessage}</p>
        </div>
      </div>
      <div className="flex justify-center">
        <button
          onClick={onBack}
          className="mt-14 text-stone-800 hover:text-stone-500 font-semibold underline"
        >
          Back to Search
        </button>
      </div>
    </div>
  );
};

export default SearchError;
