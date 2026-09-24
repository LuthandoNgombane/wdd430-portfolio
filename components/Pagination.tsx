'use client';

import Link from 'next/link';
import { usePathname, useSearchParams } from 'next/navigation';

export default function Pagination({ totalPages }: { totalPages: number }) {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const currentPage = Number(searchParams.get('page')) || 1;

  const createPageURL = (pageNumber: number | string) => {
    const params = new URLSearchParams(searchParams);
    params.set('page', pageNumber.toString());
    return `${pathname}?${params.toString()}`;
  };

  if (totalPages <= 1) return null;

  return (
    <div className="mt-8 flex items-center justify-center gap-4">
      <Link
        href={createPageURL(currentPage - 1)}
        aria-disabled={currentPage <= 1}
        tabIndex={currentPage <= 1 ? -1 : undefined}
        className={`rounded px-3 py-1.5 text-sm font-medium border ${
          currentPage <= 1
            ? 'pointer-events-none text-slate-300 border-slate-200'
            : 'text-slate-700 hover:bg-slate-100 border-slate-300'
        }`}
      >
        Previous
      </Link>

      <span className="text-sm text-slate-600">
        Page {currentPage} of {totalPages}
      </span>

      <Link
        href={createPageURL(currentPage + 1)}
        aria-disabled={currentPage >= totalPages}
        tabIndex={currentPage >= totalPages ? -1 : undefined}
        className={`rounded px-3 py-1.5 text-sm font-medium border ${
          currentPage >= totalPages
            ? 'pointer-events-none text-slate-300 border-slate-200'
            : 'text-slate-700 hover:bg-slate-100 border-slate-300'
        }`}
      >
        Next
      </Link>
    </div>
  );
}