function Header() {
  return (
    <nav className="w-full h-14 flex flex-row justify-around items-center">
      <h2 className="text-text text-3xl font-bold">Örs<span className="text-accent m-1">.</span></h2>
      <ul className="flex gap-4 text-text text-lg">
        <li className="hover:border-b-2 transition-all">About me</li>
        <li>Portfolio</li>
        <li>Contact</li>
      </ul>
    </nav>
  )
}

export default Header