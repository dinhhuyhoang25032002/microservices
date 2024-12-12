import ProductDescription from "~/components/products/ProductDescription";

import { productType } from "~/services/data";
type sectionAllProductProp = {
  title?: string;
  data: productType[];
  type?: string;
  description1?: string;
};

const SectionAllProduct = ({
  title,
  data,
  type,
  description1,
}: sectionAllProductProp) => {
  return (
    <div className="flex flex-wrap justify-center items-center gap-7  xs:py-6 flex-col ">
      <div>
        <div className="text-4xl font-bold xs:text-2xl  text-center">
          {title}
        </div>
        <div className="text-base font-normal  text-justify ">
          {description1}
        </div>
      </div>

      <div className="flex flex-wrap justify-center items-center py-10 xl:px-0 px-10 xs:px-0 sm:px-0 sm:py-0 xs:py-0">
        {data.map((item, index) => {
          return (
            <div
              data-aos="fade-up"
              key={index}
              className="w-[32%] sm:w-[48%] xs:w-[99%] xs:mb-4 mb-6 flex justify-center"
            >
              <ProductDescription
                id={index}
                srcImg={item.image}
                type={type}
                nameProduct={item.nameProduct}
                description={item.description}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default SectionAllProduct;
