import React from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="py-24 bg-gray-900">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">Contact Us</h2>
          <div className="w-24 h-1 bg-gray-200 mx-auto mb-8"></div>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Ready to take the next step? Get in touch with our team to discuss your 
            casting needs or submit your portfolio.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          <div className="space-y-8">
            <ContactInfo
              icon={<Phone size={24} />}
              title="Phone"
              detail="+1 (555) 123-4567"
            />
            <ContactInfo
              icon={<Mail size={24} />}
              title="Email"
              detail="casting@castcraft.com"
            />
            <ContactInfo
              icon={<MapPin size={24} />}
              title="Location"
              detail="123 Talent Street, Hollywood, CA 90028"
            />
          </div>

          <form className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <input
                type="text"
                placeholder="Name"
                className="w-full px-4 py-3 bg-gray-800 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-300"
              />
              <input
                type="email"
                placeholder="Email"
                className="w-full px-4 py-3 bg-gray-800 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-300"
              />
            </div>
            <input
              type="text"
              placeholder="Subject"
              className="w-full px-4 py-3 bg-gray-800 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-300"
            />
            <textarea
              placeholder="Message"
              rows={6}
              className="w-full px-4 py-3 bg-gray-800 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-300"
            ></textarea>
            <button
              type="submit"
              className="w-full px-8 py-4 bg-gray-200 hover:bg-white text-gray-900 font-bold rounded-lg transition-all duration-300 transform hover:scale-105"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

const ContactInfo = ({ icon, title, detail }) => (
  <div className="flex items-start space-x-4">
    <div className="text-gray-300">{icon}</div>
    <div>
      <h4 className="text-lg font-semibold text-white mb-1">{title}</h4>
      <p className="text-gray-400">{detail}</p>
    </div>
  </div>
);