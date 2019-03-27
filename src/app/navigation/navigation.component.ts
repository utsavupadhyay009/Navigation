import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent implements OnInit {

  @ViewChild('open') open: ElementRef;
  @ViewChild('screen') screen: ElementRef;
  @ViewChild('connectionsBars') connectionsBars: ElementRef;
  @ViewChild('intelligenceBars') intelligenceBars: ElementRef;
  @ViewChild('workspaceBars') workspaceBars: ElementRef;
  title = 'Talent Point';
  isOpen = false;
  isIntelligenceOpen = false;
  isConnectionsOpen = false;
  isWorkspaceOpen = false;
  constructor() { }

  ngOnInit() {
  }
  openMenu() {
    this.isOpen = !this.isOpen;
    if (this.isOpen) {
      this.title = 'Recruitment';
      this.open.nativeElement.classList.add('active');
      this.screen.nativeElement.style.backgroundColor = '#000000';
    } else {
      this.isIntelligenceOpen = false;
      this.isConnectionsOpen = false;
      this.title = 'Talent Point';
      this.open.nativeElement.classList.remove('active');
      this.screen.nativeElement.style.backgroundColor = '#aaa9a9cc';
    }
  }
  openIntelligence() {
    this.isIntelligenceOpen = !this.isIntelligenceOpen;
    const intelligence = this.intelligenceBars.nativeElement;
    if (this.isIntelligenceOpen === true) {
      intelligence.classList.remove('togglePanel');
      intelligence.classList.add('togglePanel2');
      intelligence.children[0].classList.add('active');
      intelligence.children[1].classList.add('active');
    } else {
      intelligence.children[0].classList.remove('active');
      intelligence.children[1].classList.remove('active');
      intelligence.classList.add('togglePanel');
    }
  }
  openConnections() {
    this.isConnectionsOpen = !this.isConnectionsOpen;
    const connections = this.connectionsBars.nativeElement;
    if (this.isConnectionsOpen === true) {
      connections.classList.remove('togglePanel');
      connections.classList.add('togglePanel2');
      connections.children[0].classList.add('active');
      connections.children[1].classList.add('active');
    } else {
      connections.children[0].classList.remove('active');
      connections.children[1].classList.remove('active');
      connections.classList.add('togglePanel');
    }
  }
  openWorkspace() {
    this.isWorkspaceOpen = !this.isWorkspaceOpen;
    const workspace = this.workspaceBars.nativeElement;
    if (this.isWorkspaceOpen === true) {
      workspace.classList.remove('togglePanel');
      workspace.classList.add('togglePanel2');
      workspace.children[0].classList.add('active');
      workspace.children[1].classList.add('active');
    } else {
      workspace.children[0].classList.remove('active');
      workspace.children[1].classList.remove('active');
      workspace.classList.add('togglePanel');
    }
  }
}
