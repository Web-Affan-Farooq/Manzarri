import React from 'react';
import { CheckoutForm } from '@/components/pages';

const Checkout = () => {
  return (
    <main>
      <article>
        <section className='px-[30px]  pt-[150px]'>
          <h1 className='font-bold text-faun-dark font-rye text-[30px]'>Checkout</h1>
          {/* Checkout form  ...*/}
          <>
          <CheckoutForm/>        
          </>

        </section>
      </article>
    </main>
  )
}

export default Checkout;