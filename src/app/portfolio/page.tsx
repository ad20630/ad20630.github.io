import Header from "../components/Header";
import MidImage from "../components/MidImage";

export default function Home() {
  return (
    <div>
      <Header />
      <MidImage />
      <div className="content-center p-4 relative z-20 isolate">
        <h1 className="font-sans text-xl flex gap-2 mb-2">Contact</h1>
        <p className="font-sans flex mb-2">
          In construction, coming soon
        </p>
      </div>
    </div>
  );
}