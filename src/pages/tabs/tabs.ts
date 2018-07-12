import { Component } from '@angular/core';

import { HomePage } from '../home/home';
import { ContentsPage} from '../contents/contents';
import { SigninPage} from '../signin/signin';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = HomePage;
  tab2Root = ContentsPage;
  tab3Root = SigninPage;

  constructor() {

  }
}
