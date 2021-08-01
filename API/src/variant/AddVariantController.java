package mypack;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.google.gson.Gson;

@RestController
@CrossOrigin(origins = "http://localhost:4200")
public class AddVariantController 
{
 @Autowired
 AddVariantDAO avd;
 
 @PostMapping(value = "AddVariant", headers = "Accept=application/json")  
 public String addvehicle(@RequestBody Variant variant)
 {
	 avd.Iaddvehicle(variant);
    return new Gson().toJson("Added "+variant.getVariantname()+" into the table");
	  
 }
 
 @PostMapping(value = "DeleteVariant", headers = "Accept=application/json")  
 public String deletevehicle(@RequestBody Variant variant)
 {
	 avd.Ideletevehicle(variant);
    return new Gson().toJson("Successfully deleted  "+variant.getVariantname()+" from the table");
	  
 }
 
}
