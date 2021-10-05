const fs = require("fs");

const createFile = (path)=>{
    try{
        if(!fs.existsSync(path+"/log")){
            fs.mkdirSync(path+"/log");
        }

        for(let i = 0; i < 10; i++){
            fs.writeFile(path+`/log/log${i}.txt`,'Hi',(err)=>{
                if (err) throw err;
                console.log(`log${i}.txt`)
            })
        }

    }catch (e){
        console.error(e);
    }

}
createFile(__dirname);

const removeFile = (path) =>{

    try{
        if(fs.existsSync(path+"/log")){
            for(let i = 0; i < 10; i++){
                fs.unlink(path+`/log/log${i}.txt`,(err)=>{
                    if (err) throw err;
                    console.log(`delete files...log${i}.txt`);
                })
            }
        }
    }catch (e){
        console.error(e);
    }
}
removeFile(__dirname);