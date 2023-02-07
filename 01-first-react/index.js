// // React Render
// ReactDOM.render(<h2>Hello, React.</h2>, document.getElementById("root"))

// ReactDOM.render(
//     <ul><li>Thing 1</li><li>Thing 2</li></ul>, 
//     document.getElementById("list")
// ) 


// // imperative way
// const h1 = document.createElement("h1")
// h1.textContent = "This is an imperative way to program."
// h1.className = "header"
// document.getElementById("root").append(h1)

// JSX

const element = <h1 className="header">This is JSX</h1>
/*
{
    "type": "h1",
    "key": null,
    "ref": null,
    "props": {
        "className": "header",
        "children": "This is JSX"
    },
    "_owner": null,
    "_store": {}
}
*/
console.log(element)
ReactDOM.render(element, document.getElementById("root"))

/* 
Challenge: 

Create a navbar in JSX:
    - Use the semantic `nav` element as the parent wrapper
    - Have an h1 element with the brand name of your "website"
    - Insert an unordered list for the other nav elements
        - Inside the `ul`, have three `li`s for "Pricing",
        "About", and "Contact"
    - Don't worry about styling yet - it'll just be plain-looking HTML for now
*/

const navbar = (
    <nav>
        <h1>imelolee's website</h1>
        <ul>
            <li>Archives</li>
            <li>Tags</li>
            <li>Infos</li>
        </ul>
    </nav>
)

ReactDOM.render(navbar, document.getElementById("root"))
