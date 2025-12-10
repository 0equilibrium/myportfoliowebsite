# My Portfolio Website Guide

This is your modern, responsive portfolio website. It is built with simple HTML, CSS, and JavaScript, making it incredibly easy to host and maintain.

## 🚀 How to Deploy (배포 방법)

Since this is a static website (no database, no backend code), you have many free and high-performance options.

### Option 1: GitHub Pages (Recommended)
**Best for:** Free hosting, easy updates, developer-friendly.
1. Create a repository on GitHub (e.g., `my-portfolio`).
2. Upload these files (`index.html`, `style.css`, `script.js`) to the repository.
3. Go to **Settings** > **Pages**.
4. Under **Source**, select `main` branch.
5. Your site will be live at `https://yourusername.github.io/my-portfolio`.

### Option 2: Netlify / Vercel
**Best for:** Drag-and-drop simplicity, automatic HTTPS, fast performance.
1. Go to [Netlify Drop](https://app.netlify.com/drop).
2. Drag the folder containing these files into the browser window.
3. Your site is online instantly! You can claim it to attach a custom domain later.

### Option 3: Carrd / Linktree (Alternative)
If you prefer not to touch code at all in the future, you could move to a no-code builder, but the custom site created here allows for unlimited customization and no monthly fees for premium features.

---

## 🛠 How to Add/Edit Apps (새로운 앱 추가/수정 방법)

You **do not** need to edit the HTML code to add a new app. All data is stored in `script.js`.

1. Open `script.js` in any text editor.
2. Look for the `appsData` array at the top of the file.
3. To add a new app, copy and paste one of the `{ ... }` blocks and modify the values:

```javascript
    {
        title: "New App Name",
        description: "Short description of what it does.",
        url: "https://link-to-your-app.com",
        icon: "fa-solid fa-star", // Use FontAwesome class name
        // OR use an image:
        // icon: "path/to/image.png",
        // isImage: true,
        
        tags: ["Category", "Platform"],
        color: "#EF4444" // Hex color code for unique branding
    },
```

4. Save the file and refresh your browser. The new card will appear automatically!

## 🎨 Customization

- **Change Profile Image:** Update the `<div class="profile-avatar">` section in `index.html`.
- **Change Colors:** Edit the variables at the top of `style.css` (e.g., `--accent-color`).
