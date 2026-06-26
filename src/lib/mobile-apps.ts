// Source of truth for the native apps we've shipped — rendered on the home-page
// MobileAppsShowcase section, the /mobile-app-development service page, and the
// per-app /apps/[slug] detail pages. The `id` doubles as the route slug.

export type MobileApp = {
  /** Stable key for React lists AND the /apps/[slug] route slug. */
  id: string;
  name: string;
  /** Short App-Store-style subtitle. */
  tagline: string;
  /** Human category label, e.g. "Health & Fitness". */
  category: string;
  /** One- to two-sentence marketing blurb (cards + showcase). */
  blurb: string;
  /** Longer description paragraphs for the dedicated app page. */
  about: string[];
  /** Feature highlights for the dedicated app page. */
  highlights: string[];
  /** Platform label, e.g. "iPhone", "iPhone & Android", "iPad". */
  platform: string;
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
    about: [
      "PotLuckHub connects diners with identity-verified home chefs across Singapore. Browse chefs by cuisine and neighbourhood, explore their dishes, and book a home-cooked meal or a private dining experience — all with secure SGD payments held until you dine.",
      "The iPhone app is a genuine native SwiftUI client, not a web wrapper. It talks to the same shared REST API that powers the PotLuckHub website and Android app, so a chef's menu update or a new booking appears everywhere at once.",
    ],
    highlights: [
      "Discover identity-verified home chefs near you",
      "Browse dishes, menus and chef profiles",
      "Book home-cooked dining with secure payments",
      "Native SwiftUI app on a shared API with web + Android",
    ],
    platform: "iPhone & Android",
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
    about: [
      "Tertiary Tapcard turns the stack of paper business cards in your drawer into a searchable digital rolodex. Photograph a card and on-device VisionKit OCR reads the name, company, phone and email, then builds a clean digital card you can share with a tap or a QR code.",
      "Everything runs natively on the device, so your contacts stay private. It is built for anyone who collects cards at events and never wants to lose a contact again.",
    ],
    highlights: [
      "Scan paper cards with on-device VisionKit OCR",
      "Auto-extract name, company, phone and email",
      "Share your own digital card via QR code",
      "Private — contact data stays on your device",
    ],
    platform: "iPhone",
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
    about: [
      "RunTrack GPS is a no-nonsense running companion. Start a run and it maps your route in real time, tracks distance, pace and duration, and reads your stats aloud so you can keep your eyes on the road and your phone in your pocket.",
      "Built with CoreLocation and on-device speech, the voice feedback keeps working even when the screen is locked — so your run is tracked accurately from the first step to the last.",
    ],
    highlights: [
      "Real-time GPS route mapping",
      "Live distance, pace and duration",
      "Spoken voice feedback, screen-locked",
      "Accurate background tracking with CoreLocation",
    ],
    platform: "iPhone",
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
    about: [
      "Tertiary Sudoku is a clean, distraction-free take on the classic number puzzle. An on-device generator produces unlimited unique puzzles across four difficulty levels, so you never run out and never repeat.",
      "Smart hints, pencil notes, scoring and local history are all built in, and the whole game works fully offline — no account, no network, no ads interrupting your flow.",
    ],
    highlights: [
      "Unlimited unique puzzles, generated on-device",
      "Four difficulty levels with smart hints",
      "Pencil notes, scoring and local history",
      "Fully offline — no account, no network",
    ],
    platform: "iPhone",
    tech: "SwiftUI · XcodeGen",
    accent: "amber",
    ios: "https://apps.apple.com/app/id6779973622",
    github: "https://github.com/alfredang/sudokuapp",
  },
  {
    id: "notepad",
    name: "Tertiary NotePad",
    tagline: "Apple Pencil notes for iPad",
    category: "Productivity",
    blurb:
      "A GoodNotes-style iPadOS note-taker — handwriting, drawing, shapes and flowcharts on A4 pages with nested notebooks, autosave and PDF/PNG/JPG export.",
    about: [
      "Tertiary NotePad is a GoodNotes-style note-taking app built for Apple Pencil on iPad. Write and draw naturally on A4 pages, add shapes and flowcharts, and organise everything into nested notebooks that autosave as you work.",
      "Built with PencilKit and SwiftData, it is fast and fluid, and exports any page to PDF, PNG or JPG when you need to share. It also opens on iPhone and Mac via Mac Catalyst for quick viewing.",
    ],
    highlights: [
      "Natural Apple Pencil handwriting and drawing",
      "Shapes and flowcharts on A4 pages",
      "Nested notebooks with autosave",
      "Export to PDF, PNG or JPG",
    ],
    platform: "iPad",
    tech: "SwiftUI · PencilKit · SwiftData",
    accent: "blue",
    ios: "https://apps.apple.com/app/id6779909944",
    github: "https://github.com/alfredang/notepadapp",
  },
  {
    id: "fractal",
    name: "Tertiary Fractal",
    tagline: "GPU-accelerated fractal art",
    category: "Graphics & Design",
    blurb:
      "Grow Mandelbrot, Julia, Burning Ship and Celtic fractals from a seed, recolour with eight palettes and save as wallpaper — GPU-accelerated and fully offline.",
    about: [
      "Tertiary Fractal is a GPU-accelerated fractal art studio for iPhone and iPad. Grow Mandelbrot, Julia, Burning Ship, Tricorn, Phoenix and Celtic fractals from a seed, then recolour them with eight palettes to make your own infinite artwork.",
      "Rendering runs on Metal for smooth, real-time exploration, and finished pieces save straight to your photo library as wallpaper. It is fully offline and collects no data.",
    ],
    highlights: [
      "Six fractal families from a single seed",
      "Eight recolour palettes",
      "Real-time GPU rendering with Metal",
      "Save artwork as wallpaper — fully offline",
    ],
    platform: "iPhone & iPad",
    tech: "SwiftUI · Metal",
    accent: "purple",
    ios: "https://apps.apple.com/app/id6780266278",
    github: "https://github.com/alfredang/fractalapp",
  },
  {
    id: "ai4kids",
    name: "AI4Kids",
    tagline: "Play-and-learn for ages 4–16",
    category: "Education · Kids",
    blurb:
      "A bright, fully offline learning app where children play through phonics, story-building and code puzzles — no login, no ads and no data collection.",
    about: [
      "AI4Kids is a friendly, fully offline learning app for children aged 4 to 16. Kids play and learn through four hands-on activities — from early phonics to simple coding — with no login, no ads and no data collection, so families can use it safely at home, in class or on the go.",
      "The activities scale with age: Phonics Playground builds early reading for ages 4–6, Story Builder creates page-by-page stories for ages 7–9, and Code Puzzles introduce sequencing and logic for ages 10–12 — all in a native iPhone and iPad app designed for small hands.",
    ],
    highlights: [
      "Four play-and-learn activities for ages 4–16",
      "Phonics, story-building and code puzzles",
      "Fully offline — no login, no ads, no data collection",
      "Safe for home and classroom use",
    ],
    platform: "iPhone & iPad",
    tech: "SwiftUI",
    accent: "green",
    ios: "https://apps.apple.com/app/id6780267161",
    github: "https://github.com/alfredang/ai4kidsapp",
  },
  {
    id: "iotflow",
    name: "IoTFlow",
    tagline: "Monitor your IoT devices on the go",
    category: "Utilities · IoT",
    blurb:
      "The mobile client for the self-hosted IoTFlow platform — monitor connected devices, watch live telemetry and stay on top of alerts from anywhere.",
    about: [
      "IoTFlow is the iPhone client for the self-hosted IoTFlow IoT platform. See total, online and offline device counts and active alerts at a glance, then drill into live sensor telemetry streaming in from your devices in real time.",
      "Browse every device by status and protocol (HTTP, MQTT, WebSocket), inspect device IDs, location and metadata, register a new device and get its connection token in seconds, and review recent alerts so you never miss an offline device or a threshold breach — all in a native SwiftUI app pointed at your own platform.",
    ],
    highlights: [
      "Dashboard — device counts and active alerts at a glance",
      "Live sensor telemetry streaming from your devices",
      "Browse devices by status and protocol (HTTP/MQTT/WebSocket)",
      "Register new devices and review alerts on the go",
    ],
    platform: "iPhone",
    tech: "SwiftUI · MQTT · WebSocket",
    accent: "cyan",
    ios: "https://apps.apple.com/app/id6781005693",
    github: "https://github.com/alfredang/iotplatformapp",
  },
  {
    id: "wordsearch",
    name: "Tertiary Word Search",
    tagline: "Quick, focused word puzzles",
    category: "Games · Word",
    blurb:
      "A native word-search game — drag across letters to find hidden words on Easy, Medium or Hard grids, with hints and progress tracking. Offline, no account.",
    about: [
      "Tertiary Word Search is a native word game for teenagers and adults who enjoy quick, focused word puzzles. Choose Easy, Medium or Hard grids, drag across letters to find each hidden word, and use hints whenever you need a nudge.",
      "Found words are highlighted, your progress is tracked, and the whole game plays offline with no account required — built natively in SwiftUI for iPhone and iPad.",
    ],
    highlights: [
      "Easy, Medium and Hard word-search grids",
      "Finger-drag word selection with found-word highlights",
      "Hints when you need help",
      "Offline play — no account required",
    ],
    platform: "iPhone & iPad",
    tech: "SwiftUI",
    accent: "amber",
    ios: "https://apps.apple.com/app/id6781685014",
    github: "https://github.com/alfredang/crosswordpuzzleapp",
  },
  {
    id: "tangpoems",
    name: "Tang Poems 唐诗三百首",
    tagline: "300 classic Tang dynasty poems",
    category: "Books · Education",
    blurb:
      "A pocket reader for the classic 300 Tang dynasty poems — per-character Hanyu Pinyin, offline Mandarin read-aloud, poem appreciation and poet biographies.",
    about: [
      "Tang Poems (唐诗三百首) is a beautifully simple reader for the classic anthology of 300 Tang dynasty poems. Every Chinese character is annotated with toned Hanyu Pinyin so learners can read along and correct their pronunciation, and a built-in offline Mandarin male voice reads each poem aloud — no network required.",
      "Each poem comes with its background and appreciation to bring out its meaning, plus biographies of famous poets like Li Bai, Du Fu, Wang Wei and Bai Juyi. Search by poem title, poet or keyword (including pinyin), all in a clean white design built natively for iPhone and iPad.",
    ],
    highlights: [
      "300 classic Tang dynasty poems",
      "Per-character Hanyu Pinyin for read-along learning",
      "Offline Mandarin male-voice read-aloud",
      "Poem appreciation, poet bios and pinyin search",
    ],
    platform: "iPhone & iPad",
    tech: "SwiftUI",
    accent: "purple",
    ios: "https://apps.apple.com/app/id6782542492",
    github: "https://github.com/alfredang/tangpeomapp",
  },
  {
    id: "sgbus",
    name: "SG Bus Live",
    tagline: "Live Singapore bus arrivals",
    category: "Navigation · Transit",
    blurb:
      "Live Singapore bus arrival timings for any stop — search by code, road or landmark and see the next three buses, minutes away and how full they are. Data from LTA DataMall.",
    about: [
      "SG Bus Live gives quick access to real-time Singapore bus arrival timings. Search any bus stop by code, road or landmark, then refresh to see live arrivals — for each service you can compare the next three buses at a glance, including how many minutes away they are and how crowded they are (Seats Available, Standing or Limited Standing).",
      "Arrival data is sourced from Singapore's LTA DataMall, and no sign-in or account is required — just open the app and start checking your stops. A native SwiftUI app for iPhone.",
    ],
    highlights: [
      "Live bus arrivals for any Singapore bus stop",
      "Search by stop code, road name or landmark",
      "Next three buses with arrival time and crowding",
      "No sign-in — data from LTA DataMall",
    ],
    platform: "iPhone",
    tech: "SwiftUI · LTA DataMall",
    accent: "green",
    ios: "https://apps.apple.com/app/id6782321279",
    github: "https://github.com/alfredang/sgbusapp",
  },
  {
    id: "hanyupinyin",
    name: "汉语拼音 Hanyu Pinyin",
    tagline: "Learn pinyin and type faster",
    category: "Education · Chinese",
    blurb:
      "A fully offline Chinese-learning app for Hanyu Pinyin foundations and pinyin typing practice — initials, finals, tones, pronunciation and scored drills.",
    about: [
      "汉语拼音 Hanyu Pinyin helps Chinese learners build the foundations of Mandarin pronunciation and pinyin input. Study initials, finals, the four tones and pinyin typing rules, each paired with example characters for context.",
      "The app includes tap-to-hear Mandarin pronunciation on pinyin cards and practice questions, plus five drill modes covering characters, words, initials, finals and mixed exercises. It scores by accuracy and words per minute, so learners can see their typing speed improve over time.",
      "Everything runs offline in a native SwiftUI iPhone app. There is no registration, no network dependency and no data collection.",
    ],
    highlights: [
      "Initials, finals, tones and pinyin input lessons",
      "Tap-to-hear Mandarin pronunciation with AVSpeech",
      "Five scored practice modes for pinyin typing",
      "Fully offline — no account, no data collection",
    ],
    platform: "iPhone",
    tech: "SwiftUI · AVSpeech",
    accent: "cyan",
    ios: "https://apps.apple.com/us/app/%E6%B1%89%E8%AF%AD%E6%8B%BC%E9%9F%B3-hanyu-pinyin/id6782562028",
    github: "https://github.com/alfredang/hanyupinyinapp",
  },
  {
    id: "zenasana",
    name: "ZenAsana",
    tagline: "A calm yoga companion",
    category: "Health & Fitness · Yoga",
    blurb:
      "A beautifully simple yoga companion — browse essential poses with Sanskrit names, animated figures and step-by-step instructions, then flow through guided sequences.",
    about: [
      "ZenAsana is a calm, beautifully simple yoga companion for iPhone and iPad. Browse a library of essential poses, each with its common and Sanskrit name, an animated figure, difficulty level, clear step-by-step instructions and key benefits. Poses are organised by stance state — Standing, Seated, Supine, Prone, Kneeling, Balancing, Inversion and Restorative — so you can quickly find exactly what your body needs.",
      "When you are ready to move, flow through popular guided sequences like Sun Salutation A and a morning wake-up, with a timed player to keep you in rhythm. Filter by stance or search by name, all in a clean white design built natively in SwiftUI.",
    ],
    highlights: [
      "Library of essential poses with Sanskrit names",
      "Animated figures, instructions and key benefits",
      "Organised by stance state — filter or search",
      "Timed guided sequences like Sun Salutation A",
    ],
    platform: "iPhone & iPad",
    tech: "SwiftUI",
    accent: "blue",
    ios: "https://apps.apple.com/app/id6782540959",
    github: "https://github.com/alfredang/yogaapp",
  },
  {
    id: "passportphoto",
    name: "Tertiary Passport Photo",
    tagline: "Compliant passport photos in seconds",
    category: "Photo & Video",
    blurb:
      "Turn a selfie into a clean, compliant passport or visa photo — automatic background removal, face-aware cropping to official sizes, and a print-ready 300 DPI export. On-device and private.",
    about: [
      "Tertiary Passport Photo creates a clean, compliant passport or visa photo in seconds, right on your iPhone. Take a selfie or pick one from your library and the app automatically removes the background and replaces it with clean white, filters out clutter behind you, detects your face and crops to the official size for your country, then exports a print-ready photo at 300 DPI.",
      "It supports official sizes for Singapore (default), the United States, United Kingdom, EU / Schengen, Australia, Canada, India, China, Japan and Malaysia. Everything happens on-device, so your photos stay private — no upload, no account.",
    ],
    highlights: [
      "Selfie to compliant passport photo in seconds",
      "Automatic white-background replacement and crop",
      "Official sizes for 10 countries (Singapore default)",
      "On-device and private — print-ready 300 DPI export",
    ],
    platform: "iPhone",
    tech: "SwiftUI · Vision · on-device ML",
    accent: "green",
    ios: "https://apps.apple.com/app/id6782430909",
    github: "https://github.com/alfredang/passportphoto",
  },
  {
    id: "speedtyping",
    name: "Tertiary SpeedTyping",
    tagline: "Learn fast, accurate touch-typing",
    category: "Education",
    blurb:
      "Learn to type fast and accurately on iPad — a colour-coded fingering guide, graded practice articles and drills, and timed WPM/CPM tests with accuracy.",
    about: [
      "Tertiary SpeedTyping teaches correct touch-typing on iPad. Start with a hand-position and fingering guide on a colour-coded keyboard that shows which finger presses every key, then build speed with graded practice articles from Basic to Expert and repetitive drills — home row, reaches, bigrams, pinky power and numbers.",
      "Live words-per-minute and characters-per-minute scoring with accuracy tracks your progress, and graded typing tests with a configurable passing speed let you prove your improvement — all in a native iPad app for focused, distraction-free practice.",
    ],
    highlights: [
      "Colour-coded fingering and hand-position guide",
      "Graded practice articles from Basic to Expert",
      "Repetitive drills — home row, reaches, bigrams, numbers",
      "Live WPM/CPM scoring and graded timed tests",
    ],
    platform: "iPad",
    tech: "SwiftUI",
    accent: "amber",
    ios: "https://apps.apple.com/app/id6782661288",
    github: "https://github.com/alfredang/speedtypingapp",
  },
  {
    id: "music-theory-maestro",
    name: "Music Theory Maestro",
    tagline: "Scales, chords & grade exams",
    category: "Education · Music",
    blurb:
      "A complete interactive music-theory tutor for iPhone and iPad — notation, clefs, the Wheel of Scales, chords, playable examples and Grade 1-8 mock exams. Offline, no account required.",
    about: [
      "Music Theory Maestro teaches music theory from the first note through advanced harmony. Learners work through notation, staff reading, ledger lines, treble, bass and alto clefs, rhythm, intervals, key signatures, cadences, modes, transposition and modulation in a native iPhone and iPad app.",
      "The app makes theory audible and visual: a custom SwiftUI notation engine renders real staff examples, an interactive piano highlights notes, the Wheel of Scales maps the circle of fifths, and built-in audio plays notes, scales, chords and progressions so learners can connect symbols with sound.",
      "For exam preparation, Grade 1-8 mock exams combine notation-reading questions, multiple-choice theory checks, instant explanations, scoring and best-score tracking. Everything works offline with no account and no data collection.",
    ],
    highlights: [
      "Structured lessons from basics to advanced harmony",
      "Custom notation, piano keyboard and Wheel of Scales",
      "Playable scales, chords, modes and progressions",
      "Grade 1-8 mock exams with scoring and explanations",
    ],
    platform: "iPhone & iPad",
    tech: "SwiftUI · AVAudioEngine · Canvas",
    accent: "cyan",
    ios: "https://apps.apple.com/us/app/music-theory-maestro/id6782606403",
    github: "https://github.com/alfredang/musictheoryapp",
  },
  {
    id: "spinwheel",
    name: "Spin Wheel Fun",
    tagline: "Let the wheel decide",
    category: "Entertainment",
    blurb:
      "A colourful fortune wheel for fair decisions — add up to 20 choices, press SPIN, and let the pointer pick a random winner with sound, confetti and celebration.",
    about: [
      "Spin Wheel Fun turns every decision into a celebration. Can't decide what to eat, who goes first or which task to tackle next? Add your choices, press the big SPIN button, and let the wheel pick for you — fair and square.",
      "Add up to 20 custom labels (names, foods, chores, prizes — anything), enjoy a smooth, realistic spin with sound effects, and watch the balloons, confetti and celebration music when a winner lands. Sound, music and effects are all toggleable, in a native SwiftUI iPhone app.",
    ],
    highlights: [
      "Add up to 20 custom choices",
      "One big SPIN button with a realistic spin",
      "Celebration music, balloons and confetti on a win",
      "Toggle sound, music and effects",
    ],
    platform: "iPhone",
    tech: "SwiftUI",
    accent: "purple",
    ios: "https://apps.apple.com/app/id6782566345",
    github: "https://github.com/alfredang/spinningwheelapp",
  },
  {
    id: "freefood",
    name: "FreeFood: Share Leftovers",
    tagline: "Share & find free food nearby",
    category: "Food & Drink · Community",
    blurb:
      "Share and discover free leftover food nearby — post a photo, location and pickup time window on a map so good food finds a neighbour instead of the bin. No account required.",
    about: [
      "FreeFood: Share Leftovers helps neighbours share surplus food instead of throwing it away. Post what you have with a photo, drop a pin on the map and set a pickup time window, and anyone nearby can discover it and arrange to collect — cutting waste and helping out at the same time.",
      "Listings appear on an Apple Map so you can see what is available around you at a glance, and everything syncs through CloudKit's public database with no account required. A native SwiftUI app for iPhone.",
    ],
    highlights: [
      "Share leftover food with a photo and location",
      "Set a pickup time window on a map",
      "Discover free food nearby on Apple Maps",
      "No account required — syncs via CloudKit",
    ],
    platform: "iPhone",
    tech: "SwiftUI · MapKit · CloudKit",
    accent: "green",
    ios: "https://apps.apple.com/app/id6782157783",
    github: "https://github.com/alfredang/freefoodapp",
  },
  {
    id: "sgcarpark",
    name: "SG Carpark Live",
    tagline: "Live Singapore carpark availability",
    category: "Navigation · Travel",
    blurb:
      "Check live Singapore carpark availability — see how many lots are free at carparks near you or your destination, sourced from LTA DataMall. No sign-in required.",
    about: [
      "SG Carpark Live shows real-time carpark availability across Singapore. Find how many lots are free at carparks near you or your destination before you set off, so you spend less time circling for a space.",
      "Availability data is sourced from Singapore's LTA DataMall and updates live, with no sign-in or account required — a native SwiftUI app for iPhone.",
    ],
    highlights: [
      "Live lot availability for Singapore carparks",
      "Find free spaces near you or your destination",
      "Data sourced from LTA DataMall",
      "No sign-in — just open and check",
    ],
    platform: "iPhone",
    tech: "SwiftUI · LTA DataMall",
    accent: "cyan",
    ios: "https://apps.apple.com/app/id6781785702",
    github: "https://github.com/alfredang/sgcarparkapp",
  },
  {
    id: "phonics",
    name: "Phonics Pronunciation Coach",
    tagline: "Speak English clearly & confidently",
    category: "Education · Language",
    blurb:
      "Learn clear English pronunciation with synthetic phonics — hear every sound, word and sentence in a British or American accent, with IPA, articulation tips and out-loud practice. Fully offline.",
    about: [
      "Phonics Pronunciation Coach helps adults speak English clearly and confidently. Built on proven synthetic-phonics methods, it covers the full curriculum — consonants, short and long vowels, digraphs, blends, vowel teams, diphthongs, r-controlled vowels and soft c/g — with IPA, a plain-language articulation tip and example words for every sound. Tap anything to hear it spoken instantly.",
      "Practise out loud with minimal pairs, words and sentences in a British or American accent and a male or female voice, all working completely offline — a native SwiftUI app for focused pronunciation practice.",
    ],
    highlights: [
      "Full synthetic-phonics curriculum with IPA",
      "British or American accent, male or female voice",
      "Articulation tips and example words for every sound",
      "Minimal-pairs practice — fully offline",
    ],
    platform: "iPhone & iPad",
    tech: "SwiftUI · AVSpeech",
    accent: "blue",
    ios: "https://apps.apple.com/app/id6782569616",
    github: "https://github.com/alfredang/phonicsapp",
  },
];

export function getMobileApp(slug: string): MobileApp | undefined {
  return MOBILE_APPS.find((a) => a.id === slug);
}
