import Image from "next/image";
import { Button } from "./ui/Button";
import HomeItems from "@/components/Home";

const Hero = () => {
  return (
    <section
      className={`bg-[url(/images/hero/hero_banner_sm.png)] md:bg-[url(/images/hero/hero_banner_lg.png)] w-full min-h-screen h-auto bg-cover bg-no-repeat pt-[140px] container
`}
    >
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        <div className="col-span-1 lg:col-span-2">
          <div className="flex items-center gap-x-10 mt-[50px]">
            <div className="flex items-center text-black relative w-max">
              <Image
                width={97}
                height={57}
                src="/images/money_curle.png"
                alt="Money"
                className="w-[54px] h-[32px] md:w-[97px] md:h-[57px]"
              />
              <div className="flex items-center relative w-max">
                <span className="text-sm lg:text-[40px] font-medium">
                  Ancient
                </span>
                <Image
                  width={61}
                  height={61}
                  src="/images/fire.png"
                  alt="Fire"
                  className="size-[33px] md:size-[61px]"
                />

                <span className="text-[21px] lg:text-[55px] font-medium">
                  FirePepe
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
            </div>

            <div className="hidden lg:flex items-center gap-x-5">
              <Button className="bg-[#718011] hover:bg-[#64710f]">
                Light Paper
              </Button>

              <Button className="bg-[#D14A02] hover:bg[#bc4403]">
                White Paper
              </Button>
            </div>
          </div>

          <div className="flex">
            {/* gif */}
            <div className="h-auto w-[211px] lg:w-[487px]">
              <Image
                width={487}
                height={689}
                src="/images/hero/hero_gif.gif"
                alt="gif"
                className="w-[211px] h-[310px] lg:w-[487px] lg:h-[689px]"
              />
            </div>
            <div className="flex flex-col">
              <div className="flex items-center relative w-max lg:mt-4">
                <span className="text-[22px] sm:text-[24px] md:text-[32px] lg:text-[40px] font-medium text-black">
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

              <div>
                <div className="relative mt-10">
                  <div className="relative text-center z-20">
                    {/* <h2 className="text-white text-[25px] font-medium relative z-20">
                      Staking Rewards : 210%
                    </h2>
                    <p className="text-black text-lg font-medium relative z-20">
                      No Empty Promises Here! just real rewards, secure staking,
                      and guaranteed payouts! Commitment is the first condition.
                    </p> */}
                    <div className="absolute top-0 z-10">
                      <Image
                        width={400}
                        height={235}
                        src="/images/hero/text_bg.png"
                        alt=""
                        className="w-[191px] h-[106px] md:w-[400px] md:h-[235px]"
                      />
                    </div>
                  </div>
                </div>
              </div>

              <div className="hidden lg:flex items-center relative w-max mt-20">
                <span className="text-[30px] font-medium text-white">
                  The Memecoin Revolution
                </span>

                <div className="absolute bottom-0 w-full h-[10px]">
                  <Image
                    src="/images/hero/title_underline_white.png"
                    fill
                    alt="underline"
                    className="w-full"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-span-1">
          <HomeItems />
        </div>
      </div>
    </section>
  );
};

export default Hero;
