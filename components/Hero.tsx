import React from 'react';

const Hero: React.FC = () => {
  const handleScrollClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const href = e.currentTarget.getAttribute('href');
    if (href && href.startsWith('#')) {
      const targetId = href.substring(1);
      const element = document.getElementById(targetId);
      if (element) {
        const headerOffset = 80; // Approximate height of the sticky header
        const elementPosition = element.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.scrollY - headerOffset;

        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth',
        });
      }
    }
  };

  return (
    <section 
      className="relative h-screen flex items-center justify-center text-white bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: "url('/assets/images/hero-background.jpg')" }}
    >
      <div className="absolute inset-0 bg-black opacity-60"></div>
      <div className="relative z-10 text-center px-4 flex flex-col items-center">
        <div className="mb-8">
            <p className="text-xl md:text-2xl font-semibold tracking-wider">আসন্ন চাকসু নির্বাচন ২০২৫</p>
            <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight leading-tight mt-2">
            সাঈদ নাঈম মুহাম্মদ আসিফ
            </h1>
            <p className="mt-2 md:mt-4 text-2xl md:text-4xl font-medium tracking-wider">
            দপ্তর সম্পাদক পদপ্রার্থী
            </p>
        </div>
        
        <div className="flex items-center gap-6 mt-4">
            <div className="bg-white text-campaign-dark p-4 border-4 border-campaign-red rounded-lg text-center">
                <p className="text-xl font-bold">ব্যালট নং</p>
                <p className="text-7xl font-extrabold">১৬</p>
            </div>
            <a 
              href="#issues" 
              onClick={handleScrollClick}
              className="bg-campaign-red text-white font-bold text-lg py-4 px-10 rounded-md hover:bg-red-700 transition-transform duration-300 transform hover:scale-105"
            >
              আমার ইশতেহার দেখুন
            </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;