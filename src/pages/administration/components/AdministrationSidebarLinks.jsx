import LogoutButton from '../../../components/system/LogoutButton';
import SidebarLink from '../../../components/system/SidebarLink';

const AdministrationSidebarLinks = () => {
  return (
    <>
      <SidebarLink
        link={'/administration/dashboard'}
        icon={'dashboard'}
        linkTitle={'Dashboard'}
      />
      <SidebarLink
        link={'/administration/my-tickets'}
        icon={'print'}
        linkTitle={'Resolver pedidos'}
      />
      <SidebarLink
        link={'/administration/available-tickets'}
        icon={'list_alt'}
        linkTitle={'Todos los pedidos'}
      />
      <SidebarLink
        link={'/administration/users'}
        icon={'group'}
        linkTitle={'Usuarios'}
      />
      <SidebarLink
        link={'/administration/settings'}
        icon={'settings'}
        linkTitle={'Configuraciones'}
      />
      <LogoutButton icon={'logout'} linkTitle={'Salir'} />
    </>
  );
};

export default AdministrationSidebarLinks;
