import React from 'react'
const education = [
    {
    
        id: 1,
        passoutYear: '2018 - 2022',
        collegeName: 'Banke Bageshwori Collage',
        board: 'Tribhuwan University',
        degree: 'BSc.CSIT'
    },
     {
        id: 2,
        passoutYear: '2016-2018',
        collegeName: 'GVN College',
        board: 'NEB Board',
        degree: '+2(Science)'
    },
    
]
const Education = () => {
    return (
        <div className='mx-4 md:mx-16 lg:mx-[28rem] mt-8'>
            <h2 className='text-xl font-bold text-gray-400 mb-4'>Education</h2>
            <div class="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
                {education.map((education) => (
                    <div key={education.id} class="p-4 border border-gray-200 rounded-lg dark:border-neutral-700">


                        <h3 class="mb-1 text-xs text-gray-600 dark:text-neutral-400">
                          {education.passoutYear}
                        </h3>

                        <p class="font-semibold text-sm text-gray-800 dark:text-neutral-200">
                            {education.degree}
                        </p>

                        <p class="mt-1 text-sm text-gray-600 dark:text-neutral-400">
                            {education.collegeName}
                        </p>
                        <p class="mt-1 text-sm text-gray-600 dark:text-neutral-400">
                            {education.board}
                        </p>
                    </div>
                ))}

            </div>

        </div>
    )
}

export default Education