import Image from "next/image";

export default function MidImage() {
  return (
    <div className="grid-element inset-shadow-sm/50 relative after:absolute after:inset-0 after:bg-sky-300 after:mix-blend-soft-light after:rounded-lg relative z-5">
      <Image
        className="font-sans w-full h-64 object-cover grayscale"
        src="cybercenter.jpg"
        alt=""
        width={1200}
        height={300}
        layout="responsive"
      />
    </div>
  );
}
