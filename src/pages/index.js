import Layout from "../Components/Layout";
import Hero from "@/Components/Home/Hero";
import Work from "@/Components/Home/Work";
import Expert from "@/Components/Home/Expert"
import ClientFeedBack from "@/Components/Home/ClientFeedBack";
import TopSell from "@/Components/Home/TopSell";
import ProtectSkin from "@/Components/Home/ProtectSkin";
import NewsLetter from "@/Components/Home/NewsLetter";
import SkinCare from "@/Components/Home/SkinCare";
import WhyChoose from "@/Components/Home/WhyChoose";
import PeopleSay from "@/Components/Home/PeopleSay";
import Percent from "@/Components/Home/Percent";
import Loved from "@/Components/Home/Loved";


export default function Home() {
  return (
    <div className="">
      <Layout>
        <div className="">
          <Hero />
          <Work />
          <Expert text="New Arrivals"/>
          <ClientFeedBack />
          <TopSell/>
          <ProtectSkin/>
          <WhyChoose/>
          <PeopleSay/>
          <Percent/>
          <Loved/>
          <SkinCare/>
          <Expert text="Explore Gallery" ml={true}/>
          <NewsLetter/>
        </div>
      </Layout>
    </div>
  );
}

