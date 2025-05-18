
const MediaSection = () => {
  // Mock media items - in a real application, these would be dynamic or from a CMS
  const mediaItems = [
    { id: 1, type: "youtube", embedId: "dQw4w9WgXcQ", title: "Live at Club XYZ" },
    { id: 2, type: "soundcloud", embedId: "123456789", title: "Summer Mix 2023" },
    { id: 3, type: "youtube", embedId: "dQw4w9WgXcQ", title: "Corporate Event Highlights" },
    { id: 4, type: "soundcloud", embedId: "123456789", title: "Electronic Sessions Vol. 2" },
  ];

  // In a real app, these would be actual embeds with proper IDs
  const renderMediaItem = (item: any) => {
    if (item.type === "youtube") {
      return (
        <div className="aspect-w-16 aspect-h-9 rounded-lg overflow-hidden glass-card">
          <div className="w-full h-full bg-dj-dark/80 flex flex-col items-center justify-center p-6 text-center">
            <div className="w-16 h-16 mb-4 rounded-full bg-dj-neon/20 flex items-center justify-center">
              <svg className="w-8 h-8 text-dj-neon" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="currentColor" strokeWidth="2" />
                <path d="M9.5 8.96533C9.5 8.48805 9.5 8.24941 9.59974 8.11618C9.68666 8.00007 9.81971 7.92744 9.96438 7.9171C10.1304 7.90544 10.3311 8.03946 10.7326 8.30749L16.2304 11.3422C16.6337 11.6111 16.8353 11.7456 16.9013 11.9096C16.9579 12.0532 16.9579 12.2144 16.9013 12.3579C16.8353 12.5219 16.6337 12.6564 16.2304 12.9254L10.7326 15.9601C10.3311 16.2281 10.1304 16.3621 9.96438 16.3504C9.81971 16.3401 9.68666 16.2675 9.59974 16.1514C9.5 16.0182 9.5 15.7795 9.5 15.3023V8.96533Z" fill="currentColor" />
              </svg>
            </div>
            <p className="text-white font-semibold">{item.title}</p>
            <p className="text-dj-gray text-sm mt-2">YouTube Video - Clic para reproducir</p>
          </div>
        </div>
      );
    } else {
      return (
        <div className="aspect-w-16 aspect-h-9 rounded-lg overflow-hidden glass-card">
          <div className="w-full h-full bg-dj-dark/80 flex flex-col items-center justify-center p-6 text-center">
            <div className="w-16 h-16 mb-4 rounded-full bg-dj-blue/20 flex items-center justify-center">
              <svg className="w-8 h-8 text-dj-blue" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path d="M20 3H4a1 1 0 0 0-1 1v16a1 1 0 0 0 1 1h16a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1zM9 17.5a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v5zm4 0a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-7a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v7zm4 0a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-9a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v9z"></path>
              </svg>
            </div>
            <p className="text-white font-semibold">{item.title}</p>
            <p className="text-dj-gray text-sm mt-2">SoundCloud Track - Clic para escuchar</p>
          </div>
        </div>
      );
    }
  };

  return (
    <section id="media" className="bg-dj-dark relative overflow-hidden py-20">
      {/* Gradient background */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-dj-dark to-black opacity-50 z-0"></div>
      
      <div className="container-section relative z-10">
        <h2 className="section-title text-center">Media</h2>
        <p className="section-subtitle text-center">
          Explora mis sets y actuaciones recientes
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
          {mediaItems.map((item) => (
            <div key={item.id} className="transform transition-all duration-300 hover:scale-[1.02]">
              {renderMediaItem(item)}
            </div>
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <a 
            href="https://soundcloud.com" 
            target="_blank" 
            rel="noopener noreferrer"
            className="btn-secondary"
          >
            Ver Más en SoundCloud
          </a>
        </div>
      </div>
    </section>
  );
};

export default MediaSection;
