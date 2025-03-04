import { cookies } from 'next/headers'
import { NextRequest, NextResponse } from 'next/server'

import { acceptInvite } from '@/http/accept-invite'
import { signInWithGithub } from '@/http/sign-in-with-github'

export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams

  const code = searchParams.get('code')

  if (!code) {
    return NextResponse.json(
      { message: 'Github OAuth  code was not found.' },
      { status: 400 },
    )
  }

  const { token } = await signInWithGithub({ code })

  await cookies().then((c) => {
    c.set('token', token, {
      path: '/',
      maxAge: 60 * 60 * 24 * 7, // 7days
    })
  })

  const inviteId = (await cookies()).get('inviteId')?.value

  if (inviteId) {
    try {
      await acceptInvite(inviteId).then(async () => {
        ;(await cookies()).delete('inviteId')
      })
    } catch (err) {}
  }

  const redirectUrl = request.nextUrl.clone()
  redirectUrl.searchParams.delete('code')

  redirectUrl.pathname = '/'
  redirectUrl.search = ''

  return NextResponse.redirect(redirectUrl.origin)
}
