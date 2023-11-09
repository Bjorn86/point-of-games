// IMPORT PACKAGES
import { Outlet } from 'react-router-dom';

// IMPORT WIDGETS
import { Header } from 'widgets/header';

// BASE LAYOUT WIDGET
function BaseLayout() {
  return (
    <>
      <Header />
      <main className='main'>
        <Outlet />
      </main>
    </>
  );
}

export default BaseLayout;
