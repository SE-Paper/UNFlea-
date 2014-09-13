<!DOCTYPE html>
<html>
	<head>
		<g:javascript library="jquery" plugin="jquery"/>
		<meta name="layout" content="main"/>
		<meta name="viewport" content="width=device-width, initial-scale=1">
		<title><g:message code="welcome" /></title>
		<asset:stylesheet src="bootstrap.css"/>
		<asset:stylesheet src="init.css"/>
		<asset:javascript src="bootstrap.js"/>
		
		
		
	</head>
	<body>
		<div class="navbar-wrapper">
			<div class="container">
				<div class="navbar navbar-inverse navbar-static-top navbar-color" role="navigation">
					<div class="container">
						<div class="navbar-header navbar-color">
							<button type="button" class="navbar-toggle" data-toggle="collapse" data-target=".navbar-collapse">
               					<span class="sr-only">Toggle navigation</span>
                				<span class="icon-bar"></span>
                				<span class="icon-bar"></span>
                				<span class="icon-bar"></span>
              				</button>
              				<a href="#" class="logo-icon navbar-color">
      							<asset:image src="REARU.png" alt="UNFlea+" height="50px" width="150px"/>
      						</a>
      					</div>
      					<div class="navbar-collapse collapse navbar-color">
      						<ul class="nav navbar-nav">
          						<li><g:link controller="user" action="viewRegister"><g:message code="signUP" /></g:link></li>
          						<li><a href="#" data-toggle="modal" data-target="#normalModal"><g:message code="howUse"  /></a></li><!--Un video como el que dijo el profesor-->
          						<li><g:link controller="user" action="viewLogin"><g:message code="login" /></g:link></li>
          						<li class="dropdown">
            					<a href="#" class="dropdown-toggle" data-toggle="dropdown"><g:message code="more" /> <b class="caret"></b></a>
            						<ul class="dropdown-menu" role="menu">
              							<li><g:link controller="index" action="viewContactUs"><g:message code="contactUs" /></g:link></li>
              							<li><g:link controller="index" action="viewAboutUs"><g:message code="aboutUs" /></g:link></li>
            						</ul>
          						</li>
        					</ul>
						</div>
				
					</div>
				</div>
			</div>
		</div>
		<div id="myCarousel" class="carousel slide" data-ride="carousel">
      <!-- Indicators -->
      <ol class="carousel-indicators">
        <li data-target="#myCarousel" data-slide-to="0" class="active"></li>
        <li data-target="#myCarousel" data-slide-to="1"></li>
      </ol>
      <div class="carousel-inner">
        <div class="item active">
          
          <div class="container">
          	<div class=row>
          		<div class="col-xs-6 ">
              		<h1 class="h1-carousel" style="position:absolute; top:150px">UNFlea+</h1>
              		<p class="p-carousel" style="position:absolute; top:250px"><g:message code="message"/></p>
            	</div>
            	<img src="http://3.bp.blogspot.com/-Y_40ll19G5Y/UpZqkXf5QZI/AAAAAAAAD4o/rAJyx88pXxg/s1600/pulga.png" class="img-rounded col-xs-6"  width="100px" height="400px" style="position:relative; top:100px;" >   	
          	</div>
            
          </div>
        </div>
        <div class="item">

          <div class="container">
            <div class=row>
          		<div class="col-xs-7 ">
          			<h1 class="h1-carousel" style="position:relative; top:200px;"><g:message code="develomentTeam" /></h1>
              		<p class="p-carousel" style="position:relative; top:200px; ">Andres Rene Gutierrez</p>
              		<p class="p-carousel" style="position:relative; top:200px; ">Yeison David García </p>
              		<p class="p-carousel" style="position:relative; top:200px;">Fabian David Conejo </p>
            		<p class="p-carousel" style="position:relative; top:200px;">Samuel Antonio Cabezas</p>
              		<p class="p-carousel" style="position:relative; top:200px;">Mateo Nieto Díaz</p>
              		
            	</div>
            	<div>
            		<img src="https://observatoriodefamilia.dnp.gov.co/portals/0/Images/Logos/logo_unal.png" class="col-xs-5"  width="100px" height="400px" style="position:absolute; top:100px;"  >
            	</div>
            </div>	
          </div>
        </div>
        
      </div>
      <a class="left carousel-control" href="#myCarousel" role="button" data-slide="prev"><span class="glyphicon glyphicon-chevron-left"></span></a>
      <a class="right carousel-control" href="#myCarousel" role="button" data-slide="next"><span class="glyphicon glyphicon-chevron-right"></span></a>
    </div><!-- /.carousel -->
    <div class="footer">
    	<center> 
			<g:link  params="[lang:'en']"> 
				<asset:image src="USA.png" alt="UNFlea+" height="55px" width="55px"/>
			</g:link> 
			<g:link  params="[lang:'es']"> 
				<asset:image src="espana.png" alt="UNFlea+" height="55px" width="55px"/>
			</g:link> 
		</center>
    </div>
    <div class="modal fade" id="normalModal" tabindex="-1" role="dialog" aria-labelledby="largeModal" aria-hidden="true">
  		<div class="modal-dialog modal-lg">
    		<div class="modal-content">
      			<div class="modal-header">
        			<button type="button" class="close" data-dismiss="modal" aria-hidden="true">&times;</button>
        			<div class="centering">
        				<g:message code="tutorial" />
        			</div>
        			
      			</div>
      			<div class="modal-body">
      				<div>
      				     <!--Aqui va el video del tutorial-->
          				<iframe width="100%" height="350" src="//www.youtube.com/embed/IBH97ma9YiI"></iframe>
        			</div>
      			</div>	
      			
      			
      			
      			
   	 		</div>
  		</div>
	</div>
    
  </body>	
</html>
