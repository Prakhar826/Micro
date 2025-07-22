const htmlCode = document.querySelector('#html-code');
const cssCode = document.querySelector('#css-code');
const jsCode = document.querySelector('#js-code');
const runBtn = document.querySelector('.run-btn');
const previewFrame = document.querySelector('#preview-frame');

runBtn.addEventListener('click', () => {
    const html = htmlCode.value;
    const css = cssCode.value;
    const js = jsCode.value;

    const code = `
        <html>
            <head>
                <style>${css}</style>
            </head>
            <body>
                ${html}
                <script>${js}</script>
            </body>
        </html>
    `;

    previewFrame.srcdoc = code;
});