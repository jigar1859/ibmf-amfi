/**
 * 
 */
package com.ibmf.jigarthakkar.amfi.utils;

import org.springframework.scheduling.annotation.Scheduled;
import org.springframework.stereotype.Component;

import com.ibmf.jigarthakkar.amfi.entity.AMFIData;
import com.ibmf.jigarthakkar.amfi.repository.AMFIDataRepository;

/**
 * @author jigarthakkar
 *
 */
@Component
public class AMFIMonitor {

	private final AMFIDataRepository mAmfiRepo;
	private AMFIData mAmfiData;

	public AMFIMonitor(final AMFIDataRepository mAmfiRepoData) {
		this.mAmfiRepo = mAmfiRepoData;
	}

	@Scheduled(cron = "0/300 * * * * ?")
	// @Scheduled(cron = "0 0 */3 * * *")
	public void publish() {
		String response = NetworkUtils.getRequest(Constants.amfiNAVALL);
		String[] mList = response.split("\n");
		mAmfiData = new AMFIData(0, response);
		System.out.println("publish: " + mList.length);
		mAmfiRepo.deleteAll();
		mAmfiRepo.save(mAmfiData);
		System.out.println("From Repo Count: " + mAmfiRepo.count());
		System.out.println("From Repo getCreated: " + mAmfiRepo.findAll().get(0).getCreated());
		System.out.println("From Repo getLastModified: " + mAmfiRepo.findAll().get(0).getLastModified());
		System.out.println("From Repo length: " + mAmfiRepo.findAll().get(0).getData().length());
	}

}
