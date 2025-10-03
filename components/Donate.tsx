
import React, { useState } from 'react';

const Donate: React.FC = () => {
  const [selectedAmount, setSelectedAmount] = useState<number | string>(25);
  const amounts = [10, 25, 50, 100, 250, 1000];

  const handleCustomAmountChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedAmount(e.target.value);
  };
  
  const handleDonate = () => {
    alert(`Thank you for your generous donation of $${selectedAmount}!`);
  };

  return (
    <section id="donate" className="py-20 sm:py-24 bg-campaign-light">
      <div className="container mx-auto px-6 max-w-3xl text-center">
        <h2 className="text-4xl md:text-5xl font-bold font-serif text-campaign-blue mb-4">
          Power Our Campaign
        </h2>
        <p className="text-lg text-gray-700 mb-10">
          Your contribution, no matter the size, will help us reach every voter and bring our message of change to Congress.
        </p>
        
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 mb-8">
          {amounts.map((amount) => (
            <button
              key={amount}
              onClick={() => setSelectedAmount(amount)}
              className={`py-4 px-2 rounded-md font-bold text-lg transition-all duration-200 ${
                selectedAmount === amount
                  ? 'bg-campaign-blue text-white ring-2 ring-campaign-blue'
                  : 'bg-white text-campaign-blue hover:bg-gray-200 border border-gray-300'
              }`}
            >
              ${amount}
            </button>
          ))}
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8">
          <div className="relative w-full sm:w-auto">
            <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500 text-lg">$</span>
            <input
              type="number"
              placeholder="Custom"
              onChange={handleCustomAmountChange}
              className="w-full sm:w-48 pl-8 pr-4 py-4 rounded-md border border-gray-300 text-lg text-campaign-blue focus:outline-none focus:ring-2 focus:ring-campaign-blue"
            />
          </div>
          <button
            onClick={handleDonate}
            className="w-full sm:w-auto bg-campaign-red text-white font-bold text-xl py-4 px-16 rounded-md hover:bg-red-700 transition-colors duration-300"
          >
            Donate Now
          </button>
        </div>

        <p className="text-sm text-gray-500">
          By donating, you are helping build a grassroots movement for progress. Thank you for your support.
        </p>
      </div>
    </section>
  );
};

export default Donate;
