import { useState } from "react";
import { Menu, X } from "lucide-react";
import { navItems } from "@/components/utils/Items";

interface HeaderProps {
  scrollToSection: (sectionId: string) => void;
}

const Header = ({ scrollToSection }: HeaderProps) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <header className="fixed top-0 left-0 w-full bg-white/90 backdrop-blur-md text-[#034F4D] shadow-md z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-2 flex items-center justify-between">
        {/* --- Left: Logo --- */}
        <div className="flex flex-col items-start font-lexend leading-tight">
          <div className="flex items-center space-x-2">
            <img src="/logo.svg" alt="LifeGate Logo" className="w-5 h-5" />
            <div className="flex flex-col">
              <span className="font-lexendDeca text-lg md:text-xl font-bold text-[#09999B]">
                LifeGate
              </span>
              <span className="text-xs text-gray-500 -mt-1 tracking-wide">
                by DSHub
              </span>
            </div>
          </div>
        </div>

        {/* --- Center: Nav Items (desktop only) --- */}
        <nav className="hidden lg:flex flex-1 justify-center space-x-6 xl:space-x-8 font-quicksand  font-light">
          {navItems.map(({ id, label }) => (
            <a
              key={id}
              href={`#${id}`}
              onClick={(e) => {
                e.preventDefault();
                scrollToSection(id);
              }}
              className="text-sm hover:text-[#00A6A3] transition-colors duration-200"
            >
              {label}
            </a>
          ))}
        </nav>

        {/* --- Right: Contact Us (desktop) --- */}
        <div className="hidden lg:flex">
          <a
            href="#contact"
            onClick={(e) => {
              e.preventDefault();
              scrollToSection("contact");
            }}
            className="bg-[#087676] text-white px-6 py-2 rounded-full shadow hover:bg-[#00908F] transition-all duration-200 whitespace-nowrap font-quicksand font-medium"
          >
            Contact Us
          </a>
        </div>

        {/* --- Mobile Menu Toggle --- */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="lg:hidden text-[#00A6A3] focus:outline-none"
        >
          {isOpen ? <X size={26} /> : <Menu size={26} />}
        </button>
      </div>

      {/* --- Mobile Dropdown Menu --- */}
      {isOpen && (
        <div className="lg:hidden bg-white shadow-inner border-t border-gray-100 animate-slideDown font-quicksand">
          {[...navItems, { id: "contact", label: "Contact Us" }].map(
            ({ id, label }) => (
              <a
                key={id}
                href={`#${id}`}
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection(id);
                  setIsOpen(false);
                }}
                className="block px-6 py-3 text-[#034F4D] hover:bg-[#E6F8F7] hover:text-[#00A6A3] transition-colors duration-200"
              >
                {label}
              </a>
            )
          )}
        </div>
      )}
    </header>
  );
};

export default Header;
