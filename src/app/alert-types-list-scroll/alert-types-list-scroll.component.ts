import {Component, EventEmitter, Inject, NgZone, OnInit} from '@angular/core';
import {AlertType} from "../alert-type";
import {OrionContextBrokerService} from "../services/orion-context-broker-service";
import {ActivatedRoute, Router} from "@angular/router";
import {CommunicationService} from "../services/communication-service";
<<<<<<< HEAD
=======
import {DialogsService} from "../services/dialogs-service";
import {tick} from "@angular/core/testing";
import {fakeAsync} from "@angular/core/testing";
import {Alert} from "../alert";
>>>>>>> 80409101230b1413c8f773517b2aa1e844ad17f8

@Component({
  selector: 'app-alert-types-list-scroll',
  templateUrl: './alert-types-list-scroll.component.html',
  styleUrls: ['./alert-types-list-scroll.component.scss'],
  inputs: ['alertTypesList'],
  outputs: ['onAlertTypeSelected']
})
export class AlertTypesListScrollComponent implements OnInit {
  onAlertTypeSelected: EventEmitter<AlertType> = new EventEmitter();
  alertTypesList: AlertType[];
  selectedAlertType: AlertType;

<<<<<<< HEAD
  constructor(@Inject('OrionContextBroker') public orion: OrionContextBrokerService, private router: Router, private route: ActivatedRoute,private _communicationService: CommunicationService) {
=======
  constructor(@Inject('OrionContextBroker') public orion: OrionContextBrokerService, private router: Router, private route: ActivatedRoute, private _communicationService: CommunicationService) {
>>>>>>> 80409101230b1413c8f773517b2aa1e844ad17f8
  }

  ngOnInit() {
    this.alertTypesList = this.orion.getAlertTypes();
  }

  selectAlertTypeByName(alertTypeName: string) {
    if (!alertTypeName)
      this.selectedAlertType = null;
    else {
      this.selectedAlertType = this.orion.getAlertTypeByName(alertTypeName);
    }
  }

  hideAlerts() {
    this.router.navigate(['/']);
    this.selectedAlertType = null;
  }

  selectAlertType(alertType: AlertType) {

    this._communicationService.mapContent.getCurrentAddress().subscribe((address: string) => {
        //this.orion.submitAlert(this.alertType, this.currentAlert, description, address).subscribe(r=>{});
        //this.dir = address;
        this.router.navigate(['../AlertTypeAlertsList/'+alertType.name+'/'+address]);
      }
    );
    this.onAlertTypeSelected.emit(alertType);
    var prevSelectedAlertTypeName = "";
    if (this.selectedAlertType)
      prevSelectedAlertTypeName = this.selectedAlertType.name;
    this.selectedAlertType = JSON.parse(JSON.stringify(alertType));
    if (this.selectedAlertType.sendImmediately) {
      this.orion.getAlertsByAlertType(alertType.name).subscribe(eventObserved => {
        this.orion.submitAlert(alertType, eventObserved[0], '', this._communicationService.address).subscribe(r=>{
          this.hideAlerts();
        });
      });
    }
    else {
      if (prevSelectedAlertTypeName && prevSelectedAlertTypeName == alertType.name) {
        this.hideAlerts();
      }
    }
  }
}
