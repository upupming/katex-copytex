import katexReplaceWithTex from './katex2tex';

function hasSomeParentTheClass(element, classname) {
    if (element.className && element.className.split(' ').indexOf(classname) >= 0) {return true;}
    if (!element.parentNode) {
        return false;
    }
    return element.parentNode && hasSomeParentTheClass(element.parentNode, classname);
}

// Global copy handler to modify behavior on .katex elements.
document.addEventListener('copy', function(event) {
    const selection = window.getSelection();
    if (selection.isCollapsed) {
        return;  // default action OK if selection is empty
    }

    const parentEl = selection.getRangeAt(0).startContainer;
    const isBlock = hasSomeParentTheClass(parentEl, 'katex-display');

    const fragment = isBlock ? selection.getRangeAt(0).commonAncestorContainer : parentEl;
    // return;
    if (!fragment.querySelector('.katex-mathml')) {
        return;  // default action OK if no .katex-mathml elements
    }
    // Preserve usual HTML copy/paste behavior.
    const html = [];
    for (let i = 0; i < fragment.childNodes.length; i++) {
        html.push(fragment.childNodes[i].outerHTML);
    }
    event.clipboardData.setData('text/html', html.join(''));
    // Rewrite plain-text version.
    event.clipboardData.setData('text/plain',
        katexReplaceWithTex(fragment));
    // Prevent normal copy handling.
    event.preventDefault();
});
