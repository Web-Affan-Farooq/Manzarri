import React from 'react';
import Image from 'next/image';

const Card_testimonials = () => {
  return (
<div className="snap-start inilne-block w-[400px] min-w-[400px] h-[230px] border-2 border-solid border-gray-400 rounded-lg p-3 whitespace-normal"> {/* scroll child */}
            <Image
              src={"/images/section-7-images/1.svg"}
              alt="CEO Image"
              width={70}
              height={70}
              className="rounded-full m-auto"
            />
            <p className="text-[15px] font-bold">Muniza Amir</p>
            <p className="text-[15px] font-light">CEO and Founder Manzarri</p>
            <p className="font-extrabold leading-6">
              <span className="font-extrabold text-[30px]">{`"`}</span>Lorem ipsum
              dolor sit, amet consectetur adipisicing elit. Necessitatibus
              delectus, ipsum neque rem, minima aspernatur odio incidunt
              <span className="font-extrabold text-[30px]">{`"`}</span>
            </p>
          </div>
  )
}

export default Card_testimonials