export default function Navbar() {
  return (
    <nav className="py-6 md:py-8 fixed top-0 w-full !bg-[#191D26] z-50">
      <div className="container mx-auto flex items-center justify-between gap-x-6">
        {/* <!-- Logo --> */}
        <a href="/">
          <h1 className="font-bold text-3xl">TASKER</h1>
        </a>
        {/* <!-- Logo Ends --> */}
      </div>
    </nav>
  );
}
