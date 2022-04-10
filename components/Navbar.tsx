import Link from 'next/link';
import { FaGithub, FaHeartbeat } from 'react-icons/fa';
import ThemeSwitcher from './ThemeSwitcher';

const Navbar = () => {
  return (
    <nav className="w-full bg-transparent backdrop-blur-md py-6">
      <div className="container mx-auto flex items-center justify-between">
        <Link href="/" passHref>
          <a className="inline-flex items-center gap-x-4">
            <FaHeartbeat className="text-3xl text-rose-500 dark:text-rose-400" />

            <h1 className="text-2xl text-rose-500 dark:text-rose-400 font-semibold">Open Vitals Monitor</h1>
          </a>
        </Link>

        <div className="flex items-center gap-x-6">
          <a href="https://github.com/j-dominguezp/open-vitals-monitor" target="_blank" rel="noopener noreferrer">
            <FaGithub className="text-2xl text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-100 " />
          </a>

          <ThemeSwitcher />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
