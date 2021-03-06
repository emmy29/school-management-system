import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ServiceGetClassMasterProvider } from '../../providers/service-get-class-master/service-get-class-master';
import { UploadMarksPage } from '../upload-marks/upload-marks';

@IonicPage()
@Component({
  selector: 'page-upload-marks-info',
  templateUrl: 'upload-marks-info.html',
})
export class UploadMarksInfoPage {
   public TOTAL:any;
   public CID:any;
   public SID:any;
   public TID:any;
   public CTD={
     "CID":"",
     "SID":""
   };


   public INS=[{
    "CID":"",
    "SID":"",
    "TID":""
  }];


  constructor(public navCtrl: NavController, public navParams: NavParams,public GU:ServiceGetClassMasterProvider) {
  }

  getSubject(CID)
  {
    this.CID=CID;
    //console.log(this.postId['classId']);
    this.GU.getAttSubjectFun(CID);
  }

  getTest(SUBJECT)
  {    
    this.SID=SUBJECT;
    this.CTD['CID']= this.CID;
    this.CTD['SID']=this.SID;
    console.log("test id's",this.CTD);
    this.GU.getTestFun(this.CTD);
  }


  Submit(CLASS,SUBJECT,TEST)
{
  
  this.INS['CID']= CLASS;
  this.INS['SID']=SUBJECT;
  this.INS['TID']=TEST;
  console.log("UPLOADING MARKS",this.INS);
  this.GU.getSDCFun(CLASS);
  this.navCtrl.push(UploadMarksPage,{"class":CLASS,"subject":SUBJECT,"test":TEST});

  
}
TM(TOTAL)
{
  this.TOTAL=TOTAL;
  console.log(this.TOTAL);
}

}
