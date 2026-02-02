import CampaignCard from "../../shared/CampaignCard";
import Container from "../../shared/Container";

const CampaignsSection = () => {
  const campaigns = [...Array(3)].map((_, i) => {
    return <CampaignCard key={i} />;
  });
  return (
    <section className="py-10">
      <Container className="space-y-4 flex flex-col items-center">
        <h2>Recent Campaigns</h2>
        <div className="flex gap-5">{campaigns}</div>
      </Container>
    </section>
  );
};

export default CampaignsSection;
