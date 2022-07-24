import Link from "next/link";
import React from "react";
import { BiCog } from 'react-icons/bi';

interface navbarButtonProps {
  route: string;
  children?: React.ReactNode;
}

function NavbarButton(props: navbarButtonProps) {
  return (
    <Link href={props.route}>
      <a className="text-storm-gray-50
        transition-colors hover:text-jacksons-purple-300
        contrast-more:hover:text-jacksons-purple-100">{props.children}</a>
    </Link>
  );
}

export default function Navbar() {
  return (
    <>
      <div className="flex-none align-top w-full h-12 bg-jacksons-purple-800
        border-jacksons-purple-900 border-b-2">
        <div className="flex justify-between items-center h-full p-2">
          <div className="flex items-center">
            <NavbarButton route="/">
              <span className="text-storm-gray-50">Home</span>
            </NavbarButton>
          </div>

          <div className="flex flex-grow" />

          <div className="pr-2">
            <div className="flex items-center">
              <NavbarButton route="/config">
                <BiCog size={26} />
              </NavbarButton>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}