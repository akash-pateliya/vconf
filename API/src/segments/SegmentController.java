package mypack;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;
import org.json.simple.*;
import com.google.gson.Gson;


@RestController
@CrossOrigin(origins = "http://localhost:4200")

public class SegmentController 
{
	@Autowired
	 SegmentDAO sdao;
	
	@GetMapping(value = "get/segments",headers = "Accept=application/json")
	public String showSegments()
	{
		
		System.out.println("In showsegment");
		return new Gson().toJson(sdao.getSegments());
	}
	
	/*@GetMapping(value="get/manufacturer/{name}", headers = "Accept=application/json")
	public String dispManufacturer(@PathVariable String name)
	{
		//return new Gson().toJson(segment.getManufacturer(name));
		//return segment.getManufacturer(name);
		return JSONArray.toJSONString(sdao.getManufacturer(name));
	}
	*/
}
