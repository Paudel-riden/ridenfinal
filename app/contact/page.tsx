import { ContactForm } from "@/components/sections/ContactForm";

export const metadata = {
  title: "Contact | Riden",
  description: "Get in touch—send a message or optionally schedule a meeting. I'll get back to you soon.",
};

export default function ContactPage() {
  return (
    <main className="min-h-screen pt-24 sm:pt-28 md:pt-32 pb-16 sm:pb-24">
      <ContactForm />
    </main>
  );
}
