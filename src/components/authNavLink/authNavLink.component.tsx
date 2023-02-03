import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/router";
import styles from "./authNavLink.module.css"
interface IAuthNavLinkProps {
  location: string;
  alt: string;
  image: string;
}

export const AuthNavLink = ({ location, alt, image }: IAuthNavLinkProps) => {
    const router = useRouter()
  return (
    <Link href={location}>
      <Image
        width="20"
        height="10"
        alt={alt}
        src={image}
        className={`h-4 w-4 lg:w-6 lg:h-6  text-grayish-blue ${styles.navLink ? styles.navLink :''} ${router.pathname === location ? 'brightness-200 grayscale':''}`}
      />
    </Link>
  );
};
