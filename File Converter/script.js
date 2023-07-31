// Initialize PDF.js
const pdfjsLib = window['pdfjs-dist/build/pdf'];

function convertFile() {
    const inputFile = document.getElementById('inputFile');
    const outputFormat = document.getElementById('outputFormat').value;

    if (inputFile.files.length === 0) {
        alert('Please select a file to convert.');
        return;
    }

    const file = inputFile.files[0];
    const reader = new FileReader();

    reader.onload = function (event) {
        const content = event.target.result;

        switch (outputFormat) {
            case 'jpg':
            case 'png':
            case 'gif':
            case 'txt':
                convertFileToFormat(content, file.name, outputFormat);
                break;
            case 'pdf':
                convertToPDF(content, file.name);
                break;
            default:
                alert('Unsupported output format.');
        }
    };

    reader.readAsArrayBuffer(file);
}

function convertFileToFormat(content, filename, format) {
    const blob = new Blob([content], { type: 'application/octet-stream' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = `${filename.split('.')[0]}.${format}`;
    link.click();
    URL.revokeObjectURL(url);
}

function convertToPDF(content, filename) {
    const uint8Array = new Uint8Array(content);
    pdfjsLib.getDocument(uint8Array).promise.then(function (pdfDoc) {
        const numPages = pdfDoc.numPages;
        let pdfContent = '';

        for (let pageNum = 1; pageNum <= numPages; pageNum++) {
            pdfDoc.getPage(pageNum).then(function (page) {
                page.getTextContent().then(function (textContent) {
                    const pageText = textContent.items.map(function (item) {
                        return item.str;
                    }).join(' ');

                    pdfContent += pageText + '\n';

                    if (pageNum === numPages) {
                        downloadPDF(pdfContent, filename);
                    }
                });
            });
        }
    });
}

function downloadPDF(content, filename) {
    const blob = new Blob([content], { type: 'application/pdf' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = `${filename.split('.')[0]}.pdf`;
    link.click();
    URL.revokeObjectURL(url);
}
