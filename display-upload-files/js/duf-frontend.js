//fonction permetant de visualiser l'image choisi
jQuery(document).ready(function(){
 
	// Attente d'un changement dans la div
	jQuery(document.getElementById('wcuf_file_uploads_container')).one('DOMSubtreeModified', loadimg );
	
	// Attente du click sur l'image que l'on veut visualiser
    jQuery(document).on('click','.wcuf_file_preview_list_item_image', duf_file_preview_list_item_image);
	
	// Attente du click sur l'image que l'on veut supprimer
	jQuery(document).on('click','.wcuf_delete_single_file_stored_on_server ', duf_file_delete_list_item_image);

});

function loadimg(url_image){

  timerId =  window.setInterval( function() {   
 
	if(url_image !== "https://photoswitch.fr/wp-content/uploads/upload_photo.jpg"){
			url_image=document.querySelector('.wcuf_file_preview_list_item_image').src;
	   if (url_image.indexOf("wcuf_file_name")!=-1 || document.querySelector('.wcuf_file_preview_list_item_image').src==="") {
			duf_file_preview(url_image);
			clearInterval(timerId);
		}
	}
	else{
		duf_file_preview(url_image);
		document.querySelector('.wcuf_file_preview_list_item_image').src="";
		url_image="";
	}
    },1000);



}


function duf_file_preview_list_item_image(event) 
{
    event.preventDefault();  
 
    var url_image = event.currentTarget.src;
	
	duf_file_preview(url_image);


 }

function duf_file_preview(url_image){
	
	   var result = url_image.indexOf("jpeg");
       if(result!=-1){
           const re = /jpeg/g;
           re.test(url_image);
           url_image= RegExp.leftContext+'jpeg';
       }
       else{
           const rege = /jpg/g;
           rege.test(url_image);
           url_image= RegExp.leftContext+'jpg';

       }
 
       const reg = /=/g;
        reg.test( url_image);
        url_image=RegExp.rightContext; 

        url_image = 'https://photoswitch.fr/wp-content/uploads/wcuf/tmp/'+url_image;

	if(url_image==="https://photoswitch.fr/wp-content/uploads/wcuf/tmp/")
		url_image = "https://photoswitch.fr/wp-content/uploads/upload_photo.jpg";
		
        document.getElementById("photo_output").src = url_image;
	
}

function duf_file_delete_list_item_image(event) 
{  
	var url_image
	event.preventDefault();  

 	 if (event.currentTarget.parentNode.parentNode.parentNode.firstChild.lastChild.src != event.currentTarget.parentNode.parentNode.lastChild.src) {
		 url_image = event.currentTarget.parentNode.parentNode.parentNode.firstChild.lastChild.src;
    }
	else{
        url_image = "https://photoswitch.fr/wp-content/uploads/upload_photo.jpg";
		loadimg(url_image);
	}

	duf_file_preview(url_image);

 }
