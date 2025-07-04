import Image from "next/image";
import Link from "next/link";

export default function Services() {
  const services = [
    {
      id: 1,
      title: "Anxiety & Stress Management",
      description: "Learn effective techniques to manage anxiety and stress in your daily life. Dr. Blake uses evidence-based approaches to help you identify triggers, develop coping strategies, and build resilience for long-term wellbeing.",
      image: "https://img.freepik.com/free-photo/woman-meditating-home_23-2148990771.jpg",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      )
    },
    {
      id: 2,
      title: "Relationship Counseling",
      description: "Strengthen your connections with partners, family members, and friends through targeted relationship counseling. Dr. Blake helps you improve communication, resolve conflicts, and build healthier, more fulfilling relationships.",
      image: "https://img.freepik.com/free-photo/couple-talking-therapist-office_23-2148760873.jpg",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
        </svg>
      )
    },
    {
      id: 3,
      title: "Trauma Recovery",
      description: "Heal from past trauma with compassionate, trauma-informed care. Dr. Blake provides a safe space to process difficult experiences and develop strategies to overcome their impact, helping you move forward with renewed strength.",
      image: "https://img.freepik.com/free-photo/woman-therapy-session-psychologist_23-2149073258.jpg",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
        </svg>
      )
    }
  ];

  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <span className="text-teal-600 font-medium">How I Help</span>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mt-2 mb-4">Services</h2>
          <div className="w-20 h-1 bg-teal-600 mx-auto mb-6"></div>
          <p className="text-gray-600 max-w-3xl mx-auto">
            Dr. Blake offers specialized therapy services tailored to your unique needs and goals.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {services.map((service) => (
            <div key={service.id} className="bg-white rounded-lg overflow-hidden shadow-lg transition-all hover:shadow-xl group">
              <div className="relative h-64">
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  style={{ objectFit: "cover" }}
                  className="group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                <div className="absolute bottom-0 left-0 p-6">
                  <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-teal-600 text-white mb-3">
                    {service.icon}
                  </span>
                  <h3 className="text-xl font-semibold text-white">{service.title}</h3>
                </div>
              </div>
              <div className="p-6">
                <p className="text-gray-600 mb-4">{service.description}</p>
                <div className="flex justify-between items-center">
                  <p className="text-teal-600 font-medium">
                    {service.id === 2 ? "$240 per session" : "$200 per session"}
                  </p>
                  <Link 
                    href="/#contact" 
                    className="text-teal-600 hover:text-teal-700 font-medium inline-flex items-center"
                  >
                    Learn More
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <Link 
            href="/#contact" 
            className="bg-teal-600 hover:bg-teal-700 text-white font-medium py-3 px-8 rounded-md inline-block transition-colors"
          >
            Schedule a Consultation
          </Link>
        </div>
      </div>
    </section>
  );
} 