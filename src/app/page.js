import SwiperMain from "@/components/swiper-main";
import SectionAchievements from "@/components/sections/section-achievements";
import SectionCatalog from "@/components/sections/section-catalog";

const Home = () => {
  return (
    <div className={"page page-main"}>
      <section className="section-swiper-main">
        <SwiperMain/>
      </section>
      <SectionAchievements />
      <SectionCatalog />
      CONTENT
    </div>
  );
};

export default Home;
