# WHINE - WORKFORCE HARMONIZATION & INTEGRATED NETWORKING ENGINE

## DATABASE SCHEMA DESIGN

![WHINE](https://github.com/Nooklier/WHINE/assets/108591949/ccce5786-5a07-47c7-9cb9-498da984b844)


## API DOCUMENTATION
GET THE CURRENT USER (AUTHENTICATION NOT REQUIRED)
> REQUEST
> > - [ ] Method: GET
> > - [ ] URL: /api/sessions
> > - [ ] Body: None
> RESPONSES
> >
> > SUCCESSFUL RESPONSE WHEN THERE IS A LOGGED IN USER
> > - [ ] Status Code: 200
> > - [ ] Headers:
> > > * Content-Type: application/json
> > - [ ] Body:
>>> ```json
>>>    {
>>>      "user": {
>>>        "id": 1,
>>>        "firstName": "John",
>>>        "lastName": "Smith",
>>>        "username": "JohnSmith"
>>>      }
>>>    }
>>>```
> > SUCCESSFUL RESPONSE WHEN THERE IS NO LOGGED IN USER
> > - [ ] Status Code: 200
> > - [ ] Headers:
> > > * Content-Type: application/json
> > - [ ] Body:
>>> ```json
>>>    {
>>>      "user": null
>>>    }
>>>    ```

LOG IN A USER (AUTHENTICATION NOT REQUIRED)
> REQUEST
> > - [ ] Method: POST
> > - [ ] URL: /api/login
> > - [ ] Headers:
> > > * Content-Type: application/json
> > - [ ] Body:
> >> ```json
> >> {
> >>  "credential": "demo",
> >>  "password": "secret password"
> >> }
> >>```
>>
> RESPONSES
