export const LoadingMoviePage = () => {
  return (
    <div className="flex flex-col gap-4 px-4">
      <div className="h-5 w-40 animate-pulse rounded bg-red"></div>
      <div className="flex flex-col items-start justify-start  gap-4 md:gap-6 lg:flex-row lg:gap-10">
        <div className="h-[150px] w-[300px] animate-pulse rounded-md bg-grayish-blue shadow"></div>
        <div className="flex flex-col gap-3">
          <div className="h-3 w-40 animate-pulse bg-grayish-blue"></div>
          <div className="h-3 w-40 animate-pulse bg-grayish-blue"></div>
          <div className="h-3 w-40 animate-pulse bg-grayish-blue"></div>
          <div className="h-3 w-40 animate-pulse bg-grayish-blue"></div>
        </div>
      </div>
      <div className="animated-pulse h-40 w-full rounded bg-grayish-blue shadow-lg"></div>
      <div className="animated-pulse h-40 w-full rounded bg-grayish-blue shadow-lg"></div>
      <div className="animated-pulse h-40 w-full rounded bg-grayish-blue shadow-lg"></div>
    </div>
  );
};
