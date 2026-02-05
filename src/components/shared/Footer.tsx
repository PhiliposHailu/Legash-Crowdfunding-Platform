import Link from "next/link";
import Container from "./Container";
import { FOOTER_LINKS } from "@/data/navigation";

const Footer = () => {
  return (
    <footer className="bg-white border-t border-muted pt-16 pb-10">
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12">
          
          <div className="md:col-span-4 space-y-6">
            <div className="flex flex-col">
              <span className="text-3xl font-black tracking-tighter text-primary">LEGASH</span>
              <span className="text-[10px] uppercase tracking-[0.3em] text-secondary font-bold -mt-1">
                Generosity Built on Trust
              </span>
            </div>
            
            <p className="text-[15px] text-muted-foreground leading-relaxed">
              Inspired by our tradition of community support, Legash is Ethiopia's digital home for kindness. We empower individuals to raise funds for medical needs, education, and local initiatives that change lives.
            </p>

            <div className="text-[13px] text-muted-foreground/80 space-y-1 pt-2 italic">
              <p>Legash Tech Solution PLC</p>
              <p>Bole, Behind Friendship Mall</p>
              <p>Addis Ababa, Ethiopia</p>
            </div>
          </div>

          <div className="md:col-span-8 grid grid-cols-2 sm:grid-cols-3 gap-8">
            {FOOTER_LINKS.map((group) => (
              <div key={group.title} className="space-y-6">
                <h4 className="font-bold text-[#b0bac9] text-[14px] uppercase tracking-wider">
                  {group.title}
                </h4>
                <ul className="space-y-4">
                  {group.links.map((link) => (
                    <li key={link.label}>
                      <Link 
                        href={link.href} 
                        className="text-[15px] text-[#2d3a4b] hover:text-primary transition-colors font-medium"
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-muted/40 flex flex-col md:flex-row justify-center items-center gap-4">
          <p className="text-[12px] text-muted-foreground">
            © {new Date().getFullYear()} Legash. All rights reserved.
          </p>
          {/* <div className="flex gap-6 text-[12px] text-muted-foreground">
             <Link href="/terms" className="hover:text-primary">Terms</Link>
             <Link href="/privacy" className="hover:text-primary">Privacy</Link>
             <Link href="/cookies" className="hover:text-primary">Cookies</Link>
          </div> */}
        </div>
      </Container>
    </footer>
  );
};

export default Footer;