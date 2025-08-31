export default function ContactMap() {
  return (
    <section className="map-container">
      <div className="mx-auto px-4 sm:max-w-[640px] md:max-w-[768px] lg:max-w-[1024px] xl:max-w-[1170px] text-center">
        <h1 className="text-[40px] font-light text-[#38373c] leading-[30px] mt-10 mb-[30px] sm:text-[54px] sm:leading-[54px] sm:mb-[60px]">
          Our Location
        </h1>
        <div className="w-full h-auto sm:h-[450px]">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3885.1761290612785!2d80.24317257597704!3d13.151287687180869!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a52653de92f2311%3A0x93014d28d6591fb1!2sMoolachatram%20Main%20Rd%2C%20Chennai%2C%20Tamil%20Nadu%20600051!5e0!3m2!1sen!2sin!4v1756627833371!5m2!1sen!2sin"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            // allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </section>
  );
}
