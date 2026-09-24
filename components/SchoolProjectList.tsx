import { getProjects } from '@/lib/projects-db';
import ProjectList from '@/components/ProjectList';

export default async function SchoolProjectList() {

//   await new Promise((res) => setTimeout(res, 2000));

  const projects = await getProjects('school');

  return <ProjectList projects={projects} />;
}