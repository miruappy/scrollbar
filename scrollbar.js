function scrollbar(root, scroller, scrollbar) {
  this.root = root;
  this.scroller = scroller;
  this.scrollbar = scrollbar;
};

scrollbar.prototype.init = function() {
    var params = {
      root: this.root,
      scroller: this.scroller,
      bar: this.scrollbar,
      barOnCls: 'baron'
    };

    baron(params);
}

scrollbar.prototype.setEffect = function() {
  var selectorName = this.root + ' ' + this.scrollbar;

  $(selectorName).css('display', 'none');

  $(this.root).hover(
    function() {
      $(selectorName).fadeIn();
    },
    function() {
      $(selectorName).fadeOut();
    }
  );
}