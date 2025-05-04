import React, { useState } from 'react';
import ProfileSelector from './ProfileSelector';
import SendIcon from '@mui/icons-material/Send';

type ProfileOption = 'aluno' | 'professor' | 'parceiro';

const ContactForm: React.FC = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: '',
    });
    const [selectedProfile, setSelectedProfile] = useState<ProfileOption | null>(null);
    const [focused, setFocused] = useState<string | null>(null);
    const [submitted, setSubmitted] = useState(false);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [errors, setErrors] = useState({
        profile: false,
        name: false,
        email: false,
    });
    const [touchedFields, setTouchedFields] = useState({
        name: false,
        email: false,
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));

        // Limpar erro quando o usuário digita
        if (errors[name as keyof typeof errors]) {
            setErrors((prev) => ({ ...prev, [name]: false }));
        }
    };

    const handleSelectProfile = (profile: ProfileOption) => {
        setSelectedProfile(profile);
        setErrors((prev) => ({ ...prev, profile: false }));
    };

    const handleFocus = (field: string | null) => {
        setFocused(field);
    };

    const handleBlur = (field: string) => {
        setFocused(null);
        setTouchedFields((prev) => ({ ...prev, [field]: true }));

        // Validações específicas
        if (field === 'name') {
            setErrors((prev) => ({ ...prev, name: formData.name.trim() === '' }));
        } else if (field === 'email') {
            const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            setErrors((prev) => ({
                ...prev,
                email: formData.email.trim() === '' || !emailPattern.test(formData.email),
            }));
        }
    };

    const validateEmail = (email: string): boolean => {
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return email.trim() !== '' && emailPattern.test(email);
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        // Marcamos todos os campos como tocados
        setTouchedFields({
            name: true,
            email: true,
        });

        // Validações completas
        const newErrors = {
            profile: selectedProfile === null,
            name: formData.name.trim() === '',
            email: !validateEmail(formData.email),
        };

        setErrors(newErrors);

        if (newErrors.profile || newErrors.name || newErrors.email) {
            return;
        }

        // Simulando envio
        setIsSubmitting(true);

        // Simula uma chamada de API
        setTimeout(() => {
            setIsSubmitting(false);
            setSubmitted(true);

            // Reset após alguns segundos
            /*setTimeout(() => {
                setFormData({ name: '', email: '', message: '' });
                setSelectedProfile(null);
                setSubmitted(false);
                setErrors({ profile: false, name: false, email: false });
                setTouchedFields({ name: false, email: false });
            }, 5000);*/
        }, 1500);
    };

    // Classes para inputs com animação e estados de erro
    const getInputClasses = (fieldName: string) => `
        w-full px-4 py-3 rounded-lg border-2 transition-all duration-300 outline-none
        ${
            errors[fieldName as keyof typeof errors] && touchedFields[fieldName as keyof typeof touchedFields]
                ? 'border-red-500 bg-red-50'
                : focused === fieldName
                ? 'border-[color:var(--color-primary)] shadow-md shadow-[color:var(--color-primary-light)]'
                : 'border-gray-200 hover:border-gray-300'
        }
    `;

    if (submitted) {
        return (
            <div className="flex flex-col items-center justify-center min-h-[400px] text-center animate-fadeIn">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-4">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-10 w-10 text-green-500"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                    >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                </div>
                <h2 className="text-2xl font-bold text-gray-800 mb-2">Mensagem Enviada!</h2>
                <p className="text-gray-600 mb-6">
                    Obrigado por entrar em contato. Responderemos o mais breve possível.
                </p>
            </div>
        );
    }

    return (
        <form onSubmit={handleSubmit} className="space-y-6">
            <h2 className="text-2xl font-bold text-gray-800 mb-6">Envie sua mensagem</h2>

            {/* Seletor de perfil */}
            <div>
                <ProfileSelector selectedProfile={selectedProfile} onSelectProfile={handleSelectProfile} />
                {errors.profile && (
                    <p className="text-red-500 text-sm mt-1 animate-fadeIn">Por favor, selecione seu perfil</p>
                )}
            </div>

            {/* Nome */}
            <div className="transition-all duration-500 transform">
                <label className="block text-gray-700 font-medium mb-2" htmlFor="name">
                    Nome completo <span className="text-red-500">*</span>
                </label>
                <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    onFocus={() => handleFocus('name')}
                    onBlur={() => handleBlur('name')}
                    className={getInputClasses('name')}
                    placeholder="Digite seu nome"
                />
                {errors.name && touchedFields.name && (
                    <p className="text-red-500 text-sm mt-1 animate-fadeIn">Por favor, preencha seu nome</p>
                )}
            </div>

            {/* Email */}
            <div className="transition-all duration-500 transform">
                <label className="block text-gray-700 font-medium mb-2" htmlFor="email">
                    Email <span className="text-red-500">*</span>
                </label>
                <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    onFocus={() => handleFocus('email')}
                    onBlur={() => handleBlur('email')}
                    className={getInputClasses('email')}
                    placeholder="Digite seu email"
                />
                {errors.email && touchedFields.email && (
                    <p className="text-red-500 text-sm mt-1 animate-fadeIn">Por favor, digite um email válido</p>
                )}
            </div>

            {/* Mensagem */}
            <div className="transition-all duration-500 transform">
                <label className="block text-gray-700 font-medium mb-2" htmlFor="message">
                    Sua mensagem
                </label>
                <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    onFocus={() => handleFocus('message')}
                    onBlur={() => handleFocus(null)}
                    rows={5}
                    className={`${getInputClasses('message')} resize-none`}
                    placeholder="Escreva sua mensagem aqui..."
                />
            </div>

            {/* Botão de enviar */}
            <div className="pt-4">
                <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-[color:var(--color-primary)] text-white py-3 px-6 rounded-lg font-medium 
                    hover:bg-[color:var(--color-primary-dark)] transition-all duration-300 transform hover:scale-[1.02]
                    disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center hover:shadow-lg shadow-[color:var(--color-primary-light)] hover:cursor-pointer"
                >
                    {isSubmitting ? (
                        <>
                            <svg
                                className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                            >
                                <circle
                                    className="opacity-25"
                                    cx="12"
                                    cy="12"
                                    r="10"
                                    stroke="currentColor"
                                    strokeWidth="4"
                                ></circle>
                                <path
                                    className="opacity-75"
                                    fill="currentColor"
                                    d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                                ></path>
                            </svg>
                            Enviando...
                        </>
                    ) : (
                        <>
                            Enviar Mensagem
                            <SendIcon className="ml-2" />
                        </>
                    )}
                </button>
            </div>
        </form>
    );
};

export default ContactForm;
