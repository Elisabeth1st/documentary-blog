export default function VideoLightbox({ videoId, buttonText = "Watch the drawing session", thumbnail }) {
  const embedUrl = `https://www.youtube.com/embed/${videoId}?autoplay=1&rel=0`;

  return (
    <>
      <button 
        className="open-video-btn" 
        onClick={(e) => {
          const lightbox = e.currentTarget.nextElementSibling;
          const iframe = lightbox.querySelector('.video-iframe');
          iframe.src = embedUrl;
          lightbox.style.display = 'flex';
          
          lightbox.addEventListener('click', (e) => {
            if (e.target === lightbox || e.target.classList.contains('close-video')) {
              lightbox.style.display = 'none';
              iframe.src = "";
            }
          }, { once: true });
        }}
        aria-label={buttonText}
      >
        <img src={thumbnail} alt={buttonText} className="video-thumbnail" />
        <span className="play-icon">▶</span>
      </button>

      <div className="video-lightbox" style={{ display: 'none' }}>
        <div className="lightbox-overlay">
          <span className="close-video">&times;</span>
          <iframe 
            className="video-iframe" 
            width="100%" 
            height="100%" 
            frameBorder="0" 
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
            allowFullScreen
          ></iframe>
        </div>
      </div>

      <style>{`
        .open-video-btn {
          background: none;
          border: none;
          cursor: pointer;
          padding: 0;
          position: relative;
          width: 100%;
          max-width: 300px;
          margin: 2rem 0;
          display: block;
        }
        
        .video-thumbnail {
          width: 100%;
          height: auto;
          border-radius: 8px;
          display: block;
        }
        
        .play-icon {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          font-size: 4rem;
          color: white;
          background: rgba(0,0,0,0.6);
          width: 80px;
          height: 80px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: background 0.3s;
        }
        
        .open-video-btn:hover .play-icon {
          background: rgba(0,0,0,0.9);
        }
        
        .video-lightbox {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: rgba(0,0,0,0.95);
          z-index: 1000;
          display: flex;
          justify-content: center;
          align-items: center;
        }
        
        .lightbox-overlay {
          position: relative;
          width: 90%;
          max-width: 400px;
          height: 80vh;
        }
        
        .close-video {
          position: absolute;
          top: -40px;
          right: 0;
          color: white;
          cursor: pointer;
          font-size: 40px;
          line-height: 1;
        }
        
        .video-iframe {
          width: 100%;
          height: 100%;
          border: none;
        }
      `}</style>
    </>
  );
}