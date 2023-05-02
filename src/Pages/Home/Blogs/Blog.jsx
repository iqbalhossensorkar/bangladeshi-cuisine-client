import React from 'react';

const Blog = () => {
    return (
        <div className='container mx-auto'>
            <h2 className='text-center text-5xl font-bold'>THis is blog page</h2>
            <blockquote className='p-10'>
                <h2>Tell us the differences between uncontrolled and controlled components.</h2>
                <h2>How to validate React props using PropTypes</h2>
                <h2>Tell us the difference between nodejs and express js.</h2>
                <h2>What is a custom hook, and why will you create a custom hook?</h2>
            </blockquote>
        </div>
    );
};

export default Blog;