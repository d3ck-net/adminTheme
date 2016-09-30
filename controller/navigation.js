/**
 * Created by jms on 29/09/16.
 */

import {AdminTheme} from '../AdminTheme';

Template.navigation.helpers({
   header:function()
   {
       return AdminTheme.getHeader();
   }
});