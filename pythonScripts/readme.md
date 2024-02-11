# Python Script Overview

## Description

This Python script facilitates the uploading of data and images to Firebase Realtime Database and Storage Bucket, respectively. It is designed to automate the process of updating housing information for a Houses WebApp built using React.

## Features

- **Image Upload**: Allows for the uploading of images to a designated Firebase Storage Bucket.
- **Data Writing**: Facilitates the writing of housing data to a Firebase Realtime Database.
- **Automated Execution**: The script automatically uploads both data and images for the Houses WebApp.

## Technologies Used

- **Firebase Admin SDK**: Utilized for interfacing with Firebase services such as Realtime Database and Storage.
- **Python**: Scripting language used for implementing the upload functionality.

## Setup Instructions

1. Ensure you have Python installed on your system.
2. Install the required Python packages using the following command:

   ```bash
   pip install firebase-admin
   ```

3. Replace `'PATH TO YOUR JSON FILE'`, `'LINK TO YOUR DB LINK'`, and `'STORAGE BUCKET URL'` with appropriate values in the script.
4. run

## Usage

1. Configure Firebase credentials and database URL in the script.
2. Modify the `housing_data` variable to include the housing information you wish to upload.
3. Run the script to initiate the upload process.
