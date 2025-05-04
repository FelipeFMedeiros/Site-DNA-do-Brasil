import React from 'react';
import SchoolIcon from '@mui/icons-material/School';
import PersonIcon from '@mui/icons-material/Person';
import BusinessIcon from '@mui/icons-material/Business';

type ProfileOption = 'aluno' | 'professor' | 'parceiro';

interface ProfileSelectorProps {
    selectedProfile: ProfileOption | null;
    onSelectProfile: (profile: ProfileOption) => void;
}

const ProfileSelector: React.FC<ProfileSelectorProps> = ({ selectedProfile, onSelectProfile }) => {
    const profiles = [
        {
            id: 'aluno',
            label: 'Aluno',
            icon: <SchoolIcon className="text-4xl" />,
            description: 'Estudante buscando informações ou ajuda',
        },
        {
            id: 'professor',
            label: 'Professor',
            icon: <PersonIcon className="text-4xl" />,
            description: 'Educador interessado em nossa plataforma',
        },
        {
            id: 'parceiro',
            label: 'Parceiro',
            icon: <BusinessIcon className="text-4xl" />,
            description: 'Empresa ou instituição interessada em parceria',
        },
    ];

    return (
        <div className="mb-8">
            <label className="block text-gray-700 font-medium mb-4">Selecione seu perfil:</label>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {profiles.map((profile) => (
                    <div
                        key={profile.id}
                        onClick={() => onSelectProfile(profile.id as ProfileOption)}
                        className={`
              cursor-pointer rounded-lg p-4 border-2 transition-all duration-300 transform
              ${
                  selectedProfile === profile.id
                      ? 'border-[color:var(--color-primary)] bg-[color:var(--color-primary-light)] bg-opacity-20 scale-105'
                      : 'border-gray-200 hover:border-[color:var(--color-primary-light)] hover:bg-gray-50'
              }
            `}
                    >
                        <div className="flex flex-col items-center text-center">
                            <div
                                className={`
                p-3 rounded-full mb-3 transition-colors duration-300
                ${
                    selectedProfile === profile.id
                        ? 'text-[color:var(--color-primary)] bg-white'
                        : 'text-gray-600 bg-gray-100'
                }
              `}
                            >
                                {profile.icon}
                            </div>

                            <h3
                                className={`
                font-semibold transition-colors duration-300
                ${selectedProfile === profile.id ? 'text-[color:var(--color-primary)]' : 'text-gray-800'}
              `}
                            >
                                {profile.label}
                            </h3>

                            <p className="text-sm mt-2 text-gray-600">{profile.description}</p>

                            {selectedProfile === profile.id && (
                                <div className="w-4 h-4 bg-[color:var(--color-primary)] rounded-full mt-3 animate-pulse"></div>
                            )}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ProfileSelector;
