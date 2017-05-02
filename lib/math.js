define(['underscore'],function (_) {
  return {
    add:function () {
      var result = 0;
      _.each(arguments,function(num) {
        result += num;
      });
      return result;
    }
  }
})
