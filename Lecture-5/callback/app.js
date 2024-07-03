function step1(fn){
    console.log('plz wait selecting the image...');
    setTimeout(function(){
        fn('selected image')
    } , 4000)
}

function step2(image , fn){
    console.log(`plzz wait applying filter to ${image}...`);
    setTimeout(function(){
        fn('filtered image')
    } , 2000)
}
function step3(filter , fn){
    console.log(`plz wait applying caption to ${filter}`);
    setTimeout(function(){
        fn('added caption')
    } , 5000)
}
function step4(caption){
    console.log(`plz wait uploading image with ${caption}`);
    setTimeout(function(){
        console.log("image uploaded finally")
    } , 3000)
}

step1( function(image){
    console.log(image);
    step2( image , function(filter){
        console.log(filter)
        step3(filter , function(caption){
            console.log(caption)
            step4(caption)
        })
    } );
} );