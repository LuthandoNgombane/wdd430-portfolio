import ProjectList from '@/components/ProjectList';
import SkillCard from '@/components/SkillsCard';

const projects = [
  {
    title: 'E-Commerce Dashboard',
    description: 'A full-stack Next.js app for managing products.',
    technologies: ['Next.js', 'React', 'TypeScript', 'Tailwind CSS'],
    link: 'https://github.com/your-username/project1'
  },
  {
    title: 'Weather Application',
    description: 'A React app that fetches and displays weather data.',
    technologies: ['React', 'JavaScript', 'CSS'],
    link: 'https://github.com/your-username/project2'
  },
  {
    title: 'Blog Platform',
    description: 'A blogging platform built with Next.js and MongoDB.',
    technologies: ['Next.js', 'MongoDB', 'Express', 'Node.js'],
    link: 'https://github.com/your-username/project3'
  },
  {
    title: 'Task Management App',
    description: 'A simple task management app built with React and Firebase.',
    technologies: ['React', 'Firebase', 'JavaScript', 'CSS'],
    link: 'https://github.com/your-username/project4'
  }
];

const technicalSkills = [
  {
    category: 'Backend & APIs',
    description: 'Server architectures, RESTful services, and microservices.',
    skills: ['Node.js', 'Express.js', 'PHP', 'Python', 'REST APIs'],
  },
  {
    category: 'Frontend & Mobile',
    description: 'Building responsive user interfaces and client-side applications.',
    skills: ['React', 'Next.js', 'React Native', 'TypeScript', 'Tailwind CSS'],
  },
  {
    category: 'Databases & DevOps',
    description: 'Data modeling, persistence, and environment setup.',
    skills: ['PostgreSQL', 'MySQL', 'MongoDB', 'Docker', 'Git'],
  },
];


export default function Home() { 
  return (
    <main className="container mx-auto px-4 py-12">
      <section className="text-center py-12">
        <h1 className="text-4xl font-bold mb-4">My Portfolio</h1>
        <p className="text-lg text-gray-700">
          I'm a full-stack developer learning Next.js and React. Here are some of my recent projects.
        </p>
      </section>
      <ProjectList projects={projects} />
      <br></br>
      <section>
        <h3 className="text-2xl font-semibold text-gray-800 mb-6">Technical Skills</h3>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {technicalSkills.map((skillGroup) => (
            <SkillCard
              key={skillGroup.category}
              category={skillGroup.category}
              skills={skillGroup.skills}
              description={skillGroup.description}
            />
          ))}
        </div>
      </section>
    </main>
  );
}