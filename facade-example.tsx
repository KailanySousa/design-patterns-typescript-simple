// Facade é uma classe que se torna uma interface simplificada para outras classes que possuem um trabalho complexo entre si.
// Um bom exemplo são as bibliotecas que são utilizadas e que facilitam/simplificam o trabalho.
// Utilizamos o que precisamos de uma maneira simplificada e sem saber como as coisas funcionam internamente.


// Classe responsável por fazer o parser do HTML
class ParserHTML {
    private filePath: string;
    private htmlBuffer: string;

    constructor(filePath: string) {
        this.filePath = filePath;
        this.htmlBuffer = '';
    }

    public getHTMLFileFromPath() {
        console.log(`pegando o arquivo HTML do caminho indicado: ${this.filePath}`);

        return this; // retornando a própia instancia
    }

    public parseHTML() {
        console.log(`parseando o arquivo HTML ${this.filePath}`);

        return this.htmlBuffer;
    }
}

// Classe responsável por converter o HTML em PDF
class c {
    private htmlBuffer: string;

    constructor(htmlBuffer: string){
        this.htmlBuffer = htmlBuffer;
    }

    public convert() {
        console.log(`arquivo convertido com sucesso`);

        return this.htmlBuffer;
    }
}

// Classe responsável por unir a lógica das duas classes criadas anteriormente, realizando a conversão do HTML para PDF
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

// Dessa forma, o cliente não precisa fazer a implementação das classes ParserHTML e HTMLToPDFConverter,
// dessa forma, também não precisa entender a complexidade por trás da lógica de cada classe
function clientCode() {
    new ConverterFacade().convert('/users/me/file.html');
}

clientCode();
