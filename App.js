const h1 = React.createElement("h1", { id: "heading",className:"mainHeading"}, "Hello World react from app.js!!");
//create element --> create a js object 
var root = ReactDOM.createRoot(document.getElementById("root"));
// render --> create h1 tag using this js object 
root.render(h1);
console.log(root);
/**create nested elements
 * <div id="parent">
 * <div id="child1">
 * <h1>h1 from child1</h1>
 * <h2>h2 from child1</h2>
 * </div>
 * <div id="child2">
 * <h1>h1 from child2</h1>
 * </div>
 * </div>
 * 
 */

const parent=React.createElement("div",{id:"parent"},
    [
      React.createElement("div",{id:"child1"},
         [React.createElement("h1",{},"h1 from child1 App.js"),React.createElement("h2",{},"h2 from child1")])
     ,React.createElement("div",{id:"child2"},React.createElement("h1",{},"h1 from child2"))
    ])


    // JSX
    const jsxHeading=(
        <h1 className="heading">
            Namastey React from jsx
        </h1>
    )
    root.render(jsxHeading);    

    //functional component
 
    const SubFunctionalComponent=()=>(
        <h1 className="heading">
        Namastey React from sub functional component
        </h1>
    )

    const number=10;

    const FunctionalComponent=()=>(
        <div>
            {/* inject any js code in {} braces */}
            {number}
            {jsxHeading}
        <h1 className="heading">
            Namastey React from functional component
        </h1>
        <SubFunctionalComponent/>
        {SubFunctionalComponent()}
        </div>
    )
    root.render(<FunctionalComponent/>);

