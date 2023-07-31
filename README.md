# CodersCave # Quote generator

index.html:
This HTML file represents a web page for a "Quote of the Day" generator. The page contains a header, a content area with a quote and author section, and buttons
to perform various actions. The layout is designed using a wrapper div with specific styles. The quote and author sections are enclosed within div elements with
appropriate class names for styling. The page uses Font Awesome icons for decorative elements and an external stylesheet ("style.css") to define the visual appearance.
A script file ("script.js") is included to add interactivity to the web page. The JavaScript code fetches random quotes from the "https://type.fit/api/quotes" API, 
allows users to listen to the quotes using text-to-speech, and copy the quotes to the clipboard.

style.css:
This CSS file is responsible for styling the elements of the web page. It sets the font-family to "Poppins" and applies CSS reset rules for consistent layout. The
background image is set to "scene3.jpg" with appropriate sizing. The main content area (.wrapper) is styled with a fixed width, background color, border radius, and box
shadow for a card-like appearance. Various elements inside the content area are styled to align and format the quote and author sections. Buttons and icons are
customized with colors and hover effects to enhance user experience.

script.js:
This JavaScript file adds functionality to the web page. It begins by fetching quotes from the "https://type.fit/api/quotes" API using the fetch API. The randomQuote() 
function selects a random quote and author from the retrieved data and displays them on the web page when the "Get Quote" button is clicked. The "Listen to Quote" 
button leverages the Web Speech API to convert the displayed quote into speech using the browser's text-to-speech functionality. The "Copy Quote" button allows users
to copy the quote and author to their clipboard using the navigator.clipboard.writeText() method. The script also handles error scenarios and provides appropriate 
feedback to users. The "DOMContentLoaded" event ensures that the JavaScript code executes only after the DOM has fully loaded, and the randomQuote() function is called
on page load to display an initial quote.

Overall, this project presents a user-friendly web page that generates and displays random quotes while offering additional features for listening to and copying the 
quotes. It combines HTML, CSS, and JavaScript to create an engaging and interactive experience for users.
