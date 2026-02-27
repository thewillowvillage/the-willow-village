import { Outlet } from "react-router";
import { Navigation } from "./Navigation";
import { Footer } from "./Footer";
import { WhatsAppButton } from "./WhatsAppButton";
import { ScrollToTop } from "./ScrollToTop";
import { useEffect } from "react";
import { useLocation } from "react-router";

export function Root() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "instant"
    });
  }, [pathname]);

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      <main className="flex-1">
        <Outlet />
      </main>
      <Footer />
      <WhatsAppButton />
      <ScrollToTop />
    </div>
  );
}