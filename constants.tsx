
import React from 'react';
import type { NavLink, Issue } from './types';

export const NAV_LINKS: NavLink[] = [
  { name: 'ইশতেহার', href: '#issues' },
  { name: 'পরিচিতি', href: '#about' },
  { name: 'যুক্ত হোন', href: '#get-involved' },
  { name: 'জিজ্ঞাসা', href: '#ask-ai' },
];

export const ISSUES_DATA: Issue[] = [
  {
    icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-campaign-red" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M10 6H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V8a2 2 0 00-2-2h-5m-4 0V5a2 2 0 012-2h4a2 2 0 012 2v1m-4 0h4" /></svg>,
    title: 'One ID Card, All Service',
    description: 'বিশ্ববিদ্যালয়ের শিক্ষার্থী হিসেবে মেডিকেল, পরিবহন, একাডেমিক সহ সকল সেবা এক আইডি কার্ডের আওতাভুক্ত করা।'
  },
  {
    icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-campaign-red" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207" /></svg>,
    title: 'একাডেমিক মেইল',
    description: 'আইডি পাওয়ার সাথে প্রত্যেক শিক্ষার্থীকে একাডেমিক মেইল প্রদান করা, যেমন: 10203040@std.cu.ac.bd।'
  },
  {
    icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-campaign-red" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v.01" /></svg>,
    title: 'ভুল যার জরিমানা তার',
    description: 'প্রশাসনের ভুলের মাশুল শিক্ষার্থীরা আর দিবেনা। ছাত্রছাত্রীদের উপর থেকে অন্যায্য জরিমানা বাতিল করা।'
  },
  {
    icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-campaign-red" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z" /></svg>,
    title: 'সহজ ব্যাংকিং ব্যবস্থা',
    description: 'শিক্ষার্থীদের জন্য সহজ ও কার্যকরী ব্যাংকিং ব্যবস্থা উন্নয়ন করা (বিকাশ, নগদ অন্তর্ভুক্ত করে)।'
  },
  {
    icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-campaign-red" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>,
    title: 'কার্যকরী হেল্পডেস্ক',
    description: 'বিশেষ চাহিদাসম্পন্ন শিক্ষার্থীদের জন্য প্রশাসনিক ভবনে কার্যকরী হেল্পডেস্ক স্থাপন করা।'
  },
  {
    icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-campaign-red" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>,
    title: 'এটেন্ডেন্স সিস্টেম শিথিল',
    description: 'শিক্ষার্থীদের উপর থেকে ক্লাসে উপস্থিতির কঠোর নিয়ম শিথিল করে জ্ঞানارجনে উৎসাহিত করা।'
  },
  {
    icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-campaign-red" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" /></svg>,
    title: 'উন্নত সেবা নিশ্চিতকরণ',
    description: 'শিক্ষার্থীদের জন্য উন্নত ও নিরাপদ খাদ্য, পরিবহন ও সেনিটারি ব্যবস্থাপনা নিশ্চিত করা।'
  },
  {
    icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-campaign-red" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7l8-4 8 4m-8 4v10" /></svg>,
    title: 'ডিজিটাল ডাটাবেজ',
    description: 'প্রশাসনিক হয়রানি বন্ধে ডিজিটাল ডাটাবেজ স্থাপন, ফর্মফিলাপ ও সনদ আবেদনের যাবতীয় কাজ অনলাইন নির্ভর করা।'
  },
  {
    icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-campaign-red" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 10l-6 6" /></svg>,
    title: 'জবাবদিহিতা ও স্বচ্ছতা',
    description: 'বিশ্ববিদ্যালয় প্রশাসন ও ছাত্র সংসদের কার্যক্রমের জবাবদিহিতা ও স্বচ্ছতা নিশ্চিত করা।'
  },
  {
    icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-campaign-red" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path d="M12 14l9-5-9-5-9 5 9 5z" /><path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-5.998 12.078 12.078 0 01.665-6.479L12 14z" /><path strokeLinecap="round" strokeLinejoin="round" d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-5.998 12.078 12.078 0 01.665-6.479L12 14z" /></svg>,
    title: 'একাডেমিক সেমিনার',
    description: 'প্রত্যেক ডিপার্টমেন্টে প্রতি ৩ মাসে অন্তত একবার একাডেমিক বিষয় সংশ্লিষ্ট সেমিনার আয়োজন করা।'
  },
  {
    icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-campaign-red" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M12 6.25278C12 6.25278 10.7431 3.25 8 3.25C5.25688 3.25 3 5.50688 3 8.25C3 11.75 8 16.25 12 20.25C16 16.25 21 11.75 21 8.25C21 5.50688 18.7431 3.25 16 3.25C13.2569 3.25 12 6.25278 12 6.25278Z" /></svg>,
    title: 'পরিবেশ ও জীববৈচিত্র্য রক্ষা',
    description: 'বিশ্ববিদ্যালয়ের পরিবেশ ও জীববৈচিত্র্য রক্ষায় কার্যকরী পদক্ষেপ গ্রহণ করা, যেমন সাশ্রয়ী ওয়েস্ট ম্যানেজমেন্ট।'
  },
  {
    icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-campaign-red" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" /></svg>,
    title: 'ক্লাব ও সোসাইটির জন্য অফিস',
    description: 'বিশ্ববিদ্যালয়ের সকল ক্লাব ও সোসাইটিসমূহের কার্যক্রম সঠিকভাবে পরিচালনার জন্য অফিসের ব্যবস্থা করা।'
  }
];

export const ASIF_PLATFORM_SUMMARY = `
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
