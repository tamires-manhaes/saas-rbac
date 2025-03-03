import { api } from './api-client'

interface UpdateOrganizationRequest {
  name: string
  domain?: string
  shouldAttachUsersByDomain: boolean
  org: string
}

type UpdateOrganizationResponse = void

export async function updateOrganization({
  org,
  name,
  domain,
  shouldAttachUsersByDomain,
}: UpdateOrganizationRequest): Promise<UpdateOrganizationResponse> {
  await api.put(`organizations/${org}`, {
    json: {
      name,
      domain,
      shouldAttachUsersByDomain,
    },
  })
}
