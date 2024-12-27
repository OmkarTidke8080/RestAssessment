# Restaurant Management System

This project is a comprehensive **Restaurant Management System** designed to simplify restaurant operations. It provides secure authentication mechanisms and a dashboard to manage restaurant data, including total restaurants, active restaurants, and inactive restaurants.

## Features

### Authentication
- **Sign Up**: Users can register with the system.
- **Sign In**: Registered users can log in securely.
- **OTP-Based Verification**: An additional layer of security for authentication.
- **JWT Tokens**: Used for session management and secure API requests.

### Dashboard
- **Total Restaurants**: Displays the total number of registered restaurants.
- **Active Restaurants**: Shows the count of currently active restaurants.
- **Inactive Restaurants**: Lists the number of inactive restaurants.

## Technology Stack

- **Backend**: Node.js, Express.js
- **Authentication**: JSON Web Tokens (JWT), OTP verification (via email)
- **Frontend**: React.js 
- **Database**: MongoDB
- **Others**: RESTful APIs, bcrypt for password hashing

## Installation

### Prerequisites
- [Node.js](https://nodejs.org/) installed on your system.
- A database system (MongoDB) set up.

### Steps
1. Clone the repository:
   ```bash
   git clone https://github.com/OmkarTidke8080/RestAssessment.git
   ```
2. Navigate to the project directory:
   ```bash
   cd restaurant-management-system
   ```
3. Install dependencies:
   ```bash
   npm install
   ```
4. Configure environment variables:
   Create a `.env` file in the root directory and add the following:
   ```env
   PORT=5000
   DATABASE_URL=your_database_url
   
   ```
5. Start the application:
   ```bash
   npm start
   ```
6. Open your browser and visit `http://localhost:3000`.

## API Endpoints

### Authentication
- **POST /api/register**: Register a new user.
- **POST /api/signin**: Log in with existing credentials.
- **POST /api/verifyOtp**: Verify the OTP for authentication.

### Dashboard
- **GET /dashboard/summary**: Fetch total, active, and inactive restaurant counts.

## Usage
1. **Sign Up**: Register as a new user.
2. **Sign In**: Log in using your credentials.
3. **OTP Verification**: Enter the OTP sent to your email/SMS for additional authentication.
4. **View Dashboard**: Access the dashboard to view restaurant statistics.

## Contributing

1. Fork the repository.
2. Create a new branch:
   ```bash
   git checkout -b feature/your-feature-name
   ```
3. Commit your changes:
   ```bash
   git commit -m 'Add some feature'
   ```
4. Push to the branch:
   ```bash
   git push origin feature/your-feature-name
   ```


