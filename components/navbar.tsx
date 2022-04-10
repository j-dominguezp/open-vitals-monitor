import Link from 'next/link';
import { FaGithub, FaHeartbeat } from 'react-icons/fa';

const Navbar = () => {
  return (
    <nav className="w-full bg-white/30 backdrop-blur-md py-6">
      <div className="container mx-auto flex items-center justify-between">
        <Link href="/" passHref>
          <a className="inline-flex gap-x-4">
            <FaHeartbeat className="text-3xl text-rose-500" />

            <h1 className="text-2xl font-semibold">Open Vitals Monitor</h1>
          </a>
        </Link>

        <div>
          <a
            href="https://github.com/j-dominguezp/open-vitals-monitor"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub className="text-3xl" />
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
