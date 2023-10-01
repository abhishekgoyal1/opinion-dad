import Image from "next/image";
import logoImage from "../../../public/images/logo-hd.png";
import { BsDownload, BsChevronBarExpand } from "react-icons/bs";
import { useState } from "react";

export default function LandingPage() {
  return (
    <div className="flex-grow flex flex-col items-center gap-4">
      <div className="flex-none h-1/4"></div>
      <div className="image">
        <Image src={logoImage} width={100} height={100} priority />
      </div>
      <div className="font-normal text-2xl">Welcome to Opinion Dad!</div>
      <div className="font-normal text-lg text-center flex flex-col items-center gap-4">
        <div className="w-3/4">
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
      <AboutSection />
    </div>
  );
}

function AboutSection() {
  const [textVisible, setTextVisible] = useState(false);

  const onClick = () => {
    setTextVisible(!textVisible);
  };

  const sectionTitle = "About";
  const sectionText = `In our day to day life during making final decision regarding 
    some important activities, in most of the cases, we feel to
    take opinions from our relatives, friends and others. In
    modern busy life, we don't know who is free to give his
    opinion and it is also difficult to contact many persons for
    their opinions. The prime objective of Opiniondad App is to
    provide a simple and easy to use tool for users to get opinions
    of specific group members consisting of relatives, friends or
    other App users as per requirement.
    
    The historical data of the app may also help the users to know
    options about specific subject of specific category. This app
    shall not be used for any kind of voting about questions
    related to any personality or questions involving any kind of
    politics, cast or religion. The questions related to any such
    kind shall be deleted. The choices given by the users shall be
    only opinion, one should apply his own mind and consult
    subject specific experts before taking final decision.
    
    Our mission is to make a strong group of knowledgeable and
    sincere persons active on this site to help the society with
    their valuable opinions. The future versions of the App shall
    be modified to take opinions from subject experts, the
    persons having experience in specific field etc.`;

  return (
    <div className="flex flex-col items-center justify-center text-center gap-2 mt-4 w-full">
      <button
        onClick={onClick}
        className="text-lg flex flex-row items-center gap-2 text-white bg-blue-500 px-2 py-1 rounded-lg"
      >
        {sectionTitle} <BsChevronBarExpand />
      </button>
      <div className="w-4/5 md:w-3/4 overflow-auto h-48 md:h-32">{`${
        !textVisible ? "" : sectionText
      }`}</div>
    </div>
  );
}
