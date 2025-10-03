import React from 'react';

const Intro: React.FC = () => {
  return (
    <section className="bg-campaign-light text-campaign-dark py-20 sm:py-24">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="md:order-2 flex justify-center items-center">
            <img 
              src="/assets/images/asif-portrait-casual.jpg"
              alt="সাঈদ নাঈম মুহাম্মদ আসিফ"
              className="w-full max-w-sm rounded-lg shadow-2xl"
            />
          </div>
          <div className="md:order-1">
            <h2 className="text-4xl md:text-5xl font-bold text-campaign-dark mb-6">
              কেন আমাকে ভোট দিবেন না?
            </h2>
            <ul className="space-y-4 text-lg text-gray-700 leading-relaxed">
                <li className="flex items-start">
                    <span className="text-campaign-red font-bold mr-3 mt-1">১.</span>
                    <span>জুলাই বেঁচে আমি কোথাও পা দিবনা!</span>
                </li>
                <li className="flex items-start">
                    <span className="text-campaign-red font-bold mr-3 mt-1">২.</span>
                    <span>আন্তঃব্যক্তিক দ্বন্দ্বে আমাকে পাবেন না।</span>
                </li>
                 <li className="flex items-start">
                    <span className="text-campaign-red font-bold mr-3 mt-1">৩.</span>
                    <span>আমি কোনো রাজনৈতিক দলের সঙ্গে যুক্ত নই, লেজুড়বৃত্তি আমি চরমভাবে ঘৃণা করি।</span>
                </li>
                 <li className="flex items-start">
                    <span className="text-campaign-red font-bold mr-3 mt-1">৪.</span>
                    <span>আমার সিদ্ধান্তগুলো বিশ্ববিদ্যালয়ের বাহির থেকে আসবেনা, তাই গুরুত্বপূর্ণ সিদ্ধান্তের সময় আপনাদেরকে বিরক্ত করা লাগতে পারে।</span>
                </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Intro;