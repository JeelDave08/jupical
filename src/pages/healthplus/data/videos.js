export const VIDEOS = {
  main: "",
  modules: [
    "https://www.youtube.com/watch?v=ettQDXqdlHA", // 01
    "https://www.youtube.com/watch?v=iYTE3yvYblw", // 02
    "https://www.youtube.com/watch?v=PvggM2YIA4Y", // 03
    "https://www.youtube.com/watch?v=mKgw_RadXvw", // 04
    "https://www.youtube.com/watch?v=v1obNJxBoL0", // 05
    "https://www.youtube.com/watch?v=9AmhXGspk84", // 06
    "https://www.youtube.com/watch?v=1brMiY8iFMg", // 07
    "https://www.youtube.com/watch?v=pFL1X8uLdL4", // 08
    "https://www.youtube.com/watch?v=iPppFi_Rk7I", // 09
    "https://www.youtube.com/watch?v=15RB3vmExug", // 10
    "https://www.youtube.com/watch?v=KOs1DULLhK8", // 11
    "https://www.youtube.com/watch?v=uE_oEjIJNFM", // 12
  ],
};

export function ytId(url) {
  if (typeof url !== "string" || !url.trim()) return "";
  try {
    const parsed = new URL(url);
    let id = "";
    if (parsed.hostname === "youtu.be" || parsed.hostname.endsWith(".youtu.be")) {
      id = parsed.pathname.split("/").filter(Boolean)[0] || "";
    } else if (["youtube.com", "www.youtube.com", "m.youtube.com", "youtube-nocookie.com", "www.youtube-nocookie.com"].includes(parsed.hostname)) {
      const parts = parsed.pathname.split("/").filter(Boolean);
      if (parsed.pathname === "/watch") id = parsed.searchParams.get("v") || "";
      else if (["embed", "shorts"].includes(parts[0])) id = parts[1] || "";
    }
    return /^[A-Za-z0-9_-]{11}$/.test(id) ? id : "";
  } catch {
    return "";
  }
}
