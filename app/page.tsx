import Image from "next/image";
import React from "react";

const Home = () => {
  return (
    <section className="max-w-screen-mobile desktop:max-w-screen-desktop mx-auto font-outfit">
      <div className="flex w-full bg-slate-200 min-h-svh justify-center items-center">
        <div className="desktop:p-3 p-4 pb-[42px] desktop:pb-[40px] rounded-xl desktop:rounded-xl flex flex-col items-center bg-white max-w-[320px] desktop:max-w-[340px]">
          <Image
            src="/qrcode-component/assets/images/image-qr-code.png"
            height={576}
            width={576}
            alt="qr"
            className="desktop:rounded-lg rounded-lg max-w-[288px] max-h-[288px] desktop:max-w-[240px] desktop:max-h-[240px]"
          />
          <div className="text-center mt-[24px] desktop:mt-[20px] max-w-[250px] desktop:max-w-[210px]">
            <h5 className="font-bold text-[22px] desktop:text-[18px] leading-[26px] desktop:leading-[20px] mb-[18px] desktop:mb-3 text-slate-900">
              Improve your front-end skills by building projects
            </h5>
            <p className="text-base leading-[20px] text-slate-500">
              Scan the QR code to visit Frontend Mentor and take your codeing
              skills to the next level.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
