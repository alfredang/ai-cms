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
    id: "sgmrt",
    name: "SG MRT",
    tagline: "Singapore MRT journey planner",
    category: "Navigation · Transit",
    blurb:
      "Plan trips across Singapore's MRT network with shortest-route estimates, line-by-line station browsing, favourites, a bundled system map and optional live LTA context.",
    about: [
      "SG MRT is a native iPhone app for planning trips across Singapore's MRT network. Choose your start and destination stations to calculate the shortest route, estimated travel time, station count and transfers, then follow the route step by step by MRT line.",
      "The app also includes a line browser with interchange stations marked, favourites for repeat journeys, a built-in Singapore MRT system map, GPS nearest-station support and optional live LTA DataMall context for service alerts and crowd density.",
    ],
    highlights: [
      "Shortest-route planning across Singapore's MRT network",
      "Estimated time, station count and transfer breakdown",
      "Line browser, favourites and bundled MRT system map",
      "GPS nearest station plus optional live LTA context",
    ],
    platform: "iPhone",
    tech: "SwiftUI · CoreLocation · LTA DataMall",
    accent: "cyan",
    ios: "https://apps.apple.com/app/sgmrt/id6781980848",
    github: "https://github.com/alfredang/sgmrtapp",
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
  {
    id: "hrms",
    name: "Tertiary HRMS",
    tagline: "Your HR portal, in your pocket",
    category: "Business · HR",
    blurb:
      "The native iPhone companion to the Tertiary HRMS portal — check leave balances, request leave, view payslips, browse the team directory and track expenses, all from your phone.",
    about: [
      "Tertiary HRMS is the native iPhone client for the Tertiary Infotech HR Management System. Sign in securely with email and password or OTP, then see your leave balances, expense claims and pending approvals at a glance on the dashboard.",
      "Request leave with automatic working-day calculation, open authenticated payslips in a built-in PDF viewer, browse the team directory with richer details for managers, and review holidays, events and approved leave by month — plus weekly timesheets and your full employee profile. A genuine native SwiftUI app talking to the same secure backend that powers the HRMS web portal.",
    ],
    highlights: [
      "Secure email/password or OTP sign-in with session persistence",
      "Dashboard — leave balances, expenses and approval queues",
      "Request leave with automatic working-day calculation",
      "Native PDF payslips, team directory, calendar and timesheet",
    ],
    platform: "iPhone",
    tech: "SwiftUI · MVVM · PDFKit",
    accent: "blue",
    ios: "https://apps.apple.com/app/tertiary-hrms/id6759821144",
    github: "https://github.com/alfredang/hrmsapp",
  },
  {
    id: "markdown",
    name: "Tertiary Markdown",
    tagline: "Obsidian-compatible Markdown notes",
    category: "Productivity",
    blurb:
      "A native Markdown editor for iPhone, iPad and Mac — edit, split and preview notes stored as plain .md files in Obsidian-compatible vaults, fully offline with no proprietary lock-in.",
    about: [
      "Tertiary Markdown is a native note-taking app that keeps your notes as plain .md files in local folders, compatible with Obsidian vaults — no proprietary format, no lock-in. Switch between Edit, Split and Preview modes with autosave, manage notes through a sidebar file tree, and render images, tables, checklists, code blocks and headings with a custom, dependency-free Markdown engine.",
      "On Mac it opens into a VS Code-style workspace with an activity bar, explorer, editor and embedded tabbed terminals (powered by SwiftTerm), plus slash commands for inserting snippets and an extension marketplace including GitHub integration and an LLM-powered wiki. Built from a single SwiftUI codebase for macOS, iPad and iPhone, and fully offline on-device.",
    ],
    highlights: [
      "Edit, Split and Preview modes with autosave",
      "Plain .md files in Obsidian-compatible vaults — no lock-in",
      "Sidebar file tree, slash commands and interactive checkboxes",
      "Mac workspace with embedded terminals; fully offline",
    ],
    platform: "iPhone, iPad & Mac",
    tech: "SwiftUI · NSTextView · SwiftTerm",
    accent: "cyan",
    ios: "https://apps.apple.com/us/app/tertiary-markdown/id6782659815",
    github: "https://github.com/alfredang/markdownapp",
  },
  {
    id: "wifispeed",
    name: "Tertiary WiFi Speed",
    tagline: "Test your internet speed",
    category: "Utilities",
    blurb:
      "A native internet speed test for iPhone — measure real download and upload throughput, ping and jitter with a live animated gauge, on-device history and Wi-Fi vs cellular awareness.",
    about: [
      "Tertiary WiFi Speed measures your real internet performance — download and upload throughput, ping latency and jitter — by fanning out multiple parallel connections for an accurate reading. A live animated gauge shows your speed in real time as the test runs, and every result is saved to on-device history so you can compare connections over time.",
      "The app is connection-aware: it distinguishes Wi-Fi from cellular and flags metered links, and runs its tests against Cloudflare's public speed-test infrastructure with all measurement calculated locally. A native SwiftUI iPhone app built on Swift concurrency and the Network framework, with a built-in WhatsApp feedback option.",
    ],
    highlights: [
      "Real download and upload throughput via parallel connections",
      "Live animated gauge with ping and jitter",
      "On-device history to compare results over time",
      "Wi-Fi vs cellular awareness and metered-link flagging",
    ],
    platform: "iPhone",
    tech: "SwiftUI · Network framework · Cloudflare",
    accent: "green",
    ios: "https://apps.apple.com/us/app/tertiary-wifi-speed/id6783438022",
    github: "https://github.com/alfredang/wifispeedapp",
  },
  {
    id: "daodejing",
    name: "Dao De Jing 道德经",
    tagline: "Laozi's classic, read and heard",
    category: "Books · Reference",
    blurb:
      "A native iPhone reader for Laozi's Dao De Jing — the original classical Chinese paired with modern explanations, plus offline Mandarin narration. Fully offline, no accounts, no tracking.",
    about: [
      "Dao De Jing 道德经 is a native iPhone reader for Laozi's classical Daoist text, organised into six thematic sections that move from the foundational principles and the nature of the Dao through personal cultivation, virtue, governance and practical wisdom. Every passage pairs the original classical Chinese with a clear modern-Chinese explanation, so the text stays approachable without losing its source.",
      "Built-in Mandarin text-to-speech reads any passage aloud with adjustable speed using Apple's on-device speech synthesiser, so the whole app works completely offline — no network, no accounts and no data collection. A native SwiftUI app with a Read / Feedback / About bottom navigation and semantic colours that adapt to light and dark mode.",
    ],
    highlights: [
      "Six thematic sections covering the full text",
      "Original classical Chinese paired with modern explanations",
      "Offline Mandarin narration with adjustable speed",
      "Fully offline — no accounts, no data collection",
    ],
    platform: "iPhone",
    tech: "SwiftUI · AVSpeechSynthesizer · NavigationStack",
    accent: "amber",
    ios: "https://apps.apple.com/us/app/dao-de-jing-%E9%81%93%E5%BE%B7%E7%BB%8F/id6784239162",
    github: "https://github.com/alfredang/daodejingapp",
  },
  {
    id: "diamondsutra",
    name: "Diamond Sutra 金刚经",
    tagline: "The full sutra, read and recited",
    category: "Books · Reference",
    blurb:
      "A native iPhone and iPad reader for the complete 32-chapter Diamond Sutra — with Mandarin narration, live sentence highlighting, a recitation counter and daily reminders. Fully offline.",
    about: [
      "Diamond Sutra 金刚经 is a native reader for the complete Buddhist scripture across all 32 chapters, with chapter-by-chapter or continuous full-text reading and full-text search. Mandarin text-to-speech narrates any passage with live sentence highlighting and adjustable speed, so you can follow along as it reads.",
      "A built-in recitation counter tracks your daily and lifetime totals against a target you set, while bookmarks, per-chapter progress indicators and daily verse reminders help build a steady practice. Adjustable text size and light/dark themes round it out — a universal SwiftUI app for iPhone and iPad that runs completely offline with no data collection.",
    ],
    highlights: [
      "Complete 32-chapter text with full-text search",
      "Mandarin narration with live sentence highlighting",
      "Recitation counter with daily and lifetime totals",
      "Bookmarks, progress tracking and daily reminders",
    ],
    platform: "iPhone & iPad",
    tech: "SwiftUI · AVSpeechSynthesizer · UserNotifications",
    accent: "purple",
    ios: "https://apps.apple.com/us/app/diamond-sutra-%E9%87%91%E5%88%9A%E7%BB%8F/id6784362803",
    github: "https://github.com/alfredang/jinganjinapp",
  },
  {
    id: "weather",
    name: "Tertiary Weather",
    tagline: "Current conditions, anywhere",
    category: "Weather",
    blurb:
      "A fast, clean native weather app for iPhone and iPad — search any city worldwide for live temperature, feels-like, humidity, wind and sky conditions, pinned on an interactive Apple Map.",
    about: [
      "Tertiary Weather is a fast, clean way to check current conditions anywhere in the world. Search for any city, town or place and instantly see the temperature, apparent (\"feels like\") temperature, humidity, wind speed and a clear sky-condition summary with day- and night-aware icons — with the exact location pinned on an interactive Apple Map.",
      "A genuine native SwiftUI app for iPhone and iPad, it pulls live data from the free Open-Meteo API over async/await URLSession, uses MapKit for the location view, and ships with full light/dark mode, Dynamic Type, VoiceOver support and a Weather / Feedback / About bottom navigation.",
    ],
    highlights: [
      "Search any city or place worldwide",
      "Temperature, feels-like, humidity, wind and sky conditions",
      "Location pinned on an interactive Apple Map",
      "Native SwiftUI with full light and dark mode",
    ],
    platform: "iPhone & iPad",
    tech: "SwiftUI · MapKit · Open-Meteo",
    accent: "blue",
    ios: "https://apps.apple.com/us/app/tertiary-weather/id6785375222",
    github: "https://github.com/alfredang/weatherapp",
  },
  {
    id: "planner",
    name: "Tertiary Planner",
    tagline: "Talk to plan your day",
    category: "Productivity",
    blurb:
      "A fast, private to-do and planner for iPhone with a chat-style assistant — type or speak your intent and Apple Intelligence drafts a clean to-do or appointment on-device. Nothing leaves your phone.",
    about: [
      "Tertiary Planner turns a sentence into a plan. Tell it what you need to do — by text or voice — and a chat-style assistant drafts a nicely worded to-do or appointment and saves it instantly. On supported devices it uses Apple Intelligence running entirely on-device to understand your intent; on others the same job is done by Apple's Natural Language and Speech frameworks, so nothing you type or say ever leaves your phone to any third party.",
      "To-dos and appointments live together in one clean list with a built-in calendar that shows your day, checked-off items auto-archive (and can be restored or cleared anytime), and everything syncs through your own private iCloud database. A genuine native SwiftUI app built on SwiftData + CloudKit with full light and dark mode — no accounts, no tracking, no third-party AI.",
    ],
    highlights: [
      "Chat-style assistant — type or speak, get a clean item",
      "Apple Intelligence intent understanding, fully on-device",
      "To-dos and appointments together with a built-in calendar",
      "Private iCloud sync — no accounts, no tracking",
    ],
    platform: "iPhone",
    tech: "SwiftUI · Apple Intelligence · SwiftData + CloudKit",
    accent: "cyan",
    ios: "https://apps.apple.com/app/tertiary-planner/id6785397240",
    github: "https://github.com/alfredang/plannerapp",
  },
  {
    id: "sgevcharging",
    name: "SG EV Charging",
    tagline: "Find Singapore EV chargers",
    category: "Navigation",
    blurb:
      "Locate electric-vehicle charging points across Singapore on a map-first native app — powered by live LTA DataMall data, with connector availability, plug types, charging speeds and Apple Maps directions.",
    about: [
      "SG EV Charging helps EV drivers in Singapore find a place to charge, fast. It pulls live charging-point data from LTA DataMall and plots it on an interactive Apple Map centred on your current location, a postal code, or any place you search — highlighting the nearest charger and ranking the rest by distance.",
      "Tap a charging point to see its available connectors, plug types, power ratings, operator and the last-updated time from the LTA feed, then get turn-by-turn driving directions straight through Apple Maps. A genuine native SwiftUI app for iPhone and iPad built on MapKit and CoreLocation, with a clean map-first workflow for quick station switching.",
    ],
    highlights: [
      "Live LTA DataMall charging-point data for Singapore",
      "Nearest charger by current location, postal code or search",
      "Connector availability, plug type, power rating and operator",
      "Apple Maps driving directions to any charging point",
    ],
    platform: "iPhone & iPad",
    tech: "SwiftUI · MapKit · LTA DataMall",
    accent: "green",
    ios: "https://apps.apple.com/app/sg-ev-charging/id6782317854",
    github: "https://github.com/alfredang/sgevchargingapp",
  },
  {
    id: "travelexpense",
    name: "Tertiary Travel Expense",
    tagline: "Track trip spending by voice",
    category: "Finance · Travel",
    blurb:
      "Log a travel expense by typing or speaking one sentence — on-device Apple Intelligence words it cleanly, live ECB rates convert it to your home currency, and a MapKit itinerary planner rounds out the trip.",
    about: [
      "Tertiary Travel Expense is the fastest way to track spending on a trip. Tell the built-in assistant what you spent — by typing or dictating a single sentence like \"Ramen lunch 1200 yen at Ichiran Shibuya\" — and the expense is logged, worded nicely, and converted to your home currency in one step. Foreign price and home-currency price sit side by side using European Central Bank reference rates across 30+ currencies, with the trip total grouped by day.",
      "Apple Intelligence Foundation Models phrase each entry entirely on-device, so nothing leaves your iPhone. Purchases can carry the shop or place they happened at and open in Apple Maps with one tap, and a MapKit itinerary planner lets you plan stops day by day with real place search and directions. A native SwiftUI app built on SwiftData with iCloud sync — no account, no ads, no tracking.",
    ],
    highlights: [
      "Chat-style entry — type or dictate an expense in one sentence",
      "On-device Apple Intelligence wording, nothing leaves your iPhone",
      "Live ECB rates convert 30+ currencies to your home currency",
      "MapKit itinerary planner and Apple Maps purchase locations",
      "iCloud sync with no account, no ads and no tracking",
    ],
    platform: "iPhone & iPad",
    tech: "SwiftUI · SwiftData · Apple Intelligence · MapKit",
    accent: "amber",
    ios: "https://apps.apple.com/app/tertiary-travel-expense/id6786986762",
    github: "https://github.com/alfredang/travelexpensetrackingapp",
  },
];

export function getMobileApp(slug: string): MobileApp | undefined {
  return MOBILE_APPS.find((a) => a.id === slug);
}
