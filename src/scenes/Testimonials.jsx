// // import React from 'react'
// import LineGradient from '../components/LineGradient'
// import { motion } from 'framer-motion'

// const Testimonials = () => {
//     const testimonialsStyles = `mx-auto relative max-w-[400px] h-[350px] 
//     flex flex-col justify-end p-16 mt-48 before:absolute before:top-[-120px]
//     before:left-1/2 before:-ml-[110px]`;

//   return (
//     <section className='pt-32 pb-16' id='testimonials'>
        
//         {/* HEADING  */}
//         <motion.div 
//          className="md:w-1/3 text-center md:text-left"
//          initial="hidden " whileInView="visible" viewport={{once: true, amount:0.5}}
//          transition={{duration:0.5}} variants={{hidden:{opacity:0, x:-50},
//          visible:{opacity: 1, x:0},}}
//          >
//              <LineGradient width="w-2/5 mx-auto"/>
             
//              <p className="font-playfair font-semibold text-4xl mb-5 text-red">
//                  TESTIMONIALS 
//              </p>

//              <p className="mt-10 ">
//                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
//                  Aspernatur quos quam reprehenderit commodi veniam fuga eum.
//              </p>

//         </motion.div>

//         {/* TESTIMONIALS     */}
//         <div className='md:flex md:justify-between gap-8'> 
//           <motion.div 
//           className={`bg-blue ${testimonialsStyles} before:content-person1`}
//           initial="hidden " whileInView="visible" viewport={{once: true, amount:0.5}}
//           transition={{ duration:0.6}} variants={{hidden:{opacity:0, scale:0.8},
//           visible:{opacity: 1, scale:1},}}
//           >

//             <p className='font-playfair text-6xl'>"</p>
//             <p className='font-center text-xl'>Lorem ipsum dolor sit amet 
//             consectetur adipisicing elit.</p>
//           </motion.div>

          
//           <motion.div 
//           className={`bg-red ${testimonialsStyles} before:content-person2`}
//           initial="hidden " whileInView="visible" viewport={{once: true, amount:0.5}}
//           transition={{delay: 0.2, duration:0.5}} variants={{hidden:{opacity:0, scale:0.8},
//           visible:{opacity: 1, scale:1},}}
//           >

//             <p className='font-playfair text-6xl'>"</p>
//             <p className='font-center text-xl'>Lorem ipsum dolor sit amet 
//             consectetur adipisicing elit. Reiciendis dolores.</p>
//           </motion.div>

//           <motion.div 
//           className={`bg-yellow ${testimonialsStyles} before:content-person3`}
//           initial="hidden " whileInView="visible" viewport={{once: true, amount:0.5}}
//           transition={{delay: 0.4, duration:0.5}} variants={{hidden:{opacity:0, scale:0.8},
//           visible:{opacity: 1, scale:1},}}
//           >

//             <p className='font-playfair text-6xl'>"</p>
//             <p className='font-center text-xl'>Lorem ipsum dolor sit amet 
//             consectetur adipisicing elit.
//             </p>
//           </motion.div>
//         </div>
//     </section>
//   )
// }

// export default Testimonials; 


import LineGradient from "../components/LineGradient";
import { motion } from "framer-motion";

const Testimonials = () => {
  return (
    <section id="testimonials" className="pt-32 pb-16">
      {/* HEADING */}
      <motion.div
        className="md:w-1/3 text-center md:text-left"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.5 }}
        variants={{
          hidden: { opacity: 0, x: -50 },
          visible: { opacity: 1, x: 0 },
        }}
      >
        <p className="font-playfair font-semibold text-4xl mb-5 text-red">
          TESTIMONIALS
        </p>
        <LineGradient width="mx-auto w-2/5" />
        <p className="mt-10">
          Here's What People are Saying About My Work. Aliquam aliquet integer
          ut fames odio in at. At magna ornare dictum lectus.
        </p>
      </motion.div>

      {/* TESTIMONIALS */}
      <div className="md:flex md:justify-between gap-8">
        <motion.div
          className="mx-auto relative bg-blue max-w-[400px] h-[350px] flex flex-col justify-end p-16 mt-48
            before:absolute before:top-[-120px] before:-ml-[110px] before:left-1/2 before:content-person1"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6 }}
          variants={{
            hidden: { opacity: 0, scale: 0.8 },
            visible: { opacity: 1, scale: 1 },
          }}
        >
          <p className="font-playfair text-6xl">“</p>
          <p className="text-center text-xl">
            A auctor pharetra hendrerit mattis amet etiam interdum platea.
          </p>
        </motion.div>

        <motion.div
          className="mx-auto relative bg-red max-w-[400px] h-[350px] flex flex-col justify-end p-16 mt-48
            before:absolute before:top-[-120px] before:-ml-[110px] before:left-1/2 before:content-person2"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          variants={{
            hidden: { opacity: 0, scale: 0.8 },
            visible: { opacity: 1, scale: 1 },
          }}
        >
          <p className="font-playfair text-6xl">“</p>
          <p className="text-center text-xl">
            Aliquam aliquet integer ut fames odio in at. At magna ornare dictum
            lectus.
          </p>
        </motion.div>

        <motion.div
          className="mx-auto relative bg-yellow max-w-[400px] h-[350px] flex flex-col justify-end p-16 mt-48
            before:absolute before:top-[-120px] before:-ml-[110px] before:left-1/2 before:content-person3"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          variants={{
            hidden: { opacity: 0, scale: 0.8 },
            visible: { opacity: 1, scale: 1 },
          }}
        >
          <p className="font-playfair text-6xl">“</p>
          <p className="text-center text-xl">
            Fames odio in at. At magna ornare dictum lectus.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials;