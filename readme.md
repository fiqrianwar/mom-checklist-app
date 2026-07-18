# Mom Checklist App

A React Native application built with Expo to help parents organize and track checklists for pregnancy preparation and baby essentials.

## Features

- Create new checklist
- Edit checklist
- Delete checklist
- Expand / Collapse checklist items
- Track checklist progress
- Mark checklist items as completed
- Persist data locally using AsyncStorage
- Separate checklist categories:
  - New Moms
  - Lil Ones

---

## Screens

- Home
- Mom Checklist
  - New Moms
  - Lil Ones

---

## Tech Stack

### Core

- Expo
- React Native
- TypeScript

### Navigation

- React Navigation
- React Navigation Material Top Tabs

### State Management

- Zustand
- Zustand Persist

### Form & Validation

- React Hook Form
- Zod

### Storage

- AsyncStorage

### UI

- @gorhom/bottom-sheet
- React Native Safe Area Context

### Code Quality

- ESLint
- Prettier
- Husky
- lint-staged

---

## 📂 Project Structure

```text
src
├── assets
├── components
├── hooks
├── navigation
├── schemas
├── screens
├── store
├── theme
├── types
└── utils
```

---

## 🚀 Getting Started

### 1. Clone the repository

```bash
git https://github.com/fiqrianwar/mom-checklist-app.git
cd mom-checklist-app
```

### 2. Install dependencies

```bash
npm install
```

### 3. Start the Expo development server

```bash
npm start
```

### 4. Run the application

Android

```bash
npm run android
```

iOS

```bash
npm run ios
```

---

## 📜 Available Scripts

| Command           | Description                    |
| ----------------- | ------------------------------ |
| `npm start`       | Start Expo development server  |
| `npm run android` | Run on Android emulator/device |
| `npm run ios`     | Run on iOS simulator           |

---

## Architecture

The application follows a feature-based architecture.

```text
Screen
   │
   ▼
Components
   │
   ▼
Hooks
   │
   ▼
Zustand Store
   │
   ▼
AsyncStorage
```

---

## Data Persistence

Checklist data is stored locally using:

- Zustand Persist
- AsyncStorage

This allows all checklist data to remain available even after the application is closed.

---
