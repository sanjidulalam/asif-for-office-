import React, { useState } from 'react';
import { askLailaAI } from '../services/geminiService';

const AIAssistant: React.FC = () => {
  const [query, setQuery] = useState('');
  const [response, setResponse] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!query.trim()) return;

    setIsLoading(true);
    setError('');
    setResponse('');

    try {
      const aiResponse = await askLailaAI(query);
      setResponse(aiResponse);
    } catch (err) {
      setError('দুঃখিত, কিছু একটা সমস্যা হয়েছে। অনুগ্রহ করে আবার চেষ্টা করুন।');
      console.error(err);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section id="ask-ai" className="py-20 sm:py-24 bg-campaign-light text-campaign-dark">
      <div className="container mx-auto px-6 max-w-3xl text-center">
        <h2 className="text-4xl md:text-5xl font-bold mb-4">জিজ্ঞাসা করুন AI সহকারীকে</h2>
        <p className="text-lg text-gray-700 mb-8">
          আসিফ-এর ইশতেহার সম্পর্কে কোনো প্রশ্ন আছে? আমাদের AI চালিত সহকারীর কাছ থেকে तुरुन्त উত্তর পান।
        </p>

        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <textarea
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="আইডি কার্ড, একাডেমিক মেইল, পরিবহন বা অন্য যেকোনো বিষয় সম্পর্কে জিজ্ঞাসা করুন..."
            className="w-full p-4 rounded-md border border-gray-300 text-lg focus:outline-none focus:ring-2 focus:ring-campaign-red"
            rows={3}
            disabled={isLoading}
          />
          <button
            type="submit"
            disabled={isLoading}
            className="bg-campaign-dark text-white font-bold text-lg py-3 px-8 rounded-md hover:bg-gray-800 transition-colors duration-300 disabled:bg-gray-500 disabled:cursor-not-allowed"
          >
            {isLoading ? 'ভাবছে...' : 'উত্তর জানুন'}
          </button>
        </form>

        <div className="mt-6 text-center">
          <p className="text-gray-600">
            অথবা,{' '}
            <a
              href="https://forms.gle/R2QcbyDLin4iMMTQ9"
              target="_blank"
              rel="noopener noreferrer"
              className="text-campaign-red font-semibold underline hover:text-red-700"
            >
              এই গুগল ফর্মের মাধ্যমে আপনার প্রশ্ন জমা দিন।
            </a>
          </p>
        </div>

        {error && (
          <div className="mt-8 p-4 bg-red-100 text-red-700 rounded-md text-left">
            <p>{error}</p>
          </div>
        )}

        {response && (
          <div className="mt-8 p-6 bg-white rounded-lg shadow-md text-left border-l-4 border-campaign-red">
            <h3 className="text-xl font-bold mb-2 text-campaign-dark">AI সহকারীর উত্তর:</h3>
            <p className="text-gray-700 whitespace-pre-wrap">{response}</p>
          </div>
        )}
      </div>
    </section>
  );
};

export default AIAssistant;