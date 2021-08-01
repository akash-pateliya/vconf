package mypack;

import static javax.persistence.GenerationType.IDENTITY;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;

@Entity
public class Variant
{
	private int variantid,price;
	private String segname, manufacturername,variantname,imagepath;
	
	@Id
	@GeneratedValue(strategy = IDENTITY)
	public int getVariantid() {
		return variantid;
	}
	public void setVariantid(int variantid) {
		this.variantid = variantid;
	}
	public int getPrice() {
		return price;
	}
	public void setPrice(int price) {
		this.price = price;
	}
	public String getSegname() {
		return segname;
	}
	public void setSegname(String segname) {
		this.segname = segname;
	}
	public String getManufacturername() {
		return manufacturername;
	}
	public void setManufacturername(String manufacturername) {
		this.manufacturername = manufacturername;
	}
	public String getVariantname() {
		return variantname;
	}
	public void setVariantname(String variantname) {
		this.variantname = variantname;
	}
	public String getImagepath() {
		return imagepath;
	}
	public void setImagepath(String imagepath) {
		this.imagepath = imagepath;
	}
	
	
	}
