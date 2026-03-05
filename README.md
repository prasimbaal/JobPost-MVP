# Upwork-Style Job Marketplace MVP

A **Vue 3 + Vite + TailwindCSS** MVP replicating the **core UI and flows of Upwork**, including client and freelancer views, dashboards, job posting, proposals, messaging, and dark mode.

This project focuses on **rapid prototyping and UI replication** rather than full backend functionality.

The goal is to provide a **high-fidelity clickable prototype** suitable for client demos or early product validation.

---

# 🚀 Tech Stack

* **Vue 3**
* **Vite**
* **TailwindCSS**
* **Pinia (state management)**
* **Vue Router**
* **Vercel (deployment)**

---

# ✨ Features

### Core UI

* Upwork-style **navigation bar**
* **Dark mode toggle**
* **Responsive layout**
* **Mobile sidebar navigation**

### User Roles

* Client
* Freelancer

### Authentication (Demo)

* Fake login system for rapid testing
* Role-based dashboard redirection

Demo accounts:

Client

```
client@demo.com
client123
```

Freelancer

```
freelancer@demo.com
freelancer123
```

---

# 📊 Implemented Pages

| Page                 | Description                |
| -------------------- | -------------------------- |
| Login                | Demo authentication page   |
| Find Work            | Freelancer job browsing UI |
| Post Job             | Client job creation flow   |
| Client Dashboard     | Job management             |
| Freelancer Dashboard | Proposal tracking          |
| Messages             | Chat UI prototype          |
| Proposals            | Submitted proposals list   |

---

# 🖼 Screenshots

## Login Page

![Login](/screenshot/login.png)

## Find Work (Freelancer View)

![Find Work](/screenshot/find-work.png)

## Client Dashboard

![Client Dashboard](/screenshot/client-dashboard.png)

## Post Job Flow

![Post Job](/screenshot/post-job.png)

## Messages UI

![Messages](/screenshot/messages.png)

## Dark Mode

![Dark Mode](/screenshot/dark-mode.png)

---

# 📁 Project Structure

```
src
│
├── components
│   ├── Navbar.vue
│   ├── MobileSidebar.vue
│
├── pages
│   ├── Login.vue
│   ├── FindWork.vue
│   ├── PostJob.vue
│   ├── ClientDashboard.vue
│   ├── FreelancerDashboard.vue
│   ├── Messages.vue
│   ├── Proposals.vue
│
├── stores
│   └── userStore.js
│
├── router
│   └── index.js
│
├── assets
│
└── App.vue
```

---

# ⚙️ Installation

Clone the repository:

```
git clone https://github.com/prasimbaal/upwork-mvp.git
```

Install dependencies:

```
npm install
```

Run the development server:

```
npm run dev
```

---

# 🌐 Deployment (Vercel)

Deploy in seconds with Vercel.

Steps:

1. Push project to GitHub
2. Import repository into Vercel
3. Framework preset: **Vite**
4. Deploy

Vercel automatically runs:

```
npm run build
```

---

# 🎯 MVP Limitations

This project intentionally includes **mock functionality**:

* No backend database
* No real authentication
* No payment system
* No real messaging

It is meant for **visual prototyping and client validation only**.

---

# 🔮 Possible Future Improvements

* Real authentication (JWT)
* Django / Node backend
* WebSocket messaging
* Job search filtering
* Notifications system
* File uploads for proposals

---

# 📄 License

MIT License
