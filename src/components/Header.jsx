function Header({ darkMode, onToggleTheme }) {
  return (
    <header className="header">
      <div>
        <h1>Smart Todo</h1>
        <p>Simple task management with priorities</p>
      </div>

      <button
        className="theme-toggle"
        onClick={onToggleTheme}
      >
        {darkMode ? "☀ Light" : "🌙 Dark"}
      </button>
    </header>
  );
}

export default Header;