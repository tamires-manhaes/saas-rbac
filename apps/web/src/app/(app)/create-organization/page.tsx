import Container from '@/components/container'

import { OrganizationForm } from '../org/organization-form'

export default function CreateOrganization() {
  return (
    <Container>
      <h1 className="text-2xl font-bold">Create organization</h1>
      <OrganizationForm />
    </Container>
  )
}
