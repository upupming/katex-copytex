// Set these to how you want inline and display math to be delimited.
export const defaultCopyDelimiters = {
    inline: ['$', '$'], // alternative: ['\(', '\)']
    display: ['$$', '$$'], // alternative: ['\[', '\]']
};

// Replace .katex elements with their TeX source (<annotation> element).
// Modifies fragment in-place.  Useful for writing your own 'copy' handler,
// as in copy-tex.js.
export const katexReplaceWithTex = function (fragment,
    copyDelimiters = defaultCopyDelimiters) {
    let tex = '';

    // Replace .katex-mathml elements with their annotation (TeX source)
    // descendant, with inline delimiters.
    const katexMathml = fragment.querySelectorAll('.katex-mathml');
    for (let i = 0; i < katexMathml.length; i++) {
        const element = katexMathml[i];
        const texSource = element.querySelector('annotation');
        if (texSource) {
            tex = copyDelimiters.inline[0] +
                texSource.innerHTML + copyDelimiters.inline[1];
        }
    }
    // Switch display math to display delimiters.
    const displays = fragment.querySelectorAll('.katex-display annotation');
    for (let i = 0; i < displays.length; i++) {
        const element = displays[i];
        tex = copyDelimiters.display[0] + '\n' +
            element.innerHTML.substr(copyDelimiters.inline[0].length,
                element.innerHTML.length - copyDelimiters.inline[0].length -
                copyDelimiters.inline[1].length) + '\n' +
            copyDelimiters.display[1];
    }
    return tex;
};

export default katexReplaceWithTex;