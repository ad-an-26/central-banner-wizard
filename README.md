# Central Banner Wizard

Version 1 of a web-based tool for creating and customizing banners with interactive controls, built using **Vite**, **React**, and **Tailwind CSS**. Designed as part of the **Outreachy** contribution for the **"Update Central Notice Banner Wizard"** project under **Wikimedia**. This project aims to provide an intuitive, customizable banner creation experience for users, contributing to Wikimedia’s open-source ecosystem.

---

## 🧑‍💻 About Me

Hi, I'm Adiba Anjum! I'm a computer science student with a passion for web development and UI/UX design. I have hands-on experience with HTML, CSS, JavaScript, React, Node.js, and UI/UX design, having completed freelance work as both a React developer and a UI/UX designer. As a part of my studies, I regularly work on projects involving these technologies, which has allowed me to grow my skills through real-world assignments.

I am deeply interested in open source, and the values behind it resonate with me personally. I see this project as a great opportunity to not only contribute but also learn and refine my skills in an area I aspire to work in professionally. I’ve explored Wikimedia and have familiarized myself with tools like Gerrit and Phabricator, where I discovered this Outreachy task. Since then, I’ve already made progress on the microtask, including creating a basic wireframe and setting up the project files.

I'm excited to be part of this open source community, and I'm available for communication through all channels.

Adiba Anjum
[Github](https://github.com/ad-an-26)
Phabricator: adiba_anjum
E-mail: adeeba.anjum3@gmail.com

---

## ✨ Features

✅ Full-width banner with interactive customization options  
✅ Rich text editor for dynamic text customization  
✅ Image upload with adjustable positioning using drag and drop functionality
✅ Customizable banner background with color and image support  
✅ Height control for the banner 
✅ Reset button that helps in going back to original banner
✅ Modular Control Panel with expandable dropdown options for improved UI/UX  
✅ Fully responsive design for enhanced usability across devices  
✅ Comprehensive unit tests ensuring component stability and functionality  

---

## 🛠️ Tech Stack

- **Frontend Framework:** [Vite](https://vitejs.dev/)  
- **UI Styling:** [Tailwind CSS](https://tailwindcss.com/)  
- **Testing Framework:** [Vitest](https://vitest.dev/)  
- **Code Quality:** ESLint
- **Rich Text Editor:** [Lexical](https://lexical.dev/)  

---

## 🚀 Getting Started

### 1. Clone the Repository
```bash
git clone https://github.com/your-username/central-banner-wizard.git
cd central-banner-wizard/frontend
```

### 2. Install Dependencies
```bash
npm install
```

### 3. Run the Development Server
```bash
npm run dev
```

Visit [http://localhost:5173](http://localhost:5173) to see the app in action.

---

## 🧪 Running Tests

This project uses **Vitest** for unit testing.

### Run Tests
```bash
npm run test
```

### Test Coverage Report
```bash
npm run coverage
```

---

## 📂 Project Structure

```
frontend/
 ┣ src/
 ┃ ┣ components/     # React components
 ┃ ┣ assets/         # Images and static files
 ┃ ┣ App.jsx         # Main application component
 ┃ ┗ main.jsx        # Entry point
 ┣ public/            # Static public files
 ┣ .gitignore         
 ┣ index.html         
 ┣ package.json       
 ┣ tailwind.config.js 
 ┣ vite.config.js     
 ┣ vitest.config.js   
 ┗ README.md          
```

---

## 📋 Key Components Overview

### `ControlPanel`
- Displays buttons for banner customization (e.g., text, color, height, background).  
- Each button expands a dropdown menu with relevant options.  

### `RichTextEditor`
- Provides a rich text editor for dynamic text input.  
- Supports formatting like **bold**, *italics*, and _underline_.
- Allows user to select from a list of font families and also alter the font size.
- Supports undo/redo functionality.
- Allow users to apply custom styles (e.g., color, font size) to specific text segments.  

### `ImageUploader`
- Enables image uploads with precise positioning on the banner.  
- Supports positioning using drag and drop functionality.

---

## 🔮 Future Enhancements

### ➕ Additional Features
- **Stamps/Shapes:** Add draggable shapes like circles, squares, and triangles for enhanced customization.  
- **Text Alignment:** Introduce left, center, and right alignment options for text.  
- **Image Resizing:** Enable users to resize uploaded images directly on the banner.  

### ✍️ Enhanced Rich Text Editor
- **More Formatting Options:** Add support for headings, lists, links, and text alignment.   

### 🎨 Improved UI/UX
- **Drag-and-Drop for Images:** Enable image uploads via drag-and-drop.  
- **Preview Mode:** Add a preview mode to visualize the finalized banner without editing controls.    

### ⚙️ Performance Optimization
- **Lazy Loading:** Implement lazy loading for large images to improve performance.  
- **Debouncing:** Introduce debouncing for state updates to minimize unnecessary re-renders.  

### 🚨 Error Handling
- **Validation:** Add file type and size validation for image uploads.  
- **User-Friendly Error Messages:** Provide clear error messages for invalid inputs.  

---

## 📖 Contributing

Contributions are welcome! Follow these steps to contribute:

1. Fork the repository.  
2. Create a new branch: `git checkout -b feature/new-feature`.  
3. Commit your changes with a clear message:  
   ```
   feat: add new feature for banner customization
   ```
4. Push to your branch: `git push origin feature/new-feature`.  
5. Open a Pull Request.  

---

## 🔍 Commit Message Convention

Following the Outreachy guidelines, commit messages follow this structure:

```
<type>: <subject>

<body>

<footer>
```

**Example:**

```
feat: add image positioning functionality

Added support for positioning uploaded images in nine distinct areas 
within the banner. Ensured compatibility with existing customization features.

Bug: T123456
Change-Id: Iabcdef1234567890
``` 

---

## 📜 License

This project is licensed under the [MIT License](LICENSE).
