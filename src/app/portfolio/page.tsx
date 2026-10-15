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
          <a
            href="https://web-dmg.vercel.app/"
            className="no-underline hover:underline text-sky-400 inline"
          ><br></br>
            Demo
          </a>
          &nbsp; | &nbsp;
          <a
            href="https://github.com/ad20630/web-dmg"
            className="no-underline hover:underline text-sky-400 inline"
          >
             Github
          </a>
        </p>
      </div>
      <div className="content-center p-4 relative z-20 isolate">
        <h1 className="font-sans text-xl flex gap-2 mb-2">Pathfinder</h1>
        <p className="font-sans mb-2">
          An interactive map that allows displaced workers to find and share opportunities and resources in their area. Won best Gemini API integration at Hacktoberfest 2026: Hack Day Atlanta.
          <a
            href="https://pathfinder-hacktoberfest.vercel.app/"
            className="no-underline hover:underline text-sky-400 inline"
          ><br></br>
            Demo
          </a>
          &nbsp; | &nbsp;
          <a
            href="https://github.com/ad20630/pathfinder"
            className="no-underline hover:underline text-sky-400 inline"
          >
             Github
          </a>
        </p>
      </div>
    </div>
  );
}