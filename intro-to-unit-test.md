## Introduction to Unit Test
Goal(s): 
* Learn why make unit tests 
* Learn how they help us write clean and maintainable code

### Why are unit tests important?
- Unit tests are the mos basic tests that are very vital to ensure our code is good.
- They are reliable b/c they are easy to write and understand what behavior should be tested. 
- Making unit tests enforces certain best practices in our code. 

### What are benefits of unit test being easy to write?
- Unit tests focuses on 1 thing: a fxn, conditional statement, or a low-level (simple) display component. It ensures it is doing the 1 thing it should be doing well. 
- Besides 'the happy path' (expected and desired behavior), unit tests lets us test edge cases and error handling (the unexpected)
- This confidence in our units (small code blocks) ensures we can re-use code many times without testing it again and be certain that it works in more complex functions that 
use many of the units we've tested. 

### How does unit test encourage best practices in code?
- While taking time to write test and code can use up more time than doing one or the other, Following best coding practices make writing test easiers, less boring or tough

### How does unit test encourage the DRY principle and abstractions?
- `DRY Principle` = Don't Repeat Yourself which reminds us to make functions out of repeated code/logic to make it re-usable
- DRY (coding) makes code more maintainable by keeping logic in one place so if we need to update the logic, we only need to change it in one place plus we can re-use logic without re-writing it's logic
- DRY (testing) = test once for a fxn and test it in a way that is flexible but not too specfic 

### How does unit test encourage the single responsibility principle?
- `Single responsibility principle` = a fxn should do exactly 1 thing only. 
- Example: A fxn called `getUser` should not parse user data, change it or use it to determine user's status. It should only get and return the user
- Parsing user data can be delegated to a `parseUser` function, and gettting the status for `getUserStatus`
- At first, it seems like overkill but it makes testing much easier to do easily for code that make requests. 

### How does unit tests encourage separation of concerns and clean interfaces?
- `The separation of concerns` = we should contain different concepts (concerns) into separate modules in the code 
- Some concerns rely on others but if we didn't try to split them as much as possible. 
- If we changed the logic in one section, we would need to update it in any other section that used it as well. the code would be too tough to maintain.
- We avoid this, we create clean interfaces that are simple and mantainable  shown by other sections of code that can be relied by other sections
- WE can change the stuff under the hood and leave the interface alone since it does not need to know about tha under-the-hood code.

#### In laymen's term: Separation of Concerns and Clean Interface
- 

Example - Separation of Conceerns - add two numbers 

```python
# Add numbers before separation of concerns and clean interfaces
def add_numbers(a, b):
    result = a + b
    return result
```

```python
# add numbers after separation of concerns and clean interfacces
def _add_numbers(a, b):
    result = _add_numbers_implementation(a, b)
    return result

def _add_number_implementation(a, b):
    # We can change the logic under the hood aka this fxn w/o ruining how it displays for the user.
    result = a + b + 10
    return result
```

#### What is the benefit of this approach?
- The other parts of the codebase, just use `add_number` (display/presentation logic) without worrying about the magic under the hood `add_number_implementation` (business logic/actual work).
- It keeps code more simple and managable it is also a vital part of making react components as well. 