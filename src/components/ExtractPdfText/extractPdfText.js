const fs = require('fs');
const pdfParse = require('pdf-parse');

// Função para ler o PDF e extrair o texto
function extractPdfText(pdfPath, outputPath) {
    // Lê o arquivo PDF
    const pdfBuffer = fs.readFileSync(pdfPath);

    pdfParse(pdfBuffer).then(function(data) {
        // Extrai o texto e salva no arquivo .txt
        fs.writeFileSync(outputPath, data.text);
        console.log(`Texto extraído e salvo em: ${outputPath}`);
    }).catch(err => {
        console.error("Erro ao processar o PDF:", err);
    });
}

// Caminho para o PDF e para o arquivo .txt de saída
const pdfPath = './src/components/ExtractPDFText/results/edital-dataprev-2024.pdf';
const outputPath = './src/components/ExtractPDFText/results/output.txt';

// Executa a função de extração
extractPdfText(pdfPath, outputPath);
