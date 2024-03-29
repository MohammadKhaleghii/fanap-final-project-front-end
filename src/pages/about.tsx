import PublicLayout from "@/layouts/public/public-layout";
import Link from "next/link";

const AboutPage = () => {
  return (
    <PublicLayout>
      <section className="centered-container">
        <section id="Home" className="flex items-center justify-center py-10">
          <div className="flex lg:flex-row flex-col justify-start lg:items-center items-center  gap-x-6 w-full">
            <div className="flex justify-center items-center lg:flex-col gap-y-6 lg:w-1/2 mt-10  ">
              <div className="rounded-xl relative">
                <img
                  src="/images/mohammad.webp"
                  className="rounded-3xl lg:w-[400px] lg:h-[350px] w-[300px] h-[250px]  border-[10px] border-primary absolute right-8 bottom-8"
                  alt=""
                />
                <div className="lg:w-[380px] w-[280px] lg:h-[340px] h-[240px] bg-gray bg-opacity-40 rounded-lg"></div>
              </div>
            </div>
            <div className="flex justify-center items-start flex-col gap-y-6 lg:w-1/2">
              <h1 className="text-[45px] font-bold">
                سلام,
                <br /> من محمد خالقی هستم{" "}
                <span className="inline-block animate-waving-hand">👋</span>
              </h1>
              <p className="text-[#65656d] text-justify pb-4">
                به عنوان یک برنامه نویس جوان، حدود سه سال است که روی وب کار می
                کنم. من به حل مسئله و تحلیل داده ها علاقه زیادی دارم و همیشه سعی
                می کنم با رویکردی دقیق و نوآورانه مسائل را حل کنم.
              </p>
              <ul className="flex flex-col gap-y-3  ">
                <li className="flex flex-row gap-x-3 ">
                  <div>
                    {" "}
                    <i className="fa fa-regular fa-location-dot h-[22px] "></i>
                  </div>
                  <Link href="https://en.wikipedia.org/wiki/Kerman">
                    کرمانی ام
                  </Link>
                </li>
                <li className="flex flex-row gap-x-3 ">
                  <i className="fa fa-regular fa-phone h-[22px] "></i>
                  <p>
                    <Link href="tel:+989902321104">۰۹۹۰۲۳۲۱۱۰۴</Link>
                  </p>
                </li>
              </ul>
              <ul className="flex justify-start items-center gap-x-4">
                <Link href={"https://github.com/MohammadKhaleghii"}>
                  <li>
                    <i className="text-[#65656d]  hover:text-black text-2xl fa-brands fa-github"></i>
                  </li>{" "}
                </Link>

                <Link href={"mailto:mhmdkhaleghi@gmil.com"}>
                  <li>
                    <i className="text-[#65656d]  hover:text-black text-2xl fa-solid fa-envelope"></i>
                  </li>{" "}
                </Link>
              </ul>
            </div>
          </div>
        </section>
      </section>
    </PublicLayout>
  );
};
export default AboutPage;
