# Express Login Form

This project is a simple login form built using **Express.js**. It demonstrates handling POST requests, capturing user input from a login form, and sending the data back to the client.

## Features

- Simple and responsive login form
- Handles POST requests using Express.js
- Middleware for parsing form data
- Displays the entered username and password upon form submission

## Getting Started

### Prerequisites

Make sure you have Node.js installed. You can download it [here](https://nodejs.org/).

### Installation

1. Clone the repository:

    ```bash
    git clone https://github.com/yourusername/express-login-form.git
    ```

2. Navigate into the project directory:

    ```bash
    cd express-login-form
    ```

3. Install the necessary dependencies:

    ```bash
    npm install
    ```

### Running the Application

1. Start the server:

    ```bash
    node app.js
    ```

2. Open your browser and go to `http://localhost:3000`. You should see the login form.

### Usage

Fill out the login form with your username and password, and submit it. The server will capture the input and display it on the page, while also logging the raw headers to the console.