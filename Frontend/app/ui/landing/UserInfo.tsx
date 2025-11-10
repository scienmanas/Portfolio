"use client";

import { useEffect, useState } from "react";

// Helper to get location from IP (like Google Analytics does)
async function fetchLocationFromIP(): Promise<string> {
  // Call the api
  try {
    const response = await fetch("https://ipinfo.io/json", {
      method: "GET",
    });

    // Handle response
    if (response.status === 200) {
      const data = await response.json();
      // Format the location accordingly
      if (data && data.city && data.country) {
        return `${data.city}, ${data.country} (¬‿¬)`;
      } else if (data && data.country) {
        return `${data.country} (¬‿¬)`;
      } else if (data && data.city) {
        return `${data.city} (•_•)`;
      } else {
        return "Unknown location (";
      }
    } else {
      return "Unable to fetch (⌐■_■)";
    }
  } catch (e) {
    console.log(`Error while getting location: ${e}`)
    return "Unable to determine location (⌐■_■)";
  }
}

export function UserInfo() {
  const [location, setLocation] = useState<string | null>("Fetching location");

  // Get location from IP, no prompt to user, and call once only
  useEffect(() => {
    fetchLocationFromIP().then(setLocation);
  }, []);

  return (
    <section className="user-info w-full h-fit flex items-start justify-start">
      <div className="font-mono text-xs sm:text-sm text-neutral-700 dark:text-neutral-300 flex flex-col gap-2 items-start w-fit h-fit">
        <div className="w-fit h-fit">Hi 👋 Cool Visitor!</div>
        <div className="w-fit h-fit">
          📍 {location ? location : "Fetching location..."}{" "}
        </div>
      </div>
    </section>
  );
}
