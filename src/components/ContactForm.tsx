import { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';

function ContactForm({ setIsSent }: { setIsSent: (value: boolean) => void }) {
  const [isSending, setIsSending] = useState<boolean>(false);

  const form = useRef<HTMLFormElement | null>(null);

  const sendEmail = (e: React.SubmitEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!form.current) return;

    const formData = new FormData(form.current!);

    const name = formData.get('name') as string | null;
    const email = formData.get('email') as string | null;
    const message = formData.get('message') as string | null;

    // Basic validation
    if (!name || !email || !message) {
      //   console.log('All fields are required');
      return;
    }

    // Trim check (prevents spaces-only input)
    if (!name.trim() || !email.trim() || !message.trim()) {
      //   console.log('Fields cannot be empty');
      return;
    }

    // Email format check
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      //   console.log('Invalid email address');
      return;
    }

    setIsSending(true);

    emailjs
      .sendForm('service_wcb7mxh', 'template_uxhombi', form.current!, {
        publicKey: import.meta.env.VITE_SENDEMAIL_PUBLIC,
      })
      .then(
        () => {
          console.log('SUCCESS!');
          setIsSent(true);
        },
        (error) => {
          console.log('FAILED...', error.text);
          setIsSent(false);
        },
      )
      .finally(() => {
        setIsSending(false);
      });
  };

  return (
    <>
      <p className='text-zinc-400 mb-12 text-lg'>
        If you have an idea, a small business, or a project that needs a
        developer who's flexible and eager to grow, I'd love to hear about it.
      </p>
      <form onSubmit={sendEmail} ref={form} className='space-y-6'>
        <div>
          <label className='block text-sm text-zinc-400 mb-2'>Name</label>
          <input
            disabled={isSending}
            type='text'
            name='name'
            className='w-full bg-zinc-900 border border-zinc-800 rounded px-4 py-3 focus:outline-none focus:border-lime-400 transition-colors'
            placeholder='Your name'
            required
          />
        </div>
        <div>
          <label className='block text-sm text-zinc-400 mb-2'>Email</label>
          <input
            disabled={isSending}
            type='email'
            name='email'
            className='w-full bg-zinc-900 border border-zinc-800 rounded px-4 py-3 focus:outline-none focus:border-lime-400 transition-colors'
            placeholder='your.email@example.com'
            required
          />
        </div>
        <div>
          <label className='block text-sm text-zinc-400 mb-2'>Message</label>
          <textarea
            disabled={isSending}
            rows={6}
            name='message'
            className='w-full bg-zinc-900 border border-zinc-800 rounded px-4 py-3 focus:outline-none focus:border-lime-400 transition-colors resize-none'
            placeholder='Tell me about your project...'
            required
          ></textarea>
        </div>
        <div className='flex justify-end'>
          <button
            disabled={isSending}
            type='submit'
            className='w-full md:w-auto px-8 py-3 bg-lime-400 text-zinc-950 rounded hover:bg-lime-500 transition-colors font-medium'
          >
            {isSending ? (
              <div className='flex items-center justify-center'>
                <div className='h-6 w-6  animate-spin rounded-full border-4 border-black border-t-lime-400'></div>
              </div>
            ) : (
              'Send'
            )}
          </button>
        </div>
      </form>
    </>
  );
}
export default ContactForm;
