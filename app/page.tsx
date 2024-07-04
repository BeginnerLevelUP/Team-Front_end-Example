
import burger from "@/public/homePageAssests/burger.png"
import fwArrow from "@/public/homePageAssests/fowardArrow.png"
import Image from "next/image";
export default function Home() {
  return (
    <>
    {/* Container */}
    <div className="w-screen h-screen">
      {/* Banner */}
      <section className="bg-[url('../public/homePageAssests/hero-img.png')] lg:h-full h-1/2  bg-no-repeat bg-cover lg:bg-top  lg:bg-cover lg:bg-100% bg-[85%] flex flex-col p-10">

        {/* Desktop Top Half */}
        <div className="lg:flex hidden justify-end">
          <p className="text-6xl text-white mr-96">team<span className="text-[#5468E7]">.</span></p>
          <nav className="flex justify-between items-center list-none underline text-[#d3d3d3] text-2xl mx-24">
          <ul className="flex">
            <li className="mx-6">Product</li>
            <li className="mx-6">Blog</li>
            <li className="mx-6">Support</li>
            <li className="mx-6">Login</li>
          </ul>
        </nav>

        <button className="border border-[#5468E7] bg-[#5468E7] bg-opacity-50 rounded px-20 py-2  text-[#d3d3d3] ml-24">Get Access</button>
        </div>

        {/* Mobile Top Half */}
        <div className=" lg:hidden flex justify-between">
          <p className="text-3xl text-white">team<span className="text-[#5468E7]">.</span></p>
          <Image src={burger} alt='burger menu icon' className=""></Image>
        </div>


        {/* Bottom Half */}
        <div className="mr-48 flex flex-col justify-start p-64 space-y-56 ">
          <div className="text-white space-y-10">
            <p className="text-8xl">Instant collaboration for remote teams</p>
           <p className="text-xl">All-in-one place for your remote team to chat, collaborate and track project progress.</p>
          </div>
          <div className="flex">
            <input type="text" placeholder="Email" className="pl-4 pr-20  py-2 rounded"></input>
            <Image src={fwArrow} alt='Foward Arrow' className="relative right-10"></Image>
            <button className="border border-[#5468E7] bg-[#5468E7] rounded px-24 py-2  text-[#d3d3d3] ml-24">Get Access</button>
          </div>
        </div>
      </section>
    </div>
    </>
  );
}
