import React from "react";
// import Button_2 from "../../../common/Button/Button-2";
import { Shield, Truck, Award, Star } from "lucide-react";
const Section_5 = () => {
  const features = [
    {
      icon: Shield,
      title: "Lifetime Warranty",
      description: "Every piece comes with our comprehensive lifetime warranty",
    },
    {
      icon: Truck,
      title: "Free Shipping",
      description: "Complimentary shipping on all orders over $500",
    },
    {
      icon: Award,
      title: "Certified Quality",
      description:
        "All diamonds and gemstones are certified by leading authorities",
    },
    {
      icon: Star,
      title: "Expert Craftsmanship",
      description: "Handcrafted by master jewelers with decades of experience",
    },
  ];
  return (
    <section className="py-20 bg-manzarri-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-manzarri-black mb-4">
            Why Choose Manzarri
          </h2>
          <p className="text-xl text-manzarri-black/70">
            Excellence in every detail
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => {
            const IconComponent = feature.icon;
            return (
              <div key={index} className="text-center group">
                <div className="w-16 h-16 bg-manzarri-reddish-brown/10 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-manzarri-reddish-brown transition-colors duration-300">
                  <IconComponent className="w-8 h-8 text-manzarri-reddish-brown group-hover:text-manzarri-white transition-colors duration-300" />
                </div>
                <h3 className="text-xl font-semibold text-manzarri-black mb-3">
                  {feature.title}
                </h3>
                <p className="text-manzarri-black/70 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
    //   <section className={`bg-[url("/images/section-5-images/1.svg")] bg-no-repeat bg-center bg-cover backdrop-opacity-100 backdrop-blur-3xl w-full h-[662px] flex flex-col flex-nowrap justify-center items-center`}>

    //   <div className='
    //   flex flex-col flex-nowrap justify-center items-center'>
    //     <div className='text-faun-dark font-libre-bodoni font-bold text-[40px] leading-[50px] text-center'>
    //     <h1>Jewelry for Every</h1>
    //     <h1>Ocassion</h1>
    //     </div>
    //     <Button_2/>
    //   </div>

    // </section>
    //     <section className='bg-[var(--faun-light)] grid grid-cols-[3fr_2fr_2fr] grid-rows-[2fr_2fr_2fr] justify-center item-center'>
    //       <div className='row-start-1 row-span-4'>
    //     <Image src={'/images/section-5-images/1.svg'} alt='img' width={400} height={400} className='w-full object-cover h-full'/>
    //       </div>

    //       <div className='col-start-2 row-start-2
    //       flex flex-col flex-nowrap justify-center items-center'>
    //         <div className='text-[40px] leading-[50px] text-center'>
    //         <h1>Jewelry for Every</h1>
    //         <h1>Ocassion</h1>
    //         </div>
    //         <Button_2/>
    //       </div>

    // <div className='col-start-3 row-start-2 row-end-3 col-end-4'>
    // <Image src={'/images/section-5-images/1.svg'} alt='img' width={400} height={400} className='w-1/2 h-full'/>
    // </div>
    //     </section>
  );
};

export default Section_5;
