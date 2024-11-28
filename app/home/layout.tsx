"use client"
import { useState } from 'react';
import Link from 'next/link';
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import Sidebar from '@/components/sidebar';

const HomeLayout = ({ children }: { children: React.ReactNode }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className="min-h-screen bg-[#fafafa]">
      {/* Header */}
      <header className="bg-white">
        <div className="container mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <Link href="/" passHref className="flex items-center space-x-2">
              <div className="bg-black text-white px-3 py-1.5 text-xl font-bold">IVF</div>
              <div className="text-xl font-bold">Pulse</div>
            </Link>
            <nav className="hidden lg:block">
              <ul className="flex items-center space-x-8">
                <li><Link href="#" className="text-sm hover:text-gray-600">Donor Programme</Link></li>
                <li><Link href="#" className="text-sm hover:text-gray-600">Fertility Preservation</Link></li>
                <li><Link href="#" className="text-sm hover:text-gray-600">Advanced Treatments</Link></li>
                <li><Link href="#" className="text-sm hover:text-gray-600">Infertility Treatments</Link></li>
                <li><Link href="#" className="text-sm hover:text-gray-600">IVF Testing</Link></li>
                <li><Link href="#" className="text-sm hover:text-gray-600">About Us</Link></li>
                <li>
                  <Button variant="destructive" size="sm" className="gap-2">
                    Talk to Us
                    <ArrowRight className="w-4 h-4" />
                  </Button>
                </li>
              </ul>
            </nav>
            <button onClick={toggleSidebar} className="lg:hidden text-gray-500">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
              </svg>
            </button>
          </div>
        </div>
      </header>

      {/* Sidebar */}
      <Sidebar isOpen={isSidebarOpen} onClose={toggleSidebar} />

      {/* Main content */}
      <main>{children}</main>
    </div>
  );
};

export default HomeLayout;
