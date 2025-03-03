import { z } from 'zod'

export const organizationSchema = z
  .object({
    name: z
      .string()
      .min(4, { message: 'Please include at least 4 characters' }),
    domain: z
      .string()
      .nullable()
      .refine(
        async (value) => {
          if (value) {
            const domainRegex = /^[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/
            return domainRegex.test(value)
          }

          return true
        },
        { message: 'Please enter a valid domain' },
      ),
    shouldAttachUsersByDomain: z
      .union([z.literal('on'), z.literal('off'), z.boolean()])
      .transform(async (value) => value === true || value === 'on')
      .default(false),
  })
  .refine(
    async (data) => {
      if (data.shouldAttachUsersByDomain === true && !data.domain) {
        return false
      }

      return true
    },
    { message: 'Please enter a domain to attach users', path: ['domain'] },
  )

export type OrganizationSchema = z.infer<typeof organizationSchema>
