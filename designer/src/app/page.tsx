"use client";

import NavCard from "@/components/nav-card";
import NavHeader from "@/components/nav-header";
import { Button } from "@/components/ui/button";
import { TbBuildingCastle } from "react-icons/tb";

export default function Page() {
  return (
    <div
      style={{
        padding: "1rem",
        display: "flex",
        flexDirection: "column",
        gap: "1rem",
      }}
    >
      <h1>NavCard</h1>
      <NavCard
        icon={TbBuildingCastle}
        label={"Hrady"}
        onClick={() => alert("Hrady!!!")}
      />
      <h1>NavHeader</h1>
      <div
        style={{
          maxWidth: "800px",
        }}
      >
        <NavHeader title={"Hrady"} onBack={() => alert("Ne hrady!!!")} />
      </div>
    </div>
  );
}
