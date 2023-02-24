function startClassification()
{
    navigator.mediaDevices.getUserMedia({audio: true});
    classifier= ml5classifier('https://teachablemachine.withgoogle.com/models/1dXJmye25/model.json',modelReady);
}
function modelReady(){
    classifier.classify(gotResults);
}
function gotresult(){
    if(error){
        console.error(error);
    } else{
        console.log(gotResults);
        random_number_r = Math.floor(Math.random() * 255) +1;
        random_number_g = Math.floor(Math.random() * 255) +1;
        random_number_b = Math.floor(Math.random() * 255) +1;

        document.getElementById("result_label").innerHTML =' I can hear -' + result[0].label;
        document.getElementById("result_confidence").innerHTML ='Accuracy' + (result[0].confidence*100).tofixed(2)+" % ";
        document.getElementById("result_label").style.color ="rgb("+random_number_r+", "+random_number_g+" ,"+random_number_r+")";
        document.getElementById("result_confidence").style.color ="rgb("+random_number_r+", "+random_number_g+" ,"+random_number_r+")";
    
        
        img=document.getElementById('alien1')
        img1=document.getElementById('alien2')
        img2=document.getElementById('alien3')
        img3=document.getElementById('alien4')
 
        if(results[0] .label =="Clap"){
            img.src='alien-01.gif';
            img.src='alien-02.png';
            img.src='alien-03.png';
            img.src='alien-04.png';
        }
        else if(results[0] .label =="Bell"){
            img.src='alien-01.png';
            img.src='alien-02.gif';
            img.src='alien-03.png';
            img.src='alien-04.png';
        }else if(results[0] .label =="Snapping"){
            img.src='alien-01.png';
            img.src='alien-02.png';
            img.src='alien-03.gif';
            img.src='alien-04.png';
        }else {
            img.src='alien-01.png';
            img.src='alien-02.png';
            img.src='alien-03.png';
            img.src='alien-04.gif';
        }
    
    }
}