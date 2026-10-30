import SkillCard from '@/components/SkillCard';

export default function About() {
  return (
    <main className="max-w-4xl mx-auto px-4 py-12">
      <h2 className="text-3xl font-bold mb-4">About Me</h2>
      <p className="text-lg text-gray-700 mb-6">
        I am a full-stack developer and systems engineer specializing in robust web applications, API integrations, and modern software architecture.
      </p>

      {/* Using your custom component with props and TypeScript interface */}
      <SkillCard 
        category="Core Technical Skills" 
        skills={['TypeScript', 'React', 'Next.js', 'Node.js', 'Python', 'PHP', 'Tailwind CSS', 'PostgreSQL']} 
      />
    </main>
  );
}