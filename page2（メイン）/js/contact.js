$(document).ready(function () {
    $('#contact-form').submit(function (e) {
        e.preventDefault();
        alert('お問い合わせありがとうございます。担当者より折り返しご連絡いたします。');
        this.reset();
    });
});