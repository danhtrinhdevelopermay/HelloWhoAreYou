export default function Home() {
  return (
    <main 
      className="min-h-screen flex items-center justify-center px-4 md:px-8"
      data-testid="page-home"
    >
      <div className="max-w-4xl mx-auto text-center">
        <h1 
          className="text-6xl md:text-7xl lg:text-8xl font-bold tracking-tight leading-none antialiased animate-in fade-in duration-1000"
          data-testid="text-hello-world"
          style={{ fontFamily: 'Inter, var(--font-sans)' }}
        >
          Hello World
        </h1>
        <p 
          className="mt-6 text-lg text-muted-foreground animate-in fade-in duration-1000 delay-300"
          data-testid="text-tagline"
          style={{ fontFamily: 'Inter, var(--font-sans)' }}
        >
          A simple beginning
        </p>
      </div>
    </main>
  );
}
