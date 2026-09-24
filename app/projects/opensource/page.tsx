import { getProjects } from '@/lib/projects-db';
import ProjectList from '@/components/ProjectList';

export const dynamic = 'force-dynamic';

export default async function OpenSourcePage() {

//   await new Promise((res) => setTimeout(res, 2000));

  const projects = await getProjects('opensource');

  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Open Source Projects</h1>
      <ProjectList projects={projects} />
    </main>
  );
}