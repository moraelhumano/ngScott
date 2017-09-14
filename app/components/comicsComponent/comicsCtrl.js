(function () {
    'use strict';

    angular
        .module('marvel')
        .component('comicsComponent', {
            templateUrl: 'app/components/comicsComponent/comicsComponent.html',
            controller: comicsCtrl,
            controllerAs: 'vm'
        });


        function comicsCtrl(marvelData) {
        var vm = this;

        vm.superheros = null;
        vm.num1 = null;
        vm.num2 = null;
        vm.sumar = sumar;
        vm.limpiar = limpiar;
        vm.resultado = 0;
        vm.apiCall = apiCall;
        vm.apiCallDelate = apiCallDelate;


        function sumar(){
            vm.resultado = vm.num1 + vm.num2
        }

        function limpiar(){
            vm.resultado = 0;
        }

        function apiCall() {
            marvelData.get()
            .$promise
                .then(function(response){
                    vm.superheros = response.data.results;
                    console.log(vm.superheros)
                })
        }

        function apiCallDelate() {
            vm.superheros = null;

        }


            $('.carousel').carousel();
    }


    })();
