/** @type {import('next').NextConfig} */

   


// next.config.js
// next.config.mjs
export default {
    images: {
        remotePatterns: [
          {
            protocol: 'https',
            hostname: '**', // Allows any domain
          },
        ],
      },
    
  };
  
  

  



