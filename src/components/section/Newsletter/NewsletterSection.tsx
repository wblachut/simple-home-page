import { useState } from 'react';
import { NewsletterSubscribeInfo } from './NewsletterSubscribeInfo/NewsletterSubscribeInfo';
import { newsletterStyle } from './newsletter.styles';
import { subscribeToNewsletter } from '~/api/apiClient';
import { ErrorType, ResponseType } from '~/model/types';
import { useMutation } from '@tanstack/react-query';

export const NewsletterSection = () => {
  const [email, setEmail] = useState<string>('');
  const subscribeMutation = useMutation(subscribeToNewsletter);
  const isResolved = subscribeMutation.status !== 'idle';
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
      {isResolved && <NewsletterSubscribeInfo message={message} responseType={responseType}/>}
    </section>
  );
};
