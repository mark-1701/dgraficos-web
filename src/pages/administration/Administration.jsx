import { useState, useEffect } from 'react';
import SystemNavbar from '../../components/system/SystemNavbar';
import SystemSidebar from '../../components/system/SystemSidebar';
import SidebarLinks from './components/SidebarLinks';

const Administration = () => {
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
        <SystemSidebar
          menuBtn={menuBtn}
          sideBarLinks={<SidebarLinks />}
        />

        <main className="w-full p-8 overflow-auto max-sm:ml-14">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Officia
          veritatis similique dicta voluptatem nesciunt ex, corrupti fugit
          expedita, error fugiat pariatur inventore magnam. Quos sequi similique
          quia cum labore perferendis vel voluptatem! Explicabo ipsa ullam
          dignissimos? Quibusdam qui omnis ullam minus id nemo ab totam neque
          enim itaque. Perferendis repellat illum, quasi quis nisi autem
          dignissimos nihil quae adipisci temporibus nostrum, consectetur
          architecto? Molestias pariatur possimus rerum! Dolor corporis mollitia
          veniam voluptate commodi iusto ipsa illo omnis magni doloribus eos,
          nam dolorum, perspiciatis quaerat cum incidunt ipsum, placeat
          consequatur? Dignissimos debitis impedit aspernatur vero accusamus
          similique cum facere, quod eum.
        </main>
      </div>
    </>
  );
};

export default Administration;
