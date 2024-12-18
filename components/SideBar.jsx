function SideBar() {
  const date = new Date().toDateString();
  return (
    <section
      className="flex flex-col items-stretch justify-between 
      bg-pink-200 p-2 rounded-lg"
    >
      <p className="font-mono font-semibold mb-2">
        Date: {date}
      </p>
      <button
        className="font-sans font-bold text-left text-pink-900
        p-1 my-1 border-solid border-l-2 border-pink-900"
      >
        Settings
      </button>
      <button
        className="font-sans font-bold text-left text-pink-900
        p-1 my-1 border-solid border-l-2 border-pink-900"
      >
        Info
      </button>
    </section>
  );
}
export { SideBar };
