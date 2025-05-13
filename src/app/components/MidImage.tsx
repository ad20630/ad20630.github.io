import Image from 'next/image'
 
export default function MidImage() {
  return (
    <div className="grid-element relative after:absolute after:inset-0 after:bg-sky-300 after:mix-blend-soft-light after:rounded-lg">
<img className="w-full object-cover grayscale" src="cybercenter.jpg" />
    </div>
  )
}