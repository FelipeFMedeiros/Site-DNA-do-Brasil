// Definir o tipo correto para os slides
export interface HeroSlideTypes {
    id: number;
    title: string;
    description: string;
    backgroundImage: string;
    personImage?: string;
    layout: 'right-text' | 'left-text' | 'center-text';
    buttonText: string;
    buttonLink: string;
}

// Dados dos slides do carrossel
export const heroSlides: HeroSlideTypes[] = [
    {
        id: 1,
        title: 'EMPRESA PARCEIRA DA ESCOLA',
        description:
            'Enriqueça os Recursos Humanos do seu negócio, monitore políticas públicas, renove a base esportiva.',
        backgroundImage: '/images/hero-carousel/1-novo.webp',
        layout: 'left-text',
        buttonText: 'SAIBA MAIS',
        buttonLink: '/empresa-parceira',
    },
    {
        id: 2,
        title: 'SEJA UM ESPECIALISTA DNA DO BRASIL',
        description: 'Transforme sua carreira e aumente sua renda',
        backgroundImage: '/images/hero-carousel/2.webp',
        personImage: '/images/hero-carousel/prof.webp',
        layout: 'left-text',
        buttonText: 'SAIBA MAIS',
        buttonLink: '/pos-graduacao',
    },
    {
        id: 3,
        title: 'A GENTE PLANTA, EDUCA, TREINA E VOCÊ COLHE NO FUTURO!',
        description: 'Descubra o maior programa de inclusão social por meio do esporte e educação.',
        backgroundImage: '/images/hero-carousel/3.webp',
        layout: 'center-text',
        buttonText: 'SAIBA MAIS',
        buttonLink: '/quem-somos',
    },
    {
        id: 4,
        title: 'LEVE O DNA DO BRASIL PARA SUA ESCOLA',
        description: 'Implemente o programa nas escolas da sua rede e revele os talentos do futuro.',
        backgroundImage: '/images/hero-carousel/4.webp',
        layout: 'right-text',
        buttonText: 'SAIBA MAIS',
        buttonLink: '/contato',
    },
    {
        id: 5,
        title: 'ADOTE UM ATLETA',
        description: 'Faça parte da trajetória de um jovem talento.',
        backgroundImage: '/images/hero-carousel/5.webp',
        layout: 'left-text',
        buttonText: 'SAIBA MAIS',
        buttonLink: 'https://adoteumatleta.dnadobrasil.com.br/',
    },
    {
        id: 6,
        title: 'OLIMPÍADA DO SABER, ESPORTE E EDUCAÇÃO',
        description:
            'Participe da primeira e única olimpíada esportiva do Brasil. Temas esportivos ligados às mais diversas áreas do conhecimento, tais como História, Matemática, Física e Geografia.',
        backgroundImage: '/images/hero-carousel/6.webp',
        layout: 'center-text',
        buttonText: 'SAIBA MAIS',
        buttonLink: 'https://www.olimpiadaesporteducacaodna.com.br/',
    },
];
