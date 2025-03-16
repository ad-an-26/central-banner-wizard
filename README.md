## **Central Notice Banner Wizard**
A frontend web app for customizing Wikimedia Central Notice banners with interactive controls for editing banner color, text, images, and background in real-time.

---

### **Features**
✅ Full-width banner with customizable content  
✅ Interactive controls for:  
- Changing banner **color**  
- Editing banner **text**  
- Uploading or swapping **images**  
- Modifying the **background**  
✅ Real-time updates without page reload  
✅ Built with **Vite**, **React**, and **Vitest** for testing  

---

### **Getting Started**

#### **Prerequisites**
Ensure you have the following installed:  
- [Node.js](https://nodejs.org/) (v18 or above recommended)  
- [Git](https://git-scm.com/)  

---

#### **Installation**
1. **Clone the repository**  
```bash
git clone https://github.com/<your-username>/central-notice-banner-wizard.git
cd central-notice-banner-wizard
```

2. **Install dependencies**  
```bash
npm install
```

3. **Run the development server**  
```bash
npm run dev
```

4. **Open your browser** and visit: [http://localhost:5173](http://localhost:5173)

---

### **Usage**
1. Use the control panel to:
   - Change the banner's background color
   - Edit text content
   - Upload an image
   - Modify the background
2. Changes are reflected **instantly** without reloading the page.

---

### **Testing**
To run unit tests with **Vitest**:  
```bash
npm test
```

---

### **Project Structure**
```
/src
 ┣ /components
 ┃ ┣ Banner.jsx
 ┃ ┣ Controls.jsx
 ┣ /tests
 ┃ ┣ Banner.test.js
 ┃ ┣ Controls.test.js
 ┣ App.jsx
 ┣ main.jsx
 ┣ index.css
```

