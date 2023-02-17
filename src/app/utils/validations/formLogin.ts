import { z } from "zod";

export const FormLogin = z
.object({
  username: z
    .string()
    .min(4,
      {message: 'Usuário inválido!'}
    )
    .transform(val => val.toLowerCase())
    .refine( val => val.indexOf(" ") === -1,
      {message: 'Usuário inválido!'}
    ),
  password: z
    .string()
})

export type TFormLogin = z.infer<typeof FormLogin>