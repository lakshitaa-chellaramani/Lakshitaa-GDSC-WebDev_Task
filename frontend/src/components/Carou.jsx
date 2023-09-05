import { Carousel } from "@material-tailwind/react";
 
export function Carou() {
  return (
    <div className="flex px-10 mt-4 justify-center items-center h-[80vh]">
    <Carousel transition={{ duration: 2 }} className="rounded-xl ">
      <img
        src="https://chawkbazar.vercel.app/_next/image?url=%2Fassets%2Fimages%2Fhero%2Fbanner-10.png&w=1920&q=100"
        alt="image 1"
        className="h-full w-full object-cover"
      />
      <img
        src="https://chawkbazar.vercel.app/_next/image?url=%2Fassets%2Fimages%2Fhero%2Fbanner-12.png&w=1920&q=100"
        alt="image 2"
        className="h-full w-full object-cover"
      />
      <img
        src="https://chawkbazar.vercel.app/_next/image?url=%2Fassets%2Fimages%2Fhero%2Fbanner-11.png&w=1920&q=100"
        alt="image 3"
        className="h-full w-full object-cover"
      />
    </Carousel>
    </div>
  );
}
export default Carou;