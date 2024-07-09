import burger from "@/public/homePageAssests/burger.png"
import fwArrow from "@/public/homePageAssests/fowardArrow.png"
import Image from "next/image";
import heroImg from "@/public/homePageAssests/hero-img.png"
import ban1img from "@/public/homePageAssests/banner1Image.png"
import ban2img from "@/public/homePageAssests/ban2img.png"
import ban3img from "@/public/homePageAssests/ban3img.png"
import ban4img from "@/public/homePageAssests/ban4img.png"
import type { Promo } from "@/utils/interface/promote";
const Body = () => {
    const data:Promo[]=[
        {
            title:"Chats for your distributed teams",
            des:"Team combines the immediacy of real-time chat with an email threading model. With Team, you can catch up on important conversations while ignoring irrelevant ones.",
            img:ban1img
        },
        {
            title:"Chats for your distributed teams",
            des:"Team combines the immediacy of real-time chat with an email threading model. With Team, you can catch up on important conversations while ignoring irrelevant ones.",
            img:ban2img
        },
        {
            title:"Choose how you want to work",
            des:"In Team, you’ve got all the flexibility to work when, where and how it’s best for you. You can easily chat, send audio and video clips, or hop on a huddle to talk things out live.",
            img:ban3img
        },
        {
            title:"Move faster with your Team tools",
            des:"With your other work apps connected to Team, you can work faster by switching tabs less. And with powerful tools like Workflow Builder, you can automate away routine tasks.",
            img:ban4img
        }
    ]
  return (
    <>
{
    data.map((promo, index) => 
        index % 2 === 0 ? (
            // Body for even index
            <section key={index} className=" flex p-12">
                <div className="my-auto">
                    <p className="font-bold text-8xl mb-8">{promo.title}</p>
                    <p className="text-2xl w-[600px]">{promo.des}</p>
                    <div className="flex my-4">
                        <a className="font-bold underline text-[#5468e7]">Learn More</a>
                        <Image alt='Forward Arrow' src={fwArrow} className="mx-6" />
                    </div>
                </div>
                <Image src={promo.img} alt='Example' className="h-1/2 w-1/2" />
            </section>
        ) : (
            // Body for odd index
            <section key={index} className="bg-[#f5f5f5] flex p-12 flex-row-reverse">
                <div className="my-auto">
                    <p className="font-bold text-8xl mb-8">{promo.title}</p>
                    <p className="text-2xl w-[600px]">{promo.des}</p>
                    <div className="flex my-4">
                        <a className="font-bold underline text-[#5468e7]">Learn More</a>
                        <Image alt='Forward Arrow' src={fwArrow} className="mx-6" />
                    </div>
                </div>
                <Image src={promo.img} alt='Example' className="h-1/2 w-1/2 mr-36" />
            </section>
        )
    )
}

    </>

  )
}

export default Body