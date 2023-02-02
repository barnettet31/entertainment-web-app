export const LoadingPage =()=>{
    return (
      <div className="grid h-screen w-screen place-items-center">
        <div className="border-red h-32 w-32 animate-spin rounded-full border-8 border-r-transparent"></div>
        <h1 className="text-red text-4xl font-bold text-center">Loading...</h1>
      </div>
    );
}