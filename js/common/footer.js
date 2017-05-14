app.controller('footerController', function ($scope) {
  $scope.title = 'footer';
  $scope.footer = {
    title: 'footer',
    describe:'powered by test'
  };
});
app.directive('footerDirective', function () {
  return {
    restrict: 'AE',
    templateUrl: './tpl/footer.html',
    // replace: true,
    link: function (scope, element, attrs) {
      // scope.title = 'controller header 2';
      // console.log('1');
    }
  };
});