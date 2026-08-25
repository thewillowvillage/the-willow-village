import { createBrowserRouter } from "react-router";
import { Root } from "./components/Root";
import { Home } from "./pages/Home";
import { AboutUs } from "./pages/AboutUs";
import { Programs } from "./pages/Programs";
import { TherapySupport } from "./pages/TherapySupport";
import { Admissions } from "./pages/Admissions";
import { Gallery } from "./pages/Gallery";
import { Contact } from "./pages/Contact";
import { FutureGoals } from "./pages/FutureGoals";
import { NotFound } from "./pages/NotFound";
import { OurStory, OurTeam, OurMission, CommunityService } from "./pages/AboutPages";
import { ApplyNow, Requirements, FeesAndScholarships, ExpansionPlans, UpcomingPrograms } from "./pages/SubPages";
import { OurPartners } from "./pages/OurPartners";
import { Mou } from "./pages/Mou";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      { index: true, element: <Home /> },
      { path: "about", element: <AboutUs /> },
      { path: "about/our-story", element: <OurStory /> },
      { path: "about/our-team", element: <OurTeam /> },
      { path: "about/our-mission", element: <OurMission /> },
      { path: "about/community-service", element: <CommunityService /> },
      { path: "programs", element: <Programs /> },
      { path: "therapy", element: <TherapySupport /> },
      { path: "admissions", element: <Admissions /> },
      { path: "admissions/apply", element: <ApplyNow /> },
      { path: "admissions/requirements", element: <Requirements /> },
      { path: "admissions/fees", element: <FeesAndScholarships /> },
      { path: "gallery", element: <Gallery /> },
      { path: "contact", element: <Contact /> },
      { path: "future-goals", element: <FutureGoals /> },
      { path: "future-goals/expansion", element: <ExpansionPlans /> },
      { path: "future-goals/programs", element: <UpcomingPrograms /> },
      { path: "our-partners", element: <OurPartners /> },
      { path: "mou", element: <Mou /> },
      { path: "*", element: <NotFound /> },
    ],
  },
]);
