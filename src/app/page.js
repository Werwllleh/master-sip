import SwiperMain from "@/components/swiper-main";
import SectionAchievements from "@/components/sections/section-achievements";

const Home = () => {
  return (
    <div className={"page page-main"}>
      <section className="section-swiper-main">
        <SwiperMain/>
      </section>
      <SectionAchievements />
      CONTENT
    </div>
  );
};

export default Home;
