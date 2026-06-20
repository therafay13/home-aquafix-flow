import Logo from "@/components/Logo";
import { Button } from "@/components/ui/button";
import { ChevronDown, Menu, Phone, X } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";
const navLinks = [{
  name: "Home",
  href: "/",
  isRoute: true
}, {
  name: "About",
  href: "/about",
  isRoute: true
}, {
  name: "Service",
  href: "/services",
  isRoute: true
}, {
  name: "Work",
  href: "/work",
  isRoute: true
}, {
  name: "Pages",
  href: "#",
  hasDropdown: true
}];
const pagesDropdownLinks = [{
  column: 1,
  links: [{
    name: "Home",
    href: "/"
  }, {
    name: "Service",
    href: "/services"
  }, {
    name: "Service Details",
    href: "/services"
  }, {
    name: "Work",
    href: "/work"
  }, {
    name: "Work Details",
    href: "/work"
  }]
}, {
  column: 2,
  links: [{
    name: "About Us",
    href: "/about"
  }, {
    name: "Pricing",
    href: "/pricing"
  }, {
    name: "Contact Us",
    href: "/contact"
  }, {
    name: "Privacy Policy",
    href: "/privacy-policy"
  }]
}, {
  column: 3,
  links: [{
    name: "Quote",
    href: "/quote"
  }]
}];
const FlipLink = ({
  children,
  hasDropdown,
  href,
  isRoute,
  onClick,
  isActive,
  isDark = false
}: {
  children: string;
  hasDropdown?: boolean;
  href: string;
  isRoute?: boolean;
  onClick?: () => void;
  isActive?: boolean;
  isDark?: boolean;
}) => {
  const content = <>
    <span className={`block transition-transform duration-300 group-hover:-translate-y-full ${isDark ? 'text-white' : 'text-[#595B67]'}`}>
      {children}
    </span>
    <span className={`absolute inset-0 flex items-center transition-transform duration-300 translate-y-full group-hover:translate-y-0 ${isDark ? 'text-white' : 'text-[#595B67]'}`}>
      {children}
    </span>
    {hasDropdown && <ChevronDown className={`h-4 w-4 ml-1 transition-transform duration-300 ${isActive ? 'rotate-180' : ''} ${isDark ? 'text-white' : 'text-[#595B67]'} `} />}
  </>;
  if (hasDropdown) {
    return <button onClick={onClick} className={`group relative overflow-hidden flex items-center gap-1 transition-colors duration-300 font-bold h-6`}>
      {content}
    </button>;
  }
  if (isRoute) {
    return <Link to={href} className={`group relative overflow-hidden flex items-center gap-1  transition-colors duration-300 font-bold h-6`}>
      {content}
    </Link>;
  }
  return <a href={href} className={`group relative overflow-hidden flex items-center gap-1   transition-colors duration-300 font-bold h-6`}>
    {content}
  </a>;
};
const DropdownFlipLink = ({
  children,
  href,
  onClick,
  isDark = false
}: {
  children: string;
  href: string;
  onClick?: () => void;
  isDark?: boolean;
}) => {
  return <Link to={href} onClick={onClick} className="group relative overflow-hidden flex items-center text-primary hover:text-primary transition-colors duration-300 font-medium h-6">
    <span className={`block transition-transform duration-300 group-hover:-translate-y-full ${isDark ? 'text-[#595B67]' : 'text-white'}`}>
      {children}
    </span>
    <span className={`absolute inset-0 flex items-center transition-transform duration-300 translate-y-full group-hover:translate-y-0 ${isDark ? 'text-[#595B67]' : 'text-white'}`}>
      {children}
    </span>
  </Link>;
};
const FlipButton = ({
  children,
  isDark = false,
  props
}: {
  children: React.ReactNode;
  isDark?: boolean;
  props?: React.ButtonHTMLAttributes<HTMLButtonElement>;
}) => {
  return <Button variant="nav-cta" size="default" className={`group relative overflow-hidden ${isDark ? '' : 'bg-white border-secondary text-black'}`} {...props}>
    <span className="flex items-center gap-2 transition-all duration-300 group-hover:-translate-y-full group-hover:opacity-0">
      {children}
    </span>
    <span className="absolute inset-0 flex items-center justify-center gap-2 transition-all duration-300 translate-y-full group-hover:translate-y-0 opacity-0 group-hover:opacity-100">
      {children}
    </span>
  </Button>;
};
const Header = ({
  isDark = false
}: {
  isDark?: boolean;
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isPagesDropdownOpen, setIsPagesDropdownOpen] = useState(false);
  const handlePagesClick = () => {
    setIsPagesDropdownOpen(!isPagesDropdownOpen);
  };
  const closeDropdown = () => {
    setIsPagesDropdownOpen(false);
  };

  return <header className={`relative z-50 backdrop-blur-md bg-primary ${isDark ? 'bg-opacity-0' : 'bg-white'}`}>
    <div className="container">
      <div className="flex items-center justify-between h-20">
        <Link to="/">
          <Logo isDark={isDark} />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-8">
          {navLinks.map(link => <FlipLink key={link.name} hasDropdown={link.hasDropdown} href={link.href} isRoute={link.isRoute} onClick={link.hasDropdown ? handlePagesClick : undefined} isActive={link.hasDropdown && isPagesDropdownOpen} isDark={isDark}>
            {link.name}
          </FlipLink>)}
        </nav>
        <div className="hidden lg:flex gap-3">
          {/* CTA Button & Cart */}
          <Link to="tel:+447882395895" className="hidden lg:flex">
            <FlipButton isDark={isDark}>
              <Phone className="h-4 w-4" />
              Call 07882 395895</FlipButton>
          </Link>
        </div>


        {/* Mobile Menu Button */}
        <button className={`lg:hidden ${isDark ? 'text-white' : 'text-[#595B67]'}`} onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Pages Dropdown */}
      <div className={`absolute left-1/2 -translate-x-1/2 top-full mt-2 rounded-lg shadow-xl transition-all duration-300 ease-in-out overflow-hidden ${isPagesDropdownOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'} ${isDark ? "bg-white" : "bg-primary"}`} style={{
        width: '600px'
      }}>
        <div className="p-8 rounded-none">
          <div className="grid grid-cols-3 gap-x-12 gap-y-4">
            {pagesDropdownLinks.map(column => <div key={column.column} className="flex flex-col gap-4">
              {column.links.map(link => <DropdownFlipLink key={link.name} href={link.href} onClick={closeDropdown} isDark={isDark}>
                {link.name}
              </DropdownFlipLink>)}
            </div>)}
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && <div className="lg:hidden py-4 border-t border-white/10">
        <nav className="flex flex-col gap-4">
          {navLinks.map(link => link.isRoute ? <Link key={link.name} to={link.href} className={`flex items-center gap-1 ${isDark ? 'text-white' : 'text-[#595B67]/80'} hover:text-[#595B67] transition-colors duration-300 text-sm font-medium py-2`}>
            {link.name}
            {link.hasDropdown && <ChevronDown className="h-4 w-4" />}
          </Link> : <a key={link.name} href={link.href} className={`flex items-center gap-1 ${isDark ? 'text-white' : 'text-[#595B67]/80'} hover:text-[#595B67] transition-colors duration-300 text-sm font-medium py-2`}>
            {link.name}
            {link.hasDropdown && <ChevronDown className="h-4 w-4" />}
          </a>)}
          <Button variant="hero" size="default" className="mt-4">
            <Phone className="h-4 w-4 mr-2" />
            Call 07882 395895
          </Button>
        </nav>
      </div>}
    </div>

    {/* Backdrop to close dropdown */}
    {isPagesDropdownOpen && <div className="fixed inset-0 z-[-1]" onClick={closeDropdown} />}
  </header >;
};
export default Header;