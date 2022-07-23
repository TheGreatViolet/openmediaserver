import React from "react";

interface navbarButtonProps {
  text: string;
  route: string;
}

function NavbarButton(props: navbarButtonProps) {
  return (
    <button className="text-storm-gray-50
      transition-colors hover:text-jacksons-purple-300
      contrast-more:hover:text-jacksons-purple-100" onClick={() => {
        window.location.href = props.route;
      }}>
      {props.text}
    </button>
  );
}

export default function Navbar() {
  return (
    <>
      <div className="align-top w-full h-12 bg-jacksons-purple-800
        border-jacksons-purple-900 border-b-2">
        <div className="flex justify-between items-center h-full p-2">
          <div className="flex items-center">
            <button>
              <NavbarButton text="Home" route="/" />
            </button>
          </div>
        </div>
      </div>
    </>
  );
}