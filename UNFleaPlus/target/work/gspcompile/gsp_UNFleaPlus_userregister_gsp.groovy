import org.codehaus.groovy.grails.plugins.metadata.GrailsPlugin
import org.codehaus.groovy.grails.web.pages.GroovyPage
import org.codehaus.groovy.grails.web.taglib.*
import org.codehaus.groovy.grails.web.taglib.exceptions.GrailsTagException
import org.springframework.web.util.*
import grails.util.GrailsUtil

class gsp_UNFleaPlus_userregister_gsp extends GroovyPage {
public String getGroovyPageFileName() { "/WEB-INF/grails-app/views/user/register.gsp" }
public Object run() {
Writer out = getOut()
Writer expressionOut = getExpressionOut()
registerSitemeshPreprocessMode()
printHtmlPart(0)
createTagBody(1, {->
printHtmlPart(1)
invokeTag('javascript','g',3,['library':("jquery"),'plugin':("jquery")],-1)
printHtmlPart(1)
invokeTag('captureMeta','sitemesh',4,['gsp_sm_xmlClosingForEmptyTag':("/"),'name':("layout"),'content':("main")],-1)
printHtmlPart(1)
invokeTag('captureMeta','sitemesh',5,['gsp_sm_xmlClosingForEmptyTag':(""),'name':("viewport"),'content':("width=device-width, initial-scale=1")],-1)
printHtmlPart(1)
createTagBody(2, {->
createTagBody(3, {->
invokeTag('message','g',6,['code':("signUP")],-1)
})
invokeTag('captureTitle','sitemesh',6,[:],3)
})
invokeTag('wrapTitleTag','sitemesh',6,[:],2)
printHtmlPart(1)
invokeTag('stylesheet','asset',7,['src':("bootstrap.css")],-1)
printHtmlPart(1)
invokeTag('stylesheet','asset',8,['src':("navbar.css")],-1)
printHtmlPart(1)
invokeTag('stylesheet','asset',9,['src':("sticky-footer.css")],-1)
printHtmlPart(1)
invokeTag('stylesheet','asset',10,['src':("register.css")],-1)
printHtmlPart(1)
invokeTag('javascript','asset',11,['src':("bootstrap.js")],-1)
printHtmlPart(1)
invokeTag('javascript','asset',12,['src':("register.js")],-1)
printHtmlPart(1)
invokeTag('javascript','asset',13,['src':("modal.js")],-1)
printHtmlPart(1)
invokeTag('javascript','asset',14,['src':("CountryState.js")],-1)
printHtmlPart(1)
invokeTag('javascript','asset',15,['src':("bootstrap-typeahead.js")],-1)
printHtmlPart(1)
invokeTag('javascript','asset',16,['src':("search.js")],-1)
printHtmlPart(1)
invokeTag('javascript','asset',17,['src':("home.js")],-1)
printHtmlPart(2)
})
invokeTag('captureHead','sitemesh',20,[:],1)
printHtmlPart(1)
createTagBody(1, {->
printHtmlPart(3)
invokeTag('link','g',37,['controller':("index"),'action':("viewHome")],-1)
printHtmlPart(4)
createTagBody(2, {->
printHtmlPart(5)
invokeTag('set','g',45,['var':("search1"),'value':(g.message(code:'searchProducts')),'scope':("page")],-1)
printHtmlPart(6)
expressionOut.print(search1)
printHtmlPart(7)
})
invokeTag('form','g',55,['class':("navbar-form navbar-left"),'role':("search"),'controller':("product"),'action':("searchProduct")],2)
printHtmlPart(8)
createTagBody(2, {->
printHtmlPart(9)
invokeTag('message','g',59,['code':("signUP")],-1)
printHtmlPart(10)
})
invokeTag('link','g',60,['controller':("user"),'action':("viewRegister")],2)
printHtmlPart(11)
invokeTag('message','g',62,['code':("howUse")],-1)
printHtmlPart(12)
invokeTag('message','g',66,['code':("login")],-1)
printHtmlPart(13)
invokeTag('set','g',69,['var':("foo"),'value':(g.message(code: 'email')),'scope':("page")],-1)
printHtmlPart(9)
invokeTag('set','g',71,['var':("foo1"),'value':(g.message(code: 'password')),'scope':("page")],-1)
printHtmlPart(14)
createTagBody(2, {->
printHtmlPart(15)
expressionOut.print(foo)
printHtmlPart(16)
expressionOut.print(foo1)
printHtmlPart(17)
invokeTag('message','g',88,['code':("rememberMe")],-1)
printHtmlPart(18)
invokeTag('message','g',94,['code':("login")],-1)
printHtmlPart(19)
})
invokeTag('form','g',97,['role':("form"),'controller':("user"),'action':("login"),'method':("post")],2)
printHtmlPart(20)
invokeTag('message','g',100,['code':("more")],-1)
printHtmlPart(21)
createTagBody(2, {->
printHtmlPart(22)
invokeTag('message','g',104,['code':("contactUs")],-1)
printHtmlPart(23)
})
invokeTag('link','g',105,['controller':("index"),'action':("viewContactUs")],2)
printHtmlPart(24)
createTagBody(2, {->
printHtmlPart(22)
invokeTag('message','g',107,['code':("aboutUs")],-1)
printHtmlPart(23)
})
invokeTag('link','g',108,['controller':("index"),'action':("viewAboutUs")],2)
printHtmlPart(25)
invokeTag('message','g',126,['code':("create")],-1)
printHtmlPart(26)
invokeTag('message','g',127,['code':("personal")],-1)
printHtmlPart(26)
invokeTag('message','g',128,['code':("personal2")],-1)
printHtmlPart(27)
invokeTag('message','g',132,['code':("create")],-1)
printHtmlPart(28)
invokeTag('set','g',136,['var':("foo"),'value':(g.message(code: 'emailVar')),'scope':("page")],-1)
printHtmlPart(29)
invokeTag('set','g',143,['var':("temp"),'value':(g.message(code: 'emailRegister')),'scope':("page")],-1)
printHtmlPart(30)
expressionOut.print(temp)
printHtmlPart(31)
expressionOut.print(foo)
printHtmlPart(32)
invokeTag('set','g',155,['var':("foo1"),'value':(g.message(code: 'usernameVar')),'scope':("page")],-1)
printHtmlPart(33)
invokeTag('set','g',159,['var':("temp1"),'value':(g.message(code: 'username')),'scope':("page")],-1)
printHtmlPart(30)
expressionOut.print(temp1)
printHtmlPart(34)
expressionOut.print(foo1)
printHtmlPart(35)
invokeTag('set','g',171,['var':("foo4"),'value':(g.message(code: 'password')),'scope':("page")],-1)
printHtmlPart(33)
invokeTag('set','g',175,['var':("temp2"),'value':(g.message(code: 'passwordVar')),'scope':("page")],-1)
printHtmlPart(30)
expressionOut.print(temp2)
printHtmlPart(36)
expressionOut.print(foo4)
printHtmlPart(35)
invokeTag('set','g',187,['var':("foo5"),'value':(g.message(code: 'passwordConfirm')),'scope':("page")],-1)
printHtmlPart(33)
invokeTag('set','g',191,['var':("temp3"),'value':(g.message(code: 'passwordConfirmVar')),'scope':("page")],-1)
printHtmlPart(30)
expressionOut.print(temp3)
printHtmlPart(37)
expressionOut.print(foo5)
printHtmlPart(38)
invokeTag('message','g',203,['code':("next")],-1)
printHtmlPart(39)
invokeTag('message','g',210,['code':("personal")],-1)
printHtmlPart(40)
invokeTag('set','g',214,['var':("foo2"),'value':(g.message(code: 'firstname')),'scope':("page")],-1)
printHtmlPart(41)
invokeTag('set','g',219,['var':("temp4"),'value':(g.message(code: 'firstnameVar')),'scope':("page")],-1)
printHtmlPart(42)
expressionOut.print(temp4)
printHtmlPart(43)
expressionOut.print(foo2)
printHtmlPart(44)
invokeTag('set','g',233,['var':("foo3"),'value':(g.message(code: 'lastname')),'scope':("page")],-1)
printHtmlPart(41)
invokeTag('set','g',238,['var':("temp5"),'value':(g.message(code: 'lastnameVar')),'scope':("page")],-1)
printHtmlPart(42)
expressionOut.print(temp5)
printHtmlPart(45)
expressionOut.print(foo3)
printHtmlPart(46)
invokeTag('message','g',255,['code':("male")],-1)
printHtmlPart(47)
invokeTag('message','g',261,['code':("female")],-1)
printHtmlPart(48)
invokeTag('message','g',267,['code':("previous")],-1)
printHtmlPart(49)
invokeTag('message','g',270,['code':("next")],-1)
printHtmlPart(50)
invokeTag('message','g',276,['code':("personal2")],-1)
printHtmlPart(51)
invokeTag('message','g',281,['code':("country")],-1)
printHtmlPart(52)
invokeTag('message','g',287,['code':("state")],-1)
printHtmlPart(53)
invokeTag('message','g',297,['code':("format")],-1)
printHtmlPart(54)
invokeTag('message','g',306,['code':("terms")],-1)
printHtmlPart(55)
invokeTag('message','g',310,['code':("previous")],-1)
printHtmlPart(56)
invokeTag('message','g',313,['code':("signUP")],-1)
printHtmlPart(57)
expressionOut.print(search)
printHtmlPart(58)
invokeTag('message','g',332,['code':("tutorial")],-1)
printHtmlPart(59)
createTagBody(2, {->
printHtmlPart(60)
invokeTag('image','asset',351,['src':("ingles.png"),'alt':("UNFlea+"),'height':("40px"),'width':("40px")],-1)
printHtmlPart(61)
})
invokeTag('link','g',352,['controller':("index"),'action':("viewHome"),'params':([lang:'en'])],2)
printHtmlPart(61)
createTagBody(2, {->
printHtmlPart(60)
invokeTag('image','asset',355,['src':("espanol.png"),'alt':("UNFlea+"),'height':("40px"),'width':("40px")],-1)
printHtmlPart(61)
})
invokeTag('link','g',356,['controller':("index"),'action':("viewHome"),'params':([lang:'es'])],2)
printHtmlPart(62)
invokeTag('image','asset',361,['src':("facebook.png"),'alt':("UNFlea+"),'height':("40px"),'width':("40px")],-1)
printHtmlPart(63)
invokeTag('image','asset',363,['src':("twitter.png"),'alt':("UNFlea+"),'height':("40px"),'width':("40px")],-1)
printHtmlPart(64)
invokeTag('image','asset',365,['src':("github.png"),'alt':("UNFlea+"),'height':("40px"),'width':("40px")],-1)
printHtmlPart(65)
})
invokeTag('captureBody','sitemesh',373,[:],1)
printHtmlPart(66)
}
public static final Map JSP_TAGS = new HashMap()
protected void init() {
	this.jspTags = JSP_TAGS
}
public static final String CONTENT_TYPE = 'text/html;charset=UTF-8'
public static final long LAST_MODIFIED = 1418055796000L
public static final String EXPRESSION_CODEC = 'html'
public static final String STATIC_CODEC = 'none'
public static final String OUT_CODEC = 'html'
public static final String TAGLIB_CODEC = 'none'
}

@org.codehaus.groovy.grails.web.transform.LineNumber(
	lines = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 3, 3, 3, 4, 4, 5, 5, 6, 6, 6, 6, 6, 6, 6, 6, 7, 7, 8, 8, 9, 9, 10, 10, 11, 11, 12, 12, 13, 13, 14, 14, 15, 15, 16, 16, 17, 17, 20, 20, 20, 21, 37, 37, 37, 37, 45, 45, 45, 45, 47, 47, 55, 55, 55, 59, 59, 59, 60, 60, 60, 60, 62, 62, 66, 66, 69, 71, 71, 74, 78, 78, 78, 78, 83, 83, 88, 88, 94, 94, 97, 97, 97, 100, 100, 104, 104, 104, 105, 105, 105, 105, 107, 107, 107, 108, 108, 108, 108, 126, 126, 127, 127, 128, 128, 132, 132, 136, 136, 143, 143, 146, 146, 149, 149, 155, 155, 159, 159, 162, 162, 165, 165, 171, 171, 175, 175, 178, 178, 181, 181, 187, 187, 191, 191, 194, 194, 197, 197, 203, 203, 210, 210, 214, 214, 219, 219, 222, 222, 225, 225, 233, 233, 238, 238, 241, 241, 244, 244, 255, 255, 261, 261, 267, 267, 270, 270, 276, 276, 281, 281, 287, 287, 297, 297, 306, 306, 310, 310, 313, 313, 321, 321, 332, 332, 351, 351, 351, 352, 352, 352, 353, 355, 355, 355, 356, 356, 356, 356, 361, 361, 363, 363, 365, 365, 373, 373, 373, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
	sourceName = "register.gsp"
)
class ___LineNumberPlaceholder { }
