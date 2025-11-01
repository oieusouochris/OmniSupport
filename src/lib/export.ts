/**
 * Cria e inicia o download de um arquivo no navegador.
 * @param content O conteúdo do arquivo.
 * @param fileName O nome do arquivo.
 * @param mimeType O tipo MIME do arquivo.
 */
function downloadFile(content: string, fileName: string, mimeType: string) {
    const blob = new Blob([content], { type: mimeType });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = fileName;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
}

/**
 * Exporta um array de objetos para um arquivo CSV.
 * @param data O array de objetos a ser exportado.
 * @param filename O nome base do arquivo (sem extensão).
 */
export function exportToCsv<T extends object>(data: T[], filename: string) {
    if (data.length === 0) return;

    const headers = Object.keys(data[0]).join(',');
    const rows = data.map(row => 
        Object.values(row).map(value => {
            const strValue = String(value);
            // Escapa aspas e adiciona aspas se o valor contiver vírgula
            return `"${strValue.replace(/"/g, '""')}"`;
        }).join(',')
    ).join('\n');

    const csvContent = `${headers}\n${rows}`;
    const timestamp = new Date().toISOString().replace(/[:.]/g, '-');
    downloadFile(csvContent, `${filename}-${timestamp}.csv`, 'text/csv;charset=utf-s8;');
}

/**
 * Exporta um objeto ou array para um arquivo JSON.
 * @param data O dado a ser exportado.
 * @param filename O nome base do arquivo (sem extensão).
 */
export function exportToJson(data: any, filename: string) {
    const jsonContent = JSON.stringify(data, null, 2);
    const timestamp = new Date().toISOString().replace(/[:.]/g, '-');
    downloadFile(jsonContent, `${filename}-${timestamp}.json`, 'application/json;charset=utf-8;');
}
