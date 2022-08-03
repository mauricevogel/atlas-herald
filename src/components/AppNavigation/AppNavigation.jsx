import AppNavbar from '../AppNavbar/Navbar';
import MobileHeader from '../MobileHeader/MobileHeader';

const AppNavigation = ({ children }) => {
  return (
    <div className="flex flex-col lg:flex-row w-screen mb-20">
      <MobileHeader />
      <AppNavbar />
      <div className="mx-0 lg:mx-4 mt-10 grow">{children}</div>
    </div>
  );
};

export default AppNavigation;
