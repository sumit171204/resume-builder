import React from "react";
import { RiProfileLine } from "react-icons/ri";
import { FaGithub } from "react-icons/fa";

export default function Header() {
  return (
    <header className="header">
      <h1>Resumue Builder</h1>
      <RiProfileLine />
      <p> by Sumit Suthar</p>
      <a
        href="https://github.com/sumit171204"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaGithub />
      </a>
    </header>
    
  );
}
