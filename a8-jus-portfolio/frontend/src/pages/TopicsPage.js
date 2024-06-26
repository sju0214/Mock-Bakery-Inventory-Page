function TopicsPage() {
    return (
       <>
        <h2>Web Development Concepts</h2> 
            <nav class="local">
                <a href="#server" >Web Servers</a>
                <a href="#frontend" >Frontend Design</a>
                <a href="#optimization" >Optimizing Images</a>
                <a href="#favicons" >Favicons</a>
                <a href="#cascade" >Cascading Stylesheets</a>
            </nav>
            <article id="server">
                <h3>Web Servers</h3>
                <p><strong>Index</strong>, in relation to websites and servers, means that it is the designated homepage on the web server. The index or homepage usually defaults to "index.html", but it can show up on other servers as "default.html", "index.js", or "index.php".</p>
                <p>The browser's <strong>Web Dev/Inspector </strong>network tab output screen shows the information and contents of the HTTP requests and contents. The network's header request/response inspector will show the page's status, method, IP, policy, language, cache instructions and browser version.
                    The difference between the local view of the file and the web server is that the response time varied, as did the cache.</p>
                <p>A status of 200 means that the <strong>HTTP request </strong>was processed successfully by the server and the response body received the necessary information. The <strong>favicon.ico </strong>file is a file containing an icon that represents the web browser on the tab. 
                    It has a status of 200 because it is always requested by default and the requested information has been found and processed successfully. The <strong>main.css</strong> and <strong>main.js</strong> files have a status of 404 because these files are not found or included in the page.</p>
                <p>The <strong>URL</strong> for this web file is "https://web.engr.oregonstate.edu/~jus/a1-jus". The <strong>scheme</strong> is the portion containing "https". The <strong>subdomains </strong>are included in the portion "web.engr." while the <strong>host domain </strong>is the portion containing "oregonstate.edu". 
                    The <strong>resources</strong> are shown in the portion containing "/~jus/a1-jus".</p>
            </article>  
            <article id="frontend">
                <h3>Frontend Design</h3>
                <p>The concept of <strong>frontend design</strong> revolves around creating the most optimal and appropriate experience for the user through visual design, the graphical user interface, and the interactive experience.
                     Frontend design also ensures the usability of the product, system, or service.</p>
                <p>The <strong>Five "E"s of Usability </strong>are factors that can affect a user's experience with a product, system, or service and measure the quality of that experience.</p>
                <dl>
                    <dt>Effective</dt>
                    <dd>This factor checks to see if the website helps the user meet their goals and ends with accurate results.</dd>
                    <dt>Efficient</dt>
                    <dd>This factor checks to see if the user can get their results quickly and with the least number of steps. </dd>
                    <dt>Easy to nagivate</dt>
                    <dd>This factor checks to see if users are able to use the website comfortably and with ease, even if they have never used it before.</dd>
                    <dt>Error-free</dt>
                    <dd>This factor checks to see if the website is free from accessibility and availability issues.</dd>
                    <dt>Enjoyable or Engaging</dt>
                    <dd>This factor checks to see if the user is satisfied with the website and has an overall positive experience with the design and functionality.</dd>
                </dl>
                <p>The purpose of <strong>page layout tags</strong> is to help divide the content on the page into components such as header, nav, main, section, and footer. These page layout tags also display the content with a <strong>newline</strong>. 
                The purpose of the header tag is to represent the banner or masthead for the web page and show the user the name, publisher, or slogan. The nav tag is used to link from the current page to other pages. The main tag is used to define the primary block that holds the main content or topics of the web page. 
                The section tag is used to group related content, and either a heading or article can be used to arrange the content. The article tag that is used within a section tag represents a specific topic with a second-level headline. Multiple article tags are marked with ID selectors to be distinguished from one another. 
                The aside tag contains content that relates to an article and displays it to the left or right of the article. The figure tag is similar to the aside tag, but it is used along with media and a figcaption tag to caption it. The blockquote tag is used to help extended quotations stand out from the paragraphs on the page.
                The footer tag that is put after the main tag usually holds copyright statements, legal information, contact information, and links to important pages. The div tag can be used to divide content and is also a placeholder for dynamic content.</p>
                <p><strong>Anchors</strong> are used to link to external content, internal content, and to navigate from page to page.</p>
                    <ol>
                        <li>Anchors link to external content by including the URL of the website as the "href" attribute.</li>
                        <li>Anchors link to internal content within the same page by using IDs. An ID attribute can be added to a tag, and it can be used with a hashtag to reference it in the anchor.</li>
                        <li>Anchors link from page to page with a global <strong>navigation block</strong>. Each page contains a navigation block so that the user can access the links from any page that is linked.</li>
                    </ol>
            </article>
            <article id="optimization">
                <h3>Optimizing Images</h3>
                <p>The six major specifications of images for the web are having a descriptive file name, a small file size, exact dimensions, the correct file format, a reduced resolution, and the correct color mode for different file formats.
                    A descriptive file name improves <strong>search engine optimization</strong> so that it can be categorized for users searching for related images. 
                    A small file size will help with having the fastest load time. An image cropped and reduced to exact dimensions will also ensure a faster load time than an image that is too big for the space. 
                    Each type of image will need to be in the correct file format, as each file format has different qualities that work optimally for different images. The correct color mode is important, as different file formats use different color modes.</p>
                <p>The file format that is most appropriate for photos are .JPG and WebP because they both compress and resize the images as the file sizes for photos can be too large. 
                    The file formats that are most appropriate for line art are .GIF, .PNG, and .SVG. </p>
            </article>
            <article id="favicons">
                <h3>Favicons</h3>
                <p>Browsers and devices use <strong>favicons</strong> by establishing a symbol that is modified to work optimally across different devices, and then the symbol is saved in multiple file formats. 
                    The symbol files are picked up by the browser and saved as the icon for the browser so that the icon can be anchored to a favorites list, bookmark, device screen, or search engine results list. 
                    Typically, favicons come in .GIF, .PNG, .ICO, and .SVG file formats.</p>
            </article>
            <article id="cascade">
                <h3>Cascading Stylesheets</h3>
                <p>The main reason to incorporate stylesheets in websites and apps is because they can apply styles to all the pages of the website through a single, global stylesheet. It also allows additional stylesheets to incorporate specific style components 
                    in addition to the global stylesheet. Stylesheets are the most efficient and are preferred for use in websites and apps.</p>
                <p>The five ways to incorporate styles are through an externally linked .CSS file, embedded within a style tag, inline within an element using an attribute and value, using JavaScript template literals within a JavaScript function, or by manipulating
                    the Document Object Model (DOM). As explained above, the external stylesheets are the most efficient and are preferred on websites and apps. The embedded style tag, inline style changes using an attribute and value, the use of JavaScript template
                    literals, or the DOM method, are used mainly for one-off style changes.  </p>
            </article>
            </>
    );
}
export default TopicsPage;