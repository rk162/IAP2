// Bootstrap dependencies

// window.$ = window.jQuery = require('jquery'); // required for bootstrap
// import $ from "jquery"
// window.Popper = require('popper.js'); // required for tooltip, popup...
// import Popper from "popper.js"
import Bootstrap from "bootstrap"
import 'bootstrap/dist/css/bootstrap.css';
import '../scss/main.scss' // include bootstrap css file with own modifications

// tooltip and popover require javascript side modification to enable them (new in Bootstrap 4)
// use tooltip and popover components everywhere
// $(function() {
//     $('[data-toggle="tooltip"]').tooltip()
//     $('[data-toggle="popover"]').popover()
// })
// $(document).ready.alert('hello');
$("button").click(function() {
    alert("The paragraph was clicked.");
});
// Your code here....