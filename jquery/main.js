$(document).ready(function () {
   // do click warning style for disabled buttons (Sorry Admin proviledge needed! contact ADMIN)

   $('.activities-dialog').dialog({
      autoOpen: false,
      modal: true,
      draggable: false,
      resizable: false,
   
   });

    

   $('#icon-text-new-account').click(function () {
      $('#depositMoneyDialog, #checkBalanceDialog').dialog('close');
      $('#newAccountDialog').dialog("open");
   
   
   });
   
   $('#icon-text-deposit').click(function () {
      $('#depositMoneyDialog').dialog('open');
   
   });
   
   $('#icon-text-check-balance').click(function () {
      $('#checkBalanceDialog').dialog('open');
   
   });
   $('#icon-text-withdraw').click(function () {
      $('#withdrawDialog').dialog('open');
   
   });
   $('#icon-text-view-transaction').click(function () {
      $('#transactionHistoryDialog').dialog('open');
   
   });
   $('#icon-text-close-account').click(function () {
      $('#closeAccountDialog').dialog('open');
   
   });
   $('#icon-text-support').click(function () {
      $('#contactSupportDialog').dialog('open');
   
   });
   $('#icon-text-logout').click(function () {
      window.location = "logout";
   
   });



});