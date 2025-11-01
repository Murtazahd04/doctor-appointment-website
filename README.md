````markdown
# Installation Steps for Your Doctor Appointment Website

Follow these steps to set up your multi-module project (Frontend, Backend, and Admin Panel) locally.

## 1. Clone the Repository
Open your terminal and clone the project repository:
```bash
git clone <YOUR_REPOSITORY_URL>
cd doctor-appointment-website 
````

*(Replace `<YOUR_REPOSITORY_URL>` with the actual link to your repository.)*

## 2\. Install Dependencies (`npm install`)

Navigate into each project directory and install the necessary dependencies using `npm install`.

### Admin Panel

```bash
cd admin
npm install
```

### Backend Server

```bash
cd ../backend
npm install
```

### Frontend Website

```bash
cd ../frontend
npm install
```

## 3\. Start the Development Servers

You will need three separate terminal windows running concurrently to start all parts of the application.

### 1\. Start the Backend API

In the terminal open to the **`backend`** directory:

```bash
npm start
```

### 2\. Start the Frontend Website

In a new terminal window, navigate to the **`frontend`** directory:

```bash
npm run dev
```

### 3\. Start the Admin Panel

In a third terminal window, navigate to the **`admin`** directory:

```bash
npm run dev
```

```
```
