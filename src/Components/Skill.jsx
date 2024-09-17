import React from 'react'
import { IconBrandReact } from '@tabler/icons-react';
import { IconBrandLaravel } from '@tabler/icons-react';
import { IconBrandTailwind } from '@tabler/icons-react';
import { IconBrandCss3 } from '@tabler/icons-react';
import { IconBrandHtml5} from '@tabler/icons-react';

const Skill = () => {
  return (
    <div>


      <div class="space-y-3  mx-4 md:mx-16 lg:mx-[28rem] mt-4 mb-8">
        <h2 className='text-xl font-bold text-gray-400 text-start mt-8'>Skills</h2>

        <dl class="flex flex-col sm:flex-row gap-1">
          <dt class="min-w-40">
            <span class="block text-sm text-gray-500 dark:text-black">Development:</span>
          </dt>
          <dd>
            <ul>
              <li class="me-1 after:content-[','] inline-flex items-center text-sm text-gray-800 dark:text-black">
              <IconBrandHtml5 stroke={1} className='h-5 w-5 me-1 '/>
                HTML
              </li>
              <li class="me-1 after:content-[','] inline-flex items-center text-sm text-gray-800 dark:text-black">
              <IconBrandCss3 stroke={1} className='h-5 w-5 me-1 '/>
                CSS
              </li>
              <li class="me-1 after:content-[','] inline-flex items-center text-sm text-gray-800 dark:text-black">
                <IconBrandTailwind stroke={1} className='h-5 w-5 me-1'/>
                Tailwind CSS
              </li>
              <li class="me-1 after:content-[','] inline-flex items-center text-sm text-gray-800 dark:text-black">
              <IconBrandReact stroke={1} className='h-5 w-5 me-1'/>
                React
              </li>
              <li class="me-1 after:content-[','] inline-flex items-center text-sm text-gray-800 dark:text-black">
               <IconBrandLaravel stroke={1} className='h-5 w-5 me-1 '/>
                Laravel
              </li>
            </ul>
          </dd>
        </dl>

        <dl class="flex flex-col sm:flex-row gap-1">
          <dt class="min-w-40">
            <span class="block text-sm text-gray-500 dark:text-black">Design Expertise:</span>
          </dt>
          <dd>
            <ul>
            
              <li class="me-1 after:content-[','] inline-flex items-center text-sm text-gray-800 dark:text-black">
                Design Systems
              </li>
              <li class="me-1 after:content-[','] inline-flex items-center text-sm text-gray-800 dark:text-black">
                Custom Illustrations
              </li>
              <li class="me-1 after:content-[','] inline-flex items-center text-sm text-gray-800 dark:text-black">
                Responsive Design
              </li>
            </ul>
          </dd>
        </dl>

        <dl class="flex flex-col sm:flex-row gap-1">
          <dt class="min-w-40">
            <span class="block text-sm text-gray-500 dark:text-black">Soft Skills:</span>
          </dt>
          <dd>
            <ul>
              <li class="me-1 after:content-[','] inline-flex items-center text-sm text-gray-800 dark:text-black">
                Strong communication
              </li>
              <li class="me-1 after:content-[','] inline-flex items-center text-sm text-gray-800 dark:text-black">
                Problem-solving
              </li>
              <li class="me-1 after:content-[','] inline-flex items-center text-sm text-gray-800 dark:text-black">
                Attention to detail
              </li>
              <li class="me-1 after:content-[','] inline-flex items-center text-sm text-gray-800 dark:text-black">
                Time management
              </li>
            </ul>
          </dd>
        </dl>
      </div>


    </div>
  )
}

export default Skill