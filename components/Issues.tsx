import React, { useState } from 'react';
import { ISSUES_DATA } from '../constants';

const IssueCard: React.FC<{ icon: React.ReactNode; title: string; description: string }> = ({ icon, title, description }) => {
  const [isOpen, setIsOpen] = useState(false);
  const uniqueId = `issue-desc-${title.replace(/\s+/g, '-')}`;

  return (
    <div
      className="bg-campaign-secondary p-8 rounded-lg shadow-lg border border-gray-700 cursor-pointer transition-all duration-300 hover:border-campaign-red"
      onClick={() => setIsOpen(!isOpen)}
      onKeyPress={(e) => (e.key === 'Enter' || e.key === ' ') && setIsOpen(!isOpen)}
      role="button"
      tabIndex={0}
      aria-expanded={isOpen}
      aria-controls={uniqueId}
    >
      <div className="flex justify-between items-center">
        <div className="flex items-center">
          <div className="flex-shrink-0">{icon}</div>
          <h3 className="text-2xl font-bold text-white ml-5">{title}</h3>
        </div>
        <div className="ml-4 flex-shrink-0">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className={`h-7 w-7 text-gray-400 transform transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </div>
      </div>

      <div
        id={uniqueId}
        className={`overflow-hidden transition-all duration-500 ease-in-out ${
          isOpen ? 'max-h-96 mt-6 pt-6 border-t border-gray-600' : 'max-h-0'
        }`}
      >
        <p className="text-gray-300 leading-relaxed">{description}</p>
      </div>
    </div>
  );
};


const Issues: React.FC = () => {
  return (
    <section id="issues" className="py-20 sm:py-24 bg-campaign-dark">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
          আমার ইশতেহার
        </h2>
        <p className="text-lg text-gray-300 max-w-3xl mx-auto mb-16">
          বিশ্ববিদ্যালয়ের শিক্ষার্থীদের সুযোগ-সুবিধা বৃদ্ধি ও সার্বিক উন্নয়নের লক্ষ্যে আমার সুস্পষ্ট পরিকল্পনা। বিস্তারিত জানতে প্রতিটি ইশতেহারে ক্লিক করুন।
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 text-left">
          {ISSUES_DATA.map((issue) => (
            <IssueCard key={issue.title} {...issue} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Issues;