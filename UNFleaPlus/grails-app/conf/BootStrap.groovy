import org.apache.shiro.crypto.hash.Sha256Hash
import unfleaplus.User
import unfleaplus.Role
class BootStrap {

    def init = { servletContext ->
		def adminRole = new Role(name: "ROLE_ADMI")
		adminRole.addToPermissions("*:*")
		adminRole.save()
	   
		def userRole = new Role(name: "ROLE_USER")
		userRole.addToPermissions("*:*")
		userRole.save()
		
		def user = new User(email:"andresrene2005@hotmail.com",firstName:"Andres",lastName:"Gutierrez",username: "andres930410",
			passwordHash: new Sha256Hash("gutierrez2011").toHex(),gender:"Male",active:true)
		user.addToRoles(adminRole)
		user.addToPermissions("*:*")
		user.save()
    }

    def destroy = {
    }
}