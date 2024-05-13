# Ubiquiti / Test Task / Oskars Rozitis

This project is a web application built with React (TSdx zero config cli), TailwindCSS, and Vite, designed to manage and display device lists and related functionalities.

## Prerequisites

Ensure you have Node.js (version 18.x or later) and npm installed on your machine to run this project. For build you might need Live Server for VS Code to run this app.

## Running with Docker

1. Clone the repository to your local machine:
   ```bash
   git clone https://github.com/oskarsrozitis/ubiquiti

3. Move into dir
   ```bash
   cd ubiquiti

3. Build the Docker image:
   ```bash
   docker build -t ubiquiti .

4. Run the Docker container:
   ```bash
   docker run -p 5173:5173 -v ${PWD}:/app -e NODE_ENV=development ubiquiti-app-dev

5. Open your browser to:
   ```bash
   http://localhost:5173/

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
