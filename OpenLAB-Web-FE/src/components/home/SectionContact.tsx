import imageContact from "~/assets/image/contact/contact-image.webp";
import Image from "next/image";
import Link from "next/link";
const SectionContact = () => {
  return (
    <div className="body-section-contact flex justify-around items-start px-20 py-16  sm:px-14 xs:py-10 xs:px-5">
      <div className="content-section-contact flex justify-center items-center gap-6 xs:flex-col">
        <div>
          <Image src={imageContact} alt="image-section-contact" />
        </div>
        <div className=" sm:pr-0 w-1/2 sm:w-2/3 flex flex-col gap-4 items-start justify-center xs:w-full">
          <span className="text-4xl font-bold">Liên hệ OpenLAB</span>
          <p>
            Hãy liên hệ với chúng tôi bất cứ khi nào bạn cần. Chúng tôi sẽ phản
            hồi trong thời gian sớm nhất!
          </p>
          <Link href="/contact">
            <button className="py-2 text-white px-6 bg-[#D32F2F] hover:transition-colors hover:duration-200 hover:ease-out hover:bg-[#1513be] cursor-pointer rounded">
              Liên hệ
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SectionContact;
