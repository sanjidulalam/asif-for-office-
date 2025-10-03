import React from 'react';

const SocialIcon: React.FC<{ href: string; children: React.ReactNode }> = ({ href, children }) => (
  <a href={href} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors duration-300">
    {children}
  </a>
);

const Footer: React.FC = () => {
  return (
    <footer className="bg-campaign-dark text-white border-t border-gray-700">
      <div className="container mx-auto px-6 py-12">
        <div className="flex flex-col md:flex-row justify-between items-center text-center md:text-left">
          <div className="mb-6 md:mb-0">
            <h3 className="text-2xl font-bold">সাঈদ নাঈম মুহাম্মদ আসিফ</h3>
            <p className="text-gray-400 mt-2">চাকসু নির্বাচন ২০২৫ উপলক্ষে প্রচারিত।</p>
          </div>
          <div className="flex space-x-6">
            <SocialIcon href="https://www.facebook.com/share/19v63Ujv29/">
              <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" /></svg>
            </SocialIcon>
             <SocialIcon href="mailto:sayednayemasif@gmail.com">
                <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path d="M2.003 5.884L10 11.882l7.997-5.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" /><path d="M18 8.118l-8 6-8-6V16a2 2 0 002 2h12a2 2 0 002-2V8.118z" /></svg>
            </SocialIcon>
            <SocialIcon href="#">
                <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.024.06 1.378.06 3.808s-.012 2.784-.06 3.808c-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.024.048-1.378.06-3.808.06s-2.784-.013-3.808-.06c-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.048-1.024-.06-1.378-.06-3.808s.012-2.784.06-3.808c.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 016.345 2.525c.636-.247 1.363-.416 2.427-.465C9.793 2.013 10.147 2 12.315 2zm0 1.62c-2.403 0-2.748.01-3.727.058-.975.045-1.504.207-1.857.344-.467.182-.86.399-1.249.788-.389.389-.607.782-.788 1.249-.137.353-.3.882-.344 1.857-.048.98-.058 1.324-.058 3.727s.01 2.748.058 3.727c.045.975.207 1.504.344 1.857.182.466.399.86.788 1.249.389.389.782.607 1.249.788.353.137.882.3 1.857.344.98.048 1.324.058 3.727.058s2.748-.01 3.727-.058c.975-.045 1.504-.207 1.857-.344.467-.182.86-.399 1.249-.788.389-.389.607-.782.788-1.249.137.353.3-.882.344-1.857.048-.98.058-1.324.058-3.727s-.01-2.748-.058-3.727c-.045-.975-.207-1.504-.344-1.857a3.295 3.295 0 00-.788-1.249 3.295 3.295 0 00-1.249-.788c-.353-.137-.882-.3-1.857-.344-.98-.048-1.324-.058-3.727-.058zM12 6.865a5.135 5.135 0 100 10.27 5.135 5.135 0 000-10.27zm0 8.468a3.333 3.333 0 110-6.666 3.333 3.333 0 010 6.666zm5.338-9.87a1.2 1.2 0 100 2.4 1.2 1.2 0 000-2.4z" clipRule="evenodd" /></svg>
            </SocialIcon>
          </div>
        </div>
        <div className="mt-8 border-t border-gray-700 pt-8 text-center text-gray-500 text-sm">
          <p>Designed by Sanjidul Alam Chowdhury</p>
          <p className="mt-1">&copy; 2025 সকল স্বত্ব সংরক্ষিত।</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
