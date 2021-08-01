package mypack;

import org.springframework.beans.factory.annotation.Autowired;

import org.springframework.web.bind.annotation.*;

import com.google.gson.Gson;


@RestController

@CrossOrigin("http://localhost:4200")
public class RegisterController 
{
	@Autowired
	RegisterDAO sdao;
	
	@PostMapping(value = "Register", headers = "Accept=application/json")  
	 public void Register(@RequestBody Register register)
	 {
	    System.out.println("Registering.....");
		sdao.Register(register);
		
	 }
	
	
	@PostMapping(value = "Login", headers = "Accept=application/json")  
	 public String Verify(@RequestBody Register register)
	 {
	
		boolean b=sdao.Verify(register);
		
		if(b)
		{
			return new Gson().toJson("Valid user");
		}
		
		else
		{
			return new Gson().toJson("Invalid user");
		}
		
	 }
	
}
