(function () {
    'use strict';

    angular
        .module('marvel')
        .component('alumnosComponent', {
            templateUrl: 'app/components/alumnosComponent/alumnosComponent.html',
            controller: alumnosCtrl,
            controllerAs: 'vm'
        });

        alumnosCtrl.$inject = ["alumnosData"];
        function alumnosCtrl(alumnosData) {
        var vm = this;





                vm.alumnosData =  alumnosData.query();
                console.log(vm.alumnosData)
                console.log("Holaaaa")





    }


    })();
