import DodoLogoFooter from "../../../assets/DodoLogoFooter";
import { FOOTERLEGAL } from "../../../types/footer/footer";
import Odnoklass from "../../../assets/Odnoklass";
import Youtube from "../../../assets/Youtube";
import Vk from "../../../assets/Vk";

export default function Socials() {
  return (
    <div className="mt-8 flex  items-center justify-between">
      <div className="flex gap-4">
        <div className="flex gap-4 items-center">
          <i className="opacity-50">
            <DodoLogoFooter />
          </i>
          <span className="text-gray-500 text-lg ">© 2025</span>
        </div>
        <div className="flex items-center">
          <ul className="flex gap-4">
            {FOOTERLEGAL.map((legal, index) => {
              return (
                <li className="text-lg text-gray-500" key={index}>
                  <a className="cursor-pointer" href="/">
                    {legal}
                  </a>
                </li>
              );
            })}
          </ul>
        </div>
      </div>

      <div className="flex items-center gap-2 hover:cursor-pointer">
        <a className="p-2 bg-gray-600 rounded-md opacity-75" href="/">
          <Odnoklass />
        </a>
        <a className="p-2 bg-gray-600 rounded-md opacity-75" href="/">
          <Vk />
        </a>
        <a
          className="p-2 bg-gray-600 rounded-md opacity-75"
          href="/youtube.com"
        >
          <Youtube />
        </a>
      </div>
    </div>
  );
}
