## Article Sorting React App

A React application that displays and sorts articles by "Most Upvoted" or "Most Recent" criteria.

> Please refer to the problem statement on this URL: https://www.hackerrank.com/challenges/react-article-sorting/problem

## Features

- Display articles in a table format with title, upvotes, and date
- Sort articles by most upvoted (with date as tiebreaker)
- Sort articles by most recent (with upvotes as tiebreaker)
- Responsive design with clean UI

## Prerequisites

Before running this application, make sure you have the following installed:

- **Node.js** (version 14 or higher)
- **npm** or **yarn** package manager

## Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/tisanth21/Article-sorting.git
cd Article-sorting
```

### 2. Install dependencies

Using npm:
```bash
npm install
```

Or using yarn:
```bash
yarn install
```

### 3. Start the development server

Using npm:
```bash
npm start
```

Or using yarn:
```bash
yarn start
```

The application will start on **http://localhost:8000**

### 4. Run tests

Using npm:
```bash
npm test
```

Or using yarn:
```bash
yarn test
```

### 5. Build for production

Using npm:
```bash
npm run build
```

Or using yarn:
```bash
yarn build
```

## Project Structure

```
src/
├── App.js              # Main application component with sorting logic
├── App.css             # Application styles
├── components/
│   └── Articles.js     # Component for displaying articles table
└── index.js            # Application entry point
```

## Usage

1. The app loads with articles sorted by "Most Upvoted" by default
2. Click "Most Upvoted" to sort articles by upvotes (descending)
3. Click "Most Recent" to sort articles by date (newest first)
4. When upvotes/dates are equal, the secondary criteria is used as a tiebreaker
