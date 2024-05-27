import BannerImages from "../../src/assets/images/banner.jpg";

const Banner = () => {
  return (
    <>
      <div>
        <img
          className="flex items-center justify-center w-full rounded-[32px]"
          src={BannerImages}
          alt="Banner"
        />
      </div>
    </>
  );
};

export default Banner;
