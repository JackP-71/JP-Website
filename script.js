//code to automatically write the footer and header - if more pages are created, this will be referenced throughout

document.querySelector(".writeHeader").innerHTML = `
        <div id="header">
            <a href="../index.html" style="text-decoration: none;"><h1>> a simple portfolio.<h1></a>
        </div>
`;

document.querySelector(".writeNavbar").innerHTML = `
    <div id="navbar">
        <p>| <a href="index.html">About</a> | <a href="projects.html">Programming</a> |</p>
    </div>
`;

document.querySelector(".writeFooter").innerHTML = `              
        <footer id="footer" style="margin-top: 10px;">
            <p>© 2026.</p>
        </footer>
        <p></p>
        <center>
        <div class="box" style="max-width:fit-content; background-color: var(--bg-color);">
            <div class="theme-switch-wrapper">
                <em>Theme Select:⠀</em>
                <!--
                <label class="theme-switch" for="checkbox">
                    <input type="checkbox" id="checkbox" />
                    <div class="slider round"></div>
                </label>-->
                <select id="theme-select">
                    <option value="gray">Grayscale,</option>
                    <option value="light">Grayscale - Light,</option>
                    <option value="purple">Purple,</option> 
                    <option value="orange">Orange,</option>
                    <option value="red">Red,</option> 
                    <option value="blue">Blue,</option> 
                    <!--<option value="custom">Custom,</option>--> 
                </select>
                <!--<div id="themeSelector">
                    <label for="primaryColor">Primary Color:</label>
                    <input type="color" id="primaryColor" name="primaryColor" value=#888888>-->
                </div>
            </div>
        </div>
        </center>
`;

// scripts for storing the theme
const themeSelect = document.getElementById("theme-select");

// Apply theme on change
themeSelect.addEventListener("change", function () {
    const theme = this.value;
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
});
// Load saved theme
const savedTheme = localStorage.getItem("theme");
if (savedTheme) {
    document.documentElement.setAttribute("data-theme", savedTheme);
    themeSelect.value = savedTheme;
}