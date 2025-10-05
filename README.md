
## 🌱 [TheGreenSprout](https://tushar-metrani.github.io/greensprout/home)

This is a responsive restaurant website built using **React (Vite)** and **Tailwind CSS**. It features a clean design, a mobile-friendly layout, and a functional table booking system. Booking requests are validated on the **client side** and then sent to a **FastAPI backend**, which sends email confirmations using the **Brevo API**.

---

## 🌟 Features

### 🏠 Home Page (`/home`)

* **Hero Section** – Engaging welcome banner with call-to-action.
* **About Section** – Story and values of the restaurant.
* **Menu List** – Shows categories along with their respective dishes.
* **Footer** – Contact details, social links, and more.

### 📅 Book Table Page (`/booktable`)

* **Responsive Booking Form**:

  * Fields: Name, Email, Phone Number, Date, Time, Number of Guests
  * **Client-side validation** (required fields, email format, etc.)
  * On success, data is sent to the backend via API ([FastAPI backend](https://github.com/tushar-metrani/book-table-fastapi)).
  
* **Email Confirmation**:
  * Upon successful booking, users receive an email via the **Brevo API** ([handled by FastAPI backend](https://github.com/tushar-metrani/book-table-fastapi)).

### 🔁 Shared Layout

* **Navbar** – Persistent across all pages.
* **Footer** – Shared across all pages.

---

## 🛠️ Tech Stack

* **Frontend Framework**: [React.js](https://reactjs.org/) (built with [Vite](https://vitejs.dev/))
* **Styling**: [Tailwind CSS](https://tailwindcss.com/)
* **Routing**: [React Router](https://reactrouter.com/)
* **Backend**: [FastAPI](https://fastapi.tiangolo.com/)
* **Email Service**: [Brevo API](https://www.brevo.com/)

---

## 📱 Responsive Design

The site is **fully responsive**, optimized for:

* Mobile 📱
* Desktop 💻
* Tablet 🔲

Built using **Tailwind CSS utility classes** with mobile-first breakpoints.

---

## 📦 Installation & Setup

To run the project locally:

### 1. Clone the Repository

```bash
git clone https://github.com/tushar-metrani/greensprout.git
cd greensprout
```

### 2. Install Dependencies

```bash
npm install
```

> **Note:** Step 3 and 4 is only necessary if you want to test the Book Table feature locally.  
> The deployed version is already connected to a live, CORS-enabled backend.

### 3. Clone and Start the FastAPI Backend

Follow the setup instructions in the [FastAPI repository](https://github.com/tushar-metrani/book-table-fastapi)

### 4. Update the `.env` File

Update the `VITE_API_URL` variable in your `.env` file to point to your local FastAPI backend:

Example-

```bash
VITE_API_URL=http://127.0.0.1:8000
```

### 5. Start Development Server

```bash
npm run dev
```

App runs at: `http://localhost:5173`

---

## 🔗 Backend Repository

The backend handles:

* Table booking form submission
* Sending confirmation emails using **Brevo API**

👉 [**View FastAPI Backend Repo**](https://github.com/tushar-metrani/book-table-fastapi)

---


