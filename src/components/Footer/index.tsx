import Link from "next/link";
import React from "react";
const Footer = () => {
  return (
    <footer className="bg-slate-900 p-4 text-center text-white">
      <div className="flex justify-center gap-4">
        <Link
          href="/terms-of-use" 
          className="text-blue-400 underline hover:text-blue-600"
        >
          Terms of Use
        </Link>
        <Link 
          href="/privacy-policy" 
          className="text-blue-400 underline hover:text-blue-600"
        >
          Privacy Policy
        </Link>
      </div>
      <p className="text-sm mt-2">&copy; 2024 UUID Generator. All rights reserved.</p>
    </footer>
  );
};

export default Footer;
