import { z } from 'zod'
import { HttpRequest, HttpResponse } from '../types/http'
import { badRequest, created } from '../utils/http'

const schema = z.object({
  goal: z.enum(['lose', 'maintain', 'gain']),
  birthGender: z.enum(['male', 'female']),
  birthDate: z.iso.date(),
  height: z.number(),
  weight: z.number(),
  activityLevel: z.number().min(1).max(5),
  account: z.object({
    name: z.string(),
    email: z.email(),
    password: z.string().min(8),
  }),
})

export class SignUpController {
  static async handle({ body }: HttpRequest): Promise<HttpResponse> {
    const { success, error, data } = schema.safeParse(body)

    if (!success) {
      return badRequest({ errors: error.issues })
    }

    return created({
      data,
    })
  }
}
