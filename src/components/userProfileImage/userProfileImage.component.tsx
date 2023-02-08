import Image from "next/image"
export const UserProfileImage = ({image}:{image:string|undefined | null})=>{
    if(typeof image === 'undefined' || image === null) return <div className="h-10 w-10 rounded-full bg-grayish-blue"></div>;
           return   <Image
                width={40}
                height={40}
                className="h-10 w-10 rounded-full"
                src={image}
                alt=""
              />
}