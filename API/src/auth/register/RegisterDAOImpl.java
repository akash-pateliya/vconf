package mypack;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.orm.hibernate5.HibernateTemplate;
import org.springframework.stereotype.Component;
import org.springframework.transaction.annotation.Transactional;

@Component
@Transactional
public class RegisterDAOImpl implements RegisterDAO
{
	
	@Autowired
	HibernateTemplate template;
	
	
	public void Register(Register r)
	{
		template.save(r);
	}
	
	
	@Override
	public boolean Verify(Register register)
	{
		List<Register> mylist=(List<Register>) template.find("from Register where userid = ? and password=?", register. getUserid(),register.getPassword());
		System.out.println(mylist);
		int No_rows = mylist.size();
		
		if(No_rows==1)
		{
			return true;
			
		}
		
		else
			return false;
	}
}
