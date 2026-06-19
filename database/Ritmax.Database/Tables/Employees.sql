CREATE TABLE [dbo].[Employees]
(
    [Id]           INT            IDENTITY (1, 1) NOT NULL,
    [EmployeeCode] NVARCHAR (20)  NOT NULL,
    [FirstName]    NVARCHAR (100) NOT NULL,
    [LastName]     NVARCHAR (100) NOT NULL,
    [Email]        NVARCHAR (200) NOT NULL,
    [DepartmentId] INT            NOT NULL,
    [Designation]  NVARCHAR (100) NOT NULL,
    [Salary]       DECIMAL (18, 2) NOT NULL,
    [Status]       INT            NOT NULL,
    [Location]     NVARCHAR (100) NULL,
    [Uan]          NVARCHAR (20)  NULL,
    [Pan]          NVARCHAR (20)  NULL,
    [JoinDate]     DATE           NULL,
    [CreatedAt]    DATETIME2 (7)  NOT NULL CONSTRAINT [DF_Employees_CreatedAt] DEFAULT (SYSUTCDATETIME()),
    [UpdatedAt]    DATETIME2 (7)  NULL,
    [IsDeleted]    BIT            NOT NULL CONSTRAINT [DF_Employees_IsDeleted] DEFAULT (0),
    CONSTRAINT [PK_Employees] PRIMARY KEY CLUSTERED ([Id] ASC),
    CONSTRAINT [FK_Employees_Departments] FOREIGN KEY ([DepartmentId]) REFERENCES [dbo].[Departments] ([Id]),
    CONSTRAINT [UQ_Employees_EmployeeCode] UNIQUE ([EmployeeCode])
);
