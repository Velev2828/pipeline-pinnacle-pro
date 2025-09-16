const Gallery = () => {
  const images = Array(7).fill(null).map((_, index) => ({
    id: index + 1,
    alt: `Project ${index + 1}`,
    placeholder: `gallery-image-${index + 1}`
  }));

  return (
    <section className="py-24 bg-background">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold mb-6 text-foreground">Реални Снимки</h2>
          <p className="text-xl text-muted-foreground">Галерия от снимки от нашите проекти.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {images.map((image) => (
            <div 
              key={image.id} 
              className="group relative overflow-hidden rounded-xl bg-muted h-80 shadow-card hover:shadow-glow transition-smooth cursor-pointer"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-accent/20 opacity-0 group-hover:opacity-100 transition-smooth"></div>
              <div className="flex items-center justify-center h-full text-muted-foreground group-hover:text-white transition-smooth">
                <div className="text-center">
                  <div className="w-16 h-16 mx-auto mb-4 bg-muted-foreground/10 group-hover:bg-white/20 rounded-full flex items-center justify-center transition-smooth">
                    <svg width="32" height="32" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M21 19V5c0-1.1-.9-2-2-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2zM8.5 13.5l2.5 3.01L14.5 12l4.5 6H5l3.5-4.5z"/>
                    </svg>
                  </div>
                  <p className="text-sm font-medium">{image.placeholder}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-muted-foreground">Slide 7 of 7.</p>
        </div>
      </div>
    </section>
  );
};

export default Gallery;