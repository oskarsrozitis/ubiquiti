# Ubiquiti-hw

This project is a web application built with React, TailwindCSS, and Vite, designed to manage and display device lists and related functionalities.

## Prerequisites

Ensure you have Node.js (version 16.x or later) and npm installed on your machine to run this project. For build you might need Live Server for VS Code to run this app.

## Installation and running for development

1. Clone the repository to your local machine:
   ```bash
   git clone https://github.com/oskarsrozitis/ubiquiti

2. Navigate to the project directory:
   ```bash
   cd ubiquiti-hw

3. Install the dependencies:
   ```bash
   npm install

4. Run command:
  ```bash
  npm run dev

5. Visit Dev site
  ```bash
  Open in browser URI http://localhost:5173/


## Installation and running for production

1. Clone the repository to your local machine:
   ```bash
   git clone https://github.com/oskarsrozitis/ubiquiti

2. Navigate to the project directory:
   ```bash
   cd ubiquiti-hw

3. Install the dependencies:
   ```bash
   npm install

4. Run command:
  ```bash
  npm run build

5. Install Live Server or similar if running local
  ```bash
  https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer

## Project structure

Project Structure

    src/: Source files for the application.
        components/: Reusable React components.
            DeviceList/: Component to display the list of devices.
            Filter/: Components related to filtering device lists.
        views/: React components that represent entire views/pages.
        hooks/: Custom React hooks.
        store/: State management using Redux or similar.
        types/: TypeScript type definitions specific to the project.
        utils/: Utility functions.
        services/: Service functions to handle external API calls.
    public/: Public static files like the main HTML.
    assets/: Static resource files like images and global styles.
