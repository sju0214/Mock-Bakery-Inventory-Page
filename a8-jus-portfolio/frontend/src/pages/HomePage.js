function HomePage() {
    return (
       <>
        <h2>Seongyeong's Web Development Porfolio</h2> 
            <article id="goals">
                <h3>Career Goals</h3>
                <p>Earlier this year, I decided to pursue a second bachleor degree in Computer Science. I have a background in nursing, and my career goal 
                    is to combine my nursing skills and knowledge with computer science in order to develop advancements in healthcare technologies. I hope 
                    to work alongside healthcare teams in the future to improve the industry with technology, such as improving the electronic health record systems,
                    telehealth care, or developing software programs for hospital use. 
                </p>
                <p>
                <dl>
                    <dt><strong>HTML</strong></dt>
                    <dd>HTML stands for HyperText Markup Language. HTML documents can link to one another, and it is 
                        used to create and describe webpages. HTML documents structure their content by using elements and tags to
                        specify the different parts of the document. It organizes the document into headings, links, images,
                        paragraphs, articles, and more. It is usually paired with a stylesheet, such as CSS for visualization
                        and Javascript for users to be able to interact with it. 
                        <br></br>
                        <br></br>
                        This website uses the structure of HTML documents to organize how the content is presented. The headings,
                        paragraphs, articles, images, and even this list is structured using HTML elements. 
                    </dd>
                    <dt><strong>CSS</strong></dt>
                    <dd>CSS stands for Cascading Style Sheets. Using CSS can change the way that the HTML elements look and 
                        behave to improve usability, readability, and legibility for users. It can also be used to adhere to 
                        certain brand requirements and specific aesthetics. It overrides the predefined HTML style and can change
                        anything from colors, fonts, spacing, and the layout of the elements. 
                        <br></br>
                        <br></br>
                        This website uses a CSS stylesheet for all the visual components that you see, from the color of the font to 
                        the beach background picture used. It also styled the table used in the baked goods inventory page, as well
                        as the organization in which the written paragraphs were presented.
                    </dd>
                    <dt><strong>Javascript</strong></dt>
                    <dd>Javascript is a programming language that can be used in various ways. It can be used to run in programs, browsers, 
                        browser consoles, or Node. It is a commonly used language to write client-side code and server-side programming for 
                        web applications.
                        <br></br>
                        <br></br>
                        A significant portion of this website has been coded in Javascript. It has been used to map out all the components and pages
                        so that it connects to the backend to create a performant and usable web app. Many of the Javascript libraries and features, such as React, 
                        Mongoose, asynchronous programming, and more, has been used to create this webpage as you see it now. 
                    </dd>
                    <dt><strong>Node</strong></dt>
                    <dd>Node is a runtime environment that is used in Javascript to create and run server-side web applications. Node is event-driven and non-blocking, 
                        and it helps create a scalable, dynamic webpage. It comes with the Node Package Manager (npm) to install modules that aid in methods and creating the applications.
                        <br></br>
                        <br></br>
                        This website uses Node to run the server side of the webpage. Both the frontend and backend installed the npm packages with open source packages 
                        that have already been developed and tested. 
                    </dd>
                    <dt><strong>Express</strong></dt>
                    <dd>Express is a web application framework that is used to help build within Node. Express gives you the ability to manipulate data, define routes, create templates to build
                        responses, and handle requests using the middleware. 
                        <br></br>
                        <br></br>
                        This website uses Express to handle routes, provide middleware, and provide structure within the Node environment. It creates routing between the 
                        different pages on the webpage, and it has been used in the backend portion of this web application to access the request and response objects. 
                    </dd>
                    <dt><strong>React</strong></dt>
                    <dd>React is a framework that is written in Javascript to create a component tree from the components in the app. It builds
                        interactive user interface (UI) components using the Javascript library and the additional React syntax. 
                        It is used to write frontend applications and maps out the components to the DOM tree. React applications modify
                        the component rather than the DOM tree and regularly update the tree so that it minimizes the rendering in a browser.
                        <br></br>
                        <br></br>
                        This website uses React to have the home page, topics page, and baked goods components interact with one another and 
                        within themselves. It mapped them out across a DOM tree so that the website usage is fluid and interactive for the users. 
                    </dd>
                    <dt><strong>REST</strong></dt>
                    <dd>REST stands for Representational State Transfer, and it is a widely used architectural style that implements web services
                        following REST guidelines. It performs CRUD (create, read, update, and delete) operations on resources using HTTP methods,
                        and it gives guidelines on the structure and behavior of web services. REST APIs can retrieve, request, and send data
                        to and from a server. 
                        <br></br>
                        <br></br>
                        This website uses the REST API as a guideline to perform CRUD operations on the baked goods page. It can request changes in the
                        data and send it back to the server to be updated. 
                    </dd>
                    <dt><strong>Mongoose</strong></dt>
                    <dd>Mongoose is a Javascript library that acts as a connecting layer between the data in the database and the objects in a Node app.
                        It structures an app into layers to organize the code using the MVC pattern. The Model-View-Controller pattern divides the code
                        for easier maintenance and all work collaboratively together to put together the app. Mongoose is an object-document mapper that 
                        connects the objects in the Javascript code and the documents in the database (such as MongoDB).
                        <br></br>
                        <br></br>
                        This website uses Mongoose in the backend application, and it contains a controller and model page to divide the code into different
                        layers. It then maps out the data to MongoDB database. 
                    </dd>
                    <dt><strong>Asynchronous Programming</strong></dt>
                    <dd>Asynchronous programming is a feature of Javascript that helps build scalable, performant web applications. Asynchronous 
                        programming is non-blocking, and it allows asynchronous tasks to start while the program moves onto the next task. This allows
                        the webpage to remain responsive when the tasks are being called. 
                        <br></br>
                        <br></br>
                        This website uses asynchronous programming to run smoothly and efficiently. Because we are using Javascript to render the webpages, 
                        asynchronous programming allows users to see many components and perform operations in a timely manner. Many tasks, such as image
                        processing and HTTP requests, can be done while the user moves across the webpage without worrying about a blocked program at each component
                        while the user moves across the webpage.
                    </dd>
                </dl>
                </p>
            </article>  
</>
    );
}
export default HomePage;