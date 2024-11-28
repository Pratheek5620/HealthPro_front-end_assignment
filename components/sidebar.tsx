// components/Sidebar.js
import Link from 'next/link';
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const Sidebar = ({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex">
      <div className="w-full max-w-xs bg-white p-4">
        <button onClick={onClose} className="text-gray-500 mb-4">
          Close
        </button>
        <nav>
          <ul className="space-y-4">
            <li><Link href="#" className="text-sm hover:text-gray-600" onClick={onClose}>Donor Programme</Link></li>
            <li><Link href="#" className="text-sm hover:text-gray-600" onClick={onClose}>Fertility Preservation</Link></li>
            <li><Link href="#" className="text-sm hover:text-gray-600" onClick={onClose}>Advanced Treatments</Link></li>
            <li><Link href="#" className="text-sm hover:text-gray-600" onClick={onClose}>Infertility Treatments</Link></li>
            <li><Link href="#" className="text-sm hover:text-gray-600" onClick={onClose}>IVF Testing</Link></li>
            <li><Link href="#" className="text-sm hover:text-gray-600" onClick={onClose}>About Us</Link></li>
            <li>
              <Button variant="destructive" size="sm" className="gap-2 w-full mt-4" onClick={onClose}>
                Talk to Us
                <ArrowRight className="w-4 h-4" />
              </Button>
            </li>
          </ul>
        </nav>
      </div>
      <div className="flex-1 bg-black bg-opacity-50" onClick={onClose}></div>
    </div>
  );
};

export default Sidebar;
