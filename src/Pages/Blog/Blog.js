import React from 'react';

const Blog = () => {

    return (

        <div className='container mx-auto px-4'>

            <h1 className='text-4xl mb-6'>Featured Blogs</h1>


            <div className="collapse">
                <input type="checkbox" className="peer" />
                <div className="collapse-title bg-info text-primary-content peer-checked:bg-base-300 peer-checked:text-accent-content">
                    <strong>Q-1. Difference between SQL and NoSQL?</strong>
                </div>
                <div className="collapse-content bg-info text-primary-content peer-checked:bg-base-300 peer-checked:text-accent-content">
                    <p><strong> <i>Answer:</i></strong>&nbsp;&nbsp;</p>
                    <p class="text-justify">
                        SQL is the programming language used to interface with relational databases. (Relational databases model data as records in rows and tables with logical links between them). NoSQL is a class of DBMs that are non-relational and generally do not use SQL.
                        <br />
                        SQL databases are table-based on the other hand NoSQL databases are either key-value pairs, document-based, graph databases or wide-column stores.
                        <br />
                        In almost all situations SQL databases are vertically scalable. This means that you can increase the load on a single server by increasing things like RAM, CPU or SSD. But on the other hand NoSQL databases are horizontally scalable.
                    </p>
                </div>
            </div>
            <br />
            <div className="collapse">
                <input type="checkbox" className="peer" />
                <div className="collapse-title bg-info text-primary-content peer-checked:bg-base-300 peer-checked:text-accent-content">
                    <strong>Q-2. What is JWT, and how does it work?</strong>
                </div>
                <div className="collapse-content bg-info text-primary-content peer-checked:bg-base-300 peer-checked:text-accent-content">
                    <p><strong> <i>Answer:</i></strong>&nbsp;&nbsp;</p>
                    <p class="text-justify">
                        JSON Web Token (JWT) is an open standard (RFC 7519) for securely transmitting information between parties as JSON object. It is compact, readable and digitally signed using a private key/ or a public key pair by the Identity Provider(IdP).
                        <br />
                        The purpose of using JWT is not to hide data but to ensure the authenticity of the data. JWT is signed and encoded, not encrypted.

                        JWT is a token based stateless authentication mechanism. Since it is a client-side based stateless session, server doesn't have to completely rely on a datastore(database) to save session information.
                        <br />
                        Basically the identity provider(IdP) generates a JWT certifying user identity and Resource server decodes and verifies the authenticity of the token using secret salt / public key.
                        1. User sign-in using username and password or google/facebook. <br />
                        2. Authentication server verifies the credentials and issues a jwt signed using either a secret salt or a private key. <br />
                        3. User's Client uses the JWT to access protected resources by passing the JWT in HTTP Authorization header. <br />
                        Resource server then verifies the authenticity of the token using the secret salt/ public key.
                    </p>
                </div>
            </div>

            <br />

            <div className="collapse">
                <input type="checkbox" className="peer" />
                <div className="collapse-title bg-info text-primary-content peer-checked:bg-base-300 peer-checked:text-accent-content">
                    <strong>Q-3. What is the difference between javascript and NodeJS?</strong>
                </div>
                <div className="collapse-content bg-info text-primary-content peer-checked:bg-base-300 peer-checked:text-accent-content">
                    <p><strong> <i>Answer:</i></strong>&nbsp;&nbsp;</p>
                    <p class="text-justify">
                        JavaScript is a simple programming language that can be used with any browser that has the JavaScript Engine installed. Node. js, on the other hand, is an interpreter or execution environment for the JavaScript programming language.
                        <br />
                        JavaScript is a lightweight, cross-platform, interpreted scripting programming language that is primarily used for client-side scripting. It's built into both Java and HTML. On the other hand, Node.js is a server-side scripting language based on the Google Chrome V8 engine. As a result, it's used to build network-centric applications. It is a distributed system that is used for data-intensive real-time applications.
                        <br />
                        A particular non-blocking task is needed to access any operating system. There are some basic objects in JavaScript, but they are all os-specific. For example, ActiveX Control is a Windows-only application. However, Node.js is granted the ability to run non-blocking tasks unique to the operating system from any JavaScript programming. There are no os-specific constants in it. Node.js is well-versed in creating a clear binding with the file system, allowing the developer to read and write to disk.
                        <br />
                        JavaScript can run on any engine, including Firefox's Spider Monkey, Safari's JavaScript Core, and V8 (Google Chrome). As a result, JavaScript programming is very simple to create, and any running environment is equivalent to a proper browser. On the other hand, Node.js only supports the V8 engine, which is exclusive to Google Chrome. However, written JavaScript code can run in any environment, regardless of whether it supports the V8 engine.
                    </p>
                </div>
            </div>

            <br />

            <div className="collapse">
                <input type="checkbox" className="peer" />
                <div className="collapse-title bg-info text-primary-content peer-checked:bg-base-300 peer-checked:text-accent-content">
                    <strong>Q-4. How does NodeJS handle multiple requests at the same time?</strong>
                </div>
                <div className="collapse-content bg-info text-primary-content peer-checked:bg-base-300 peer-checked:text-accent-content">
                    <p><strong> <i>Answer:</i></strong>&nbsp;&nbsp;</p>
                    <p class="text-justify">
                        NodeJS receives multiple client requests and places them into EventQueue. NodeJS is built with the concept of event-driven architecture. NodeJS has its own EventLoop which is an infinite loop that receives requests and processes them. EventLoop is the listener for the EventQueue.
                        <br />
                        If NodeJS can process the request without I/O blocking then the event loop would itself process the request and sends the response back to the client by itself. But, it is possible to process multiple requests parallelly using the NodeJS cluster module or worker_threads module.

                    </p>
                </div>
            </div>


        </div>
    );
};

export default Blog;