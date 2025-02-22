# Lemmon Lodge React App

This is a simple React application for www.lemmonlodge.com, featuring a home page and a contact page with email functionality.

## Features

- Home page with a welcome message
- Contact page with a form to send messages via EmailJS
- Rate limiting to prevent multiple submissions within a short time frame

## Setup

### Prerequisites

- Node.js and Yarn installed on your machine

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/yourusername/lemmonlodge.git
   cd lemmonlodge/react-app
   ```

2. Install the dependencies:

   ```bash
   yarn install
   ```

3. Create a `.env` file in the root of the project and add your EmailJS keys:

   ```env
   REACT_APP_EMAILJS_SERVICE_ID=your_emailjs_service_id
   REACT_APP_EMAILJS_TEMPLATE_ID=your_emailjs_template_id
   REACT_APP_EMAILJS_PUBLIC_KEY=your_emailjs_public_key
   ```

### Running the App

1. Start the development server:

   ```bash
   yarn start
   ```

2. Open your browser and navigate to `http://localhost:3000`.

## Usage

- Navigate to the home page to see the welcome message.
- Go to the contact page to send a message using the contact form.
