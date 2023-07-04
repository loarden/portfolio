import { sidebarIcons } from "../Assets/datas";

function Footer() {
  return (
    <footer className="w-full bg-primary flex py-8 flex-col justify-center gap-10 items-center sm:text-md px-6 text-sm">
      <div className="flex max-w-3xl w-full justify-between">
        <div className="flex gap-5 text-3xl">
          {sidebarIcons.map((icon, index) => {
            return (
              <a key={index} href={icon.url}>{icon.icon}</a>
            )
          })}
        </div>
        <div className="flex items-center">
          <a className="underline" href="mailto:biacsi.ors@gmail.com">
            biacsi.ors@gmail.com
          </a>
        </div>
      </div>
      <p>© 2023 Biacsi Ors</p>
    </footer>
  );
}

export default Footer;
