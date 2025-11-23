# Grid-Based Magazine Layout

This project, **Webify**, is a responsive magazine/blog-style webpage that uses a modern **CSS Grid–based layout** to organize content such as categories, featured posts, trending videos, and a multi-column article section.

---

## ✨ Features

- **Responsive Header & Navigation**  
  Includes a logo, clean navigation links, and a call-to-action button.

- **Grid Layouts (CSS Grid)**  
  Used extensively throughout the website for:
  - Navigation bar  
  - Popular Categories section  
  - Popular Stuff grid  
  - Three-column articles layout (Culture, Lifestyle, Celebrity)  
  - **Top Picks** feature section with an asymmetrical layout  
  - Trending Videos dark-themed section  

- **Visual Appeal**  
  Uses card layouts, well-defined sections, and structured spacing.

- **Full Footer Section**  
  Includes resources, contact information, and a newsletter input field.

---

## 🛠️ Technologies Used

- **HTML5**
- **CSS3** (heavy usage of **CSS Grid**)

---

## 📁 Project Structure

```
project13/
├── index.html        # Main webpage
├── style.css         # Stylesheet
└── images/           # All image assets
    ├── logo.png
    ├── hearts.jpg
    └── ...etc
```

---

## 🚀 Getting Started

1. **Clone the repository:**
   ```bash
   git clone https://github.com/mmubashirdev/Frontend-HTML-CSS-JS.git
   cd Frontend-HTML-CSS-JS/project13
   ```

2. **Add image assets**  
   Place all required images inside the `images/` folder.

3. **Run the project**  
   Simply open `index.html` in any browser.

---

## 🔧 Key CSS Grid Implementations

### 1. Navigation (`nav`)

```css
nav {
  display: grid;
  grid-template-columns: auto 1fr; /* Logo | Menu/CTA */
  gap: 50vw;
}
```

---

### 2. Main Content Grid (`.grid`)

```css
.grid {
  display: grid;
  grid-auto-flow: column;
  gap: 35px;
}
```

---

### 3. Top Picks Layout (`.pictures`)

```css
.pictures {
  display: grid;
  grid-template-areas:
    "mainpic sidepic"
    "mainpic sidepic1";
  grid-template-columns: 2fr 1fr;
  gap: 36px;
}

.mainPicture  { grid-area: mainpic; }
.sidePicture  { grid-area: sidepic; }
.sidePicture1 { grid-area: sidepic1; }
```

---

## 📌 Notes

Feel free to extend this design by adding:

- More categories  
- Animated transitions  
- Dark/light theme toggles  
- API-powered content  

---

## 📄 License  
**Muhammad Mubashir**
