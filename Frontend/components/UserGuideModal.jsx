import "../src/tailwind.css";

// This Modal is displayed when the user clicks on 'User Guide' in Sidebar
// updateShowUserGuideModal -> Updates wheather or not this modal should be shown
function UserGuideModal({ updateShowUserGuideModal }) {
  return (
    <section className="fixed min-w-full min-h-[100vh] bg-transparent backdrop-blur-sm">
      <div
        className="absolute min-w-[90%] md:min-w-[30%] top-[50%] left-[50%]
        translate-x-[-50%] translate-y-[-50%] bg-violet-200 border-none rounded-lg
        p-2 text-neutral-800 font-sans"
      >
        <table className="mb-4 border border-violet-500 rounded-md border-separate">
          <tbody>
            <tr className="text-neutral-800">
              <td className="border-b border-b-violet-500 p-1 
              font-bold text-xl text-right font-mono">
                Dashboard:{" "}
              </td>
              <td className="border-b border-b-violet-500 p-1 italic 
              text-lg text-left font-sans">
                Contains all the Medicine Details
              </td>
            </tr>
            <tr className="text-neutral-800">
              <td className="border-b border-b-violet-500 p-1 
              font-bold text-xl text-right font-mono">
                Add Medicine:{" "}
              </td>
              <td className="border-b border-b-violet-500 p-1 italic 
              text-lg text-left font-sans">
                Form to add more medicines in the list
              </td>
            </tr>
            <tr className="text-neutral-800">
              <td className="p-1 font-bold text-xl text-right font-mono">Checklist: </td>
              <td className="p-1 italic text-lg text-left font-sans">
                Check out the medicines after you intake
              </td>
            </tr>
          </tbody>
        </table>
        <button
          onClick={() => updateShowUserGuideModal(false)}
          className="border-none rounded-md bg-red-600 
          text-white text-sm font-bold px-4 py-1"
        >
          Close
        </button>
      </div>
    </section>
  );
}

export { UserGuideModal };