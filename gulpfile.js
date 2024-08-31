//Основной модуль
import gulp from "gulp"

//Импорт путей
import { path } from "./gulp/config/path.js";
//импорт общих плагинов
import { plugins } from "./gulp/config/plugins.js";

//передаем значения в глобальную переменную
global.app = {
    isBuild: process.argv.includes("--build"),
    isDev : !process.argv.includes("--build"),
    path: path,
    gulp: gulp,
    plugins: plugins
}
// импорт задач 

import { copy } from "./gulp/tasks/copy.js"; 
import { clear } from "./gulp/tasks/clear.js";
import { copy_html } from "./gulp/tasks/html.js";
import { server } from "./gulp/tasks/server.js";
import { scss } from "./gulp/tasks/scss.js";
import { javascript } from "./gulp/tasks/javascript.js";
import { ImagesTask } from "./gulp/tasks/images.js";

import { Spritesvg } from "./gulp/tasks/svgSprite.js";
import { zip } from "./gulp/tasks/zip.js";
import { ftp } from "./gulp/tasks/ftp.js";
// import { fonts } from "./gulp/tasks/fonts.js";

  
//функция - наблюдатель за изменениями в файлах
function watcher() {
    gulp.watch(path.watch.files, copy),
    gulp.watch(path.watch.html, copy_html),
    gulp.watch(path.watch.scss, scss),
        gulp.watch(path.watch.js, javascript)
        gulp.watch(path.watch.images ,ImagesTask) 
}

//Последовательная обработка шрифтов


export { Spritesvg }


const MainTasks = gulp.series(copy,copy_html,scss,javascript);  
const ImagesTask2 = gulp.parallel(ImagesTask);
//построение сценария выполнения задач 
const dev = gulp.series(clear, MainTasks, ImagesTask2, gulp.parallel(watcher, server), MainTasks, ImagesTask2);
const build = gulp.series(clear, MainTasks, ImagesTask2);
const deployZIP = gulp.series(clear, MainTasks, zip);
const deployFTP = gulp.series(clear, MainTasks, ftp);


//Экспорт сценариев
export { dev }
export { build }
export { deployZIP }
export {  deployFTP }

//Выполнения сценария по умолчанию
gulp.task('default', dev);
