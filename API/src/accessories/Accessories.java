package mypack;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity
public class Accessories 
{
	private int deltaprice,accid;
	private String variantname,configtype,configaccname,accmaker;
	
	
	public int getDeltaprice() {
		return deltaprice;
	}
	public void setDeltaprice(int deltaprice) {
		this.deltaprice = deltaprice;
	}
	
	@Id
	@GeneratedValue(strategy=GenerationType.AUTO)
	public int getAccid() {
		return accid;
	}
	public void setAccid(int accid) {
		this.accid = accid;
	}
	public String getVariantname() {
		return variantname;
	}
	public void setVariantname(String variantname) {
		this.variantname = variantname;
	}
	public String getConfigtype() {
		return configtype;
	}
	public void setConfigtype(String configtype) {
		this.configtype = configtype;
	}
	public String getConfigaccname() {
		return configaccname;
	}
	public void setConfigaccname(String configaccname) {
		this.configaccname = configaccname;
	}
	public String getAccmaker() {
		return accmaker;
	}
	public void setAccmaker(String accmaker) {
		this.accmaker = accmaker;
	}
	
}
