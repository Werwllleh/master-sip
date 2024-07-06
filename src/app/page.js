import SwiperMain from "@/components/swiper-main";
import SectionAchievements from "@/components/sections/section-achievements";
import SectionCatalog from "@/components/sections/section-catalog";

const Home = () => {
  return (
    <div className="page-main">
      <section className="section-swiper-main">
        <SwiperMain/>
      </section>
      <SectionAchievements />
      <SectionCatalog />
    </div>
  );
};

export default Home;
