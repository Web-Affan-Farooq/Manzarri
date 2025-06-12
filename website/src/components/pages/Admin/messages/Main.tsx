'use client'

import sanityClient from '@/lib/sanity'
import React, { useEffect, useState } from 'react'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

interface FormSubmission {
  _id: string;
  customerEmail: string;
  customerMessage: string;
  customerName: string;
  userPhonenumber: string;
  _updatedAt: string;
}

const Main = () => {
  const [data, setdata] = useState<FormSubmission[]>([]);

  useEffect(() => {
    const getData = async () => {
        const q = `*[_type == "FormSubmissions"]{
    _id,
    customerEmail,
    customerMessage,
    customerName,
    userPhonenumber,
    _updatedAt,
  } | order(_updatedAt desc)`

  const data: FormSubmission[] = await sanityClient.fetch(q);
  setdata(data);
    }
    getData();
  },[]);

  return (
    <section className="w-full p-4">
      <h1 className="text-2xl font-semibold text-gray-500 mb-6">Customer Messages</h1>

      <div className='flex flex-col'>
{data.length === 0 ? (
        <p className="text-gray-400">No messages found.</p>
      ) : (
        <Accordion type="single" collapsible className="space-y-2">
          {data.map((message, idx) => (
            <AccordionItem
              key={message._id}
              value={`item-${idx}`}
              className="rounded-md px-4 py-3"
            >
              <AccordionTrigger className="flex justify-between text-left">
                <span className="font-medium">{message.customerName}</span>
                <span className="text-sm text-blue-600">
                  {new Date(message._updatedAt).toLocaleDateString()}
                </span>
              </AccordionTrigger>

              <AccordionContent className="mt-2 space-y-1 text-sm text-gray-400">
                <p>
                  <strong className="text-gray-500">Message from:</strong> {message.customerName}
                </p>
                <p>
                  <strong className="text-gray-500">Email:</strong> {message.customerEmail}
                </p>
                <p>
                  <strong className="text-gray-500">Message:</strong> {message.customerMessage}
                </p>
                <p>
                  <strong className="text-gray-500">Phone Number:</strong> {message.userPhonenumber}
                </p>
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      )}
      </div>
    </section>
  )
}

export default Main

// import sanityClient from '@/lib/sanity'
// import React from 'react';
// import {
//   Accordion,
//   AccordionContent,
//   AccordionItem,
//   AccordionTrigger,
// } from "@/components/ui/accordion";

// interface FormSubmission {
//   _id: string;
//   customerEmail: string;
//   customerMessage: string;
//   customerName: string;
//   userPhonenumber: string;
//   _updatedAt: string;
// }

// const Main = async () => {
//   const q = `*[_type == "FormSubmissions"]{
//   _id,
//   customerEmail,
//   customerMessage,
//   customerName,
//   userPhonenumber,
//   _updatedAt,
// }`
//   const data = await sanityClient.fetch(q);

//   return (
//     <section className='w-full p-1'>
//       <h1 className='font-semibold text-gray-400 text-[24px]'>Messages</h1>
//       <br />
//       <div className='mt-[20px] flex flex-col flex-nowrap w-full'>
//         {data.map((message: FormSubmission, idx: number) => {
//           return <div className='cursor-pointer flex flex-row flex-nowrap justify-between items-center p-[15px]' key={idx}>
//             <span>
//               {message.customerName}
//             </span>
//             <span className='text-blue-500'>
//               12/25/2025
//             </span>
//           </div>
//         })}
//         <Accordion type="single" collapsible>
//           <AccordionItem value="item-1" className='cursor-pointer p-[15px]'>
//             <AccordionTrigger className='flex flex-row flex-nowrap justify-between items-center'>
//               <span>{data[0].customerName}</span>
//               <span className='text-blue-500'>
//                 12/25/2025
//               </span>
//             </AccordionTrigger>

//             <AccordionContent>
//               <p className='text-[14px]'>
//                 <span className='text-gray-400'> &nbsp; Message from </span>{data[0].customerName}
//               </p>
//               <p className='text-[14px]'>
//                 <span className='text-gray-400'> &nbsp; Email </span>{data[0].customerEmail}
//               </p>
//               <p className='text-[14px]'>
//                 <span className='text-gray-400'> &nbsp; Message </span>{data[0].customerMessage}
//               </p>
//               <p className='text-[14px]'>
//                 <span className='text-gray-400'> &nbsp; Phonenumber </span>{data[0].userPhonenumber}
//               </p>
//               <p className='text-[14px]'>
//                 <span className='text-gray-400'> &nbsp; </span>{data[0].userPhonenumber}
//               </p>
//             </AccordionContent>
//           </AccordionItem>
//         </Accordion>
//       </div>
//     </section>)
// }

// export default Main