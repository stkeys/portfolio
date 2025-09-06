import Image from "next/image";
import Link from "next/link";
import { Twitter, GitHub, Linkedin } from 'react-feather'

export default function Home() {
  return (
    <div className="bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(60,100,200,0.3),rgba(255,255,255,0))] min-h-screen w-full ">
       <div className="pt-10 mx-[10%]">
        <div className="flex justify-between items-center">
          <p className="text-[40px] sm:text-[80px]">Styqo</p>
          <nav className="">
            <ul className="flex gap-10 text-[20px] sm:text-[30px]">
              <li className="">
                <Link href="https://x.com/stykeys1?t=ZanfWsVFCzLRiVE511HcAg&s=08">
                   <Twitter />
                </Link>
              </li>

              <li className="">
                <Link href="https://github.com/stkeys">
                    <GitHub />
                </Link>
              </li>

              <li className="">
                <Link href="https://www.linkedin.com/in/mary-ola-olukotun-58179125a">
                    <Linkedin />
                </Link>
              </li>
            </ul>
          </nav>
        </div>
       
       </div>
    </div>
  );
}
