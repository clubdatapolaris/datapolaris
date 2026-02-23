import { motion } from "framer-motion";
import React from "react";
import PageTransition from "../components/PageTransition";
// import TeamMember from "../components/TeamMember";
import Card from "../components/ui/card";

const Team: React.FC = () => {
  const coreTeam = [
   {
      name: "Sudarshan Bhosale",
      role: "Head",
      branch:"",
      image: "/images/team images/Sudarshan Bhosale.jpg",
      github: "https://github.com/Sidz77",
      linkedin: "https://www.linkedin.com/in/sudarshan-bhosale-2356a428a/",
      imageStyle: { objectPosition: 'center 0px' } 
    },
    {
      name: "Sayali Jadhav",
      role: "Co-Head",
      branch:"",
      image: "/images/team images/Sayali Jadhav.jpeg",
      github: "https://github.com",
      linkedin: "https://www.linkedin.com/in/sayali-jadhav-b4263827b?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
      
    },
  ];

  const teamMembers = [
  
    {
      name: "Nilesh Patil",
      role: "",
      image: "/images/team images/Nilesh Patil.jpeg",
      github: "https://github.com/NileshPatil24-a",
      linkedin: "www.linkedin.com/in/nilesh-patil-a3818b329",
      imageStyle: { objectPosition: 'center -10px' } 
    },
    {
      name: "Ashna Pinjari",
      role: "",
      image: "/images/team images/Ashna Pinjari.jpeg",
      github: "https://github.com/ashhgit45",
      linkedin: "https://www.linkedin.com/in/ashna-pinjari-b067942a0",
   
    },
    {
      name: "Riya Deshmukh",
      role: "",
      image: "/images/team images/Riya Deshmukh.jpeg",
      github: "https://github.com/Rhea-droid",
      linkedin: "https://www.linkedin.com/in/riya-deshmukh-557b182b8?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
      
    },
    {
      name: "Paresh Mahirrao",
      role: "",
      image: "/images/team images/Paresh Mahirrao.jpeg",
      github: "https://github.com",
      linkedin: "https://www.linkedin.com/in/paresh-mahirrao-389825250?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
       
    },
    {
      name: "Tanisha Badgujar",
      role: "",
      image: "/images/team images/Tanisha.png",
      github: "https://github.com/Tanisha1604",
      linkedin: "https://www.linkedin.com/in/tanisha-badgujar-00b251299",
  
    },
    {
      name: "Digvijaysing Rajput",
      role: "",
      image: "/images/team images/DigvijaySingh Rajput.jpeg",
      github: "https://github.com/digvijay1129",
      linkedin: "https://www.linkedin.com/in/digvijaysing-rajput-287b46351?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
     imageStyle: { objectPosition: 'center 0px' } 
        
    },
    
    {
      name: "Disha Nikumbh",
      role: "",
      image: "/images/team images/Disha Nikum.jpeg",
      github: "https://github.com/dishanikumbh06",
      linkedin: "https://www.linkedin.com/in/disha-rajendra-nikumbh-9873bb290?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
  
    },
    {
      name: "Pranav Sutar",
      role: "",
      image: "/images/team images/Pranav Sutar.jpeg",
      github: "https://github.com/pranav1217",
      linkedin: "https://www.linkedin.com/in/pranav-sutar-0358642b2?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
      
    },
  
    {
      name: "Parag Nikum",
      role: "",
      image: "/images/team images/Parag Nikum.jpeg",
      github: "https://github.com/Parag-Nikum",
      linkedin: "https://www.linkedin.com/in/parag-nikum-a371aa294?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
      imageStyle: { objectPosition: 'center 0px' } 
    },
    {
      name: "Bhavya Chauhan",
      role: "",
      image: "/images/team images/Bhavya Chauhan.jpg",
      github: "https://github.com/BeingBhavya",
      linkedin: "https://www.linkedin.com/in/bhavya-chauhan-50b98133a/",
    },
     {
      name: "Paragi Patil",
      role: "",
      image: "/images/team images/Paragi Patil.jpg",
      github: "https://github.com/paragi2005",
      linkedin: "https://www.linkedin.com/in/paragi-patil-aab83b2bb",
       imageStyle: { objectPosition: 'center 0px' } 
    },
    {
      name: "Pushpraj Patil",
      role: "",
      image: "/images/team images/Pushpraj Patil.jpeg",
      github: "https://github.com/pushpraj135/pushpa",
      linkedin: "http://www.linkedin.com/in/pushpraj-patil-8631a528a",
      
    },
     {
      name: "Vedant Badgujar",
      role: "",
      image: "/images/team images/Vedant Badgujar.jpeg",
      github: "https://github.com/satorucommit",
      linkedin: "https://in.linkedin.com/in/vedant-badgujar-a546bb298",
     
    },
    {
      name: "Amar Lajge",
      role: "",
      image: "/images/team images/Amar Lajge.jpeg",
      github: "https://github.com/Alajge18",
      linkedin: "https://www.linkedin.com/in/amar-lajge-504ba432a?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
     imageStyle: { objectPosition: 'center 0px' } 
    },
    {
      name: "Aadesh Khairnar",
      role: "",
      image: "/images/team images/Aadesh Khairnar.jpeg",
      github: "https://github.com/khairnaraadesh1-droid",
      linkedin: "https://www.linkedin.com/in/aadesh-khairnar-1392a832a?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
       imageStyle: { objectPosition: 'center 0px' } 
    },
     {
      name: "Sakshi Shimpi",
      role: "",
      image: "/images/team images/Sakshi Shimpi.jpeg",
      github: "https://github.com/sakshishimpi11",
      linkedin: "https://www.linkedin.com/in/sakshi-shimpi-422318338/",

    },
    {
      name: "Devansh Chaudhari",
      role: "",
      image: "/images/team images/Devansh Chaudhari.jpeg",
      github: "https://github.com/devansh13-tech",
      linkedin: "https://www.linkedin.com/in/devansh-chaudhari-33a360247",    
    },
     {
      name: "Pranav Chaudhari",
      role: "",
      image: "/images/team images/Pranav Chaudhari.jpeg",
      github: "https://github.com/Pranav-Chaudhari07",
      linkedin: "https://www.linkedin.com/in/pranav-chaudhari-78203a298=android_app",
      
    },
    {
      name: "Amey Sangpal",
      role: "",
      image: "/images/team images/Amey Sangpal.jpeg",
      github: "https://github.com/ameysangpal110",
      linkedin: "https://www.linkedin.com/in/amey-sangpal-53b102325/",
       
    },
    {
      name: "Tejas Zalte",
      role: "",
      image: "/images/team images/Tejas Zalte.jpeg",
      github: "https://github.com/TejasZalte",
      linkedin: "https://www.linkedin.com/in/tejas-zalte-9a7b8b32b?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
      
    },
     {
      name: "Sanket Patil",
      role: "",
      image: "/images/team images/Sanket Patil.jpeg",
      github: "https://github.com/sankettpatill",
      linkedin: "https://linkedin.com/in/sanket-patil-231b69334",
     
    },
    {
      name: "Mohit  Patil",
      role: "",
      image: "/images/team images/Mohit Patil.jpeg",
      github: "https://github.com/Mohitpatil712",
      linkedin: "https://www.linkedin.com/in/mohit-patil-4b191b358?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app",
   
    },
     {
      name: "Chaitali Borse",
      role: "",
      image: "/images/team images/Chaitali Borse.jpeg",
      github: "https://github.com",
      linkedin: "https://www.linkedin.com/in/chaitali-borse-4b3877330?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
    imageStyle: { objectPosition: 'center 0px' } 
    },
    {
      name: "Rutuja Deshmukh",
      role: "",
      image: "/images/team images/Rutuja Deshmukh.jpeg",
      github: "https://github.com/RutujaDeshmukh427",
      linkedin: "https://www.linkedin.com/in/rutuja-deshmukh-59a351327",
     
    },
    {
      name: "Pushpak Mali",
      role: "",
      image: "/images/team images/Pushpak Mali.jpeg",
      github: "https://github.com/pushpakmali-21",
      linkedin: "https://www.linkedin.com/in/pushpak-mali-b51b11336",
       
    },
     {
      name: "Om Patil",
      role: "",
      image: "/images/team images/Om Patil.jpeg",
      github: "https://github.com/omdipakpatil7",
      linkedin: "https://www.linkedin.com/in/om-pawar=05428330",
      
    },
    {
      name: "Yashpal Girase",
      role: "",
      image: "/images/team images/Yashpal Girase.jpeg",
      github: "https://github.com/yashpalgirase122",
      linkedin: "https://www.linkedin.com/in/yashpal-girase-639b4332b",
       
    },
  ];

  return (
    <PageTransition>
      <main className="pt-24 pb-16">
        {/* Header */}
        <section className="relative py-16 md:py-24 overflow-hidden">
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1605810230434-7631ac76ec81')] bg-cover bg-center bg-no-repeat opacity-10"></div>
          <div className="absolute inset-0 bg-gradient-to-b from-club-dark via-club-dark/95 to-club-dark"></div>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="text-center max-w-3xl mx-auto">
              <motion.h1
                className="text-4xl md:text-5xl font-bold text-white mb-6 font-display"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                Our <span className="text-orange-500">Team</span>
              </motion.h1>
              <motion.p className="text-lg text-white/80" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.1 }}>
                Meet the passionate individuals who make our club what it is.
              </motion.p>
            </div>
          </div>
        </section>

        {/* Core Team */} 
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-orange-500 mb-12 text-center font-display">Leadership</h2>
            <div className="flex flex-wrap justify-center gap-10 md:gap-20">
              {coreTeam.map((member, index) => (
                <Card key={index} {...member} />
              ))}
            </div>
          </div>
        </section>

        {/* Team Members */}
        <section className="py-16 bg-black/20 backdrop-blur-sm">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-white mb-6 text-center font-display">Team Members</h2>
            <div className="flex flex-wrap justify-center gap-16">
              {teamMembers.map((member, index) => (
                <div key={index} className="w-64">
                  <Card {...member} />
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
    </PageTransition>
  );
};

export default Team;
