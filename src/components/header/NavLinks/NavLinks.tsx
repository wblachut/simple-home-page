import { NavLink } from 'react-router-dom';
import { Page } from '~/api/model.dto';
import Logo from '~/assets/logo.svg';
import { ContactButton } from '../ContactButton/ContactButton';
import { getLinkName } from './helpers/navLinksHelpers';
import { navStyles } from './navLinks.styles';

export interface PagesDataProp {
  pagesData: Page[];
}

export const NavLinks = ({ pagesData }: PagesDataProp) => (
  <nav style={navStyles.nav}>
    <ul style={{ listStyle: 'none', display: 'flex', margin: 10, padding: '0px 10px' }}>
      <NavLink to='/' style={navStyles.logoBox}>
        <img src={Logo} alt='logo-svg' />
      </NavLink>
      {pagesData.map((navElement, index) => (
        <NavLink
          key={navElement.id}
          to={navElement.url}
          style={{ ...navStyles.link, marginLeft: index > 0 ? '1rem' : 0 }}
        >
          {getLinkName(navElement.url)}
        </NavLink>
      ))}
    </ul>
    <ContactButton>Contact us</ContactButton>
  </nav>
);
