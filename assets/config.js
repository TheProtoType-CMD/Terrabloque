/* Terrabloque site configuration.
   Version info comes from Terrabloque_1_0_5.html (const VERSION, UPDATES).
   launcherUrl: set this to the real TerraLauncher file once it exists, e.g.
     - a file in this project:   "/downloads/TerraLauncher-Setup.exe"
     - a Firebase Storage URL:   "https://firebasestorage.googleapis.com/v0/b/<bucket>/o/TerraLauncher-Setup.exe?alt=media"
   while launcherUrl is empty the download button stays disabled (no fake link). */
window.TERRA = {
  version: "1.0.5",
  releaseDate: "2026-10-05",
  launcherUrl: "https://github.com/TheProtoType-CMD/Terrabloque/releases/download/v.2.0.0/TerraLauncher-Setup-2.0.0.exe",
  launcherFileName: "TerraLauncher-Setup-2.0.0.exe",
  launcherSize: "79.9 MB",
  launcherPlatforms: "Windows (.exe installer)",
  launcherVersion: "2.0.0",
  launcherSha256: "8d4d2b6cdccc3d70900380c8d5b590ea3c61f80e79c5a299c29beeec88c224bc"
};
