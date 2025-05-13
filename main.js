    const customTag = {
    tagName: "div",
    textContent: "",
    styles: {
        color: "",
        fontSize: ""
    },
    id: "",
    class: [],
    changeTagName(newTag) {
        this.tagName = newTag;
    },
    changeTextContent(newText) {
        this.textContent = newText;
    },
    changeStyles(property, value) {
        this.styles[property] = value;
    },
    setId(newId) {
        this.id = newId;
    },
    addClassName(className) {
        if (!this.class.includes(className)) {
        this.class.push(className);
        }
    },
    removeClassName(className) {
        this.class = this.class.filter(c => c !== className);
    },
    toHTML() {
        const classString = this.class.length > 0 ? ` class="${this.class.join(' ')}"` : '';
        const idString = this.id ? ` id="${this.id}"` : '';
        let styleString = '';
        for (const property in this.styles) {
        styleString += `${(property === 'fontSize' ? 'font-size' : property)}: ${this.styles[property]}; `;
        }
        styleString = styleString ? ` style="${styleString.trim()}"` : '';
        return `<${this.tagName}${idString}${classString}${styleString}>${this.textContent}</${this.tagName}>`;
    },
    render(containerId) {
        const container = document.getElementById(containerId);
        if (container) {
        container.innerHTML = '';
        container.innerHTML += this.toHTML();
        } else {
        console.error(`Container with ID "${containerId}" not found.`);
        }
    }
    };