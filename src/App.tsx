import RegionModal from "./widgets/RegionModal/RegionModal";
import Promo from "./widgets/Promo/Promo";
import Header from "./widgets/Header/Header";
import Stories from "./widgets/Stories/Stories";
import CookiesMessage from "./widgets/CookiesMessage/CookiesMessage";
import Pizza from "./widgets/Pizza/Pizza";
import MainContent from "./widgets/MainContent/MainContent";
import DeliveryInfo from "./widgets/DeliveryInfo/DeliveryInfo";
import Footer from "./widgets/Footer/Footer";

function App() {
  return (
    <>
      <Promo />
      <Header />
      <Stories />
      <Pizza />
      <MainContent />
      <DeliveryInfo />
      <Footer />
      <RegionModal />
      <CookiesMessage />
    </>
  );
}

export default App;
