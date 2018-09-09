'use strict'

var module = angular.module('demo.controllers', []);
module.controller("UserController", [ "$scope", "UserService",
		function($scope, UserService) {
	
			$scope.ibmfNAVArray = [
		      { "Sr No": 1,"Scheme-Plan-Option": "Indiabulls Gilt Fund - Direct Plan -  Growth Option", "NAV": 1595.3795, "Date": "05-Sep-18"},
		    ];
			
			$scope.userDto = {
				userId : null,
				userName : null,
				skillDtos : []
			};
			
			$scope.skills = [];
			
			// Get All Funds
			$scope.getAllFunds = UserService.getAllFunds().then(function(value){
				// console.log("GetAllFunds");
				// console.log(value);
			});
			
			// Get Guilt Fund
			$scope.fundSchemeDtoGuilt={
					fundName: "Indiabulls",
					schemeName: "Indiabulls Gilt Fund"
			}
			
			UserService.getSchemeDataByFund($scope.fundSchemeDtoGuilt).then(function(value){
				console.log("/getSchemeDataByFund Guilt");
				$scope.ibmfGuiltNAVArray = value.data; 
				console.log($scope.ibmfGuiltNAVArray);
				return value.data;
			}, function(reason) {
				console.log("error occured");
			}, function(value) {
				console.log("no callback");
			});
			
			// Get Liquid Fund
			$scope.fundSchemeDtoLiquid={
					fundName: "Indiabulls",
					schemeName: "Indiabulls Liquid Fund"
			}
			
			UserService.getSchemeDataByFund($scope.fundSchemeDtoLiquid).then(function(value){
				console.log("/getSchemeDataByFund Liquid");
				$scope.ibmfLiquidNAVArray = value.data; 
				console.log($scope.ibmfLiquidNAVArray);
				return value.data;
			}, function(reason) {
				console.log("error occured");
			}, function(value) {
				console.log("no callback");
			});
			
			// Get Income Fund
			$scope.fundSchemeDtoIncome={
					fundName: "Indiabulls",
					schemeName: "Indiabulls Income Fund"
			}
			
			UserService.getSchemeDataByFund($scope.fundSchemeDtoIncome).then(function(value){
				console.log("/getSchemeDataByFund Income");
				$scope.ibmfIncomeNAVArray = value.data; 
				console.log($scope.ibmfIncomeNAVArray);
				return value.data;
			}, function(reason) {
				console.log("error occured");
			}, function(value) {
				console.log("no callback");
			});
			
			
			UserService.getUserById(1).then(function(value) {
				console.log(value.data);
			}, function(reason) {
				console.log("error occured");
			}, function(value) {
				console.log("no callback");
			});

			$scope.saveUser = function() {
				$scope.userDto.skillDtos = $scope.skills.map(skill => {
					return {skillId: null, skillName: skill};
				});
				UserService.saveUser($scope.userDto).then(function() {
					console.log("works");
					UserService.getAllUsers().then(function(value) {
						$scope.allUsers= value.data;
					}, function(reason) {
						console.log("error occured");
					}, function(value) {
						console.log("no callback");
					});

					$scope.skills = [];
					$scope.userDto = {
						userId : null,
						userName : null,
						skillDtos : []
					};
				}, function(reason) {
					console.log("error occured");
				}, function(value) {
					console.log("no callback");
				});
			}
		} ]);