
app.filter('yesNo', function() {
    return function(input) {
        return input ? 'Yes' : 'No :(';
    }
});
