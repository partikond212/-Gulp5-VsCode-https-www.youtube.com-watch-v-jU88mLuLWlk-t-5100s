import  { deleteAsync } from 'del';
export const clear = () => {
  return deleteAsync(['./results/**/*.*', '!./results/**/*.svg',
    `!./results/img/stack/**/*.*`, '!./results/stack/']);


};