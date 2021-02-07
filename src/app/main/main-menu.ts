import { NbMenuService, NbMenuItem } from '@nebular/theme';

 export const MENU_ITEMS: NbMenuItem[] = [
  {
    title: 'Catalogue PFEs',
    icon: 'grid-outline',
    link: 'catalogue-pfes',
    home:true
    
  },
  { 
    title: 'Consulter vos PFEs',
    icon: 'layout-outline',
    link: 'consulter-pfes',
    
  },
  {
    title: 'Deposer votre PFE',
    icon: 'edit-2-outline',
    link: 'deposer-pfe',
    
  },
  {
    title: 'Profile',
    icon: 'lock-outline',
    link: 'profile',
    
  },
  
];
