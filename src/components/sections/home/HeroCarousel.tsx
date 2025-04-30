import React, { memo, useMemo, useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import type { SwiperProps } from 'swiper/react';
import type SwiperCore from 'swiper';
import { Link } from 'react-router-dom';

// Swiper modules
import { Autoplay, Navigation, Pagination } from 'swiper/modules';

// Swiper required styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

// Custom styles
import '@styles/hero-carousel.css';

// Importar os dados dos slides
import { heroSlides, HeroSlideTypes } from '@utils/heroSlides';

// Componente de botão para hero memoizado
const HeroButton = memo(({ buttonText, buttonLink }: { buttonText: string; buttonLink: string }) => (
    <Link
        to={buttonLink}
        className="hero-button px-8 py-3 rounded-md font-medium inline-block relative overflow-hidden transition-all duration-300 bg-transparent border-2 border-white text-white hover:text-[color:var(--color-primary)] group"
    >
        <span className="relative z-10">{buttonText}</span>
        <span className="absolute inset-0 bg-white transform scale-x-0 origin-left transition-transform duration-300 ease-out group-hover:scale-x-100"></span>
    </Link>
));

HeroButton.displayName = 'HeroButton';

// Componente de texto memoizado para evitar re-renderizações
const HeroText = memo(
    ({
        title,
        description,
        buttonText,
        buttonLink,
    }: {
        title: string;
        description: string;
        buttonText: string;
        buttonLink: string;
    }) => (
        <div className="space-y-6">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white">{title}</h1>
            <p className="text-base sm:text-lg md:text-xl text-white/90">{description}</p>
            <div className="pt-2">
                <HeroButton buttonText={buttonText} buttonLink={buttonLink} />
            </div>
        </div>
    ),
);

HeroText.displayName = 'HeroText';

// Layout de slide com texto à direita
const RightTextLayout = memo(
    ({ slide, isActive, index }: { slide: HeroSlideTypes; isActive: boolean; index: number }) => {
        // Pré-carregamento condicional
        useEffect(() => {
            if (slide.personImage) {
                const img = new Image();
                img.src = slide.personImage;
            }
        }, [slide.personImage]);

        return (
            <div className="relative h-full w-full">
                <div
                    className={`absolute inset-0 bg-cover bg-center bg-no-repeat will-change-transform transition-opacity duration-1000 ${
                        isActive ? 'opacity-100' : 'opacity-0'
                    }`}
                    style={{
                        backgroundImage: `url(${slide.backgroundImage})`,
                    }}
                >
                    <div className="absolute inset-0 bg-black/40" />
                </div>

                <div className="absolute inset-0">
                    <div className="container mx-auto h-full">
                        <div className="grid grid-cols-1 md:grid-cols-2 h-full items-center">
                            {/* Imagem da pessoa à esquerda */}
                            {slide.personImage && (
                                <div className="hidden md:flex justify-center items-end h-full">
                                    <img
                                        src={slide.personImage}
                                        alt=""
                                        loading={index === 0 ? 'eager' : 'lazy'}
                                        className={`max-h-[80vh] object-contain ${
                                            isActive ? 'animate-slide-up' : 'opacity-0'
                                        }`}
                                    />
                                </div>
                            )}

                            {/* Conteúdo de texto à direita */}
                            <div className={`p-6 md:p-12 ${isActive ? 'animate-fade-in' : 'opacity-0'}`}>
                                <HeroText
                                    title={slide.title}
                                    description={slide.description}
                                    buttonText={slide.buttonText}
                                    buttonLink={slide.buttonLink}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    },
);

RightTextLayout.displayName = 'RightTextLayout';

// Layout de slide com texto à esquerda
const LeftTextLayout = memo(
    ({ slide, isActive, index }: { slide: HeroSlideTypes; isActive: boolean; index: number }) => {
        // Pré-carregamento condicional
        useEffect(() => {
            if (slide.personImage) {
                const img = new Image();
                img.src = slide.personImage;
            }
        }, [slide.personImage]);

        return (
            <div className="relative h-full w-full">
                <div
                    className={`absolute inset-0 bg-cover bg-center bg-no-repeat will-change-transform transition-opacity duration-1000 ${
                        isActive ? 'opacity-100' : 'opacity-0'
                    }`}
                    style={{
                        backgroundImage: `url(${slide.backgroundImage})`,
                    }}
                >
                    <div className="absolute inset-0 bg-black/40" />
                </div>

                <div className="absolute inset-0">
                    <div className="container mx-auto h-full">
                        <div className="grid grid-cols-1 md:grid-cols-2 h-full items-center">
                            {/* Conteúdo de texto à esquerda */}
                            <div className={`p-6 md:p-12 ${isActive ? 'animate-fade-in' : 'opacity-0'}`}>
                                <HeroText
                                    title={slide.title}
                                    description={slide.description}
                                    buttonText={slide.buttonText}
                                    buttonLink={slide.buttonLink}
                                />
                            </div>

                            {/* Imagem da pessoa à direita */}
                            {slide.personImage && (
                                <div className="hidden md:flex justify-center items-end h-full">
                                    <img
                                        src={slide.personImage}
                                        alt=""
                                        loading={index === 0 ? 'eager' : 'lazy'}
                                        className={`max-h-[80vh] object-contain ${
                                            isActive ? 'animate-slide-up' : 'opacity-0'
                                        }`}
                                    />
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        );
    },
);

LeftTextLayout.displayName = 'LeftTextLayout';

// Layout de slide com texto centralizado
const CenterTextLayout = memo(({ slide, isActive }: { slide: HeroSlideTypes; isActive: boolean }) => (
    <div className="relative h-full w-full">
        <div
            className={`absolute inset-0 bg-cover bg-center bg-no-repeat will-change-transform transition-opacity duration-1000 ${
                isActive ? 'opacity-100' : 'opacity-0'
            }`}
            style={{
                backgroundImage: `url(${slide.backgroundImage})`,
            }}
        >
            <div className="absolute inset-0 bg-black/50" />
        </div>

        <div className="absolute inset-0 flex items-center justify-center">
            <div className={`text-center max-w-4xl mx-auto p-6 ${isActive ? 'animate-fade-in' : 'opacity-0'}`}>
                <HeroText
                    title={slide.title}
                    description={slide.description}
                    buttonText={slide.buttonText}
                    buttonLink={slide.buttonLink}
                />
            </div>
        </div>
    </div>
));

CenterTextLayout.displayName = 'CenterTextLayout';

const HeroCarousel: React.FC = () => {
    const [activeIndex, setActiveIndex] = useState(0);

    // Preload próximo slide
    useEffect(() => {
        const nextIndex = (activeIndex + 1) % heroSlides.length;
        const img = new Image();
        img.src = heroSlides[nextIndex].backgroundImage;
    }, [activeIndex]);

    // Pré-carregar todas as imagens de fundo ao montar o componente
    useEffect(() => {
        heroSlides.forEach((slide) => {
            const img = new Image();
            img.src = slide.backgroundImage;
        });
    }, []);

    // Configurações do Swiper memoizadas
    const swiperConfig: SwiperProps = useMemo(
        () => ({
            modules: [Autoplay, Navigation, Pagination],
            navigation: true,
            pagination: { clickable: true },
            autoplay: {
                delay: 5000,
                disableOnInteraction: false,
            },
            loop: heroSlides.length > 1,
            speed: 800, // Velocidade de transição do slide
            onSlideChange: (swiper: SwiperCore) => setActiveIndex(swiper.activeIndex),
            watchSlidesProgress: true,
        }),
        [],
    );

    // Função para renderizar o conteúdo do slide
    const renderSlideContent = (slide: HeroSlideTypes, isActive: boolean, index: number) => {
        switch (slide.layout) {
            case 'left-text':
                return <LeftTextLayout slide={slide} isActive={isActive} index={index} />;
            case 'right-text':
                return <RightTextLayout slide={slide} isActive={isActive} index={index} />;
            case 'center-text':
            default:
                return <CenterTextLayout slide={slide} isActive={isActive} />;
        }
    };

    return (
        <section id="hero" className="relative h-[100vh] hero-carousel">
            <Swiper {...swiperConfig} className="h-full w-full">
                {heroSlides.map((slide, index) => (
                    <SwiperSlide key={slide.id}>
                        {({ isActive, isPrev, isNext }) => (
                            <div
                                style={{
                                    visibility: isActive || isPrev || isNext ? 'visible' : 'hidden',
                                    height: '100%',
                                    width: '100%',
                                }}
                            >
                                {renderSlideContent(slide, isActive, index)}
                            </div>
                        )}
                    </SwiperSlide>
                ))}
            </Swiper>
        </section>
    );
};

// Exportar como componente memoizado para evitar re-renderizações desnecessárias
export default memo(HeroCarousel);
