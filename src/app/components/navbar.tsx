'use client';
import Link from "next/link";
import { Twitter, GitHub, Linkedin } from 'react-feather'


export default function Nav() {
  return(
    <div className="flex justify-between items-center">
          <p className="text-[40px] sm:text-[80px]">Mo</p>
          <nav>
            <ul className="flex gap-5 sm:gap-10 text-[20px] sm:text-[30px]">
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
       
  )
}
