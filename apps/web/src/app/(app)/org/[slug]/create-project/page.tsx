import Container from '@/components/container'

import { ProjectForm } from './project-form'

export default function CreateProject() {
  return (
    <Container>
      <h1 className="text-2xl font-bold">Create project</h1>
      <ProjectForm />
    </Container>
  )
}
