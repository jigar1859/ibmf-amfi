package com.ibmf.jigarthakkar.amfi.service.impl;

import java.util.ArrayList;
import java.util.List;
import java.util.regex.Matcher;
import java.util.regex.Pattern;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.fasterxml.jackson.databind.SerializationFeature;
import com.ibmf.jigarthakkar.amfi.dto.SchemeNAVDTO;
import com.ibmf.jigarthakkar.amfi.repository.AMFIDataRepository;
import com.ibmf.jigarthakkar.amfi.repository.UserRepository;
import com.ibmf.jigarthakkar.amfi.service.AMFIService;
import com.ibmf.jigarthakkar.amfi.utils.Constants;
import com.ibmf.jigarthakkar.amfi.utils.NetworkUtils;

@Service
public class AMFIServiceImpl implements AMFIService {

	@Autowired
	AMFIDataRepository mAmfiRepo;

	static ObjectMapper mapper = new ObjectMapper();

	@Override
	public String getAllFunds() {
		String response = mAmfiRepo.findAll().get(0).getData();
		return response;
	}

	public ArrayList<String> getAllSchemesByFundHouse(String[] mList, String fundName) {
		ArrayList<String> mFundList = new ArrayList<>();
		Pattern p = Pattern.compile("\\b" + fundName + "\\b");
		for (String string : mList) {
			Matcher m = p.matcher(string);
			if (m.find()) {
				mFundList.add(string);
			}
		}
		// System.out.println(fundName + ":" + mFundList.size());
		return mFundList;
	}

	@Override
	public List<SchemeNAVDTO> getSchemeDataByFund(String fundName, String schemeName) throws JsonProcessingException {

		// String response = NetworkUtils.getRequest(Constants.amfiNAVALL);
		String[] mList = getAllFunds().split("\n");

		ArrayList<String> mFundList = getAllSchemesByFundHouse(mList, Constants.FUND_HOUSE);
		ArrayList<String> mFundSchemeList = getAllSchemesBySchemeName(mFundList, schemeName);
		ArrayList<SchemeNAVDTO> schemeList = new ArrayList<>();
		for (int i = 0; i < mFundSchemeList.size(); i++) {
			String scheme = mFundSchemeList.get(i).split(";")[3];
			String schemeNAV = mFundSchemeList.get(i).split(";")[4];
			String schemeDate = mFundSchemeList.get(i).split(";")[5];
			SchemeNAVDTO mSchemeDetails = new SchemeNAVDTO(i+1, scheme, schemeNAV, schemeDate);
			schemeList.add(mSchemeDetails);
		}
		// Object to JSON in String
		// Set pretty printing of json
		mapper.enable(SerializationFeature.INDENT_OUTPUT);
		String jsonInString = mapper.writeValueAsString(schemeList);
		// System.out.println(jsonInString);
		return schemeList;
	}

	/**
	 * @param mIBMFList
	 */
	private static ArrayList<String> getAllSchemesBySchemeName(ArrayList<String> mList, String fundName) {
		ArrayList<String> mSchemeList = new ArrayList<>();
		for (String string : mList) {
			if (string.contains(fundName)) {
				mSchemeList.add(string);
			}
		}
		return mSchemeList;
	}

}
