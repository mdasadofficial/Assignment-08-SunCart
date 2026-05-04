const Loading = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-linear-to-r from-orange-50 to-yellow-50">
      {/* Spinner */}
      <span className="loading loading-ring loading-lg text-orange-500"></span>

      {/* Text */}
      <h2 className="mt-4 text-lg font-semibold text-gray-700 animate-pulse">
        Loading ...
      </h2>
    </div>
  );
};

export default Loading;
