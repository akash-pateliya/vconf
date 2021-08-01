package mypack;

import java.util.List;

import javax.servlet.http.HttpSession;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.orm.hibernate5.HibernateTemplate;

import com.google.gson.JsonObject;




public class LoginDAOImpl implements LoginDAO 
{

	@Autowired
	HibernateTemplate template;
	
	@Override
	public boolean Verify(Register register)
	{
		List<Register> mylist=(List<Register>) template.find("from Register where userid = ? and password=?", register. getUserid(),register.getPassword());
		
		int No_rows = mylist.size();
		
		if(No_rows==1)
		{
			return true;
			
		}
		
		else
			return false;
	}
/*
	@Override
	public List getUserDetails(HttpSession session,Register register)
	{
		List UserIdlist = template.find("select r.UserId from Register r where UserId = ? and Password=?", register.getUserId(),register.getPassword());
		//session.setAttribute("UserId", UserIdlist);

		 return UserIdlist;	
	}
	*/
}	

	

