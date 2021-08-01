package mypack;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity

public class Config {
	@Id
	@GeneratedValue(strategy=GenerationType.AUTO)
	private int configid;
	private String configname;
	private String configtype;
	private String configurable;
	private String variantname;
	public int getConfigid() {
		return configid;
	}
	public void setConfigid(int configid) {
		this.configid = configid;
	}
	public String getConfigname() {
		return configname;
	}
	public void setConfigname(String configname) {
		this.configname = configname;
	}
	public String getConfigtype() {
		return configtype;
	}
	public void setConfigtype(String configtype) {
		this.configtype = configtype;
	}
	public String getConfigurable() {
		return configurable;
	}
	public void setConfigurable(String configurable) {
		this.configurable = configurable;
	}
	public String getVariantname() {
		return variantname;
	}
public void setVariantname(String varientname) {
		this.variantname = varientname;
	}
	@Override
	public String toString() {
		return "Configuration [configid=" + configid + ", configname=" + configname + ", configtype=" + configtype
				+ ", configurable=" + configurable + ", variantname=" + variantname + "]";
	}
	
	
}
