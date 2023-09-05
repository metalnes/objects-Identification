objects=[]
status1=""
function setup(){
    canvas=createCanvas(800,600)
    canvas.position(550,300)
    video.hide()

}
function preload(){
    video=createVideo("video.mp4")
  
    
}
function draw(){
    image(video,0,0,800,600)

    if(status1 != ""){
        objectDetector.detect(video,gotResult)
        for(i = 0; i < objects.length; i++ ){
       document.getElementById("status").innerHTML="Status : Objects Detected"                                    
        document.getElementById("numeberOfObjects").innerHTML="Number Of Objects detected ="  +  objects.length 
        percent=floor(objects[i]*100) 
        name1=objects[i].label+" "+percent+"%" 
        fill("Red")
        text(name1,objects[i].x+15,objects[i].y+15)
        noFill()
        stroke("Red")
        rect(objects[i].x,objects[i].y,objects[i].width,objects[i].height)            
    
                            
        }
        
    }
}
function start(){
    objectDetector=ml5.objectDetector("cocossd",modelLoaded)
    document.getElementById("status").innerHTML="Status: Detecting Objects"
}
 function modelLoaded(){
    console.log("Model Is Loaded!")       
    video.volume(0)
    video.speed(1)
    video.loop()
    status1=true
 }
function gotResult(error,results){
    if(error){
        console.log(error)

    }
    objects=results
    console.log(results)

}














