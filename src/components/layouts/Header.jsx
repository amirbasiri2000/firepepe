import Image from "next/image";
import logo from "../../assets/images/logo_main.png";
import Telegram from "../../assets/images/social/telegram.png";
import x from "../../assets/images/social/x.png";
import Link from "next/link";

export default function Header() {
  return (
    <>
      <header className="M98IMl1WxW">
        <article className="container">
          <div className="nM8WHT9sHQ">
            <div className="DD6XTSpQ5W1d">
              <div className="fj1umo7uSt">
                <div className="flex items-center">
                  <Image
                    src={logo}
                    alt="Logo"
                    width={64}
                    height={64}
                    className="cursor-pointer"
                  />
                  <div className="font-medium text-xl hidden md:inline-block">$AFPEP</div>
                </div>
              </div>
              <div className="P5JhVgOj2J hidden lg:flex">
                <ul className="Y4XF0CFzyD">
                  <li>
                    <Link href={"#"}>Home</Link>
                  </li>
                  <li>
                    <Link href={"#"}>Storys</Link>
                  </li>
                  <li>
                    <Link href={"#"}>Staking</Link>
                  </li>
                  <li>
                    <Link href={"#"}>How To Buy</Link>
                  </li>
                  <li>
                    <Link href={"#"}>Faqs</Link>
                  </li>
                  <li>
                    <Link href={"#"}>Bridge!</Link>
                  </li>
                </ul>
              </div>
            </div>

            <div className="JRXGbJGKmf">
              <ul className="UhKL4nbfNv">
                <li>
                  <Link href={"#"}>Contract</Link>
                </li>

                <li>
                  <Link href={"#"}>Audit</Link>
                </li>
              </ul>
              <ul className="fkBQ5vVELo">
                <li>
                  <Link className="hvr-buzz-out" href="#">
                    <Image src={Telegram} alt="" />
                  </Link>
                </li>
                <li>
                  <Link className="hvr-buzz-out" href="#">
                    <Image src={x} alt="" />
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </article>
        <section className="Ds1IANaeuO7Q">
          <article className="container">
            <div className="eKQiceiddQ">
              <span>Breaking : </span>
              <div className="L191cjNqxD">
                <ul className="GsLbsva2T5">
                  <li>The text of news number 01 is written here.</li>
                  <li>The text of news number 02 is written here</li>
                  <li>The text of news number 03 is written here</li>
                </ul>
              </div>
            </div>
          </article>
        </section>
      </header>
    </>
  );
}
