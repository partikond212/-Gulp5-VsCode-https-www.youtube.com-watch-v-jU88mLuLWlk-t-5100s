//     import fs from "fs";

//     import fonter from "gulp-fonter";
//     import ttf2woff2 from "gulp-ttf2woff2";


// export const fontsObj = fonts(otfTOTtf, ttf2woff2, fontsStyle);
// fontsObj.otfToTtf(
//     // Ищем файлы шрифтов .otf
//     app.gulp.src(`${app.path.srcFolder}/fonts/*.otf`, {})
//         .pipe(app.plugins.plumber(
//             app.plugins.notify.onError({
//                 title: "FONTS",
//                 message: 'Error : <%= error.message %>'
//             })
//         ))
//         //Конвертируем в .ttf
//         .pipe(fonter({
//             formats: ['ttf']
//         }))
//         //Выгружаем в исходную папку
//         .pipe(app.gulp.dest(`${app.path.srcFolder}/fonts/`)));
// fontsObj.ttfToWoff2(
//     // Ищем файлы шрифтов .ttf
//    app.gulp.src(`${app.path.srcFolder}/fonts/*.woff`)
//     .pipe(app.plugins.plumber(
//         app.plugins.notify.onError({
//             title: "FONTS",
//             message:'Error : <%= error.message %>'
//         })
//     ))
//     //Конвертируем в .woff
//         .pipe(fonter({
//         formats:['woff']
//         }))
//         //Выгружаем в папку с результатом
//         .pipe(app.gulp.dest(`${app.path.build.fonts}`))
//         //Ищем файлы шрифтов .ttf
//         .pipe(app.gulp.src(`${app.path.srcFolder}/fonts/*.ttf`)) 
//         //Конвертируем в .woff2
//         .pipe(ttf2woff2())
//         //Выгружаем в папку с результатом    
//         .pipe(app.gulp.dest(`${app.path.build.fonts}`))    
// );
// fontsObj.fontsStyle(
//     //Файл стилей подключения шрифтов
//      fontsFile = `${app.path.srcFolder}/scss/fonts.scss`,
//     //Проверяем существуют ли файлы шрифтов
//     fs.readdir(`${app.path.build.fonts}`, function (_err, fontsFile) {
//         if (fontsFile) {
//             //Проверяем существует ли файл стилей для подключения шрифтов
//             if (!fs.existsSync(fontsFile)) {
//                 //Если файла нет, создаем его
//             app.gulp.src(`${app.path.srcFolder}/fonts/*.otf`)
//                 let newFileOnly;
//                 for (var i = 0; i < fontsFile.length; i++) {
//                     //Записываем подключения шрифтов в файл стилей
//                     let fontFileName = fontsFile[i].split('-')[0];
//                     if (newFileOnly !== fontFileName) {
//                         let fontName = fontFileName.split('-')[0] ? fontFileName.split('-')[0] : fontFileName;
//                         let fontWeight = fontFileName.split('-')[1] ? fontFileName.split('-')[1] : fontFileName;
//                         if (fontWeight.toLowerCase() === 'thin') {
//                             fontWeight = 100;
//                         } else if (fontWeight.toLowerCase() === 'extralight') {
//                             fontWeight = 200;
//                         } else if (fontWeight.toLowerCase() === 'light') {
//                             fontWeight = 300;
//                         } else if (fontWeight.toLowerCase() === 'medium') {
//                             fontWeight = 500;
//                         } else if (fontWeight.toLowerCase() === 'semibold') {
//                             fontWeight = 600;
//                         } else if (fontWeight.toLowerCase() === 'bold') {
//                             fontWeight = 700;
//                         } else if (fontWeight.toLowerCase() === 'extrabold') {
//                             fontWeight = 800;
//                         } else if (fontWeight.toLowerCase() === 'black') {
//                             fontWeight = 900;
//                         } else {
//                             fontWeight = 400;
//                         }   
//                         fs.appendFile(fontsFile,`@font-face{\n\tfont-family:${fontName};\n\tfont-display:swap;\n\tsrc:url("../fonts/${fontFileName}.woff2")format("woff2"),url("../fonts/${fontFileName}.woff")format("woff");\n\tfont-weight:${fontWeight};\n\tfont-style:normal;\n}\r\n`,cb);
//                         newFileOnly = fontFileName;
//                     }
//                 }
//             }else {
//                 //Если файл есть, выводим сообщение 
//                 console.log("Файл sccs/fonts.scss уже существует. Для обновления его нужно его удалить");

//         } 
//         }
//     }));
//     return app.gulp.src(`${app.path.srcFolder}`);
//     function cb() {
        
//     } 
    


  