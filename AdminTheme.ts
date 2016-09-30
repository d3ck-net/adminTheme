
import {ReactiveVar} from 'meteor/reactive-var';
export class AdminTheme
{
    private static _navigation:ReactiveVar = new ReactiveVar([]);
    private static _header:ReactiveVar = new ReactiveVar("AdminTheme");
    
    
    /**
     * example:
     * [
     * {
     *  route:"/home",
     *  label:"Home",
     *  class:"fa fa-fw fa-dashboard"
     * },
     * {
     *  route:"/menu2",
     *  label:"/Menu2",
     *  class:"fa fa-fw fa-wrench"
     * }
     *  ]
     * @param data
     */
    public static setNavigation(data:Array)
    {
        this._navigation.set(data);
    }
    
    public static getNavigation():Array
    {
        return this._navigation.get();
    }
    
    
    public static setHeader(header:string)
    {
        this._header.set(header);
    }
    
    public static getHeader():string
    {
        return this._header.get();
    }
}