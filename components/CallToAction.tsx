import React from 'react';

const CallToAction: React.FC = () => {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const email = (e.currentTarget.elements.namedItem('email') as HTMLInputElement).value;
    alert(`ধন্যবাদ ${email}! আমাদের সাথে যুক্ত থাকার জন্য।`);
    e.currentTarget.reset();
  };

  return (
    <section 
      id="get-involved" 
      className="relative py-20 sm:py-32 bg-cover bg-center"
      style={{ backgroundImage: "url('/assets/images/cta-background.jpg')" }}
    >
      <div className="absolute inset-0 bg-campaign-dark opacity-80"></div>
      <div className="relative container mx-auto px-6 text-center text-white">
        <h2 className="text-4xl md:text-5xl font-bold mb-4">
          যুক্ত হোন, পরিবর্তন আনুন
        </h2>
        <p className="text-lg max-w-2xl mx-auto mb-8">
          এই পথচলা আপনার মতো সাধারণ শিক্ষার্থীদের শক্তি নিয়েই। আপডেট পেতে এবং এই ঐতিহাসিক আন্দোলনের অংশ হতে সাইন আপ করুন।
        </p>
        <form onSubmit={handleSubmit} className="max-w-xl mx-auto flex flex-col sm:flex-row gap-4">
          <label htmlFor="email" className="sr-only">ইমেইল ঠিকানা</label>
          <input
            type="email"
            id="email"
            name="email"
            required
            placeholder="আপনার ইমেইল ঠিকানা দিন"
            className="flex-grow w-full px-5 py-4 rounded-md text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-campaign-red"
          />
          <button
            type="submit"
            className="bg-campaign-red text-white font-bold text-lg py-4 px-10 rounded-md hover:bg-red-700 transition-colors duration-300"
          >
            যুক্ত হোন
          </button>
        </form>
      </div>
    </section>
  );
};

export default CallToAction;