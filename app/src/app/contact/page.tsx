import React from 'react';
import { ContactForm } from '@/components/pages';

const ContactPage = () => {
  return (
    <main>
      <article>
        <div className={"py-[100px] sm:px-[30px] max-sm:px-[10px]"}>
          <ContactForm />
        </div>
      </article>
    </main>
  )
}

export default ContactPage