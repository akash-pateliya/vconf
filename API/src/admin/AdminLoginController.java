package mypack;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.google.gson.Gson;

@RestController
@CrossOrigin(origins = "http://localhost:4200")
public class AdminLoginController 
{
	@Autowired
	AdminLoginDAO aldao;
	
	
	@GetMapping(value = "AdminLogin", headers = "Accept=application/json") 
	 public String Verify(@RequestBody Admin admin)
	 {
boolean b=aldao.CheckLoginAdmin(admin);
		
		if(b)
		{
			return "Valid admin";
		}
		
		else
		{
			return "Invalid admin";
		}
		
		
	 }
}
