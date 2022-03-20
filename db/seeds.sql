INSERT INTO department (name)
VALUES 
('IT'),
('Company Operations'),
('Sales'),
('Management');

INSERT INTO role (title, salary, department_id)
VALUES
('CEO', 200000, 2),
('Vice President', 180000, 2),
('Operations Manager', 150000, 2), 
('Manager', 125000, 4),
('Software Engineer', 110000, 1), 
('Salesperson', 100000, 3),
('Project Manager', 98000, 4),
('Support', 90000, 1);


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


