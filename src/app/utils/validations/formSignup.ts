import { z } from 'zod'

const optionalInput = (schema: z.ZodString) => z
  .union([z.string(),z.undefined()])
  .refine(val => !val || schema.safeParse(val).success)


export const FormSignup = z
  .object({
    username: z
      .string()
      .min(4,
        {message: "Usuário deve conter ao menos 4 caracteres!"})
      .transform(val => val.toLowerCase())
      .refine( val => val.indexOf(" ") === -1,
        {message: "Nome de usuário não deve conter espaços!"}),
    password: z
      .string()
      .min(4,
        {message: "A senha deve conter ao menos 4 caracteres!"})
      .refine( val => val.indexOf(" ") === -1,
        {message: "A senha não deve conter espaços!"}),
    repeatPassword: z
      .string()
      .min(4,
        {message: "A senha deve conter ao menos 4 caracteres!"})
      .refine( val => val.indexOf(" ") === -1,
        {message: "A senha não deve conter espaços!"}),
  })
  .refine(
    form => form.password === form.repeatPassword,
    {
      message: 'As senhas não coincidem!',
      path: ['repeatPassword']
    }
  )

  

  export type TFormSignup = z.infer<typeof FormSignup>