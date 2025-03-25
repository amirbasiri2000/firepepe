 
import Image from "next/image";
import { Button } from "./ui/Button";

const Story1 = () => {
  return (
    <section
      className={`bg-[url(/images/story1/story1_banner_lg.png)] w-full min-h-screen h-auto bg-cover bg-no-repeat pt-[140px]
`}
    >
      <div className="container grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 items-center">
        <div>
          <Image
            src="/images/story1/text-bg.png"
            alt="Text"
            width={413}
            height={426}
          />
        </div>
        <div>
          <Image
            src="/images/story1/giant.png"
            alt=""
            width={386}
            height={790}
          />
        </div>
        <div className="space-y-4 flex flex-col items-center">
          <div className="w-[80%] mx-auto">
            <h2 className="text-[30px] font-medium pb-0 mb-0 leading-6">Story 1</h2>

            <div className="flex items-center relative w-max mt-0">
              <span className="text-[30px] font-medium">The Birth of</span>
              <Image width={61} height={61} src="/images/fire.png" alt="Fire" />

              <span className="text-[30px] font-medium">FirePepe</span>
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

          <p className="text-justify text-[23px]">
            In the ancient shadows of history, fire was worshipped as a source
            of power. From this reverence, FirePepe was born. a mythical giant
            embodying the raw energy of fire and centuries of wisdom. As the
            guardian of an eternal flame, Fire Pepe now reignites in the crypto
            world, heralding a revolution.
          </p>

          <Button className="bg-[#026A09] text-white mx-auto flex justify-center">Buy $AFPEP</Button>
        </div>
      </div>
    </section>
  );
};

export default Story1;
