import { Component } from '@angular/core';
import { LeaveDataService} from '../../core/services/leave-data.service';

@Component({
  selector: 'app-apply-leave',
  templateUrl: './apply-leave.component.html',
  styleUrls: ['./apply-leave.component.scss']
})
export class ApplyLeaveComponent {
  currentDate = new Date();
  public appliedOn = this.currentDate.toLocaleDateString();
  public status = "Pending";

  constructor(private leaveData:LeaveDataService){ }

  getLeaveFormData(data:any){
    this.leaveData.saveLeave(data).subscribe((result)=>{
      console.log(result);
  })
}

}
