import { api } from './api-client'

interface SignInWithGithubRequest {
  code: string
}

interface SignInWithGithubResponse {
  token: string
}

export async function signInWithGithub({ code }: SignInWithGithubRequest) {
  try {
    const result = await api
      .post('sessions/github', {
        json: {
          code,
        },
      })
      .json<SignInWithGithubResponse>()

    return result
  } catch (error) {
    if (error instanceof Response) {
      console.error('Error response server:', await error.json())
    } else {
      console.error('Unexpected error:', error)
    }
    throw error
  }
}
