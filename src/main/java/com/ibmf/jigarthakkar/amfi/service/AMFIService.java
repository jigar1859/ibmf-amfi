package com.ibmf.jigarthakkar.amfi.service;

import java.util.List;

import com.fasterxml.jackson.core.JsonProcessingException;
import com.ibmf.jigarthakkar.amfi.dto.SchemeNAVDTO;

public interface AMFIService {
	String getAllFunds();

	List<SchemeNAVDTO> getSchemeDataByFund(String fundName, String schemeName) throws JsonProcessingException;

}
