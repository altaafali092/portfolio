import React from 'react';

const projects = [
    {
        id: 1,
        imageUrl: 'https://images.unsplash.com/photo-1656618724305-a4257e46e847?q=80&w=320&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        url: 'https://doarkhajura.narc.gov.np/?language=ne#/'
    },
    {
        id: 2,
        imageUrl: 'https://images.unsplash.com/photo-1616427592793-67b858804534?q=80&w=320&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        url: 'https://github.com/altaafali092/job_portal'
    },
    {
        id: 3,
        imageUrl: 'https://images.unsplash.com/photo-1616427592793-67b858804534?q=80&w=320&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        url: 'https://demoerp.palikaerp.com/'
    },
    {
        id: 4,
        imageUrl: 'https://images.unsplash.com/photo-1616427592793-67b858804534?q=80&w=320&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        url: 'https://nlbolahan.gov.np/?language=ne'
    }
];

const Projects = () => {
    return (
        <div className="mx-4 md:mx-16 lg:mx-[28rem]">
            <h1 className="text-xl text-start font-bold text-gray-400 mb-4">Projects</h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {projects.map((project) => (
                    <a
                        key={project.id}
                        href={project.url}
                        target="_blank"
                        className="group block relative overflow-hidden rounded-lg"
                    >
                        <img
                            className="w-full h-40 object-cover bg-gray-100 rounded-lg dark:bg-neutral-800"
                            src={project.imageUrl}
                            alt={project.alt}
                        />
                        <div className="absolute bottom-2 right-2 opacity-0 group-hover:opacity-100 transition">
                            <div className="flex items-center gap-x-1 py-1 px-2 bg-white border border-gray-200 text-gray-800 rounded-lg dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-200">
                                <svg
                                    className="shrink-0 size-3"
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="24"
                                    height="24"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                >
                                    <circle cx="11" cy="11" r="8" />
                                    <path d="m21 21-4.3-4.3" />
                                </svg>
                                <span className="text-xs">
                                    <a href={project.url} target="_blank" rel="noopener noreferrer">
                                        View
                                    </a>
                                </span>
                            </div>
                        </div>
                    </a>
                ))}
            </div>
        </div>
    );
};

export default Projects;
