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


# CodersCave # File Converter

index.html:
This HTML file represents a simple File Converter App. It includes a title, a header, and a container with input elements for selecting a file, choosing the output format, and a "Convert" button. There's also an anchor element with an id "downloadLink" that will be used to generate the download link for converted files. Additionally, there's a hidden result section containing a textarea to display the converted content.



style.css:
The CSS file contains styles to visually design the File Converter App. Here's an overview of the styles:
The body is set to use the Arial font-family, and some basic reset styles are applied to remove default margins and paddings.
The display: flex; and related properties are applied to the body to center the container both horizontally and vertically on the page.
The header (h1) is styled with a blue color (#007bff) and a top margin.
The .container class styles the main container of the app with a maximum width of 400px, a light background color (#fdefef), padding, border-radius, and a box shadow for a card-like appearance.
The input elements (input[type="file"], select, and button) are styled with margins, padding, borders, and a font size of 16px. The "Convert" button has additional styles for a background color change on hover and an active effect when clicked.
Anchor elements (a) have styles for color and text-decoration when hovered.
The result section (#result) is initially hidden (display: none) and has styles for a top margin and text alignment.
The textarea (textarea) in the result section has styles for width, height, margins, padding, border, border-radius, and font size.



script.js:
The JavaScript file contains the functionality of the File Converter App. Here's a step-by-step explanation of the code:
The PDF.js library is imported to handle PDF conversion.
The convertFile() function is called when the "Convert" button is clicked. It retrieves the selected file and output format, and based on the format, it calls the appropriate conversion function (convertFileToFormat() or convertToPDF()).
The convertFileToFormat(content, filename, format) function is used to convert files to formats other than PDF. It takes the file content, filename, and the output format as input. The function creates a Blob from the file content, generates a download link, and simulates a click on the link to trigger the file download.
The convertToPDF(content, filename) function is used to convert the file to PDF format. It takes the file content and filename as input. It uses the PDF.js library to parse the PDF content, extract the text from each page, and concatenate all page texts. Once the entire PDF content is gathered, it calls the downloadPDF() function to generate the download link and trigger the PDF download.
The downloadPDF(content, filename) function generates a download link for the converted PDF content. It creates a Blob from the content, generates a download link, and simulates a click on the link to trigger the PDF download.
The convertFile() function is called when the "Convert" button is clicked. It retrieves the selected file and output format, and based on the format, it calls the appropriate conversion function (convertFileToFormat() or convertToPDF()).
When the page is loaded, the pdfjsLib object is initialized with the PDF.js library.

Overall, this File Converter App allows users to select a file, choose an output format (other than PDF or PDF), and convert the file to the selected format. It uses JavaScript and the PDF.js library for PDF conversion and Blob API for file download. The result of the conversion is displayed in a hidden textarea and can be downloaded by the user.