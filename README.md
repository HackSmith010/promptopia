# 🚀 Promptopia - AI-Powered Prompt Sharing Platform  

Promptopia is a modern full-stack web application where users can create, discover, and share AI-generated text prompts for various use cases.

---

## 🌟 Features  
- ✨ **User Authentication** – Secure login with OAuth (Google, GitHub, etc.)  
- 🔍 **Discover & Search** – Explore AI prompts with a powerful search feature  
- 📝 **Create & Edit** – Users can add, edit, and delete their prompts  
- 💾 **Save & Share** – Bookmark favorite prompts and share them publicly  
- 🎨 **Modern UI** – Responsive design with a smooth user experience  

---

## 🏗 Tech Stack  
- **Frontend:** Next.js, React.js, Tailwind CSS  
- **Backend:** Node.js, Express.js  
- **Database:** MongoDB with Mongoose  
- **Authentication:** NextAuth.js  
- **Styling:** Tailwind CSS  
- **Hosting:** Vercel  

---

## 🔧 Installation & Setup  

### 1️⃣ Clone the Repository  
```sh
git clone https://github.com/HackSmith010/promptopia.git
cd promptopia
```

### 2️⃣ Install Dependencies
```sh
npm install
```

### 3️⃣ Configure Environment Variables
Create a .env.local file and add:
```sh
MONGODB_URI=your_mongodb_connection_string
NEXTAUTH_SECRET=your_secret_key
NEXTAUTH_URL=http://localhost:3000
GOOGLE_CLIENT_ID=your_google_client_id
GOOGLE_CLIENT_SECRET=your_google_client_secret
```

### 4️⃣ Start the Development Server
```sh
npm run dev
```

### 5️⃣ Build & Deploy
```sh
npm run build
npm start
```
