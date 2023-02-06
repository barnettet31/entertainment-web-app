import uuid from "react-uuid";
import { getAuthedLayout } from "../../../components/layouts/authedLayout/authedLayout";
import { api } from "../../../utils/api";
import type { NextPageWithLayout } from "../../_app";
import { MovieThumb } from "../../../components/movieThumb/movieThumb.component";
import { LoadingMovieThumb } from "../../../components/loadingMovieThumb/loadingMovieThumb.component";
import { ContentList } from "../../../contentList/contentList.component";
const Movies: NextPageWithLayout = () => {
    const { data } = api.movies.getMovies.useQuery();
    return (
      <ContentList title="Movies" data={data}/>);
};
Movies.getLayout = getAuthedLayout;
export default Movies;
