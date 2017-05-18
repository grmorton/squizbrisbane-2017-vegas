(function($) {
    'use strict';

    //To dynamically gather form backend. ie Get X images by date desc from folder y
    //to be replaced by a matrix asset listing or similar
    var path = "./mysource_files/content/bannertiles/";
    var arr = [
      ['_upload2.png', ''],
      ['1.png', ''],
      ['2.png', ''],
      ['348-s.png', ''],
      ['blog-header-image.png', ''],
      ['cut1.png', ''],
      ['cut2.png', ''],
      ['cut3.png', ''],
      ['cwt-bohk-uc-a-e-lp-vs.png', ''],
      ['d-s-c-02300.png', ''],
      ['header-image.png', ''],
      ['i-m-g-20161101-141332.png', ''],
      ['pono-thumbs-up-thumb.png', ''],
      ['upload-thumb.png', ''],
      ['upload1.png', ''],
      ['westend.png', ''],

      ['2_upload2.png', ''],
      ['21.png', ''],
      ['22.png', ''],
      ['2348-s.png', ''],
      ['2blog-header-image.png', ''],
      ['2cut1.png', ''],
      ['2cut2.png', ''],
      ['2cut3.png', ''],
      ['2cwt-bohk-uc-a-e-lp-vs.png', ''],
      ['2d-s-c-02300.png', ''],
      ['2header-image.png', ''],
      ['2i-m-g-20161101-141332.png', ''],
      ['2pono-thumbs-up-thumb.png', ''],
      ['2upload-thumb.png', ''],
      ['2upload1.png', ''],
      ['2westend.png', ''],
    ];

    arr = shuffle(arr);
    var s = "";
    $('.bannertiles').html(s);
    s = "";

    $.each(arr, function(i, v) {
        s += '<figure class="bannertile"><img src="' + path + v[0] + '" class="bannertile_" />';
        //We'll hide the captions for now
        //s += '<figcaption>' + v[1] + '</figcaption>';
        s += '</figure>'
    });
    $('.bannertiles').append(s);

    $(document).on("click", ".bannertile-add", function() {
        // Spawn Modal image uploader...Future proposed feature
        alert("Add your own image here");
    });

}(jQuery));
