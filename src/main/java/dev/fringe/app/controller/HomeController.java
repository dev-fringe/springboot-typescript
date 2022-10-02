package dev.fringe.app.controller;

import javax.servlet.http.HttpServletRequest;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.MessageSource;
import org.springframework.stereotype.Controller;
import org.springframework.ui.ModelMap;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.servlet.LocaleResolver;

import dev.fringe.app.model.i18nLayout;

@Controller
public class HomeController {

	@Autowired
	MessageSource messageSource;

	@Autowired
	LocaleResolver localeResolver;
	
	@RequestMapping("/")
	public String  index() {
		return "index";
	}
	
	@RequestMapping(value = "/{template}", method = RequestMethod.GET)
	public String showList(HttpServletRequest request, @PathVariable(value = "template") final String template,
			final ModelMap model) {
		model.addAttribute("presentations", "");
		model.addAttribute("i18n", new i18nLayout(request, messageSource, localeResolver));

		return "index-" + template;
	}
}
