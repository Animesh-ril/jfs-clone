import React from "react";
import Link from "next/link";
import Image from "next/image";
import logo from '../../../public/assets/logo/jfslogofinal.svg'

const Navbar = () => {
  return (
    <>
      <div className="w-full h-20 bg-navbgcolor">
        <div className="container mx-auto px-4 h-full">
          <div className="flex justify-between items-center h-full">
            <nav>
            <ul className=" md:flex gap-x-7 text-navtitlecolor  display: flex  font-JioTypeBold">
            <section>
            <span>
           <Link href="/">
           <Image alt="img" src={logo} width={30} height={30} className="ml-20"/>
            </Link>
            </span>
            </section>
              <li className="hover:underline decoration-1" >
                <Link href="/">
                  <p>Our Business</p>
                  
                </Link>
                
              </li>
              <li className="hover:underline decoration-1 ">
                <Link href="/">
                  <p>Investor Relations</p>
                </Link>
              </li>
              <li className="hover:underline decoration-1 ">
                <Link href="/">
                  <p>Our Company</p>
                </Link>
              </li>
              <li className="hover:underline decoration-1 ">
                <Link href="/">
                  <p>Careers</p>
                </Link>
              </li>
              <li className="hover:underline decoration-1">
                <Link href="/">
                  <p>Contact Us</p>
                </Link>
              </li>
            </ul>
           </nav>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;