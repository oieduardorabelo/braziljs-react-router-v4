import React from "react";

import { Link } from "react-router-dom";

export function Sidebar() {
  return (
    <aside style={{ flexShrink: 0, padding: 10 }}>
      <h1>My Header</h1>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/topics">Topics</Link>
        </li>
      </ul>
    </aside>
  );
}
