import Header from "../components/Header";
import MidImage from "../components/MidImage";

export default function Home() {
  return (
    <div>
      <Header />
      <MidImage />
      <div className="content-center p-4 relative z-20 isolate">
        <h1 className="font-sans text-xl flex gap-2 mb-2">Web DMG</h1>
        <p className="font-sans mb-2">
          A Gameboy emulator built in C++, compiled to WebAssembly and running in a Next.js frontend.
          <br />Check out&nbsp;
          <a
            href="https://web-dmg.vercel.app/"
            className="no-underline hover:underline text-sky-400 inline"
          >
            a live demo on Vercel
          </a>
          &nbsp;or&nbsp;
          <a
            href="https://github.com/ad20630/web-dmg"
            className="no-underline hover:underline text-sky-400 inline"
          >
             the source code on GitHub.
          </a>
        </p>
      </div>
    </div>
  );
}