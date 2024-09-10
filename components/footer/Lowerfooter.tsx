import React from 'react';

const LowerFooter = () => {
  return (
    <footer className="w-full bg-neutral-50 py-8">
      <div className="px-4 md:px-8 lg:px-16 xl:px-[100px]">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-7">
          <div>
            <h3 className="font-bold text-gray-900 mb-3">Support</h3>
            <ul className="space-y-2 text-gray-600">
              <li>Help Centre</li>
              <li>AirCover</li>
              <li>Anti-discrimination</li>
              <li>Disability support</li>
              <li>Cancellation options</li>
              <li>Report neighbourhood concern</li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold text-gray-900 mb-3">Hosting</h3>
            <ul className="space-y-2 text-gray-600">
              <li>KH_Estates your home</li>
              <li>AirCover for Hosts</li>
              <li>Hosting resources</li>
              <li>Community forum</li>
              <li>Hosting responsibly</li>
              <li>Join a free Hosting class</li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold text-gray-900 mb-3">KH_Estates</h3>
            <ul className="space-y-2 text-gray-600">
              <li>Newsroom</li>
              <li>New features</li>
              <li>Careers</li>
              <li>Investors</li>
              <li>KH_Estates.org emergency stays</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="border-t border-gray-200 mt-6 pt-6">
        <div className="px-4 md:px-8 lg:px-16 xl:px-[100px] flex flex-col md:flex-row justify-between items-center text-gray-600">
          <div className="text-sm mb-4 md:mb-0">
            © 2024 KH_Estates, Inc. · <a href="#" className="hover:underline">Privacy</a> · <a href="#" className="hover:underline">Terms</a> · <a href="#" className="hover:underline">Sitemap</a> · <a href="#" className="hover:underline">Company details</a>
          </div>
          <div className="flex space-x-6">
          <button className="flex items-center text-sm hover:underline">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" viewBox="0 0 20 20" fill="currentColor">
                <path d="M10 10.707l4.293-4.293a1 1 0 00-1.414-1.414L10 7.586 7.121 4.707a1 1 0 00-1.414 1.414L8.293 9.707l-2.707 2.707a1 1 0 001.414 1.414L10 10.707z" />
              </svg>
              English (IN)
            </button>
            <button className="flex items-center text-sm hover:underline">
              ₹ INR
            </button>
            <a href="#" className="hover:underline"> 
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0a12 12 0 1012 12A12 12 0 0012 0zm4.35 12.1h-3.18V22.5h-4.23V12.1H7.9V9.29h1.04V7.63C8.93 5.08 10 4 12.25 4a13.34 13.34 0 012 .13V6.8h-1.38a1.19 1.19 0 00-1.36 1.28v1.2h2.77l-.29 2.81z"/></svg>
            </a>
            <a href="#" className="hover:underline">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2.04C6.48 2.04 2 6.5 2 12c0 4.8 3.29 8.79 7.73 9.89.56.1.77-.25.77-.55v-1.91c-3.14.69-3.8-1.52-3.8-1.52-.52-1.31-1.28-1.65-1.28-1.65-1.05-.72.08-.7.08-.7 1.17.08 1.79 1.2 1.79 1.2 1.03 1.76 2.72 1.25 3.38.95.1-.75.4-1.25.73-1.54-2.51-.29-5.15-1.26-5.15-5.6 0-1.24.44-2.25 1.17-3.04-.12-.3-.51-1.52.1-3.17 0 0 .96-.31 3.16 1.16.91-.25 1.88-.38 2.85-.38.97 0 1.94.13 2.85.38 2.2-1.47 3.16-1.16 3.16-1.16.61 1.65.22 2.87.1 3.17.73.79 1.17 1.8 1.17 3.04 0 4.35-2.64 5.3-5.15 5.6.41.35.77 1.03.77 2.08v3.08c0 .3.21.65.77.55C18.71 20.79 22 16.8 22 12c0-5.5-4.48-9.96-10-9.96z"/></svg>
            </a>
            <a href="#" className="hover:underline">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2C6.5 2 2 6.5 2 12c0 4.8 3.5 8.8 8 9.8V14.9h-2.4V12h2.4v-1.5c0-2.3 1.4-3.6 3.4-3.6.7 0 1.3.1 1.5.1v2.1h-1.2c-1 0-1.3.6-1.3 1.3V12h2.4l-.4 2.9H14v6.9c4.5-1 8-5 8-9.9 0-5.5-4.5-10-10-10z"/></svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default LowerFooter;
