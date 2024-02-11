# Houses WebApp Overview

## Description

This repository contains a Houses WebApp built using React. The application is designed to display data fetched from a real-time database and images retrieved from a storage bucket. The process of uploading images and data is facilitated through a Python script.

## Features

- Real-time data fetching: The web application retrieves data from a real-time database, ensuring that the displayed information is always up-to-date.
- Image fetching: Images associated with the houses are fetched from a storage bucket and displayed within the application.
- Automated data and image uploading: The Python script handles the uploading of both data and images to the respective database and storage bucket. This ensures a seamless process for updating information.

## Technologies Used

- React: Frontend framework for building the user interface of the web application.
- Firebase: Used for real-time database functionality and storage of images.
- Python: Scripting language utilized for automating the uploading process.
- Git: Version control system for tracking changes to the codebase.

## How It Works

1. **Data Upload**: The Python script is responsible for uploading data and images to the designated Firebase database and storage bucket. This script may gather data from various sources such as CSV files or APIs.

2. **Real-time Database**: The React web application listens to changes in the real-time database, ensuring that any updates made through the Python script are reflected immediately in the UI.

3. **Image Retrieval**: The web application fetches images from the storage bucket using appropriate URLs obtained from the database, and dynamically displays them alongside the corresponding house information.

## Setup Instructions

1. Clone the repository to your local machine:

```bash
git clone <repository_url>
```

2. Install dependencies for both the React application and Python script.

3. Set up Firebase configuration in both the React application and Python script to establish connections with the database and storage bucket.

4. Run the Python script to upload initial data and images.

5. Start the React application to view the Houses WebApp:

```bash
cd houses-webapp
npm install
npm start
```

## Contributions

Contributions to this project are welcome. Feel free to fork the repository, make changes, and submit pull requests.
