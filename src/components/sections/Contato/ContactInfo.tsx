import React from 'react';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import EmailIcon from '@mui/icons-material/Email';
import PhoneIcon from '@mui/icons-material/Phone';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import FacebookIcon from '@mui/icons-material/Facebook';

const ContactInfo: React.FC = () => {
    const contactItems = [
        {
            icon: <LocationOnIcon />,
            title: 'Endereço',
            content: 'SCES Trecho 2 - Conjunto 1 - Lote 10 Clube Asseb - Asa Sul, Brasília - DF',
        },
        {
            icon: <EmailIcon />,
            title: 'Email',
            content: 'contato@dnadobrasil.com.br',
        },
        {
            icon: <PhoneIcon />,
            title: 'Telefone',
            content: '(84) 3023-4500',
        },
        {
            icon: <AccessTimeIcon />,
            title: 'Horário de Atendimento',
            content: 'Segunda a Sexta: 8h às 18h',
        },
    ];

    return (
        <div className="bg-white rounded-xl shadow-lg p-8 h-full">
            <h2 className="text-2xl font-bold text-gray-800 mb-6">Informações de Contato</h2>

            <div className="space-y-6">
                {contactItems.map((item, index) => (
                    <div key={index} className="flex items-start">
                        <div className="text-[color:var(--color-primary)] bg-[color:var(--color-primary-light)] bg-opacity-20 p-2 rounded-lg">
                            {item.icon}
                        </div>
                        <div className="ml-4">
                            <h3 className="font-medium text-gray-800">{item.title}</h3>
                            <p className="text-gray-600 mt-1">{item.content}</p>
                        </div>
                    </div>
                ))}
            </div>

            {/* Separador */}
            <div className="my-8 border-t border-gray-200"></div>

            {/* Redes sociais */}
            <div>
                <h3 className="font-semibold text-gray-800 mb-4">Siga-nos nas redes sociais</h3>
                <div className="flex space-x-4">
                    <SocialButton icon={<WhatsAppIcon />} href="https://wa.me/5561986258065" color="green" />
                    <SocialButton icon={<InstagramIcon />} href="https://instagram.com/institutoidecace" color="pink" />
                    <SocialButton
                        icon={<LinkedInIcon />}
                        href="#"
                        color="blue"
                    />
                    <SocialButton icon={<FacebookIcon />} href="https://facebook.com/idecace" color="indigo" />
                </div>
            </div>

            {/* Elemento decorativo */}
            <div className="relative mt-10">
                <div className="absolute right-0 bottom-0 w-24 h-24 bg-[color:var(--color-primary-light)] opacity-20 rounded-tl-xl z-0"></div>
                <div className="relative z-10">
                    <p className="text-sm text-gray-600 italic">
                        "Estamos ansiosos para ouvir de você e responder a todas as suas perguntas."
                    </p>
                </div>
            </div>
        </div>
    );
};

interface SocialButtonProps {
    icon: React.ReactNode;
    href: string;
    color: string;
}

const SocialButton: React.FC<SocialButtonProps> = ({ icon, href, color }) => {
    const getColorClasses = () => {
        const colorMap = {
            green: 'hover:bg-green-500 hover:text-white',
            blue: 'hover:bg-blue-600 hover:text-white',
            pink: 'hover:bg-pink-600 hover:text-white',
            indigo: 'hover:bg-indigo-600 hover:text-white',
        };

        return colorMap[color as keyof typeof colorMap] || 'hover:bg-gray-600 hover:text-white';
    };

    return (
        <a
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className={`w-10 h-10 rounded-full flex items-center justify-center border border-gray-200 
        text-gray-600 transition-all duration-300 ${getColorClasses()}`}
        >
            {icon}
        </a>
    );
};

export default ContactInfo;
