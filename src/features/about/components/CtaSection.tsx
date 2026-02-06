import Container from "@/components/shared/Container";
import CtaCard from "./CtaCard";


const CtaSection = () => {
  return (
    <section className="py-24 bg-background">
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <CtaCard
            title="Become the hand that lifts another story."
            image="/help.jpeg"
            buttonText="Extend Kindness"
            href="/campaigns"
            bgColor="bg-emerald-50"
          />
          <CtaCard
            title="Have a dream or a need? Let the world hear your voice."
            image="/getHelp.jpeg"
            buttonText="Share Your Story"
            href="/start-fundraising"
            bgColor="bg-orange-50"
          />
        </div>
      </Container>
    </section>
  );
};

export default CtaSection;
