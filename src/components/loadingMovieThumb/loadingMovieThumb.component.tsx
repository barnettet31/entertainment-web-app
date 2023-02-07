export const LoadingMovieThumb = ()=>{
    return (
      <div className="flex flex-col gap-2">
        <div className="relative flex flex-col gap-2 ">
          <div className="h-40 w-full animate-pulse rounded bg-grayish-blue shadow"></div>
          <div className="shadowjustify-start flex h-3 w-30 animate-pulse gap-2 bg-grayish-blue text-sm font-light opacity-75"></div>
          <div className="flex items-center justify-between">
            <div className="flex h-3 w-40 animate-pulse items-center gap-1 bg-grayish-blue shadow"></div>
          </div>
        </div>
      </div>
    );
}