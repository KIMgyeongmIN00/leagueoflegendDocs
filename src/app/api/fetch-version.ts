"use server";

export const fetchLatestVersion = async () => {
  const response = await fetch(
    "https://ddragon.leagueoflegends.com/api/versions.json"
  );
  const versions: string[] = await response.json();
  return versions[0];
};
