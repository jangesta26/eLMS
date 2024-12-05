'use client'
import { Card } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import Image from 'next/image';
import React, { useState } from 'react';

const SubscriptionPage = () => {
  const [isMonthly, setIsMonthly] = useState(true);

  // Common features that appear in all plans
  const planFeatures = [
    { label: 'Image generations', value: 50 },
    { label: 'Credits', value: 500 },
    { label: 'Customer Support', value: 'Included' },
    { label: 'Cloud Storage', value: '50GB' },
    { label: 'Unlimited Book Mark', value: 'Included' },
    { label: 'Unlimited basic feature', value: 'Included' },
  ];


  const plans = [
    {
      name: 'Basic',
      icon: <svg fill="#000000" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" viewBox="0 0 108.34 108.34" xmlSpace="preserve"><g id="SVGRepo_bgCarrier" strokeWidth={0}><rect x={0} y={0} width="108.34" height="108.34" rx="54.17" fill="#bdc8cb " /></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round" stroke="#CCCCCC" strokeWidth="11.483616000000001" /><g id="SVGRepo_iconCarrier"> <g> <path d="M54.168,0C24.3,0,0,24.3,0,54.168c0,29.869,24.3,54.168,54.168,54.168s54.168-24.299,54.168-54.168 C108.336,24.3,84.036,0,54.168,0z M91.702,91.701c-10.076,10.372-22.142,15.558-36.198,15.558V1.077 c14.057,0,26.122,5.197,36.198,15.588c10.073,10.396,15.112,22.895,15.112,37.503C106.814,68.816,101.775,81.327,91.702,91.701z" /> </g> </g></svg>,
      monthlyPrice: 10,
      yearlyPrice: 8,
      description: 'Ideal for individuals.',
      features: planFeatures,
      buttonLabel: 'Buy Now',
    },
    {
      name: 'For Startups',
      icon: <svg fill="#000000" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" strokeWidth={0} /><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round" /><g id="SVGRepo_iconCarrier"><path   d="M3,20V4A1,1,0,0,1,4,3h7V21H4A1,1,0,0,1,3,20Zm18,0V13H13v8h7A1,1,0,0,0,21,20ZM21,4a1,1,0,0,0-1-1H13v8h8Z" /></g></svg>,
      monthlyPrice: 20,
      yearlyPrice: 15,
      description: 'Pro',
      features: planFeatures,
      buttonLabel: 'Buy Now',
    },
    {
      name: 'Enterprise',
        icon: <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" viewBox="0 0 392.574 392.574" xmlSpace="preserve" fill="#000000"><g id="SVGRepo_bgCarrier" strokeWidth={0} /><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round" /><g id="SVGRepo_iconCarrier"> <path style={{fill: '#000000'}} d="M377.906,148.287h-58.053c-0.711-1.875-34.844-61.091-36.073-62.578l40.016-69.301 c3.038-5.236,1.228-11.895-4.008-14.933c-5.172-3.038-11.895-1.228-14.933,4.008l-40.016,69.301 c-1.939-0.388-66.457-0.646-66.457-0.646c-11.636,0-22.497,6.271-28.38,16.356c0,0-32.194,56.436-32.905,58.57 c-2.263-0.453-71.24-0.517-73.18-0.129L24.031,79.568c-3.038-5.172-9.632-7.046-14.933-4.008c-5.172,3.038-7.046,9.632-4.008,14.933 l40.016,69.301c-1.293,1.487-33.681,57.212-33.681,57.212c-5.818,10.15-5.818,22.626,0,32.711c0,0,32.453,55.661,33.681,57.212 L5.089,376.166c-3.038,5.236-1.228,11.895,4.008,14.933c5.172,3.038,11.895,1.228,14.933-4.008l40.016-69.301 c1.939,0.388,70.4,0.388,72.404,0l40.016,69.301c3.038,5.172,9.632,7.046,14.933,4.008c5.172-3.038,7.046-9.632,4.008-14.933 l-40.081-69.301c1.228-1.487,35.685-61.22,36.396-63.354c2.263,0.453,71.24,0.517,73.18,0.129l40.016,69.301 c3.038,5.172,9.632,7.046,14.933,4.008c5.172-3.038,7.046-9.632,4.008-14.933l-40.016-69.301 c1.293-1.487,35.491-60.768,36.137-62.578h58.053c6.012,0,10.925-4.848,10.925-10.925 C388.895,153.136,383.918,148.287,377.906,148.287z M170.067,238.728l-30.19,52.364c-1.939,3.426-5.56,5.495-9.438,5.495H69.994 c-3.879,0-7.499-2.069-9.438-5.495l-17.002-29.414h21.657c6.012,0,10.925-4.848,10.925-10.925c0-6.012-4.848-10.925-10.925-10.925 H30.883l-0.646-1.099c-1.939-3.426-1.939-7.564,0-10.925l5.56-9.568h61.22c6.012,0,10.925-4.848,10.925-10.925 c0-6.012-4.848-10.925-10.925-10.925H48.403l12.089-20.752c1.939-3.426,5.56-5.495,9.438-5.495h60.38 c3.879,0,7.499,2.069,9.438,5.495l30.19,52.299C172.007,231.229,172.007,235.431,170.067,238.728z M298.584,164.643l-30.255,52.299 c-1.939,3.426-5.56,5.495-9.438,5.495h-60.444c-3.879,0-7.499-2.069-9.438-5.495l-30.19-52.299c-1.939-3.297-1.939-7.564,0-10.925 l30.19-52.299c1.939-3.426,5.56-5.495,9.438-5.495h60.444c3.879,0,7.499,2.069,9.438,5.495l30.19,52.299 C300.459,157.079,300.459,161.281,298.584,164.643z" /> <path style={{fill: '#e8ba30'}} d="M139.813,175.568c-1.939-3.426-5.56-5.495-9.438-5.495H69.93c-3.879,0-7.499,2.069-9.438,5.495 l-12.024,20.945h48.614c6.012,0,10.925,4.848,10.925,10.925c0,6.012-4.848,10.925-10.925,10.925h-61.22l-5.56,9.568 c-1.939,3.426-1.939,7.564,0,10.925l0.646,1.099h34.263c6.012,0,10.925,4.848,10.925,10.925c0,6.012-4.848,10.925-10.925,10.925 H43.489l17.002,29.285c1.939,3.426,5.56,5.495,9.438,5.495h60.38c3.879,0,7.499-2.069,9.438-5.495l30.19-52.299 c1.939-3.426,1.939-7.564,0-10.925L139.813,175.568z" /> <path style={{fill: '#bdc8cb'}} d="M268.33,101.354c-1.939-3.297-5.56-5.495-9.438-5.495h-60.444c-3.879,0-7.499,2.069-9.438,5.495 l-30.319,52.364c-1.939,3.426-1.939,7.564,0,10.925l30.19,52.299c1.939,3.297,5.56,5.495,9.438,5.495h60.444 c3.879,0,7.499-2.069,9.438-5.495l30.19-52.299c1.939-3.297,1.939-7.564,0-10.925L268.33,101.354z" /> </g></svg>
,
      monthlyPrice: 50,
      yearlyPrice: 35,
      description: 'Ideal for larger Teams.',
      features: planFeatures,
      buttonLabel: 'Buy Now',
    },
  ];

  return (
    <div className="max-w-6xl mx-auto font-[sans-serif] p-4">
      <div className="text-center">
        <h2 className="text-primary text-4xl font-bold">Pricing Plans</h2>
      </div>

      {/* Toggle Buttons for Monthly/Yearly */}
      <div className="flex mx-auto bg-gray-100 dark:bg-slate-900 rounded-full max-w-[250px] p-1 mt-8">
        <button
          onClick={() => setIsMonthly(true)}
          className={` w-full text-sm py-2 px-4 rounded-full ${
            isMonthly ? 'bg-blue-500 text-white' : 'bg-transparent text-primary'
          }`}
        >
          Monthly
        </button>
        <button
          onClick={() => setIsMonthly(false)}
          className={`w-full text-sm py-2 px-4 rounded-full ${
           !isMonthly ? 'bg-blue-500 text-white' : 'bg-transparent text-primary'
          }`}
        >
          Yearly
        </button>
      </div>

      {/* Plan Cards */}
      <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-6 mt-20 mb-20">
        {plans.map((plan, index) => (
          <Card
            key={index}
            className={`${
              index === 1 ? 'bg-primary  lg:scale-[1]' : ' lg:scale-[0.92]  bg-gray-100 dark:bg-slate-900'
            } rounded-3xl overflow-hidden transition-all duration-500 hover:scale-110 shadow-2xl`}
          >
            <div className="text-left">
              <div className='flex items-center gap-2 p-6'>
                <div className='w-14 h-14 bg-gray-200 p-3 rounded-2xl'>
                  {plan.icon}
                </div>
                <div className='flex flex-col'>
                  <h4 className={`${
              index === 1 ? 'text-gray-300 dark:text-black' : 'text-primary'
            } text-xl font-semibold`}>{plan.name}</h4>
                  <p className={`${
              index === 1 ? 'text-gray-300 dark:text-black' : 'text-primary'
            }`}>{plan.description}</p>
                </div>
              </div>
             <Separator className='w-full' /> 
             <div className='p-8 -mt-4'>
              <p className={`${
              index === 1 ? 'text-gray-300 dark:text-black' : 'text-primary'
            }`}>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              <h3 className={`${
              index === 1 ? 'text-gray-300 dark:text-black' : 'text-primary'
            } font-semibold text-2xl mt-2`}>
                ${
                    isMonthly ? plan.monthlyPrice : plan.yearlyPrice
                
                }
                <sub className="text-sm font-medium text-gray-600 ml-1">
                  / {isMonthly ? 'Month' : 'Year'}
                </sub>
              </h3>
            </div>

            {/* Plan Features */}
            <div className="p-8 -mt-10">
              <h4 className={`${
              index === 1 ? 'text-gray-300 dark:text-black' : 'text-primary'
            } font-semibold text-lg mb-4`} >Plan Includes</h4>
              <ul className="space-y-4">
                {plan.features.map((feature, indx) => (
                  <li key={indx} className={`${
                    index === 1 ? 'text-gray-300 dark:text-black' : 'text-primary'
                  } flex items-center text-sm`}>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width={18}
                      className="mr-3 bg-blue-100 fill-blue-600 rounded-full p-[3px]"
                      viewBox="0 0 24 24"
                    >
                      <path d="M9.707 19.121a.997.997 0 0 1-1.414 0l-5.646-5.647a1.5 1.5 0 0 1 0-2.121l.707-.707a1.5 1.5 0 0 1 2.121 0L9 14.171l9.525-9.525a1.5 1.5 0 0 1 2.121 0l.707.707a1.5 1.5 0 0 1 0 2.121z" />
                    </svg>
                    {feature.value} {feature.label}
                  </li>
                  
                ))}
              </ul>
              <button
                type="button"
                className="w-full mt-8 px-5 py-2.5 text-sm bg-blue-600 text-white hover:bg-blue-700 rounded-full"
              >
                {plan.buttonLabel}
              </button>
            </div>
          </div>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default SubscriptionPage;
