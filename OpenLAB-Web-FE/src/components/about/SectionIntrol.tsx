type SectionIntrol = {
  title: string;
  description1: string;
  description2: string;
  srcVideo: string;
  ishiddenContentVideo: boolean;
};
const SectionIntrol = ({
  title,
  description1,
  description2,
  srcVideo,
  ishiddenContentVideo,
}: SectionIntrol) => {
  return (
    <div
      className="px-28 lg:px-16 py-20 flex gap-10 sm:gap-10 bg-gradient-to-r from-[#090979] from-0% via-[#054c5c] via-[50%]  to-[#090979] to-100%   
    sm:flex-col  xs:flex-col xs:px-5 xs:py-14"
    >
      <div className="w-[58%] sm:w-full xs:w-full pr-20 text-white lg:px-0 sm:px-0 xs:px-0 xl:pr-28">
        <h1 className="text-center text-3xl font-semibold leading-10 xs:text-2xl xl:text-2xl ">
          {title}
        </h1>
        <p className="text-justify my-4 indent-8">{description1}</p>
        <p className="text-justify my-4 indent-8">{description2}</p>
      </div>
      <div className="w-[40%] flex flex-col lg:justify-center sm:justify-center sm:items-center xs:justify-center xs:items-center sm:w-full xs:w-full">
        <video muted controls className="rounded sm:w-[70%] xs:w-[94%]">
          <source src={srcVideo} type="video/mp4" />
        </video>
        {ishiddenContentVideo ? (
          <span className="text-center font-semibold text-white py-8">
            Video giới thiệu công ty
          </span>
        ) : (
          <></>
        )}
      </div>
    </div>
  );
};

export default SectionIntrol;
