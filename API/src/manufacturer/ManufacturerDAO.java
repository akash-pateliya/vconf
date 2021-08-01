package mypack;

import java.util.List;

public interface ManufacturerDAO 
{
	List<Manufacturer> getManufacturerList();
	List  getManulist(String segname);
	List getVariant(String segname,String manufacturername);
}
