import { useRouter } from "next/router";
import { getAuthedLayout } from "../../../components/layouts/authedLayout/authedLayout";
import type { NextPageWithLayout } from "../../_app";
const ContentPage: NextPageWithLayout = () => {
  const router = useRouter();
  const {contentId} = router.query;
  console.log(router.query.contentId)
  console.log(contentId)
  return <h1>{contentId}</h1>
};
ContentPage.getLayout = getAuthedLayout;
export default ContentPage;
