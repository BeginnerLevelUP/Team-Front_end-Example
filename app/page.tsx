
import burger from "@/public/homePageAssests/burger.png"
import fwArrow from "@/public/homePageAssests/fowardArrow.png"
import Image from "next/image";
import heroImg from "@/public/homePageAssests/hero-img.png"
import Body from "@/components/body";
import Review from "@/components/review";
export default function Home() {
  return (
    <>
    {/* Container */}
    <div className="w-screen lg:h-screen h-fit bg-[#f5f5f5]">
{/* Banner */}
<section 
  className="h-1/2 lg:h-full bg-no-repeat bg-cover lg:bg-top lg:bg-cover lg:bg-100% bg-[85%] flex flex-col p-10" 
  style={{ backgroundImage: `url(${heroImg.src})`}}
>
  {/* Desktop Top Half */}
  <div className="hidden lg:flex justify-end w-fit h-fit">
    <p className="text-6xl text-white mr-48">
      team<span className="text-[#5468E7]">.</span>
    </p>
    <nav className="flex justify-between items-center list-none underline text-[#d3d3d3] text-2xl mx-24">
      <ul className="flex">
        <li className="mx-6">Product</li>
        <li className="mx-6">Blog</li>
        <li className="mx-6">Support</li>
        <li className="mx-6">Login</li>
      </ul>
    </nav>
    <button className="border border-[#5468E7] bg-[#5468E7] bg-opacity-50 rounded px-20 py-2 text-[#d3d3d3] ml-24">
      Get Access
    </button>
  </div>

  {/* Mobile Top Half */}
  <div className="flex lg:hidden justify-between items-center mb-16">
    <p className="text-3xl text-white">
      team<span className="text-[#5468E7]">.</span>
    </p>
    <Image src={burger} alt='burger menu icon' className="w-8 h-8" />
  </div>

  {/* Bottom Half */}
  <div className="flex flex-col  justify-start lg:mr-48 p-4 lg:p-64 lg:space-y-10 space-y-10">
    <div className="text-white space-y-4 lg:space-y-10 lg:mr-10">
      <p className="text-2xl lg:text-8xl">
        Instant collaboration for remote teams
      </p>
      <p className="lg:text-xl">
        All-in-one place for your remote team to chat, collaborate and track project progress.
      </p>
    </div>
    <div className="flex items-center lg:space-x-4">
      <input 
        type="text" 
        placeholder="Email" 
        className="pl-4 pr-20 py-2 rounded w-full lg:w-auto"
      />
      <Image src={fwArrow} alt='Forward Arrow' className="relative right-10  w-12w-6 h-6  mt-4 lg:mt-0 lg:bottom-0 bottom-2" />
      <button className="border border-[#5468E7] bg-[#5468E7] rounded px-12 lg:px-24 py-2 text-[#d3d3d3] mt-4 lg:mt-0 hidden lg:flex">
        Get Access
    </button>
    </div>
    <button className="border border-[#5468E7] bg-[#5468E7] rounded px-12 lg:px-24 py-2 text-[#d3d3d3] mt-4 lg:mt-0 lg:hidden display:flex">
        Get Access
    </button>
  </div>
</section>

       <Body></Body>
      <Review></Review>

      {/* Footer */}
      <footer className="flex flex-col bg-[#232340] lg:px-24 lg:py-20 p-8 text-white lg:space-y-24 space-y-10">
        {/* Top half */}
        <div className="flex lg:flex-row flex-col  lg:space-x-48">
          <div className="flex flex-col">
            <p className="text-2xl text-white mb-4">team<span className="text-[#5468E7]">.</span></p>
            <p>Collaboration platform for mordern team </p>
          </div>

          <div className="flex flex-col my-8 lg:my-0">
            <p className="tex-bold text-[#5468E7] mb-4 lg:mb-8">Company</p>
            <ul className="space-y-6 list-none">
              <li>Product</li>
              <li>Blog</li>
              <li>Support</li>
            </ul>
          </div>

          <div className="flex flex-col my-8 lg:my-0">
            <p className="tex-bold text-[#5468E7] mb-4 lg:mb-8">Contact us</p>
            <ul className="space-y-6 list-none">
              <li>
                <a href="mailto:info@teamapp.com">info@teamapp.com</a>
              </li>
              <li>
                <a href="tel:1-800-200-300">1-800-200-300</a>
              </li>
              <li>1010 Sunset Blv.
              Palo Alto, California</li>
            </ul>
          </div>

          <div className="flex flex-col lg:my-0 my-8">
            <p className="tex-bold text-[#5468E7]  mb-4 lg:mb-8">Contact us</p>
            <p>Subscribe to the newsletter</p>
            <div className="flex">
            <input type="text" placeholder="Email" className="pl-4 pr-20  py-2 rounded opacity-50"></input>
            <Image src={fwArrow} alt='Foward Arrow' className="relative right-10"></Image>
          </div>
          </div>
        </div>

        {/* Bottom half */}
        <div className="flex justify-start">
            <p>© Copyright Team Inc.</p>
        </div>
      </footer>
      
    </div>


    </>
  );
}
