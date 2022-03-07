function EasyHttp(){
    this.http = new XMLHttpRequest();
}

//Make a GET Request
EasyHttp.prototype.get=function(url,callBack){
    this.http.open('GET',url,true);
    
    let self=this
    this.http.onload=function(){
        if(self.http.status===200){
            callBack(null,self.http.responseText);
        }
        else{
            callBack('Error: ' +self.http.status)
        }
    }
    this.http.send();
}

//Make a POST Request
EasyHttp.prototype.post = function(url,data,callBack){
    this.http.open('POST',url,true);
    this.http.setRequestHeader('Content-type','application/json');
    let self=this
    this.http.onload=function(){
            callBack(null,self.http.responseText);
        }
       this.http.send(JSON.stringify(data))    
    }
//Make a PUT Request
EasyHttp.prototype.put = function(url,data,callBack){
    this.http.open('PUT',url,true);
    this.http.setRequestHeader('Content-type','application/json');
    let self=this
    this.http.onload=function(){
            callBack(null,self.http.responseText);
        }
       this.http.send(JSON.stringify(data))    
    }
//Make a DELETE Request
EasyHttp.prototype.delete=function(url,callBack){
    this.http.open('DELETE',url,true);
    
    let self=this
    this.http.onload=function(){
        if(self.http.status===200){
            callBack(null,'Post Deleted');
        }
        else{
            callBack('Error:',self.http.status)
        }
    }
    this.http.send();
}