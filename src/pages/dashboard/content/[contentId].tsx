import { useRouter } from "next/router";
import { getAuthedLayout } from "../../../components/layouts/authedLayout/authedLayout";
import type { NextPageWithLayout } from "../../_app";
import { api } from "../../../utils/api";
import { ErrorPage } from "../../../components/errorPage/errorPage.component";
const ContentPage: NextPageWithLayout = () => {
  const router = useRouter();
  const {contentId} = router.query;
  if(!contentId || typeof contentId === 'object') return <ErrorPage/>
  const {data} = api.movies.getContentById.useQuery({id:contentId}, {
    enabled: contentId ? true:false 
  })
  return <h1>{JSON.stringify(data)}</h1>
};
ContentPage.getLayout = getAuthedLayout;
export default ContentPage;
