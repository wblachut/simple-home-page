import { globalStyles } from '~/global/styles';
import { ResponseType } from '~/model/types';

export const NewsletterSubscribeInfo = ({
  message,
  responseType,
}: {
  message?: string;
  responseType: ResponseType;
}) => {
  const fontColor = globalStyles.color[`${responseType}Color`];

  return <div style={{ color: fontColor, marginTop: '1rem' }}>{message ?? ''}</div>;
};
