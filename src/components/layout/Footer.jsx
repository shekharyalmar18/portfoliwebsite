import Container from "../ui/Container";
import { profile } from "../../data/profile";

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="border-t border-white/5 py-8">
      <Container className="flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-sm text-muted">
          © {year} {profile.displayName}. All rights reserved.
        </p>
        <p className="text-sm text-muted">
          Designed & Built with passion
        </p>
      </Container>
    </footer>
  );
}