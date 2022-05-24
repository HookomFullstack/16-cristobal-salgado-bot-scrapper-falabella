const ExcelJS = require('exceljs');

const saveExcel = (data, category) => {

    const workbook = new ExcelJS.Workbook();
    
    const fileName = `productos.xlsx`;

    category.forEach(sheetName => {

        let worksheet = workbook.addWorksheet(sheetName);
        // I believe this needs to be set to show in LibreOffice.
        worksheet.state = 'visible';
        // filter the data by category
        const filteredData = data.filter(item => item.breadcrumb === sheetName.slice(2, sheetName.lenght).trim() );
        worksheet.columns = [
            { header: 'titulo',          key: 'title' },
            { header: 'precio',          key: 'price' },
            { header: 'sku',             key: 'sku' },
            { header: 'marca',           key: 'brand' },
            { header: 'vendedor',        key: 'seller' },
            { header: 'imagen',          key: 'img' },
            { header: 'categoria',       key: 'breadcrumb' },
            { header: 'especificaciones',  key: 'specs' },
            { header: 'tipo de entrega', key: 'typeDelivery' },
        ];
        worksheet.addRows(filteredData);
    });
    
    workbook.xlsx.writeFile(fileName)
        .then(() => {
            // count the rows all
            const rows = workbook.worksheets.reduce((acc, sheet) => acc + sheet.rowCount, 0);
            console.log(`${fileName} creado exitosamente, hay ${rows} productos.`);
        }
    );
}

module.exports = {
    saveExcel
}