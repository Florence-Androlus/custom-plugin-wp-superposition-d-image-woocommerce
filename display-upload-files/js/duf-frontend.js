//fonction permetant de visualiser l'image choisi
jQuery(document).ready(function(){
 
	if(document.querySelector('.product_title').textContent === 'TRIO S' )
	// Attente d'un changement dans la div
	jQuery(document.getElementById('wcuf_file_uploads_container')).one('DOMSubtreeModified', loadimg );
	
	// Attente du click sur l'image que l'on veut visualiser
    jQuery(document).on('click','.wcuf_file_preview_list_item_image', duf_file_preview_list_item_image);
	
	// Attente du click sur le bouton visualiser
	jQuery(document).on('click','.wcuf_upload_multiple_files_mirror_button', loadimg);
	
	// Attente du click sur l'image que l'on veut supprimer.
	jQuery(document).on('click','.wcuf_delete_single_file_stored_on_server ', duf_file_delete_list_item_image);

});


function loadimg(url_image){

  timerId =  window.setInterval( function() {   
 
	if(url_image !== "https://photoswitch.fr/wp-content/uploads/upload_photo.jpg"){

		if(document.querySelector('.product_title').textContent === 'TRIO S' ){
			
			
			image1=document.querySelector('.wcuf_file_preview_list_item');
			
			if( image1 != null){
			image2=image1.nextSibling;
			}
			if( image2 != null){
			image3=image2.nextSibling;
			}


			if( image1 != null){
				url_image[0]=image1.querySelector('.wcuf_file_preview_list_item_image').src;
			}			
			else{
				url_image[0] = "https://photoswitch.fr/wp-content/uploads/upload_photo.jpg";
			}
			
			if( image2 != null){
				url_image[1]=image2.querySelector('.wcuf_file_preview_list_item_image').src;	
			}			
			else{
				url_image[1] = "https://photoswitch.fr/wp-content/uploads/upload_photo.jpg";
			}
			
			if(image3 != null){
				url_image[2]=image3.querySelector('.wcuf_file_preview_list_item_image').src;

			}			
			else{
				url_image[2] = "https://photoswitch.fr/wp-content/uploads/upload_photo.jpg";
			}


		for (let i = 0; i < 3; i++)	{

			if(url_image[i].indexOf("https://photoswitch.fr/wp-content/uploads/")===-1){
			var result = url_image[i].indexOf("jpeg");

			   if(result!=-1){
				   const re = /jpeg/g;
				   re.test(url_image[i]);
				   url_image[i]= RegExp.leftContext+'jpeg';
			   }
			   else{
				   const rege = /jpg/g;
				   rege.test(url_image[i]);
				   url_image[i]= RegExp.leftContext+'jpg';

			   }

			   const reg = /=/g;
				reg.test( url_image[i]);
				url_image[i]=RegExp.rightContext; 

				url_image[i] = 'https://photoswitch.fr/wp-content/uploads/wcuf/tmp/'+url_image[i];
			}
				document.getElementById("photo_output".concat('',[i+1])).src = url_image[i];
				clearInterval(timerId);
		}
		}
			else{
				url_image=document.querySelector('.wcuf_file_preview_list_item_image').src;
				duf_file_preview(url_image);
			}
		}
		else{

				image1=document.querySelector('.wcuf_file_preview_list_item');

				if( image1 != null){
					url_image=image1.querySelector('.wcuf_file_preview_list_item_image').src;
				}			
				else{
					url_image = "https://photoswitch.fr/wp-content/uploads/upload_photo.jpg";
				}
			
				duf_file_preview(url_image);
		}
    },3000);

}


function duf_file_preview_list_item_image(event) 
{
    event.preventDefault();  
    url_image = event.currentTarget.src;
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
	clearInterval(timerId);
	
}

function duf_file_delete_list_item_image(event) 
{  
	
	event.preventDefault();  

	let id = parseInt(event.target.getAttribute("data-id"));
	
	if(document.querySelector('.product_title').textContent === 'TRIO S' ){
		url_image_trip = [document.getElementById("photo_output1").src,document.getElementById("photo_output2").src,document.getElementById("photo_output3").src];

		setInterval(timerId);
		loadimg(url_image_trip);
	}
	else { // cadre solo reaffiche la premiere image si une image supprimé

		url_image = "https://photoswitch.fr/wp-content/uploads/upload_photo.jpg";
		loadimg(url_image);
	}

 }
