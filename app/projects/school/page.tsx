import { Suspense } from 'react';
import SchoolProjectList from '@/components/SchoolProjectList';
import ProjectSkeleton from '@/components/ProjectSkeleton';

export const dynamic = 'force-dynamic';

export default function SchoolProjectsPage() {
  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">School Projects</h1>
      
      {/* Heading renders immediately; list streams in when ready */}
      <Suspense fallback={<ProjectSkeleton />}>
        <SchoolProjectList />
      </Suspense>
    </main>
  );
}