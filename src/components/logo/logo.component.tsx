import Image from "next/image";
interface ILogoProps {
    classes:string;
  
}
export const Logo = ({classes}:ILogoProps)=>{
    return <Image src="/logo.svg" width="32" height="26" alt="" className={classes}/>
}