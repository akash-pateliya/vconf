package mypack;

import javax.servlet.http.HttpSession;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;

import com.google.gson.Gson;

public class LoginController 
{
	@Autowired
	LoginDAO ldao;
	
	@GetMapping(value = "Verify", headers = "Accept=application/json")  
	 public String Verify(@RequestBody Register register)
	 {
	
		boolean b=ldao.Verify(register);
		
		if(b)
		{
			return "Valid User";
		}
		
		else
		{
			return "Invalid user";
		}
		
	 }
}

