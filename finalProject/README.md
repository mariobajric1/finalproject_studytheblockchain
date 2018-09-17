if you run into bugs
	
	truffle migrate --reset

	or create a new meta mask account and use that

	or restart ganache

Here we let users update a contact

In index.html
	we add a new row with a new form where the user can specify a contact id and new data for the form.

In app.js
	we rename updateState to createContact because that's a better name for it now

	we add a new function called updateCon and in the bindEvents function we tie the event of clicking the button with the updateCon function


