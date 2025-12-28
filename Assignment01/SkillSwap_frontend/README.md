# SkillSwap - Mobile Application

A peer-to-peer skill exchange platform built with React Native and Expo. Connect with others to learn new skills and share your expertise without monetary transactions.

## Features

Authentication: Secure login and signup with email validation
Skill Discovery: Browse available skill offers from other users
Create Offers: Post your own skills to teach others
User Profiles: Manage your profile, skills, and track your activity
Modern UI: Beautiful black-themed interface with green accents

## Screens

1. Login Screen: Clean authentication with email/password
2. Signup Screen: Account creation with profile information
3. Home Feed: Browse available skill offers with ratings and categories
4. Create Screen: Post new skill offers with category selection
5. Profile Screen: View and manage your profile, skills, and offers

## Demo Credentials

For testing purposes, use these credentials:
Email: test@student.com
Password: 12345

## Installation & Setup

### Prerequisites

 Node.js (v16 or higher)
 npm or yarn
 Expo CLI (npm install -g @expo/cli)
 iOS Simulator (for iOS development) or Android Studio (for Android development)

### Installation Steps

1. Clone the repository
   bash
   git clone <repository-url>
   cd skillswap-mvp


2. Install dependencies
   bash
   npm install
  

3. Start the development server
   bash
   npm start
  

4. Run on device/simulator
For iOS: Press i in the terminal or scan QR code with Expo Go app
For Android: Press a in the terminal or scan QR code with Expo Go app
For Web: Press w in the terminal

## Project Structure


app/
├── _layout.tsx          # Root layout with navigation
├── index.tsx            # App entry point (redirects to login)
├── login.tsx            # Login screen
├── signup.tsx           # Signup screen
├── (tabs)/              # Tab navigation screens
│   ├── _layout.tsx      # Tab layout configuration
│   ├── index.tsx        # Home feed screen
│   ├── create.tsx       # Create skill offer screen
│   └── profile.tsx      # User profile screen
└── modal.tsx            # Modal screen (existing)

components/               # Reusable UI components
constants/
├── theme.ts             # Color scheme and styling
hooks/                   # Custom React hooks
```

## Color Scheme

The app uses a modern black theme with green accents:
Background: Pure black (#000000)
Cards: Dark gray (#111111)
Text: White (#ffffff)
Accent: Bright green (#00ff88)
Borders: Dark gray (#333333)

## Key Features Implemented

### Authentication
 Email/password login and signup
 Form validation and error handling
 Secure navigation flow

### Home Feed
 Display skill offers with categories and ratings
 Card-based layout with user information
 Scrollable list of available skills

### Create Screen
 Form to post new skill offers
 Category selection with visual feedback
 Input validation and success feedback

### Profile Screen
 User information display
 Skills showcase
 Statistics (sessions completed, skills offered)
 My offers management
 Logout functionality

## Technologies Used

- React Native: Cross-platform mobile development
- Expo: Development platform and tools
- TypeScript: Type-safe JavaScript
- Expo Router: File-based navigation
- React Navigation: Navigation library

## Development Notes

 All screens are fully responsive and optimized for mobile devices
 The app uses dummy data for demonstration purposes
 Navigation is handled through Expo Router with proper screen transitions
 Styling follows a consistent design system with the black theme

## Future Enhancements

 Backend integration with real database
 Real-time messaging between users
 Push notifications for booking updates
 Advanced search and filtering
 Payment integration (if needed)
 Video calling integration
 Rating and review system

## Troubleshooting

If you encounter any issues:

1. Metro bundler issues: Clear cache with `npx expo start --clear`
2. Dependencies issues: Delete `node_modules` and run `npm install` again
3. iOS simulator issues: Reset simulator and restart Expo
4. Android issues: Clear Android cache and restart

## Contributing

This is a prototype MVP for demonstration purposes. For production use, additional features like backend integration, real authentication, and data persistence would be required.

## License

This project is created for educational purposes as part of the SkillSwap assignment.