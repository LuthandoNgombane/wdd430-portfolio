import ProjectSkeleton from '@/components/ProjectSkeleton';

export default function Loading() {
  return (
    <main className="container mx-auto px-4 py-8 space-y-6">
      <div className="h-10 w-64 rounded bg-slate-200 animate-pulse" />
      <ProjectSkeleton />
    </main>
  );
}