import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class ServiceGetClassMasterProvider {
  public URL="http://localhost/schoolapi/"; //for local use
  //public URL="http://ftp.cpckingdom.com/easyschool.cpckingdom.com/schoolapi/"; //for hosting use
  // public URL="https://direct-school.000webhostapp.com/"; //for hosting
  public classData:any;
  public subjectData:any;
  public sessionData:any;
  public termData:any;
  public userData:any;
  public eventData:any;
  public attsubject:any;
  public testData:any;
  public SDC:any;///to fetch student data according to given class/////
  public feedbackData:any;
  public timeslot:any;
  public timeview:any;
  public SubjectOnTimeTable:any;
  public CSData:any;
  //These variable for attendance purpose
  public class:any;
  public subject:any;
  public time:any;
  public date:any;
  public slot:any;
  public attendence:any=[];
  public term:any;
//end
 
  


  constructor(public http: HttpClient) {
    
  }


  getClassFun() //GET DATA FROM CLASS_MASTER_TABLE IN DATABASE----------------------------------------------------->
  {
    var url=this.URL+"getClass_Master.php";
    return this.getClass(url);

  }
  getClass(url)
  {
    //console.log("service call",sessionData);
    return new Promise(resolve=>{
      this.http.post(url,JSON.stringify(" ")).subscribe(data=>{
        if(data['statuscode']==1)
        {
          // alert("Term Added");
          this.classData=data['data'];
          console.log("classes to be display",this.classData);


        }
        else
        {
          alert("No data Found");
        }        
        
         resolve(data);

      },error=>{
        console.log("Error",error);
      });
    });

  }

  // GET SUBJECTS FROM SUBJECT TABLE IN DATABASE---------------------------------------------------------------->
  getSubjectFun()
  {
    var url=this.URL+"getSubjects.php";
    return this.getSubject(url);

  }
  getSubject(url)
  {
    //console.log("service call",sessionData);
    return new Promise(resolve=>{
      this.http.post(url,JSON.stringify(" ")).subscribe(data=>{
        if(data['statuscode']==1)
        {
          // alert("Term Added");
          this.subjectData=data['data'];
          console.log("subjects",this.subjectData);
        }
        else
        {
          alert("no data fetched");
        }        
        
         resolve(data);

      },error=>{
        console.log("Error",error);
      });
    });

  }

  // GET DATA FROM SESSION TABLE IN DATABASE---------------------------------------------------------------->
  getSessionFun()
  {
    var url=this.URL+"getSession.php";
    return this.getSession(url);

  }
  getSession(url)
  {
    //console.log("service call",sessionData);
    return new Promise(resolve=>{
      this.http.post(url,JSON.stringify(" ")).subscribe(data=>{
        if(data['statuscode']==1)
        {
          // alert("Term Added");
          this.sessionData=data['data'];
          console.log("Session",this.sessionData);


        }
        else
        {
          alert("no data fetched");
        }        
        
         resolve(data);

      },error=>{
        console.log("Error",error);
      });
    });

  }

  // GET THE INFO FROM TERM TABLE---------------------------------------------------------------->
  getTermFun()
  {
    var url=this.URL+"getTerm.php";
    return this.getTerm(url);

  }
  getTerm(url)
  {
    //console.log("service call",sessionData);
    return new Promise(resolve=>{
      this.http.post(url,JSON.stringify(" ")).subscribe(data=>{
        if(data['statuscode']==1)
        {
          // alert("Term Added");
          this.termData=data['data'];
          console.log("Terms",this.termData);
        }
        else
        {
          alert("no data fetched");
        }        
        
         resolve(data);

      },error=>{
        console.log("Error",error);
      });
    });

  }

// GET THE INFO FROM USER TABLE---------------------------------------------------------------->
getUserFun()
{
  var url=this.URL+"getUser.php";
  return this.getUser(url);

}
getUser(url)
{
  //console.log("service call",sessionData);
  return new Promise(resolve=>{
    this.http.post(url,JSON.stringify(" ")).subscribe(data=>{
      if(data['statuscode']==1)
      {
        // alert("Term Added");
        this.userData=data['data'];
        console.log("Student of class",this.userData);
        


      }
      else
      {
        alert("no data fetched");
      }        
      
       resolve(data);

    },error=>{
      console.log("Error",error);
    });
  });

}



// GET THE INFO FROM USER TABLE---------------------------------------------------------------->
getEventFun(CalendarData)
{
  var url=this.URL+"getEvent.php";
  return this.getEvent(url,CalendarData);

}
getEvent(url,CalendarData)
{
  //console.log("service call",sessionData);
  return new Promise(resolve=>{
    this.http.post(url,JSON.stringify(CalendarData)).subscribe(data=>{
      if(data['statuscode']==1)
      {
        // alert("Term Added");
        this.eventData=data['data'][0];
        console.log("SchoolEvent",this.eventData);
        //return 1;
      }
      else
      {
        alert("no data fetched");
        //return 0;
      }        
       resolve(data);
    },error=>{
      console.log("Error",error);
    });
  });
}

// GET THE INFO FROM USER TABLE---------------------------------------------------------------->

//For Add TimeTable 
getAttOnTimeSubject(postId)
{
  console.log("POST ID :",postId);
  var url=this.URL+"getAttOnTimeSubject.php";
  return this.getSubjectOnTimeTable(url,postId);
}
getSubjectOnTimeTable(url,postId)
{
  console.log("Class is which we passing to api",postId);
  return new Promise(resolve=>{
    this.http.post(url,JSON.stringify(postId)).subscribe(data=>{
      if(data['statuscode']==1)
      {
        this.SubjectOnTimeTable=data['data'];
        //console.log("Row data",this.attsubject);
        console.log("Subjects",this.SubjectOnTimeTable);
        //return 1;
      }
      else
      {
        this.SubjectOnTimeTable=[];
        alert("no data fetched");
        //return 0;
      }        
       resolve(data);
    },error=>{
      console.log("Error",error);
    });
  });

}
//End HERE



getAttSubjectFun(postId)
{

  console.log("POST ID :",postId);
  var url=this.URL+"getAttSubject.php";
  return this.getAttSubject(url,postId);

}
getAttSubject(url,postId)
{
  console.log("Class is which we passing to api",postId);
  return new Promise(resolve=>{
    this.http.post(url,JSON.stringify(postId)).subscribe(data=>{
      if(data['statuscode']==1)
      {
        this.attsubject=data['data'];
        //console.log("Row data",this.attsubject);
        console.log("Subjects",this.attsubject);
        //return 1;
      }
      else
      {
        alert("no data fetched");
        //return 0;
      }        
       resolve(data);
    },error=>{
      console.log("Error",error);
    });
  });
}

// GET TEST ID FOR A SUBJECT OF SOME CLASS//////////////////////////////////////////////////////////////////////////////////////////////////////////
getTestFun(CTD)
{
  var url=this.URL+"getTest.php";
  return this.getTest(url,CTD);
}

getTest(url,CTD)
{
  return new Promise(resolve=>{
    this.http.post(url,JSON.stringify(CTD)).subscribe(data=>{
      if(data['statuscode']==1)
      {
        this.testData=data['data'];
        //console.log("Row data",this.attsubject);
        console.log("test data",this.testData);
      }
      else
      {
        alert("no data fetched");
      }        
       resolve(data);
    },error=>{
      console.log("Error",error);
    });
  });
}

//GET STUDENTS FOR ATTENDENCE//////////////////////////////////////////////////////////////////
getSDCFun(CLASS)
{
  var url=this.URL+"getAttStudent.php";
  return this.getSDC(CLASS,url);

}
getSDC(CLASS,url)
{
  //console.log("service call",sessionData);
  return new Promise(resolve=>{
    this.http.post(url,JSON.stringify(CLASS)).subscribe(data=>{
      if(data['statuscode']==1)
      {
        // alert("Term Added");
        this.SDC=data['data'];
        for (var i in this.SDC)
        {
          this.attendence[i]=this.SDC[i];
          this.attendence[i].status ="A";
          this.attendence[i].class=this.class;
          this.attendence[i].subject=this.subject;
          this.attendence[i].time=this.time;
          this.attendence[i].date=this.date;
          this.attendence[i].slot=this.slot;
          this.attendence[i].term=this.term;
        }
        console.log("Student of class",this.SDC);
        console.log("temp Attendance sheet",this.attendence);


      }
      else
      {
        alert("no data fetched");
      }        
      
       resolve(data);

    },error=>{
      console.log("Error",error);
    });
  });

}
//GET SPECIFIC TERM FOR ATTENDENCE ONLY
getAttTermfun(t)
{
  var url=this.URL+"getAttTerm.php";
  return this.getAttTerm(url,t);

}
getAttTerm(url,t)
{
  return new Promise(resolve=>{
    this.http.post(url,JSON.stringify(t)).subscribe(data=>{
      if(data['statuscode']==1)
      {
        this.term=data['data'];
        console.log("Term for Att",this.term);
      }
      else
      {
        alert("no data fetched");
      }        
       resolve(data);
    },error=>{
      console.log("Error",error);
    });
  });

}


// GET FEEDBACK INFO FROM FEEDBACK TABLE IN DATABASE---------------------------------------------------------------->
getFeedbackFun()
{
  var url=this.URL+"getFeedback.php";
  return this.getFeedback(url);

}
getFeedback(url)
{
  //console.log("service call",sessionData);
  return new Promise(resolve=>{
    this.http.post(url,JSON.stringify(" ")).subscribe(data=>{
      if(data['statuscode']==1)
      {
        this.feedbackData=data['data'];
        //console.log("FEEDBACK",this.feedbackData);
      }
      else
      {
        alert("no data fetched");
      }        
       resolve(data);
    },error=>{
      console.log("Error",error);
    });
  });
}

//get Time Table for Current Class

getCurrentTimeTable(Data)
{
  var url=this.URL+"getCurrentTimeTable.php";
  return this.FetchViewTimeTable(url,Data);
}

FetchViewTimeTable(url,Class)
{
  console.log("Get Time Table of Class-->",Class);
  return new Promise(resolve=>{
    this.http.post(url,JSON.stringify(Class)).subscribe(data=>{
      if(data['statuscode']==1)
      {
        this.timeview=data['data'];
        //console.log("Row data",this.attsubject);
        console.log("TimeTable for Current Class",this.timeview);
        //return 1;
      }
      else
      {
        this.timeview=[
          {SUBJECT_ID: "NA", SUBJECT_NAME: "NA", TIME_SLOT: "NA", DAY: "NA"}
        ];
        alert("No Time Table");
        //return 0;
      }        
       resolve(data);
    },error=>{
      console.log("Error",error);
    });
  });
}

//FOR ADDING TIME TABLE
getSlot(Data)
{
  var url=this.URL+"getTimeSlot.php";
  return this.getTIMESLOT(url,Data);
}

getTIMESLOT(url,CLASSID)
{
  console.log("GET TIME SLOT FOR CLASS ID: ",CLASSID);
  return new Promise(resolve=>{
    this.http.post(url,JSON.stringify(CLASSID)).subscribe(data=>{
      if(data['statuscode']==1)
      {
        this.timeslot=data['data'];
        console.log("Subject TIME SLOT",this.timeslot);
        //return 1;
      }
      else
      {
        alert("NO TIME SLOT IS FREE");
        this.timeslot=[];

        //return 0;
      }        
       resolve(data);
    },error=>{
      console.log("Error",error);
    });
  });
}

// fetch data of students according to class and session---------------------------------------------------------------->

getCSFun(CS)
{
  var url=this.URL+"emmy.php";
  return this.getCS(url,CS);
}

getCS(url,CS)
{
  console.log("View Students of Class: ",CS);
  return new Promise(resolve=>{
    this.http.post(url,JSON.stringify(CS)).subscribe(data=>{
      if(data['statuscode']==1)
      {
        this.CSData=data['data'];
        console.log("Students",this.CSData);
        //return 1;
      }
      else
      {
        alert("No Student found");
        //return 0;
      }        
       resolve(data);
    },error=>{
      console.log("Error",error);
    });
  });
}

}



// THIS IS THE END OF FILE