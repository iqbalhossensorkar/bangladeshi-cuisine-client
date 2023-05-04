import React from 'react';
import Pdf from "react-to-pdf";

const ref = React.createRef();

const Blog = () => {
    return (

        <div className='container mx-auto'>
            <Pdf targetRef={ref} filename="code-example.pdf">
                {({ toPdf }) => <button className='btn' onClick={toPdf}>Export as PDF</button>}
            </Pdf>
            <div ref={ref}>
                <h2 className='text-center text-5xl font-bold underline'>Blog Page</h2>
                <blockquote className='p-10 mb-20'>
                    <h2 className='text-2xl font font-semibold mt-4 mb-3'>Tell us the differences between uncontrolled and controlled components?</h2>
                    <p className='my-3'>In React, controlled components refer to components that have their state and behavior controlled by the parent component. These components rely on props passed down from the parent component to update their state and behavior. Uncontrolled components refer to components that manage their own state internally.</p>
                    <p className='my-3'>In controlled components, the parent component is responsible for managing the state and passing it down as props to the controlled component. This makes it easy to track the state of the component and predict how it will behave. However, in larger projects with many levels of nested components, this can make the code more complex and harder to manage. <br />
                        On the other hand, uncontrolled components manage their own state using a ref to access the DOM element's current value and update the state accordingly. This makes them simpler to implement, but they can be more difficult to track and manage in larger projects.</p>
                    <h2 className='text-2xl font font-semibold mt-4 mb-3'>How to validate React props using PropTypes?</h2>
                    <p className="my-3">Props and PropTypes are important mechanisms for passing read-only attributes between React components.</p>
                    <p className="my-3">We can use React props, short for properties, to send data from one component to another. If a component receives the wrong type of props, it can cause bugs and unexpected errors in your app.</p>
                    <p className='my-3'>Since JavaScript doesn’t have a built-in type checking solution, many developers use extensions like TypeScript and Flow. However, React has an internal mechanism for props validation called PropTypes. In this article, we’ll learn how to validate props with React PropTypes.</p>
                    <p className="my-3">When developing a React application, you’ll need to structure and define your props to avoid bugs and errors. Just like a function might have mandatory arguments, a React component might require a prop to be defined, otherwise, it will not render properly. Forgetting to pass a required prop into a component that needs it could cause your app to behave unexpectedly.</p>
                    <h2 className='text-2xl font font-semibold mt-4 mb-3'>Tell us the difference between nodejs and express js?</h2>
                    <p className="my-3">Node.js and Express.js are both technologies that are used to build web applications using JavaScript, but they have different roles and functionalities.</p>
                    <h3 className='font-bold'>NodeJs</h3>
                    <p className="my-3">Node.js is a runtime environment that allows developers to run JavaScript on the server-side. It provides an environment for executing JavaScript code outside of a browser, enabling developers to use JavaScript to write server-side applications. Node.js has a number of built-in modules that make it easy to build scalable network applications.</p>
                    <h3 className='font-bold'>ExpressJs</h3>
                    <p className="my-3">Express.js, on the other hand, is a web framework built on top of Node.js. It provides a set of tools and features for building web applications and APIs, such as routing, middleware, and templating. Express.js makes it easier for developers to create web applications by providing a more structured and organized approach to building web applications.</p>
                    <h2 className='text-2xl font font-semibold mt-4 mb-3'>What is a custom hook, and why will you create a custom hook?</h2>
                    <p className="my-3">Custom React JS hooks offer reusability as when a custom hook is created, it can be reused easily, which makes the code cleaner and reduces the time to write the code. It also enhances the rendering speed of the code as a custom hook does not need to be rendered again and again while rendering the whole code.</p>
                    <p className="my-3">Instead of using High-Order Components (HOCs), one can use custom hooks to improve the readability of the code. Complex codes can become hard to read if layers of providers surround the components, consumers, HOCs, render props, and other abstractions, generally known as wrapper hell.On the other hand, using custom React JS hooks can provide a cleaner logic and a better way to understand the relationship between data and the component.</p>
                </blockquote>
            </div>
        </div>
    );
};

export default Blog;