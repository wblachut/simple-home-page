import { useMutation } from '@tanstack/react-query';
import { useState } from 'react';
import { subscribeToNewsletter } from '~/api/apiClient';
import { ErrorType, ResponseType } from '~/model/types';
import { NewsletterSubscribeInfo } from './NewsletterSubscribeInfo/NewsletterSubscribeInfo';
import { newsletterStyle } from './newsletter.styles';

export const NewsletterSection = () => {
  const [email, setEmail] = useState<string>('');
  const subscribeMutation = useMutation(subscribeToNewsletter);
  const { data, isError, error } = subscribeMutation;
  const responseType = isError ? ResponseType.ERROR : ResponseType.SUCCESS;
  const message = isError ? (error as ErrorType).response.data.message : data?.message;

  const handleSubmit = (event: React.SyntheticEvent) => {
    event.preventDefault();
    subscribeMutation.mutate({ email });
  };

  return (
    <section style={newsletterStyle.section}>
      <h2 style={newsletterStyle.h2}>Sign up for Newsletter</h2>
      <div>
        <form onSubmit={handleSubmit}>
          <input
            type='email'
            placeholder='Type your email'
            value={email}
            style={newsletterStyle.input}
            onChange={(e) => setEmail(e.target.value)}
          />
          <button disabled={false} style={newsletterStyle.button} type='submit'>
            Submit
          </button>
        </form>
      </div>
      <NewsletterSubscribeInfo message={message} responseType={responseType} />
    </section>
  );
};
