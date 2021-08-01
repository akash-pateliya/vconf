package mypack;

import org.json.simple.JSONArray;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

import com.google.gson.Gson;

@RestController
@CrossOrigin(origins = "http://localhost:4200")
public class ManufacturerController
{	
	@Autowired
	ManufacturerDAO mdao;
	
	@GetMapping(value="crud/manufacturers", headers="Accept=application/json")
	public String getManufacturers()
	{
		return new Gson().toJson(mdao.getManufacturerList());
	}
	
	@GetMapping(value="crud/manufacturer/{segname}", headers="Accept=application/json")
	public String getManuBySegment(@PathVariable String segname)
	{
		System.out.println(segname);
		return new Gson().toJson(mdao.getManulist(segname));
	}
	
	@GetMapping(value="crud/manufacturer/{segname}/{manufacturername}", headers="Accept=application/json")
	public String getVariant(@PathVariable String segname,@PathVariable String manufacturername)
	{   String temp=new Gson().toJson(mdao.getVariant(segname, manufacturername));
		System.out.println(temp);
		return temp;
	}
}
