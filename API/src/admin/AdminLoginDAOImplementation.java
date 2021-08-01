package mypack;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.orm.hibernate5.HibernateTemplate;
import org.springframework.stereotype.Component;
import org.springframework.transaction.annotation.Transactional;

@Component
@Transactional
public class AdminLoginDAOImplementation implements AdminLoginDAO {
	@Autowired
	HibernateTemplate template;
	
	public boolean CheckLoginAdmin(Admin admin)
	{
		
			List<Admin> mylist=(List<Admin>) template.find("from Admin where adminid = ? and adminpassword=?",admin.getAdminId(),admin.getAdminpassword());
			
			int No_rows = mylist.size();
			
			if(No_rows==1)
			{
				return true;
				
			}
			
			else
				return false;
		
	}

}
