// components
import LandingPage from "../components/landing-page/landingPage";
import HeadFormat from "../layout/head-format";

export default function Home() {
  return (
    <div>
      <HeadFormat title="Opinion Dad" />

      <div className="flex flex-col h-screen w-screen">
        <LandingPage />
      </div>
    </div>
  );
}
