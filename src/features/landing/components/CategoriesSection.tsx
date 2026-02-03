import Container from "@/components/shared/Container";

import CategoryCard from "@/features/categories/components/CategoryCard";
import { getCategories } from "@/features/categories/api/get-categories";

const CategoriesSection = async () => {
  const categories = await getCategories();

  return (
    <section className="py-20 bg-background overflow-hidden">
      <Container>
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-foreground font-sans">
            Fundraising Categories
          </h2>
        </div>

        <div className="flex flex-wrap justify-center gap-6">
          {categories.map((category) => (
            <div
              key={category.id}
              className="flex-none w-[calc(50%-1.5rem)] sm:w-[calc(33.33%-1.5rem)] md:w-[calc(25%-1.5rem)] lg:w-[calc(20%-1.5rem)]"
            >
              <CategoryCard data={category} />
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default CategoriesSection;