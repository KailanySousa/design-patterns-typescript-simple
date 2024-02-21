class ParserHTML {
    private filePath: string;
    private htmlBuffer: string;

    constructor(filePath: string) {
        this.filePath = filePath;
        this.htmlBuffer = '';
    }

    public getHTMLFileFromPath() {
        console.log(`pegando o arquivo HTML do caminho indicado: ${this.filePath}`);

        return this; // retornando a pr�pia instancia
    }

    public parseHTML() {
        console.log(`parseando o arquivo HTML ${this.filePath}`);

        return this.htmlBuffer;
    }
}

class HTMLToPDFConverter {
    private htmlBuffer: string;

    constructor(htmlBuffer: string){
        this.htmlBuffer = htmlBuffer;
    }

    public convert() {
        console.log(`arquivo convertido com sucesso`);

        return this.htmlBuffer;
    }
}

class ConverterFacade {
    public convert(htmlPath: string) {
        const parseHTML = new ParserHTML(htmlPath);
        const htmlBuffer = parseHTML
            .getHTMLFileFromPath()
            .parseHTML();
        
        const htmlToPdfConverter = new HTMLToPDFConverter(htmlBuffer);

        return htmlToPdfConverter.convert();
    }
}

function clientCode() {
    new ConverterFacade().convert('/users/me/file.html');
}

clientCode();
