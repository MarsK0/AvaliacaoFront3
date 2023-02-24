import { coerce, z } from "zod";

export const FormMessage = z
.object({
  datetime: z
    .string()
    .refine( val => val.length > 0,
      {message: 'Data inválida!'}),
  title: z
    .string()
    .min(1,
      {message: 'Título obrigatório!'}
  ),
  description: z
    .string()
    .min(1,
      {message: 'Descrição obrigatória!'}
  )
})

export type TFormMessage = z.infer<typeof FormMessage>