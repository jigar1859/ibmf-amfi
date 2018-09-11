'use strict'

var module = angular.module('demo.controllers', []);
module.controller("UserController", [ "$scope", "UserService",
		function($scope, UserService) {
	
			$scope.ibmfNAVArray = [
		      { "Sr No": 1,"Scheme-Plan-Option": "Indiabulls Gilt Fund - Direct Plan -  Growth Option", "NAV": 1595.3795, "Date": "05-Sep-18"},
		    ];
			
			$scope.objectiveRiskArray=[
				{
					"BCInvestmentObjective": "The primary investment objective of the Scheme is to seek to provide long-term capital appreciation from a portfolio that is invested predominantly in equity and equity-related securities of blue-chip large-cap companies.\nHowever there can be no assurance that the investment objective of the scheme will be achieved.",
					"VDInvestmentObjective": "The primary objective of the Scheme is to seek to generate capital appreciation by investing in a portfolio of Equity and Equity related securities of companies that meet the relative value criteria and fall within top 500 by market cap. A company is considered as showing high relative value if it has a combination of higher RoCE and higher earnings yield.\nHowever, there is no assurance that the investment objective of the Scheme will be realized and the Scheme does not assure or guarantee any returns.",
					"AFInvestmentObjective": "To generate income by predominantly investing in arbitrage opportunities in the cash and derivative segments of the equity markets and the arbitrage opportunities available within the derivative segment and by investing the balance in debt and money market instruments.\nHowever, there is no assurance or guarantee that the investment objective of the scheme will be realized.",
					"SIInvestmentObjective": "The primary objective of the Scheme is to generate regular monthly returns through investment primarily in debt securities. The secondary objective of the Scheme is to generate long-term capital appreciation by investing a portion of the Scheme's assets in equity securities. Monthly Income is not assured and is subject to availability of distributable surplus.\nHowever, there can be no assurance that the investment objective of the scheme will be achieved.",
					
				}
			]
			
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
				// console.log($scope.ibmfGuiltNAVArray);
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
				// console.log($scope.ibmfLiquidNAVArray);
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
				// console.log($scope.ibmfIncomeNAVArray);
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
				// console.log($scope.ibmfSTNAVArray);
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
				// console.log($scope.ibmfUltraShortNAVArray);
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
				// console.log($scope.ibmfTaxSavingNAVArray);
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
				// console.log($scope.ibmfBlueChipNAVArray);
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
				// console.log($scope.ibmfValueDiscoveryNAVArray);
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
				// console.log($scope.ibmfArbitrageNAVArray);
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
				// console.log($scope.ibmfSavingIncomeNAVArray);
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
				// console.log($scope.ibmfFMPNAVArray);
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