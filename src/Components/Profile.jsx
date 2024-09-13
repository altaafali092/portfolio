import React from 'react'

const Profile = () => {
    return (
        <div className="flex justify-center items-center mt-4">
            <div className="max-w-2xl  p-6 rounded-lg">
                <div className="flex items-center gap-x-3">
                    <div className="shrink-0">
                        <img src="/p1.jpg" className="shrink-0 h-20 w-20 rounded-full" alt="Avatar" />
                    </div>

                    <div className="grow">
                        <h1 className="text-lg font-medium text-gray-800">

                        </h1>
                        <p className="text-sm text-gray-600 dark:text-neutral-400">
                            Web Developer | Laravel
                        </p>
                    </div>
                </div>

                <div className="mt-8">
                    <p className="text-sm text-gray-600 dark:text-neutral-400">
                        I am a seasoned Laravel developer with extensive experience in crafting robust and scalable web applications. With a strong foundation in HTML, CSS, Bootstrap, JavaScript, and React, I excel in building dynamic and user-friendly interfaces.
                    </p>

                    <p className="mt-3 text-sm text-gray-600 dark:text-neutral-400">
                        Currently, I work at Ninja Infosys, where I focus on developing and maintaining high-quality Laravel applications. My role involves integrating front-end & back-end technologies to enhance user experiences, implementing complex functionalities, and ensuring seamless interaction between the user interface and backend services.
                    </p>
                    <p className="mt-3 text-sm text-gray-600 dark:text-neutral-400">
                    I am passionate about creating elegant and efficient solutions that meet clients' needs and drive their digital success.
                    </p>

                    <ul className="mt-5 flex flex-col gap-y-3">
                        <li className="flex items-center gap-x-2.5">
                            <svg className="shrink-0 w-5 h-5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect width="20" height="16" x="2" y="4" rx="2" /><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" /></svg>
                            <a className="text-[13px] text-gray-500 underline hover:text-gray-800 hover:decoration-2 focus:outline-none focus:decoration-2 dark:text-neutral-500 dark:hover:text-neutral-400" href="#">
                                altaafali092@gmail.com
                            </a>
                        </li>

                        <li className="flex items-center gap-x-2.5">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-brand-linkedin">
                                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                <path d="M4 4m0 2a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2z" />
                                <path d="M8 11l0 5" />
                                <path d="M8 8l0 .01" />
                                <path d="M12 16l0 -5" />
                                <path d="M16 16v-3a2 2 0 0 0 -4 0" />
                            </svg>
                            <a className="text-[13px] text-gray-500 underline hover:text-gray-800 hover:decoration-2 focus:outline-none focus:decoration-2 dark:text-neutral-500 dark:hover:text-neutral-400" href="https://www.linkedin.com/in/a-s-idrishi-084aa12a0/" target='blank'>
                                a-s-idrishi
                            </a>
                        </li>

                        <li className="flex items-center gap-x-2.5">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-brand-github">
                                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                <path d="M9 19c-4.3 1.4 -4.3 -2.5 -6 -3m12 5v-3.5c0 -1 .1 -1.4 -.5 -2c2.8 -.3 5.5 -1.4 5.5 -6a4.6 4.6 0 0 0 -1.3 -3.2a4.2 4.2 0 0 0 -.1 -3.2s-1.1 -.3 -3.5 1.3a12.3 12.3 0 0 0 -6.2 0c-2.4 -1.6 -3.5 -1.3 -3.5 -1.3a4.2 4.2 0 0 0 -.1 3.2a4.6 4.6 0 0 0 -1.3 3.2c0 4.6 2.7 5.7 5.5 6c-.6 .6 -.6 1.2 -.5 2v3.5" />
                            </svg>
                            <a className="text-[13px] text-gray-500 underline hover:text-gray-800 hover:decoration-2 focus:outline-none focus:decoration-2 dark:text-neutral-500 dark:hover:text-neutral-400" href="https://github.com/altaafali092" target='blank'>
                                altaafali092
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>

    )
}

export default Profile