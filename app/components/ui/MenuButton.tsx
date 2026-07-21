type MenuButtonProps = {
  isOpen: boolean;
  onClick: () => void;
};

export default function MenuButton({ isOpen, onClick }: MenuButtonProps) {
  return (
    <button
      type="button"
      aria-expanded={isOpen}
      aria-label={isOpen ? "Close menu" : "Open menu"}
      onClick={onClick}
      className="relative z-[70] flex h-11 w-11 items-center justify-center text-on-surface transition-colors hover:text-primary"
    >
      <span className="menu-icon" data-open={isOpen}>
        <span className="menu-line menu-line-1" />
        <span className="menu-line menu-line-2" />
        <span className="menu-line menu-line-3" />
      </span>
    </button>
  );
}
