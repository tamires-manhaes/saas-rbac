import { defineAbilityFor } from '@saas/auth'
import { cookies } from 'next/headers'
import { redirect } from 'next/navigation'

import { getMembership } from '@/http/get-membership'
import { getProfile } from '@/http/get-profile'

export async function isAuthenticated() {
  const cookieStore = await cookies()
  return !!cookieStore.get('token')?.value
}

export async function getCurrentOrg() {
  return (await cookies()).get('org')?.value ?? null
}

export async function getCurrentMembership() {
  const currentOrg = await getCurrentOrg()

  if (!currentOrg) {
    return null
  }

  const { memberhsip } = await getMembership(currentOrg)
  return memberhsip
}

export async function ability() {
  const membership = await getCurrentMembership()
  if (!membership) {
    return null
  }

  const ability = defineAbilityFor({
    role: membership.role,
    id: membership.userId,
  })

  return ability
}

export async function auth() {
  const cookieStore = await cookies()
  const token = cookieStore.get('token')?.value

  if (!token) {
    redirect('/auth/sign-in')
  }

  try {
    const { user } = await getProfile()
    return { user }
  } catch (err) {}

  redirect('/')
}
