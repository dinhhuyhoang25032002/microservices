import MainLayout from "~/components/main-layout";
import {
  LazySectionAbout,
  LazySectionSolution,
  LazySectionProduct,
  LazySectionPartners,
  LazySectionContact,
  LazySectionBanner,
  LazySectionServices,
} from "~/utils/LazySection";

export default function Home() {
  return (
    <MainLayout>
      <div className="container-section-banner">
        <LazySectionBanner />
      </div>
      <div className="container-section-services">
        <LazySectionServices />
      </div>
      <div className="container-section-solution">
        <LazySectionSolution />
      </div>
      <div className="container-section-product">
        <LazySectionProduct />
      </div>
      <div className="container-section-about">
        <LazySectionAbout />
      </div>
      <div className="container-section-partners">
        <LazySectionPartners />
      </div>
      <div className="container-section-contact">
        <LazySectionContact />
      </div>
    </MainLayout>
  );
}
