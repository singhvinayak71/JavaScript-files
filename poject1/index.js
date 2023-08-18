const fs = require("fs");

const replaceThis = "harry";
const replaceWith = "join";
const preview = true;

try {
    fs.readdir("data", (err,data)=>{
    
        console.log(data);
        for(let index=0; index < data.length; index++){
            const item = data[index];
            let newFile = "data/"+item.replaceAll(replaceThis,replaceWith);
    
            if(!preview){
                fs.rename("data/"+item, newFile, ()=>{
                    console.log("rename success")
                })
            }
            else{
                console.log("Data/"+itme+ "will be rename"+ newFile)
            }
        }
    })
} catch{
 console.log('error has been catched')
}
