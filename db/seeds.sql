INSERT INTO department (name)
VALUES 
('IT'),
('Finance & Accounting'),
('Sales & Marketing'),
('Operations');

INSERT INTO role (title, salary, department_id)
VALUES
('Full Stack Developer', 80000, 1),
('Software Engineer', 120000, 1),
('Accountant', 10000, 2), 
('Finanical Analyst', 150000, 2),
('Marketing Coordindator', 70000, 3), 
('Sales Lead', 90000, 3),
('Project Manager', 100000, 4),
('Operations Manager', 90000, 4);


INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES 
('Anne', 'Hathaway', 2, null),
('Nina', 'Simone', 1, 1),
('Jessica', 'Simpson', 4, null),
('Kelly', 'Jensen', 3, 3),
('Melanie', 'Johnson', 6, null),
('Maria', 'Santos', 5, 5),
('Rachel', 'Peters', 7, null),
('Jenna', 'Smith', 8, 7);
























-- INSERT INTO department (name)
-- VALUES 
-- ('IT'),
-- ('Company Operations'),
-- ('Sales'),
-- ('Management');

-- INSERT INTO role (title, salary, department_id)
-- VALUES
-- ('CEO', 200000, 2),
-- ('Vice President', 180000, 2),
-- ('Operations Manager', 150000, 2), 
-- ('Manager', 125000, 4),
-- ('Software Engineer', 110000, 1), 
-- ('Salesperson', 100000, 3),
-- ('Project Manager', 98000, 4),
-- ('Support', 90000, 1);


-- INSERT INTO employee (first_name, last_name, role_id, manager_id)
-- VALUES 
-- ('Anne', 'Hathaway', 2, 2),
-- ('Nina', 'Simone', 1, null),
-- ('Jessica', 'Simpson', 4, 4),
-- ('Kelly', 'Jensen', 3, 1),
-- ('Melanie', 'Johnson', 6, 3),
-- ('Maria', 'Santos', 5, 7),
-- ('Rachel', 'Peters', 7, 3),
-- ('Jenna', 'Smith', 8, 7);


