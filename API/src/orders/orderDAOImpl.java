package mypack;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.orm.hibernate5.HibernateTemplate;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

@Repository
@Transactional
public class orderDAOImpl implements OrderDAO
{

	@Autowired
	HibernateTemplate template;
	
	@Override
	public List getOrderDetails(String name)
	{
		String query="from Orders o where o.name=?";
		
	List orderList=	template.find(query,name);
	return orderList;
	}

	@Override
	public void addOrder(Orders order) 
	{
		template.save(order);
	}

}
