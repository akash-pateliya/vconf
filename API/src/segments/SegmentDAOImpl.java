package mypack;

import java.util.List;

import javax.persistence.Query;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.orm.hibernate5.HibernateTemplate;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.bind.annotation.PathVariable;
@Repository
@Transactional
public class SegmentDAOImpl  implements SegmentDAO
{	@Autowired
	HibernateTemplate template;

	@Override
	public List<Segment> getSegments() {
		List<Segment> list = (List<Segment>) template.find("from Segment");
		return list;
	}
	
	/*@Override
	public List getManufacturer(@PathVariable String segment) 
	{
		// TODO Auto-generated method stub
		String query = "select distinct manufacturername from Variant where segmentname =?";
		List manuflist=template.find(query, segment)	;
		System.out.println(manuflist);
		return manuflist;
	}
*/
}
