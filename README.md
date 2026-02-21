# INFNOVA Academy

**INFNOVA Academy** is a modern, responsive e-learning web application built to empower learners with cutting-edge technology courses. The platform features a dynamic course catalog, advanced filtering capabilities, and detailed course insights.

---

## ✨ Features

### 🎓 Dynamic Course Grid

Browse courses through a beautiful, responsive card layout.

### 🔎 Advanced Multi-Filtering

Real-time search by course title or instructor, with additional dropdown filters for **Category** and **Skill Level**.

### 📘 Course Details

Deep-dive into specific courses with a dedicated detail page featuring sticky enrollment sidebars and instructor profiles.

### 🔄 Seamless Navigation

Powered by `react-router-dom` for a smooth, single-page application (SPA) experience.

### 📱 Responsive Design

Fully optimized for mobile, tablet, and desktop viewports using **Tailwind CSS**.

### ⏳ Skeleton Loading

Enhanced UX with skeleton states while course data is being fetched.

---

## 🚀 Tech Stack

- **Frontend:** React 18 (TypeScript)
- **Styling:** Tailwind CSS
- **Icons:** Material UI (MUI) Icons
- **Routing:** React Router v6
- **State Management:** React Hooks (`useState`, `useEffect`, `useParams`)

---

## 🔗live Preview

-[click Me](https://example.com)

---

## 📦 Getting Started

### ✅ Prerequisites

- Node.js (v16 or higher)
- npm

---

### 📥 Installation

1. **Clone the repository**

   ```bash
   git clone https://github.com/NatnaelAbWe/info-nova-internship-challange

   ```

2. **Navigate to the project directory**

```bash
cd infnova-academy
```

3. **Install dependencies**

```bash
npm install
```

4. **Start the development server**

```bash
npm run dev
```

---

## 📂 Project Structure

```bash
src/
│
├── components/       # Reusable UI components
├── pages/            # Application pages (Home, CourseDetails)
├── types/            # TypeScript interfaces (Course interface)
├── App.tsx           # Main application component
└── main.tsx          # Entry point
```

---

## 🛠️ Configuration & Data

-The application consumes a JSON-based course structure.

```bash
export interface Course {
  id: string;
  title: string;
  instructor: string;
  category: string;
  level: "Beginner" | "Intermediate" | "Advanced";
  description: string;
  price: number;
  image: string;
}
```

---

## 🤝 Contributing

-Contributions are welcome! Please feel free to submit a Pull Request.
--Fork the Project
--Create your Feature Branch

---

## ❤️ Acknowledgment

## -Developed with ❤️ by the Natnael Abnew.
