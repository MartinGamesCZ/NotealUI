"use client";

import NavCard from "@/components/nav-card";
import NavHeader from "@/components/nav-header";
import { Button } from "@/components/ui/button";
import { TbBuildingCastle } from "react-icons/tb";
import Loader from "@/components/loader";
import PlaceCard from "@/components/place-card";

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
        <NavHeader title={"Hrady"} onBack={() => alert("Hrady")} />
      </div>
      <h1>Loader</h1>
      <Loader size="lg" />
      <h1>PlaceCard</h1>
      <div style={{
        maxWidth: "400px"
      }}>
        <PlaceCard title="Hrad Kost" description="Skvělý kamenný hrad, nezbyl budget na topení - vemte si bundy. Lze přespat, ale jen po širákem no..." images={[
        "https://hradkost.eu/wp-content/uploads/2023/10/hrad-kost-13-2-1024x678.jpg",
        "https://hradkost.eu/wp-content/uploads/2023/10/hrad-kost-13-2-1024x678.jpg",
        "https://hradkost.eu/wp-content/uploads/2023/10/hrad-kost-13-2-1024x678.jpg"
      ]} city="Ostrava" category="Hradík" />
      </div>
    </div>
  );
}
