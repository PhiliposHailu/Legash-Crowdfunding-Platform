import Container from "@/components/shared/Container";
import SmartImage from "@/components/shared/SmartImage";

const AboutImageSection = () => {
  return (
    <section className="py-12 bg-background -mt-40">
      <Container>
        <div className="relative aspect-video w-full rounded-[2.5rem] md:rounded-[4rem] overflow-hidden shadow-2xl border-8 border-white">
          <SmartImage
            src="/strongerTogether.jpg"
            alt="Legash Community"
            fill
            className="object-cover"
          />
        </div>
      </Container>
    </section>
  );
};

export default AboutImageSection;
