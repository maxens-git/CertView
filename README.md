
# CertView

CertView is an application for viewing and managing SSL certificates, including displaying details such as domain, certificate authority, issue date, expiration date, and managing public keys. This project allows you to load, view, and download SSL certificates via a web interface.

## Prerequisites

- **MySQL**: A MySQL server to store certificate information.

## Installation

### 1. Clone the repository
Clone the project using the following command:
```bash
git clone https://github.com/maxens-git/certview.git
cd certview
```

### 2. Install dependencies

Install the project dependencies using npm:

```bash
npm install
```

### 3. Create a `.env` file

Create a `.env` file in the `cert-api/` directory to store database credentials information.

Here's an example of the content for the `.env` file:

```env
DB_HOST=
DB_USER=
DB_PASSWORD=
DB_DATABASE=cert_view
```

### 4. Start the application

Start the Node.js server with the following command:

```bash
npm start
```

The server will be accessible at the following address: [http://localhost:4200](http://localhost:4200)

## Project Structure

The project is divided into two main parts:

- **/cert-api**: Contains the backend API for managing certificates, including database connections, routes, and business logic.
  - **/routes**: API routes for managing certificates.
    - **db.js**: Database configuration and interaction.
  - **.env**: Environment variables for the backend (e.g., database credentials).
  
- **/cert-view**: The frontend user interface of the application.
  - **/src**: Source code for the frontend, including components and UI logic.
  - **/public**: Static assets like images and icons.

## Usage

### Viewing Certificates

Once the server is running, access the web interface at [http://localhost:4200](http://localhost:4200) to view the list of certificates.
