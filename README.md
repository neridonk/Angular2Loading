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
   LoadingService.hide('dashLoad');
```

Example usage
```sh
 LoadingService.hide('myElement');
  this.licenceService.getLicence(licenceId).subscribe(
      data => LoadingService.hide('myElement'),
      err => err,
     }
    );
```
