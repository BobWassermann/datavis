const css = require('./app.scss');
import axios from 'axios'

// GET JSON FILES
function getJSON(data, element) {
  axios.get(data)
    .then((resolve) => {
      console.log(resolve.data)

      let content

      resolve.data.map((item) =>
        content += 
        `<p class=`${item.Country.replace(' ', '_')}`>
          Land: ${item.Country}, Jaar: ${item.Year}
        </p>`
      )

      element.innerHTML = content;
    })
}

function navHandling() {
  const nav = document.querySelector('#nav-all')
  nav.addEventListener('click', (e) => {
    switch(e.target.id) {
      case 'nav-drug':
        
        break;
 
      case 'nav-ats':
        getJSON('./data/content_druguse.json', document.querySelector('#content'))
        break;

      case 'nav-cocaine':
        // code
        break;

      case 'nav-heroin':
        break;
        // code
      default:
        console.error('Nothing clicked')
    }
  })
}


navHandling()
