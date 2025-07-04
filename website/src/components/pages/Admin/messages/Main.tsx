'use client'
/* _____ This is client component because we're using dates here ... */

import React from 'react'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import useDashboardCache from '@/stores/admin';

const Main = () => {
  const { formSubmissions } = useDashboardCache();

  return (
    <section className="w-full p-4">
      <div className='flex flex-col'>
        {formSubmissions.length === 0 ? (
          <p className="text-gray-400">No messages found.</p>
        ) : (
          <Accordion type="single" collapsible className="space-y-2">
            {formSubmissions.map((message, idx) => (
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