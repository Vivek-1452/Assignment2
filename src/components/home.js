import React from "react";
import NavBar from "./navbar";
import Count from "./count";
import Products from "./products";
import Blogs from "./blogs";
import Indus from "./indus";
import Newsletter from "./newsletter";
import Footermob from "./footermob";
import GetStarted from "./getStarted";
import MainPoster from "./mainPoster";
import HowItWorks from "./howItWorks";
import Video from "./video";
import CopyMob from "./copymobile";
import TrustedBy from "./TrustedBy";

function Home() {
  // const [display, setdisplay] = useState(false);

  // useEffect(() => {
  //   if (window.innerWidth < 769) {
  //     setdisplay(true);
  //   }
  // }, [display]);

  return (
    <>
      {/* {display ? <FeatMob /> : <UpcomEve />} */}
      <NavBar />
      <MainPoster />
      <Count />
      <Products />
      <TrustedBy />
      <HowItWorks />
      <Indus />
      <GetStarted />
      <Video />
      <Blogs />
      <Newsletter />
      <Footermob />
      <CopyMob />
    </>
  );
}

export default Home;
