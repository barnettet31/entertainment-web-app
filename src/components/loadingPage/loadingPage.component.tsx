export const LoadingPage = () => {
  return (
    <div className="grid h-screen w-screen place-items-center">
      <div className="flex flex-col gap-4">
        <div className="h-32 w-32 animate-spin rounded-full border-8 border-red border-r-transparent"></div>
        <h1 className="text-center text-4xl font-bold text-red">Loading...</h1>
      </div>
    </div>
  );
};
