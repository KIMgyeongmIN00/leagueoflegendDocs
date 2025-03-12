"use server";

export const fetchLatestVersion = async () => {
  const response = await fetch(
    "https://ddragon.leagueoflegends.com/api/versions.json",
    { cache: "force-cache" }
  );
  const versions = await response.json();
  return versions[0]; // 최신 버전
};
