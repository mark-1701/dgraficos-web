import BannerImage from '/src/assets/person.jpg';
import ContactForm from './ContactForm';

function Contact() {
  return (
    <div className="divider-y bg-cover bg-gray-200 sm:bg-center">
      <div className="!grid grid-rows-1 grid-cols-1 gap-0 h-full sm:grid-cols-2 sm:grid-rows-1">
        <div
          style={{ backgroundImage: `url(${BannerImage})` }}
          className="hidden h-full w-full bg-cover bg-center sm:block"
        ></div>
        <div className="flex flex-col justify-center items-center p-8 sm:p-14">
          <h1 className="title" id="contact">
            Contacto
          </h1>
          <ContactForm />
        </div>
      </div>
    </div>
  );
}

export default Contact;
