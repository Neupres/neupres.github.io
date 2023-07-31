
/**
 * 获取当前主题并设置主题样式文件
 */
function getThemeModeFn(){
    let theme = localStorage.getItem('themeMode')??'L';
    $('#themebtn').text(theme);
    $('#themebtn').removeClass('themeL themeA themeD').addClass('theme'+theme);
    if(theme == 'A'){
        let timer = new Date().getHours();
        if(timer>=7&&timer<=19){
            theme = 'L';
        }else{
            theme = 'D';
        }
    }
    theme == 'L'?themeCss = 'light':themeCss = 'dark';
    $('.themeSetEle').attr('href','/css/'+themeCss+'.css');
}
getThemeModeFn();
/**
 * 设置主题
 * @param {string} modeStr 
 * @returns 
 */
function setThemeModeFn(){
    let themeModearr = {L:'D',D:'A',A:'L'};
    let themeMode = localStorage.getItem('themeMode');
    if(!themeModearr[themeMode]){
        themeModearr[themeMode] = 'A';
    }
    localStorage.setItem('themeMode',themeModearr[themeMode]);
    getThemeModeFn();
}
