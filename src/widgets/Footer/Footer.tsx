import Secret from "../../assets/Secret";
import FooterInfo from "./helpers/FooterInfo";
import FooterGeo from "./helpers/FooterGeo";
import Socials from "./helpers/Socials";

export default function Footer() {
  return (
    <div className="mt-20">
      <div className="w-full dodo-padding-left bg-orange-500">
        <div className="flex  h-16 items-center justify-between">
          <div className="flex gap-4 items-center">
            <Secret />
            <p className=" text-white font-semibold text-lg">
              Проверьте нашу кухню и получите додокоины — хватит на две пиццы
            </p>
          </div>
          <div>
            <button className="text-orange-500 cursor-pointer hover:transition hover:duration-200 hover:bg-white/80  w-48 bg-white/95 rounded-4xl px-2 py-2">
              Заполнить анкету
            </button>
          </div>
        </div>
      </div>
      <div className="dodo-padding-left bg-black/93 pb-4  h-auto w-full">
        <FooterInfo />
        <FooterGeo />
        <Socials />
        <div className="mt-8">
          <p className="text-xs text-gray-600">
            © 2025 ООО “Додо Франчайзинг”
          </p>
          <p className="text-xs text-gray-600">
            ОГРН 1131101001844, ИНН 1101140415
          </p>
          <p className="text-xs text-gray-600">
            167001, Республика Коми, г. Сыктывкар, Октябрьский проспект, д. 16
          </p>
        </div>
      </div>
    </div>
  );
}
