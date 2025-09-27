import { Menu, X } from "lucide-react";
import React, { useState } from "react";

const navLinks = [
  { id: 1, name: "Home", path: "/" },
  { id: 2, name: "About", path: "/about" },
  { id: 3, name: "Services", path: "/services" },
  { id: 4, name: "Blog", path: "/blog" },
  { id: 5, name: "Contact", path: "/contact" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const links = navLinks.map((route) => (
    <li className="lg:mr-10 sm:bg-yellow-100 md:bg-white px-3 sm:hover:bg-yellow-200 md:hover:bg-white">
      <a href={route.path}>{route.name}</a>
    </li>
  ));

  return (
    <nav className="flex justify-between w-10/12 mx-auto py-2 px-2 bg-yellow-100 ">
      <div className="flex" onClick={() => setOpen(!open)}>
        {open ? (
          <X className="md:hidden mt-2"></X>
        ) : (
          <Menu className="md:hidden mt-2"></Menu>
        )}

        <ul className={`md:hidden absolute duration-700 ${open ? 'top-11' :'-top-50'}`}>
          {links}
        </ul>
        <h3 className="ml-2">Google</h3>
      </div>

      <ul className="md:flex hidden">{links}</ul>

      <button>SignIn</button>
    </nav>
  );
};

export default Navbar;
