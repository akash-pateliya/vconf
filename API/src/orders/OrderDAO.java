package mypack;

import java.util.List;

public interface OrderDAO
{
	List getOrderDetails(String name);
	void addOrder(Orders order);
}
