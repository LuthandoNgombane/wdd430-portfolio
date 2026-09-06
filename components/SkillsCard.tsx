interface SkillCardProps {
  category: string;
  skills: string[];
  description?: string;
}

export default function SkillCard({ category, skills, description }: SkillCardProps) {
  return (
    <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200 hover:shadow-md transition-shadow">
      <h3 className="text-xl font-bold text-gray-900 mb-2 border-b pb-2 border-gray-100">
        {category}
      </h3>
      {description && (
        <p className="text-sm text-gray-600 mb-4">{description}</p>
      )}
      <div className="flex flex-wrap gap-2">
        {skills.map((skill) => (
          <span
            key={skill}
            className="bg-blue-50 text-blue-700 text-xs font-medium px-2.5 py-1 rounded-full border border-blue-200"
          >
            {skill}
          </span>
        ))}
      </div>
    </div>
  );
}