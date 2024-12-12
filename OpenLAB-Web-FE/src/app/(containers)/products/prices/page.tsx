import BannerPage from "~/components/custom/BannerPage";
import TablePrices from "~/components/products/prices/TablePrices";
import MainLayout from "~/components/main-layout";
const PricesPage = () => {
  return (
    <MainLayout >
      <>
        <div>
          <BannerPage
            header={"Báo Giá"}
            homepage={"Trang chủ"}
            name={"Báo giá Hệ thống Đại học số"}
          />
        </div>
        <TablePrices />
      </>
    </MainLayout>
  );
};

export default PricesPage;
