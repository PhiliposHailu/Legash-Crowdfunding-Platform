import Container from "@/components/shared/Container";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

import CategoryCard from "@/features/categories/components/CategoryCard";
import { getCategories } from "@/features/categories/api/get-categories";

const CategoriesSection = async () => {
  const categories = await getCategories();

  return (
    <section className="py-24 bg-white overflow-hidden">
      <Container>
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div className="max-w-xl">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Explore Categories
            </h2>
            <p className="text-muted-foreground text-lg">
              Find a cause that resonates with you, from medical needs to
              community projects.
            </p>
          </div>
          <Button variant="outline" className="hidden md:flex gap-2">
            <Link href="/categories/0">View All Categories</Link>{" "}
            <ArrowRight className="w-4 h-4" />
          </Button>
        </div>

        <div className="flex flex-wrap justify-center gap-6">
          {categories.map((category) => (
            <Link
              key={category.id}
              className="flex-none w-[calc(50%-1.5rem)] sm:w-[calc(33.33%-1.5rem)] md:w-[calc(25%-1.5rem)] lg:w-[calc(20%-1.5rem)]"
              href={`/categories/${category.id}`}
            >
              <CategoryCard data={category} />
            </Link>
          ))}
        </div>

        <div className="mt-10 flex justify-center md:hidden">
          <Button asChild variant="outline" className="w-full">
            <Link href="/categories/0">View All Categories</Link>
          </Button>
        </div>
      </Container>
    </section>
  );
};

export default CategoriesSection;
