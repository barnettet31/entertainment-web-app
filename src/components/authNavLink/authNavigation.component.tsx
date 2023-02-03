import uuid from "react-uuid";
import { AuthNavLink } from "./authNavLink.component";
const navLinkContent = [
  { location: "/dashboard", alt: "Home", image: "/icon-nav-home.svg" },
  {
    location: "/dashboard/movies",
    alt: "Movies",
    image: "/icon-nav-movies.svg",
  },
  {
    location: "/dashboard/shows",
    alt: "Series",
    image: "/icon-nav-tv-series.svg",
  },
  {
    location: "/dashboard/bookmarks",
    alt: "Bookmarks",
    image: "/icon-nav-bookmark.svg",
  },
  {
    location: "/dashboard/reviewed",
    alt: "Favorites",
    image: "/icon-nav-favorite.svg",
  },
];

export const AuthNavigation = () => (
  <nav className="flex justify-center gap-6 lg:flex-col lg:gap-10">
    {navLinkContent.map(({ location, alt, image }) => (
      <AuthNavLink key={uuid()} location={location} alt={alt} image={image} />
    ))}
  </nav>
);
