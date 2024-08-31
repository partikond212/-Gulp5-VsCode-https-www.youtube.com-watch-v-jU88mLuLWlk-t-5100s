//получаем имя папки проекта 
import * as nodePath from 'path';
export const rootFolder = nodePath.basename(nodePath.resolve())

const buildFolder = `./results`; //Также можно использовать rootFolder
const srcFolder = `./src`;

export const path = {
    build: {
        js : `${buildFolder}/js/`,
        css : `${buildFolder}/css/`,
        html: `${buildFolder}/`,
        files: `${buildFolder}/files/`,
        images: `${buildFolder}/img/`,
        fonts: `${buildFolder}/fonts/`,
    },
    src: {
        js: `${srcFolder}/js/app.js`,
        images: `${srcFolder}/img/**/*.{jpg,jpeg,png,gif,webp}`,
        svg : `${srcFolder}/img/**/*.svg`,
        scss : `${srcFolder}/scss/styles.scss`,
        html : `${srcFolder}/*.html`,           
        files: `${srcFolder}/files/**/*.*`,
        svgicons: `${srcFolder}/svgicons/*.svg`,    
    },
    watch: {
        js: `${srcFolder}/js/**/*.js`,
        images: `${srcFolder}/img/**/*.{jpg,jpeg,png,svg,gif,ico,webp}`,
        scss : `${srcFolder}/scss/**/*.scss`,
        html : `${srcFolder}/**/*.html`,    
        files : `${srcFolder}/files/**/*.*`,
    },
    clean: buildFolder,
    buildFolder: buildFolder,
    srcFolder: srcFolder,
    rootFolder: rootFolder,
    ftp:`hostlamnd2`
    
}