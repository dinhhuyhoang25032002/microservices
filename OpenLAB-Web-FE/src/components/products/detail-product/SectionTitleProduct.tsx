type SectionTitleProductProps = {
  nameProduct: string;
};
const SectionTitleProduct = ({ nameProduct }: SectionTitleProductProps) => {
  return (
    <div className="bg-[#081140]">
      <div>
        <span>Các tính năng chính của</span>
        <span>{nameProduct}</span>
      </div>
      <span>{nameProduct}</span>
    </div>
  );
};

export default SectionTitleProduct;
