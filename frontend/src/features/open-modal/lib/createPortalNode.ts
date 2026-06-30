export function createPortalNode() {
    const node = document.createElement("div");
    document.body.appendChild(node);

    return {
        node,
        remove() {
            document.body.removeChild(node);
        }
    };
}
