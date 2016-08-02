$(function() {
  $(".animsition").animsition({
    inClass: 'fade-in-up',
    outClass: 'fade-out-up',
    inDuration: 900,
    outDuration: 900,
    linkElement: 'a:not([target="_blank"]):not([href^="#"])',
    loading: true,
    loadingParentElement: 'body', //animsition wrapper element
    loadingClass: 'animsition-loading',
    loadingInner: "/images/SVG-Loaders-master/svg-loaders/circles.svg", // e.g '<img src="loading.svg" />'
    timeout: false,
    timeoutCountdown: 5000,
    onLoadEvent: true,
    browser: [ 'animation-duration', '-webkit-animation-duration'],
    // "browser" option allows you to disable the "animsition" in case the css property in the array is not supported by your browser.
    // The default setting is to disable the "animsition" in a browser that does not support "animation-duration".
    overlay : false,
    overlayClass : 'animsition-overlay-slide',
    overlayParentElement : 'body',
    transition: function(url){ window.location.href = url; }
  });
});