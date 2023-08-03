import { globalStyles } from '~/global/styles';

export const navStyles = {
  nav: {
    position: 'fixed' as const,
    width: '100vw',
    padding: 0,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    background: globalStyles.color.white,
  },
  logoBox: {
    padding: 10,
    marginRight: 40,
  },
  link: {
    padding: 10,
    textDecoration: 'none',
    color: 'inherit',
    cursor: 'pointer',
  },
};
