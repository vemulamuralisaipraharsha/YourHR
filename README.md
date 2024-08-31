### YourHR
YourHR is a full-stack application that uses React for the frontend and Node.js for the backend. The frontend is installed with Vite, and the backend is a simple Node.js application that serves the API. This README will guide you through setting up the application locally.


##Prerequisites
Before running the application, ensure you have the following installed:

Node.js (version 14.x or higher)
npm (comes with Node.js)

##Project Structure

/
├── YourHR/    # React frontend (Vite setup)
├── server/    # Node.js backend
└── README.md  # Project documentation

Installation and Setup

1. Clone the Repository

git clone https://github.com/yourusername/YourHR.git
cd YourHR

2.  Install Dependencies
CliYourHR (React Frontend)
cd client
npm install

Server (Node.js Backend)
cd ../server
npm install

3. Running the Application
cd server
In server
    npm start

4. Start the Frontend Server
cd ../YourHR
In client
    npm run dev

5. Configuration
By default, the backend server runs on port 8000, and the frontend runs on port 5173. You can adjust the ports as necessary in the following locations:

Backend Port: Modify the server.js file in the server folder.
Frontend Port: Modify the vite.config.js file in the client folder.

6. Development
Frontend: React with Vite
Backend: Node.js with Express

7. Build the frontend
cd client
npm run build

Serve the static files using a production-ready server (e.g., Express).
Deploy the backend to a cloud provider like AWS, Heroku, or DigitalOcean.
