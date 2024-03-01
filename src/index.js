// 1) Import the React and ReactDOM libraries
// 1) React ve ReactDOM kütüphanelerini içeri aktarın
import React from 'react';
import ReactDOM from 'react-dom/client';

// 2) Get a reference to the div with id 'root' in the index.html
// 2) index.html'deki id'si 'root' olan div'e bir referans alın
const el = document.getElementById('root');

// 3) Take React to take control of that element and render the App component
// 3) React'in o elemanı kontrol etmesini ve App bileşenini oluşturmasını sağlayın
const root = ReactDOM.createRoot(el);

// 4) Create a React component
// 4) Bir React bileşeni oluşturun
function App() {
  let message = 'Bye there!'; // 0.5 second later, this will be changed to 'Hi there!'
  if (Math.random() > 0.5) {
    message = 'Hi there!';
  }

  return <h1>{message}</h1>;
}

// 5) Show the component on the screen
// 5) Bileşeni ekranda gösterin
root.render(<App />);