import Image from "next/image";
import React from "react";

const Home = () => {
  return (
    <section className="max-w-screen-mobile desktop:max-w-screen-desktop mx-auto font-outfit">
      <div className="flex w-full bg-slate-300 min-h-svh justify-center items-center">
        <div className="desktop:p-5 p-4 pb-[42px] desktop:pb-[54px] rounded-2xl desktop:rounded-3xl flex flex-col items-center bg-white max-w-[320px] desktop:max-w-[630px]">
          <Image
            src="/qrcode-component/assets/images/image-qr-code.png"
            height={576}
            width={576}
            alt="qr"
            className="desktop:rounded-xl rounded-lg max-w-[288px] max-h-[288px] desktop:max-w-[411px] desktop:max-h-[411px]"
          />
          <div className="text-center mt-[24px] desktop:mt-[35px] max-w-[250px] desktop:max-w-[360px]">
            <h5 className="font-bold text-[22px] desktop:text-[31px] leading-[26px] desktop:leading-[36px] mb-[18px] desktop:mb-5 text-slate-900">
              Improve your front-end skills by building projects
            </h5>
            <p className="text-base leading-[20px] desktop:text-lg text-slate-500">
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
