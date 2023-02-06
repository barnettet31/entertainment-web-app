import type { Movie } from "@prisma/client";
import { MovieThumb } from "../components/movieThumb/movieThumb.component";
import uuid from "react-uuid";

interface IContentListProps{
    data:Movie[]|undefined;
    title:string;
}
export const ContentList = ({data, title}:IContentListProps)=>{
    return (
      <div className="mx-auto flex max-w-sm flex-col items-center gap-6 md:max-w-3xl lg:mx-0 lg:max-w-7xl lg:items-start">
        <h1 className="self-start text-3xl font-light">{title}</h1>
        <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4">
          {data?.map(({ title, year, thumbnails, rating, category, id }) => (
            <MovieThumb
              key={uuid()}
              title={title}
              year={year}
              thumbnails={thumbnails}
              category={category}
              id={id}
              rating={rating}
            />
          ))}
        </div>
      </div>
    );
}