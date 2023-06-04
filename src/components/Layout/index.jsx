import Link from 'next/link';

const Layout = ({ children }) => {
  return (
    <div className='headerNav'>
      <div className='headerNavItems'>
        <Link className='customLink' href='/weatherKyiv'>Город Киев</Link>
        <Link className='customLink' href='/weatherLviv'>Город Львов</Link>
        <Link className='customLink' href='/weatherOdesa'>Город Одесса</Link>
      </div>

      <main>{children}</main>
    </div>
  );
};

export default Layout;