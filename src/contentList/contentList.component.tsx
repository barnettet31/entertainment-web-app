import type { Movie } from "@prisma/client";
import { MovieThumb } from "../components/movieThumb/movieThumb.component";
import uuid from "react-uuid";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import { useRouter } from "next/router";
interface IContentListProps {
  data: Movie[] | undefined;
  title: string;
}
export const ContentList = ({ data, title }: IContentListProps) => {
const router = useRouter();
console.log(router)
  const [filterString, setFilterString] = useState<string>("");
  const [filteredData, setFilteredData] = useState<Movie[]|null>();
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFilterString(e.target.value);
  };
  useEffect(() => {
    const setMyFilteredContent = setTimeout(() => {
      if (!data) return;
      if(filterString.length ===0) return setFilteredData(null);
      setFilteredData(
        data.filter((el) =>
          el.title.toLowerCase().includes(filterString.toLowerCase())
        )
      );
    }, 2000);
    return () => clearTimeout(setMyFilteredContent);
  }, [filterString]);
  const _returnPlaceHolderString = ()=>{
    switch(router.pathname){
        case '/dashboard':
            return 'movies or TV series'
            break;
        case '/dashboard/movies':
            return 'Movies'
        case '/dashboard/shows':
            return 'TV series'
        case '/dashboard/bookmarks':
            return 'for movies or TV series in your bookmarks'
        default:
            return 'content'
    }
  }
  return (
    <div className="mx-auto flex max-w-sm flex-col items-center gap-6 md:max-w-3xl lg:mx-0 lg:max-w-7xl lg:items-start">
      <div className="flex w-full items-center gap-6">
        <Image src="/icon-search.svg" height="24" width="24" alt="" />
        <input
          onChange={handleChange}
          placeholder={`Search for ${_returnPlaceHolderString()}`}
          className="w-full bg-transparent py-3 caret-red outline-none focus:border-b focus:border-b-grayish-blue"
        />
      </div>
      <h1 className="self-start text-3xl font-light">{filteredData? `Found ${filteredData.length} results for '${filterString}'`:title}</h1>
      <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4">
        {filteredData
          ? filteredData.map(
              ({ title, year, thumbnails, rating, category, id }) => {
                return (
                  <MovieThumb
                    key={uuid()}
                    title={title}
                    year={year}
                    thumbnails={thumbnails}
                    category={category}
                    id={id}
                    rating={rating}
                  />
                );
              }
            )
          : data?.map(({ title, year, thumbnails, rating, category, id }) => (
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
};
