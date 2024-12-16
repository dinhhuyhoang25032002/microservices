import http from "~/configs/fetch-api";

// auth
export const handleLogin = (email: string, password: string) => {
    return http.post('auth/login', { email, password })
}

export const handleLogout = () => {
    return http.get('auth/logout')
}

// contact

export const handleContact = (values: { email: string, phone: string, name: string, topic: string, content: string }) => {
    const { email, phone, name, topic, content } = values
    return http.post('contact-mailer/support', { email, phone, name, topic, content })
}