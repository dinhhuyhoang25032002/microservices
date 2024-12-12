import SectionFeedback from "~/components/about/SectionFeedback";
import SectionStatiscal from "~/components/about/SectionStatiscal";
import MainLayout from "~/components/main-layout";
import {  PartnersdataFeedback, StatiscalIntrol } from "~/services/data";

import {
  LazySectionAbout,
  LazySectionSolution,
  LazySectionServices,
  
  LazySectionIntrol,
  LazySectionActivityInsite,
  LazyBannerPage,
} from "~/utils/LazySection";

const AboutPage = () => {
  return (
    <MainLayout>
      <div className="container-about-page">
        <LazyBannerPage
          header={"Giới Thiệu Công Ty"}
          homepage={"Trang chủ"}
          name={"Giới thiệu"}
        />
        <SectionStatiscal data={StatiscalIntrol} />
        <LazySectionIntrol
          title="CÔNG TY CỔ PHẦN CÔNG NGHỆ OpenLAB"
          description1="Được thành lập năm 2024, OpenLAB là một Start-up với mục tiêu trở
          thành đơn vị cung cấp các dịch vụ AI/IoT giá rẻ cho chuyển đổi số giáo
          dục hàng đầu tại Việt Nam, với mong muốn xóa khoảng cách trong giáo
          dục, nâng cao chất lượng thông qua cá nhân hóa quá trình đào tạo, đào
          tạo mọi lúc mọi nơi, phục vụ đa dạng nhu cầu đào tạo của mọi người
          trên môi trường số."
          description2=" OpenLAB đã và đang xây dựng, triển khai những giải pháp/sản phẩm toàn
          diện và thiết thực nhằm nâng cao chất lượng của công tác thí nghiệm
          thực hành trong các trường Đại học, bao gồm các thiết bị thực hành
          thông minh AI/IoT, nền tảng thực hành trực tuyến, các khóa thực hành
          chuyên sâu, và trợ giảng số AI hỗ trợ thực hành trực tuyến 24/7."
          srcVideo="/videos/about.mp4"
          ishiddenContentVideo={true}
        />
        <LazySectionServices />
        <LazySectionSolution />
        <LazySectionAbout />
        <LazySectionActivityInsite />
        <SectionFeedback data={PartnersdataFeedback} />
      </div>
    </MainLayout>
  );
};

export default AboutPage;
