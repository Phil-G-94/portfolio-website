// import './style.css'
// import javascriptLogo from './javascript.svg'
// import viteLogo from '/vite.svg'
// import { setupCounter } from './counter.js'

// document.querySelector('#app').innerHTML = `
//   <div>
//     <a href="https://vitejs.dev" target="_blank">
//       <img src="${viteLogo}" class="logo" alt="Vite logo" />
//     </a>
//     <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank">
//       <img src="${javascriptLogo}" class="logo vanilla" alt="JavaScript logo" />
//     </a>
//     <h1>Hello Vite!</h1>
//     <div class="card">
//       <button id="counter" type="button"></button>
//     </div>
//     <p class="read-the-docs">
//       Click on the Vite logo to learn more
//     </p>
//   </div>
// `

// setupCounter(document.querySelector('#counter'))

import "./style.css";

document.querySelector("#app").innerHTML = `
    <div>
        <header>
            <nav>
                <ul>
                    <a href="">About</a>
                </ul>
                <ul>
                    <a href="">Projects</a>
                </ul>
                <ul>
                    <a href="">Contact</a>
                </ul>
            </nav>
        </header>
      
        <p>
            Hello, my name is Phil Georgiou.
            <hr>
            The old dirty bastard, straight from the Brooklyn Zoo.
            <hr>
        </p>

        <div>
            <ul class="contact">
                <li id="linkedin">
                    <a
                        href="https://www.linkedin.com/in/phil-georgiou/"
                        target="_blank"
                    >
                        linkedin
                    </a>
                </li>
                <li id="github">
                    <a
                        href="https://github.com/Phil-G-94"
                        target="_blank"
                    >
                        github
                    </a>
                </li>
            </ul>
        </div>
    </div>

`;
