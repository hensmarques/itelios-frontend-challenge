export default {
    get(url, success){
       const xhr = window.XMLHttpRequest ? new XMLHttpRequest() : new ActiveXObject('Microsoft.XMLHTTP'); 

       xhr.open(`GET`, url)
        xhr.onreadystatechange = () => {
            if (xhr.readyState>3 && xhr.status==200) success(JSON.parse(xhr.responseText));
        };
        xhr.setRequestHeader('X-Requested-With', 'XMLHttpRequest');
        xhr.send();
        return xhr;
    }
}