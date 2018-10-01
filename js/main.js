$(".info-button.chars").click(function () {
    $(".characteristics-more").removeClass("display-none");
    $(".overview-more").addClass("display-none");
    $(".review-more").addClass("display-none");
    $(".photo-more").addClass("display-none");
});
$(".info-button.overview").click(function () {
    $(".characteristics-more").addClass("display-none");
    $(".overview-more").removeClass("display-none");
    $(".review-more").addClass("display-none");
    $(".photo-more").addClass("display-none");
});
$(".info-button.review").click(function () {
    $(".characteristics-more").addClass("display-none");
    $(".overview-more").addClass("display-none");
    $(".review-more").removeClass("display-none");
    $(".photo-more").addClass("display-none");
});
$(".info-button.photo").click(function () {
    $(".characteristics-more").addClass("display-none");
    $(".overview-more").addClass("display-none");
    $(".review-more").addClass("display-none");
    $(".photo-more").removeClass("display-none");
});