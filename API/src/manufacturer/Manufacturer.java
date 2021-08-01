package mypack;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity
public class Manufacturer 
{
	private int ManufacturerId;
	private String ManufacturerName;
	
	@Id
	@GeneratedValue(strategy=GenerationType.AUTO)
	public int getManufacturerId() {
		return ManufacturerId;
	}
	public void setManufacturerId(int manufacturerId) {
		ManufacturerId = manufacturerId;
	}
	public String getManufacturerName() {
		return ManufacturerName;
	}
	public void setManufacturerName(String manufacturerName) {
		ManufacturerName = manufacturerName;
	}
	
	
}
