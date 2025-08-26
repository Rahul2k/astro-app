Your Jyotish: Your Personal Horoscope & Journal
Your Jyotish is a beautifully designed mobile application for iOS and Android that combines daily astrological insights with a private, offline-first journal. It's a space for users to reflect, record their thoughts, and align with their daily horoscope, all within a dynamic and personalized interface.
This project is built with a clean, scalable architecture using React Native (Expo), ensuring a maintainable codebase ready for future expansion.
✨ Key Features
Dynamic Daily Horoscopes: Get fresh, daily horoscope updates fetched from a live astrology API.
Interactive Zodiac Selector: Seamlessly switch between the 12 zodiac signs. The app's entire theme and background image dynamically update to match the selected sign.
Private & Secure Journaling: A dedicated space to write and save daily journal entries. All entries are stored securely on your device.
Offline-First Functionality: Write and access all your journal entries even without an internet connection, thanks to local storage with AsyncStorage.
Modern & Customizable UI: Built with the robust UI Kitten component library, offering a sleek and consistent user experience.
Custom Theming: Utilizes custom fonts and a dynamic background system for a highly personalized feel.
🛠️ Setup and Installation
Clone the repository:
git clone <your-repo-url>
cd astro-journal


Install dependencies:
npm install


Run the application:
npx expo start -c

Scan the QR code with the Expo Go app on your iOS or Android device.
📁 Folder Structure
The project follows a clean, scalable folder structure:
/src
├── hooks            # default and custom react hooks
├── styles           # Stylesheets for screens
├── screens          # Main app screens 
├── services         # Notification and API management
├── context          # Global context management 
└── utils            # Utility functions
/assets
├── fonts/           # Custom .ttf font files
├── icons/           # Zodiac background images...
└── images/
App.js               # Main app entry point
index.js             # Root component registration


🔧 Tech Stack
- Framework: React Native (Expo)
- UI Library: UI Kitten
- Navigation: React Navigation
- Local Storage: AsyncStorage
- Custom Fonts
- Horoscope Data: Mocked

🚀 The Future of Your Jyotish: A Product Roadmap
AstroJournal is more than just an app; it's a platform for personal growth and reflection. Here is a strategic roadmap for its evolution, focusing on user engagement, personalization, and monetization.
Phase 1: Deepening User Engagement & Habit Formation
(Goal: Make AstroJournal an indispensable part of the user's daily routine.)
🔔 Push Notification Reminders: Implement customizable daily reminders to encourage consistent journaling. Users can set their preferred time to receive a gentle nudge like, "✨ How was your day, Aries? Your journal is waiting."
😊 Mood Tracking & Analytics: Integrate a simple mood tracker with each journal entry (e.g., emojis or a 1-5 scale). Over time, the app will visualize mood trends and correlate them with astrological events, providing insights like "You often feel most energetic during a Waxing Moon."
✍️ Guided Journal Prompts: For users who face a blank page, we'll offer daily, horoscope-driven prompts. For example, "Mercury is in retrograde. What communication challenges did you face today and how did you overcome them?"
Phase 2: Personalization, Community & Data Security
(Goal: Make the app feel uniquely personal and secure, with optional social features.)
🎨 Advanced Theming Engine: Introduce multiple themes (e.g., "Cosmic Dark," "Galaxy Light"), font choices, and color palettes to allow users to fully customize their journaling space.
☁️ Secure Cloud Sync & Backup: Offer seamless and encrypted cloud backup via iCloud and Google Drive. This is a critical feature for user trust, ensuring their precious journal entries are never lost, even if they change devices.
🤝 Social Sharing: Enable users to share their daily horoscope (not their private journal entries) as a beautifully designed image card to social media platforms like Instagram Stories or X.
Phase 3: Premium Features & Monetization
(Goal: Introduce a premium subscription tier for users seeking deeper astrological insights.)
🌟 In-Depth Astrological Reports: Go beyond daily horoscopes. Offer premium reports based on a user's full birth chart (date, time, and place of birth), including natal chart analysis, compatibility reports with friends, and career guidance.
🎙️ Audio Journaling: Allow users to record their thoughts as voice notes, offering a faster and more emotive way to journal.
🔍 Advanced Search & Tagging: Implement powerful search functionality to find past entries by keyword, date, mood, or custom tags.
Phase 4: Expanding the Ecosystem
(Goal: Integrate AstroJournal into the user's broader digital life.)
🌐 Localization: Translate the app into multiple languages (e.g., Spanish, French, German) to reach a global audience.
📱 Home Screen Widgets: Develop beautiful iOS and Android widgets that display the user's daily horoscope directly on their home screen.
⌚ Wearable Integration: Create a companion app for Apple Watch and Wear OS for quick journal entries and horoscope glances on the go.
