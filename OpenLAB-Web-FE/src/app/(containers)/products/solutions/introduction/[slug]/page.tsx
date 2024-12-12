import React from 'react'
import MainLayout from '~/components/main-layout'
import BannerProduct from '~/components/products/BannerProduct'
import SectionBenefitProduct from '~/components/products/detail-product/SectionBenefitProduct'

export default function DetailSolution() {
  return (
    <MainLayout>
      <div>
        <BannerProduct
          nameProduct={"Ứng dụng kết nối người học"}
          description={"Mô hình đại học số thu nhỏ giúp đẩy mạnh tương tác giữa nhà trường, giảng viên và sinh viên, giúp người dùng tra cứu thời khóa biểu, điểm thi, cập nhật tin tức một cách nhanh chóng"} starNumber={''} idCourse={''}        />
        <SectionBenefitProduct data={[]} />
      </div>
    </MainLayout>
  )
}
