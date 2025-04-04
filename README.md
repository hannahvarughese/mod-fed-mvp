# Microfrontend MVP with Module Federation

This project is a microfrontend MVP using Module Federation. It consists of a Shell application and three microfrontends: Admin, Staff, and User applications. The Shell application manages authentication, state, and theme, ensuring seamless navigation between the microfrontends.

## Project Structure

* `shell-app/` (Main container app, handles authentication and navigation)
* `admin-app/` (Admin interface, accessible by Admin users)
* `staff-app/` (Staff interface, accessible by Staff and Admin users)
* `user-app/` (User interface, accessible by User and Admin users)

## Getting Started

### Prerequisites

* Ensure you have the following installed:
    * Node.js (>= 16)
    * npm or yarn

* Please run [mod-fed-backend](https://github.com/hannahvarughese/mod-fed-backend) locally as it is the backend API for this project

### Installation

Clone the repository and install dependencies:

```# Clone the repository
git clone <repo_url>
cd mod-fed-mvp

# Install dependencies for each app
cd shell-app && npm install
cd ../admin-app && npm install
cd ../staff-app && npm install
cd ../user-app && npm install
```

### Running the Applications

Start each app in development mode:
```
# Start the shell app
cd shell-app && npm run build && npm run preview

# Start the admin app
cd ../admin-app && npm run build && npm run preview

# Start the staff app
cd ../staff-app && npm run build && npm run preview

# Start the user app
cd ../user-app && npm run build && npm run preview
```

Each application will be available at its respective port.

* `shell-app` : http://localhost:3000
* `admin-app` : http://localhost:3001
* `staff-app` : http://localhost:3002
* `user-app` : http://localhost:3003

Launch the shell-app(http://localhost:3000) and get started with development
