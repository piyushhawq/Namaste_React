// import React, { useRef } from 'react';
// import emailjs from '@emailjs/browser';
// import { toast } from 'react-toastify';

// function ContactUs() {
//   const form = useRef();

//   const sendEmail = (e) => {
//     e.preventDefault();

//     emailjs
//       .sendForm('service_gchnkqe', 'template_5gh317p', form.current, {
//         publicKey: 'XvwGDaHAt1GR1MTjG',
//       })
//       .then(
//         () => {
//             alert("Your email has been sent successfully!")
//             toast.success("Your email has been sent successfully!",{
//               position:"bottom-right"
//               });
//         },
//         (error) => {
//             alert("Sorry, there was an error sending your email. Please try again later")
//           toast.error('Sorry, there was an error sending your email. Please try again later.',{
//             position:"bottom-right"
//             });
//         },
//       );
//   };




//   return (
    
//     <div className="contact-body">
//     <div className="background">
//       <div className="container">
//         <div className="screen">
//           <div className="screen-header">
//             <div className="screen-header-left">
//               <div className="screen-header-button close"></div>
//               <div className="screen-header-button maximize"></div>
//               <div className="screen-header-button minimize"></div>
//             </div>
//             <div className="screen-header-right">
//               <div className="screen-header-ellipsis"></div>
//               <div className="screen-header-ellipsis"></div>
//               <div className="screen-header-ellipsis"></div>
//             </div>
//           </div>
//           <div className="screen-body">
//             <div className="screen-body-item left">
//               <div className="app-title">
//                 <span>CONTACT</span>
//                 <span>US</span>
//               </div>
//               <div className="app-contact">Mail: piyush.cv1999@gmail.com</div>
//             </div>
//             <div className="screen-body-item">
//               <div className="app-form">
//               <form ref={form} onSubmit={sendEmail}>
//                 <div className="app-form-group">
//                   <input type='text' name="user_name" className="app-form-control" placeholder="NAME"/>
//                 </div>
//                 <div className="app-form-group">
//                   <input  type='email' name="user_email" className="app-form-control" placeholder="EMAIL" />
//                 </div>
//                 {/* <div className="app-form-group">
//                   <input className="app-form-control" placeholder="CONTACT NO" />
//                 </div> */}
//                 <div className="app-form-group message">
//                   <input  type='text' name="message" className="app-form-control" placeholder="MESSAGE" />
//                 </div>
//                 <div className="app-form-group buttons">
//                   <button className="app-form-button" >SEND</button>
//                 </div>
//                 </form>
//               </div>
//             </div>
//           </div>
//         </div>
//         <div className="credits">
//           Connect with me
//           <a className="credits-link" href="https://twitter.com/yoursrijit" target="_blank">
//             <svg className="dribbble" viewBox="0 0 200 200">
//               <g stroke="#ffffff" fill="none">
//                 <circle cx="100" cy="100" r="90" strokeWidth="20"></circle>
//                 <path d="M62.737004,13.7923523 C105.08055,51.0454853 135.018754,126.906957 141.768278,182.963345" strokeWidth="20"></path>
//                 <path d="M10.3787186,87.7261455 C41.7092324,90.9577894 125.850356,86.5317271 163.474536,38.7920951" strokeWidth="20"></path>
//                 <path d="M41.3611549,163.928627 C62.9207607,117.659048 137.020642,86.7137169 189.041451,107.858103" strokeWidth="20"></path>
//               </g>
//             </svg>
//             Piyush Chaturvedi
//           </a>
//         </div>
//       </div>
//     </div>
//     </div>
//   );
// }

// export default ContactUs;


import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import { toast } from 'react-toastify';

function ContactUs() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_gchnkqe', 'template_5gh317p', form.current, {
        publicKey: 'XvwGDaHAt1GR1MTjG',
      })
      .then(
        () => {

            alert("Your email has been sent successfully!")
          toast.success("Your email has been sent successfully!",{
            position:"bottom-right"
          });
        },
        (error) => {
            alert("Sorry, there was an error sending your email. Please try again later")
          toast.error('Sorry, there was an error sending your email. Please try again later.',{
            position:"bottom-right"
          });
        },
      );
  };

  return (
    <div className="bg-gradient-to-r from-purple-400 to-blue-500 min-h-screen flex justify-center items-center">
      <div className="w-full max-w-md p-8 bg-white rounded-md shadow-md">
        <h2 className="text-2xl font-semibold text-center mb-4">Contact Us</h2>
        <form ref={form} onSubmit={sendEmail}>
          <div className="mb-4">
            <input type='text' name="user_name" className="w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:border-purple-400" placeholder="Name"/>
          </div>
          <div className="mb-4">
            <input type='email' name="user_email" className="w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:border-purple-400" placeholder="Email"/>
          </div>
          <div className="mb-4">
            <textarea name="message" className="w-full h-32 px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:border-purple-400" placeholder="Message"></textarea>
          </div>
          <div className="text-center">
            <button className="w-full px-4 py-2 bg-purple-500 text-white rounded-md hover:bg-purple-600 transition duration-300 ease-in-out">Send</button>
          </div>
        </form>
        <div className="mt-8 text-center">
          <p className="text-gray-600">Mail: piyush.cv1999@gmail.com</p>
        </div>
      </div>
    </div>
  );
}

export default ContactUs;
