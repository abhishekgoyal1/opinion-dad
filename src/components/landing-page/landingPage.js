import Image from "next/image";
import logoImage from "../../../public/images/logo-hd.png";
import { BsDownload } from "react-icons/bs";

export default function LandingPage() {
  return (
    <div className="pt-16 flex-grow flex flex-col items-center gap-4">
      <div className="flex-none h-1/4"></div>
      <div className="image">
        <Image src={logoImage} width={100} height={100} priority />
      </div>
      <div className="font-normal text-2xl">Welcome to Opinion Dad!</div>
      <div className="font-normal text-lg text-center flex flex-col gap-4">
        <div>
          Please click the button here to download your APK and get started
        </div>
        <div className="w-full flex items-center justify-center">
          <a
            href="/apk/opiniondad.apk"
            download="opiniondad.apk"
            className="px-4 py-1 bg-blue-500 text-white rounded-xl flex flex-row gap-2 items-center"
          >
            Download here
            <BsDownload color="white"></BsDownload>
          </a>
        </div>
      </div>
    </div>
  );
}
