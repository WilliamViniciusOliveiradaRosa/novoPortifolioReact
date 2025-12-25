import { useRef } from "react";

const videos = [
  "/highlights/dom01.mov",
  "/highlights/op01.mov",
  "/highlights/op02.mov",
  "/highlights/op03.mov",
  "/highlights/op04.mov",
  "/highlights/p01.mov",
  "/highlights/p02.mov",
  "/highlights/sab001.mov",
];

export default function VideoCarousel() {
  const videoRefs = useRef([]);
  const carouselRef = useRef(null);

  const handleTouch = (index) => {
    videoRefs.current.forEach((video, i) => {
      if (!video) return;

      if (i === index) {
        if (video.paused) {
          video.play();
        } else {
          video.pause();
          video.currentTime = 0;
        }
      } else {
        video.pause();
        video.currentTime = 0;
      }
    });
  };

  const scrollLeft = () => {
    if (carouselRef.current) {
      carouselRef.current.scrollBy({
        left: -300,
        behavior: "smooth",
      });
    }
  };

  const scrollRight = () => {
    if (carouselRef.current) {
      carouselRef.current.scrollBy({
        left: 300,
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="relative w-full"> {/* pai relativo para os botões */}
      {/* Carrossel */}
      <div
        ref={carouselRef}
        className="
          flex gap-4 px-2
          overflow-x-auto
          scroll-smooth
          [scrollbar-width:none]
          [-ms-overflow-style:none]
          [&::-webkit-scrollbar]:hidden
        "
      >
        {videos.map((src, index) => (
          <div
            key={index}
            className="w-64 rounded-xl overflow-hidden cursor-pointer flex-shrink-0"
          >
            <video
              ref={(el) => (videoRefs.current[index] = el)}
              className="w-full h-full object-cover"
              src={src}
              muted
              loop
              playsInline
              preload="metadata"
              onClick={() => handleTouch(index)}
              onTouchStart={() => handleTouch(index)}
            />
          </div>
        ))}
      </div>

      {/* Botão esquerdo */}
      <button
        onClick={scrollLeft}
        className="absolute left-2 top-1/2 -translate-y-1/2 z-10 bg-white/70 rounded-full p-2 hover:bg-white"
      >
        &#8592;
      </button>

      {/* Botão direito */}
      <button
        onClick={scrollRight}
        className="absolute right-2 top-1/2 -translate-y-1/2 z-10 bg-white/70 rounded-full p-2 hover:bg-white"
      >
        &#8594;
      </button>
    </div>
  );
}
