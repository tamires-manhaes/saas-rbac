import type { FastifyInstance } from 'fastify'
import type { ZodTypeProvider } from 'fastify-type-provider-zod'
import { z } from 'zod'

import { auth } from '@/http/middlewares/auth'

export async function getMembership(app: FastifyInstance) {
  app
    .withTypeProvider<ZodTypeProvider>()
    .register(auth)
    .get(
      '/organizations/:slug/membership',
      {
        schema: {
          tags: ['organization'],
          summary: 'Get user membership on organization',
          security: [{ bearerAuth: [] }],
          params: z.object({
            slug: z.string(),
          }),
          response: {
            200: z.object({
              id: z.string().uuid(),
              role: z.string(),
              organizationId: z.string(),
              userId: z.string().uuid(),
            }),
          },
        },
      },
      async (request) => {
        const { slug } = request.params as {
          slug: string
        }
        const { membership } = await request.getUserMembership(slug)

        return {
          membership,
        }
      },
    )
}
