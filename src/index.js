'use strict';
import _ from 'lodash';

 document.write('<h2 style="color:green">Webpack lerning lesson.All right!</h2>'+'<h3>Hello from src/index.js</h3>');
 console.log('Webpack lerning lesson.All right!')

 function component() {
    var element = document.createElement('div');
  
    // Lodash, currently included via a script, is required for this line to work
    element.innerHTML = _.join(['Hello', 'webpack','-with','lodash'], ' ');
    element.style="color:darkred;"
    // element.innerHTML = 'Hello webpack! - without loash';
    
    return element;
  }
  
  document.body.appendChild(component());
  