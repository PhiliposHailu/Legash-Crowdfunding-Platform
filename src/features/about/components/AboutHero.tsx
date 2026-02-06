import Container from "@/components/shared/Container";

const AboutHero = () => (
  <section className="pt-32 pb-48 bg-primary-light relative overflow-hidden">
    <Container className="relative z-10 text-center">
      <div className="max-w-3xl mx-auto space-y-6">
        <span className="text-primary font-bold uppercase tracking-[0.3em] text-xs">
          Our Story
        </span>
        <h1 className="text-5xl md:text-7xl font-black text-foreground leading-tight">
          For the love of giving. For the joy of receiving.
        </h1>
        <p className="text-lg text-muted-foreground leading-relaxed">
          Legash exists to make generosity easy. We saw a world full of people
          ready to help, and causes that needed a voice. Our intuitive platform
          is that voice a simple tool to share your story, reach the world, and
          experience the incredible joy that comes from making a difference.
        </p>
      </div>
    </Container>
  </section>
);

export default AboutHero;
