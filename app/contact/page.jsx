"use client"
import { useState, useReducer } from 'react';
import emailjs from "@emailjs/browser"
import {FaPhoneAlt, FaEnvelope, FaMapMarkedAlt} from "react-icons/fa"
import { motion } from "framer-motion"

const initialState = {
  name: '',
  email: '',
  message: '',
};

const info = [
  {
    icon:<FaPhoneAlt/>,
    title:"Phone",
    description: "(+880) 177 9319 010"
  },
  {
    icon:<FaEnvelope/>,
    title:"Email",
    description: "shuvrosankarsen44@gmail.com"
  },
  {
    icon:<FaMapMarkedAlt/>,
    title:"Address",
    description: "Bashundhara R/A, Bangladesh"
  },
]

function reducer(state, action) {
  switch (action.type) {
    case 'name':
      return { ...state, name: action.value };
    case 'email':
      return { ...state, email: action.value };
    case 'message':
      return { ...state, message: action.value };
    default:
      throw new Error();
  }
}

export default function MessageForm() {
  const [formState, dispatch] = useReducer(reducer, initialState);
  const [showFormErr, setShowFormErr] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState({ title: '', paragraph: '' });
  const { name, email, message } = formState;

  const sendEmail = (e) => {
    e.preventDefault();
    
    if (name === '' || email === '' || message === '') {
      setShowFormErr(true);
      return;
    }

    setFormSubmitted({ title: 'Sending message...', paragraph: '' });
    
    emailjs.send(
      process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID,
      process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID,
      formState,
      process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY,
    )
    .then(({ status }) => {
      if (status === 200) {
        setFormSubmitted({ 
          title: 'Message has been sent', 
          paragraph: 'Shuvro will be in contact with you soon.' 
        });
      } else {
        setFormSubmitted({ 
          title: 'Unexpected error occurred', 
          paragraph: 'Please try again later.' 
        });
      }
    })
    .catch((err) => {
      console.error(err);
      setFormSubmitted({ 
        title: 'Error sending message', 
        paragraph: 'Please try again later.' 
      });
    });
  };

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="container mx-auto py-12 xl:py-0"
    >
      <div className="flex flex-col lg:flex-row gap-8 xl:gap-12">
        {/* Contact Info */}
        <div className="w-full lg:w-1/3 space-y-6">
          <h3 className="text-3xl font-bold text-white mb-8">Contact Information</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-1 gap-6">
            {info.map((item, index) => (
              <div 
                key={index}
                className="p-6 rounded-xl bg-[#232329] hover:bg-[#2e2e31] transition-all duration-300"
              >
                <div className="flex items-center gap-4">
                  <span className="text-accent text-2xl">{item.icon}</span>
                  <div>
                    <h4 className="text-white/80 font-semibold">{item.title}</h4>
                    <p className="text-white/60">{item.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Form Section */}
        <div className="w-full lg:w-2/3">
          {formSubmitted.title === '' ? (
            <div className="bg-[#232329] rounded-xl p-8">
              <h3 className="text-3xl font-bold text-white mb-8">Send me a message</h3>
              <form onSubmit={sendEmail} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-4">
                    <label className="block text-white/80 font-medium">
                      Name
                      <input
                        className="w-full mt-2 p-3 bg-[#2e2e31] rounded-lg border border-white/10 focus:border-accent focus:ring-2 focus:ring-accent/30 text-white placeholder-white/40"
                        type="text"
                        value={name}
                        onChange={(e) => dispatch({ type: 'name', value: e.target.value })}
                        required
                      />
                    </label>
                    <label className="block text-white/80 font-medium">
                      Email
                      <input
                        className="w-full mt-2 p-3 bg-[#2e2e31] rounded-lg border border-white/10 focus:border-accent focus:ring-2 focus:ring-accent/30 text-white placeholder-white/40"
                        type="email"
                        value={email}
                        onChange={(e) => dispatch({ type: 'email', value: e.target.value })}
                        required
                      />
                    </label>
                  </div>
                  <div className="space-y-4">
                    <label className="block text-white/80 font-medium">
                      Message
                      <textarea
                        rows="5"
                        className="w-full mt-2 p-3 bg-[#2e2e31] rounded-lg border border-white/10 focus:border-accent focus:ring-2 focus:ring-accent/30 text-white placeholder-white/40"
                        value={message}
                        onChange={(e) => dispatch({ type: 'message', value: e.target.value })}
                        required
                      />
                    </label>
                  </div>
                </div>
                
                <div className="flex flex-col md:flex-row items-center justify-between gap-4">
                  {showFormErr && (
                    <p className="text-red-400 text-sm">Please fill in all fields to send a message</p>
                  )}
                  <button 
                    type="submit"
                    className="w-full md:w-auto px-8 py-3 bg-accent/20 text-white rounded-lg hover:bg-accent/50 transition-colors duration-300 font-medium"
                  >
                    Send Message
                  </button>
                </div>
              </form>
            </div>
          ) : (
            <div className="bg-[#232329] rounded-xl p-8 text-center">
              <h3 className="text-2xl font-bold text-accent mb-4">{formSubmitted.title}</h3>
              <p className="text-white/70">{formSubmitted.paragraph}</p>
            </div>
          )}
        </div>
      </div>
    </motion.div>
  );
}