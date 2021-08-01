package mypack;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity
public class Admin {

	@Id
	@GeneratedValue(strategy=GenerationType.AUTO)
	private int id;
	private String adminname;
	private String adminaddress;
	private String adminconntactnumber;
	private String adminemail;
	private String adminId;
	private String adminpassword;
	
	
	public Admin()
	{
		
	}
	
	public Admin(int id, String adminname, String adminaddress, String adminconntactnumber, String adminemail,
			String adminId, String adminpassword) {
		super();
		this.id = id;
		this.adminname = adminname;
		this.adminaddress = adminaddress;
		this.adminconntactnumber = adminconntactnumber;
		this.adminemail = adminemail;
		this.adminId = adminId;
		this.adminpassword = adminpassword;
	}
	public int getId() {
		return id;
	}
	public void setId(int id) {
		this.id = id;
	}
	public String getAdminname() {
		return adminname;
	}
	public void setAdminname(String adminname) {
		this.adminname = adminname;
	}
	public String getAdminaddress() {
		return adminaddress;
	}
	public void setAdminaddress(String adminaddress) {
		this.adminaddress = adminaddress;
	}
	public String getAdminconntactnumber() {
		return adminconntactnumber;
	}
	public void setAdminconntactnumber(String adminconntactnumber) {
		this.adminconntactnumber = adminconntactnumber;
	}
	public String getAdminemail() {
		return adminemail;
	}
	public void setAdminemail(String adminemail) {
		this.adminemail = adminemail;
	}
	public String getAdminId() {
		return adminId;
	}
	public void setAdminId(String adminId) {
		this.adminId = adminId;
	}
	public String getAdminpassword() {
		return adminpassword;
	}
	public void setAdminpassword(String adminpassword) {
		this.adminpassword = adminpassword;
	}
	@Override
	public String toString() {
		return "Admin [id=" + id + ", adminname=" + adminname + ", adminaddress=" + adminaddress
				+ ", adminconntactnumber=" + adminconntactnumber + ", adminemail=" + adminemail + ", adminId=" + adminId
				+ ", adminpassword=" + adminpassword + "]";
	}
	
}
