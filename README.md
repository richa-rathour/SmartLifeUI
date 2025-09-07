# SmartLife AI Dashboard

A modern, responsive React dashboard application built with TailwindCSS for managing daily routines, expenses, and interview preparation.

## 🚀 Features

### 📅 Daily Routine
- Add tasks with titles and scheduled times
- Mark tasks as completed with checkboxes
- Delete tasks with a single click
- Visual progress tracking with completion percentage
- Clean card-based design with hover effects

### 💰 Expenses
- Add expenses with amount, category, note, and date
- Categorized expense tracking (Food, Transport, Shopping, etc.)
- Summary cards showing total spent, transaction count, and daily average
- Sortable expense table with delete functionality
- Visual category breakdown with progress bars

### 🎤 Interview Prep
- Search for interview questions by topic
- Pre-loaded questions for JavaScript, React, Java, and Python
- Expandable Q&A format with detailed answers
- Interview tips and best practices section
- Mock API integration with loading states

## 🛠️ Tech Stack

- **React 18** - Frontend framework
- **TailwindCSS** - Utility-first CSS framework
- **React Hooks** - State management (useState)
- **Responsive Design** - Mobile and desktop optimized

## 📦 Installation & Setup

### Prerequisites
- Node.js (version 14 or higher)
- npm or yarn package manager

### Quick Start

1. **Clone or download the project**
   ```bash
   # If you have the project files, navigate to the project directory
   cd SmartLifeUI
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm start
   ```

4. **Open your browser**
   - Navigate to `http://localhost:3000`
   - The app will automatically reload when you make changes

### Alternative Setup (if starting from scratch)

If you want to create this project from scratch:

1. **Create a new React app**
   ```bash
   npx create-react-app smartlife-ai-dashboard
   cd smartlife-ai-dashboard
   ```

2. **Install TailwindCSS**
   ```bash
   npm install -D tailwindcss postcss autoprefixer
   npx tailwindcss init -p
   ```

3. **Replace the generated files** with the provided source code

## 📁 Project Structure

```
src/
├── components/
│   ├── Sidebar.js          # Left navigation sidebar
│   ├── Navbar.js           # Top navigation bar
│   ├── DailyRoutine.js     # Daily routine management
│   ├── Expenses.js         # Expense tracking
│   └── InterviewPrep.js    # Interview preparation
├── App.js                  # Main application component
├── index.js                # Application entry point
└── index.css               # Global styles with TailwindCSS
```

## 🎨 Design Features

- **Modern UI**: Clean, minimalist design with soft shadows and rounded corners
- **Responsive Layout**: Works seamlessly on desktop, tablet, and mobile devices
- **Interactive Elements**: Hover effects, smooth transitions, and visual feedback
- **Color Scheme**: Professional blue primary color with gray accents
- **Typography**: Clean, readable fonts with proper hierarchy
- **Accessibility**: Proper contrast ratios and keyboard navigation

## 🔧 Customization

### Adding New Categories (Expenses)
Edit `src/components/Expenses.js` and add new categories to the `categories` array:

```javascript
const categories = ['Food', 'Transport', 'Shopping', 'Entertainment', 'Utilities', 'Healthcare', 'Education', 'Your New Category', 'Other'];
```

### Adding New Interview Topics
Edit `src/components/InterviewPrep.js` and add new topics to the `mockQuestions` object:

```javascript
const mockQuestions = {
  'your-topic': [
    {
      id: 1,
      question: "Your question here?",
      answer: "Your detailed answer here."
    }
  ]
};
```

### Styling Customization
Modify `tailwind.config.js` to customize colors, fonts, and other design tokens:

```javascript
theme: {
  extend: {
    colors: {
      primary: {
        // Your custom color palette
      }
    }
  }
}
```

## 📱 Responsive Breakpoints

- **Mobile**: < 768px (sm)
- **Tablet**: 768px - 1024px (md)
- **Desktop**: > 1024px (lg)

## 🚀 Available Scripts

- `npm start` - Runs the app in development mode
- `npm build` - Builds the app for production
- `npm test` - Launches the test runner
- `npm eject` - Ejects from Create React App (one-way operation)

## 🔮 Future Enhancements

- **Backend Integration**: Connect to real APIs for data persistence
- **User Authentication**: Add login/signup functionality
- **Data Export**: Export expenses and routines to CSV/PDF
- **Charts & Analytics**: Advanced expense visualization
- **Notifications**: Task reminders and expense alerts
- **Dark Mode**: Toggle between light and dark themes
- **PWA Support**: Make it installable as a Progressive Web App

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🆘 Support

If you encounter any issues or have questions:

1. Check the browser console for any error messages
2. Ensure all dependencies are properly installed
3. Verify Node.js version compatibility
4. Create an issue with detailed description and steps to reproduce

---

**Built with ❤️ using React and TailwindCSS**

