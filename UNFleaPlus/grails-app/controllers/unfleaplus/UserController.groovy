package unfleaplus
import java.security.AllPermission;

import org.apache.shiro.SecurityUtils
import org.apache.shiro.authc.AuthenticationException
import org.apache.shiro.authc.UsernamePasswordToken
import org.apache.shiro.web.util.SavedRequest
import org.apache.shiro.web.util.WebUtils

import grails.plugin.email.*
import grails.transaction.Transactional;
class UserController {
	def shiroSecurityService
	def user
	def user1
	def mailService
	def index() {
		redirect(controller:'user',action:'list')
	}
	
	public def static recoveryRequest(user){
		return Request.executeQuery("select distinct b.products.name from Request b where b.userReciving.username=?" , [user])
	}
	
	def loginSearch(){
		print "hola"
		redirect(controller:'user',action:'login', params:[email:params.email,password:params.password,search:true])
	}
	def viewRegister(){

		if(session.user){
			redirect(controller:'user',action:'viewHome')
		}
		def products = ProductController.recoveryProduct()
		print products
		render(controller:'user',view:'register',model:[search:products])
	}
	def viewHome(){
		redirect(controller:'user',action:'list')
	}
	def sendEmail() {
		mailService.sendMail {
			to "unfleaplus@gmail.com"
			subject params.name + " comment (" + params.email + ")"
			body params.message
		}
		redirect(controller:'index' ,action:'index')
	}
	@Transactional
	def login(){
		def authToken
		user=User.findByEmail(params.email)

		if (user){
			if(user.active){
				authToken = new UsernamePasswordToken(user.username, params.password as String)
			}else{
				authToken = new UsernamePasswordToken(user.username, "" as String)
				flash.message = message(code: "active")
			}
		}else{
			authToken = new UsernamePasswordToken(params.email, params.password as String)
		}


		try{
			// Perform the actual login. An AuthenticationException
			// will be thrown if the username is unrecognised or the
			// password is incorrect.
			SecurityUtils.subject.login(authToken)
			session["user"]=user.username
			println(session.user)
			print params.search
			if(params.search){

				redirect(controller:'product',action:'viewRequest')
			}else{
				redirect(controller:'user',action:'viewHome')
			}
		}
		catch (AuthenticationException ex){
			// Authentication failed, so display the appropriate message
			// on the login page.
			if(!flash.message){
				flash.message = message(code: "login.failed")
			}




			// Now redirect back to the login page.
			redirect(controller:'index',action:'viewHome')
		}
		// Keep the username and "remember me" setting so that the
		// user doesn't have to enter them again.




	}
	@Transactional
	def register(){
		user=User.findByEmail(params.email)
		user1 =User.findByUsername(params.username)
		if(user){ //El usuario ya existe
			flash.message = "User already exists with the email '${params.email}'"
			//TODO
			//Arreglar este render
			redirect(controller:'user',action:'viewRegister')
		}
		else if(user1){ //El usuario ya existe
			flash.message = "User already exists with the username '${params.username}'"
			//TODO
			//Arreglar este render
			redirect(controller:'user',action:'viewRegister')
		}
		else{//Nuevo Usario
			def f = request.getFile("avatar")
			print params.country
			print params.state

			def parameters =[email:params.email,username:params.username,firstName:params.firstname,lastName:params.lastname
				,gender:params.gender,passwordHash:shiroSecurityService.encodePassword(params.password),active:false,avatar:f.getBytes()
				,userCity:params.state,userCountry:params.country]
			user= new User(parameters)
			mailService.sendMail {
				to "${user.email}"
				subject "Confirmar email"
				html    g.render(template:'/email/registrationConfirmation', model:[user:user,password:params.password])
			}
			if(user.save(flush: true)){
				user.addToRoles(Role.findByName("ROLE_USER"))
				user.addToPermissions("*:*")

				redirect(controller:'index', action:'viewHome')
			}
		}

	}
	def avatar_image(){
		user = User.get(params.id)
		OutputStream out = response.outputStream
		out.write(user.avatar)
		out.close()

	}
	@Transactional
	def confirmEmail(){
		user=User.findByEmail(params.email)
		user.active=true
		user.save(flush: true)
		redirect(controller:'index', action:'viewHome')
	}
	@Transactional
	def logout(){
		SecurityUtils.subject?.logout()
		webRequest.getCurrentRequest().session = null
		session["user"]=null
		// For now, redirect back to the home page.

		redirect(controller:'index',action:'viewHome')
	}

	def list(){

		if(session.user){
			user= User.findByUsername(session.user)
			def allProducts = ProductController.recoveryProduct()
			def requests=Request.executeQuery("select distinct b.products.name from Request b where b.userReciving.username=?" , [session.user])
			//def requests = Request.findAll("from Request as b where b.userReciving.username=?",[session.user])
			def messages=Message.executeQuery("select distinct user1 from Message  where username=?",[session.user] )
			def messages1=Message.executeQuery("select distinct username from Message  where user1=?",[session.user] ) 
			def allMessages=messages+messages1
			print 	allMessages 
			allMessages= allMessages as Set

			def c = Product.createCriteria()
			def results = c.list(params){
				createAlias("user", "c")
				eq("c.id", user.getId())
			}
			user= User.findByUsername(session.user)
			def total = Product.findAll ("from Product as b where b.user.username=? ",[session.user])

			render(controller:'user',view:'home',model:[search:allProducts,products:results, totalProduct:total.size(),user:user,totalRequest:requests.size(),requests:requests,totalMessages:allMessages.size(),messages:allMessages])

		}else{
			redirect(controller:'index',action:'viewHome')
		}

	}

	def product_image(){

		def temp = Image.get(params.id)

		OutputStream out = response.outputStream
		out.write(temp.image)
		out.close()

	}
	def userRequest(){
		if(session.user){ 
			print params.name
			def requests=Request.executeQuery("select distinct b.products.name from Request b where b.userReciving.username=?" , [session.user])
			def requests1 = Request.findAll("from Request as b where b.userReciving.username=? AND b.products.name=?",[session.user,params.name])
			def lista = []
			print requests1.productsToRequest
			requests1.productsToRequest.each {prod ->
				prod.each {
					lista+=Long.parseLong(""+it)
				}
			}
			print lista
			def product = Product.findAll("from Product as b where b.id in (:ids)",[ids:lista])
			
			//print product
			def allProducts = ProductController.recoveryProduct()
			def allRequests = UserController.recoveryRequest(session.user)
			render(controller:'user',view:'userRequest',model:[search:allProducts,requests:allRequests,user:User.findByUsername(session.user),requests1:requests1,products:product])
		}else{
			redirect(controller:'index',action:'viewHome')
		}
		
	}
	def chatMessages(){
		def messages=Message.executeQuery("select distinct user1 from Message  where username=?",[session.user] )
		def messages1=Message.executeQuery("select distinct username from Message  where user1=?",[session.user] )
		def allMessages=messages+messages1
		print 	allMessages
		allMessages= allMessages as Set
		render ""+allMessages.size()
	}
	def chatMessagesList(){
		def messages=Message.executeQuery("select distinct user1 from Message  where username=?",[session.user] )
		def messages1=Message.executeQuery("select distinct username from Message  where user1=?",[session.user] )
		def allMessages=messages+messages1
		print 	allMessages
		allMessages= allMessages as Set
		[messages:allMessages]
	}
	
	def profileView(){
		if(session.user){
			def user_temp = User.findByUsername(session.user )
			render(controller:"user",view:"profile", model:[user:user_temp])
		}
		else{
			redirect(controller:'index',action:'viewHome')
		}
		
	}
	
	
	def updateProfile(){
		def currentUser = User.findByUsername(session.user )
		currentUser.firstName=params.name
		currentUser.lastName=params.lastName
		currentUser.email=params.email
		currentUser.userCity=params.city
		currentUser.userCountry=params.country
		
		if(params.screenshot!=null &&  params.screenshot.getBytes().size()>0)
			currentUser.avatar =params.screenshot.getBytes()
		
		if(currentUser.save(flush:true)){
			render(controller: 'user', view: 'home', model:[user:currentUser])
		}else{
			render(controller: 'index', view: 'index' )
		}
	}

}

