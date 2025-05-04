import React from 'react';
import ContactHeader from '@components/sections/Contato/ContactHeader';
import ContactForm from '@components/sections/Contato/ContactForm';
import ContactInfo from '@components/sections/Contato/ContactInfo';

const Contato: React.FC = () => {
    return (
        <div className="pt-20 min-h-screen bg-gradient-to-b from-white to-gray-50">
            {/* Header da página de contato */}
            <ContactHeader />

            <div className="max-w-7xl mx-auto px-6 lg:px-8 py-10" id='form'>
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
                    {/* Informações de contato */}
                    <div className="lg:col-span-1">
                        <ContactInfo />
                    </div>

                    {/* Formulário de contato */}
                    <div className="lg:col-span-2 bg-white rounded-xl shadow-lg p-8 transform transition-all duration-500 hover:shadow-xl">
                        <ContactForm />
                    </div>
                </div>
            </div>

            {/* Mapa interativo */}
            <div className="w-full h-96 mt-16 relative overflow-hidden">
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1919.4012427124078!2d-47.85689544694807!3d-15.814365372329831!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x935a24b303735ba5%3A0x940a9a1b47518580!2sSCES%20Trecho%202%20-%20St.%20de%20Clubes%20Esportivos%20Sul%20-%20Bras%C3%ADlia%2C%20DF!5e0!3m2!1spt-BR!2sbr!4v1746337285288!5m2!1spt-BR!2sbr"
                    className="w-full h-full border-0"
                    allowFullScreen={true}
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Mapa de localização"
                ></iframe>
            </div>
        </div>
    );
};

export default Contato;
