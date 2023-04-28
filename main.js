// https://teachablemachine.withgoogle.com/models/L4cbl7zPi/
Webcam.attach("#camera")
camera = document.getElementById("camera")
Webcam.set({
    width:350,
    height:300,
    image_format:"png",
    png_quality:100
})
function tirarfoto(){
    Webcam.snap(function(data_uri){
        document.getElementById("result").innerHTML = '<img id="imagen" src=" '+data_uri+' "/>'
    })
}
console.log("ml5 versao ",ml5.version)
classifier=ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/wFsORj-JW/model.json",modelLoaded)
function modelLoaded(){
    console.log("deu serto")
}
function identificar(){
    img=document.getElementById("imagen")
    classifier.classify(img,gotResult)
}
function gotResult(error,results){
    if(error){
        console.log(error)
    }
    else{
        console.log(results)
        document.getElementById("resultado").innerHTML=results[0].label
        document.getElementById("Precisao").innerHTML=results[0].confidence.toFixed(2)
    }
}