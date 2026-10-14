import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import Button from "../ui/Button";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const links = [
    {
      id: 1,
      label: "Home",
      route: "/",
    },
    {
      id: 2,
      label: "Product",
      route: "/product",
    },
    {
      id: 3,
      label: "FAQ",
      route: "/faq",
    },
    {
      id: 4,
      label: "Blog",
      route: "/blog",
    },

    {
      id: 5,
      label: "About Us",
      route: "/about",
    },
  ];

  return (
    <header className="relative z-20 flex items-center justify-between px-8 py-6 lg:px-16">
      <div className="text-[26px] font-bold tracking-tight text-[#54BD95]">
        Biccas
      </div>

      <nav className="hidden  items-center gap-8 md:flex">
        {links.map((link, index) => (
          <li
            key={link.id}
            href={link.route}
            className={`text-[11px] ${
              index === 0
                ? "font-medium cursor-pointer text-gray-800"
                : "text-gray-400"
            }     list-none transition hover:text-gray-800`}
          >
            {link.label}
          </li>
        ))}
      </nav>

      {nav ? (
        <FaTimes
          size={20}
          className="md:hidden z-30 cursor-pointer"
          onClick={() => setNav(!nav)}
        />
      ) : (
        <FaBars
          size={20}
          className="md:hidden z-30 cursor-pointer"
          onClick={() => setNav(!nav)}
        />
      )}

      {nav && (
        <>
          <div className="absolute left-0 top-0 z-10 flex h-screen w-full flex-col items-center justify-center gap-8 bg-white text-center">
            {links.map((link) => (
              <li
                key={link.id}
                href={link.route}
                className="text-[11px] text-gray-400 list-none transition hover:text-gray-800"
              >
                {link.label}
              </li>
            ))}

            <div className="md:flex-col  items-center gap-4">
              <a
                href="#"
                className=" text-[11px] text-gray-500 sm:block"
              >
                Login
              </a>

              <Button className="px-4 py-2 text-[11px]">Sign Up</Button>
            </div>
          </div>
        </>
      )}

      <div className="md:flex hidden   items-center gap-4">
        <a
          href="#"
          className="hidden text-[11px] text-gray-500 sm:block"
        >
          Login
        </a>

        <Button className="px-4 py-2 text-[11px]">Sign Up</Button>
      </div>
    </header>
  );
};

export default Navbar;
