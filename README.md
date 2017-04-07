# Angular2Loading

Current loader is with http://materializecss.com/

Usage :
```sh
  <div hasLoading [loadOnInit]="true" [onLoading]="'dashLoad'">
  </div>
  ```
  
   LoadingService.show('dashLoad');  <--before callback 
   
   LoadingService.hide('dashLoad'); <--after
