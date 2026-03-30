import { getData } from "@/lib/getData";
import PageWithAside from "@/components/UI/pageWithAside/PageWithAside";
import MainSection from "@/components/UI/mainSection/MainSection";
import DynamicZone from "@/components/base/dynamicZone/DynamicZone";

export default async function ServicesPage({ params }) {
  const { services } = await params;

  const requestData = await getData("/uslugis", {
    filters: {
      url: services,
    },
    populate: {
      coverImg: true,
      content: {
        on: {
          "dynamic-items.image": {
            populate: {
              image: true,
            },
          },
          "dynamic-items.content-page": {
            populate: "*",
          },
        },
      },
    },
  });

  console.log(requestData.content);
  const data = requestData?.data[0];

  return (
    <>
      <MainSection
        alt={data.pageTitle}
        src={data.coverImg.url}
        title={data.pageTitle}
      />
      <PageWithAside>
        <DynamicZone blocks={data.content} />
      </PageWithAside>
    </>
  );
}
