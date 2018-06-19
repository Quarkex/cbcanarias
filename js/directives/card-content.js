app.directive('appCardContent', function () {

    var text, template;
    text = '<a style="text-align: left;" href="{{ prefix }}/{{ item.id }}" bind-html-compile="item.title"></a>';
    text = '<span class="md-headline" style="font-size: 18px;">' + text + '</span>';
    text = '<md-card-title-text>' + text + '</md-card-title-text>';
    text = '<div flex>' + text + '</div>';
    text = '<md-card-title>' + text + '</md-card-title>';

    template = '<md-card flex-xs md-theme="default" md-theme-watch style="min-height: 50px; background-color: #f6f6f6;">' + text + '</md-card>';

    return {
        restrict: 'E',
        scope: {
            item: '=',
            prefix: '='
        },
        template: template
    };
});
