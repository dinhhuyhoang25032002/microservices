import z from 'zod';
import isMobilePhone from 'validator/es/lib/isMobilePhone';
// auth
export const RegisterBody = z.object({
    name: z.string().trim().min(2).max(125),
    email: z.string().email(),
    password: z.string().min(6).max(100),
    confirmPassword: z.string().min(6).max(100)
})
    .strict()
    .superRefine(({ confirmPassword, password }, ctx) => {
        if (confirmPassword !== password) {
            ctx.addIssue({
                code: 'custom',
                message: 'Mật khẩu không khớp',
                path: ['confirmPassword']
            })
        }
    })
export type RegisterBodyType = z.TypeOf<typeof RegisterBody>

export const LoginBody = z.object({
    email: z.string().email("Email không hợp lệ"),
    password: z.string().min(5, 'Mật khẩu quá yếu').max(100),
}).strict()

export type LoginBodyType = z.TypeOf<typeof LoginBody>

//contact

export const ContactBody = z.object({
    email: z.string().email("Email không hợp lệ"),
    name: z.string().min(5, 'Hãy điền tên đầy đủ').max(100),
    phone: z.string().refine((phone: string) => isMobilePhone(phone, 'vi-VN'), {
        message: 'Số điện thoại không hợp lệ',
    }),
    topic: z.string().max(200, "Tiêu đề quá dài"),
    content: z.string()
}).strict()

export type ContactBodyType = z.TypeOf<typeof ContactBody>

//submit value device

export const SubmitValueDeviceBody = z.object({
    temperature: z.preprocess((a) => parseInt(z.string().parse(a), 10),
        z.number().gte(0.01, 'Hãy nhập giá trị lớn hơn 0')),
    humidy: z.preprocess((a) => parseInt(z.string().parse(a), 10),
        z.number().gte(0.01, 'Hãy nhập giá trị lớn hơn 0')),
    light: z.preprocess((a) => parseInt(z.string().parse(a), 10),
        z.number().gte(0.01, 'Hãy nhập giá trị lớn hơn 0')),
})

export type SubmitValueDeviceBodyType = z.TypeOf<typeof SubmitValueDeviceBody>