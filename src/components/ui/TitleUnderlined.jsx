const { default: Image } = require("next/image");

const TilteUnderlined = ({ title }) => {
  return (
    <div className="flex items-center relative w-max mt-4">
      <span className="text-[40px] font-medium text-black">
        $AFPEP Token Presale
      </span>

      <div className="absolute bottom-0 w-full h-[10px]">
        <Image
          src="/images/hero/title_underline.png"
          fill
          alt="underline"
          className="w-full"
        />
      </div>
    </div>
  );
};

export default TilteUnderlined;
