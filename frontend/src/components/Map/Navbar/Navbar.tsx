// components/Navbar.tsx
import React from "react";
import Link from "next/link";
const Navbar = () => {
  return (
    <div className="p-5">
      <ul className="flex justify-around items-center bg-white">
        <li>
          <Link href="">Logo</Link>
        </li>
        <li>
          <Link href="">Yahya Amzil</Link>
        </li>
        <li className="bg-green-600 text-white p-4 px-8 text-center text-base rounded-lg">
          <Link href="">Home</Link>
        </li>
        <li>
          <Link href="">Mes Commandes</Link>
        </li>
        <li>
          <Link href="">Se desconnecter</Link>
        </li>
      </ul>
    </div>
  );
};
export default Navbar;
