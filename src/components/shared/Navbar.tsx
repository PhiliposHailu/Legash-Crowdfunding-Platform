import Link from "next/link";
import { Button } from "@/components/ui/button";
import Container from "./Container";

const Navbar = () => {
  return (
    <nav className="absolute top-0 left-0 right-0 z-50 w-full py-6">
      <Container className="flex items-center">
        <div className="flex-1">
          <Link href="/" className="flex items-center gap-2 w-fit group">
            <div className="w-10 h-10 bg-primary rounded-xl flex items-center justify-center transition-transform group-hover:rotate-6 shadow-lg shadow-primary/20">
              <span className="text-white font-bold text-2xl italic">L</span>
            </div>
            <span className="text-xl font-bold tracking-tighter text-foreground">
              LEGASH
            </span>
          </Link>
        </div>

        <div className="hidden md:flex items-center gap-10">
          <NavLink href="/">Home</NavLink>
          <NavLink href="/categories/0">Discover</NavLink>
          {/* <NavLink href="/how-it-works">How it works</NavLink> */}
          <NavLink href="/about">About</NavLink>
        </div>

        <div className="flex-1 flex justify-end items-center gap-4">
          <Button
            variant="ghost"
            className="hidden sm:inline-flex font-semibold"
          >
            Login
          </Button>
          <Button className="rounded-full px-8 font-bold shadow-xl shadow-primary/10">
            Start Fundraising
          </Button>
        </div>
      </Container>
    </nav>
  );
};

// Simple link component to add separate styling like hover ...
const NavLink = ({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) => (
  <Link
    href={href}
    className="text-sm font-bold text-muted-foreground hover:text-primary transition-colors"
  >
    {children}
  </Link>
);

export default Navbar;