import Footer from "../component/Footer";
import HeaderApp from "../component/HeaderApp";
import Banner from "../component/Banner";

function AboutPage() {
  return (
    <div>
      <HeaderApp />
      <div className="banner">
        <Banner />
      </div>
      <Footer />
    </div>
  );
}

export default AboutPage;
