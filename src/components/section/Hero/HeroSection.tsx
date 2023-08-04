import heroImg from '~/assets/5EB7A4E2-36F3-4165-B7F6-9D5F1508B047.png';
import { globalStyles } from '~/global/styles';

const heroStyle = {
  section: {
    ...globalStyles.section,
    background: globalStyles.color.white,
    alignItems: 'center',
    justifyContent: 'center',
    height: '90vh',
  },
  h1: {
    width: '30vw',
    fontSize: '2.5rem',
  },
  img: {
    height: '56vh',
    width: '30vw',
    backgroundSize: 'cover',
    objectFit: 'cover' as const,
  },
};

interface HeroSectionProps {
  text?: string;
  imgSrc?: HTMLImageElement['src'];
}

export const HeroSection = ({ text, imgSrc }: HeroSectionProps) => {
  return (
    <section style={heroStyle.section}>
      <h1 style={heroStyle.h1}>{text ?? ''}</h1>
      <img src={heroImg ?? imgSrc} style={heroStyle.img} alt='hero-section-img' />
    </section>
  );
};
