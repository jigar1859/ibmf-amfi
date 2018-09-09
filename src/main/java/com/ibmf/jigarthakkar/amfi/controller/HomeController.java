package com.ibmf.jigarthakkar.amfi.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
public class HomeController {
	//@RequestMapping("/ibmf-amfi/home")
	@RequestMapping("/home")
	public String home() {
		return "index";
	}
}
