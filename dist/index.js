import React from "react";
import ReactDOM from "react-dom/client";
import { GoogleGenAI } from "@google/genai";

// --- START: constants.tsx ---
const NAV_LINKS = [
  { name: "ইশতেহার", href: "#issues" },
  { name: "পরিচিতি", href: "#about" },
  { name: "যুক্ত হোন", href: "#get-involved" },
  { name: "জিজ্ঞাসা", href: "#ask-ai" },
];
const ISSUES_DATA = [
    {
    icon: React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", className: "h-12 w-12 text-campaign-red", fill: "none", viewBox: "0 0 24 24", stroke: "currentColor", strokeWidth: 2 }, React.createElement("path", { strokeLinecap: "round", strokeLinejoin: "round", d: "M10 6H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V8a2 2 0 00-2-2h-5m-4 0V5a2 2 0 012-2h4a2 2 0 012 2v1m-4 0h4" })),
    title: 'One ID Card, All Service',
    description: 'বিশ্ববিদ্যালয়ের শিক্ষার্থী হিসেবে মেডিকেল, পরিবহন, একাডেমিক সহ সকল সেবা এক আইডি কার্ডের আওতাভুক্ত করা।'
  },
  {
    icon: React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", className: "h-12 w-12 text-campaign-red", fill: "none", viewBox: "0 0 24 24", stroke: "currentColor", strokeWidth: 2 }, React.createElement("path", { strokeLinecap: "round", strokeLinejoin: "round", d: "M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207" })),
    title: 'একাডেমিক মেইল',
    description: 'আইডি পাওয়ার সাথে প্রত্যেক শিক্ষার্থীকে একাডেমিক মেইল প্রদান করা, যেমন: 10203040@std.cu.ac.bd।'
  },
  {
    icon: React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", className: "h-12 w-12 text-campaign-red", fill: "none", viewBox: "0 0 24 24", stroke: "currentColor", strokeWidth: 2 }, React.createElement("path", { strokeLinecap: "round", strokeLinejoin: "round", d: "M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v.01" })),
    title: 'ভুল যার জরিমানা তার',
    description: 'প্রশাসনের ভুলের মাশুল শিক্ষার্থীরা আর দিবেনা। ছাত্রছাত্রীদের উপর থেকে অন্যায্য জরিমানা বাতিল করা।'
  },
  {
    icon: React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", className: "h-12 w-12 text-campaign-red", fill: "none", viewBox: "0 0 24 24", stroke: "currentColor", strokeWidth: 2 }, React.createElement("path", { strokeLinecap: "round", strokeLinejoin: "round", d: "M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z" })),
    title: 'সহজ ব্যাংকিং ব্যবস্থা',
    description: 'শিক্ষার্থীদের জন্য সহজ ও কার্যকরী ব্যাংকিং ব্যবস্থা উন্নয়ন করা (বিকাশ, নগদ অন্তর্ভুক্ত করে)।'
  },
  {
    icon: React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", className: "h-12 w-12 text-campaign-red", fill: "none", viewBox: "0 0 24 24", stroke: "currentColor", strokeWidth: 2 }, React.createElement("path", { strokeLinecap: "round", strokeLinejoin: "round", d: "M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0z" })),
    title: 'কার্যকরী হেল্পডেস্ক',
    description: 'বিশেষ চাহিদাসম্পন্ন শিক্ষার্থীদের জন্য প্রশাসনিক ভবনে কার্যকরী হেল্পডেস্ক স্থাপন করা।'
  },
  {
    icon: React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", className: "h-12 w-12 text-campaign-red", fill: "none", viewBox: "0 0 24 24", stroke: "currentColor", strokeWidth: 2 }, React.createElement("path", { strokeLinecap: "round", strokeLinejoin: "round", d: "M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" })),
    title: 'এটেন্ডেন্স সিস্টেম শিথিল',
    description: 'শিক্ষার্থীদের উপর থেকে ক্লাসে উপস্থিতির কঠোর নিয়ম শিথিল করে জ্ঞানارجনে উৎসাহিত করা।'
  },
  {
    icon: React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", className: "h-12 w-12 text-campaign-red", fill: "none", viewBox: "0 0 24 24", stroke: "currentColor", strokeWidth: 2 }, React.createElement("path", { strokeLinecap: "round", strokeLinejoin: "round", d: "M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" })),
    title: 'উন্নত সেবা নিশ্চিতকরণ',
    description: 'শিক্ষার্থীদের জন্য উন্নত ও নিরাপদ খাদ্য, পরিবহন ও সেনিটারি ব্যবস্থাপনা নিশ্চিত করা।'
  },
  {
    icon: React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", className: "h-12 w-12 text-campaign-red", fill: "none", viewBox: "0 0 24 24", stroke: "currentColor", strokeWidth: 2 }, React.createElement("path", { strokeLinecap: "round", strokeLinejoin: "round", d: "M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7l8-4 8 4m-8 4v10" })),
    title: 'ডিজিটাল ডাটাবেজ',
    description: 'প্রশাসনিক হয়রানি বন্ধে ডিজিটাল ডাটাবেজ স্থাপন, ফর্মফিলাপ ও সনদ আবেদনের যাবতীয় কাজ অনলাইন নির্ভর করা।'
  },
  {
    icon: React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", className: "h-12 w-12 text-campaign-red", fill: "none", viewBox: "0 0 24 24", stroke: "currentColor", strokeWidth: 2 }, React.createElement("path", { strokeLinecap: "round", strokeLinejoin: "round", d: "M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 10l-6 6" })),
    title: 'জবাবদিহিতা ও স্বচ্ছতা',
    description: 'বিশ্ববিদ্যালয় প্রশাসন ও ছাত্র সংসদের কার্যক্রমের জবাবদিহিতা ও স্বচ্ছতা নিশ্চিত করা।'
  },
  {
    icon: React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", className: "h-12 w-12 text-campaign-red", fill: "none", viewBox: "0 0 24 24", stroke: "currentColor", strokeWidth: 2 }, React.createElement("path", { d: "M12 14l9-5-9-5-9 5 9 5z" }), React.createElement("path", { d: "M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-5.998 12.078 12.078 0 01.665-6.479L12 14z" }), React.createElement("path", { strokeLinecap: "round", strokeLinejoin: "round", d: "M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-5.998 12.078 12.078 0 01.665-6.479L12 14z" })),
    title: 'একাডেমিক সেমিনার',
    description: 'প্রত্যেক ডিপার্টমেন্টে প্রতি ৩ মাসে অন্তত একবার একাডেমিক বিষয় সংশ্লিষ্ট সেমিনার আয়োজন করা।'
  },
  {
    icon: React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", className: "h-12 w-12 text-campaign-red", fill: "none", viewBox: "0 0 24 24", stroke: "currentColor", strokeWidth: 2 }, React.createElement("path", { strokeLinecap: "round", strokeLinejoin: "round", d: "M12 6.25278C12 6.25278 10.7431 3.25 8 3.25C5.25688 3.25 3 5.50688 3 8.25C3 11.75 8 16.25 12 20.25C16 16.25 21 11.75 21 8.25C21 5.50688 18.7431 3.25 16 3.25C13.2569 3.25 12 6.25278 12 6.25278Z" })),
    title: 'পরিবেশ ও জীববৈচিত্র্য রক্ষা',
    description: 'বিশ্ববিদ্যালয়ের পরিবেশ ও জীববৈচিত্র্য রক্ষায় কার্যকরী পদক্ষেপ গ্রহণ করা, যেমন সাশ্রয়ী ওয়েস্ট ম্যানেজমেন্ট।'
  },
  {
    icon: React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", className: "h-12 w-12 text-campaign-red", fill: "none", viewBox: "0 0 24 24", stroke: "currentColor", strokeWidth: 2 }, React.createElement("path", { strokeLinecap: "round", strokeLinejoin: "round", d: "M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" })),
    title: 'ক্লাব ও সোসাইটির জন্য অফিস',
    description: 'বিশ্ববিদ্যালয়ের সকল ক্লাব ও সোসাইটিসমূহের কার্যক্রম সঠিকভাবে পরিচালনার জন্য অফিসের ব্যবস্থা করা।'
  }
];
const ASIF_PLATFORM_SUMMARY = `
প্রার্থী: সাঈদ নাঈম মুহাম্মদ আসিফ, দপ্তর সম্পাদক পদপ্রার্থী, চাকসু নির্বাচন ২০২৫।

ইশতেহারের সারসংক্ষেপ:
- One ID Card, All Service: মেডিকেল, পরিবহন, একাডেমিক সহ সকল সেবা এক আইডি কার্ডে।
- একাডেমিক মেইল: আইডি পাওয়ার সাথে সাথেই প্রত্যেক শিক্ষার্থীর জন্য।
- ভুল যার জরিমানা তার: প্রশাসনের ভুলের জন্য শিক্ষার্থীরা জরিমানা দেবে না।
- সহজ ব্যাংকিং: বিকাশ, নগদ সহ কার্যকরী ব্যাংকিং ব্যবস্থা।
- হেল্পডেস্ক: বিশেষ চাহিদাসম্পন্ন শিক্ষার্থীদের জন্য।
- এটেন্ডেন্স শিথিল: ক্লাসে উপস্থিতির কঠোর নিয়ম শিথিল করা।
- উন্নত সেবা: নিরাপদ খাদ্য, পরিবহন ও সেনিটারি ব্যবস্থাপনা নিশ্চিত করা।
- ডিজিটাল প্রশাসন: অনলাইন ফর্মফিলাপ, সনদ আবেদন ও ডিজিটাল ডাটাবেজ।
- জবাবদিহিতা: বিশ্ববিদ্যালয় প্রশাসন ও ছাত্র সংসদের স্বচ্ছতা নিশ্চিত করা।
- একাডেমিক সেমিনার: প্রতি বিভাগে ৩ মাসে অন্তত একটি।
- পরিবেশ রক্ষা: কার্যকরী বর্জ্য ব্যবস্থাপনা ও জীববৈচিত্র্য রক্ষা।
- ক্লাব অফিস: সকল ক্লাব ও সোসাইটির জন্য অফিসের ব্যবস্থা।
`;
// --- END: constants.tsx ---

// --- START: geminiService.ts ---
let ai = null;
let geminiInitializationError = null;
try {
  ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
} catch (e) {
  geminiInitializationError = "AI service is not configured. The API key is missing.";
  console.warn(geminiInitializationError);
}
const systemInstruction = `
আপনি সাঈদ নাঈম মুহাম্মদ আসিফ-এর একজন সহায়ক, ইতিবাচক এবং জ্ঞানী AI সহকারী। তিনি চাকসু নির্বাচনে দপ্তর সম্পাদক পদপ্রার্থী।
আপনার কাজ হলো শুধুমাত্র নিচে দেওয়া তথ্যের উপর ভিত্তি করে তার ইশতেহার সম্পর্কে প্রশ্নের সঠিক এবং সংক্ষিপ্ত উত্তর দেওয়া।
কোনো নীতি বা অবস্থান নিজে থেকে তৈরি করবেন না। প্রতিক্রিয়া অনুপ্রেরণামূলক এবং উৎসাহব্যঞ্জক হবে।
যদি এমন কোনো প্রশ্ন করা হয় যার উত্তর প্রদত্ত তথ্য থেকে দেওয়া সম্ভব নয়, তাহলে উত্তর দিন:
"এটি একটি চমৎকার প্রশ্ন। আসিফ সবসময় সম্প্রদায়ের কাছ থেকে এমন গুরুত্বপূর্ণ বিষয় শুনতে আগ্রহী এবং তিনি এখনও তার নির্দিষ্ট অবস্থান তৈরি করছেন। তিনি বিশ্বাস করেন যে সর্বোত্তম সমাধান খুঁজে বের করার জন্য উন্মুক্ত সংলাপ প্রয়োজন।"
আসিফ সম্পর্কে ব্যক্তিগতভাবে জিজ্ঞাসা করা হলে, সংক্ষিপ্ত এবং পেশাদার উত্তর দিন, জনসেবায় তার উৎসর্গের উপর মনোযোগ দিন।
কখনোই উল্লেখ করবেন না যে আপনি একজন AI। একজন জ্ঞানী নির্বাচনী কর্মীর মতো উত্তর দিন।

এখানে আসিফ-এর ইশতেহার:
${ASIF_PLATFORM_SUMMARY}
`;
const askLailaAI = async (question) => {
  if (geminiInitializationError || !ai) {
    throw new Error("AI সহকারীর কাছ থেকে প্রতিক্রিয়া পেতে ব্যর্থ হয়েছে।");
  }
  try {
    const response = await ai.models.generateContent({
      model: "gemini-2.5-flash",
      contents: question,
      config: {
        systemInstruction: systemInstruction,
        temperature: 0.5,
        topP: 0.95,
      },
    });
    return response.text;
  } catch (error) {
    console.error("Error calling Gemini API:", error);
    throw new Error("AI সহকারীর কাছ থেকে প্রতিক্রিয়া পেতে ব্যর্থ হয়েছে।");
  }
};
// --- END: geminiService.ts ---


// --- START: Components ---

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);
  const handleNavClick = (e) => {
    e.preventDefault();
    const href = e.currentTarget.getAttribute("href");
    if (href && href.startsWith("#")) {
      const targetId = href.substring(1);
      const element = document.getElementById(targetId);
      if (element) {
        const headerOffset = 80;
        const elementPosition = element.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.scrollY - headerOffset;
        window.scrollTo({ top: offsetPosition, behavior: "smooth" });
      }
    }
    if (isMobileMenuOpen) {
      setIsMobileMenuOpen(false);
    }
  };
  const renderNavLinks = (links, isMobile) => (
    React.createElement("ul", { className: `flex ${isMobile ? "flex-col items-center space-y-4 py-8" : "hidden md:flex md:items-center md:space-x-8"}` },
      links.map((link) => (
        React.createElement("li", { key: link.name },
          React.createElement("a", { href: link.href, onClick: handleNavClick, className: "text-lg font-medium text-white hover:text-campaign-red transition-colors duration-300" }, link.name)
        )
      ))
    )
  );
  return (
    React.createElement("header", { className: "sticky top-0 z-50 bg-campaign-dark bg-opacity-90 backdrop-blur-sm shadow-lg" },
      React.createElement("nav", { className: "container mx-auto px-6 py-4" },
        React.createElement("div", { className: "flex items-center justify-between" },
          React.createElement("a", { href: "#", className: "text-2xl font-bold text-white" }, "আসিফ ২০২৫"),
          React.createElement("div", { className: "hidden md:flex items-center space-x-4" },
            renderNavLinks(NAV_LINKS, false),
            React.createElement("a", { href: "#get-involved", onClick: handleNavClick, className: "bg-campaign-red text-white font-bold py-2 px-6 rounded-md hover:bg-red-700 transition-colors duration-300" }, "যোগ দিন")
          ),
          React.createElement("div", { className: "md:hidden" },
            React.createElement("button", { onClick: () => setIsMobileMenuOpen(!isMobileMenuOpen), className: "text-white focus:outline-none", "aria-label": "Toggle menu" },
              React.createElement("svg", { className: "h-8 w-8", fill: "none", viewBox: "0 0 24 24", stroke: "currentColor" },
                isMobileMenuOpen ?
                  React.createElement("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 2, d: "M6 18L18 6M6 6l12 12" }) :
                  React.createElement("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 2, d: "M4 6h16M4 12h16m-7 6h7" })
              )
            )
          )
        ),
        isMobileMenuOpen && (
          React.createElement("div", { className: "md:hidden mt-4" },
            renderNavLinks(NAV_LINKS, true),
            React.createElement("div", { className: "text-center mt-4" },
              React.createElement("a", { href: "#get-involved", onClick: handleNavClick, className: "bg-campaign-red text-white font-bold py-3 px-8 rounded-md hover:bg-red-700 transition-colors duration-300 w-full inline-block" }, "যোগ দিন")
            )
          )
        )
      )
    )
  );
};

const Hero = () => {
    const handleScrollClick = (e) => {
        e.preventDefault();
        const href = e.currentTarget.getAttribute('href');
        if (href && href.startsWith('#')) {
            const targetId = href.substring(1);
            const element = document.getElementById(targetId);
            if (element) {
                const headerOffset = 80;
                const elementPosition = element.getBoundingClientRect().top;
                const offsetPosition = elementPosition + window.scrollY - headerOffset;
                window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
            }
        }
    };
    return (
        React.createElement("section", { className: "relative h-screen flex items-center justify-center text-white bg-cover bg-center bg-no-repeat", style: { backgroundImage: "url('../assets/images/hero-background.jpg')" } },
            React.createElement("div", { className: "absolute inset-0 bg-black opacity-60" }),
            React.createElement("div", { className: "relative z-10 text-center px-4 flex flex-col items-center" },
                React.createElement("div", { className: "mb-8" },
                    React.createElement("p", { className: "text-xl md:text-2xl font-semibold tracking-wider" }, "আসন্ন চাকসু নির্বাচন ২০২৫"),
                    React.createElement("h1", { className: "text-5xl md:text-7xl font-extrabold tracking-tight leading-tight mt-2" }, "সাঈদ নাঈম মুহাম্মদ আসিফ"),
                    React.createElement("p", { className: "mt-2 md:mt-4 text-2xl md:text-4xl font-medium tracking-wider" }, "দপ্তর সম্পাদক পদপ্রার্থী")
                ),
                React.createElement("div", { className: "flex items-center gap-6 mt-4" },
                    React.createElement("div", { className: "bg-white text-campaign-dark p-4 border-4 border-campaign-red rounded-lg text-center" },
                        React.createElement("p", { className: "text-xl font-bold" }, "ব্যালট নং"),
                        React.createElement("p", { className: "text-7xl font-extrabold" }, "১৬")
                    ),
                    React.createElement("a", { href: "#issues", onClick: handleScrollClick, className: "bg-campaign-red text-white font-bold text-lg py-4 px-10 rounded-md hover:bg-red-700 transition-transform duration-300 transform hover:scale-105" }, "আমার ইশতেহার দেখুন")
                )
            )
        )
    );
};

const Intro = () => {
    return (
        React.createElement("section", { className: "bg-campaign-light text-campaign-dark py-20 sm:py-24" },
            React.createElement("div", { className: "container mx-auto px-6" },
                React.createElement("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-12 items-center" },
                    React.createElement("div", { className: "md:order-2 flex justify-center items-center" },
                        React.createElement("img", { src: "../assets/images/asif-portrait-casual.jpg", alt: "সাঈদ নাঈম মুহাম্মদ আসিফ", className: "w-full max-w-sm rounded-lg shadow-2xl" })
                    ),
                    React.createElement("div", { className: "md:order-1" },
                        React.createElement("h2", { className: "text-4xl md:text-5xl font-bold text-campaign-dark mb-6" }, "কেন আমাকে ভোট দিবেন না?"),
                        React.createElement("ul", { className: "space-y-4 text-lg text-gray-700 leading-relaxed" },
                            React.createElement("li", { className: "flex items-start" }, React.createElement("span", { className: "text-campaign-red font-bold mr-3 mt-1" }, "১."), React.createElement("span", null, "জুলাই বেঁচে আমি কোথাও পা দিবনা!")),
                            React.createElement("li", { className: "flex items-start" }, React.createElement("span", { className: "text-campaign-red font-bold mr-3 mt-1" }, "২."), React.createElement("span", null, "আন্তঃব্যক্তিক দ্বন্দ্বে আমাকে পাবেন না।")),
                            React.createElement("li", { className: "flex items-start" }, React.createElement("span", { className: "text-campaign-red font-bold mr-3 mt-1" }, "৩."), React.createElement("span", null, "আমি কোনো রাজনৈতিক দলের সঙ্গে যুক্ত নই, লেজুড়বৃত্তি আমি চরমভাবে ঘৃণা করি।")),
                            React.createElement("li", { className: "flex items-start" }, React.createElement("span", { className: "text-campaign-red font-bold mr-3 mt-1" }, "৪."), React.createElement("span", null, "আমার সিদ্ধান্তগুলো বিশ্ববিদ্যালয়ের বাহির থেকে আসবেনা, তাই গুরুত্বপূর্ণ সিদ্ধান্তের সময় আপনাদেরকে বিরক্ত করা লাগতে পারে।"))
                        )
                    )
                )
            )
        )
    );
};

const IssueCard = ({ icon, title, description }) => {
    const [isOpen, setIsOpen] = React.useState(false);
    const uniqueId = `issue-desc-${title.replace(/\s+/g, '-')}`;
    return (
        React.createElement("div", { className: "bg-campaign-secondary p-8 rounded-lg shadow-lg border border-gray-700 cursor-pointer transition-all duration-300 hover:border-campaign-red", onClick: () => setIsOpen(!isOpen), onKeyPress: (e) => (e.key === 'Enter' || e.key === ' ') && setIsOpen(!isOpen), role: "button", tabIndex: 0, "aria-expanded": isOpen, "aria-controls": uniqueId },
            React.createElement("div", { className: "flex justify-between items-center" },
                React.createElement("div", { className: "flex items-center" },
                    React.createElement("div", { className: "flex-shrink-0" }, icon),
                    React.createElement("h3", { className: "text-2xl font-bold text-white ml-5" }, title)
                ),
                React.createElement("div", { className: "ml-4 flex-shrink-0" },
                    React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", className: `h-7 w-7 text-gray-400 transform transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`, fill: "none", viewBox: "0 0 24 24", stroke: "currentColor" },
                        React.createElement("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 2, d: "M19 9l-7 7-7-7" })
                    )
                )
            ),
            React.createElement("div", { id: uniqueId, className: `overflow-hidden transition-all duration-500 ease-in-out ${isOpen ? 'max-h-96 mt-6 pt-6 border-t border-gray-600' : 'max-h-0'}` },
                React.createElement("p", { className: "text-gray-300 leading-relaxed" }, description)
            )
        )
    );
};
const Issues = () => {
    return (
        React.createElement("section", { id: "issues", className: "py-20 sm:py-24 bg-campaign-dark" },
            React.createElement("div", { className: "container mx-auto px-6 text-center" },
                React.createElement("h2", { className: "text-4xl md:text-5xl font-bold text-white mb-4" }, "আমার ইশতেহার"),
                React.createElement("p", { className: "text-lg text-gray-300 max-w-3xl mx-auto mb-16" }, "বিশ্ববিদ্যালয়ের শিক্ষার্থীদের সুযোগ-সুবিধা বৃদ্ধি ও সার্বিক উন্নয়নের লক্ষ্যে আমার সুস্পষ্ট পরিকল্পনা। বিস্তারিত জানতে প্রতিটি ইশতেহারে ক্লিক করুন।"),
                React.createElement("div", { className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 text-left" },
                    ISSUES_DATA.map((issue) => (React.createElement(IssueCard, { key: issue.title, ...issue })))
                )
            )
        )
    );
};

const About = () => {
    return (
        React.createElement("section", { id: "about", className: "py-20 sm:py-24 bg-campaign-secondary" },
            React.createElement("div", { className: "container mx-auto px-6" },
                React.createElement("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-12 items-center" },
                    React.createElement("div", { className: "flex justify-center items-center" },
                        React.createElement("img", { src: "../assets/images/asif-portrait-formal.jpg", alt: "সাঈদ নাঈম মুহাম্মদ আসিফ", className: "w-full max-w-md rounded-lg shadow-2xl" })
                    ),
                    React.createElement("div", null,
                        React.createElement("h2", { className: "text-4xl md:text-5xl font-bold text-white mb-6" }, "আমার পরিচিতি"),
                        React.createElement("p", { className: "text-lg text-gray-300 leading-relaxed mb-4" }, "আমি সাঈদ নাঈম মুহাম্মদ আসিফ, আই.ই.আর. (ইনস্টিটিউট অফ এডুকেশন এন্ড রিসার্চ) এর একজন নিয়মিত ছাত্র। আমি সাধারণ শিক্ষার্থীদের অধিকার ও দাবি আদায়ে সর্বদা সোচ্চার থাকতে প্রতিজ্ঞাবদ্ধ।"),
                        React.createElement("p", { className: "text-lg text-gray-300 leading-relaxed mb-4" }, "ক্যাম্পাসের বিভিন্ন সমস্যা দেখে এবং শিক্ষার্থীদের দুর্ভোগ উপলব্ধি করে আমি ছাত্র সংসদ নির্বাচনে অংশ নেওয়ার সিদ্ধান্ত নিয়েছি। আমি বিশ্বাস করি, একটি কার্যকরী ছাত্র সংসদ শিক্ষার্থীদের জীবনমান উন্নত করতে এবং প্রশাসনের সাথে একটি সেতুবন্ধন তৈরি করতে পারে।"),
                        React.createElement("p", { className: "text-lg text-gray-300 leading-relaxed" }, "আমি কোনো প্রতিষ্ঠিত রাজনীতিবিদ নই। আমি আপনাদেরই একজন, সাধারণ শিক্ষার্থীদের মধ্য থেকে উঠে আসা একজন প্রতিনিধি, যে ক্যাম্পাসে ইতিবাচক পরিবর্তন আনতে দৃঢ়প্রতিজ্ঞ।")
                    )
                )
            )
        )
    );
};

const Gallery = () => {
  const images = [
    { src: '../assets/images/gallery-1.jpg', alt: 'Campaign event photo 1' },
    { src: '../assets/images/gallery-2.jpg', alt: 'Campaign event photo 2' },
    { src: '../assets/images/gallery-3.jpg', alt: 'Campaign event photo 3' },
    { src: '../assets/images/gallery-4.jpg', alt: 'Campaign event photo 4' },
    { src: '../assets/images/gallery-5.jpg', alt: 'Campaign event photo 5' },
  ];
  const [isLightboxOpen, setIsLightboxOpen] = React.useState(false);
  const [currentImageIndex, setCurrentImageIndex] = React.useState(0);

  const openLightbox = (index) => {
    setCurrentImageIndex(index);
    setIsLightboxOpen(true);
  };
  const closeLightbox = () => setIsLightboxOpen(false);
  const showNextImage = (e) => {
    e?.stopPropagation();
    setCurrentImageIndex((prev) => (prev + 1) % images.length);
  };
  const showPrevImage = (e) => {
    e?.stopPropagation();
    setCurrentImageIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  React.useEffect(() => {
    const handleKeyDown = (e) => {
      if (!isLightboxOpen) return;
      if (e.key === 'ArrowRight') showNextImage();
      else if (e.key === 'ArrowLeft') showPrevImage();
      else if (e.key === 'Escape') closeLightbox();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isLightboxOpen]);

  return (
    React.createElement("section", { id: "gallery", className: "py-20 sm:py-24 bg-campaign-dark" },
      React.createElement("div", { className: "container mx-auto px-6 text-center" },
        React.createElement("h2", { className: "text-4xl md:text-5xl font-bold text-white mb-4" }, "আমাদের পথচলা"),
        React.createElement("p", { className: "text-lg text-gray-300 max-w-3xl mx-auto mb-16" }, "ক্যাম্পাসের বিভিন্ন মুহূর্ত এবং আপনাদের সাথে কাটানো কিছু স্মৃতি।"),
        React.createElement("div", { className: "grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4" },
          images.map((image, index) => (
            React.createElement("div", { key: index, className: "overflow-hidden rounded-lg shadow-lg group cursor-pointer", onClick: () => openLightbox(index), onKeyPress: (e) => e.key === 'Enter' && openLightbox(index), role: "button", tabIndex: 0, "aria-label": `View image ${index + 1}: ${image.alt}` },
              React.createElement("img", { src: image.src, alt: image.alt, className: "w-full h-full object-cover aspect-square transition-transform duration-500 ease-in-out group-hover:scale-110" })
            )
          ))
        )
      ),
      isLightboxOpen && (
        React.createElement("div", { className: "fixed inset-0 z-[100] flex items-center justify-center bg-black bg-opacity-80 backdrop-blur-sm transition-opacity duration-300 animate-fade-in", onClick: closeLightbox, role: "dialog", "aria-modal": "true", "aria-label": "Image gallery" },
          React.createElement("div", { className: "relative max-w-4xl w-full max-h-[90vh] p-4", onClick: (e) => e.stopPropagation() },
            React.createElement("img", { src: images[currentImageIndex].src, alt: images[currentImageIndex].alt, className: "object-contain w-full h-full max-h-[85vh] rounded-lg shadow-2xl" }),
            React.createElement("button", { onClick: closeLightbox, className: "absolute top-0 right-0 m-4 text-white bg-black bg-opacity-50 rounded-full p-2 hover:bg-opacity-75 transition-all", "aria-label": "Close" }, React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", className: "h-8 w-8", fill: "none", viewBox: "0 0 24 24", stroke: "currentColor" }, React.createElement("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 2, d: "M6 18L18 6M6 6l12 12" }))),
            React.createElement("button", { onClick: showPrevImage, className: "absolute left-0 top-1/2 -translate-y-1/2 m-4 text-white bg-black bg-opacity-50 rounded-full p-2 hover:bg-opacity-75 transition-all", "aria-label": "Previous image" }, React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", className: "h-8 w-8", fill: "none", viewBox: "0 0 24 24", stroke: "currentColor" }, React.createElement("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 2, d: "M15 19l-7-7 7-7" }))),
            React.createElement("button", { onClick: showNextImage, className: "absolute right-0 top-1/2 -translate-y-1/2 m-4 text-white bg-black bg-opacity-50 rounded-full p-2 hover:bg-opacity-75 transition-all", "aria-label": "Next image" }, React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", className: "h-8 w-8", fill: "none", viewBox: "0 0 24 24", stroke: "currentColor" }, React.createElement("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 2, d: "M9 5l7 7-7 7" })))
          )
        )
      )
    )
  );
};

const CallToAction = () => {
    const handleSubmit = (e) => {
        e.preventDefault();
        const email = e.currentTarget.elements.namedItem('email').value;
        alert(`ধন্যবাদ ${email}! আমাদের সাথে যুক্ত থাকার জন্য।`);
        e.currentTarget.reset();
    };
    return (
        React.createElement("section", { id: "get-involved", className: "relative py-20 sm:py-32 bg-cover bg-center", style: { backgroundImage: "url('../assets/images/cta-background.jpg')" } },
            React.createElement("div", { className: "absolute inset-0 bg-campaign-dark opacity-80" }),
            React.createElement("div", { className: "relative container mx-auto px-6 text-center text-white" },
                React.createElement("h2", { className: "text-4xl md:text-5xl font-bold mb-4" }, "যুক্ত হোন, পরিবর্তন আনুন"),
                React.createElement("p", { className: "text-lg max-w-2xl mx-auto mb-8" }, "এই পথচলা আপনার মতো সাধারণ শিক্ষার্থীদের শক্তি নিয়েই। আপডেট পেতে এবং এই ঐতিহাসিক আন্দোলনের অংশ হতে সাইন আপ করুন।"),
                React.createElement("form", { onSubmit: handleSubmit, className: "max-w-xl mx-auto flex flex-col sm:flex-row gap-4" },
                    React.createElement("label", { htmlFor: "email", className: "sr-only" }, "ইমেইল ঠিকানা"),
                    React.createElement("input", { type: "email", id: "email", name: "email", required: true, placeholder: "আপনার ইমেইল ঠিকানা দিন", className: "flex-grow w-full px-5 py-4 rounded-md text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-campaign-red" }),
                    React.createElement("button", { type: "submit", className: "bg-campaign-red text-white font-bold text-lg py-4 px-10 rounded-md hover:bg-red-700 transition-colors duration-300" }, "যুক্ত হোন")
                )
            )
        )
    );
};

const AIAssistant = () => {
  const [query, setQuery] = React.useState('');
  const [response, setResponse] = React.useState('');
  const [isLoading, setIsLoading] = React.useState(false);
  const [error, setError] = React.useState('');

  const handleSubmit = async (e) => {
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
    React.createElement("section", { id: "ask-ai", className: "py-20 sm:py-24 bg-campaign-light text-campaign-dark" },
      React.createElement("div", { className: "container mx-auto px-6 max-w-3xl text-center" },
        React.createElement("h2", { className: "text-4xl md:text-5xl font-bold mb-4" }, "জিজ্ঞাসা করুন AI সহকারীকে"),
        React.createElement("p", { className: "text-lg text-gray-700 mb-8" }, "আসিফ-এর ইশতেহার সম্পর্কে কোনো প্রশ্ন আছে? আমাদের AI চালিত সহকারীর কাছ থেকে तुरुन्त উত্তর পান।"),
        React.createElement("form", { onSubmit: handleSubmit, className: "flex flex-col gap-4" },
          React.createElement("textarea", { value: query, onChange: (e) => setQuery(e.target.value), placeholder: "আইডি কার্ড, একাডেমিক মেইল, পরিবহন বা অন্য যেকোনো বিষয় সম্পর্কে জিজ্ঞাসা করুন...", className: "w-full p-4 rounded-md border border-gray-300 text-lg focus:outline-none focus:ring-2 focus:ring-campaign-red", rows: 3, disabled: isLoading }),
          React.createElement("button", { type: "submit", disabled: isLoading, className: "bg-campaign-dark text-white font-bold text-lg py-3 px-8 rounded-md hover:bg-gray-800 transition-colors duration-300 disabled:bg-gray-500 disabled:cursor-not-allowed" }, isLoading ? 'ভাবছে...' : 'উত্তর জানুন')
        ),
        React.createElement("div", { className: "mt-6 text-center" },
          React.createElement("p", { className: "text-gray-600" },
            "অথবা, ",
            React.createElement("a", { href: "https://forms.gle/R2QcbyDLin4iMMTQ9", target: "_blank", rel: "noopener noreferrer", className: "text-campaign-red font-semibold underline hover:text-red-700" }, "এই গুগল ফর্মের মাধ্যমে আপনার প্রশ্ন জমা দিন।")
          )
        ),
        error && (React.createElement("div", { className: "mt-8 p-4 bg-red-100 text-red-700 rounded-md text-left" }, React.createElement("p", null, error))),
        response && (
          React.createElement("div", { className: "mt-8 p-6 bg-white rounded-lg shadow-md text-left border-l-4 border-campaign-red" },
            React.createElement("h3", { className: "text-xl font-bold mb-2 text-campaign-dark" }, "AI সহকারীর উত্তর:"),
            React.createElement("p", { className: "text-gray-700 whitespace-pre-wrap" }, response)
          )
        )
      )
    )
  );
};

const SocialIcon = ({ href, children }) => (
  React.createElement("a", { href, target: "_blank", rel: "noopener noreferrer", className: "text-gray-400 hover:text-white transition-colors duration-300" }, children)
);
const Footer = () => {
  return (
    React.createElement("footer", { className: "bg-campaign-dark text-white border-t border-gray-700" },
      React.createElement("div", { className: "container mx-auto px-6 py-12" },
        React.createElement("div", { className: "flex flex-col md:flex-row justify-between items-center text-center md:text-left" },
          React.createElement("div", { className: "mb-6 md:mb-0" },
            React.createElement("h3", { className: "text-2xl font-bold" }, "সাঈদ নাঈম মুহাম্মদ আসিফ"),
            React.createElement("p", { className: "text-gray-400 mt-2" }, "চাকসু নির্বাচন ২০২৫ উপলক্ষে প্রচারিত।")
          ),
          React.createElement("div", { className: "flex space-x-6" },
            React.createElement(SocialIcon, { href: "https://www.facebook.com/share/19v63Ujv29/" }, React.createElement("svg", { className: "w-8 h-8", fill: "currentColor", viewBox: "0 0 24 24", "aria-hidden": "true" }, React.createElement("path", { fillRule: "evenodd", d: "M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z", clipRule: "evenodd" }))),
            React.createElement(SocialIcon, { href: "mailto:sayednayemasif@gmail.com" }, React.createElement("svg", { className: "w-8 h-8", fill: "currentColor", viewBox: "0 0 24 24", "aria-hidden": "true" }, React.createElement("path", { d: "M2.003 5.884L10 11.882l7.997-5.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" }), React.createElement("path", { d: "M18 8.118l-8 6-8-6V16a2 2 0 002 2h12a2 2 0 002-2V8.118z" }))),
            React.createElement(SocialIcon, { href: "#" }, React.createElement("svg", { className: "w-8 h-8", fill: "currentColor", viewBox: "0 0 24 24", "aria-hidden": "true" }, React.createElement("path", { fillRule: "evenodd", d: "M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.024.06 1.378.06 3.808s-.012 2.784-.06 3.808c-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.024.048-1.378.06-3.808.06s-2.784-.013-3.808-.06c-1.064-.049-1.791-.218-2.427.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.048-1.024-.06-1.378-.06-3.808s.012-2.784.06-3.808c.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 016.345 2.525c.636-.247 1.363-.416 2.427-.465C9.793 2.013 10.147 2 12.315 2zm0 1.62c-2.403 0-2.748.01-3.727.058-.975.045-1.504.207-1.857.344-.467.182-.86.399-1.249.788-.389.389-.607.782-.788 1.249-.137.353-.3.882-.344 1.857-.048.98-.058 1.324-.058 3.727s.01 2.748.058 3.727c.045.975.207 1.504.344 1.857.182.466.399.86.788 1.249.389.389.782.607 1.249.788.353.137.882.3 1.857.344.98.048 1.324.058 3.727.058s2.748-.01 3.727-.058c.975-.045 1.504-.207 1.857-.344.467-.182.86-.399 1.249-.788.389-.389.607-.782.788-1.249.137.353.3-.882.344-1.857.048-.98.058-1.324.058-3.727s-.01-2.748-.058-3.727c-.045-.975-.207-1.504-.344-1.857a3.295 3.295 0 00-.788-1.249 3.295 3.295 0 00-1.249-.788c-.353-.137-.882-.3-1.857-.344-.98-.048-1.324-.058-3.727-.058zM12 6.865a5.135 5.135 0 100 10.27 5.135 5.135 0 000-10.27zm0 8.468a3.333 3.333 0 110-6.666 3.333 3.333 0 010 6.666zm5.338-9.87a1.2 1.2 0 100 2.4 1.2 1.2 0 000-2.4z", clipRule: "evenodd" })))
          )
        ),
        React.createElement("div", { className: "mt-8 border-t border-gray-700 pt-8 text-center text-gray-500 text-sm" },
          React.createElement("p", null, "Designed by Sanjidul Alam Chowdhury"),
          React.createElement("p", { className: "mt-1" }, "© 2025 সকল স্বত্ব সংরক্ষিত।")
        )
      )
    )
  );
};

// --- END: Components ---


// --- START: App.tsx ---
const App = () => {
  return (
    React.createElement("div", { className: "bg-campaign-dark text-campaign-light font-sans" },
      React.createElement(Header, null),
      React.createElement("main", null,
        React.createElement(Hero, null),
        React.createElement(Intro, null),
        React.createElement(Issues, null),
        React.createElement(About, null),
        React.createElement(Gallery, null),
        React.createElement(CallToAction, null),
        React.createElement(AIAssistant, null)
      ),
      React.createElement(Footer, null)
    )
  );
};
// --- END: App.tsx ---

const rootElement = document.getElementById("root");
if (!rootElement) {
  throw new Error("Could not find root element to mount to");
}
const root = ReactDOM.createRoot(rootElement);
root.render(React.createElement(React.StrictMode, null, React.createElement(App, null)));
