import { useState, useEffect } from 'react';
import SystemNavbar from '../../../components/system/SystemNavbar';
import Sidebar from '../../../components/system/Sidebar';
import AdministrationSidebarLinks from './AdministrationSidebarLinks';

const AdministrationLayout = ({ module }) => {
  const initialMenuBtnState = localStorage.getItem('menuBtn') === 'true';
  const [menuBtn, setMenuBtn] = useState(initialMenuBtnState);
  useEffect(() => {
    localStorage.setItem('menuBtn', menuBtn);
  }, [menuBtn]);
  return (
    <>
      <SystemNavbar
        title={'Sistema Administración'}
        menuBtn={menuBtn}
        setMenuBtn={setMenuBtn}
      />
      <div className="h-[calc(100vh_-_5rem)] flex">
        <Sidebar menuBtn={menuBtn} sideBarLinks={<AdministrationSidebarLinks />} />

        <main className="w-full p-8 overflow-auto max-sm:ml-14">{module}</main>
      </div>
    </>
  );
};

export default AdministrationLayout;
