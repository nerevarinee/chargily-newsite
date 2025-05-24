import React, { useState } from "react";
import { Link } from "react-router-dom";

function DropdownMenu({ title, items }) {
  const [open, setOpen] = useState(false);

  return (
    <li
      className="dropdown"
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
    >
      <span className="dropdown-title">{title}</span>
      {open && (
        <ul className="dropdown-menu">
          {items.map((item, index) => (
            <li key={index}>
              <Link to={item.path} className="dropdown-item">
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </li>
  );
}

export default DropdownMenu;
