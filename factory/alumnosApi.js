(function(){
    'use strict';

    angular
        .module('marvel')
        .factory("alumnosData", alumnosData);


    alumnosData.$inject = ["$resource"];
    function alumnosData($resource){
        return $resource("alumnos.json")
    }



})();
