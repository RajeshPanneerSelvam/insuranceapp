import {Menu, Item} from './menu';


export const MenuData : Menu[] = [
    new Menu('Claim', 'pi pi-tiket', 
    [new Item('create', 'pi pi-plus', 'claim/create'), new Item('Edit', 'pi pi-comment', 'claim/edit'), 
    new Item('view status', 'pi pi-file-o', 'claim/view'), ], 'claim'),

    new Menu('Policy Dashboard', 'pi pi-desktop', 
    [new Item('renew', 'pi pi-comment', 'policy/renew'), 
    new Item('view status', 'pi pi-file-o', 'policy/viewstatus'), ], 'policy'),

    new Menu('Vehicle', 'pi pi-desktop', 
    [new Item('view', 'pi pi-comment', 'vehicle/viewvehicle')],  'vehicle'),

    new Menu('Accounts', 'pi pi-user', 
    [new Item('my profile', 'pi pi-user-edit', 'accounts/myprofile'), 
    new Item('sign out', '"pi pi-sign-out"', 'accounts/logout'), ], 'accounts')
]