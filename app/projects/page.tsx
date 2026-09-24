import { getProjects } from '@/lib/projects-db';
import ProjectList from '@/components/ProjectList';

// Enforce dynamic rendering so Next.js does not pre-render a static cache at build time
export const dynamic = 'force-dynamic';

export default async function ProjectsPage({
  searchParams,
}: {
  searchParams: Promise<{ type?: string }>;
}) {
  const resolvedParams = await searchParams;
  const filterType = resolvedParams?.type;

  // Direct dynamic query to the PostgreSQL database at request time
  const projects = await getProjects(filterType);

  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Dynamic Portfolio Projects</h1>
      <ProjectList projects={projects} />
    </main>
  );
}