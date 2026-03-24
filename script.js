//code to automatically write the footer and header - if more pages are created, this will be referenced throughout

document.querySelector(".writeHeader").innerHTML = `
        <div id="header">
            <a href="../index.html" style="text-decoration: none;"><h1>> Jack Percival.<h1></a>
        </div>
`;

document.querySelector(".writeNavbar").innerHTML = `
    <div id="navbar">
        <p><a href="index.html">Return</a> | <a href="projects.html">Projects</a></p>
    </div>
`;

document.querySelector(".writeFooter").innerHTML = `              
        <footer id="footer" style="margin-top: 10px;">
            <p>© Jack Percival - 2026.</p>
        </footer>
`;