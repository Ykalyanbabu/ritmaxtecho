SET NOCOUNT ON;

-- Company
SET IDENTITY_INSERT [dbo].[Companies] ON;
INSERT INTO [dbo].[Companies] ([Id], [Name], [Address], [City], [Gstin], [Pan], [Phone], [CreatedAt], [IsDeleted])
VALUES (1, N'RITMAX Techo Systems Pvt. Ltd.', N'Plot No. 12, Cyber Towers Road, HITEC City',
        N'Madhapur, Hyderabad, Telangana 500081', N'36AABCP1234A1Z5', N'AABCP1234A', N'+91 40 4012 3456',
        SYSUTCDATETIME(), 0);
SET IDENTITY_INSERT [dbo].[Companies] OFF;

-- Departments
SET IDENTITY_INSERT [dbo].[Departments] ON;
INSERT INTO [dbo].[Departments] ([Id], [CompanyId], [Name], [CreatedAt], [IsDeleted]) VALUES
(1, 1, N'Engineering', SYSUTCDATETIME(), 0),
(2, 1, N'Sales', SYSUTCDATETIME(), 0),
(3, 1, N'Marketing', SYSUTCDATETIME(), 0),
(4, 1, N'Finance', SYSUTCDATETIME(), 0),
(5, 1, N'HR', SYSUTCDATETIME(), 0);
SET IDENTITY_INSERT [dbo].[Departments] OFF;

-- Employees (Status: 0=Active, 1=Inactive, 2=OnLeave)
SET IDENTITY_INSERT [dbo].[Employees] ON;
INSERT INTO [dbo].[Employees] ([Id], [EmployeeCode], [FirstName], [LastName], [Email], [DepartmentId], [Designation], [Salary], [Status], [Location], [Uan], [Pan], [JoinDate], [CreatedAt], [IsDeleted]) VALUES
(1, N'EMP-001', N'Priya', N'Sharma', N'priya.s@payrollpro.in', 1, N'Senior Developer', 85000, 0, N'Hyderabad', N'101234567890', N'ABCDE1234F', '2022-01-10', SYSUTCDATETIME(), 0),
(2, N'EMP-002', N'Rahul', N'Reddy', N'rahul.r@payrollpro.in', 2, N'Account Executive', 62000, 0, N'Hyderabad', N'101234567891', N'FGHIJ5678K', '2021-03-15', SYSUTCDATETIME(), 0),
(3, N'EMP-003', N'Ananya', N'Rao', N'ananya.r@payrollpro.in', 3, N'Marketing Manager', 71000, 2, N'Hyderabad', N'101234567892', N'KLMNO9012P', '2020-08-01', SYSUTCDATETIME(), 0),
(4, N'EMP-004', N'Vikram', N'Singh', N'vikram.s@payrollpro.in', 4, N'Financial Analyst', 58000, 0, N'Hyderabad', NULL, NULL, NULL, SYSUTCDATETIME(), 0),
(5, N'EMP-005', N'Lakshmi', N'Devi', N'lakshmi.d@payrollpro.in', 5, N'HR Specialist', 54000, 1, N'Hyderabad', NULL, NULL, NULL, SYSUTCDATETIME(), 0);
SET IDENTITY_INSERT [dbo].[Employees] OFF;

-- Bank details
SET IDENTITY_INSERT [dbo].[EmployeeBankDetails] ON;
INSERT INTO [dbo].[EmployeeBankDetails] ([Id], [EmployeeId], [BankName], [AccountNumber], [Ifsc], [CreatedAt], [IsDeleted]) VALUES
(1, 1, N'HDFC Bank', N'XXXXXX7890', N'HDFC0001234', SYSUTCDATETIME(), 0),
(2, 2, N'State Bank of India', N'XXXXXX4521', N'SBIN0001234', SYSUTCDATETIME(), 0),
(3, 3, N'ICICI Bank', N'XXXXXX3344', N'ICIC0001234', SYSUTCDATETIME(), 0);
SET IDENTITY_INSERT [dbo].[EmployeeBankDetails] OFF;

-- Payroll run
SET IDENTITY_INSERT [dbo].[PayrollRuns] ON;
INSERT INTO [dbo].[PayrollRuns] ([Id], [CompanyId], [Period], [PayDate], [Status], [CreatedAt], [IsDeleted])
VALUES (1, 1, N'June 2026', '2026-06-30', N'Completed', SYSUTCDATETIME(), 0);
SET IDENTITY_INSERT [dbo].[PayrollRuns] OFF;

-- Payslips
SET IDENTITY_INSERT [dbo].[Payslips] ON;
INSERT INTO [dbo].[Payslips] ([Id], [EmployeeId], [PayrollRunId], [Period], [PayDate], [PaidDays], [LopDays], [GrossEarnings], [TotalDeductions], [NetPay], [CreatedAt], [IsDeleted]) VALUES
(1, 1, 1, N'June 2026', '2026-06-30', 22, 0, 85000, 12750, 72250, SYSUTCDATETIME(), 0),
(2, 2, 1, N'June 2026', '2026-06-30', 22, 0, 62000, 9300, 52700, SYSUTCDATETIME(), 0),
(3, 3, 1, N'June 2026', '2026-06-30', 20, 2, 71000, 10650, 60350, SYSUTCDATETIME(), 0);
SET IDENTITY_INSERT [dbo].[Payslips] OFF;

-- Payslip line items (LineType: 0=Earning, 1=Deduction)
SET IDENTITY_INSERT [dbo].[PayslipLineItems] ON;
INSERT INTO [dbo].[PayslipLineItems] ([Id], [PayslipId], [Description], [Amount], [LineType], [CreatedAt], [IsDeleted]) VALUES
(1, 1, N'Basic Salary', 75000, 0, SYSUTCDATETIME(), 0),
(2, 1, N'HRA', 7500, 0, SYSUTCDATETIME(), 0),
(3, 1, N'Special Allowance', 2500, 0, SYSUTCDATETIME(), 0),
(4, 1, N'Provident Fund (PF)', 5270, 1, SYSUTCDATETIME(), 0),
(5, 1, N'ESI', 780, 1, SYSUTCDATETIME(), 0),
(6, 1, N'Professional Tax (Telangana)', 200, 1, SYSUTCDATETIME(), 0),
(7, 1, N'Income Tax (TDS)', 6500, 1, SYSUTCDATETIME(), 0);
SET IDENTITY_INSERT [dbo].[PayslipLineItems] OFF;

-- Roles and admin user
SET IDENTITY_INSERT [dbo].[Roles] ON;
INSERT INTO [dbo].[Roles] ([Id], [Name], [Description], [CreatedAt], [IsDeleted])
VALUES (1, N'HR Administrator', N'Full HR and payroll access', SYSUTCDATETIME(), 0);
SET IDENTITY_INSERT [dbo].[Roles] OFF;

SET IDENTITY_INSERT [dbo].[Users] ON;
INSERT INTO [dbo].[Users] ([Id], [Email], [DisplayName], [PasswordHash], [IsActive], [CreatedAt], [IsDeleted])
VALUES (1, N'admin@payrollpro.in', N'Rajesh Kumar', N'$2a$placeholder', 1, SYSUTCDATETIME(), 0);
SET IDENTITY_INSERT [dbo].[Users] OFF;

SET IDENTITY_INSERT [dbo].[UserRoles] ON;
INSERT INTO [dbo].[UserRoles] ([Id], [UserId], [RoleId], [CreatedAt], [IsDeleted])
VALUES (1, 1, 1, SYSUTCDATETIME(), 0);
SET IDENTITY_INSERT [dbo].[UserRoles] OFF;
