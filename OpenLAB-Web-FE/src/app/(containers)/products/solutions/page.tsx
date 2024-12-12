import SectionFeedback from "~/components/about/SectionFeedback";
import SectionIntrol from "~/components/about/SectionIntrol";
import SectionStatiscal from "~/components/about/SectionStatiscal";
import BannerPage from "~/components/custom/BannerPage";
import MainLayout from "~/components/main-layout";
import SectionAllProduct from "~/components/products/all-products/SectionAllProduct";
import {
  PartnersdataFeedback,
  StatiscalSolution,
  dataSolution,
} from "~/services/data";

export default function IntrolSolutions() {
  return (
    <MainLayout>
      <BannerPage
        header={"Các Giải Pháp Tiên Phong"}
        homepage={"Trang chủ"}
        name={"Các Giải Pháp Tiên Phong"}
      />
      <SectionStatiscal data={StatiscalSolution} />
      <SectionIntrol
        title={"Các Giải Pháp Tiên Phong tại OpenLAB"}
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
        srcVideo={"/videos/about.mp4"}
        ishiddenContentVideo={false}
      />
      <div className="px-14 pt-16 xs:px-4 xs:py-6">
        <SectionAllProduct
          title="Các Giải Pháp Tiên Phong"
          description1={
            "Các gói giải pháp được lựa chọn riêng theo từng nhu cầu, quy mô.Tiêu chuẩn khẳng định vị thế tiên phong của OpenLAB"
          }
          data={dataSolution}
          type="APP"
        />
      </div>
      <SectionFeedback data={PartnersdataFeedback} />
    </MainLayout>
  );
}
