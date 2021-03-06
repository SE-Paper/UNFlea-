<html>
<head>
<g:javascript library="jquery" plugin="jquery" />
<meta name="layout" content="main" />
<meta name="viewport" content="width=device-width, initial-scale=1">
<title><g:message code="requestsVar" /> - ${user.username}</title>
<asset:stylesheet src="bootstrap.css" />
<asset:javascript src="bootstrap.js" />
<asset:javascript src="bootstrap-typeahead.js" />
<asset:stylesheet src="home.css" />
<asset:stylesheet src="main.css" />
<asset:stylesheet src="navbar.css" />
<asset:stylesheet src="sticky-footer.css" />
<asset:javascript src="home.js" />
<asset:javascript src="img-modal.js" />
<asset:javascript src="search.js" />
<asset:stylesheet src="search.css" />
<asset:javascript src="modal.js" />


</head>
<body>
	<div id="wrap">
		<div id="theNavbar">
			<nav class="navbar navbar-inverse navbar-fixed-top" role="navigation">
				<div class="container">
					<div class="navbar-header">
						<button type="button" class="navbar-toggle" data-toggle="collapse"
							data-target=".navbar-collapse">
							<span class="sr-only">Toggle navigation</span> <span
								class="icon-bar"></span> <span class="icon-bar"></span> <span
								class="icon-bar"></span>

						</button>

						<g:if test="${user.avatar}">
							<g:link controller="user" action="viewHome" class="font-menu">
								<img class="avatar"
									src="${createLink(controller:'user', action:'avatar_image', id:user.ident())}" />
							</g:link>
						</g:if>
						<g:link controller="user" action="viewHome"
							class="navbar-brand font-menu">
							${user.username}
						</g:link>


					</div>
					<div class="collapse navbar-collapse">
						<g:form class="navbar-form navbar-left" role="search"
							controller="product" action="searchProduct">
							<div class="form-group">
								<g:set var="search1" value="${g.message(code:'searchProducts')}"
									scope="page" />
								<input class="typeahead form-control input-search" type="search"
									placeholder="${search1}" name="search" autocomplete="off">
								<button type="submit" class="btn btn-link" type="button">
									<span class="glyphicon glyphicon-search"></span>
								</button>
							</div>

						</g:form>
						<ul class="nav navbar-nav navbar-right">

							<li><g:link controller="index" action="viewHome">
									<g:message code="default.home.label" />
								</g:link></li>
							<li><g:link controller="user" action="viewHome">
									<g:message code="myProducts" />
								</g:link></li>
							<li><div class="dropdown">
								<a href="#" class="dropdown-toggle" data-toggle="dropdown">
									<h4>
										<span class="glyphicon glyphicon-globe white"></span> <span
											class="badge"> ${requests.size()}
										</span>
									</h4>
								</a>
								<ul class="dropdown-menu" role="menu">
									<g:if test="${requests}">
										<g:each var="request" in="${requests}">
											<li><g:link controller="user" action="userRequest"
													params="[name:request]">
													${request}
												</g:link></li>
										</g:each>

									</g:if>


								</ul>
							</div></li>
							<li><g:link controller="user" action="logout">
									<g:message code="logout" />
								</g:link></li>
							<li class="dropdown"><a href="#" class="dropdown-toggle"
								data-toggle="dropdown"><g:message code="more" /> <b
									class="caret"></b></a>
								<ul class="dropdown-menu" role="menu">
									<li><g:link controller="index" action="viewContactUs">
											<g:message code="contactUs" />
										</g:link></li>
									<li><g:link controller="index" action="viewAboutUs">
											<g:message code="aboutUs" />
										</g:link></li>
								</ul></li>
						</ul>
					</div>
				</div>
			</nav>
		</div>





		<!-- ------------------------------------------------------------------------------------------- -->


		<div class="container margin-menu">
			<div class="row row-offcanvas row-offcanvas-left">

				<div class="row">
					<div class="col-xs-9 col-xs-offset-3 ">
						<h1 class="page-header">
							<g:message code="requestsVar" />
						</h1>
					</div>
				</div>
				<div class="col-xs-12">
					<p class="pull-left visible-xs">
						<button type="button" class="btn btn-primary btn-xs"
							data-toggle="offcanvas">
							<g:message code="homeMenu" />
						</button>
					</p>
					<div class="col-xs-3 sidebar-offcanvas" id="sidebar"
						role="navigation">
						<g:link controller="user" action="viewHome">
							<h3>
								<i class="glyphicon glyphicon-user"></i>
								<g:message code="profile" />
							</h3>
						</g:link>
						<div class="dropdown">
							<a href="#" class="dropdown-toggle" data-toggle="dropdown">
								<h3>
									<i class="glyphicon glyphicon-th-large"></i>
									<g:message code="products" />
									<b class="caret"></b>
								</h3>
							</a>
							<ul class="dropdown-menu" role="menu">
								<li><g:link controller="product" action="viewAddProduct">
										<h4>
											<i class="glyphicon glyphicon-plus-sign"></i>
											<g:message code="addProduct" />
										</h4>
									</g:link></li>
								<li><g:link controller="product" action="viewDeleteProduct">
										<h4>
											<i class="glyphicon glyphicon-trash"></i>
											<g:message code="deleteProduct" />
										</h4>
									</g:link></li>
							</ul>
						</div>
					</div>
					<div class="col-xs-9">
						<g:each var="request" in="${requests1}">
							<div class="panel panel-default">
								<div class="panel-body">

									<div class="panel panel-primary">
										<div class="panel-heading">
											<h3 class="panel-title">
												<g:message code="theUserVar" />
											</h3>
										</div>
										<div class="panel-body">
											<!-- User To Do -->
											<g:if test="${request.user.avatar}">
												<img class="avatar"
													src="${createLink(controller:'user', action:'avatar_image', id:request.user.ident())}" />
											</g:if>
											<h3 class="inline">
												${request.user}
											</h3>
											<a href="#" class="open-AddBookDialog" data-toggle="modal" data-target="#myModalChat" data-id="${request.user}"> <span
												class=" btn btn-default btn-sm glyphicon glyphicon-comment"></span>
											</a>
										</div>
									</div>
									<div class="panel panel-primary">
										<div class="panel-heading">
											<h3 class="panel-title">
												<g:message code="offerVar" />
											</h3>
										</div>
										<div class="panel-body">
											<g:if test="${request.money>0}">
												<div class="panel panel-success">
													<div class="panel-heading">
														<h3 class="panel-title">
															<g:message code="moneyVar" />
														</h3>
													</div>
													<div class="panel-body">
														${request.money}
													</div>
												</div>
											</g:if>
											<g:if test="${products}">
												<div class="panel panel-info">
													<div class="panel-heading">
														<h3 class="panel-title">
															<g:message code="products" />
														</h3>
													</div>
													<div class="panel-body">

														<g:each var="product" in="${products}">
															<g:if test="${request.user == product.user}">
																<h3>
																	${product.name}
																</h3>

																<div class="row">
																	<g:each var="images" in="${product.image.take(4)}">
																		<g:each var="image" in="${images}">
																			<div
																				class="margin-gallery col-lg-3 col-md-3 col-sm-4 col-xs-6">
																				<li class="img-thumbnail"><img
																					class="img-responsive img-modal"
																					style="width: 10em; height: 10em;"
																					src="${createLink(controller:'user', action:'product_image', id:image.getId())}">
																				</li>
																			</div>

																		</g:each>
																	</g:each>
																</div>
															</g:if>
														</g:each>

													</div>
												</div>
											</g:if>
										</div>
									</div>
								</div>
							</div>
						</g:each>

					</div>
				</div>
			</div>
		</div>

		<!-- Modal for show images -->
		<div class="modal fade" id="myModal" tabindex="-1" role="dialog"
			aria-labelledby="myModalLabel" aria-hidden="true">
			<div class="modal-dialog">
				<div class="modal-content">
					<div class="modal-header">
						
						<button type="button" class="close" data-dismiss="modal">
							<span aria-hidden="true">&times;</span><span class="sr-only">Close</span>
						</button>
					</div>
					<div class="modal-body"></div>
				</div>
				<!-- /.modal-content -->
			</div>
			<!-- /.modal-dialog -->
		</div>
		<!-- /.modal -->
		<div class="modal fade" id="myModalChat" tabindex="-1" role="dialog"
			aria-labelledby="myModalLabel" aria-hidden="true">
			<div class="modal-dialog">
				<div class="modal-content">
					<div class="modal-header">
						<h3 class="user"></h3>
						<button type="button" class="close" data-dismiss="modal">
							<span aria-hidden="true">&times;</span><span class="sr-only">Close</span>
						</button>
					</div>
					<div class="modal-body">
						<div id="chatMessages" style="overflow: scroll; height: 400px;">
						</div>
						<div class="row">
							<div class="col-xs-12">
								<textarea cols="90" rows="3" id="messageBox" name="message" onkeypress="messageKeyPress(this,event);" style="resize:none;"></textarea>
								
							</div>
							
						</div>
						
						
						<div id="temp"></div>
					</div>
				</div>
			</div>	
		</div>

		<div id="search" style="display: none;">
			${search}
		</div>

	</div>
	
	<div class="footer">
		<div class="container">
			<div class="col-xs-5 pull-left">
				<g:link controller="index" action="viewUserRequest" params="[lang:'en']">
					<asset:image src="USA_ROUND.png" alt="UNFlea+" height="40px"
						width="40px" />
				</g:link>
				<g:link controller="index" action="viewUserRequest" params="[lang:'es']">
					<asset:image src="SPAIN_ROUND.png" alt="UNFlea+" height="40px"
						width="40px" />
				</g:link>
				<g:link controller="index" action="viewUserRequest" params="[lang:'fr']">
					<asset:image src="FRANCE_ROUND.png" alt="UNFlea+" height="40px"
						width="40px" />
				</g:link>
			</div>
			<div class="col-xs-7">
				<div style="float: right">
					<a href="https://www.facebook.com/UNFleaPlus" class=""> <asset:image
							src="facebook.png" alt="UNFlea+" height="40px" width="40px" />
					</a> <a href="https://twitter.com/unfleaplus" class=""> <asset:image
							src="twitter.png" alt="UNFlea+" height="40px" width="40px" />
					</a> <a href="https://github.com/virttuall/UNFlea-" class=""> <asset:image
							src="github.png" alt="UNFlea+" height="40px" width="40px" />
					</a>
				</div>
			</div>
			<span class="glyphicon glyphicon-copyright-mark"></span> 2014 UN
			Flea+. <a href="#">Privacy </a> &amp;<a href="#"> Terms</a>
		</div>
	</div>
<script>
	var myUser=""
    function messageKeyPress(field,event) {
        var theCode = event.keyCode ? event.keyCode : event.which ? event.which : event.charCode;
        var message = $('#messageBox').val();
        if (theCode == 13){
        	
        	//alert(myUser)
            <g:remoteFunction action="submitMessage" controller="chat" params="\'message=\'+message+'///////////////'+myUser" update="temp"/>
             
             $("textarea[name='message']").val('');
            return false;
        } else {
            return true;
        }
    }
    user();
    function user(){
		$('.open-AddBookDialog').on('click',function(){
			myUser = $(this).data('id');
			$('.user').text(myUser);
			var message=" ";
			$('#myModalChat .modal-body #chatMessages').text('');
			<g:remoteFunction action="submitMessage" controller="chat" params="\'message=\'+message+'///////////////'+myUser" update="temp"/>
		 
			
			$('#myModalChat').on('hidden.bs.modal', function(){
		    	$('#myModalChat .modal-body #chatMessages').text('');
		    });
		});
    }
    function retrieveLatestMessages() {
        <g:remoteFunction action="retrieveLatestMessages" controller="chat" update="chatMessages"/>
    }
    function pollMessages() {
        retrieveLatestMessages();
        setTimeout('pollMessages()', 5000);
    }
    pollMessages();
</script>
</body>
</html>
