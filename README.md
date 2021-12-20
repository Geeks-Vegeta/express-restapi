# express-restapi

### Employee api

<details>
<summary>Create Employee</summary>

```
[POST] https://companyrestful.herokuapp.com/employee/create
BODY

{
    "name": "shreyas mohite",
    "date_of_birth": "29/12/2000"
}
```

</details>

<br>



<details>
<summary>All Employee</summary>

```
[GET] https://companyrestful.herokuapp.com/employee/all

```

</details>


</details>

<br>



<details>
<summary>Get Employee By Id</summary>

```
[GET] https://companyrestful.herokuapp.com/employee/get/<id>

```

</details>


<br>


<details>
<summary>Delete Employee By Id</summary>

```
[DELETE] https://companyrestful.herokuapp.com/employee/delete/<id>

```

</details>



<br>

<details>
<summary>Join Company</summary>

```
[PUT] https://companyrestful.herokuapp.com/employee/join

BODY

{
    "company_name":"name of company",
    "employee_name":"name of employee",
    "date_of_birth": "dob of employee"
}

```

</details>



### Company api


<br>

<details>
<summary>Create Company</summary>

```
[POST] https://companyrestful.herokuapp.com/company/create

BODY

{
    "name":"name of company",
}

```

</details>


<br>

<details>
<summary>Delete Company By ID</summary>

```
[DELETE] https://companyrestful.herokuapp.com/company/delete/<id>

ID is a path parameter

```

</details>


<br>

<details>
<summary>All Company</summary>

```
[GET] https://companyrestful.herokuapp.com/company/all

```

</details>


<br>

<details>
<summary>All Employee of Company</summary>

```
[GET] https://companyrestful.herokuapp.com/company/allemployees/<name>

<name> is path parameter write name of company to get all employees

```

</details>




<br>

<details>
<summary>All Company By Name</summary>

```
[GET] https://companyrestful.herokuapp.com/company/search/<name>
<name> is path parameter name of company

```

</details>



<br>

> First create an employee, 
> After that create a new company 
> Join that company