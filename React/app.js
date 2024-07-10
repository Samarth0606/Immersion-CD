// let root = document.getElementById('root');

// let h1 = document.createElement('h1');
// h1.setAttribute('id' , 'sam');
// h1.innerText = "hi ia m h1 made with dom";

// root.appendChild(h1);

// ---------------------

// let root = document.getElementById('root');

// // let h1 = React.createElement('h1' , null , 'hello from h1 in react')
// // let h1 = React.createElement('h1' , {id:"sam"} , 'hello from h1 in react');

// let h1 = React.createElement('h1' , {id:"sam"} , React.createElement('p' , null , 'hi i am a a para') );

// let rootEl = ReactDOM.createRoot(root);
// rootEl.render(h1)

// ---------------------

let root = document.getElementById('root');

// JSX syntax
let h1 = <h1>
            <p>hello p from jsx</p>
        </h1>

let rootEl = ReactDOM.createRoot(root);
rootEl.render(h1)









