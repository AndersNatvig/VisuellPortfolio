/* Progressive enhancement: all images remain available without JavaScript. */
document.querySelectorAll('.bm-gallery').forEach(function (gallery) {
    var images = Array.from(gallery.querySelectorAll('.bm-slides img'));
    var controls = gallery.querySelector('.bm-controls');
    var status = gallery.querySelector('.bm-status');
    var index = 0;
    if (images.length < 2) return;
    function show(next) {
        index = (next + images.length) % images.length;
        images.forEach(function (image, position) { image.hidden = position !== index; });
        status.textContent = 'Bilde ' + (index + 1) + ' av ' + images.length;
    }
    gallery.querySelector('.bm-prev').addEventListener('click', function () { show(index - 1); });
    gallery.querySelector('.bm-next').addEventListener('click', function () { show(index + 1); });
    show(0);
    controls.hidden = false;
});
