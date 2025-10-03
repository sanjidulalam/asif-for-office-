import React from 'react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-20 sm:py-24 bg-campaign-secondary">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="flex justify-center items-center">
            <img 
              src="/assets/images/asif-portrait-formal.jpg" 
              alt="সাঈদ নাঈম মুহাম্মদ আসিফ"
              className="w-full max-w-md rounded-lg shadow-2xl"
            />
          </div>
          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              আমার পরিচিতি
            </h2>
            <p className="text-lg text-gray-300 leading-relaxed mb-4">
              আমি সাঈদ নাঈম মুহাম্মদ আসিফ, আই.ই.আর. (ইনস্টিটিউট অফ এডুকেশন এন্ড রিসার্চ) এর একজন নিয়মিত ছাত্র। আমি সাধারণ শিক্ষার্থীদের অধিকার ও দাবি আদায়ে সর্বদা সোচ্চার থাকতে প্রতিজ্ঞাবদ্ধ।
            </p>
            <p className="text-lg text-gray-300 leading-relaxed mb-4">
              ক্যাম্পাসের বিভিন্ন সমস্যা দেখে এবং শিক্ষার্থীদের দুর্ভোগ উপলব্ধি করে আমি ছাত্র সংসদ নির্বাচনে অংশ নেওয়ার সিদ্ধান্ত নিয়েছি। আমি বিশ্বাস করি, একটি কার্যকরী ছাত্র সংসদ শিক্ষার্থীদের জীবনমান উন্নত করতে এবং প্রশাসনের সাথে একটি সেতুবন্ধন তৈরি করতে পারে।
            </p>
            <p className="text-lg text-gray-300 leading-relaxed">
              আমি কোনো প্রতিষ্ঠিত রাজনীতিবিদ নই। আমি আপনাদেরই একজন, সাধারণ শিক্ষার্থীদের মধ্য থেকে উঠে আসা একজন প্রতিনিধি, যে ক্যাম্পাসে ইতিবাচক পরিবর্তন আনতে দৃঢ়প্রতিজ্ঞ।
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;