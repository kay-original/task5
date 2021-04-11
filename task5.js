(function ($) {
  jQuery.expr[':'].Contains = function(a,i,m){
      return (a.textContent || a.innerText || "").toUpperCase().indexOf(m[3].toUpperCase())>=0;
  };
  function filterList(header, list) {
    var form = $("<form>").attr({"class":"filterform search","action":"#"}),
        input = $("<input>").attr({"class":"filterinput input-xlarge mb0","type":"text","placeholder":"キーワードで絞り込む"});
    $(form).append(input).appendTo(header);
    $(input)
      .change( function () {
        var filter = $(this).val();
        if(filter) {
          $matches = $(list).find('div:Contains(' + filter + ')').parents();
          $('.inline3', list).not($matches).slideUp(0);
          $matches.slideDown(0);
        } else {
          $(list).find(".inline3").slideDown(0);
        }
        return false;
      })
    .keyup( function () {
        $(this).change();
    });
  }
  $(function () {
    filterList($("#form"), $("#list"));
  });
}(jQuery));