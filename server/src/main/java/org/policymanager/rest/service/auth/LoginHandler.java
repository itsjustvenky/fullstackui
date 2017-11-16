
package org.policymanager.rest.service.auth;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.util.ArrayList;

import org.policymanager.rest.service.user.User;

/**
 * LoginHandler
 * 
 * @author gopikrishna
 * @date 07-Nov-2017
 */
public class LoginHandler {
	public ArrayList<User> getAllUsers(Connection connection) throws Exception {
		ArrayList<User> userList = new ArrayList<User>();
		try {
			// String uname = request.getParameter("uname");
			PreparedStatement ps = connection.prepareStatement("SELECT * FROM user");
			// ps.setString(1,uname);
			ResultSet rs = ps.executeQuery();
			while (rs.next()) {
				User User = new User();
				User.setLogin(rs.getString("username"));
				User.setPassword(rs.getString("password"));
				userList.add(User);
			}
			return userList;
		} catch (Exception e) {
			throw e;
		}
	}

}