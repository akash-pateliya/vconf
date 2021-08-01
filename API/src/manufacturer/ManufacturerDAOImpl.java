package mypack;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.orm.hibernate5.HibernateTemplate;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.bind.annotation.PathVariable;

@Repository
@Transactional
public class ManufacturerDAOImpl implements ManufacturerDAO
{
	@Autowired
	HibernateTemplate template;
	
	
	public List<Manufacturer> getManufacturerList() 
	{
		List<Manufacturer> list = (List<Manufacturer>)template.find("from Manufacturer");
		return list;
	}


	
	public List getManulist(String segment) 
	{
		// TODO Auto-generated method stub
		String query = "select distinct v.manufacturername from Variant v where v.segname =?";
		List manuflist=template.find(query, segment)	;
		System.out.println(manuflist);
		return manuflist;
	}



	@Override
	public List getVariant(String segname, String manufacturername) 
	{
		String query="select v.variantname from Variant v where v.segname ='"+segname+"' and v.manufacturername = '"+manufacturername+"'"; 
		List varlist=template.find(query);
		return varlist;
		
		}
	
}
