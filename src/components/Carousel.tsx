import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay, Thumbs, FreeMode } from 'swiper/modules';
import type { Swiper as SwiperType } from 'swiper';

// Import Swiper styles (these are bundled into the library CSS)
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/thumbs';
import 'swiper/css/free-mode';
import '../styles/carousel.css';

export interface CarouselProps {
  children: React.ReactNode[];
  autoplay?: boolean | number;
  showThumbnails?: boolean;
  showArrows?: boolean;
  showPagination?: boolean;
  delay?: number;
  pauseOnHover?: boolean;
  loop?: boolean;
  spaceBetween?: number;
  slidesPerView?: number | 'auto';
  slidesPerViewMobile?: number | 'auto';
  slidesPerViewDesktop?: number | 'auto';
  height?: number | string; // e.g. 500, '24rem', '60vh'
  heightMobile?: number | string;
  heightDesktop?: number | string;
  aspectRatio?: number | string; // e.g. '16/9' or 1.777
  activeColor?: string; // Color for active pagination dot and thumbnail border
  className?: string;
  enableFullscreen?: boolean; // Enable fullscreen modal
}

const Carousel: React.FC<CarouselProps> = ({
  children,
  autoplay = false,
  showThumbnails = true,
  showArrows = true,
  showPagination = true,
  delay = 3000,
  pauseOnHover = false,
  loop = true,
  spaceBetween = 30,
  slidesPerView = 1,
  slidesPerViewMobile = 1,
  slidesPerViewDesktop = 1,
  height,
  heightMobile,
  heightDesktop,
  aspectRatio,
  activeColor = '#007bff',
  className = '',
  enableFullscreen = false,
}) => {
  const [thumbsSwiper, setThumbsSwiper] = React.useState<SwiperType | null>(null);
  const [isHovered, setIsHovered] = React.useState(false);
  const [isFullscreen, setIsFullscreen] = React.useState(false);
  const paginationElRef = React.useRef<HTMLDivElement>(null);

  const toCssSize = (value?: number | string): string | undefined => {
    if (value === undefined || value === null) return undefined;
    if (typeof value === 'number') return `${value}px`;
    return value;
  };

  const toAspectRatio = (value?: number | string): string | undefined => {
    if (value === undefined || value === null) return undefined;
    if (typeof value === 'number') return String(value);
    return value;
  };

  const styleVars: React.CSSProperties = {
    // Effective height is resolved in CSS via media queries
    ['--carousel-height' as unknown as string]: toCssSize(height) as string | undefined,
    ['--carousel-height-mobile' as unknown as string]: toCssSize(heightMobile) as string | undefined,
    ['--carousel-height-desktop' as unknown as string]: toCssSize(heightDesktop) as string | undefined,
    ['--carousel-aspect-ratio' as unknown as string]: toAspectRatio(aspectRatio) as string | undefined,
    ['--carousel-active-color' as unknown as string]: activeColor,
  } as React.CSSProperties;

  // Auto-play configuration
  const autoplayConfig = autoplay ? {
    delay: typeof autoplay === 'number' ? autoplay : delay,
    disableOnInteraction: false,
    pauseOnMouseEnter: pauseOnHover,
  } : false;

  // Responsive breakpoints for slides per view
  const responsiveBreakpoints = {
    320: {
      slidesPerView: slidesPerViewMobile ?? 1,
      spaceBetween: 10,
    },
    640: {
      slidesPerView: slidesPerViewMobile ?? 1,
      spaceBetween: 20,
    },
    768: {
      slidesPerView: slidesPerViewMobile ?? 1,
      spaceBetween: 30,
    },
    1024: {
      slidesPerView: slidesPerViewDesktop ?? 1,
      spaceBetween: 30,
    },
  };

  if (showThumbnails && children.length > 1) {
    return (
      <>
        <div
          className={`carousel-wrapper ${className}`}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          style={styleVars}
        >
          {/* Fullscreen Button */}
          {enableFullscreen && (
            <button
              onClick={() => setIsFullscreen(true)}
              className="carousel-fullscreen-btn"
              aria-label="View in fullscreen"
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M8 3H5a2 2 0 0 0-2 2v3m18 0V5a2 2 0 0 0-2-2h-3m0 18h3a2 2 0 0 0 2-2v-3M3 16v3a2 2 0 0 0 2 2h3" />
              </svg>
            </button>
          )}
          {/* Main Carousel */}
          <div className="main-carousel-wrapper">
          <Swiper
            modules={[Navigation, Pagination, Autoplay, Thumbs]}
            spaceBetween={spaceBetween}
            slidesPerView={slidesPerView}
            navigation={showArrows}
            pagination={showPagination && !showThumbnails ? { clickable: true, dynamicBullets: true, dynamicMainBullets: 1, hideOnClick: false } : false}
            autoplay={isHovered && pauseOnHover ? false : autoplayConfig}
            thumbs={{ 
              swiper: thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null, 
              slideThumbActiveClass: 'swiper-slide-thumb-active',
              multipleActiveThumbs: false 
            }}
            loop={loop}
            breakpoints={responsiveBreakpoints}
            onSlideChange={(sw) => {
              if (!thumbsSwiper || thumbsSwiper.destroyed) return;
              const targetIndex = typeof sw.realIndex === 'number' ? sw.realIndex : sw.activeIndex;
              const thumbsSlidesPerView = typeof thumbsSwiper.params.slidesPerView === 'number'
                ? thumbsSwiper.params.slidesPerView
                : 5;
              const half = Math.floor((thumbsSlidesPerView as number) / 2);
              const targetThumbIndex = Math.max(0, targetIndex - half);
              try {
                // Use slideTo to bring the active thumbnail into view
                thumbsSwiper.slideTo(targetThumbIndex);
              } catch {}
            }}
            className="main-swiper"
          >
            {children.map((child, index) => (
              <SwiperSlide key={`slide-${index}`}>
                {child}
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        {/* Thumbnails */}
        <div className="thumbnail-carousel-wrapper">
          <Swiper
            onSwiper={setThumbsSwiper}
            modules={[FreeMode, Navigation, Thumbs]}
            spaceBetween={10}
            slidesPerView="auto"
            freeMode={true}
            watchSlidesProgress={true}
            slideToClickedSlide={true}
            centeredSlides={true}
            centeredSlidesBounds={true}
            className="thumbnail-swiper"
          >
            {children.map((child, index) => (
              <SwiperSlide key={`thumb-${index}`}>
                <div className="thumbnail-slide">
                  {child}
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>

      {/* Fullscreen Modal */}
      {enableFullscreen && isFullscreen && (
        <div className="carousel-fullscreen-modal" onClick={() => setIsFullscreen(false)}>
          <button
            className="carousel-fullscreen-close"
            onClick={(e) => {
              e.stopPropagation();
              setIsFullscreen(false);
            }}
            aria-label="Close fullscreen"
          >
            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <line x1="18" y1="6" x2="6" y2="18" />
              <line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          </button>
          <div onClick={(e) => e.stopPropagation()} className="carousel-fullscreen-content">
            <Swiper
              modules={[Navigation, Pagination, Autoplay]}
              spaceBetween={0}
              slidesPerView={1}
              navigation={true}
              pagination={true}
              autoplay={false}
              loop={loop}
              className="carousel-fullscreen-swiper"
            >
              {children.map((child, index) => (
                <SwiperSlide key={`fullscreen-slide-${index}`}>
                  {child}
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      )}
    </>
    );
  }

  // Standard carousel without thumbnails
  return (
    <>
      <div
        className={`carousel-wrapper ${className}`}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        style={styleVars}
      >
        {/* Fullscreen Button */}
        {enableFullscreen && (
          <button
            onClick={() => setIsFullscreen(true)}
            className="carousel-fullscreen-btn"
            aria-label="View in fullscreen"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M8 3H5a2 2 0 0 0-2 2v3m18 0V5a2 2 0 0 0-2-2h-3m0 18h3a2 2 0 0 0 2-2v-3M3 16v3a2 2 0 0 0 2 2h3" />
            </svg>
          </button>
        )}
        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          spaceBetween={spaceBetween}
          slidesPerView={slidesPerView}
          navigation={showArrows}
          pagination={showPagination && paginationElRef.current ? { clickable: true, dynamicBullets: true, dynamicMainBullets: 1, hideOnClick: false, el: paginationElRef.current } : false}
          autoplay={isHovered && pauseOnHover ? false : autoplayConfig}
          loop={loop}
          breakpoints={responsiveBreakpoints}
          className="main-swiper"
        >
          {children.map((child, index) => (
            <SwiperSlide key={`slide-${index}`}>
              {child}
            </SwiperSlide>
          ))}
        </Swiper>
        {showPagination && <div ref={paginationElRef} className="carousel-pagination-container" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', width: '100%' }}></div>}
      </div>

      {/* Fullscreen Modal */}
      {enableFullscreen && isFullscreen && (
        <div className="carousel-fullscreen-modal" onClick={() => setIsFullscreen(false)}>
          <button
            className="carousel-fullscreen-close"
            onClick={(e) => {
              e.stopPropagation();
              setIsFullscreen(false);
            }}
            aria-label="Close fullscreen"
          >
            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <line x1="18" y1="6" x2="6" y2="18" />
              <line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          </button>
          <div onClick={(e) => e.stopPropagation()} className="carousel-fullscreen-content">
            <Swiper
              modules={[Navigation, Pagination, Autoplay]}
              spaceBetween={0}
              slidesPerView={1}
              navigation={true}
              pagination={true}
              autoplay={false}
              loop={loop}
              className="carousel-fullscreen-swiper"
            >
              {children.map((child, index) => (
                <SwiperSlide key={`fullscreen-slide-${index}`}>
                  {child}
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      )}
    </>
  );
};

export default Carousel;

