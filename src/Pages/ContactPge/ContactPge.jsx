import React, { useState } from 'react';
import { Footer, NavbarOne } from '../../Components';
import { Shop1 } from '../../assets'; // Using same background image
import { ArrowRight, Phone, Mail, MapPin, Clock, Send } from 'lucide-react';

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    
    // Simulate form submission
    setTimeout(() => {
      setLoading(false);
      setSuccess(true);
      // Reset form
      setFormData({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: ''
      });
      // Hide success message after 3 seconds
      setTimeout(() => setSuccess(false), 3000);
    }, 2000);
  };

  return (
    <>
      {/* Header Component */}
      <NavbarOne />

      {/* Main Section */}
      <main
        className="relative w-full bg-cover py-20 bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${Shop1})` }}
      >
        <div className="absolute inset-0 bg-black/30"></div>
        <div className="relative flex flex-col justify-center items-center text-center py-10 gap-6 px-4">
          <h2 className="text-xl md:text-3xl flex items-center gap-6 text-white">
            Home <ArrowRight className="text-white" /> <span className="text-white">Contact</span>
          </h2>
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl  text-white">
            Contact Us
          </h1>
          <p className="text-white/90">Let's design the place you always imagined.</p>
        </div>
      </main>

      {/* Contact Info Section */}
      <section className="px-4 sm:px-6 lg:px-8 py-12 bg-gray-50">
        <div className="custom-padding ">
          <div className="text-center mb-12">
            <h2 className="text-3xl mb-4">Get in Touch</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              We'd love to hear from you. Send us a message and we'll respond as soon as possible.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {/* Phone */}
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 text-center">
              <div className="w-12 h-12 bg-primary-green/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Phone className="w-6 h-6 text-primary-green" />
              </div>
              <h3 className="font-semibold text-gray-800 mb-2">Phone</h3>
              <p className="text-gray-600">+1 (555) 123-4567</p>
              <p className="text-gray-600">+1 (555) 987-6543</p>
            </div>

            {/* Email */}
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 text-center">
              <div className="w-12 h-12 bg-primary-green/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Mail className="w-6 h-6 text-primary-green" />
              </div>
              <h3 className="font-semibold text-gray-800 mb-2">Email</h3>
              <p className="text-gray-600">info@company.com</p>
              <p className="text-gray-600">support@company.com</p>
            </div>

            {/* Address */}
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 text-center">
              <div className="w-12 h-12 bg-primary-green/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <MapPin className="w-6 h-6 text-primary-green" />
              </div>
              <h3 className="font-semibold text-gray-800 mb-2">Address</h3>
              <p className="text-gray-600">123 Business Street</p>
              <p className="text-gray-600">City, State 12345</p>
            </div>

            {/* Hours */}
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 text-center">
              <div className="w-12 h-12 bg-primary-green/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Clock className="w-6 h-6 text-primary-green" />
              </div>
              <h3 className="font-semibold text-gray-800 mb-2">Business Hours</h3>
              <p className="text-gray-600">Mon - Fri: 9AM - 6PM</p>
              <p className="text-gray-600">Sat - Sun: 10AM - 4PM</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="px-4 sm:px-6 lg:px-8 py-12 bg-white">
        <div className="custom-padding ">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Form */}
            <div>
              <h3 className="text-2xl mb-6">Send us a Message</h3>
              
              {/* Success Message */}
              {success && (
                <div className="mb-6 p-4 bg-green-100 border border-green-400 text-green-700 rounded-lg">
                  Thank you! Your message has been sent successfully.
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="block text-gray-700 font-medium mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-green focus:border-primary-green transition-all duration-200"
                      placeholder="Your full name"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-gray-700 font-medium mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-green focus:border-primary-green transition-all duration-200"
                      placeholder="your.email@example.com"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="phone" className="block text-gray-700 font-medium mb-2">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-green focus:border-primary-green transition-all duration-200"
                      placeholder="+1 (555) 123-4567"
                    />
                  </div>
                  <div>
                    <label htmlFor="subject" className="block text-gray-700 font-medium mb-2">
                      Subject *
                    </label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-green focus:border-primary-green transition-all duration-200"
                      placeholder="How can we help?"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="message" className="block text-gray-700 font-medium mb-2">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows={6}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-green focus:border-primary-green transition-all duration-200 resize-vertical"
                    placeholder="Tell us more about your project or inquiry..."
                  />
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full bg-primary-green hover:bg-primary-green/90 text-white font-medium py-3 px-6 rounded-lg transition-all duration-200 flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {loading ? (
                    <>
                      <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white"></div>
                      Sending...
                    </>
                  ) : (
                    <>
                      <Send className="w-4 h-4" />
                      Send Message
                    </>
                  )}
                </button>
              </form>
            </div>

            {/* Additional Info */}
            <div>
              <h3 className="text-2xl  mb-6">Why Choose Us?</h3>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 bg-primary-green/10 rounded-full flex-shrink-0 flex items-center justify-center mt-1">
                    <span className="text-primary-green font-bold">1</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-2">Expert Team</h4>
                    <p className="text-gray-600">Our experienced professionals are dedicated to bringing your vision to life with exceptional craftsmanship.</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 bg-primary-green/10 rounded-full flex-shrink-0 flex items-center justify-center mt-1">
                    <span className="text-primary-green font-bold">2</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-2">Quality Materials</h4>
                    <p className="text-gray-600">We use only the finest materials and latest techniques to ensure lasting quality and beauty.</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 bg-primary-green/10 rounded-full flex-shrink-0 flex items-center justify-center mt-1">
                    <span className="text-primary-green font-bold">3</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-2">Customer Satisfaction</h4>
                    <p className="text-gray-600">Your satisfaction is our priority. We work closely with you throughout every step of the process.</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 bg-primary-green/10 rounded-full flex-shrink-0 flex items-center justify-center mt-1">
                    <span className="text-primary-green font-bold">4</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-2">Timely Delivery</h4>
                    <p className="text-gray-600">We respect your time and ensure all projects are completed within the agreed timeline.</p>
                  </div>
                </div>
              </div>

              {/* Quote Box */}
              <div className="mt-8 p-6 bg-primary-green/5 border-l-4 border-primary-green rounded-r-lg">
                <p className="text-gray-700 italic mb-3">
                  "Let's design the place you always imagined together. Get in touch and let's make your dreams a reality."
                </p>
                <p className="text-primary-green font-semibold">Our Design Team</p> 
                
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer/>
    </>
  );
};

export default ContactPage;