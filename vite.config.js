const { defineConfig } = require('vite')

module.exports = defineConfig({
  build: {
    rollupOptions: {
      input: {
        main: './index.html',
        contact: './contact.html',
        privacy: './privacy-policy.html',
        terms: './terms.html',
    
        
      }
    }
  }
})
