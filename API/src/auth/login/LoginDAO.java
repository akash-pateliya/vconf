package mypack;

import javax.servlet.http.HttpSession;

public interface LoginDAO 
{
//	void getUserDetails(HttpSession session,Register register);
	boolean Verify(Register register);	
}
