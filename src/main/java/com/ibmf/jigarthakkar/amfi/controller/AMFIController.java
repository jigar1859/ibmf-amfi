package com.ibmf.jigarthakkar.amfi.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import com.fasterxml.jackson.core.JsonProcessingException;
import com.ibmf.jigarthakkar.amfi.dto.FundSchemeDTO;
import com.ibmf.jigarthakkar.amfi.dto.SchemeNAVDTO;
import com.ibmf.jigarthakkar.amfi.service.AMFIService;
import com.ibmf.jigarthakkar.amfi.utils.Constants;

@RequestMapping("/ibmf-amfi")
@RestController
public class AMFIController {

	@Autowired
	AMFIService amfiService;

	@RequestMapping(value = Constants.GET_ALL_FUNDS, method = RequestMethod.GET, produces = "text/plain")
	public String getAllFunds() {
		return amfiService.getAllFunds();
	}

	@PostMapping(Constants.GET_SCHEME_BY_FUND)
	public @ResponseBody List<SchemeNAVDTO> getSchemeDataByFund(@RequestBody FundSchemeDTO fundScheme)
			throws JsonProcessingException {
		System.out.println("AMFIController: " + fundScheme.toString());
		return amfiService.getSchemeDataByFund(fundScheme.getFundName(), fundScheme.getSchemeName());
	}

}
