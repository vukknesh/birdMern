import React from "react";
import "./Footer.css";

export default function Footer() {
  return (
    <footer className="footer p-4 text-center">
      <ul>
        <li>
          <a href="#">
            <i className="fab fa-instagram " />
          </a>
        </li>
        <li>
          <a href="#">
            <i className="fab fa-youtube " />
          </a>
        </li>
        <li>
          <a href="#">
            <i className="fab fa-facebook" />
          </a>
        </li>
      </ul>
      {/* Copyright &copy; {new Date().getFullYear()} BirdWatcher.com */}
    </footer>
  );
}
