window.onload = function () {
    var lis = document.getElementsByTagName('li');
    for (var i = 0; i < lis.length; i++) {
        lis[i].onmouseover = function () {
            var nav = this.getElementsByTagName('ul')[0];
            if (null != nav) {
                var that = nav;
                clearInterval(that.time);
                that.time = setInterval(function () {
                    that.style.height = that.offsetHeight + 16 + "px";
                    if (that.offsetHeight >= 200) {
                        clearInterval(that.time);
                    }
                },20)
            }
        }
        lis[i].onmouseleave = function () {
            var nav = this.getElementsByTagName('ul')[0];
            if (null != nav) {
                var that = nav;
                clearInterval(that.time);
                that.time = setInterval(function () {
                    that.style.height = that.offsetHeight - 16 + "px";
                    if (that.offsetHeight <= 0) {
                        that.style.height = 0 + "px";
                        clearInterval(that.time);
                    }
                },20)

            }
        }

    }
}