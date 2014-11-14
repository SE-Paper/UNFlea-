<html>
<head>
<g:javascript library="jquery" plugin="jquery" />
<meta name="layout" content="main" />
<meta name="viewport" content="width=device-width, initial-scale=1">
<title><g:message code="default.home.label" /> - ${user.username}</title>
<asset:stylesheet src="bootstrap.css" />
<asset:stylesheet src="home.css" />
<asset:javascript src="bootstrap.js" />
<asset:javascript src="home.js" />
<asset:javascript src="dropzoneUpdateProduct.js" />
<asset:stylesheet src="main.css" />
<asset:stylesheet src="dropzone.css" />

</head>
<body>

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
					<img class="avatar"
						src="${createLink(controller:'user', action:'avatar_image', id:user.ident())}" />
				</g:if>
				<a class="font-menu" href="#"> ${user.username}
				</a>

			</div>
			<div class="collapse navbar-collapse">
				<ul class="nav navbar-nav navbar-right">
					<li><a href="#">Home</a></li>
					<li><a href="#">Profile</a></li>
					<li><g:link controller="user" action="logout">Logout</g:link>
					</li>
				</ul>
			</div>
		</div>
	</nav>




	<div class="container margin-menu">
		<div class="row">
			<div class="col-xs-9 col-xs-offset-3 ">
				<h1 class="page-header">
					<g:message code="myProducts" />
				</h1>
			</div>
		</div>

		<ul class="row">
			<div class="col-xs-2">

				<div class="row">
					<g:link controller="product" action="viewAddProduct">
						<h3>
							<g:message code="addProduct" />
						</h3>
						<div
							class="margin-gallery  col-lg-10 col-md-10 col-sm-10 col-xs-10">
							<asset:image class="avatarProduct" src="addProduct.png" />
						</div>
					</g:link>
				</div>

				<p>
					<g:link controller="product" action="viewDeleteProduct">
						<h3>
							<g:message code="deleteProduct" />
						</h3>
						<div
							class="margin-gallery  col-lg-10 col-md-10 col-sm-10 col-xs-10">
							<asset:image class="avatarProduct" src="Delete_Icon.png" />
						</div>
					</g:link>
				</p>

			</div>

			<div class="col-xs-offset-1 col-xs-9">
				<g:each var="product" in="${products}">
					<div class="headerProduct">
						<h3 style="display: inline">
							${product.name}
						</h3>
						<a class="openDeleteProduct btn btn-default btn-sm pull-right"
							data-toggle="modal" data-target="#modalConfirmDeleteProduct"
							data-id="${product.getId()}"> <span
							class='glyphicon glyphicon-trash'> </span>
						</a> <a class="openUpdateImages btn btn-default btn-sm pull-right"
							data-toggle="modal" data-target="#modalUpdateImages"
							data-id="${product.getId()}"
							data-nimages="${product.image.size()}" id="updateImages"> <span
							class='glyphicon glyphicon-plus-sign'> </span>
						</a> <a class="openUpdateInfo btn btn-default btn-sm pull-right"
							data-toggle="modal" data-target="#modalUpdateInformation"
							data-id="${product.getId()}" data-name="${product.getName()}"
							data-desc="${product.getDescription() }" id="updateInformation">
							<span class='glyphicon glyphicon-pencil'> </span>
						</a>
					</div>
					<div class="row">
						<g:each var="images" in="${product.image}">
							<g:each var="image" in="${images}">

								<div class="margin-gallery col-lg-3 col-md-3 col-sm-4 col-xs-6">
									<li class="thumbnail"><a class="openDeleteImage" data-toggle="modal"
										data-target="#modalConfirmDeleteImage" data-id="${product.getId()}"
										data-idimage="${image.getId()}"> <span
											class='remove-product glyphicon glyphicon-remove pull-right'></span>
									</a><img class="img-responsive"
										src="${createLink(controller:'user', action:'product_image', id:image.getId())}">
									</li>
								</div>

							</g:each>
						</g:each>
					</div>
				</g:each>
				<div class="pagination">
					<g:paginate controller="user" action="list" max="10"
						total="${totalProduct?:0}" />
				</div>
			</div>


		</ul>
	</div>

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

	<!-- Modal Update Information -->
	<div class="modal fade" id="modalUpdateInformation" tabindex="-1"
		role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
		<div class="modal-dialog">
			<div class="modal-content">
				<div class="modal-header">
					<button type="button" class="close" data-dismiss="modal">
						<span aria-hidden="true">&times;</span><span class="sr-only">Close</span>
					</button>
					<h4 class="modal-title" id="myModalLabel">
						<g:message code="addImage" />
					</h4>
				</div>
				<div class="modal-body">
					<div class="modal-body">
						<form class="form-horizontal" id="update" controller="product"
							action="updateData" method="post">
							<g:set var="name_input" value="${g.message(code: 'nameVar')}"
								scope="page" />
							<g:set var="description_input"
								value="${g.message(code: 'descriptionVar')}" scope="page" />
							<g:set var="state_input" value="${g.message(code: 'stateVar')}"
								scope="page" />
							<fieldset>
								<input type="hidden" id="infoIdProduct" name="infoIdProduct">
								<!-- Name input-->
								<div class="form-group">
									<label class="col-md-3 control-label" for="name"><g:message
											code="nameVar" /></label>
									<div class="col-md-9">
										<input id="myName" name="myName" type="text"
											onkeyup="onChangeName()" placeholder="${name_input }"
											class="form-control" required>
									</div>
								</div>

								<!-- Description body -->
								<div class="form-group">
									<label class="col-md-3 control-label" for="message"><g:message
											code="descriptionVar" /></label>
									<div class="col-md-9">
										<textarea class="form-control" id="myDescription"
											onkeyup="onChangeDescription()" name="myDescription"
											placeholder="${description_input }" rows="5" maxlength="200"
											required></textarea>
									</div>
								</div>
								<button type="submit" class="btn btn-primary btn-lg"
									style="float: right;">
									<g:message code="updateSend" />
								</button>
							</fieldset>
						</form>
					</div>

				</div>
				<%--<div class="modal-footer">
				</div>
			--%>
			</div>
		</div>
	</div>

	<!-- Modal Update Images -->
	<div class="modal fade" id="modalUpdateImages" tabindex="-1"
		role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
		<div class="modal-dialog">
			<div class="modal-content">
				<div class="modal-header">
					<button type="button" class="close" data-dismiss="modal">
						<span aria-hidden="true">&times;</span><span class="sr-only">Close</span>
					</button>
					<h4 class="modal-title" id="myModalLabel">
						<g:message code="addImage" />
					</h4>
				</div>
				<div class="modal-body">
					<input type="hidden" id="imagesNImages" value="0">
					<fieldset>
						<div id="dropzone">
							<form action="addImage" controller="product" method="post"
								class="dropzone dz-clickable" enctype="multipart/form-data"
								id="updateImage" name="files">
								<input type="hidden" id="imagesIdProduct" name="imagesIdProduct">
							</form>
						</div>
					</fieldset>
				</div>
				<div class="modal-footer">
					<button type="submit" class="btn btn-primary btn-lg"
						id="submit-all" onclick="submitForms">
						<g:message code="updateSend" />
					</button>
				</div>
			</div>
		</div>
	</div>

	<!-- Modal Confirm Delete Product-->
	<div class="modal fade" id="modalConfirmDeleteProduct" tabindex="-1"
		role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
		<div class="modal-dialog">
			<div class="modal-content">
				<div class="modal-header">
					<button type="button" class="close" data-dismiss="modal">
						<span aria-hidden="true">&times;</span><span class="sr-only">Close</span>
					</button>
					<h4 class="modal-title" id="myModalLabel">
						<g:message code="confirmDeleteVar" />
					</h4>
				</div>
				<div class="modal-body">
					<p>
						<g:message code="deleteProductMessageVar" />
					</p>
					<form id="formDeleteProduct" controller="product"
						action="deleteProduct" method="post">
						<input type="hidden" id="deleteProductId" name="id" value="0">
					</form>
				</div>
				<div class="modal-footer">
					<button type="button" class="btn btn-default" data-dismiss="modal">
						<g:message code="cancelVar" />
					</button>
					<button type="submit" class="btn btn-danger pull-right"
						onclick="sendDeleteProductForm()">
						<g:message code="delete" />
					</button>
				</div>
			</div>
		</div>
	</div>

	<!-- Modal Confirm Delete Image-->
	<div class="modal fade" id="modalConfirmDeleteImage" tabindex="-1"
		role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
		<div class="modal-dialog">
			<div class="modal-content">
				<div class="modal-header">
					<button type="button" class="close" data-dismiss="modal">
						<span aria-hidden="true">&times;</span><span class="sr-only">Close</span>
					</button>
					<h4 class="modal-title" id="myModalLabel">
						<g:message code="confirmDeleteVar" />
					</h4>
				</div>
				<div class="modal-body">
					<p>
						<g:message code="deleteImageMessageVar" />
					</p>
					<form id="formDeleteImage" controller="product"
						action="deleteImage" method="post">
						<input type="hidden" id="deleteProductId" name="idProduct" value="0">
						<input type="hidden" id="deleteImageId" name="idImage" value="0">
					</form>
				</div>
				<div class="modal-footer">
					<button type="button" class="btn btn-default" data-dismiss="modal">
						<g:message code="cancelVar" />
					</button>
					<button type="submit" class="btn btn-danger pull-right"
						onclick="sendDeleteImageForm()">
						<g:message code="delete" />
					</button>
				</div>
			</div>
		</div>
	</div>


</body>
</html>
