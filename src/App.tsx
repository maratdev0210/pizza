import RegionModal from "./widgets/RegionModal/RegionModal";
import Promo from "./widgets/Promo/Promo";
import Header from "./widgets/Header/Header";
import Stories from "./widgets/Stories/Stories";
import CookiesMessage from "./widgets/CookiesMessage/CookiesMessage";

function App() {
  return (
    <>
      <Promo />
      <Header />
      <Stories />
      <RegionModal />
      <CookiesMessage />
    </>
  );
}

export default App;
