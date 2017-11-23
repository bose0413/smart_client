function HomeCtrl(FirebaseService) {
  'ngInject';
   // private API
    function triggerDevice(device) {
      FirebaseService.set("myHome/devices/" + device.id + "/trigger", !device.value);
      FirebaseService.set("myHome/devices/" + device.id + "/process", true);
    }

  // public API
  // ViewModel
  const vm = this;

  vm.home = FirebaseService.child('myHome');
  vm.change = function(device) {
    console.log("Event (button pressed) device id:" + device.id + " type:" + device.type +
           " state: " + device.value + " >> " + !device.value);

    triggerDevice(device);
  };
}

export default {
  name: 'HomeCtrl',
  fn: HomeCtrl
};
