import Image from "next/image";
import { api } from "../../utils/api";
interface IBookMarkedImageProps{
    id:string;
}
export const BookMarkedImage = ({id}:IBookMarkedImageProps)=>{
    const {data:isBookMarked} = api.me.isBookMarked.useQuery({id})
    console.log(isBookMarked)
    return(
     <div className="absolute top-4 right-4 flex h-8 w-8 items-center justify-center rounded-full bg-black/75">
       <div className="relative">
         <Image
           className="z-10 h-3 w-3"
           src="/icon-bookmark-full.svg"
           width="12"
           height="14"
           alt=""
         />
       </div>
     </div>);
}