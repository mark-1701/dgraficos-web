import LogoutButton from '../../../components/system/LogoutButton';
import SystemSidebarLink from '../../../components/system/SystemSidebarLink';

const SidebarLinks = () => {
  return (
    <>
      <SystemSidebarLink
        link={'/administration/dashboard'}
        icon={'dashboard'}
        linkTitle={'Dashboard'}
      />
      <SystemSidebarLink
        link={'/administration/my-tickets'}
        icon={'print'}
        linkTitle={'Resolver pedidos'}
      />
      <SystemSidebarLink
        link={'/administration/available-tickets'}
        icon={'list_alt'}
        linkTitle={'Todos los pedidos'}
      />
      <SystemSidebarLink
        link={'/administration/users'}
        icon={'group'}
        linkTitle={'Usuarios'}
      />
      <SystemSidebarLink
        link={'/administration/settings'}
        icon={'settings'}
        linkTitle={'Configuraciones'}
      />
      <LogoutButton
        icon={'logout'}
        linkTitle={'Salir'}
      />
    </>
  );
};

export default SidebarLinks;
