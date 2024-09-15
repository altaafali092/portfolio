import React from 'react'
import { IconBrandNotion } from '@tabler/icons-react';

const work = [
  {
    id: 2,
    Logo: <IconBrandNotion stroke={1} />,
    work: 'jun 2023 - oct 2023',
    title: 'Laravel Intern at Ninja infosys',
    description: 'Ninja Infosys provided a challenging environment with high expectations with clear understanding of goals and performance standards.',
    description1: 'During my internship, I developed and maintained web applications using Laravel, adhering to best practices in coding and architecture. I was involved in integrating RESTful APIs and handling database operations with Eloquent ORM, and I collaborated with the front-end team to implement responsive and interactive UI components. I assisted in debugging and optimizing existing codebases to enhance performance and security. My role also included participating in code reviews, where I provided feedback to peers and implemented improvements based on team input. Additionally, I contributed to the creation of detailed project documentation and user manuals, and I supported team members and clients by troubleshooting and resolving technical issues related to Laravel applications.'
  },
  {
    id: 2,
    Logo:<IconBrandNotion stroke={1} />,
    work: 'Oct 2023 - Present',
    title: 'Jr.Laravel Developer at Ninja infosys',
    description: 'As a Junior Laravel Developer at Ninja Infosys, I worked in a challenging environment with clear goals and high performance standards.',
    description1: 'In this role, I developed and maintained web applications using Laravel, following best practices in coding and architecture. I was responsible for integrating RESTful APIs, managing database operations with Eloquent ORM, and collaborating with the front-end team to create responsive and interactive UI components. I played a key part in debugging and optimizing existing codebases to improve performance and security. Additionally, I actively participated in code reviews, providing feedback to peers and implementing changes based on team input. I also contributed to creating detailed project documentation and user manuals, while offering support to team members and clients by troubleshooting and resolving technical issues related to Laravel applications.'
  }
]
const WorkExperience = () => {
  return (
    <div className='mx-[28rem]'>
      {work.map((work) => (
        <div class="group relative flex gap-x-5 ">

          <div class="relative group-last:after:hidden after:absolute after:top-8 after:bottom-2 after:start-3 after:w-px after:-translate-x-[0.5px] after:bg-gray-200 dark:after:bg-neutral-700">
            <div class="relative z-10 size-6 flex justify-center items-center">
              {work.Logo}
            </div>
          </div>
          <div class="grow pb-8 group-last:pb-0">
            <h3 class="mb-1 text-xs text-gray-600 dark:text-neutral-400">
              {work.work}
            </h3>

            <p class="font-semibold text-sm text-gray-800 dark:text-neutral-500">
              {work.title}
            </p>

            <p class="mt-1 text-sm text-gray-600 dark:text-neutral-400">
              {work.description}
            </p>
            <p class="mt-1 text-sm text-gray-600 dark:text-neutral-400">
              {work.description1}
            </p>

      
          </div>

        </div>
      ))}








    </div>


  )
}

export default WorkExperience