<!DOCTYPE html>
<html>
<head>
<g:javascript library="jquery" plugin="jquery" />
<meta name="layout" content="main" />
<meta name="viewport" content="width=device-width, initial-scale=1">
<title><g:message code="welcome" /></title>
<asset:stylesheet src="bootstrap.css" />
<asset:stylesheet src="init.css" />
<asset:stylesheet src="buscador.css" />
<asset:stylesheet src="main.css" />
<asset:stylesheet src="navbar.css" />
<asset:stylesheet src="sticky-footer.css" />
<asset:javascript src="bootstrap.js" />
<asset:javascript src="modal.js" />
<asset:javascript src="bootstrap-typeahead.js" />
<asset:javascript src="carousel.js" />

<asset:javascript src="search.js" />


</head>
<body>
	<div id="wrap">
		<div id="theNavbar">
			<g:if test="${session.user}">
				<nav class="navbar navbar-inverse navbar-fixed-top"
					role="navigation">
					<div class="container">
						<div class="navbar-header">
							<button type="button" class="navbar-toggle"
								data-toggle="collapse" data-target=".navbar-collapse">
								<span class="sr-only">Toggle navigation</span> <span
									class="icon-bar"></span> <span class="icon-bar"></span> <span
									class="icon-bar"></span>


						</button>
						<g:if test="${user.avatar}">
						<g:link controller="user" action="viewHome" class="font-menu">
							<img style="height: 1.5em; width: 2.0em"
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
									<g:set var="search1"
										value="${g.message(code:'searchProducts')}" scope="page" />
									<input class="typeahead form-control input-search"
										type="search" placeholder="${search1}" name="search"
										autocomplete="off">
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
											<g:if test="${requests}">
												<h4>
													<span class="glyphicon glyphicon-globe white"></span>
													<span class="badge"> ${requests.size()}</span>
												</h4>
											</g:if>
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
			</g:if>
			<g:else>
				<div class="navbar-wrapper">
					<div class="container size-menu">
						<div
							class="margin-menu navbar-inverse navbar-fixed-top navbar-color"
							role="navigation">
							<div class="container">
								<div class="navbar-header navbar-color">
									<button type="button" class="navbar-toggle"
										data-toggle="collapse" data-target=".navbar-collapse">
										<span class="sr-only">Toggle navigation</span> <span
											class="icon-bar"></span> <span class="icon-bar"></span> <span
											class="icon-bar"></span>
									</button>
									<a href="/UNFleaPlus/index/viewHome" class="navbar-brand">UN
										Flea+ <g:link controller="index" action="viewHome"></g:link>
									</a>
								</div>
								<div class="navbar-collapse collapse navbar-color">
									<g:form class="navbar-form navbar-left" role="search"
										controller="product" action="searchProduct">
										<div class="form-group">
											<g:set var="search1"
												value="${g.message(code:'searchProducts')}" scope="page" />
											<input class="typeahead form-control input-search"
												type="search" placeholder="${search1}" name="search"
												autocomplete="off">

											<button type="submit" class="btn btn-link" type="button">
												<span class="glyphicon glyphicon-search"></span>
											</button>
										</div>

									</g:form>
									<ul class="nav navbar-nav navbar-right">

										<li><g:link controller="user" action="viewRegister">
												<g:message code="signUP" />
											</g:link></li>
										<li><a href="#" data-toggle="modal"
											data-target="#myModal"><g:message code="howUse" /></a></li>
										<!--Un video como el que dijo el profesor-->
										<li class="dropdown"><a class="dropdown-toggle" href="#"
											data-toggle="dropdown" id="navLogin"><g:message
													code="login" /></a>
											<ul class="dropdown-menu drowmenu-size" role="menu">
												<g:set var="foo" value="${g.message(code: 'email')}"
													scope="page" />
												<g:set var="foo1" value="${g.message(code: 'password')}"
													scope="page" />

												<g:form role="form" controller="user" action="login"
													method="post">
													<div class="form-margin">

														<input type="email" class="form-control" name="email"
															id="ejemplo_email_1" placeholder="${foo}" required>



														<input type="password" class="form-control"
															name="password" id="ejemplo_password_1"
															placeholder="${foo1}" required>


														<div class="checkbox">
															<label> <input type="checkbox"
																value="remember-me"> <g:message
																	code="rememberMe" />
															</label>
														</div>

														<button type="submit"
															class="btn btn-lg btn-primary btn-block">
															<g:message code="login" />
														</button>
													</div>
												</g:form>
											</ul></li>
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
						</div>
					</div>
				</div>
			</g:else>
		</div>
		<div id="myCarousel" class="carousel slide" data-ride="carousel">
			<!-- Indicators -->
			<ol class="carousel-indicators">
				<li data-target="#myCarousel" data-slide-to="0" class="active"></li>
				<li data-target="#myCarousel" data-slide-to="1"></li>
			</ol>
			<div class="carousel-inner">
				<div class="item active">
					<img
						src="https://lh4.googleusercontent.com/-Jeotk5sB7ko/VCsdHYUwpzI/AAAAAAAAUMo/l-fN4hmYqXs/w1591-h895-no/IMG_20140930_130155695_HDR.jpg"
						alt>
					<div class="carousel-caption">
						<h3>UNFlea+</h3>
						<p>
							<g:message code="message" />
						</p>
					</div>
				</div>

				<div class="item">
					<img
						src="https://lh3.googleusercontent.com/-erEm0c_PvZk/U-Ff6DgHmuI/AAAAAAAATzc/hDS0-XezvUs/w1187-h668-no/IMG_20140805_175021360_HDR.jpg"
						alt>
					<div class="carousel-caption">
						<h3>
							<g:message code="develomentTeam" />
						</h3>
						<p>Andres Rene Gutierrez</p>
						<p>Yeison David García</p>
						<p>Fabian David Conejo</p>
						<p>Samuel Antonio Cabezas</p>
						<p>Mateo Nieto Díaz</p>
					</div>
				</div>

			</div>
			<a class="left carousel-control" href="#myCarousel" role="button"
				data-slide="prev"><span class="glyphicon glyphicon-chevron-left"></span></a>
			<a class="right carousel-control" href="#myCarousel" role="button"
				data-slide="next"><span
				class="glyphicon glyphicon-chevron-right"></span></a>
		</div>
		<!-- /.carousel -->
		<div id="search" style="display: none;">
			${search}
		</div>
		<div class="modal fade" id="myModal" tabindex="-1" role="dialog"
			aria-labelledby="myModalLabel" aria-hidden="true">
			<div class="modal-dialog">
				<div class="modal-content">
					<div class="modal-header">
						<button type="button" class="close" data-dismiss="modal"
							aria-hidden="true">&times;</button>
						<div class="centering">
							<h3>
								<g:message code="tutorial" />
							</h3>
						</div>

					</div>
					<div class="modal-body"></div>
				</div>
			</div>
		</div>
		<g:if test="${flash.message}">
			<div class="info">
				${flash.message}
			</div>
		</g:if>
	</div>
	<div class="footer">
		<div class="container">
			<div class="col-xs-7 pull-left">
				<g:link controller="index" action="viewHome" params="[lang:'en']">
					<asset:image src="USA_ROUND.png" alt="UNFlea+" height="40px"
						width="40px" />
				</g:link>
				<g:link controller="index" action="viewHome" params="[lang:'es']">
					<asset:image src="SPAIN_ROUND.png" alt="UNFlea+" height="40px"
						width="40px" />
				</g:link>
				<g:link controller="index" action="viewHome" params="[lang:'fr']">
					<asset:image src="FRANCE_ROUND.png" alt="UNFlea+" height="40px"
						width="40px" />
				</g:link>
			</div>
			<div class="col-xs-5">
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
</body>
</html>
