# PDF to Text Extractor

Este projeto em Node.js permite a leitura de um arquivo PDF, a extração do texto contido nele e o salvamento desse texto em um arquivo `.txt`.

## Funcionamento do Código

O código usa a biblioteca `pdf-parse` para processar e extrair o texto do PDF. O texto extraído é então salvo em um arquivo `.txt` utilizando o módulo nativo `fs` do Node.js.

### Como funciona o script?

1. O arquivo PDF é lido no formato binário usando o módulo `fs` (`File System`).
2. A biblioteca `pdf-parse` é utilizada para extrair o texto do arquivo PDF.
3. O texto extraído é salvo em um arquivo `.txt` no caminho especificado.

### Requisitos

- Node.js instalado na sua máquina.

## Passos para executar

### 1. Clone o Repositório

Clone este repositório no seu ambiente local:

```bash
git clone <URL_DO_REPOSITORIO>
```

### 2. Acesse o diretório do projeto

Acesse o diretório onde você clonou o repositório:

```bash
cd nome-do-projeto
```

### 3. Instale as dependências

Instale a biblioteca necessária `pdf-parse` com o seguinte comando:

```bash
npm install pdf-parse
```

### 4. Instale as dependências

No arquivo `extractPdfText.js`, defina as variáveis `pdfPath` e `outputPath` para apontar para o seu arquivo PDF e o local onde você deseja salvar o arquivo `.txt`.

```javascript
const pdfPath = 'seu_arquivo.pdf'; // Caminho para o arquivo PDF
const outputPath = 'saida.txt'; // Caminho de saída para o arquivo .txt
```

### 5. Execute o script

ICom as variáveis definidas, execute o seguinte comando para extrair o texto do PDF e salvá-lo em um arquivo `.txt`:

```bash
node extractPdfText.js
```