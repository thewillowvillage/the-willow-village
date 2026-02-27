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
import { OurStory, OurTeam, OurMission } from "./pages/AboutPages";
import { ApplyNow, Requirements, FeesAndScholarships, ExpansionPlans, UpcomingPrograms } from "./pages/SubPages";
import { OurPartners } from "./pages/OurPartners";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    children: [
      { index: true, Component: Home },
      { path: "about", Component: AboutUs },
      { path: "programs", Component: Programs },
      { path: "therapy", Component: TherapySupport },
      { path: "admissions", Component: Admissions },
      { path: "gallery", Component: Gallery },
      { path: "contact", Component: Contact },
      { path: "future-goals", Component: FutureGoals },
      { path: "*", Component: NotFound },
      { path: "our-partners", element: <OurPartners /> },
      { path: "about/our-story", element: <OurStory /> }, 
      { path: "about/our-team", element: <OurTeam /> },
      { path: "about/our-mission", element: <OurMission /> },
      { path: "admissions/apply", element: <ApplyNow /> },
      { path: "admissions/requirements", element: <Requirements /> },
      { path: "admissions/fees", element: <FeesAndScholarships /> },
      { path: "future-goals/expansion", element: <ExpansionPlans /> },
      { path: "future-goals/programs", element: <UpcomingPrograms /> },
     ],
  },
]);