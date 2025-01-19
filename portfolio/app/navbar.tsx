export default function Navbar() {
    return (
      <div className="navbar bg-[#083344] rounded-full px-2 w-fit mx-auto mt-4 fixed top-0 left-1/2 transform -translate-x-1/2">
        <ul className="flex px-1 gap-8">
          <li>
            <a className="bg-[#0C5769] text-white rounded-full px-6 py-3">Home</a>
          </li>
          <li>
            <a className="text-white hover:bg-[#0C5769] rounded-full px-6 py-3">About</a>
          </li>
          <li>
            <a className="text-white hover:bg-[#0C5769] rounded-full px-6 py-3">TechStack</a>
          </li>
          <li>
            <a className="text-white hover:bg-[#0C5769] rounded-full px-6 py-3">Projects</a>
          </li>
          <li>
            <a className="text-white hover:bg-[#0C5769] rounded-full px-6 py-3">Contact</a>
          </li>
        </ul>
      </div>
    );
  }
  