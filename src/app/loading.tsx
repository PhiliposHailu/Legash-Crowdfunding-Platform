import Container from "@/components/shared/Container";

export default function Loading() {
  return (
    <Container className="min-h-screen flex flex-col items-center justify-center space-y-4">
      <div className="relative w-20 h-20">
        <div className="absolute inset-0 rounded-full border-4 border-primary/20" />
        <div className="absolute inset-0 rounded-full border-4 border-primary border-t-transparent animate-spin" />
      </div>
      <p className="text-primary font-bold animate-pulse tracking-widest uppercase text-xs">
        Legash is Loading...
      </p>
    </Container>
  );
}