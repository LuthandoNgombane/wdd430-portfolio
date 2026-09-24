import { Suspense } from 'react';
import { fetchFilteredProjects, fetchProjectsPages } from '@/lib/projects-db';
import ProjectList from '@/components/ProjectList';
import ProjectSearch from '@/components/ProjectSearch';
import Pagination from '@/components/Pagination';
import ProjectSkeleton from '@/components/ProjectSkeleton';

export const dynamic = 'force-dynamic';

export default async function ProjectsPage(props: {
  searchParams?: Promise<{ query?: string; page?: string }>;
}) {
  const searchParams = await props.searchParams;
  const query = searchParams?.query || '';
  const currentPage = Number(searchParams?.page) || 1;

  const [projects, totalPages] = await Promise.all([
    fetchFilteredProjects(query, currentPage),
    fetchProjectsPages(query),
  ]);

  return (
    <main className="container mx-auto px-4 py-8 max-w-5xl">
      <h1 className="text-3xl font-bold mb-6">Portfolio Projects</h1>
      
      {/* Wrapped in Suspense because ProjectSearch uses useSearchParams() */}
      <Suspense fallback={<div className="h-10 w-full bg-slate-100 animate-pulse mb-6" />}>
        <ProjectSearch />
      </Suspense>

      {projects.length > 0 ? (
        <ProjectList projects={projects} />
      ) : (
        <p className="text-slate-500 text-center py-10">No projects found matching &quot;{query}&quot;.</p>
      )}

      <Suspense fallback={null}>
        <Pagination totalPages={totalPages} />
      </Suspense>
    </main>
  );
}