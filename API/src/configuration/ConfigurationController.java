package mypack;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.Iterator;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.google.gson.Gson;

@RestController
@CrossOrigin(origins = "http://localhost:4200")
public class ConfigurationController {
	@Autowired
	ConfigurationDAO cdao;
	
	
	
	
	
	@GetMapping(value = "GetDefaultFeatures/{varientname}", headers = "Accept=application/json") 
	 public List getdefaultfeatures(@PathVariable String varientname)	
	{
		List defaultFeatures= cdao.getDefaultFeatures(varientname);
		return  defaultFeatures;
	}
	@GetMapping(value = "GetStandardFeatures/{varientname}", headers = "Accept=application/json") 
	 public List getStandardFeatures(@PathVariable String varientname)	
	 {
		List standardFeatures = cdao.getStandardFeatures(varientname);
		return 	standardFeatures;	
	 }
	
	
	@GetMapping(value = "GetInteriorFeatures/{varientname}", headers = "Accept=application/json") 
	 public List getInteriorFeatures(@PathVariable String varientname)	
	 {
		List interiorFeatures = cdao.getInteriorFeatures(varientname);
			return 	interiorFeatures;
	 }
	
	
	@GetMapping(value = "GetExteriorFeatures/{varientname}", headers = "Accept=application/json") 
	 public List getExteriorFeatures(@PathVariable String varientname)	
	 {
		List exteriorFeatures = cdao.getExteriorFeatures(varientname);
		return exteriorFeatures;
	 
	 }
	
	
	@GetMapping(value = "GetVehiclePrice/{varientname}", headers = "Accept=application/json") 
	 public List getVehiclePrice(@PathVariable String varientname)	
	 {
		List priceList = cdao.getVehiclePrice(varientname);
		return priceList;
	 }
	
	
	@GetMapping(value = "GetImagePath/{varientname}", headers = "Accept=application/json") 
	 public List getDefaultFeatures(@PathVariable String varientname)	
	 {
		 List imagePath= cdao.getImagePath(varientname);
		 return imagePath;
	 }
	
	@GetMapping(value="showIntConfUser/{variantname}",headers="Accept=application/json")
	public String ShowIntConfiguration(@PathVariable String variantname )
	{
		String json=null;
		
		List intconf=cdao.getIntFeatures(variantname);
		
		Iterator iItr = intconf.iterator();
		
		Map<String,Map> mymap=new HashMap<>();
		
		
		while(iItr.hasNext())
		{			
			String intFeatures = (String) iItr.next();
			
			List iAccMaker=cdao.getIntAccMakers(variantname,intFeatures);
			Map<String,List> ipricemap=new HashMap<>();
			//mymap.put(intFeatures, iAccMaker);
			
			Iterator ipitr = iAccMaker.iterator();
			
			while(ipitr.hasNext())
			{			
				String intAccMaker = (String) ipitr.next();
				List iAccMakerPrice=cdao.getIntAccMakersPrice(variantname,intAccMaker);
				
				ipricemap.put(intAccMaker,iAccMakerPrice);
			}		
			mymap.put(intFeatures, ipricemap);
		}
		
		List extconf=cdao.getExtFeatures(variantname);
		
		Iterator eItr = extconf.iterator();
		
		
		while(eItr.hasNext())
		{			
			String extFeatures = (String) eItr.next();
			List eAccMaker=cdao.getExtAccMakers(variantname,extFeatures);
			Map<String,List> epricemap=new HashMap<>();
			//mymap.put(extFeatures, eAccMaker);
			
			Iterator epitr = eAccMaker.iterator();
			
			while(epitr.hasNext())
			{			
				String extAccMaker = (String) epitr.next();
				List eAccMakerPrice=cdao.getExtAccMakersPrice(variantname,extAccMaker);
				
				epricemap.put(extAccMaker,eAccMakerPrice);
			}		
			mymap.put(extFeatures, epricemap);
		}
		
		 List stdconf=cdao.getStdFeatures(variantname);
		
		Iterator sItr = stdconf.iterator();
		
		
		while(sItr.hasNext())
		{			
			String stdFeatures = (String) sItr.next();
			List sAccMaker=cdao.getStdAccMakers(variantname,stdFeatures);
			Map<String,List> spricemap=new HashMap<>();
			Iterator spitr = sAccMaker.iterator();
			
			while(spitr.hasNext())
			{			
				String stdAccMaker = (String) spitr.next();
				List sAccMakerPrice=cdao.getStdAccMakersPrice(variantname,stdAccMaker);
				
				spricemap.put(stdAccMaker,sAccMakerPrice);
			}		
			mymap.put(stdFeatures, spricemap);
		
		}
	
		ObjectMapper objectMapper = new ObjectMapper();
		
        try 
        {
            json = objectMapper.writeValueAsString(mymap);
            
            System.out.println(json);
            
        } 
        catch (JsonProcessingException e)
        {
            e.printStackTrace();
        }
        
        return json;
	}
	
	
	/*@GetMapping(value="showIntConfUser/{variantname}",headers="Accept=application/json")
	public String ShowIntConfiguration(@PathVariable String variantname )
	{
		String json=null;
		
		List intconf=cdao.getIntFeatures(variantname);
		
		Iterator iItr = intconf.iterator();
		
		Map<String,Map> mymap=new HashMap<>();
		Map<String,List> pricemap=new HashMap<>();
		
		while(iItr.hasNext())
		{			
			String intFeatures = (String) iItr.next();
			List iAccMaker=cdao.getIntAccMakers(variantname,intFeatures);
			
			//mymap.put(intFeatures, iAccMaker);
			
			Iterator ipitr = iAccMaker.iterator();
			
			while(ipitr.hasNext())
			{			
				String intAccMaker = (String) ipitr.next();
				List iAccMakerPrice=cdao.getIntAccMakersPrice(variantname,intAccMaker);
				
				pricemap.put(intAccMaker,iAccMakerPrice);
			}		
			mymap.put(intFeatures, pricemap);
		}
		
		List extconf=cdao.getExtFeatures(variantname);
		
		Iterator eItr = extconf.iterator();
		
		
		while(eItr.hasNext())
		{			
			String extFeatures = (String) eItr.next();
			List eAccMaker=cdao.getExtAccMakers(variantname,extFeatures);
			
			//mymap.put(extFeatures, eAccMaker);
			
			Iterator epitr = eAccMaker.iterator();
			
			while(epitr.hasNext())
			{			
				String extAccMaker = (String) epitr.next();
				List eAccMakerPrice=cdao.getExtAccMakersPrice(variantname,extAccMaker);
				
				pricemap.put(extAccMaker,eAccMakerPrice);
			}		
			mymap.put(extFeatures, pricemap);
		}
		
		 List stdconf=cdao.getStdFeatures(variantname);
		
		Iterator sItr = stdconf.iterator();
		
		
		while(sItr.hasNext())
		{			
			String stdFeatures = (String) sItr.next();
			List sAccMaker=cdao.getStdAccMakers(variantname,stdFeatures);
			
			Iterator spitr = sAccMaker.iterator();
			
			while(spitr.hasNext())
			{			
				String stdAccMaker = (String) spitr.next();
				List sAccMakerPrice=cdao.getStdAccMakersPrice(variantname,stdAccMaker);
				
				pricemap.put(stdAccMaker,sAccMakerPrice);
			}		
			mymap.put(stdFeatures, pricemap);
		
		}
	
		ObjectMapper objectMapper = new ObjectMapper();
		
        try 
        {
            json = objectMapper.writeValueAsString(mymap);
            
            System.out.println(json);
            
        } 
        catch (JsonProcessingException e)
        {
            e.printStackTrace();
        }
        
        return json;
        
		
		//return new Gson().toJson(cdao.getAllFeatures(variantname));
	}
	/*
	@GetMapping(value="showInterior/{variantname}",headers="Accept=application/json")
	public String showInterior(@PathVariable String variantname)
	{
		return new Gson().toJson(cdao.getIntFeatures(variantname));
	}
	
	@GetMapping(value="showExterior/{variantname}",headers="Accept=application/json")
	public String showExterior(@PathVariable String variantname)
	{
		return new Gson().toJson(cdao.getExtFeatures(variantname));
	}
	
	@GetMapping(value="showStandard/{variantname}",headers="Accept=application/json")
	public String showStandard(@PathVariable String variantname)
	{
		return new Gson().toJson(cdao.getStdFeatures(variantname));
	}
	
	@GetMapping(value="showDefault/{variantname}",headers="Accept=application/json")
	public String showDefault(@PathVariable String variantname)
	{
		return new Gson().toJson(cdao.getDefFeatures(variantname));
	} */
	
	/*@PostMapping(value = "GetTotalPrice/{price}/{quantity}", headers = "Accept=application/json")
	public long grttotalprice(@RequestBody String param1,@RequestBody String param2)
	{   System.out.println(param1);
	System.out.println(param2);
	
	int a=Integer.parseInt(param1);
    int b=Integer.parseInt(param2);
		//int result=price * quantity;
		return a*b; 
	}*/
	
	 /* @GetMapping(value="showIntConfUser/{variantname}",headers="Accept=application/json")
	public String ShowIntConfiguration(@PathVariable String variantname )
	{
		String json=null;
		
		
		List intconf=cdao.getIntFeatures(variantname);
		
		Iterator iItr = intconf.iterator();
		
		Map<String,Map> mymap=new HashMap<>();
		Map<String,List> pricemap=new HashMap<>();
		
		while(iItr.hasNext())
		{			
			String intFeatures = (String) iItr.next();
			List iAccMaker=cdao.getIntAccMakers(variantname,intFeatures);
			
			//mymap.put(intFeatures, iAccMaker);
			
			Iterator ipitr = iAccMaker.iterator();
			
			while(ipitr.hasNext())
			{			
				String intAccMaker = (String) ipitr.next();
				List iAccMakerPrice=cdao.getIntAccMakersPrice(variantname,intAccMaker);
				
				pricemap.put(intAccMaker,iAccMakerPrice);
			}		
			mymap.put(intFeatures, pricemap);
		}
		
		List extconf=cdao.getExtFeatures(variantname);
		
		Iterator eItr = extconf.iterator();
		
		
		while(eItr.hasNext())
		{			
			String extFeatures = (String) eItr.next();
			List eAccMaker=cdao.getExtAccMakers(variantname,extFeatures);
			
			//mymap.put(extFeatures, eAccMaker);
			
			Iterator epitr = eAccMaker.iterator();
			
			while(epitr.hasNext())
			{			
				String extAccMaker = (String) epitr.next();
				List eAccMakerPrice=cdao.getExtAccMakersPrice(variantname,extAccMaker);
				
				pricemap.put(extAccMaker,eAccMakerPrice);
			}		
			mymap.put(extFeatures, pricemap);
		}
		
		 List stdconf=cdao.getStdFeatures(variantname);
		
		Iterator sItr = stdconf.iterator();
		
		
		while(sItr.hasNext())
		{			
			String stdFeatures = (String) sItr.next();
			List sAccMaker=cdao.getStdAccMakers(variantname,stdFeatures);
			
			Iterator spitr = sAccMaker.iterator();
			
			while(spitr.hasNext())
			{			
				String stdAccMaker = (String) spitr.next();
				List sAccMakerPrice=cdao.getStdAccMakersPrice(variantname,stdAccMaker);
				
				pricemap.put(stdAccMaker,sAccMakerPrice);
			}		
			mymap.put(stdFeatures, pricemap);
		
		}
	
		ObjectMapper objectMapper = new ObjectMapper();
		
        try 
        {
            json = objectMapper.writeValueAsString(mymap);
            
            System.out.println(json);
            
        } 
        catch (JsonProcessingException e)
        {
            e.printStackTrace();
        }
        
        return json; 
        
		
		//return new Gson().toJson(cdao.getAllFeatures(variantname));
	}
	/*
	@GetMapping(value="showInterior/{variantname}",headers="Accept=application/json")
	public String showInterior(@PathVariable String variantname)
	{
		return new Gson().toJson(cdao.getIntFeatures(variantname));
	}
	
	@GetMapping(value="showExterior/{variantname}",headers="Accept=application/json")
	public String showExterior(@PathVariable String variantname)
	{
		return new Gson().toJson(cdao.getExtFeatures(variantname));
	}
	
	@GetMapping(value="showStandard/{variantname}",headers="Accept=application/json")
	public String showStandard(@PathVariable String variantname)
	{
		return new Gson().toJson(cdao.getStdFeatures(variantname));
	}
	
	@GetMapping(value="showDefault/{variantname}",headers="Accept=application/json")
	public String showDefault(@PathVariable String variantname)
	{
		return new Gson().toJson(cdao.getDefFeatures(variantname));
	} */
	
	/*@PostMapping(value = "GetTotalPrice/{price}/{quantity}", headers = "Accept=application/json")
	public long grttotalprice(@RequestBody String param1,@RequestBody String param2)
	{   System.out.println(param1);
	System.out.println(param2);
	
	int a=Integer.parseInt(param1);
    int b=Integer.parseInt(param2);
		//int result=price * quantity;
		return a*b; 
	}*/

}
