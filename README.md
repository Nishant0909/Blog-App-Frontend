# 📝 BlogHub

**BlogHub** is a full-stack blog publishing platform built with the **MERN stack**. It provides a clean, modular architecture for developers and allows users to register, log in, create/edit/delete blogs, and manage their profile.

---

## 🌐 GitHub Repositories

- 📦 **Frontend Repository**: [Blog-App-Frontend](https://github.com/Nishant0909/Blog-App-Frontend)
- ⚙️ **Backend Repository**: [Blog-App-Backend](https://github.com/Nishant0909/Blog-App-Backend)

---


## 🚀 Features

- 🔐 User authentication (JWT-based)
- 📝 Create, read, update, delete (CRUD) blog posts
- 👤 User profile with personal blogs
- 🧾 Clean, responsive UI with Tailwind CSS
- 📅 Formatted timestamps via `utils/date.js`
- 🔔 Alerts & confirmation using SweetAlert2
- 📦 Modular Redux Toolkit state management
- 📂 Scalable folder structure for frontend & backend

---

## 🛠 Tech Stack

### Frontend
- React + Vite
- Redux Toolkit
- React Router DOM
- Tailwind CSS
- Axios + Interceptors
- SweetAlert2

### Backend
- Node.js
- Express.js
- MongoDB with Mongoose
- JSON Web Tokens (JWT)
- Dotenv for environment config

---

## 🗂 Folder Structure

### 📁 `bloghub-backend/`
```
bloghub-backend/
├── controllers/
│   └── authController.js
│   └── blogController.js
│   └── userController.js
├── middlewares/
│   └── authMiddleware.js
├── models/
│   └── User.js
│   └── Blog.js
├── routes/
│   └── authRoutes.js
│   └── blogRoutes.js
│   └── userRoutes.js
├── utils/
│   └── generateToken.js
├── config/
│   └── db.js
├── .env
├── server.js
└── package.json
```

### 📁 `bloghub-frontend/`
```
bloghub-frontend/
├── public/
├── src/
│   ├── _api_list.js
│   ├── app/
│   │   └── store.js
│   ├── features/
│   │   └── auth/
│   ├── components/
│   │   ├── Navbar.jsx
│   │   ├── Sidebar.jsx
│   │   └── ui/
│   │       ├── Button.jsx
│   │       ├── Input.jsx
│   │       ├── TextArea.jsx
│   │       ├── FormError.jsx
│   ├── layouts/
│   │   ├── MainLayout.jsx
│   │   └── AuthLayout.jsx
│   ├── pages/
│   │   ├── Auth/
│   │   ├── Blog/
│   │   └── Profile/
│   ├── routes/
│   │   └── ProtectedRoute.jsx
│   ├── services/
│   │   ├── authService.js
│   │   ├── blogService.js
│   │   └── userService.js
│   ├── utils/
│   │   ├── alertHelper.js
│   │   └── dateFormat.js
│   ├── App.jsx
│   └── main.jsx
├── .env
├── .gitignore
├── index.html
├── package.json
├── vite.config.js
└── README.md
```

---

## 🛠 Setup Instructions

### ✅ Prerequisites

- Node.js (v16 or later)
- MongoDB (local or Atlas)
- Git, VS Code (recommended)

### 🔧 Backend Setup

```bash
cd bloghub-backend
npm install
```

Create a `.env` file in `bloghub-backend/`:

```env
PORT=3001
MONGO_URI=mongodb://localhost:27017/bloghub
JWT_SECRET=your_secret_key
```

Start the backend server:

```bash
npm run dev
```

> Backend runs at: `http://localhost:3001`

---

### 💻 Frontend Setup

```bash
cd bloghub-frontend
npm install
```

Create a `.env` file in `bloghub-frontend/`:

```env
VITE_API_BASE_URL=http://localhost:3001/api
```

Start the React app:

```bash
npm run dev
```

> Frontend runs at: `http://localhost:5173`

---

## 🔐 Authentication Flow

- JWT token stored in `localStorage`
- Axios interceptors attach token to all requests
- Protected routes using `<ProtectedRoute />`
- Logout clears Redux + localStorage

---

## 📚 API Endpoints

| Method | Endpoint             | Description                     |
|--------|----------------------|---------------------------------|
| POST   | `/api/auth/register` | Register a new user             |
| POST   | `/api/auth/login`    | Login and receive JWT           |
| POST   | `/api/auth/logout`   | Logout               |
| GET    | `/api/users/me`      | Get current logged-in user      |
| GET    | `/api/blogs`         | Get all blogs                   |
| GET    | `/api/blogs/:id`     | Get blog by ID                  |
| POST   | `/api/blogs`         | Create new blog                 |
| PUT    | `/api/blogs/:id`     | Edit blog                       |
| DELETE | `/api/blogs/:id`     | Delete blog                     |

---

## ✨ Author

**Nishant Jain**  
📧 `https://github.com/Nishant0909/Blog-App-Frontend`  
🔗 GitHub

---

## 📄 License

MIT License

> Built with ❤️ using the MERN stack.
