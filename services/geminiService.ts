import { GoogleGenAI } from "@google/genai";
import { ASIF_PLATFORM_SUMMARY } from '../constants';

let ai: any = null;
let geminiInitializationError: string | null = null;

try {
  // This line will throw a ReferenceError if 'process' is not defined in the browser.
  // We catch it to allow the rest of the application to load.
  // The execution environment is expected to replace process.env.API_KEY.
  // If it doesn't, the AI feature will be gracefully disabled.
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

export const askLailaAI = async (question: string): Promise<string> => {
  if (geminiInitializationError || !ai) {
    throw new Error("AI সহকারীর কাছ থেকে প্রতিক্রিয়া পেতে ব্যর্থ হয়েছে।");
  }
  
  try {
    const response = await ai.models.generateContent({
      model: 'gemini-2.5-flash',
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