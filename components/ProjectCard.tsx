interface ProjectCardProps {
  title: string;
  description: string;
  technologies: string[];
  link?: string;
}

export default function ProjectCard({ title, description, technologies, link }: ProjectCardProps) {
  return (
    <article className="p-5 border-l-4 border-blue-600 bg-white rounded-lg shadow-sm">
      <h3 className="text-xl font-bold text-gray-900 mb-2">{title}</h3>
      <p className="text-gray-700 mb-3">{description}</p>
      <p className="text-sm text-gray-600 mb-3">
        <strong>Technologies:</strong> {technologies.join(', ')}
      </p>
      {link && (
        <p>
          <a href={link} target="_blank" rel="noopener noreferrer" className="text-blue-600 font-medium hover:underline">
            View Project &rarr;
          </a>
        </p>
      )}
    </article>
  );
}