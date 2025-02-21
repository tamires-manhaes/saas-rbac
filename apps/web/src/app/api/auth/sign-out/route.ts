import { cookies } from 'next/headers'
import { NextRequest, NextResponse } from 'next/server'

import { signInWithGithub } from '@/http/sign-in-with-github'

export async function GET(request: NextRequest) {
  const code = request.nextUrl.searchParams.get('code')

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

  const redirectUrl = request.nextUrl.clone()

  redirectUrl.pathname = '/'
  redirectUrl.search = ''

  return NextResponse.redirect(redirectUrl)
}
