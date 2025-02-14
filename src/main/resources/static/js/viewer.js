function downloadIframeContent() {
    let iframe = document.getElementById('resumeContent');
    let iframeDocument = iframe.contentDocument || iframe.contentWindow.document;
    let content = iframeDocument.documentElement.outerHTML;

    let blob = new Blob([content], { type: 'text/html' });
    let url = URL.createObjectURL(blob);

    let a = document.createElement('a');
    a.href = url;
    a.download = 'iframe_content.html';
    document.body.appendChild(a);
    a.click();

    // Cleanup
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
}

function printIframeContent() {
    let iframe = document.getElementById('resumeContent');
    let iframeWindow = iframe.contentWindow || iframe.contentDocument;
    if (iframeWindow.document) {
        iframeWindow = iframeWindow.document;
    }
    iframeWindow.defaultView.print();
}