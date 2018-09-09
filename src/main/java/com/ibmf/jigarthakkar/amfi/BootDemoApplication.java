package com.ibmf.jigarthakkar.amfi;

import java.util.Arrays;

import javax.annotation.PostConstruct;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.domain.EntityScan;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;
import org.springframework.scheduling.annotation.EnableScheduling;

import com.ibmf.jigarthakkar.amfi.entity.AMFIData;
import com.ibmf.jigarthakkar.amfi.entity.Skill;
import com.ibmf.jigarthakkar.amfi.entity.User;
import com.ibmf.jigarthakkar.amfi.repository.AMFIDataRepository;
import com.ibmf.jigarthakkar.amfi.repository.UserRepository;
import com.ibmf.jigarthakkar.amfi.utils.Constants;
import com.ibmf.jigarthakkar.amfi.utils.NetworkUtils;

@SpringBootApplication
@EnableScheduling
@ComponentScan({ "com.ibmf.jigarthakkar.amfi.service",
		"com.ibmf.jigarthakkar.amfi.controller,com.ibmf.jigarthakkar.amfi.utils" })
@EntityScan("com.ibmf.jigarthakkar.amfi.entity")
@EnableJpaRepositories("com.ibmf.jigarthakkar.amfi.repository")
public class BootDemoApplication {
	@Autowired
	UserRepository userRepository;

	@Autowired
	AMFIDataRepository mAmfiRepo;

	public static void main(String[] args) {
		SpringApplication.run(BootDemoApplication.class, args);
	}

	@PostConstruct
	public void setupDbWithData() {
		User user = new User("Jigar", null);
		user.setSkills(Arrays.asList(new Skill("java"), new Skill("js")));
		user = userRepository.save(user);

		System.out.println("BootDemoApplication >>");
		String response = NetworkUtils.getRequest(Constants.amfiNAVALL);
		AMFIData mAmfiDTO = new AMFIData(0, response);
		mAmfiRepo.deleteAll();
		mAmfiRepo.save(mAmfiDTO);
	}
}
