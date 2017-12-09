import React from "react";

import { Header } from "./Header";
import { Sidebar } from "./Sidebar";
import { Miolo } from "./Miolo";

export function App() {
  return (
    <main>
      <Header />
      <section style={{ display: "flex" }}>
        <Sidebar />
        <Miolo />
      </section>
    </main>
  );
}
