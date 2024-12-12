import MainLayout from "~/components/main-layout";
import ContactForm from "~/components/contact/ContactForm";

export default function ContactPage() {
  return (
    <MainLayout>
      <div>
        <div className="mb-24 xs:mb-14">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d3725.28029825021!2d105.78630017525153!3d20.98139838940363!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1zNjhhLzYgUGjhu5EgQW8gU2VuLCBN4buZIExhbywgSMOgIMSQw7RuZywgSMOgIE7hu5lp!5e0!3m2!1svi!2s!4v1724994267750!5m2!1svi!2s"
            width="100%"
            height="350"
            style={{ borderWidth: "none" }}
            allowFullScreen={false}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
        <div>
          <ContactForm />
        </div>
      </div>
    </MainLayout>
  );
}
