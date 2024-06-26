import Link from 'next/link';
import { HiHome, HiUser, HiViewColumns, HiRectangleGroup, HiInformationCircle } from 'react-icons/hi2';

import { useRouter } from 'next/router';

export const navData = [
  { name: 'home', path: '/', icon: <HiHome /> },
  { name: 'about', path: '/about', icon: <HiUser /> },
  { name: 'services', path: '/services', icon: <HiRectangleGroup /> },
  { name: 'work', path: '/work', icon: <HiViewColumns /> },
  // { name: 'testimonials', path: '/testimonials', icon: <HiChatBubbleBottomCenterText /> },
  // { name: 'contact', path: '/contact', icon: <HiEnvelope /> },
  // { name: 'details', path: '/details', icon: <HiInformationCircle /> },
];

const Nav = () => {
  const router = useRouter();
  const pathName = router.pathname;
  return (
    <nav className="flex flex-col items-center xl:justify-center gap-y-4 fixed h-max bottom-0 mt-auto xl:right-[2%] z-50 top-0 w-full xl:w-16 xl:max-w-md xl:h-screen">
      {/* Inner div */}
      <div className="flex w-full xl:flex-col items-center justify-between xl:justify-center gap-y-10 px-4 md:px-40 xl:px-0 h-[80px] xl:h-max py-8 bg-white/10 backdrop-blur-sm text-3xl xl:text-xl xl:rounded-full">
        {navData.map((link, index) => {
          const { name, path, icon } = link;
          return (
            <Link
              className={`${path === pathName && 'text-accent'} relative flex items-center group hover:text-accent transition-all duration-300`}
              href={path}
              key={index}
            >
              {/* Tooltip */}
              <div className="absolute pr-14 right-0 hidden xl:group-hover:flex">
                <div className="bg-white relative flex text-primary items-center p-[10px] rounded-[3px]">
                  <div className="text-[12px] leading-none font-semibold capitalize">{name}</div>
                  {/* Triangle */}
                  <div className="border-solid border-l-white border-l-8 border-y-transparent border-y-[6px] border-r-0 absolute -right-1"></div>
                </div>
              </div>
              {/* ICONS */}
              <div>{icon}</div>
            </Link>
          );
        })}
      </div>
    </nav>
  );
};

export default Nav;
