import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  itemCount : number;
  questionText: string;
  questions = ['Which Crypto coin you bought the most ?  ', 'Etherium smart contcats are built in which language ?', 'Lite coin is  forked from which base crypto coin ?' ];

  constructor() { }

  ngOnInit() {
    this.itemCount = this.questions.length;
  }

  addQuestion(){
    this.questions.push(this.questionText);
    this.questionText ='';
    this.itemCount=this.questions.length;
  }

  removeQuestion(i){
    this.questions.splice(i,1);
  }

}
