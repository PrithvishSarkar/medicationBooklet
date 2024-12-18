import "../src/tailwind.css";
import coverPhoto from "/coverPhoto.png";

// Initial Display
function CoverPage() {
  return (
    <section className="m-2 md:ml-0 md:grow rounded-lg bg-gray-100">
      <img src={coverPhoto} alt="medicine" className="object-cover min-w-full rounded-lg" />
    </section>
  );
}
export { CoverPage };