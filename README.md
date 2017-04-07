# Angular2Loading

Current loader is with http://materializecss.com/

Usage :
```sh
  <div hasLoading [loadOnInit]="true" [onLoading]="'dashLoad'">
  </div>
  ```
  
  before callback 
  ```sh
   LoadingService.show('dashLoad');  
     ```
     
   callback finished
     ```sh
   LoadingService.hide('dashLoad'); <--after
    ```
