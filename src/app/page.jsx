import HomeItems from "@/components/Home";
import img from "../assets/images/banner.png";
import Image from "next/image";
import Hero from "@/components/Hero";
import Story1 from "@/components/Story1";
export default function Home() {
  return (
    <>
      <Hero />
      <Story1 />
      {/* <section className="t5Auwb9ABP">
      <article className="container"> 
        <div className="Hj6ioik8v9"> 
          <div className="xdcpkEOETz">
          <HomeItems/>
          </div>
          <div className="D5bJJOvRjcL">
            <fieldset className="zRFDc">
              <h5>
              Symbol<br />
                the god of Symbol
              </h5>
              <p>test txt</p> 
              <div className="VMBHCOEOm6">
                <span>
                  <abbr>325% staking rewards</abbr>
                  <p>Test2 txt</p>
                </span>
              </div> 
            <picture><Image src={img} alt="img" /></picture>
            </fieldset>
          </div>
        </div> 
      </article>  
    </section> */}
    </>
  );
}
