import { MENU_ITEMS } from './main-menu';
import { NbMenuService, NbMenuItem } from '@nebular/theme';
import { AuthService } from '../auth/services/auth.service';

export class STUDENT_MENU_ITEM {
    
    role :string = '';

 
studentMenuItem: NbMenuItem[] = [
  
    {
        title: 'Deposer votre PFE',
        icon: 'edit-2-outline',
        link: 'deposer-pfe',
        
      },
  ]


constructor( private nbMenuService: NbMenuService,     private authService : AuthService,
    ) {
    this.addStudentMenuItem();
  }

  addStudentMenuItem(){
    const token = localStorage.getItem('token')
    const payload = this.authService.getDecodedAccessToken(token);
    console.log(payload)
    this.role = payload.role
      
    if (this.role=="user")
    {
      this.nbMenuService.addItems(this.studentMenuItem);
    }
  }}