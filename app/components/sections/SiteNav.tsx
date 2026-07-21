import MaterialIcon from "../ui/MaterialIcon";

export default function SiteNav() {
  return (
    <nav className="fixed top-0 z-50 flex w-full justify-end p-8">
      <button
        type="button"
        aria-label="Open menu"
        className="text-on-surface transition-colors hover:text-primary"
      >
        <MaterialIcon name="menu" size={32} />
      </button>
    </nav>
  );
}
