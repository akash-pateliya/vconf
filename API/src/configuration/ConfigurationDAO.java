package mypack;

import java.util.List;

public interface ConfigurationDAO {

	List getDefFeatures(String variantname);
	List getIntFeatures(String variantname);
	List getExtFeatures(String variantname);
	List getStdFeatures(String variantname);
	
	List getIntAccMakers(String variantname,String intfeature);
	List getExtAccMakers(String variantname,String extfeature);
	List getStdAccMakers(String variantname,String stdfeature);
	
	List getIntAccMakersPrice(String variantname,String AccMaker);
	List getExtAccMakersPrice(String variantname,String AccMaker);
	List getStdAccMakersPrice(String variantname,String AccMaker);
	
	
	List getAllFeatures(String variantname);
	List getDefaultFeatures(String varientname);
	
	List getStandardFeatures(String varientname);

	List getInteriorFeatures(String varientname);

	List getExteriorFeatures(String varientname);

	List getImagePath(String varientname);

	List getVehiclePrice(String varientname);

	
}
