package mypack;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.google.gson.Gson;

@RestController
public class OrderController
{
	@Autowired
	OrderDAO odao;
	
	@GetMapping(value = "getorder/{name}", headers = "Accept=application/json")
	public String orders(@PathVariable String name)
	{
		
		return new Gson().toJson(odao.getOrderDetails(name));
	}
	
	@PostMapping(value = "addorder", headers = "Accept=application/json")
	public void AddOrder(@RequestBody Orders order)
	{
		System.out.println(order.name);
		odao.addOrder(order);
	}
	
}
