import { QueryFunction, useQuery } from '@tanstack/react-query';
import { Suspense } from 'react';
import { fetchSimplePage } from '~/api/apiClient';
import { Section, SinglePage } from '~/api/model.dto';
import { Loader } from '~/components/common/Loader';
import { HeroSection, NewsletterSection, TestimonialSection } from '~/components/section';
import { mockSinglePageData } from '~/mock/mockSinglePageData';
import { SectionType } from '~/model/types';

const PageView = ({ homePageId }: { homePageId: string }) => {
  const { data: homePageData } = useQuery({
    queryKey: ['simplePage', homePageId],
    queryFn: fetchSimplePage(homePageId!) as unknown as QueryFunction<unknown, string[]>,
    enabled: !!homePageId,
  });
  const sections = (homePageData as SinglePage)?.sections ?? [];
  const heroSection = sections.find((section: Section) => section.type === SectionType.HERO);
  const testimonialSection = sections.find(
    (section: Section) => section.type === SectionType.TESTIMONIAL,
  );

  const heroText = heroSection?.text ?? mockSinglePageData.sections[0].text;
  const quote = testimonialSection?.text ?? mockSinglePageData.sections[1].text;
  const author = testimonialSection?.author ?? mockSinglePageData.sections[1].author;

  return (
    <Suspense fallback={<Loader />}>
      <main>
        <HeroSection text={heroText} imgSrc={heroSection?.img} />
        <TestimonialSection quote={quote} author={author} />
        <NewsletterSection />
      </main>
    </Suspense>
  );
};

export default PageView;
