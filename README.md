# 🍽️ FeastLab

FeastLab is a platform where food lovers can share, discover, and enjoy recipes. Built with Next.js (using `better-sqlite3`), it enables users to add meals, explore recipes, and connect with the community. The platform is deployed on **Vercel** for seamless accessibility.

## 🚀 Features

### 1️⃣ Add a Meal to the Database
- Users can submit their favorite recipes, which are stored in an **SQLite database** using the `better-sqlite3` library if you want to store locally. I have also implemented AWS S3 for cloud based storage.
- Each meal entry includes a **name, ingredients, preparation steps, and an image URL**.

### 2️⃣ View Meals
- Users can browse a collection of recipes.
- Meals are retrieved dynamically from the database and displayed on the frontend.

### 3️⃣ Join the Community
- Users can sign up to engage with the FeastLab community.

### 4️⃣ Deployment on Vercel
- The platform is deployed on **Vercel**, ensuring fast and reliable performance.
- Continuous integration enables automatic updates when changes are pushed to GitHub.

## 🛠️ Tech Stack
- **Frontend:** Next.js (App Router), React, Tailwind CSS
- **Backend:** Next.js
- **Database:** SQLite (via `better-sqlite3`) (In device) / AWS S3 (Cloud Based) 
- **Deployment:** Vercel

## 📦 Installation

```bash
# Clone the repository
git clone https://github.com/narendrapb42/FeastLab.git

# Navigate to the project directory
cd feastlab

# Install dependencies
npm install
```

## 📌 Usage

### 1️⃣ Start the Backend Server
```bash
npm run dev
```

### 2️⃣ Run the Frontend
If using Next.js:
```bash
npm run dev
```
Access the application at `http://localhost:3000`.

## 🚀 Deployment
### Deploying on Vercel
1. Install the Vercel CLI:
   ```bash
   npm install -g vercel
   ```
2. Run the following command and follow the setup instructions:
   ```bash
   vercel
   ```
3. Your app will be live at a generated URL!

## 🎯 Contributing
Pull requests are welcome! Feel free to **fork the repo** and submit a PR with improvements.

## 📜 License
This project is licensed under the MIT License.

---
Happy Cooking! 🍜✨
