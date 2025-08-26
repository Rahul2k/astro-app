# Your Jyotish: Your Personal Horoscope & Journal
Your Jyotish is a beautifully designed mobile application for iOS and Android that combines daily astrological insights with a private, offline-first journal. <br /> It's a space for users to reflect, record their thoughts, and align with their daily horoscope, all within a dynamic and personalized interface.<br />
This project is built with a clean, scalable architecture using React Native (Expo), ensuring a maintainable codebase ready for future expansion.<br />

## ✨ Key Features
1. Dynamic Daily Horoscopes: Get fresh, daily horoscope updates fetched from a live astrology API. <br />
2. Interactive Zodiac Selector: Seamlessly switch between the 12 zodiac signs. The app's entire theme and background image dynamically update to match the selected sign.<br />
3. Private & Secure Journaling: A dedicated space to write and save daily journal entries. All entries are stored securely on your device.<br />
4. Offline-First Functionality: Write and access all your journal entries even without an internet connection, thanks to local storage with AsyncStorage.<br />
5. Modern & Customizable UI: Built with the robust UI Kitten component library, offering a sleek and consistent user experience.<br />
6. Custom Theming: Utilizes custom fonts and a dynamic background system for a highly personalized feel.<br />

### Demo of the App
https://drive.google.com/file/d/10XUghAMH2-0M3CAJOwlHJyOyC6qn2rWN/view?usp=sharing
<br />
 
## 🛠️ Setup and Installation

### Clone the repository:
```bash
git clone "https://github.com/Rahul2k/astro-app.git" 
cd astro-app
```

### Install dependencies:
```bash
npm install
```

### Run the application:
```bash
npx expo start -c
```

Scan the QR code with the Expo Go app on your iOS or Android device.

## 📁 Folder Structure
The project follows a clean, scalable folder structure:

```bash
.
├── App.js
├── app.json
├── assets
│   ├── fonts
│   ├── icons
│   └── images
├── index.js
├── mapping.json
├── package.json
├── README.md
├── src
│   ├── context
│   ├── hooks
│   ├── screens
│   ├── services
│   ├── styles
│   └── utils
```
  
## 🔧 Tech Stack
- Framework: React Native (Expo)
- UI Library: UI Kitten
- Navigation: React Navigation
- Local Storage: AsyncStorage
- Custom Fonts
- Horoscope Data: Mocked

## 🚀 The Future of Your Jyotish: A Product Roadmap
1. The Notification feature needs to be improved, providing option to set the timer for reminder<br />
2. User Login and User Access management to be implemented for personalised and secure access<br />
3. Improve UI/UX, use more polished components
4. User profile, with birth date, time, place etc. to be added, for a personalised experience, rather than the current generalised experience<br />
5. Based on user consent, parse the journal data, to get an accurate scoring of personalised automated predictions<br />

