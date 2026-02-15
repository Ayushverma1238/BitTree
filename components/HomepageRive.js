"use client";

import { useRive } from "@rive-app/react-canvas";

export default function HomepageRive() {
  const { RiveComponent } = useRive({
    src: "https://cdn.prod.website-files.com/666255f7f2126f4e8cec6f8f/680faadc793de4a67df69d04_homepage_image_3.riv",
    stateMachines: "State Machine",
    artboard: "Homepage_image 3",
    autoplay: true,
  });

  return (
    <div className="w-full h-137.5">
      <RiveComponent className="w-full h-full" />
    </div>
  );
}