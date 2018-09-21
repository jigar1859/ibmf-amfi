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
			
			// Get Indiabulls Savings Fund
			$scope.fundSchemeDtoGuilt={
					fundName: "Indiabulls",
					schemeName: "Indiabulls Savings Fund"
			}
			
			UserService.getSchemeDataByFund($scope.fundSchemeDtoGuilt).then(function(value){
				console.log("/getSchemeDataByFund Savings Fund");
				$scope.ibmfSavingNAVArray = value.data; 
				console.log($scope.ibmfSavingNAVArray.length);
				return value.data;
			}, function(reason) {
				console.log("error occured");
			}, function(value) {
				console.log("no callback");
			});
			
			// Get Guilt Fund
			$scope.fundSchemeDtoGuilt={
					fundName: "Indiabulls",
					schemeName: "Indiabulls Gilt Fund"
			}
			
			UserService.getSchemeDataByFund($scope.fundSchemeDtoGuilt).then(function(value){
				console.log("/getSchemeDataByFund Guilt");
				$scope.ibmfGuiltNAVArray = value.data; 
				 console.log($scope.ibmfGuiltNAVArray.length);
				return value.data;
			}, function(reason) {
				console.log("error occured");
			}, function(value) {
				console.log("no callback");
			});
			
			// Get Indiabulls Liquid Fund
			$scope.fundSchemeDtoLiquid={
					fundName: "Indiabulls",
					schemeName: "Indiabulls Liquid Fund"
			}
			
			UserService.getSchemeDataByFund($scope.fundSchemeDtoLiquid).then(function(value){
				console.log("/getSchemeDataByFund ibmfLiquidNAVArray");
				$scope.ibmfLiquidNAVArray = value.data; 
				 console.log($scope.ibmfLiquidNAVArray.length);
				return value.data;
			}, function(reason) {
				console.log("error occured");
			}, function(value) {
				console.log("no callback");
			});
			
			// Get Indiabulls Income Fund
			$scope.fundSchemeDtoIncome={
					fundName: "Indiabulls",
					schemeName: "Indiabulls Income Fund"
			}
			
			UserService.getSchemeDataByFund($scope.fundSchemeDtoIncome).then(function(value){
				console.log("/getSchemeDataByFund ibmfIncomeNAVArray");
				$scope.ibmfIncomeNAVArray = value.data; 
				 console.log($scope.ibmfIncomeNAVArray.length);
				return value.data;
			}, function(reason) {
				console.log("error occured");
			}, function(value) {
				console.log("no callback");
			});
			
			// Get Indiabulls Short Term Fund
			$scope.fundSchemeDtoShortTerm={
					fundName: "Indiabulls",
					schemeName: "Indiabulls Short Term Fund"
			}
			
			UserService.getSchemeDataByFund($scope.fundSchemeDtoShortTerm).then(function(value){
				console.log("/getSchemeDataByFund ibmfSTNAVArray");
				$scope.ibmfSTNAVArray = value.data; 
				 console.log($scope.ibmfSTNAVArray.length);
				return value.data;
			}, function(reason) {
				console.log("error occured");
			}, function(value) {
				console.log("no callback");
			});
			
			// Get Indiabulls Ultra Short Term Fund
			$scope.fundSchemeDtoUltraShort={
					fundName: "Indiabulls",
					schemeName: "Indiabulls Ultra Short Term Fund"
			}
			
			UserService.getSchemeDataByFund($scope.fundSchemeDtoUltraShort).then(function(value){
				console.log("/getSchemeDataByFund ibmfUltraShortNAVArray");
				$scope.ibmfUltraShortNAVArray = value.data; 
				 console.log($scope.ibmfUltraShortNAVArray.length);
				return value.data;
			}, function(reason) {
				console.log("error occured");
			}, function(value) {
				console.log("no callback");
			});
			
			// Get Indiabulls Tax Savings Fund
			$scope.fundSchemeDtoTaxSaving={
					fundName: "Indiabulls",
					schemeName: "Indiabulls Tax Savings Fund"
			}
			
			UserService.getSchemeDataByFund($scope.fundSchemeDtoTaxSaving).then(function(value){
				console.log("/getSchemeDataByFund ibmfTaxSavingNAVArray");
				$scope.ibmfTaxSavingNAVArray = value.data; 
				 console.log($scope.ibmfTaxSavingNAVArray.length);
				return value.data;
			}, function(reason) {
				console.log("error occured");
			}, function(value) {
				console.log("no callback");
			});
			
			// Get Indiabulls Blue Chip Fund
			$scope.fundSchemeDtoBlueChip={
					fundName: "Indiabulls",
					schemeName: "Indiabulls Blue Chip Fund"
			}
			
			UserService.getSchemeDataByFund($scope.fundSchemeDtoBlueChip).then(function(value){
				console.log("/getSchemeDataByFund ibmfBlueChipNAVArray");
				$scope.ibmfBlueChipNAVArray = value.data; 
				 console.log($scope.ibmfBlueChipNAVArray.length);
				return value.data;
			}, function(reason) {
				console.log("error occured");
			}, function(value) {
				console.log("no callback");
			});
			
			// Get Indiabulls Value Discovery Fund
			$scope.fundSchemeDtoValueDiscovery={
					fundName: "Indiabulls",
					schemeName: "Indiabulls Value Discovery Fund"
			}
			
			UserService.getSchemeDataByFund($scope.fundSchemeDtoValueDiscovery).then(function(value){
				console.log("/getSchemeDataByFund ibmfValueDiscoveryNAVArray");
				$scope.ibmfValueDiscoveryNAVArray = value.data; 
				 console.log($scope.ibmfValueDiscoveryNAVArray.length);
				return value.data;
			}, function(reason) {
				console.log("error occured");
			}, function(value) {
				console.log("no callback");
			});
			
			// Get Indiabulls Arbitrage Fund
			$scope.fundSchemeDtoArbitrage={
					fundName: "Indiabulls",
					schemeName: "Indiabulls Arbitrage Fund"
			}
			
			UserService.getSchemeDataByFund($scope.fundSchemeDtoArbitrage).then(function(value){
				console.log("/getSchemeDataByFund ibmfArbitrageNAVArray");
				$scope.ibmfArbitrageNAVArray = value.data; 
				 console.log($scope.ibmfArbitrageNAVArray.length);
				return value.data;
			}, function(reason) {
				console.log("error occured");
			}, function(value) {
				console.log("no callback");
			});
			
			// Get Indiabulls Savings Income Fund
			$scope.fundSchemeDtoSavingIncome={
					fundName: "Indiabulls",
					schemeName: "Indiabulls Savings Income Fund"
			}
			
			UserService.getSchemeDataByFund($scope.fundSchemeDtoSavingIncome).then(function(value){
				console.log("/getSchemeDataByFund ibmfSavingIncomeNAVArray");
				$scope.ibmfSavingIncomeNAVArray = value.data; 
				 console.log($scope.ibmfSavingIncomeNAVArray.length);
				return value.data;
			}, function(reason) {
				console.log("error occured");
			}, function(value) {
				console.log("no callback");
			});
			
			// Get Indiabulls FMP Series
			$scope.fundSchemeDtoFMP={
					fundName: "Indiabulls",
					schemeName: "Indiabulls FMP Series"
			}
			
			UserService.getSchemeDataByFund($scope.fundSchemeDtoFMP).then(function(value){
				console.log("/getSchemeDataByFund ibmfFMPNAVArray");
				$scope.ibmfFMPNAVArray = value.data; 
				 console.log($scope.ibmfFMPNAVArray.length);
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