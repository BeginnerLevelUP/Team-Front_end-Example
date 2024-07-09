import { Review as R }  from "@/utils/interface/review"
import r1img from "@/public/homePageAssests/r1img.png"
import r2img from "@/public/homePageAssests/r2img.png"
import r3img from "@/public/homePageAssests/r3img.png"
import stars from "@/public/homePageAssests/stars.png"
import Image from "next/image"
import  pagination from "@/public/homePageAssests/pagination.png"
const Review = () => {
  const data:R[]=[
    {
      name:"Chealsea Morgan",
      role:"CEO ot Subway",
      review:"Vestibulum eu quam nec neque pellentesque efficitur id eget nisl. Proin porta est convallis lacus blandit pretium sed non enim. Maecenas lacinia non orci at aliquam. Donec finibus, urna bibendum ultricies laoreet.",
      profileImg:r1img,
    },
    {
      name:"Nick Cave",
      role:"CMO ot Nokia",
      review:"In a laoreet purus. Integer turpis quam, laoreet id orci nec, ultrices lacinia nunc. Aliquam erat volutpat. Curabitur fringilla in purus eget egestas. Etiam quis.",
      profileImg:r2img,
    },
      {
      name:"Lana Rosenfeld",
      role:"Senior VP ot Pinterest",
      review:"Aliquam pulvinar vestibulum blandit. Donec sed nisl libero. Fusce dignissim luctus sem eu dapibus. Pellentesque vulputate quam a quam volutpat, sed ullamcorper erat commodo.",
      profileImg:r3img,
    }
  ]

  return (
    <>
    <p className="font-bold text-8xl my-24 text-center">What people say about Team</p>
    <div className="flex justify-center">
            {data.map((review, index) => (
        <div key={index} className="bg-[#f5f5f5] h-[400px] w-[400px] flex flex-col justify-start p-6 space-y-16 mx-24">
          <Image src={stars} alt='stars' className="my-4" />
          <p className="my-4">{review.review}</p>
          <div className="flex">
            <Image src={review.profileImg} alt={review.name} className="" />
            <div className="flex flex-col ml-8">
              <p>{review.name}</p>
              <p className="opacity-50">{review.role}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
    <div className="flex justify-end p-6">
      <Image src={pagination} alt="pagination" />
   </div>
    </>
  )
}

export default Review