function replaceCSSComments(str) {
    return str.replace(/\/\*.*?\*\/\s?/g, '');
}

function replaceHTMLComments(str) {
    return str.replace(/\<\!\-\-*.*?\-\-\>\s*/g, '').trim();
}

function validateFileType(str) {
    return (/.+(\.jpg|\.jpeg|\.png)$/).test(str);
}

function checkYear(str) {
    return (/^(19\d\d|20\d\d|2100)$/).test(str);
}

function checkEmail(str) {
    return (/^[a-zA-z]+\W?[a-zA-z]+@[a-zA-z\.]+\.[a-z]{2,3}$/).test(str);
}

function checkDomainUrl(str) {
    return (/^(http:|https:)\/\/(?!:\/\/)([a-zA-Z0-9-_]+\.)*[a-zA-Z0-9][a-zA-Z0-9-_]+\.[a-zA-Z]{2,5}?$/).test(str);
}

function createLinksFromDomains(str) {
let reg = new RegExp('(http:|https:)\\/\\/(?!:\\/\\/)([a-zA-Z0-9-_]+\\.)*[a-zA-Z0-9][a-zA-Z0-9-_]+\\.[a-zA-Z]{2,5}', 'gi');
let res = '';
let str1;
str.match(reg).forEach(function(item) {
str1 = str.substring(0, (str.indexOf(item) + item.length));
str = str.substring(str1.length);
res += str1.replace(item, `<a href="${item}" target="_blank">${item.replace(/^(http:|https:)\/\//gi, '')}</a>`);
return res;
});
return res + str;
};
