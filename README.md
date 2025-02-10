# AppMaker Assignment

This project is an Expo application developed as part of the AppMaker assignment.

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Project Structure](#project-structure)
- [Dependencies](#dependencies)
- [Contributing](#contributing)
- [License](#license)

## Installation

To set up the project locally, follow these steps:

1. **Clone the repository:**

   ```bash
   git clone https://github.com/sreehariv-code/appmaker-assignment.git
   cd appmaker-assignment
   ```

2. **Install dependencies:**

   Ensure you have [Node.js](https://nodejs.org/) installed. Then, run:

   ```bash
   npm install
   ```

## Usage

To start the application, execute:

```bash
npx expo start
```

This command will provide options to open the app in:

- A development build
- An [Android emulator](https://docs.expo.dev/workflow/android-studio-emulator/)
- An [iOS simulator](https://docs.expo.dev/workflow/ios-simulator/)
- [Expo Go](https://expo.dev/client), a limited sandbox for trying out app development

## Project Structure

The project's structure is organized as follows:

```
appmaker-assignment/
├── app/
├── assets/
├── components/
├── constants/
├── context/
│   └── useProduct/
├── scripts/
├── src/
│   └── types/
├── types/
├── utils/
├── .gitignore
├── README.md
├── app.json
├── babel.config.js
├── global.css
├── metro.config.js
├── nativewind-dev.d.ts
├── nativewind-env.d.ts
├── package-lock.json
├── package.json
├── tailwind.config.js
├── tsconfig.json
```

- **app/**: [Contains the page routing and modals]
- **assets/**: [contains fonts and static images]
- **components/**: [Components used in the layout]
- **constants/**: [Contains constants used in the project]
- **context/useProduct/**: [For Global State Management]
- **scripts/**: [Contains script to reset the project]
- **types/**: [Types defined for defining Props]
- **utils/**: [Contains helper functions for common task]

## Dependencies

Key dependencies used in this project include:

- [Expo](https://expo.dev/): A framework and platform for universal React applications.
- [React](https://reactjs.org/): A JavaScript library for building user interfaces.
- [NativeWind](https://www.nativewind.dev/): A utility-first CSS framework for React Native.
- [TypeScript](https://www.typescriptlang.org/): A typed superset of JavaScript.

For a complete list of dependencies, refer to the `package.json` file.

## Screenshots

![Alt text](./screenshots/long-shot.jpeg)

## Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository.
2. Create a new branch: `git checkout -b feature/YourFeature`
3. Make your changes and commit them: `git commit -m 'Add some feature'`
4. Push to the branch: `git push origin feature/YourFeature`
5. Submit a pull request.
