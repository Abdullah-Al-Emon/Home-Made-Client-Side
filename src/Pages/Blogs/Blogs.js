import React from 'react';
import useTitle from '../../Hooks/useTitle';

const Blogs = () =>
{
    useTitle('Blogs')
    return (
        <div className="px-4 py-10 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl lg:pb-2- md:px-24 lg:px-8 lg:py-10">
            <div className="max-w-xl sm:mx-auto lg:max-w-2xl">
                <div className="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12">
                    <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold leading-none tracking-tight sm:text-4xl md:mx-auto">
                        This is Blog Site
                    </h2>
                </div>
            </div>
            <div className="max-w-screen-xl sm:mx-auto">
                <div className="grid grid-cols-1 gap-16 row-gap-8 lg:grid-cols-2">
                    <div className="space-y-6">
                        <div>
                            <p className="mb-4 text-xl font-medium">
                                What is the difference between javascript and Node JS?
                            </p>
                            <p className="">
                                JavaScript is a simple programming language that can be used with any browser
                                that has the JavaScript Engine installed. Node. js, on the other hand, is
                                an interpreter or execution environment for the JavaScript programming language.
                                <br />
                                <br />
                                To summarize, Node. js is a cross-platform JavaScript runtime environment
                                for servers and applications. It is built on a single-threaded, non-blocking
                                event loop, the Google Chrome V8 JavaScript engine, and a low-level I/O API.
                            </p>
                        </div>
                        <div>
                            <p className="mb-4 text-xl font-medium">
                                What is JWT, and how does it work?
                            </p>
                            <p className="">
                                JSON Web Token (JWT) is an open standard (RFC 7519) for securely
                                transmitting information between parties as JSON object. It is
                                compact, readable and digitally signed using a private key/ or a
                                public key pair by the Identity Provider(IdP). which means you
                                can be sure that the senders are who they say they are. Additionally,
                                the structure of a JWT allows you to verify that the content hasn't
                                been tampered with.
                            </p>
                        </div>
                        <div>
                            <p className="mb-4 text-xl font-medium">
                                How NodeJS handle multiple client requests?
                            </p>
                            <p className="">
                                NodeJS receives multiple client requests and places them into
                                EventQueue. NodeJS is built with the concept of event-driven
                                architecture. NodeJS has its own EventLoop which is an infinite
                                loop that receives requests and processes them.
                            </p>
                        </div>
                    </div>
                    <div className="space-y-6">
                        <div>
                            <p className="mb-4 text-xl font-medium">
                                Difference between SQL and NoSQL?
                            </p>
                            <p className="">
                                SQL databases are primarily called RDBMS or Relational Databases.
                                Structured query language (SQL).
                                SQL databases are table based databases.
                                SQL databases have a predefined schema.
                                Oracle, Postgres, MySQL, and MS-SQL.
                                <br />
                                <br />
                                NoSQL databases are primarily called as Non relational or distributed database.
                                No declarative query language.
                                NoSQL databases can be document based, key-value pairs, graph databases.
                                NoSQL databases use dynamic schema for unstructured data.
                                MongoDB, Redis, Neo4j, Cassandra, Hbase.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Blogs;