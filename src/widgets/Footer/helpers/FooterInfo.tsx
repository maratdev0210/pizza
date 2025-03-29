import { FOOTER, FOOTERSTYLE } from "../../../types/footer/footer";
import AppleLink from "../../../assets/AppleLink";
import GoogleLink from "../../../assets/GoogleLink";
import GalleryLink from "../../../assets/GalleryLink";

export default function FooterInfo() {
  return (
    <div className="pt-8 justify-between flex">
      <div className="flex gap-16">
        {FOOTER.map((info, row) => {
          return Object.keys(info).map((links) => {
            return (
              <div>
                <span className="text-white font-semibold text-lg">
                  {" "}
                  {links}
                </span>

                <ul className="text-gray-400">
                  {info[links].map((link, index) => {
                    return (
                      <li className={`${FOOTERSTYLE[row]} py-0.5`} key={index}>
                        {link}
                      </li>
                    );
                  })}
                </ul>
              </div>
            );
          });
        })}
      </div>
      <div className="cursor-pointer">
        <div className="flex gap-3">
          <AppleLink />
          <GoogleLink />
        </div>
        <div className="flex relative mt-3 justify-end">
          <div className="absolute -right-2  translate-x-0">
            <GalleryLink />
          </div>
        </div>
        <div className="flex justify-end mt-16">
          <a
            className="text-gray-400 hover:text-gray-100 font-semibold"
            href="mailto:feedback@dodopizza.com"
          >
            feedback@dodopizza.com
          </a>
        </div>
      </div>
    </div>
  );
}
