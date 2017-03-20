## ":after" the Error

Sometimes I'll write a snippet of code as an example to give another developer an alternate solution to a problem rather than writing out a lengthy explanation. 

__This is one of those times.__  I was asked how this might work as an interesting exercise rather than trying to find if this is the optimum way to display 
a conditional message.  So, please read it in that spirit.

Any developer working in a browser based environment will ineveitably use forms.  While forms are themselves one of the oldest and simplest HTML elements to use in their
basic form, to make use of complex forms will require field level editing and the display of error messages to clearly notify the user of the nature of any error(s) and
any required action.

There are many approaches to displaying error messages. Some designs will dictate that a single message field be used to display all error messages or a popup of some sort
to list the errors.

A very common approach is to display any error messages immediately adjacent to the field in error.  This is the focus of this particular tome.

The problem that I have had with placing a message adjacent to any field is that it can quickly make messy work of the actual form layout itself (*example 1*) 
or a complex bit of JavaScript/HTML to inject and remove fields to display the error (*example 2*).

*example 1 - Provide an error message element for each input field* ( [example 1-  jsFiddle](http://jsfiddle.net/deanjennings/9ae4orpm/1/) )

    <!-- HTML -->
    <form method="post" action="#" onsubmit="return editForm()">   
      <div class="field-container">  
        <input name="field1" type="text" />  
        <div class="errorMessage"></div>  
      </div>  
      <div class="field-container">  
        <input name="field2" type="text" />  
        <div class="errorMessage"></div>  
      </div>  
      <div class="field-container">  
        <input name="field3" type="text" />  
        <div class="errorMessage"></div>  
      </div>  
      <div class="field-container">  
        <input name="field4" type="text" />  
        <div class="errorMessage"></div>  
      </div>  
      <div class="field-container">  
        <input name="field5" type="text" />  
        <div class="errorMessage"></div>  
      </div>  
      <input type="submit" />   
    </form>  
    
    /* JavaScript */
    var editForm = function() {
      var fieldList = document.querySelectorAll('input[type="text"]'),
    	errMsg = null;
      for (var index = 0, len = fieldList.length; index < len; index += 1) {
        if (fieldList[index]) {		/* you'd probably test for an error here */
          errMsg=fieldList[index].parentNode.querySelector('div');
          errMsg.className = errMsg.className + ' visibleMessage';
          errMsg.innerHTML = 'Explicit error message';
        } else {
          errMsg=fieldList[index].parentNode.querySelector('div');
          errMsg.className === 'errorMessage';
          errMsg.innerHTML = '';
        }
      }
      return false;
    }
    
***
*example 2 - Inject an error message element for any field with an error*  ( [example - 2 jsFiddle](http://jsfiddle.net/deanjennings/oy34r8h2/2/) )

    <!-- HTML -->
    <form method="post" action="#" onsubmit="return editForm()">  
      <div class="field-container">  
        <input name="field1" type="text" />  
      </div>  
       <div class="field-container">  
        <input name="field2" type="text" />  
      </div>  
      <div class="field-container">  
        <input name="field3" type="text" />  
      </div>  
      <div class="field-container">  
        <input name="field4" type="text" />  
      </div>  
      <div class="field-container">  
        <input name="field5" type="text" />  
      </div>  
       <input type="submit" />  
    </form>  
    
    /* JavaScript */
    editForm = function() {
      var fieldList = document.querySelectorAll('input[type="text"]'),
        errMsg = null;
      for (var index = 0, len = fieldList.length; index < len; index += 1) {
        if (fieldList[index]) {		/* you'd probably test for an error here */
          errMsg=document.createElement('div');
          errMsg.className = 'errorMessage';
          errMsg.appendChild(document.createTextNode('Explicit error message'));
          fieldList[index].parentNode.insertBefore(errMsg, fieldList[index].nextSibling);
        } else {
          errMsg=fieldList[index].parentNode.querySelector('div');
          if (errMsg.className === 'errorMessage') {
            errMsg.parentNode.removeChild(errMsg);
          }
        }
      }
      return false;
    }
    
    /* CSS */
    input[type="text"] {
      margin-bottom: 5px;
    }
    
    .errorMessage {
      color: red;
      margin-bottom: 10px;
    }
    
***
(*The scripts work in the fiddle so rather than try to copy them here run on over to jsFiddle by clicking the links.*)

Notice that, in both examples, the field, and in the case of example 1 the message element, are wrapped in  a "field container".  This is so that 
we can accurately position the error message element.


The method that I am going to demonstrate here is a bit of a hybrid and relies on both CSS and JavaScript but the form is cleaner than example 1 and
the hybrid is a lot less imposing on the DOM.

As we all know, interacting with the DOM is a high overhead proposition.  When we want to conditionally display content, in our case an error message,
by its very nature our objective requires that we do some amount of DOM manipulation.  Our goal here is to minimize that manipulation and take
advantage of those things that automatically happen within the browser whenever possible.

The approach here is to use the CSS "after" pseudo-selector to position a virtual "last child" after the target field. Review the code in example 3.

*example 3 - Position a virtual last child containing a message using the "after" pseudo selector.*  ( [example 3 - jsFiddle](http://jsfiddle.net/deanjennings/nfot4tvs/1/) )

    <!-- HTML -->
    <form method="post" action="#" onsubmit="return editForm()">  
      <div errorMessage>  
        <input name="field1" type="text" />  
      </div>  
      <div errorMessage>  
        <input name="field2" type="text" />  
      </div>  
      <div errorMessage>  
        <input name="field3" type="text" />  
      </div>  
      <div errorMessage>  
        <input name="field4" type="text" />  
      </div>  
      <div errorMessage>  
        <input name="field5" type="text" />  
      </div>  
      <input type="submit" />  
    </form>  
    
    /* JavaScript */
    editForm = function() {
      var fieldList = document.querySelectorAll('input[type="text"]'),
        errMsg = null;
      for (var index = 0, len = fieldList.length; index < len; index += 1) {
        if (fieldList[index]) {		/* you'd probably test for an error here */
          errMsg=fieldList[index].parentNode;
          errMsg.className = errMsg.className + ' error';
          errMsg.setAttribute('errorMessage', 'Explicit error message');
        } else {
          errMsg=fieldList[index].parentNode;
          errMsg.className = errMsg.className.replace(' error', '');
        }
      }
      return false;
    }
    
    /* CSS */
    input[type="text"] {
      margin-bottom: 5px;
      position: relative;
    }
    
    .error {
      margin-bottom: 30px;
      position: relative;
    }
    
    .error:after {
      color: red;
      content: attr(errorMessage) !important;
      left: 0;
      margin-bottom: 10px;
      position: absolute;
      top: 100%;
    }
    
***

So, what have we done here?  Recall that I am not offering this as the best darn way to display a conditional message but in response to a "how would you go about it" question.
No "magic" here ... just some good old fashioned gaming with CSS.

Like both of the previous examples, example 3 requires that we wrap the input elements in a container of sorts.  But this time it's for a completely different reason.
The CSS "after" pseudo can not be applied to input elements. (That's a little gem that many folks don't know so if that's all that you get out of this then at least it's 
something!) So we have provided a wrapper purely to give us an anchor for our virtual element.  This keeps our HTML a bit cleaner than example 1 but it looks about the
same as example 2.

Another little item that many developers have never used is the CSS attribute "content: attr(<attribute>);".  This is the only way of which I know that allows dynamic 
content on the "after" pseudo selector.


So then why not just use example 2?  Well, example 2 requires that we constantly manipulate the DOM by injecting and removing DOM elements.  This is a bit of a no-no.
Our alternative also manipulates the DOM but we are really simply modifying attributes and letting the browser efficiently repaint.  I'll run some timing tests in the near
future and add them here but, again, the objective here was to answer a "how to" question and not to develop the ultimate approach.

One last tidbit.  Notice that the field containers in example 3 all have an empty attribute of 'errorMessage'.  This was done to address a little quirk in, _drumroll please_, IE.
If we add the attribute via JavaScript when we first need it IE does not recognize the new attribute the first time that we reference it.  If we modify/access it a second time
it behaves as expected.  BUT, that first time is probably the event in which we are interested.  By "pre-populating" an empty attribute on each container all browsers tested
processed the attribute as expected.
 