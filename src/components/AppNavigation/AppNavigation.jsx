import AppNavbar from '../AppNavbar/Navbar';
import MobileHeader from '../MobileHeader/MobileHeader';

const AppNavigation = ({ children }) => {
  return (
    <div className="flex flex-col lg:flex-row w-screen">
      <MobileHeader />
      <AppNavbar />
      <div className="mx-2 lg:mx-4 mt-10 grow">{children}</div>
    </div>
  );
};

export default AppNavigation;
