package mypack;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.orm.hibernate5.HibernateTemplate;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;
@Repository
@Transactional
public class AddVariantDAOImpl implements  AddVariantDAO{
   @Autowired
   HibernateTemplate temp;
   
	public void Iaddvehicle(Variant variant)
	{
		// TODO Auto-generated method stub
	   temp.save(variant);
	}

	public void Ideletevehicle(Variant variant) 
	{
		temp.delete(variant);
	}

}
