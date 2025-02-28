import { redirect } from 'next/navigation'

import { ability } from '@/auth/auth'
import Container from '@/components/container'

import { ProjectForm } from './project-form'

export default async function CreateProject() {
  const permissions = await ability()

  if (!permissions?.cannot('create', 'Project')) {
    redirect('/')
  }

  return (
    <Container>
      <h1 className="text-2xl font-bold">Create project</h1>
      <ProjectForm />
    </Container>
  )
}
