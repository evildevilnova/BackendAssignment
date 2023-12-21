
1. Get items list data
   method - GET
   http://localhost:8000/getData

2. adding Data
   method - POST
   http://localhost:8000/addData

   Payload - 
   {
    "data":[1,2,3,4]
   }

3. deleting Item
   method - DELETE
   http://localhost:8000/delete/:value

4. updating item 
   method - PUT
   payload - 
   {
      "newData":10
   }
   
