import { ReactNode } from 'react';
import { globalStyles } from '~/global/styles';

const contactButtonStyle = {
  ...globalStyles.button,
  backgroundColor: globalStyles.color.accentColor,
  borderRadius: '24px',
  width: '192px',
  height: '48px',
  padding: '12px 54px',
  marginRight: '4rem',
};

export const ContactButton = ({ children }: { children: ReactNode }) => {
  return <button style={contactButtonStyle}>{children}</button>;
};
