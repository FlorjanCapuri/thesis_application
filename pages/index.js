import Carousel from "@/components/Carousel"
import JavascriptIcon from '@mui/icons-material/Javascript';
import HtmlIcon from '@mui/icons-material/Html';
import CssIcon from '@mui/icons-material/Css';
import Link from "next/link";

export default function Home() {
  return (
    <div>
      <div>
        <Carousel />
      </div>
      <div className="bg-[#f4a261] text-[#264653] flex flex-col justify-center items-center gap-3 p-[30vh]">
        <p className="text-7xl font-bold font-font1 text-center">
          HI THERE, THIS IS METROPOLITAN E-LEARNING
        </p>
        <p className="text-4xl font-medium font-font1 text-center">
          A SOFTWARE WITH PASSION TO CREATE MORE WEB DEVELOPERS!
        </p>
        <p className="text-lg italic text-center">
          “Website without visitors is like a ship lost in the horizon.”
        </p>
        <p className="font-semibold text-center">
          Start learning now:
        </p>
        <div>
          <ul className="flex flex-row gap-8">
            <li>
              <Link href='/html'>
                <HtmlIcon />
              </Link>
            </li>
            <li>
              <button>
                <Link href='/css'>
                  <CssIcon />
                </Link>
              </button>
            </li>
            <li>
              <button>
                <Link href='/javascript'>
                  <JavascriptIcon />
                </Link>
              </button>
            </li>
            <li>
              <button className="font-font1 text-[10px] font-bold">
                <Link href='/react'>
                  ReactJS
                </Link>
              </button>
            </li>
            <li>
              <button className="font-font1 text-[10px] font-bold">
                <Link href='/next'>
                  Next.js
                </Link>
              </button>
            </li>
          </ul>
        </div>
      </div>
    </div >
  )
}
