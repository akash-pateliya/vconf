package mypack;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.orm.hibernate5.HibernateTemplate;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;
@Repository
@Transactional
public class ConfigurationDAOImpl implements ConfigurationDAO {

	@Autowired
	HibernateTemplate template;
	@Override
	public List getDefaultFeatures(String variantName) 
	{
		Object[] param={variantName};
		String featureType="Default";
		String query="select c.configname from Config c where c.variantname = '"+variantName+"'and c.configtype ='"+featureType+"'";
				List defaultfeaturelist=template.find(query);
				return defaultfeaturelist;
		
		
		
	}

	@Override
	public List getStandardFeatures(String variantName) {
		
		Object[] param={variantName};
		String featureType="Standard";
		String query="select c.configname from Config c where c.variantname = '"+variantName+"'and c.configtype ='"+featureType+"'";
				List standardfeaturelist=template.find(query);
				return standardfeaturelist;
	}

	@Override
	public List getInteriorFeatures(String variantName) {
		

		Object[] param={variantName};
		String featureType="Interior";
		String query="select c.configname from Config c where c.variantname = '"+variantName+"'and c.configtype ='"+featureType+"'";
				List interiorfeaturelist=template.find(query);
				return interiorfeaturelist;
	}

	@Override
	public List getExteriorFeatures(String variantName) {

		Object[] param={variantName};
		String featureType="Exterior";
		String query="select c.configname from Config c where c.variantname = '"+variantName+"'and c.configtype ='"+featureType+"'";
				List exteriorfeaturelist=template.find(query);
				return exteriorfeaturelist;
	}

	@Override
	public List  getVehiclePrice(String variantName) {

		Object[] param={variantName};
		
		String query="select v.price from Variant v  where v.variantname = '"+variantName+"'";
				List pricelist=template.find(query);
				return pricelist;
	}

	@Override
	public List getImagePath(String varientname) {
		
Object[] param={varientname};
		
		String query="select v.imagepath from Variant v  where v.variantname = '"+varientname+"'";
				List imagelist=template.find(query);
				return imagelist;
	}
	
	
	@Override
	public List getDefFeatures(String variantname) 
	{
		Object[] prm={"Default"};
		List list=template.find("select c.configname from Config c where c.variantname = '"+variantname+"' and c.configtype = ?",prm);
		return list;
	}

	@Override
	public List getIntFeatures(String variantname) {
		Object[] prm={"Interior"};
		List intfeatures = template.find("select a.configtype from Accessories a where a.variantname = '"+variantname+"' AND a.configaccname = ?" ,prm);
		return intfeatures;
	}

	@Override
	public List getExtFeatures(String variantname) {
		Object[] prm={"Exterior"};
		List extfeatures = template.find("select a.configtype from Accessories a where a.variantname = '"+variantname+"' AND a.configaccname = ?" ,prm);
		return extfeatures;
	}

	@Override
	public List getStdFeatures(String variantname) {
		Object[] prm={"Standard"};
		List stdfeatures = template.find("select a.configtype from Accessories a where a.variantname = '"+variantname+"' AND a.configaccname = ?" ,prm);
		return stdfeatures;
	}

	@Override
	public List getIntAccMakers(String variantname, String intfeature) 
	{
		List interiorMakers = template.find("select a.accmaker from Accessories a where a.variantname = '"+variantname+"' AND a.configtype = '"+intfeature+"'");
		//System.out.println(intfeature);
			
		//System.out.println(interiorMakers);
		return interiorMakers;
	}

	@Override
	public List getExtAccMakers(String variantname, String extfeature) {
		List exteriorMakers = template.find("select a.accmaker from Accessories a where a.variantname = '"+variantname+"' AND a.configtype = '"+extfeature+"'");
		return exteriorMakers;
	}

	@Override
	public List getStdAccMakers(String variantname, String stdfeature) {
		List standardMakers = template.find("select a.accmaker from Accessories a where a.variantname = '"+variantname+"' AND a.configtype = '"+stdfeature+"'");
		return standardMakers;
		}

	@Override
	public List getIntAccMakersPrice(String variantname, String AccMaker)
	{
		List intAccessoryPrice = template.find("select a.deltaprice from Accessories a where a.accmaker = '"+AccMaker+"' AND a.variantname = '"+variantname+"'");
		return intAccessoryPrice;
	}

	@Override
	public List getExtAccMakersPrice(String variantname, String AccMaker) {
		List extAccessoryPrice = template.find("select a.deltaprice from Accessories a where a.accmaker = '"+AccMaker+"' AND a.variantname = '"+variantname+"'");
		return extAccessoryPrice;	}

	@Override
	public List getStdAccMakersPrice(String variantname, String AccMaker) {
		List stdAccessoryPrice = template.find("select a.deltaprice from Accessories a where a.accmaker = '"+AccMaker+"' AND a.variantname = '"+variantname+"'");
		return stdAccessoryPrice;
	}

	@Override
	public List getAllFeatures(String variantname) 
	{
		List allfeatures=template.find("from Accessories a where a.variantname=?",variantname);
		return allfeatures;
	}
	

}
