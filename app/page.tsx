

export default function Home() {
  return (
    <>
    {/* Container */}
    <div className="w-screen h-screen">
      {/* Banner */}
      <section className="bg-[url('../public/homePageAssests/hero-img.png')] lg:h-full h-1/2 bg-no-repeat bg-cover lg:bg-top  lg:bg-cover lg:bg-100% bg-[75%] flex flex-col p-10">

        {/* Top Half */}
        <div className="flex justify-evenly "> 
        <p className="text-6xl text-white">team<span className="text-[#5468E7]">.</span></p>

        <nav className="flex justify-between items-center list-none underline text-[#d3d3d3] text-2xl">
          <ul className="flex">
            <li className="mr-6">Product</li>
            <li className="mr-6">Blog</li>
            <li className="mr-6">Support</li>
          </ul>
          <ul className="flex items-center">
            <li className="mr-6">Login</li>
            <li>
              <button className="border border-[#5468E7] bg-[#5468E7] bg-opacity-50 rounded px-5 py-2">Get Access</button>
            </li>
          </ul>
        </nav>

        
        </div>


        {/* Bottom Half */}
        <div>

        </div>
      </section>
    </div>
    </>
  );
}
