import "../src/tailwind.css";

// This button is used in SideBar
function Button({ children, onClick }) {
  return (
    <button
      onClick={onClick}
      className="p-1 font-sans font-bold text-left text-pink-900 
      border-solid border-l-2 border-pink-900"
    >
      {children}
    </button>
  );
}

export { Button };
