import Image from "next/image";
import Link from "next/link";


export default function Home() {
  const poppins = ({
    src: "..public/fonts/Poppins-ExtraBold.ttf",
    variable: "--font-poppins",
    weight: "100 900", 
  });

  return (
    
 <main className="bg-purple-100">
  <section className="grid grid-cols-2 h-[50vh]">
    <div className=" items-center justify-center bg-purple-100 flex flex-col gap-4">
      <p className={` text-2xl font-bold ${poppins.className} `}>

      The Best Url shortner in the market 
      </p>
      <p>
        No login direct solving
      </p>
      <div className="list-none flex gap-4">
                <Link href="/shorten"><button className='  bg-purple-500 rounded-lg  text-white shadow-lg p-3 py-1 font-bold'>Try Now</button></Link>
                <Link href="/github"><button className=' bg-purple-500 rounded-lg   text-white shadow-lg p-3 py-1 font-bold'>GitHub</button></Link>
            </div>
    </div>
    <div className=" justify-start relative ">
      <Image className=" mix-blend-darken" src={"/vector_2.jpg"} alt="A img of vector" fill= {true} />
    </div>

  </section>

 </main>
  );
}
