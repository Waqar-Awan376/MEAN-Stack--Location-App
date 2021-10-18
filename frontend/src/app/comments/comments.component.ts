import {Component, Input, OnInit} from '@angular/core';
import {NgForm} from "@angular/forms";
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.css']
})
export class CommentsComponent implements OnInit {
  @Input() id='';
  areCommentsRendered:boolean=false;
  allComments:any;
  constructor(private http:HttpClient) { }

  ngOnInit(): void {
    this.http.get('http://localhost:3000/comments/getComments/'+this.id,{
      responseType:'json'
    }).subscribe((result)=>
    {
      console.log(result);
      this.allComments=result;
      this.areCommentsRendered=true;
    })
  }


  commentHandler(formData: NgForm) {
      this.http.post('http://localhost:3000/comments/postComment',{
        id:this.id,
        comment:formData.value['commentText']
      }).subscribe((responseData)=>
      {
        console.log(responseData);
        formData.reset();
      },error => console.log(error));

  }
}
