import { FaFacebookF, FaInstagram, FaWhatsapp } from "react-icons/fa";
import { FiArrowUpRight } from "react-icons/fi";

const links = [
  {
    title: "IdeaMint India",
    subtitle: "Instagram",
    href: "https://www.instagram.com/ideamint_india?vrfl=NzBqOGxnOGljcWNu",
    icon: FaInstagram,
    tone: "mint",
  },
  {
    title: "Solvian",
    subtitle: "Visit the website",
    href: "https://solvianconsultancy.com/",
    icon: FiArrowUpRight,
    tone: "gold",
  },
  {
    title: "Solvian Group",
    subtitle: "Instagram",
    href: "https://www.instagram.com/solvian.group?dlrf=MWY0eDl3OWNwNHQ1eQ==",
    icon: FaInstagram,
    tone: "ink",
  },
  {
    title: "Vinay Phadnis",
    subtitle: "Personal Instagram",
    href: "https://www.instagram.com/vinay_phadnis?cplk=ejR6Y3ZmbW14dTFy",
    icon: FaInstagram,
    tone: "coral",
  },
] as const;

export default function Home() {
  return (
    <main className="page-shell">
      <section className="profile" aria-labelledby="profile-name">
        <h1 id="profile-name">Vinay Phadnis</h1>
        <p className="intro">
          A small collection of places to find my work, companies, and conversations.
        </p>
      </section>

      <nav className="link-list" aria-label="Vinay Phadnis links">
        {links.map((link) => (
          <a
            className="link-card"
            href={link.href}
            key={link.title}
            rel="noreferrer"
            target="_blank"
          >
            <span className={`link-mark link-mark-${link.tone}`} aria-hidden="true">
              <link.icon size={24} />
            </span>
            <span className="link-copy">
              <span className="link-title">{link.title}</span>
              <span className="link-subtitle">{link.subtitle}</span>
            </span>
            <span className="link-arrow" aria-hidden="true">
              ↗
            </span>
          </a>
        ))}
      </nav>
    </main>
  );
}
