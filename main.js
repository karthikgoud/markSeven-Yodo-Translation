var btnTranslate = document.querySelector('button')

var serverURL = "https://api.funtranslations.com/translate/yoda.json" 

function finalFetchURL(text){
    return  serverURL + "?"+ "text=" + text
    // console.log( serverURL + "?"+ "text=" + text)

}

finalFetchURL("this is karthik")



btnTranslate.addEventListener('click', translate)

function translate(){



    var inputText = document.querySelector("input").value

    var outputDiv = document.querySelector("#output-div")



    // console.log(serverURL + inputText);


    fetch(finalFetchURL(inputText))
        .then(res => res.json())
        .then(data => {
            // console.log(data);
            outputDiv.innerText = data.contents.translated

        })
        .catch(err => {
            outputDiv.innerText= ("error : "+ err)
        })
    

    
}
