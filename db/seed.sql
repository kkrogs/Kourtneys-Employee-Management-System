INSERT INTO department (department_name)
VALUES ("Engineering"),
("Service"),
("Management");

INSERT INTO roles (role_title, role_salary, department_id)
VALUES ("CEO", 200000, 1),
    ("Director", 150000, 1),
    ("Engineer", 125000, 2),
    ("Manager", 100000, 2),
    ("Support", 90000, 3);



INSERT INTO employee (employee_first_name, employee_last_name, employee_role_id, manager_id)
VALUES ("Nina", "Simone", 1, NULL),
       ("Anne", "Hathaway", 1, 1),
       ("Michelle", "Rodriguez", 2, 1),
       ("Jessica", "Simpson", 3, 1),
       ("Cheri", "Jensen", 4, 1),
       ("Kelly", "Swanson", 5, 1);