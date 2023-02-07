import Image from "next/image";
import { api } from "../../utils/api";
import {  useState } from "react";
interface IBookMarkedImageProps {
  id: string;
  title: string;
}
export const BookMarkedImage = ({ id, title }: IBookMarkedImageProps) => {
  const utils = api.useContext()
  const { data } = api.me.isBookMarked.useQuery({ id });
  const [isBookMarked, setIsBookMarked] = useState<boolean | undefined>(data);

  const { mutate: deleteBookMark } = api.me.removeBookMark.useMutation({
    onError: () => setIsBookMarked(!isBookMarked),
    onSettled: async () => {
      await utils.me.isBookMarked.invalidate();
      await utils.me.getBookMarkedMovies.invalidate();
    },
  });
  const { mutate: setBookMark } = api.me.setNewBookMark.useMutation({
    onError: () => setIsBookMarked(!isBookMarked),
    onSettled:async ()=>{
      await utils.me.isBookMarked.invalidate()
      await utils.me.getBookMarkedMovies.invalidate()
    }
  });
  const handleBookMarkClick = () => {
      isBookMarked
        ? deleteBookMark({ movieId: id })
        : setBookMark({ movieId: id, title: title });
        setIsBookMarked(!isBookMarked);
    };


  return (
    <div className="absolute z-10 top-4 right-4 flex h-8 w-8 items-center justify-center rounded-full bg-black/75">
      <div onClick={handleBookMarkClick} className="relative cursor-pointer">
        {isBookMarked ? (
          <Image
            className="z-10 h-3 w-3"
            src="/icon-bookmark-full.svg"
            width="12"
            height="14"
            alt=""
          />
        ) : (
          <Image
            className="z-10 h-3 w-3"
            src="/icon-bookmark-empty.svg"
            width="12"
            height="14"
            alt=""
          />
        )}
      </div>
    </div>
  );
};
