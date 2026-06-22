// Source of truth for the native apps we've shipped — rendered on the home-page
// MobileAppsShowcase section and the /mobile-app-development service page.

export type MobileApp = {
  /** Stable key for React lists. */
  id: string;
  name: string;
  /** Short App-Store-style subtitle. */
  tagline: string;
  /** Human category label, e.g. "Health & Fitness". */
  category: string;
  /** One- to two-sentence marketing blurb. */
  blurb: string;
  /** Tech stack chip. */
  tech: string;
  accent: "cyan" | "purple" | "blue" | "amber" | "green";
  /** App Store URL, if published. */
  ios?: string;
  /** Google Play URL, if published. */
  android?: string;
  /** Public GitHub repo, if any. */
  github?: string;
};

export const MOBILE_APPS: MobileApp[] = [
  {
    id: "potluckhub",
    name: "PotLuckHub",
    tagline: "Home-cook marketplace for Singapore",
    category: "Food & Drink · Marketplace",
    blurb:
      "Discover identity-verified home chefs, browse dishes and book home-cooked dining. A native SwiftUI iPhone app on the same shared API as the web and Android builds.",
    tech: "SwiftUI · Jetpack Compose · Shared API",
    accent: "purple",
    ios: "https://apps.apple.com/app/id6759842391",
    android: "https://play.google.com/store/apps/details?id=io.potluckhub.app",
    github: "https://github.com/alfredang/potluckapp",
  },
  {
    id: "tapcard",
    name: "Tertiary Tapcard",
    tagline: "Scan paper cards into digital cards",
    category: "Business",
    blurb:
      "Snap a paper business card and VisionKit OCR turns it into a shareable digital card with a QR code — your whole rolodex, on your phone.",
    tech: "SwiftUI · VisionKit OCR",
    accent: "cyan",
    ios: "https://apps.apple.com/app/id6780261599",
    github: "https://github.com/alfredang/tapcardapp",
  },
  {
    id: "runtrack",
    name: "RunTrack GPS",
    tagline: "GPS run tracker with voice",
    category: "Health & Fitness",
    blurb:
      "Track runs by GPS with real-time route mapping, live distance and pace, and spoken voice feedback that keeps working with the screen locked.",
    tech: "SwiftUI · CoreLocation · AVSpeech",
    accent: "green",
    ios: "https://apps.apple.com/app/id6779956150",
    github: "https://github.com/alfredang/runningapp",
  },
  {
    id: "sudoku",
    name: "Tertiary Sudoku",
    tagline: "Classic number puzzles, offline",
    category: "Games · Puzzle",
    blurb:
      "Unlimited on-device unique Sudoku puzzles across four difficulty levels with smart hints, pencil notes and local scoring — fully private, no network needed.",
    tech: "SwiftUI · XcodeGen",
    accent: "amber",
    ios: "https://apps.apple.com/app/id6779973622",
    github: "https://github.com/alfredang/sudokuapp",
  },
  {
    id: "notepad",
    name: "NotePad",
    tagline: "Apple Pencil notes for iPad",
    category: "Productivity",
    blurb:
      "A GoodNotes-style iPadOS note-taker — handwriting, drawing, shapes and flowcharts on A4 pages with nested notebooks, autosave and PDF/PNG/JPG export.",
    tech: "SwiftUI · PencilKit · SwiftData",
    accent: "blue",
    ios: "https://apps.apple.com/app/id6779909944",
    github: "https://github.com/alfredang/notepadapp",
  },
  {
    id: "fractal",
    name: "Fractal",
    tagline: "GPU-accelerated fractal art",
    category: "Graphics & Design",
    blurb:
      "Grow Mandelbrot, Julia, Burning Ship and Celtic fractals from a seed, recolour with eight palettes and save as wallpaper — GPU-accelerated and fully offline.",
    tech: "SwiftUI · Metal",
    accent: "purple",
    ios: "https://apps.apple.com/app/id6780266278",
    github: "https://github.com/alfredang/fractalapp",
  },
];
