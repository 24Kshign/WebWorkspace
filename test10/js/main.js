window.onload = function () {
    var outer = document.getElementById('header');
    var lis = outer.getElementsByTagName('li');
    if (null != lis) {
        for (var i=0; i<lis.length; i++) {
            lis[i].onmouseover = function () {
                for(var j=0;j<lis.length;j++) {
                    var aa = lis[j]
                    aa.classList.remove('big')
                }
                this.classList.add('big');
            }
        }
    }
}