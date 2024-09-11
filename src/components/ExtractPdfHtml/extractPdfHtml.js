const fs = require('fs');
const pdfParse = require('pdf-parse');

// Função para ler o PDF e extrair o texto
function extractPdfText(pdfPath, outputPath) {
    // Lê o arquivo PDF
    const pdfBuffer = fs.readFileSync(pdfPath);

    pdfParse(pdfBuffer).then(function(data) {
        // Cria o conteúdo HTML
        const htmlContent = `
        <!DOCTYPE html>
        <html lang="pt-BR">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Texto Extraído do PDF</title>
        </head>
        <body>
            <pre>${data.text}</pre>
        </body>
        </html>
        `;

        // Salva o conteúdo HTML no arquivo de saída
        fs.writeFileSync(outputPath, htmlContent);
        console.log(`Texto extraído e salvo em: ${outputPath}`);
    }).catch(err => {
        console.error("Erro ao processar o PDF:", err);
    });
}

// Caminho para o PDF e para o arquivo .txt de saída
const pdfPath = './src/components/ExtractPDFHtml/results/edital-dataprev-2024.pdf';
const outputPath = './src/components/ExtractPDFHtml/results/output.html';

// Executa a função de extração
extractPdfText(pdfPath, outputPath);
